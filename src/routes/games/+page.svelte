<script lang="ts">
	import ControlPanel from '$lib/ControlPanel.svelte';
	import { writable } from '$lib/store';
	import type { Pokemon } from '$lib/ControlPanel.svelte';
	type LoadedEventType = ControlPanel['$$events_def']['loaded'];
	type ShuffleEventType = ControlPanel['$$events_def']['clickedShuffle'];
	type StartEventType = ControlPanel['$$events_def']['clickedStart'];
	type QuitEventType = ControlPanel['$$events_def']['clickedQuit'];
	let pokemonArr: Pokemon[] = [];
	let showTableDuringStart = false;
	const store = writable('pokemonArr', '');

	const handleLoaded = ({ detail }: LoadedEventType) => {
		console.log('loaded', detail);
		//Double the array
		pokemonArr = doubleTrouble(detail);
		store.set(JSON.stringify(pokemonArr));
	};
	const handleClickedShuffle = ({ detail }: ShuffleEventType) => {
		console.log('clicked shuffle and isShuffleButtonEnabled value is ', detail);
		//Need to shuffle pokemonArr
		pokemonArr = shuffleArray(pokemonArr);
		store.set(JSON.stringify(pokemonArr));
		showTableDuringStart = false;
	};
	const handleClickedStart = ({ detail }: StartEventType) => {
		console.log('clicked start and isStartButtonEnabled value is ', detail);
		showTableDuringStart = !detail;
	};
	const handleClickedQuit = ({ detail }: QuitEventType) => {
		console.log('clicked quit and isQuitButtonEnabled value is ', detail);
		for (let i = 0; i < pokemonArr.length; i++) {
			pokemonArr[i].isFaceDown = true;
			pokemonArr[i].hasFoundMatch = false;
		}
		showTableDuringStart = false;
	};

	/**
	 * Shuffle the array
	 */
	function shuffleArray(arr: Pokemon[]) {
		for (let i = arr.length - 1; i > -1; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			//Destructuring assignment prevents the use of swap variable
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	}
	function handleClick(clickedIndex: number | null | undefined) {
		console.log('Obtained index val is ', clickedIndex);
		if (clickedIndex != null) {
			//Make it visible
			const pokeMonModified = pokemonArr.filter((pok) => pok.index === clickedIndex)[0];
			pokeMonModified.isFaceDown = false;
			//See if its twin if its visible i.e isFaceDown is false - then update both to match
			const pokeMonTwin = pokemonArr.filter((pok) => pok.index === pokeMonModified.twinIndex)[0];
			if (!pokeMonTwin.isFaceDown) {
				pokeMonTwin.hasFoundMatch = true;
				pokeMonModified.hasFoundMatch = true;
			}
			const indexPositionOfTwin = pokemonArr.indexOf(pokeMonTwin);
			pokemonArr[indexPositionOfTwin] = pokeMonTwin;

			const indexPosition = pokemonArr.indexOf(pokeMonModified);
			pokemonArr[indexPosition] = pokeMonModified;
			store.set(JSON.stringify(pokemonArr));
			setTimeout(function () {
				flipUnmatchedImagesExceptLastClicked(clickedIndex);
			}, 1000);
		}
	}
	function flipUnmatchedImagesExceptLastClicked(indexPosition: number) {
		for (let i = 0; i < pokemonArr.length; i++) {
			if (!pokemonArr[i].hasFoundMatch && pokemonArr[i].index !== indexPosition) {
				pokemonArr[i].isFaceDown = true;
			}
		}
		store.set(JSON.stringify(pokemonArr));
	}

	//Double the array and update index and twinindex
	function doubleTrouble(pokemonArr: Pokemon[]) {
		let currentIndex: number = pokemonArr.length;
		let originalLength: number = pokemonArr.length;
		let index = 0;
		while (currentIndex != 0) {
			currentIndex--;
			pokemonArr[index + originalLength] = { ...pokemonArr[currentIndex] };
			pokemonArr[index + originalLength].index = index + originalLength;
			pokemonArr[index + originalLength].twinIndex = currentIndex;
			pokemonArr[currentIndex].twinIndex = index + originalLength;
			index++;
		}
		return pokemonArr;
	}
</script>

<div class="container">
	<main class="main">
		<div>
			<h1 class="text-slate-500 hover:text-cyan-600">Memory game - Pokemon</h1>
			<p>
				Click Shuffle before clicking Start to rearrange the pieces and click Quit to stop the game.
			</p>
			<ControlPanel
				on:loaded={handleLoaded}
				on:clickedShuffle={handleClickedShuffle}
				on:clickedStart={handleClickedStart}
				on:clickedQuit={handleClickedQuit}
			/>
			{#if showTableDuringStart}
				<div class="portfolio">
					{#each pokemonArr as pokemon}
						<figure class="featured">
							{#if pokemon.isFaceDown}
								<img
									src="/favicon.png"
									alt="Unknown"
									on:click={() => handleClick(pokemon.index)}
									on:keypress={null}
								/>
							{:else}
								<img src={pokemon.url} alt={pokemon.name} on:click={null} on:keypress={null} />
							{/if}

							<figcaption>
								{#if pokemon.isFaceDown}
									Unknown
								{:else}
									{pokemon.name}
								{/if}
							</figcaption>
						</figure>
					{/each}
				</div>
			{/if}
		</div>
	</main>
</div>
