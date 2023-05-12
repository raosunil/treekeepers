<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { products } = data;
</script>

<div class="container">
	<div class="flex flex-col">
		<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
				<div class="overflow-hidden">
					<table class="min-w-full text-left text-sm font-light">
						<thead class="border-b font-medium dark:border-neutral-500">
							<tr>
								<th scope="col" class="px-6 py-4">#</th>
								<th scope="col" class="px-6 py-4">Title</th>
								<th scope="col" class="px-6 py-4">Category</th>
								<th scope="col" class="px-6 py-4">Price</th>
							</tr>
						</thead>
						<tbody>
							{#each products as product, i}
								<tr
									class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
								>
									<td class="whitespace-nowrap px-6 py-4 font-medium"><a
										href="/api/products/{i + 1}"
										class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
										>{i + 1}</a
									  ></td>
									<td class="whitespace-nowrap px-6 py-4">{product.title}</td>
									<td class="whitespace-nowrap px-6 py-4">{product.category}</td>
									<td class="whitespace-nowrap px-6 py-4">{product.price}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
