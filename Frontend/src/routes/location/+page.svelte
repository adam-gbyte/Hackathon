<script>
	import { onMount, onDestroy } from "svelte";

	let lat = null;
	let lon = null;
	let error = "";
	let watchId = null;

	onMount(() => {
		if ("geolocation" in navigator) {
			watchId = navigator.geolocation.watchPosition(
				(pos) => {
					lat = pos.coords.latitude;
					lon = pos.coords.longitude;
				},
				(err) => {
					error = err.message;
				}
			);
		} else {
			error = "Geolocation tidak didukung browser";
		}
	});

	onDestroy(() => {
		if (watchId) navigator.geolocation.clearWatch(watchId);
	});
</script>

<section class="p-4 h-screen mt-23 scroll-mt-25 flex items-center justify-center w-screen">
    <div class="max-w-3xl w-full h-full text-center justify-center flex flex-col items-center dark:bg-gray-600 bg-gray-200 rounded-xl">
        {#if error}
            <p class="text-red-500">{error}</p>
        {:else}
            <p><strong>Latitude:</strong> {lat}</p>
            <p><strong>Longitude:</strong> {lon}</p>
        {/if}
    </div>
</section>
