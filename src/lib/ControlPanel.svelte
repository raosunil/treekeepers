<script lang="ts" context="module">
	export type Pokemon = {
		id: number;
		name: string;
		url: string;
		isFaceDown: boolean;
		hasFoundMatch: boolean;
		index?: number | null;
		twinIndex?: number | null;
	};
</script>

<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	// For parent component to receive data from child components we need Custom Events
	const dispatch = createEventDispatcher<{
		loaded: Pokemon[];
		clickedStart: boolean;
		clickedShuffle: boolean;
		clickedQuit: boolean;
	}>();

	async function getPokemonImages() {
		try {
			const url = `https://pokeapi.co/api/v2/pokemon/?limit=7`;
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					'content-type': 'application/json'
				}
			});
			const paginatedResponse = await response.json();
			const results = await paginatedResponse.results;
			return results;
		} catch (error) {
			throw new Error(`Exception in getPokemonImages: ${error}`);
		}
	}

	let pokemonArray: Pokemon[] = [];
	//Call this anonymous function when component is mounted
	onMount(async () => {
		//fetch data and dispatch event
		const data = await getPokemonImages();
		data.map((resp: any, i: number) => {
			let pokeId = +resp.url.substring(
				resp.url.lastIndexOf('/', resp.url.lastIndexOf('/') - 1) + 1,
				resp.url.lastIndexOf('/')
			);
			pokemonArray[i] = {
				id: pokeId,
				name: resp.name,
				url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeId}.png`,
				isFaceDown: true,
				hasFoundMatch: false,
				index: i,
				twinIndex: null
			};
		});
		dispatch('loaded', pokemonArray);
	});

	let isStartButtonEnabled = true;
	//Reactivity in action - compiler magic begins
	$: isQuitButtonEnabled = !isStartButtonEnabled;
	$: isShuffleButtonEnabled = isStartButtonEnabled;

	const handleClickShuffle = () => {
		dispatch('clickedShuffle', isShuffleButtonEnabled);
	};
	const handleClickStart = () => {
		isStartButtonEnabled = false;
		dispatch('clickedStart', isStartButtonEnabled);
	};
	const handleClickQuit = () => {
		isStartButtonEnabled = true;
		dispatch('clickedQuit', isQuitButtonEnabled);
	};
</script>

<div class="flex items-center">
	<button
		class="block mt-0 ml-1.5 bg-blue-500 enabled:hover:border-gray-400 disabled:opacity-75 rounded-full w-1/3"
		disabled={!isShuffleButtonEnabled}
		on:click={handleClickShuffle}
		type="submit">Shuffle</button
	>
	<button
		class="block mt-0 ml-1.5 bg-blue-500 enabled:hover:border-gray-400 disabled:opacity-75 rounded-full w-1/3"
		disabled={!isStartButtonEnabled}
		on:click={handleClickStart}
		type="submit">Start</button
	>
	<button
		class="block mt-0 ml-1.5 bg-blue-500 enabled:hover:border-gray-400 disabled:opacity-75 rounded-full w-1/3"
		disabled={!isQuitButtonEnabled}
		on:click={handleClickQuit}
		type="submit">Quit</button
	>
</div>
