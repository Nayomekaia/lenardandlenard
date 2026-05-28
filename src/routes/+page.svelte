<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<script>
    import LogoScene from "$lib/three/LogoScene.svelte";
</script>

<LogoScene />

<section class="content">
    <h1>My Website</h1>
</section>

<style>
    .content {
        position: relative;
        z-index: 10;
        color: white;
    }

    :global(body) {

        background: linear-gradient(
            180deg,
            #080303 0%,
            #1e1e1e 7%,
            #B49A86 27%,
            #bcbee0 49%,
            #4e5076 73%,
            #191b3f 87%,
            #000000 100%
        ); 
        background-repeat: no-repeat;
    }
</style>

