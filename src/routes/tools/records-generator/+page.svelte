<script>
  // Form data
  let horse = {
    name: 'Starlight',
    officialName: 'Starlight Serenade',
    breed: 'Thoroughbred',
    age: 8,
    sex: 'Mare',
    weightKg: 500,
    father: 'Northern Dancer',
    mother: 'Secretariat\'s Pride',
    born: 'Kentucky, USA',
    owner: 'Eleanor Vance',
    trainer: 'John Smith',
    location: 'Ocala, FL',
    farmsClubs: 'Sunny Meadows, Ocala Equestrian Club',
    racingRecords: '1st - Sunshine Derby (2024), 3rd - Florida Cup (2023)',
    youtubeLink: '',
    socialMediaLink: ''
  };

  // Events list
  const events = [
    { date: '2024-05-15', type: 'Competition', desc: '1st Place, Sunshine State Derby' }
  ];

  // Upload image
  let uploadedImage = null;
  let isDragging = false;

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        uploadedImage = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    isDragging = true;
  };

  const handleDragLeave = () => {
    isDragging = false;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    isDragging = false;
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        uploadedImage = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  // Add new event
  const addEvent = () => {
    const newEvent = {
      date: document.getElementById('event-date').value,
      type: document.getElementById('event-type').value,
      desc: document.getElementById('event-desc').value
    };
    if (newEvent.date && newEvent.type && newEvent.desc) {
      events.push(newEvent);
      document.getElementById('event-date').value = '';
      document.getElementById('event-type').value = 'Medical';
      document.getElementById('event-desc').value = '';
    }
  };

  // Delete event
  const deleteEvent = (index) => {
    events.splice(index, 1);
  };

  // Preview report (mock)
  const previewReport = () => {
    alert('Previewing report...');
  };

  // Download options
  const downloadPDF = () => {
    alert('Downloading as PDF...');
  };
  const downloadMarkdown = () => {
    alert('Downloading as Markdown...');
  };
  const downloadCards = () => {
    alert('Downloading as Cards...');
  };

  // Share report
  const shareReport = () => {
    alert('Sharing via link...');
  };
</script>

<div class="min-h-screen bg-background-light font-display">
  <div class="relative mx-auto w-/12 flex h-auto min-h-screen w-fullx flex-col group/design-root overflow-x-hidden">
    <div class="layout-container flex h-full grow flex-col">
      <div class="flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col w-full max-w-4xl flex-1 px-4 md:px-8">
          <!-- Header -->
          <header class="flex flex-wrap justify-between items-center gap-4 py-4 border-b border-secondary">
            <p class="text-text-primary text-3xl font-black leading-tight tracking-[-0.033em]">Horse Profile Generator</p>
          </header>

          <main class="flex flex-col gap-8 py-8">
            <!-- Horse's Basic Profile -->
            <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 class="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">Horse's Basic Profile</h3>
              <p class="text-sm text-text-primary/70 mt-1 mb-6">
                Start with the essentials. Fill in your horse's name, breed, and other fundamental details.
              </p>

              <div class="flex flex-col gap-6">
                <!-- Photo Upload -->
                <div
                  class={`flex flex-col items-center gap-4 rounded-lg border-2 border-dashed transition-colors duration-200 ${
                    isDragging ? 'border-primary/50 bg-primary/5' : 'border-gray-200'
                  } p-6 hover:border-primary/50`}
                  on:dragover={handleDragOver}
                  on:dragleave={handleDragLeave}
                  on:drop={handleDrop}
                >
                  <div class="flex flex-col items-center gap-2">
                    <p class="text-text-primary text-base font-bold">Horse Photo</p>
                    <p class="text-text-primary/70 text-sm font-normal text-center">
                      Click or drag to upload a primary photo.
                    </p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    class="hidden"
                    id="photo-upload"
                    on:change={handleFileChange}
                  />
                  <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]"
                    on:click={() => document.getElementById('photo-upload').click()}
                  >
                    <span class="truncate">Browse Files</span>
                  </button>
                </div>

                <!-- Form Fields -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-text-primary/80 mb-1" for="horse-name">Horse Name</label>
                    <input
                      bind:value={horse.name}
                      class="w-full rounded-lg border-gray-300  focus:border-primary focus:ring-primary/50"
                      id="horse-name"
                      type="text"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-text-primary/80 mb-1" for="official-name">Official Name</label>
                    <input
                      bind:value={horse.officialName}
                      class="w-full rounded-lg border-gray-300  focus:border-primary focus:ring-primary/50"
                      id="official-name"
                      placeholder="e.g. Starlight Serenade"
                      type="text"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-text-primary/80 mb-1" for="breed">Breed</label>
                    <input
                      bind:value={horse.breed}
                      class="w-full rounded-lg border-gray-300  focus:border-primary focus:ring-primary/50"
                      id="breed"
                      type="text"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-text-primary/80 mb-1" for="age">Age</label>
                    <input
                      bind:value={horse.age}
                      class="w-full rounded-lg border-gray-300  focus:border-primary focus:ring-primary/50"
                      id="age"
                      type="number"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-text-primary/80 mb-1" for="sex">Sex</label>
                    <input
                      bind:value={horse.sex}
                      class="w-full rounded-lg border-gray-300  focus:border-primary focus:ring-primary/50"
                      id="sex"
                      type="text"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-text-primary/80 mb-1" for="current-weight">Weight (kg)</label>
                    <input
                      bind:value={horse.weightKg}
                      class="w-full rounded-lg border-gray-300  focus:border-primary focus:ring-primary/50"
                      id="current-weight"
                      placeholder="e.g. 500"
                      type="number"
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <label class="block text-sm font-medium text-text-primary/80 mb-1" for="father-name">Father of the horse</label>
                    <input
                      bind:value={horse.father}
                      class="w-full rounded-lg border-gray-300  focus:border-primary focus:ring-primary/50"
                      id="father-name"
                      placeholder="e.g. Northern Dancer"
                      type="text"
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <label class="block text-sm font-medium text-text-primary/80 mb-1" for="mother-name">Mother of the horse</label>
                    <input
                      bind:value={horse.mother}
                      class="w-full rounded-lg border-gray-300  focus:border-primary focus:ring-primary/50"
                      id="mother-name"
                      placeholder="e.g. Secretariat's Pride"
                      type="text"
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <label class="block text-sm font-medium text-text-primary/80 mb-1" for="where-born">Where born</label>
                    <input
                      bind:value={horse.born}
                      class="w-full rounded-lg border-gray-300  focus:border-primary focus:ring-primary/50"
                      id="where-born"
                      placeholder="e.g. Kentucky, USA"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Ownership & Location -->
            <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 class="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">Ownership &amp; Location</h3>
              <p class="text-sm text-text-primary/70 mt-1 mb-6">
                Detail the horse's current owner, trainer, and where it is stabled.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-text-primary/80 mb-1" for="owner">Current Owner</label>
                  <input
                    bind:value={horse.owner}
                    class="w-full rounded-lg border-gray-300  focus:border-primary focus:ring-primary/50"
                    id="owner"
                    type="text"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-text-primary/80 mb-1" for="trainer">Horse Trainer Name</label>
                  <input
                    bind:value={horse.trainer}
                    class="w-full rounded-lg border-gray-300  focus:border-primary focus:ring-primary/50"
                    id="trainer"
                    placeholder="e.g. John Smith"
                    type="text"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-text-primary/80 mb-1" for="location">Location</label>
                  <input
                    bind:value={horse.location}
                    class="w-full rounded-lg border-gray-300  focus:border-primary focus:ring-primary/50"
                    id="location"
                    type="text"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-text-primary/80 mb-1" for="farms-clubs">Previous Farms &amp; Clubs</label>
                  <input
                    bind:value={horse.farmsClubs}
                    class="w-full rounded-lg border-gray-300  focus:border-primary focus:ring-primary/50"
                    id="farms-clubs"
                    placeholder="e.g. Sunny Meadows, Ocala Equestrian Club"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <!-- Records & Links -->
            <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 class="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">Records &amp; Links</h3>
              <p class="text-sm text-text-primary/70 mt-1 mb-6">
                Showcase achievements and link to external profiles or videos.
              </p>

              <div class="grid grid-cols-1 gap-4">
                <div>
                  <label class="block text-sm font-medium text-text-primary/80 mb-1" for="racing-records">Win/Racing Records</label>
                  <textarea
                    bind:value={horse.racingRecords}
                    class="w-full rounded-lg border-gray-300  focus:border-primary focus:ring-primary/50"
                    id="racing-records"
                    placeholder="e.g. 1st - Sunshine Derby (2024), 3rd - Florida Cup (2023)"
                    rows="3"
                  ></textarea>
                </div>
                <div class="relative">
                  <svg class="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-text-primary/50 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197 2.132a1 1 0 001.788-.649V10.5a1 1 0 00-.788-.968z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10a5 5 0 11-10 0 5 5 0 0110 0z" />
                  </svg>
                  <input
                    bind:value={horse.youtubeLink}
                    class="w-full rounded-lg border-gray-300  pl-10 focus:border-primary focus:ring-primary/50"
                    placeholder="YouTube Link"
                    type="url"
                  />
                </div>
                <div class="relative">
                  <svg class="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-text-primary/50 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <input
                    bind:value={horse.socialMediaLink}
                    class="w-full rounded-lg border-gray-300  pl-10 focus:border-primary focus:ring-primary/50"
                    placeholder="Social Media Link"
                    type="url"
                  />
                </div>
              </div>
            </div>

            <!-- Event History -->
            <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 class="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">Event History</h3>
              <p class="text-sm text-text-primary/70 mt-1 mb-6">
                Log important events like medical treatments, competitions, or training milestones.
              </p>

              <div class="/50 p-4 rounded-lg">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 items-end">
                  <div>
                    <label class="block text-sm font-medium text-text-primary/80 mb-1" for="event-date">Date</label>
                    <input
                      id="event-date"
                      class="w-full rounded-lg border-gray-300 bg-white focus:border-primary focus:ring-primary/50"
                      type="date"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-text-primary/80 mb-1" for="event-type">Event Type</label>
                    <select
                      id="event-type"
                      class="w-full rounded-lg border-gray-300 bg-white focus:border-primary focus:ring-primary/50"
                    >
                      <option>Medical</option>
                      <option>Training</option>
                      <option>Competition</option>
                      <option>Farrier</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div class="sm:col-span-2">
                    <label class="block text-sm font-medium text-text-primary/80 mb-1" for="event-desc">Description</label>
                    <input
                      id="event-desc"
                      class="w-full rounded-lg border-gray-300 bg-white focus:border-primary focus:ring-primary/50"
                      placeholder="Details about the event..."
                      type="text"
                    />
                  </div>
                </div>
                <button
                  class="mt-4 flex min-w-[84px] w-full sm:w-auto sm:ml-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]"
                  on:click={addEvent}
                >
                  <span class="truncate">Add Event</span>
                </button>
              </div>

              <div class="overflow-x-auto mt-4">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="/60">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-bold text-text-primary uppercase tracking-wider" scope="col">Date</th>
                      <th class="px-6 py-3 text-left text-xs font-bold text-text-primary uppercase tracking-wider" scope="col">Type</th>
                      <th class="px-6 py-3 text-left text-xs font-bold text-text-primary uppercase tracking-wider" scope="col">Description</th>
                      <th class="relative px-6 py-3" scope="col"><span class="sr-only">Actions</span></th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    {#each events as event, index}
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-text-primary">{event.date}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-text-primary">{event.type}</td>
                        <td class="px-6 py-4 text-sm text-text-primary">{event.desc}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a class="text-primary hover:text-primary/80 mr-3" href="#" title="Edit">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </a>
                          <a class="text-red-600 hover:text-red-800" href="#" title="Delete" on:click={() => deleteEvent(index)}>
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </a>
                        </td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex flex-col gap-4 py-8 border-t border-gray-200 items-start">
              <h3 class="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">Actions</h3>
              <div class="flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
                <button
                  class="flex min-w-[84px] w-full sm:w-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4  text-text-primary text-sm font-bold leading-normal tracking-[0.015em]"
                  on:click={previewReport}
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span class="truncate">Preview</span>
                </button>

                <div class="relative w-full sm:w-auto group">
                  <button
                    class="flex min-w-[84px] w-full sm:w-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4  text-text-primary text-sm font-bold leading-normal tracking-[0.015em]"
                    on:click={() => {}}
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span class="truncate">Download</span>
                    <svg class="w-5 h-5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div class="absolute bottom-full mb-2 w-full min-w-max bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
                    <a class="block px-4 py-2 text-sm text-text-primary hover:" href="#" on:click={(e) => { e.preventDefault(); downloadPDF(); }}>Download as PDF</a>
                    <a class="block px-4 py-2 text-sm text-text-primary hover:" href="#" on:click={(e) => { e.preventDefault(); downloadMarkdown(); }}>Download as Markdown</a>
                    <a class="block px-4 py-2 text-sm text-text-primary hover:" href="#" on:click={(e) => { e.preventDefault(); downloadCards(); }}>Download as Cards</a>
                  </div>
                </div>

                <button
                  class="flex min-w-[84px] w-full sm:w-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]"
                  on:click={shareReport}
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684m0 0L9 12m0 0l3 3m-3-3l-3 3" />
                  </svg>
                  <span class="truncate">Share</span>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</div>