<script>
	import Breadcrumb from "$lib/atoms/Breadcrumb.svelte";
	import NavBottom from "$lib/organisms/NavBottom.svelte";
	import NavTop from "$lib/organisms/NavTop.svelte";
	import Footer from "$lib/organisms/Footer.svelte";

	let { children } = $props();
</script>

<header>
 	<NavTop />
	<NavBottom />
	<Breadcrumb />
</header>

<main>
{@render children()}
</main>


  <Footer />


<style>



:global(*) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
