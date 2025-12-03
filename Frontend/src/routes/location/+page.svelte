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

<div class="p-4">
	{#if error}
		<p class="text-red-500">{error}</p>
	{:else}
		<p><strong>Latitude:</strong> {lat}</p>
		<p><strong>Longitude:</strong> {lon}</p>
	{/if}
</div>
