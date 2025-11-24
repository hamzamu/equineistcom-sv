<script>
  // Form data
  let plan = {
    purpose: 'Post-Surgery Recovery',
    horseName: '',
    breed: '',
    weightKg: '',
    currentCondition: '',
    feedingEntries: [],
    supplementEntries: [],
    exerciseEntries: [],
    medicationWarnings: ''
  };

  // Add new feeding entry
  const addFeedingEntry = () => {
    plan.feedingEntries.push({
      item: '',
      date: '',
      time: '',
      goal: ''
    });
  };

  // Remove feeding entry
  const removeFeedingEntry = (index) => {
    plan.feedingEntries.splice(index, 1);
  };

  // Add new exercise entry
  const addExerciseEntry = () => {
    plan.exerciseEntries.push({
      activity: '',
      date: '',
      time: '',
      goal: ''
    });
  };

  // Remove exercise entry
  const removeExerciseEntry = (index) => {
    plan.exerciseEntries.splice(index, 1);
  };

  // Generate full plan (mock)
  const generatePlan = () => {
    alert('Generating full recovery plan...');
  };

  // Save as Excel (mock)
  const saveAsExcel = () => {
    alert('Saving as Excel...');
  };

  // Save as Calendar (mock)
  const saveAsCalendar = () => {
    alert('Saving as Calendar...');
  };
</script>

<div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
  <div class="layout-container flex h-full grow flex-col">
    <div class="flex flex-1 justify-center py-5">
      <div class="layout-content-container flex flex-col w-full max-w-[960px] flex-1 px-4 md:px-8">
        <!-- Header -->
        <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-10 py-3 bg-white sticky top-0 z-10">
          <div class="flex items-center gap-4 text-[#111318]">
            <div class="size-6">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill-rule="evenodd"></path>
              </svg>
            </div>
            <h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">EquiPlan</h2>
          </div>
          <div class="flex flex-1 justify-end gap-8">
            <div class="hidden md:flex items-center gap-9">
              <a href="#" class="text-sm font-medium leading-normal">Dashboard</a>
              <a href="#" class="text-sm font-medium leading-normal">Horses</a>
              <a href="#" class="text-sm font-medium leading-normal">Plans</a>
              <a href="#" class="text-sm font-medium leading-normal">Schedule</a>
            </div>
            <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span class="truncate">New Plan</span>
            </button>
            <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAb-ppjnlxTGdhr6iWvpwg_LWyiIG-lGNedExTMaPaO1J9lG24rdZaRUhXQy6He2lcjHq9GoJ2wW-DF0_lI2hiCY5avrP3kctX-5DZQsi0VQ8SuTYET0iNO8aQf5i_sa2Z9xlZfjotV1M-Eu4OZ7nE0RIohh3VsMsdTtPU_lCpvGeUaht0AW_ltQT4YK4LHibhUf3DNTxWHoJiM3fZUztz0q-g0pQD1Z6fD-i5i1YZEAI355gHCQ5Rlrk0oz1AegdiwcY_2PI8U7mM');"></div>
          </div>
        </header>

        <main class="flex flex-col gap-8 p-4 md:p-10">
          <!-- Page Title -->
          <div class="flex flex-wrap justify-between gap-3">
            <h1 class="text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Horse Recovery Plan Generator</h1>
          </div>

          <!-- Card 1: Plan Purpose -->
          <div class="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm">
            <p class="text-lg font-bold leading-tight">What is the primary goal of this plan?</p>
            <div class="flex flex-col gap-3">
              {#each ['Post-Surgery Recovery', 'Injury Rehabilitation', 'General Conditioning'] as option}
                <label class="flex items-center gap-4 rounded-lg border border-gray-200 p-[15px] hover:border-primary cursor-pointer transition-colors">
                  <input
                    bind:group={plan.purpose}
                    class="h-5 w-5 border-2 border-gray-300 bg-transparent text-primary focus:ring-primary"
                    type="radio"
                    name="plan-purpose"
                    value={option}
                  />
                  <span class="text-sm font-medium leading-normal">{option}</span>
                </label>
              {/each}
            </div>
          </div>

          <!-- Card 2: Horse Information -->
          <div class="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm">
            <p class="text-lg font-bold leading-tight tracking-[-0.015em]">Horse Information</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="text-sm font-medium text-gray-600" for="horse-name">Horse Name</label>
                <input
                  bind:value={plan.horseName}
                  class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  id="horse-name"
                  type="text"
                />
              </div>
              <div>
                <label class="text-sm font-medium text-gray-600" for="breed">Breed</label>
                <input
                  bind:value={plan.breed}
                  class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  id="breed"
                  type="text"
                />
              </div>
              <div>
                <label class="text-sm font-medium text-gray-600" for="weight">Weight (kg)</label>
                <input
                  bind:value={plan.weightKg}
                  class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  id="weight"
                  type="number"
                />
              </div>
            </div>
            <div>
              <label class="text-sm font-medium text-gray-600" for="current-condition">Current Condition</label>
              <textarea
                bind:value={plan.currentCondition}
                class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                id="current-condition"
                rows="4"
              ></textarea>
            </div>
          </div>

          <!-- Card 3: Two-Week Feeding Plan -->
          <div class="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm">
            <p class="text-lg font-bold leading-tight tracking-[-0.015em]">Feeding Schedule</p>
            <div class="flex flex-col gap-3">
              {#if plan.feedingEntries.length === 0}
                <p class="text-sm text-gray-500 italic">No entries yet.</p>
              {:else}
                {#each plan.feedingEntries as entry, index}
                  <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_2fr_auto] gap-2 items-end p-2 rounded-lg bg-gray-50">
                    <input
                      bind:value={entry.item}
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      placeholder="Item (e.g., Hay)"
                      type="text"
                    />
                    <input
                      bind:value={entry.date}
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      type="date"
                    />
                    <input
                      bind:value={entry.time}
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      type="time"
                    />
                    <input
                      bind:value={entry.goal}
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      placeholder="Goal (e.g., Maintain weight)"
                      type="text"
                    />
                    <button
                      class="flex items-center justify-center size-9 text-gray-500 hover:text-red-500 rounded-md"
                      on:click={() => removeFeedingEntry(index)}
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                {/each}
              {/if}
            </div>
            <button
              class="flex items-center gap-2 self-start rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal hover:bg-primary/30 transition-colors"
              on:click={addFeedingEntry}
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Add Feeding Entry</span>
            </button>
          </div>

          <!-- Card 4: Supplement Plan -->
          <div class="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm">
            <p class="text-lg font-bold leading-tight tracking-[-0.015em]">Supplements</p>
            <div class="flex flex-col gap-3">
              {#if plan.supplementEntries.length === 0}
                <p class="text-sm text-gray-500 italic">No supplements added.</p>
              {:else}
                {#each plan.supplementEntries as entry, index}
                  <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_2fr_auto] gap-2 items-end p-2 rounded-lg bg-gray-50">
                    <input
                      bind:value={entry.name}
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      placeholder="Supplement name"
                      type="text"
                    />
                    <input
                      bind:value={entry.dose}
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      placeholder="Dose (e.g., 10mg)"
                      type="text"
                    />
                    <input
                      bind:value={entry.frequency}
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      placeholder="Frequency"
                      type="text"
                    />
                    <button
                      class="flex items-center justify-center size-9 text-gray-500 hover:text-red-500 rounded-md"
                      on:click={() => removeSupplementEntry(index)}
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                {/each}
              {/if}
            </div>
            <button
              class="flex items-center gap-2 self-start rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal hover:bg-primary/30 transition-colors"
              on:click={() => plan.supplementEntries.push({ name: '', dose: '', frequency: '' })}
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Add Supplement Entry</span>
            </button>
          </div>

          <!-- Card 5: Exercise Regimen -->
          <div class="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm">
            <p class="text-lg font-bold leading-tight tracking-[-0.015em]">Exercise Plan</p>
            <div class="flex flex-col gap-3">
              {#if plan.exerciseEntries.length === 0}
                <p class="text-sm text-gray-500 italic">No entries yet.</p>
              {:else}
                {#each plan.exerciseEntries as entry, index}
                  <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_2fr_auto] gap-2 items-end p-2 rounded-lg bg-gray-50">
                    <input
                      bind:value={entry.activity}
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      placeholder="Activity (e.g., Hand walking)"
                      type="text"
                    />
                    <input
                      bind:value={entry.date}
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      type="date"
                    />
                    <input
                      bind:value={entry.time}
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      type="time"
                    />
                    <input
                      bind:value={entry.goal}
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      placeholder="Goal (e.g., 15 minutes)"
                      type="text"
                    />
                    <button
                      class="flex items-center justify-center size-9 text-gray-500 hover:text-red-500 rounded-md"
                      on:click={() => removeExerciseEntry(index)}
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                {/each}
              {/if}
            </div>
            <button
              class="flex items-center gap-2 self-start rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal hover:bg-primary/30 transition-colors"
              on:click={addExerciseEntry}
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Add Exercise Entry</span>
            </button>
          </div>

          <!-- Card 6: Medication & Warnings -->
          <div class="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm">
            <p class="text-lg font-bold leading-tight tracking-[-0.015em]">Medication Warning Plan</p>
            <div>
              <textarea
                bind:value={plan.medicationWarnings}
                class="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                placeholder="Detail medication schedules and important warnings..."
                rows="5"
              ></textarea>
            </div>
          </div>

          <!-- Card 7: Gradual Checkup -->
          <div class="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm">
            <p class="text-lg font-bold leading-tight tracking-[-0.015em]">Gradual Checkup</p>
            <div class="flex items-center gap-3">
              <input
                class="h-5 w-5 rounded text-primary focus:ring-primary border-gray-300"
                id="checkup-toggle"
                type="checkbox"
              />
              <label class="text-sm font-medium text-gray-700" for="checkup-toggle">
                Schedule regular checkups and progress monitoring
              </label>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              class="w-full sm:w-auto flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]"
              on:click={generatePlan}
            >
              <span class="truncate">Generate Full Sheet Plan</span>
            </button>
            <button
              class="w-full sm:w-auto flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gray-200 text-gray-800 text-base font-bold leading-normal tracking-[0.015em]"
              on:click={saveAsExcel}
            >
              <span class="truncate">Save as Excel</span>
            </button>
            <button
              class="w-full sm:w-auto flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gray-200 text-gray-800 text-base font-bold leading-normal tracking-[0.015em]"
              on:click={saveAsCalendar}
            >
              <span class="truncate">Save as Calendar Plan</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  </div>
</div>