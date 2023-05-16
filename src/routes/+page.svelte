<script lang="ts">
  import { writable } from '$lib/store';
  import type { ActionData } from './$types';
  export let form: ActionData;
	const isLoggedIn = writable('loggedIn', 'false');
  if (form?.success) {
    isLoggedIn.set('true');
  }  
	const handleLogout = () => {
		isLoggedIn.set('false');
	};
</script>

<div class="container">
  <main class="main tile">
    <h1>Team collaboration done right</h1>
    <p class="mb-4 text-xl text-neutral-600 dark:text-neutral-200">
      Internal website to orchestrate the needs of Treekeepers of Washington
      County !!!
    </p>
  </main>
  <div class="sidebar-top tile">
    {#if $isLoggedIn === 'false'}
        
    <div
      class="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
    >
      <form method="POST">
        <!--E-mail input-->
        <div class="relative mb-6" data-te-input-wrapper-init>
          <input class="appearance-none bg-transparent border-none w-full text-amber-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="email" name="email" type="email" placeholder="Email" aria-label="Email">
        </div>

        <!--Password input-->
        <div class="relative mb-6" data-te-input-wrapper-init>
          <input class="appearance-none bg-transparent border-none w-full text-amber-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="password" name="password" type="password" placeholder="Password" aria-label="Password">
        </div>

        <!--Sign in button-->
        <div class="relative mb-6" data-te-input-wrapper-init>
          <button
            type="submit"
            class="block mt-16 ml-1.5 bg-orange-500 enabled:hover:border-gray-400 disabled:opacity-75 rounded-full w-2/3"
            >Login</button
          >
        </div>
      </form>
    </div>
    {:else if $isLoggedIn === 'true'}
    <div>
      <button
		class="block mt-0 ml-1.5 bg-orange-500 enabled:hover:border-gray-400 disabled:opacity-75 rounded-full w-2/3"
		on:click={handleLogout} 
		type="submit">Logout</button>

</div>
    {/if}
  </div>
</div>

<style>
  :root {
    box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  .container {
    display: grid;
    grid-template-areas:
      "title title"
      "nav   nav"
      "main  aside1";
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(3, auto);
    grid-gap: 1.5em;
    max-width: 1080px;
    margin: 0 auto;
  }

  .main {
    grid-area: main;
  }

  .sidebar-top {
    grid-area: aside1;
  }

  .tile {
    padding: 1.5em;
    background-color: #fff;
  }

  .tile > :first-child {
    margin-top: 0;
  }

  .tile * + * {
    margin-top: 1.5em;
  }
</style>
