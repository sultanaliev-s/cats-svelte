<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import { onMount } from "svelte";
  import { getPicture } from "./api";
  import Image from "./Image.svelte";

  let picture = {};
  let isLoading = true;

  async function update() {
    isLoading = true;
    const res = await getPicture();
    picture = res[0];
    isLoading = false;
  }
  onMount(async () => {
    update();
  });
</script>

<main class="w-screen h-screen flex flex-col justify-center items-center">
  {#if !isLoading}
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <Image src={picture.url} />
  {:else}
    <div class="h-[500px] flex items-center">
      <img
        src="https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"
        alt="Loading..."
      />
    </div>
  {/if}
  <button
    on:click={update}
    class="m-4 p-4 bg-red-500 hover:bg-red-600 rounded-md text-white"
    >UPDATE</button
  >
</main>
