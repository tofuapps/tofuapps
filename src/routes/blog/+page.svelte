<!-- Info: Most of the code for blog posts has been referenced from https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog -->
<script>
  export let data;
  function limitTextWithEllipsis(text, limit) {
    if (text.length > limit) {
      return text.substring(0, limit) + '...'
    } else {
      return text
    }
  }
</script>
<style lang="scss">
  .postList {
    list-style: none;
    padding: 0;
      .post {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        @include card-style-interactive;
        padding: 16px;
        margin: 16px 0;
        min-height: 128px;
          h2 {
            margin-top: 0;
          }
          img {
            flex-grow: 0;
            width: auto;
            max-width: 200px;
            height: 128px;
            object-fit: contain;
            border-radius: 4px;
          }
          .text {
            flex-grow: 1;
            vertical-align: middle;
            margin-right: 16px;
          }
          .summary {
            margin-top: 16px;
            margin-bottom: 16px;
          }
          .metadata {
            font-size: 0.8rem;
            text-align: right;
            color: $color-minimal;
          }
          .read-more {
            color: $color-primary;
            cursor: pointer;
          }
      }
      @media (max-width: 600px) {
        .post {
          flex-flow: column-reverse nowrap;
            h2 {
              text-align: center;
            }
            .text {
              margin-right: unset;
              margin-top: 16px;
            }
        }
      }
  }
</style>

<h1>Blog</h1>
<div class="postList">
  {#each data.posts as post}
    <a class="post" href={post.path}>
      <div class="text">
        <h2>
          {post.meta.title}
        </h2>
        {#if post.meta.summary}
        <div class="summary">
          {limitTextWithEllipsis(post.meta.summary, 200)}
          <b class="read-more">Read More</b>
        </div>
        {/if}
        <div class="metadata">Published {new Date(post.meta.date).toLocaleDateString()}</div>
      </div>
      {#if post.meta.image}
        <img src={post.meta.image} alt=""/>
      {/if}
    </a>
  {/each}
</div>
