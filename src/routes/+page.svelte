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
  <section class="text-gray-800">
      <div class="flex flex-wrap items-center">
        <div class="hidden md:flex grow-0 shrink-0 basis-auto sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
  
        </div>
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">

            <h2 class="text-2xl font-bold mb-4">Team collaboration done right</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <p class="pr-6 text-xl text-neutral-600 dark:text-neutral-200">
                Internal website to orchestrate the needs of Treekeepers of Washington
                County !!!
              </p>
        
              {#if $isLoggedIn === 'false'}
        
              <div
                class=" pl-6 mt-1 block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
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
                      class="block mt-16 ml-1.5 h-8 bg-orange-500 enabled:hover:border-gray-400 disabled:opacity-75 rounded-full w-2/3"
                      >Login</button
                    >
                  </div>
                </form>
              </div>
              {:else if $isLoggedIn === 'true'}
                <button
              class="block mt-0 ml-1.5 h-8 bg-orange-500 enabled:hover:border-gray-400 disabled:opacity-75 rounded-full w-2/3"
              on:click={handleLogout} 
              type="submit">Logout</button> 
              {/if}
            </div>
        </div>
      </div>
  </section>

  <div class="sidebar-top tile">
 
  </div>


</div>
