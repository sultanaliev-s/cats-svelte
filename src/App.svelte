<script>
  import { onMount } from "svelte";
  import { getPicture } from "./api";
  import Image from "./components/Image.svelte";

  let picture = {};

  async function update() {
    console.log(2);
    const res = await getPicture();
    picture = res[0];
  }

  onMount(async () => {
    update();
  });
</script>

<main class="w-screen h-screen flex flex-col justify-center items-center">
  <Image src={picture.url} />
  <button
    on:click={update}
    class="m-4 p-4 bg-red-500 hover:bg-red-600 rounded-md text-white"
    >UPDATE</button
  >
</main>
