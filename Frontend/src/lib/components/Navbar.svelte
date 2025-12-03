<script>
	import { onMount } from 'svelte';
	import { Moon, Sun, Menu, X } from 'lucide-svelte';

	// THEME TOGGLER
	let theme = 'light';
	onMount(() => {
		const saved = localStorage.getItem('theme');
		if (saved) {
			theme = saved;
		} else {
			theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
		document.documentElement.classList.toggle('dark', theme === 'dark');
	});

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		localStorage.setItem('theme', theme);
		document.documentElement.classList.toggle('dark', theme === 'dark');
	}

	// MOBILE MENU TOGGLER
	let isMenuOpen = false;
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav
	class={`fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-gray-100 px-10 py-6 md:flex-row dark:bg-gray-900 dark:text-white`}
>
	<h1 class="text-xl font-bold text-gray-900 md:text-2xl dark:text-gray-200">REKOMENDASI PRODUK UMKM</h1>

	<div class={`hidden items-center space-x-6 md:flex`}>
		<ul class="flex items-center space-x-8 text-sm font-semibold">
			<li><a href="#home" class="hover:text-[#ff48c4]">HOME</a></li>
			<li><a href="#about" class="hover:text-[#ff48c4]">ABOUT</a></li>
			<li><a href="#contacts" class="hover:text-[#ff48c4]">CONTACTS</a></li>
		</ul>
		<button
			on:click={toggleTheme}
			class="cursor-pointer rounded-md border border-gray-300 bg-gray-100 p-2 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
		>
			{#if theme === 'dark'}
				<Sun />
			{:else}
				<Moon />
			{/if}
		</button>
	</div>
</nav>

<!-- Mobile Menu Button -->
<button
	class="fixed top-4 right-4 z-70 cursor-pointer rounded-md border border-gray-300 bg-gray-100 p-2 text-gray-800 md:hidden dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
	on:click={toggleMenu}
	aria-label="Toggle Menu"
>
	{#if isMenuOpen}
		<X />
	{:else}
		<Menu />
	{/if}
</button>

<aside
	class={`fixed top-0 right-0 z-60 h-full w-64 transform rounded-l-2xl bg-gray-300 p-4 shadow-lg transition-transform duration-500 ease-in-out md:hidden dark:bg-gray-700 dark:text-white ${
		isMenuOpen ? 'translate-x-0' : 'translate-x-full'
	}`}
>
	<h2 class="text-lg font-bold">Rekomendasi Produk UMKM</h2>
	<ul class="flex w-full flex-col pt-8 pb-4 text-sm font-semibold">
		<li>
			<a
				href="#home"
				class="flex rounded-t-xl bg-gray-100 px-4 py-2 hover:bg-gray-200 hover:text-[#ff48c4] dark:bg-gray-800 dark:hover:bg-gray-900"
				>HOME</a
			>
		</li>
		<li>
			<a
				href="#about"
				class="flex bg-gray-100 px-4 py-2 hover:bg-gray-200 hover:text-[#ff48c4] dark:bg-gray-800 dark:hover:bg-gray-900"
				>ABOUT</a
			>
		</li>
		<li>
			<a
				href="#contact"
				class="flex rounded-b-xl bg-gray-100 px-4 py-2 hover:bg-gray-200 hover:text-[#ff48c4] dark:bg-gray-800 dark:hover:bg-gray-900"
				>CONTACT</a
			>
		</li>
	</ul>
	<button
		on:click={toggleTheme}
		class="cursor-pointer rounded-md border border-gray-300 bg-gray-100 p-2 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
	>
		{#if theme === 'dark'}
			<Sun />
		{:else}
			<Moon />
		{/if}
	</button>
</aside>
