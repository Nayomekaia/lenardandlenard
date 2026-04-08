<script>
	import Breadcrumb from '$lib/atoms/Breadcrumb.svelte';
	import NavBottom from '$lib/organisms/NavBottom.svelte';

	let { children } = $props();
</script>



<header>
	<Breadcrumb />
	<NavBottom />
</header>

{@render children()}
