<script>
	export let limit = -1;

	import productsData from '$lib/data/products.yaml';
	const products = productsData.products;
</script>
<div id="products-container">
	{#each (+limit === -1 || isNaN(+limit) ? products : products.slice(0,+limit)) as product}
		<a href={product.link} target="_blank" class="product" class:disabled={!product.link}>
			<img src={product.image || (product.wip ?
				"https://via.placeholder.com/256x144?text=WIP":
				"https://via.placeholder.com/256x144?text=No+Image"
				)} alt="{product.title} thumbnail"/>
			<h3>{product.title}</h3>
			<span class="description">{product.description}</span>
			<br />
			<span class="footer">
				{@html (!!product.link ? "<span class='link'>Explore &gt;</span>" : (product.wip ? "<strong>Work in Progress</strong>" : ""))}
			</span>
		</a>
	{/each}
</div>
<style lang="scss">
	#products-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-gap: 16px;
		margin: 16px auto;
		max-width: 768px;
	}

	.product {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		padding: 16px;
		text-align: center;
		@include card-style-interactive;
		.description {
			flex-grow: 2;
			vertical-align: middle;
		}
		img {
			max-width: 100%;
			height: 150px;
			object-fit: contain;
		}
	}
</style>
