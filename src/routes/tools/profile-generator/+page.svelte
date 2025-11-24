<script>
    // Reactive variables for form data
    // import { PouchDB } from 'pouchdb';
    import minimongo from 'minimongo';
    import Papa from 'papaparse';
    import { onMount } from 'svelte';
    // Variable!
    let horseName = "Kuzey";
    let age = 8;
    let breed = "Arabian";
    let sex = "Stallion";
    let location = "Ocala, FL";
    let owner = "Eleanor Vance";
    let youtubeLink = "";
    let instagramLink = "";
    let isEditing = "";
    // DB
    let db;
    onMount(() => {
        // Create local db (in memory)
        db = new minimongo.MemoryDb();
        // Add collection
        db.addCollection("records");
        // Optional: Log success
        console.log("✅ Minimongo database initialized");
        // Now you can safely use db in event handlers
        return () => {
        // Cleanup if needed (optional)
        db = null;
        };
    });
    // Event data
    let events;
    // Available breeds
    const availableBreeds = [
        "Thoroughbred", 
        "Arabian", 
        "Quarter Horse", 
        "Appaloosa", 
        "Clydesdale", 
        "Friesian", 
        "Paint Horse", 
        "Pony", 
        "Mustang", 
        "Warmblood"
    ];
    async function addEvent() {
    // Check if db exists (safe guard)
    if (!db) {
      alert('Database not ready. Please wait a moment.');
      return;
    }
    // Get form values
    const dateInput = document.getElementById('event-date');
    const typeInput = document.getElementById('event-type');
    const descInput = document.getElementById('event-desc');
    const date = dateInput?.value.trim();
    const type = typeInput?.value.trim();
    const description = descInput?.value.trim();
    // Validate required fields
    if (!date || !type) {
      alert('Please provide a Date and Event Type.');
      return;
    }
    // Create new event object
    const newEvent = {
      horse: horseName,
      horse_age: age,
      breed: breed,
      owner: owner,
      sex: sex,
      date,
      type,
      description: description || 'No details provided.',
      _id: `event_${Date.now()}`
    };
    // ✅ Use .insert(), NOT .upsert()
    const i = db.records.upsert(newEvent, function(doc) {
    console.log('Upset Records::',{doc})
      // Update reactive array
    //   events = [...events, newEvent];
      // Clear form inputs
      dateInput.value = '';
      typeInput.value = '';
      descInput.value = '';
      console.log('🎉 Event added successfully!');
    });
    events = await db.records.find().fetch(); // U
    console.log(events)
  }
    function downloadReport() {
        alert("Download report functionality would go here");
    }
    function saveChanges() {
        alert("Save changes functionality would go here");
    }
    function shareHorse() {
        if (navigator.share) {
            navigator.share({
                title: `Horse Record: ${horseName}`,
                text: `Check out this horse record for ${horseName}, ${age} years old, ${breed}.`,
                url: window.location.href
            }).catch(console.error);
        } else {
            alert("Share functionality is not supported on this device.");
        }
    }
    function handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
            console.log("File selected:", file.name);
            // In a real app, you would handle the file upload here
        }
    }
    //
    // TODO: DONE
    async function remove_event(event_id){
        console.log(`Removed Events ${event_id}`)
        await  db.records.remove(event_id);
        events = await db.records.find().fetch()
        console.log(events);
    }
    // TODO: fix Edits
    async function edit_event(event_id) {
        // Find the event in the database
        isEditing = event_id;
        const event = await db.records.findOne({ _id: event_id });
        if (!event) {
            alert("Event not found.");
            return;
        }
        // Populate form fields
        document.getElementById('event-date').value = event.date;
        document.getElementById('event-type').value = event.type;
        document.getElementById('event-desc').value = event.description || '';
        // Optional: Store the ID so we know whether to update or add
        // You can use a hidden field or a reactive variable
        // For now, we'll just store it in a temporary variable
        window.editingEventId = event_id;
        // Optionally scroll to the form
        document.querySelector('.bg-gray-50').scrollIntoView({ behavior: 'smooth' });
    }

    async function editEvent() {

            // Get form values
    const dateInput = document.getElementById('event-date');
    const typeInput = document.getElementById('event-type');
    const descInput = document.getElementById('event-desc');
    const date = dateInput?.value.trim();
    const type = typeInput?.value.trim();
    const description = descInput?.value.trim();
    // Validate required fields
    if (!date || !type) {
      alert('Please provide a Date and Event Type.');
      return;
    }
    // Create new event object
        const newEvent = {
        _id: isEditing,
        horse: horseName,
        horse_age: age,
        breed: breed,
        owner: owner,
        sex: sex,
        date,
        type,
        description: description || 'No details provided.',
        };
        //
        db.records.upsert(newEvent);
        events = await db.records.find().fetch(); 
        isEditing = "";
        dateInput.value = '';
        typeInput.value = '';
        descInput.value = '';
        console.log('🎉 Event added successfully!');
        alert('🎉 Event Updated successfully!')
    }

    //
    // Download the Sheet
    async function download_horse_sheet() {
    // Use Paparse to transform JSON to CSV
    const csv = Papa.unparse(events);
    // Create a Blob (binary object) from the CSV string
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    // Create a temporary URL for the blob
    const url = URL.createObjectURL(blob);
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'horse_records.csv');
    link.style.visibility = 'hidden'; // hide the link
    document.body.appendChild(link);
    link.click(); // trigger download
    document.body.removeChild(link); // clean up
    // Optional: revoke URL to free memory
    URL.revokeObjectURL(url);
  }
</script>
<div class="bg-white font-display">
    <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div class="layout-container flex h-full grow flex-col">
            <div class="flex flex-1 justify-center py-5">
                <div class="layout-content-container flex flex-col w-full max-w-6xl flex-1 px-4 md:px-8">
                    <div class="p-3x py-3">
                        <a href="/tools/" class="btn btn-sm btn-primary">Back</a>
                    </div>
                    <!-- Header Section -->
                    <header class="flex flex-wrap justify-between items-center gap-4 py-4 border-b border-gray-200">
                        <p class="text-gray-900 text-3xl font-black leading-tight tracking-[-0.033em]">Horse Record &amp; Report Generator</p>
                        <div class="flex flex-1 gap-3 flex-wrap justify-start md:justify-end">

                            {#if events}
                            <button on:click={download_horse_sheet} class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                <span class="material-symbols-outlined" style="font-size: 20px;">download</span>
                                <span class="truncate">Download Report</span>
                            </button>
                            {/if}
                            <!-- <button on:click={saveChanges} class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 text-gray-900 text-sm font-bold leading-normal tracking-[0.015em]">
                                <span class="material-symbols-outlined" style="font-size: 20px;">save</span>
                                <span class="truncate">Save Changes</span>
                            </button> -->
                            <!-- <button on:click={shareHorse} class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 text-gray-900 text-sm font-bold leading-normal tracking-[0.015em]">
                                <span class="material-symbols-outlined" style="font-size: 20px;">share</span>
                                <span class="truncate">Share</span>
                            </button> -->
                        </div>
                    </header>
                    <!-- Main Content Grid -->
                    <main class="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
                        <!-- Left Column: Horse Profile -->
                        <div class="lg:col-span-1 flex flex-col gap-6">
                            <!-- Image Uploader -->
                            <!-- Detail Fields -->
                            <div class="flex flex-col gap-4">
                                <h3 class="text-gray-900 text-lg font-bold leading-tight tracking-[-0.015em]">Horse Details</h3>
                                <div class="flex flex-col gap-4">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1" for="horse-name">Horse Name</label>
                                        <input 
                                            bind:value={horseName}
                                            class="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                                            id="horse-name" 
                                            type="text"
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1" for="age">Age</label>
                                        <input 
                                            bind:value={age}
                                            class="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                                            id="age" 
                                            type="number"
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1" for="breed">Breed</label>
                                        <select 
                                            bind:value={breed}
                                            class="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                                            id="breed"
                                        >
                                            {#each availableBreeds as breedOption}
                                                <option value={breedOption}>{breedOption}</option>
                                            {/each}
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Sex</label>
                                        <div class="flex space-x-4 mt-2">
                                            <label class="inline-flex items-center">
                                                <input 
                                                    type="radio" 
                                                    bind:group={sex} 
                                                    value="Mare" 
                                                    class="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                />
                                                <span class="ml-2 text-gray-900">Mare</span>
                                            </label>
                                            <label class="inline-flex items-center">
                                                <input 
                                                    type="radio" 
                                                    bind:group={sex} 
                                                    value="Gelding" 
                                                    class="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                />
                                                <span class="ml-2 text-gray-900">Gelding</span>
                                            </label>
                                            <label class="inline-flex items-center">
                                                <input 
                                                    type="radio" 
                                                    bind:group={sex} 
                                                    value="Stallion" 
                                                    class="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                />
                                                <span class="ml-2 text-gray-900">Stallion</span>
                                            </label>
                                        </div>
                                    </div>
                                    <!-- <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1" for="location">Location</label>
                                        <input 
                                            bind:value={location}
                                            class="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                                            id="location" 
                                            type="text"
                                        />
                                    </div> -->
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1" for="owner">Owner</label>
                                        <input 
                                            bind:value={owner}
                                            class="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                                            id="owner" 
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </div>
                            <!-- Link Fields -->
                             <!-- TODO: Hidden -->
                            <div class="flex flex-col gap-4 hidden">
                                <h3 class="text-gray-900 text-lg font-bold leading-tight tracking-[-0.015em]">Online Presence</h3>
                                <div class="flex flex-col gap-4">
                                    <div class="relative">
                                        <span class="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">play_circle</span>
                                        <input 
                                            bind:value={youtubeLink}
                                            class="w-full rounded-lg border-gray-300 pl-10 focus:border-blue-500 focus:ring-blue-500" 
                                            placeholder="YouTube Link" 
                                            type="url"
                                        />
                                    </div>
                                    <div class="relative">
                                        <span class="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">add_a_photo</span>
                                        <input 
                                            bind:value={instagramLink}
                                            class="w-full rounded-lg border-gray-300 pl-10 focus:border-blue-500 focus:ring-blue-500" 
                                            placeholder="Instagram Link" 
                                            type="url"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Right Column: Event Timeline -->
                        <div class="lg:col-span-2 flex flex-col gap-6">
                            <h3 class="text-gray-900 text-lg font-bold leading-tight tracking-[-0.015em]">Event History &amp; Timeline</h3>
                            <!-- Event List/Table -->
                            <div class="overflow-x-auto">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-100">
                                        <tr>
                                            <th class="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider" scope="col">Date</th>
                                            <th class="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider" scope="col">Type</th>
                                            <th class="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider" scope="col">Description</th>
                                            <th class="relative px-6 py-3" scope="col"><span class="sr-only">Actions</span></th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        {#each events as event, index}
                                            <tr class={index % 2 === 1 ? 'bg-gray-50' : ''}>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{event.date}</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{event.type}</td>
                                                <td class="px-6 py-4 text-sm text-gray-900">{event.description}</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a class="text-blue-600 hover:text-blue-800 mr-3" on:click={edit_event(event._id)} ><span class="material-symbols-outlined" style="font-size: 20px;">edit</span></a>
                                                    <a class="text-red-600 hover:text-red-800 cursor-pointer " on:click={remove_event(event._id)}><span class="material-symbols-outlined" style="font-size: 20px;">delete</span></a>
                                                </td>
                                            </tr>
                                        {/each}
                                    </tbody>
                                </table>
                            </div>
                            <!--  -->
                            <!-- Add Event Form -->
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 items-end">
                                    <div class="sm:col-span-1">
                                        <label class="block text-sm font-medium text-gray-700 mb-1" for="event-date">Date</label>
                                        <input 
                                            class="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                                            id="event-date" 
                                            type="date"
                                        />
                                    </div>
                                    <div class="sm:col-span-2 md:col-span-1">
                                        <label class="block text-sm font-medium text-gray-700 mb-1" for="event-type">Type</label>
                                        <input 
                                            class="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                                            id="event-type" 
                                            placeholder="e.g. Vaccination" 
                                            type="text"
                                        />
                                    </div>
                                    <div class="sm:col-span-3 md:col-span-2">
                                        <label class="block text-sm font-medium text-gray-700 mb-1" for="event-desc">Description</label>
                                        <input 
                                            class="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                                            id="event-desc" 
                                            placeholder="Details about the event..." 
                                            type="text"
                                        />
                                    </div>
                                </div>
                                {#if !isEditing}
                                <button on:click={addEvent} class="mt-4 flex min-w-[84px] w-full sm:w-auto sm:ml-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                    <span class="material-symbols-outlined" style="font-size: 18px;">add</span>
                                    <span class="truncate">Add Event</span>
                                </button>
                                {:else}
                                    <button on:click={editEvent} class="mt-4 flex min-w-[84px] w-full sm:w-auto sm:ml-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-green-600 text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                        <span class="material-symbols-outlined" style="font-size: 18px;">edit</span>
                                        <span class="truncate">Edit Event</span>
                                    </button>
                                {/if}
                            </div>
                            <!--  -->
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </div>
</div>
<style>
    .material-symbols-outlined {
        font-family: 'Material Symbols Outlined';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-feature-settings: 'liga';
        -webkit-font-smoothing: antialiased;
    }
</style>
