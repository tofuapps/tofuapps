<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import "../app.scss";
  import "@fontsource/exo-2/400.css";
  import "@fontsource/exo-2/400-italic.css";
  import "@fontsource/exo-2/700.css";
  import "@fontsource/exo-2/700-italic.css";
</script>

<Header />
<slot />
<Footer />
