<script>
	import Breadcrumb from '$lib/atoms/Breadcrumb.svelte';
	import NavBottom from '$lib/organisms/NavBottom.svelte';

	let { children } = $props();
</script>



<header>
	<Breadcrumb />
	<NavBottom />
</header>

<main>
{@render children()}
</main>

<style>

:global(*) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:global(body) {
        display: flex;
        flex-direction: column;
    }

    main {
        flex: 1;
    }
</style>
