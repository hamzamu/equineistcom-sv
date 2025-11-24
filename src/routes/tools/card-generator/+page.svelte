<script>
    // Reactive variables for form data
    import html2canvas from 'html2canvas';
    // import htmlToImage from 'html-to-image';
    import domtoimage from 'dom-to-image';


    let horseName = "Kuzey";
    let age = 8;
    let sex = "Stallion";
    let breed = "Arabian";
    let weight = 950;
    let ownerName = "Hamza M";
    let selectedImage = null;
    let previewImage = "/holders/kuzey_m.jpg";
    // Available sexes and breeds
    const availableSexes = ["Stallion", "Mare", "Gelding"];
    const availableBreeds = ["Arabian", "Thoroughbred", "Quarter Horse", "Appaloosa", "Clydesdale", "Friesian", "Paint Horse", "Pony", "Mustang", "Warmblood"];
    // Handle file upload
    function handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImage = e.target.result;
                selectedImage = file;
            };
            reader.readAsDataURL(file);
        }
    }

    // Share functionality
    function shareCard() {
        if (navigator.share) {
            navigator.share({
                title: `Horse Card: ${horseName}`,
                text: `Check out this horse card for ${horseName}, ${age} years old, ${breed}.`,
                url: window.location.href
            }).catch(console.error);
        } else {
            alert("Share functionality is not supported on this device.");
        }
    }
    // Generate PDF functionality
    function generatePDF() {
        alert("Generate PDF functionality would go here");
    }
    // Generate Image functionality
    function generateImage() {
        alert("Generate Image functionality would go here");
    }

    async function downloadCardX() {
    // const cardElement = document.querySelector('.bg-white.rounded-xl.shadow-lg.p-6');
    const cardElement = document.getElementById('horse_card');

    if (!cardElement) {
        alert("Error: Card element not found.");
        return;
    }

    try {
        // Capture the card as a canvas (high-quality)
        const canvas = await html2canvas(cardElement, {
            scale: 2,           // Increase quality (2x)
            useCORS: true,      // Required for cross-origin images (like your horse photo)
            allowTaint: true,   // Allow tainted canvases (optional, but often needed)
            logging: true,     // Disable console logs
        });

        // Convert to PNG data URL
        const imgData = canvas.toDataURL('image/png');

        // Create a download link
        const link = document.createElement('a');
        link.download = `${horseName.replace(/\s+/g, '_')}_horse_card.png`;
        link.href = imgData;
        link.click();

        console.log("Image downloaded successfully!");

    } catch (error) {
        console.error("Failed to generate image:", error);
        alert("Failed to generate image. Please check console for details.");
    }
    }


    async function downloadCard() {
    const cardElement = document.getElementById('horse_card');

    if (!cardElement) {
        alert("Card not found!");
        return;
    }

    try {
        // Generate image
        const dataUrl = await domtoimage.toPng(cardElement, {
            quality: 0.95,
            bgcolor: '#ffffff',
            width: cardElement.offsetWidth * 2,
            height: cardElement.offsetHeight * 2,
        });

        // Download
        const link = document.createElement('a');
        link.download = `${horseName.replace(/\s+/g, '_')}_horse_card.png`;
        link.href = dataUrl;
        link.click();

        console.log("Image downloaded successfully!");

    } catch (error) {
        console.error("Failed to generate image:", error);
        alert("Could not generate image. Check console.");
    }
}


</script>
<div class="bg-gray-200/50  min-h-screen">
    <!-- Header -->
    <!-- <header class="border-b border-gray-200 bg-grayx hiddenx">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <div class="flex-shrink-0 flex items-center">
                        <span class="material-symbols-outlined text-2xl text-gray-900 mr-2">pets</span>
                        <span class="font-bold text-xl text-gray-900">Equine Hub</span>
                    </div>
                    <nav class="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <a href="#" class="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Dashboard</a>
                        <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Horses</a>
                        <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Care</a>
                        <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Schedule</a>
                        <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Analytics</a>
                        <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Community</a>
                    </nav>
                </div>
                <div class="flex items-center">
                    <div class="ml-4 flex-shrink-0">
                        <img class="h-8 w-8 rounded-full" src="https://via.placeholder.com/32" alt="User avatar"/>
                    </div>
                </div>
            </div>
        </div>
    </header> -->
    <!-- Main Content -->
    <main class="py-8 px-4 sm:px-6 lg:px-8">



        <div class="max-w-7xl mx-auto">
        <div class="p-3x py-3">
            <a href="/tools/" class="btn btn-sm btn-primary">Back</a>
        </div>
            <!-- Page Title -->
            <h1 class="text-3xl font-bold text-gray-900 mb-6">Horse Card Generator</h1>
            <!-- Form and Preview Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Left Column: Form -->
                <div class="space-y-6">
                    <!-- Horse Name -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Horse Name</label>
                        <input 
                            bind:value={horseName}
                            type="text" 
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter horse name"
                        />
                    </div>
                    <!-- Horse Photo -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Horse Photo</label>
                        <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            {#if selectedImage}
                                <img src={previewImage} alt="Selected horse photo" class="mx-auto h-40 w-auto object-cover rounded" />
                            {:else}
                                <div class="flex flex-col items-center justify-center">
                                    <svg class="mx-auto h-12 w-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                    </svg>
                                    <p class="mt-2 text-sm text-green-600">Click to upload or drag and drop</p>
                                    <p class="text-xs text-gray-500">PNG, JPG, or GIF (MAX. 800×400px)</p>
                                </div>
                            {/if}
                            <input 
                                type="file" 
                                accept="image/*" 
                                on:change={handleFileUpload}
                                class="hidden" 
                                id="photo-upload"
                            />
                            <label for="photo-upload" class="mt-4 cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                <span class="material-symbols-outlined text-green-600 mr-2">upload</span>
                                <span>Upload Photo</span>
                            </label>
                        </div>
                    </div>
                    <!-- Age and Sex -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Age</label>
                            <input 
                                bind:value={age}
                                type="number" 
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter age"
                            />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Sex</label>
                            <select 
                                bind:value={sex}
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            >
                                {#each availableSexes as sexOption}
                                    <option value={sexOption}>{sexOption}</option>
                                {/each}
                            </select>
                        </div>
                    </div>
                    <!-- Breed and Weight -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Breed</label>
                            <select 
                                bind:value={breed}
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            >
                                {#each availableBreeds as breedOption}
                                    <option value={breedOption}>{breedOption}</option>
                                {/each}
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Weight (lbs)</label>
                            <input 
                                bind:value={weight}
                                type="number" 
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter weight"
                            />
                        </div>
                    </div>
                    <!-- Owner Name -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Owner Name</label>
                        <input 
                            bind:value={ownerName}
                            type="text" 
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter owner name"
                        />
                    </div>
                    <!-- Date -->
                    <div>
                        <p class="text-sm text-gray-500">Date: {new Date().toISOString().split('T')[0]}</p>
                    </div>

                </div>
                <!-- Right Column: Preview Card -->
                <div class=" p-6">
                    <div class="bg-white rounded-xl shadow-lg p-6" id="horse_card">
                    <div class="relative">
                        <img src={previewImage} alt={horseName} class="w-full h-auto  object-cover rounded-lg" />
                        <div class="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-md text-sm text-gray-600">
                            {new Date().toISOString().split('T')[0]}
                        </div>
                    </div>
                    <div class="mt-4">
                        
                        <div class="flex flex-row  justify-between ">
                          <h2 class="text-2xl font-bold text-gray-900">{horseName}</h2>
                          <div><p class="text-sm font-medium bg-gray-300 p-2 rounded-3xl ">{breed}</p></div>
                          <div class="">
                            <p class="text-xs text-green-600 font-medium">Owner</p>
                            <p class="text-sm font-medium">{ownerName}</p>
                          </div>
                        </div>
                        <div class="mt-4 grid grid-cols-3 gap-4">
                            <div>
                                <p class="text-xs text-green-600 font-medium">Age</p>
                                <p class="text-sm font-medium">{age}</p>
                            </div>
                            <div>
                                <p class="text-xs text-green-600 font-medium">Sex</p>
                                <p class="text-sm font-medium">{sex}</p>
                            </div>
                            <div>
                                <p class="text-xs text-green-600 font-medium">Weight</p>
                                <p class="text-sm font-medium">{weight} lbs</p>
                            </div>
                        </div>
                        <!-- <div class="mt-4">
                            <p class="text-xs text-green-600 font-medium">Breed</p>
                            
                        </div> -->
                        <!-- <div class="mt-4">

                        </div> -->
                    </div>
                    </div>
                    <!--  -->
                                        <!-- Action Buttons -->
                    <div class="flex space-x-4 p-4">
                        <button 
                            on:click={downloadCard}
                            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            <span class="material-symbols-outlined mr-2">download</span>
                            Download
                        </button>
                        <button 
                            on:click={generateImage}
                            class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <span class="material-symbols-outlined mr-2">image</span>
                            Image
                        </button>
                        <button 
                            on:click={generatePDF}
                            class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <span class="material-symbols-outlined mr-2">picture_as_pdf</span>
                            PDF
                        </button>
                        <!-- <button 
                            on:click={shareCard}
                            class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <span class="material-symbols-outlined mr-2">share</span>
                            Share
                        </button> -->
                    </div>
                </div>
                <!--  -->
            </div>
        </div>
    </main>
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