<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { item } = data;
</script>

<div class="container">
	<div class="flex flex-col">
		<h6 class="mb-6 text-4xl leading-tight">{item.title}</h6>
		<p class="mb-8 text-xl font-light">{item.description}</p>
	</div>
</div>
