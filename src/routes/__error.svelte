<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
        props: {
          status: status,
				  message: `${error.message}`
			}
		};
	}
</script>

<script>
  export let status;
  export let message;
</script>

<h1>Error {status}</h1>
<span>{message}</span>
