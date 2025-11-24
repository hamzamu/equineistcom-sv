<script>
    // Reactive variables
    let girth = 0;
    let length = 0;
    let breed = "light"; // pony | light | draft
    let estimatedWeight = 0;
    let girthError = "";
    let lengthError = "";
    function calculateWeight() {
        // Reset errors
        girthError = "";
        lengthError = "";
        // Validate inputs
        if (girth > 250) {
            girthError = "Girth cannot exceed 250 cm";
            return;
        }
        if (length > 220) {
            lengthError = "Length cannot exceed 220 cm";
            return;
        }
        if (girth > 0 && length > 0) {
            let baseWeight = (girth * girth * length) / 11850;
            if (breed === "pony") baseWeight *= 0.9;
            if (breed === "draft") baseWeight *= 1.15;
            estimatedWeight = Math.round(baseWeight);
        } else {
            estimatedWeight = 0;
        }
    }
    function resetCalculator() {
        girth = 0;
        length = 0;
        breed = "light";
        estimatedWeight = 0;
        girthError = "";
        lengthError = "";
    }
    function setBreed(selectedBreed) {
        breed = selectedBreed;
        console.log({selectedBreed})
        // Automatically recalculate after breed change
    }
        // Reactive derived value for button classes
    $: breedButtonClasses = {
        pony: breed === 'pony' ? 'bg-black text-white' : 'bg-white border border-[#dbe6df] text-[#111813]/80',
        light: breed === 'light' ? 'bg-black text-white' : 'bg-white border border-[#dbe6df] text-[#111813]/80',
        draft: breed === 'draft' ? 'bg-black text-white' : 'bg-white border border-[#dbe6df] text-[#111813]/80'
    };
    function calculate_weight(){
        if (girth > 0 && length > 0) {
            calculateWeight();
        }else{
            alert("Enter the right values")
        }
    }
</script>
<div class="font-display bg-white">
    <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div class="layout-container flex h-full grow flex-col">
            <div class="flex flex-1 justify-center py-2 lg:px-40 px-4">
                <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <main class="flex flex-col gap-2 py-4">
                        <div class="p-3">
                            <a href="/tools/" class="btn btn-sm btn-primary">Back</a>
                        </div>
                        <!-- Intro -->
                        <div class="flex flex-wrap justify-betweenx gap-3 p-4">
                            
                            <div class="flex min-w-72 flex-col gap-3">
                                <p class="text-[#111813] text-4xl font-black leading-tight tracking-[-0.033em]">
                                    Horse Weight Calculator
                                </p>
                                <p class="text-[#61896f] text-base font-normal leading-normal">
                                    Estimate your horse's weight based on girth and length measurements.
                                </p>
                            </div>
                        </div>
                        <!-- Main Grid -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                            <!-- Inputs -->
                            <div class="md:col-span-2 flex flex-col gap-4">
                                <div class="p-6 bg-background-light rounded-xl border border-solid border-[#f0f4f2]">
                                    <h2 class="text-[#111813] text-[22px] font-bold pb-4">Enter Measurements</h2>
                                    <div class="flex flex-col sm:flex-row max-w-[480px] flex-wrap items-end gap-4">
                                        <label class="flex flex-col min-w-40 flex-1">
                                            <p class="text-[#111813] text-base font-medium pb-2">Girth (cm)</p>
                                            <input 
                                                bind:value={girth}
                                                type="number"
                                                step="0.1"
                                                min="0"
                                                max="250"
                                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111813]
                                                    focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe6df] bg-white 
                                                    focus:border-primary h-14 placeholder:text-[#61896f] p-[15px] text-base"
                                                placeholder="e.g., 180"
                                                on:focus={() => {
                                                if (girth !== null && girth !== '') {
                                                    girth = ''; // Clear the value when focused
                                                }
                                                }}
                                            />
                                            {#if girthError}
                                                <p class="text-red-500 text-sm mt-1">{girthError}</p>
                                            {/if}
                                        </label>
                                        <label class="flex flex-col min-w-40 flex-1">
                                            <p class="text-[#111813] text-base font-medium pb-2">Length (cm)</p>
                                            <input 
                                                bind:value={length}
                                                type="number"
                                                step="0.1"
                                                min="0"
                                                max="220"
                                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111813]
                                                    focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe6df] bg-white 
                                                    focus:border-primary h-14 placeholder:text-[#61896f] p-[15px] text-base"
                                                placeholder="e.g., 165"
                                                on:focus={() => {
                                                if (length !== null && length !== '') {
                                                    length = ''; // Clear the value when focused
                                                }
                                                }}
                                            />
                                            {#if lengthError}
                                                <p class="text-red-500 text-sm mt-1">{lengthError}</p>
                                            {/if}
                                        </label>
                                    </div>
                                    <p class="text-[#61896f] text-sm mt-2">Formula: (Girth² × Length) / 11850</p>
                                    <p class="text-sm p-2">Girth (Heart Girth): Wrap a measuring tape around the horse’s barrel, just behind the withers and elbows.</p>
                                    <p class="text-sm p-2"> Length: Measure from the point of the shoulder in a straight line to the point of the buttock.</p>
                                </div>
                                <!-- Breed Adjustment -->
                                <div class="p-6 bg-background-light rounded-xl border border-solid border-[#f0f4f2]">
                                    <h2 class="text-[#111813] text-[22px] font-bold pb-4">Breed Adjustment</h2>
                                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <button class={breedButtonClasses.pony} on:click={() => setBreed('pony')}>
                                            Pony
                                        </button>
                                        <button class={breedButtonClasses.light} on:click={() => setBreed('light')}>
                                            Light Horse
                                        </button>
                                        <button class={breedButtonClasses.draft} on:click={() => setBreed('draft')}>
                                            Draft Horse
                                        </button>
                                    </div>
                                    <p class="text-[#61896f] text-xs mt-4 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                                        <strong>Why breed matters:</strong> Different breeds have varying body compositions and bone structures. 
                                        Ponies have denser bones and more compact bodies, so their weight per unit of measurement is typically higher (hence the -10% adjustment). 
                                        Draft horses have larger, heavier bones and more muscle mass, requiring a +15% adjustment to account for their greater density.
                                    </p>
                                </div>
                                <!-- Calculate Weight -->
                                <!-- Breed Adjustment -->
                                <div class="p-6 bg-background-light justify-end flex ">
                                    <button class=" font-bold btn btn-primary btn-lg" on:click={()=>{calculate_weight()}}>Calculate</button>
                                </div>
                            </div>
                            <!-- Result -->
                            <div class="md:col-span-1 flex flex-col gap-4">
                                <div class="bg-background-light rounded-xl p-6 border border-solid border-[#f0f4f2] flex flex-col items-centerx justify-centerx text-center h-full">
                                    <h2 class="text-[#61896f] text-lg font-medium">Estimated Weight</h2>
                                    <img 
                                    alt="Diagram showing how to measure a horse"
                                    class="w-full md:w-1/3x rounded-lg object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrLYEx0KP3yCL-tQ15jzcuLe6N3nasHPugc_sqC7JKg1U8Qw6Tt_kKYBpDXJtk9G-aoInGR-bKc6u527aDbdhaPU4UoP231cFCaBEG0UJHoWzctRbgmMyMftbyeYZZaaxKFr3AKU3lKA4c2Rg3Jko0exE3R90G2bG2oMkfCNxkrBlUqWJjt9_mFDsHCUMUe6KzzbE81OCuOv_W2AgJapxuqLne5jGqOm6KRXoJ9ghT29VcMsQACvZugIXgMTljPII5r2QFtekWyWw"
                                    />
                                    <p class="text-primary text-6xl font-black">
                                        {estimatedWeight || ""}
                                    </p>
                                    <p class="text-[#111813] text-2xl font-bold">kg</p>
                                    <button
                                        on:click={resetCalculator}
                                        class="mt-4 flex w-full max-w-[480px] items-center justify-center rounded-lg h-10 px-4 
                                        bg-transparent text-[#111813] text-sm font-bold border border-[#dbe6df] gap-2"
                                    >
                                        <span class="material-symbols-outlined text-base">refresh</span>
                                        <span>Reset</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- Measuring Instructions -->
                        <div class="p-4x border p-12 rounded-3xl border-gray-500 hidden">
                            <h2 class="text-[#111813] text-[22px] font-bold pb-3 pt-5">How to Measure Your Horse</h2>
                            <div class="flex flex-col md:flex-row gap-8 items-start text-[#61896f]">
                                <div class="flex flex-col gap-4">
                                    <div>
                                        <h3 class="text-[#111813] font-bold mb-1">Girth (Heart Girth)</h3>
                                        <p>Girth (Heart Girth): Wrap a measuring tape around the horse’s barrel, just behind the withers and elbows.</p>
                                    </div>
                                    <div>
                                        <h3 class="text-[#111813] font-bold mb-1">Length</h3>
                                        <p> LengthMeasure from the point of the shoulder in a straight line to the point of the buttock.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </div>
</div>
