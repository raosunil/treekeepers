<script lang="ts">
  import { writable } from '$lib/store';
  import type { ActionData } from './$types';
  export let form: ActionData;
	const isLoggedIn = writable('loggedIn', '');
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
          <input
            type="email"
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInputEmail2"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <label
            for="exampleInputEmail2"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-300 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Email address</label
          >
        </div>

        <!--Password input-->
        <div class="relative mb-6" data-te-input-wrapper-init>
          <input
            type="password"
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInputPassword2"
            name="password"
            placeholder="Password"
          />
          <label
            for="exampleInputPassword2"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-300 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Password</label
          >
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
    {:else}
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
      "main  aside1"
      "main  aside2";
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(4, auto);
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
