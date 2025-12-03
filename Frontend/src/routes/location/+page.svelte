<script>
	import { postLocation } from '$lib/api/location';
	import { onMount, onDestroy } from 'svelte';

	let watchId = null;
	let lat = null;
	let lon = null;

	onMount(() => {
		if ('geolocation' in navigator) {
			watchId = navigator.geolocation.watchPosition(
				(pos) => {
					lat = pos.coords.latitude;
					lon = pos.coords.longitude;

					// Kirim ke backend setiap update
					sendLocation(lat, lon);
				},
				(err) => {
					console.error('Error GPS:', err);
				},
				{
					enableHighAccuracy: true
				}
			);
		}
	});

	async function sendLocation(lat, lon) {
		try {
			await postLocation(lat, lon);
		} catch (error) {
			console.error('Gagal kirim lokasi:', error);
		}
	}

	onDestroy(() => {
		if (watchId) navigator.geolocation.clearWatch(watchId);
	});
</script>

<section class="mt-23 flex h-screen w-screen scroll-mt-25 items-center justify-center p-4">
	<div
		class="flex h-full w-full max-w-3xl flex-col items-center justify-center rounded-xl bg-gray-200 text-center dark:bg-gray-600"
	>
		<p><strong>Latitude:</strong> {lat}</p>
		<p><strong>Longitude:</strong> {lon}</p>
	</div>
</section>
