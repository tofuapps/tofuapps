<script>
	import { page } from "$app/stores";

	const status = $page.status || 500;
	const message = $page.error.message || "Internal Server Error";
</script>

<h1>Error {status}</h1>
<span>{message}</span>

<style lang="scss">
	h1 {
		display: block;
		text-align: center;
	}
	span {
		display: block;
		text-align: center;
	}
</style>
