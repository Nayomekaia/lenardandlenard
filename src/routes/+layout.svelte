<script>
	import Breadcrumb from "$lib/atoms/Breadcrumb.svelte";
	import NavBottom from "$lib/organisms/NavBottom.svelte";

	let { children } = $props();
</script>

<header>
	<NavBottom />
	<Breadcrumb />
</header>

<main>
{@render children()}
</main>

<footer>
</footer>

<style>

:global(*) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:global(body)  {
		background-color: black;
	}


</style>
