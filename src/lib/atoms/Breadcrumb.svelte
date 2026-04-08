<script>
    // Import the page store from SvelteKit to get the current URL
    import { page } from "$app/stores";

    // Import derived to create new reactive stores based on existing ones
    import { derived } from "svelte/store";

    // Split the URL pathname into segments (remove empty strings)
    const segments = derived(page, ($page) =>
        $page.url.pathname.split("/").filter(Boolean),
    );

    // Get the first segment of the path to display as the main breadcrumb
    const firstBreadcrumb = derived(segments, ($segments) => $segments[0]);

    // Function to format a breadcrumb string
    const format = (breadcrumb) => {
        if (!breadcrumb) return "";
        return String(breadcrumb)
            .replace(/-/g, " ") 
            .replace(/\b\w/g, (c) => c.toUpperCase()); 
    };
</script>

{#if $firstBreadcrumb}
    <!-- Only show breadcrumbs if there is a segment -->
    <nav class="breadcrumb">
        <a href="/">Home</a>
        <!-- Always start with Home -->
        <span class="separator"> \ </span>
        <!-- Separator between breadcrumbs -->
        <a href="/{$firstBreadcrumb}">{format($firstBreadcrumb)}</a>
    </nav>
{/if}

<style>
    a {
        font-size: 16px;
    }

    .separator {
        margin: 0 0.35em 0 0.15em;
    }
</style>
