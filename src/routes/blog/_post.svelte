<script>
  export let title;
  export let date;
  export let image;
  let formattedDate = new Date(date).toLocaleDateString();
</script>
<style lang="scss">
  .postFooter {
    font-size: 0.8rem;
    margin-bottom: 32px;
    color: #888;
    /*color: $color-minimal;*/
    /*scss doesn't work for MDsveX atm: https://github.com/pngwn/MDsveX/issues/116*/
  }
  .featuredImage {
    width: 100%;
    height: auto;
    max-height: 200px;
    margin-bottom: 32px;
    object-fit: contain;
  }
  article {
    line-height: 1.7;
  }
</style>

<h1>{title}</h1>
{#if image}
  <img class="featuredImage" src="{image}" alt=""/>
{/if}
<br />
<article>
  <slot />
</article>
<hr />
<div class="postFooter"><div class="postDate">Published: {formattedDate}</div></div>
