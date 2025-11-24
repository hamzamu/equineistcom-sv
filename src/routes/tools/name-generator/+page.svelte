<script>
  let selectedBreed = '';
  let selectedColor = '';
  let selectedPersonality = new Set();
  let selectedOrigin = new Set();

  const favoriteNames = ['Shadowfax', 'Rocinante'];
  const suggestions = [
    { name: 'Aethelred', meaning: 'Noble counsel' },
    { name: 'Buraq', meaning: 'Lightning or bright' }
  ];

  // Toggle personality selection
  const togglePersonality = (trait) => {
    if (selectedPersonality.has(trait)) {
      selectedPersonality.delete(trait);
    } else {
      selectedPersonality.add(trait);
    }
  };

  // Toggle origin selection
  const toggleOrigin = (origin) => {
    if (selectedOrigin.has(origin)) {
      selectedOrigin.delete(origin);
    } else {
      selectedOrigin.add(origin);
    }
  };

  // Remove from favorites
  const removeFavorite = (name) => {
    const index = favoriteNames.indexOf(name);
    if (index !== -1) {
      favoriteNames.splice(index, 1);
    }
  };

  // Add to favorites (simple)
  const addToFavorites = (name) => {
    if (!favoriteNames.includes(name)) {
      favoriteNames.push(name);
    }
  };

  // Generate names (mock function)
  const generateNames = () => {
    console.log('Generating with:', {
      breed: selectedBreed,
      color: selectedColor,
      personality: Array.from(selectedPersonality),
      origin: Array.from(selectedOrigin)
    });
  };
</script>

<div class="min-h-screen bg-white font-display">
  <!-- Header -->
  <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-4 sm:px-10 lg:px-20 py-3">
    <div class="flex items-center gap-4 text-text-heading">
      <div class="size-6">
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_6_535)">
            <path
              clip-rule="evenodd"
              d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </g>
          <defs>
            <clipPath id="clip0_6_535">
              <rect fill="white" height="48" width="48" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">EquiManage</h2>
    </div>

    <div class="hidden md:flex flex-1 justify-end gap-8">
      <div class="flex items-center gap-9 text-text-main">
        <a href="#" class="text-sm font-medium leading-normal">Dashboard</a>
        <a href="#" class="text-sm font-medium leading-normal">Horses</a>
        <a href="#" class="text-sm font-medium leading-normal">Calendar</a>
        <a href="#" class="text-sm font-medium leading-normal">Reports</a>
      </div>
      <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
        <span class="truncate">Add Horse</span>
      </button>
      <div
        class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
        style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHccBRe1xpOq27-CTDYWqOlA4fvx14I8vDrCkXBKgPMXOFURKcAGwOxkWg-WBzOhzLPaO0h436BQSGnORg4G9BkvabJJfiaV_yBOaFcWoUmnXZLFWFx-TstV-PUZFeo5xGX2agHd9grOkbitJI6pDtnTQSw0Q_rIK5utGdIPMzSW0LqG9XgcPug2cN7s_-NzK4bW85JndlN2lvO5P9v19JGVAD0IevEiGJH0eBGi3o2LplE-B6ZTdebgwuaHQKRNLojMXZsWEebAs')"
      ></div>
    </div>

    <button class="md:hidden p-2 rounded-md text-text-main">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </header>

  <!-- Main Content -->
  <main class="flex flex-1 justify-center py-5 lg:py-10 px-4 sm:px-10 lg:px-20">
    <div class="layout-content-container flex flex-col w-full max-w-7xl flex-1">
      <!-- Page Title -->
      <div class="flex flex-wrap items-end justify-between gap-3 p-4">
        <div class="flex flex-col gap-3">
          <div class="relative group">
            <p class="text-text-heading text-4xl font-black leading-tight tracking-[-0.033em] cursor-help">
              Horse Name Generator
            </p>
            <div class="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 p-3 bg-gray-800 text-white text-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
              Why we created this tool: to help you choose a good name for your horse that your horse will respond to. We choose names that horses easily respond to.
            </div>
          </div>
          <p class="text-[#616f89] text-base font-normal leading-normal">
            Select the traits of your horse to find the perfect name.
          </p>
        </div>
      </div>

      <!-- Filter Criteria Card -->
      <div class="flex flex-col gap-8 p-4 mt-4">
        <div class="w-full border border-gray-200 rounded-xl p-6 bg-white">
          <h3 class="text-text-heading text-lg font-bold leading-tight tracking-[-0.015em] pb-4">
            Filter Criteria
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Breed -->
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-text-main text-base font-medium leading-normal pb-2">Breed</p>
              <select
                class="form-select w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main dark:bg-background-dark/50 focus:outline-0 focus:ring-2 focus:ring-accent-green/50 border border-[#dbdfe6] bg-white focus:border-accent-green h-12 p-[15px] text-base font-normal leading-normal"
                bind:value={selectedBreed}
              >
                <option value="">Select a breed</option>
                <option value="arabian">Arabian</option>
                <option value="thoroughbred">Thoroughbred</option>
                <option value="quarter">Quarter Horse</option>
                <option value="friesian">Friesian</option>
              </select>
            </label>

            <!-- Color -->
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-text-main text-base font-medium leading-normal pb-2">Color</p>
              <select
                class="form-select w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main dark:bg-background-dark/50 focus:outline-0 focus:ring-2 focus:ring-accent-green/50 border border-[#dbdfe6] bg-white focus:border-accent-green h-12 p-[15px] text-base font-normal leading-normal"
                bind:value={selectedColor}
              >
                <option value="">Select a color</option>
                <option value="bay">Bay</option>
                <option value="black">Black</option>
                <option value="chestnut">Chestnut</option>
                <option value="grey">Grey</option>
              </select>
            </label>

            <!-- Personality -->
            <div class="flex flex-col">
              <p class="text-text-main text-base font-medium leading-normal pb-2">Personality</p>
              <div class="flex flex-wrap gap-2">
                {#each ['Brave', 'Gentle', 'Spirited', 'Calm'] as trait}
                  <button
                    class={`px-3 py-1.5 text-sm rounded-full border border-gray-300 bg-white text-text-main hover:bg-accent-tan/20 focus:bg-accent-tan focus:text-accent-green focus:border-accent-tan ${
                      selectedPersonality.has(trait) ? 'bg-accent-tan text-white' : ''
                    }`}
                    on:click={() => togglePersonality(trait)}
                  >
                    {trait}
                  </button>
                {/each}
              </div>
            </div>

            <!-- Name Origin -->
            <div class="flex flex-col">
              <p class="text-text-main text-base font-medium leading-normal pb-2">Name Origin</p>
              <div class="flex flex-wrap gap-2">
                {#each ['English', 'Arabic', 'Spanish'] as origin}
                  <button
                    class={`px-4 py-2 text-sm rounded-lg border border-gray-200 bg-white text-text-main hover:bg-accent-green/10 focus:bg-accent-green/20 focus:border-accent-green ${
                      selectedOrigin.has(origin) ? 'bg-accent-green text-white border-accent-green' : ''
                    } transition-colors`}
                    on:click={() => toggleOrigin(origin)}
                  >
                    {origin}
                  </button>
                {/each}
              </div>
            </div>
          </div>

          <!-- Browse & Generate -->
          <div class="border-t border-gray-200 pt-6 mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div class="flex flex-col gap-2">
              <h4 class="text-text-heading text-base font-bold">Browse by Origin</h4>
              <div class="flex flex-wrap gap-x-4 gap-y-2">
                <a href="/all-english-names" class="text-sm text-primary hover:underline">All English Names</a>
                <a href="/all-arabic-names" class="text-sm text-primary hover:underline">All Arabic Names</a>
                <a href="/all-spanish-names" class="text-sm text-primary hover:underline">All Spanish Names</a>
              </div>
            </div>

            <button
              class="flex w-full md:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent-green text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-accent-green/90 transition-colors"
              on:click={generateNames}
            >
              <span class="truncate">Generate Names</span>
            </button>
          </div>
        </div>

        <!-- My Favorite Names -->
        <div class="w-full border border-gray-200 rounded-xl p-6 bg-white">
          <h3 class="text-text-heading text-lg font-bold leading-tight tracking-[-0.015em] pb-4">
            My Favorite Names
          </h3>
          <div class="flex flex-wrap gap-3">
            {#each favoriteNames as name}
              <div class="flex items-center gap-2 p-2 px-3 bg-gray-50 rounded-full">
                <span class="font-medium text-text-main">{name}</span>
                <button
                  class="text-gray-500 hover:text-red-500"
                  on:click={() => removeFavorite(name)}
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            {/each}
          </div>
        </div>

        <!-- Suggestions Section -->
        <div class="flex flex-col gap-4 flex-1">
          <div class="flex items-center justify-between">
            <h3 class="text-text-heading text-lg font-bold leading-tight tracking-[-0.015em]">
              Suggestions
            </h3>
            <p class="text-sm text-gray-500">Showing {suggestions.length} results</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
   
          </div>
        </div>
      </div>
    </div>
  </main>
</div>