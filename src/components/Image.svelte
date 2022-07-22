<script>
    export let src;

    let loading = false;
    const img = new Image();

    $: {
        img.src = src;
        loading = true;

        img.onload = () => {
            loading = false;
        };
    }
</script>

{#if !loading}
    <img {src} alt="A cat" class="" />
{:else}
    <div class="h-[500px] flex items-center">
        <img
            src="https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"
            alt="Loading..."
        />
    </div>
{/if}
