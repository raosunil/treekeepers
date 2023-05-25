<script lang="ts">
  import { writable } from "$lib/store";
  import type { ActionData } from "./$types";
  export let form: ActionData;
  const isLoggedIn = writable("loggedIn", "false");
  if (form?.success) {
    isLoggedIn.set("true");
  }
  const handleLogout = () => {
    isLoggedIn.set("false");
  };
</script>

<div class="container h-full p-10">
  <div
    class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200"
  >
    <div class="w-full">
      <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
        <div class="g-0 lg:flex lg:flex-wrap">
          <!-- Left column container-->
          <div class="px-4 md:px-0 lg:w-6/12">
            <div class="md:mx-6 md:p-12">
              <!--Logo-->
              <div class="text-center text-5xl">
                &#x1f332;
                <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold">
                  Internal Team of Treekeepers of Washingston County.
                </h4>
              </div>
              {#if $isLoggedIn === "false"}
                <div
                  class="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                >
                  <form method="POST">
                    <p class="mb-4">Please login to your account</p>
                    <!--Email input-->
                    <div class="relative mb-4" data-te-input-wrapper-init>
                      <input
                        class="appearance-none bg-transparent border-none w-full text-amber-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        aria-label="Email"
                      />
                    </div>

                    <!--Password input-->
                    <div class="relative mb-4" data-te-input-wrapper-init>
                      <input
                        class="appearance-none bg-transparent border-none w-full text-amber-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        aria-label="Password"
                      />
                    </div>

                    <!--Submit button-->
                    <div class="mb-12 pb-1 pt-1 text-center">
                      <button
                        class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="submit"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        style="
                        background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
                      "
                      >
                        Log in
                      </button>
                    </div>
                  </form>
                </div>
              {:else if $isLoggedIn === "true"}
                <div>
                  <button
                    class="block mt-0 ml-1.5 bg-orange-500 enabled:hover:border-gray-400 disabled:opacity-75 rounded-full w-2/3"
                    on:click={handleLogout}
                    type="submit">Logout</button
                  >
                </div>
              {/if}
            </div>
          </div>

          <!-- Right column container with background and description-->
          <div
            class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
            style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"
          >
            <div class="px-4 py-6 text-white md:mx-6 md:p-12">
              <h4 class="mb-6 text-xl font-semibold">
                Working to protect and advocate for trees in urban Washington
                County
              </h4>
              <p class="text-sm">
                Treekeepers Washington County's mission is to expand the
                knowledge of local residents about how to best enjoy and protect
                trees..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
