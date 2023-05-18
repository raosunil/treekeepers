<script lang="ts">
	import "../app.postcss";
	import { writable } from '$lib/store';
	const isLoggedIn = writable('loggedIn', 'false');
</script>

<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
	<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
		<div class="text-xl lg:flex-none">
			<a href="/" class="nav-anchor">Home</a>
			{#if $isLoggedIn === 'true' }
			<a href="/settings" class="nav-anchor">Settings</a>
			{/if}
			<a href="/games" class="nav-anchor">Games</a>
			<a href="/about" class="nav-anchor">About</a>
		</div>
		<div class="flex w-full ml-28 mt-1 items-center justify-between">
			 
		  <div class="flex flex-wrap items-center max-w-[800px]">
			<h5 class="text-3xl text-neutral-800 dark:text-neutral-200"
			>Treekeepers of Washington County</h5>
		  </div>
	</div>
</nav>

<div class="flex">
	<!--
	<aside class="mt-1 mb-44">
		<a class="block w-full text-left py-1 px-4" href="/settings">Settings</a
		>
		<a class="block w-full text-left py-1 px-4" href="/games">Games</a>
		<a class="block w-full text-left py-1 px-4" href="/about">About</a>
	</aside>
	-->
	<slot />
</div>
