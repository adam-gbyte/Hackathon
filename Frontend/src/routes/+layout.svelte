<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Rekomendasi Produk UMKM</title>
</svelte:head>

<Navbar />

<main class="h-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 ">
	{@render children()}
</main>
