<script>
    import LogoObject from "$lib/three-logo/LogoObject.svelte";
</script>

<LogoObject />


<section class="content">

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
            #070707 0%,
            #4e5076 3%,
            #B49A86 10%,
            #bcbee0 49%,
            #B49A86 73%,
             #4e5076 87%,
            #000000 100%
        ); 
        background-repeat: no-repeat;
    }
</style>

