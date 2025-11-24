<div class="bg-white p-6">
    <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="p-3x py-3">
            <a href="/tools/" class="btn btn-sm btn-primary">Back</a>
        </div>
        <div class="flex flex-wrap justify-betweenx gap-4 items-center mb-6">
            <div class="flex flex-col gap-1">
                <h1 class="text-gray-900 text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">Horse Vitals & Normals</h1>
                <p class="text-gray-500 text-base font-normal leading-normal">A quick reference guide for adult horse baseline values.</p>
            </div>
            <div class="flex flex-wrap flex-1 justify-end gap-4">
            <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 text-gray-900 text-sm font-bold leading-normal tracking-[0.015em] gap-2 shrink-0">
                <span class="material-symbols-outlined">print</span>
                <span class="truncate">Print</span>
            </button>
            <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 text-gray-900 text-sm font-bold leading-normal tracking-[0.015em] gap-2 shrink-0">
                <span class="material-symbols-outlined">print</span>
                <span class="truncate">QR Code for This Page</span>
            </button>
    </div>
        </div>

        <!-- Search Bar -->
        <div class="mb-6 hidden">
            <label class="flex flex-col min-w-40 h-12 w-full">
                <div class="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div class="text-gray-500 flex bg-white items-center justify-center pl-4 rounded-l-lg border-r-0">
                        <span class="material-symbols-outlined">search</span>
                    </div>
                    <input class="form-input flex w-full min-w-0 flex-1 border border-gray-200  resize-none overflow-hidden rounded-lg text-gray-900 focus:outline-1 focus:ring-2 focus:ring-primary/50 border-none bg-white h-full placeholder:text-gray-500 px-4 rounded-l-none pl-2 text-base font-normal leading-normal" placeholder="Find a vital sign..." value=""/>
                </div>
            </label>
        </div>

        <!-- Grid Layout -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- Temperature -->
            <div class="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-green-500 text-2xl">device_thermostat</span>
                    <div>
                        <h2 class="text-gray-900 text-xl font-bold leading-tight">Temperature</h2>
                        <p class="text-gray-500 text-base font-normal leading-normal">99.0 - 101.5 °F</p>
                        <p>37.2°C – 38.6°C</p>
                        <p class="text-gray-500 text-sm font-normal leading-normal">Status: Stable</p>
                    </div>
                </div>
                <a href="https://www.youtube.com/watch?v=VJqjRwUeLkQ" target="_blank" class="text-xs font-medium text-blue-600 hover:underline mt-1 inline-flex items-center gap-1">
                    ▶️ How to take a horse’s temperature (video)
                </a>
            </div>

            <!-- Heart Rate -->
            <div class="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-green-500 text-2xl">monitor_heart</span>
                    <div>
                        <h2 class="text-gray-900 text-xl font-bold leading-tight">Heart Rate</h2>
                        <p class="text-gray-500 text-base font-normal leading-normal">28 - 44 bpm (at rest)</p>
                        <p class="text-gray-500 text-sm font-normal leading-normal">Status: Trending Up</p>
                    </div>
                </div>
                <a href="https://www.horsescience.com/how-to-check-horse-heart-rate/" target="_blank" class="text-xs font-medium text-blue-600 hover:underline mt-1 inline-flex items-center gap-1">
                    📘 Step-by-step guide (article)
                </a>
            </div>

            <!-- Respiration -->
            <div class="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-green-500 text-2xl">air</span>
                    <div>
                        <h2 class="text-gray-900 text-xl font-bold leading-tight">Respiration</h2>
                        <p class="text-gray-500 text-base font-normal leading-normal">10 - 24 bpm (at rest)</p>
                        <p class="text-gray-500 text-sm font-normal leading-normal">Status: Stable</p>
                    </div>
                </div>
                <a href="https://www.youtube.com/watch?v=5KcT5rNvWuA" target="_blank" class="text-xs font-medium text-blue-600 hover:underline mt-1 inline-flex items-center gap-1">
                    ▶️ Check breathing rate (video tutorial)
                </a>
            </div>

            <!-- Capillary Refill -->
            <div class="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-green-500 text-2xl">timer</span>
                    <div>
                        <h2 class="text-gray-900 text-xl font-bold leading-tight">Capillary Refill</h2>
                        <p class="text-gray-500 text-base font-normal leading-normal">Less than 2 seconds</p>
                        <p class="text-gray-500 text-sm font-normal leading-normal">Status: Normal</p>
                    </div>
                </div>
                <a href="https://www.ahsa.org/education/resources/capillary-refill-time/" target="_blank" class="text-xs font-medium text-blue-600 hover:underline mt-1 inline-flex items-center gap-1">
                    📘 AHS Guide to CRT (official resource)
                </a>
            </div>

            <!-- Gut Sounds -->
            <div class="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-green-500 text-2xl">sentiment_very_dissatisfied</span>
                    <div>
                        <h2 class="text-gray-900 text-xl font-bold leading-tight">Gut Sounds</h2>
                        <p class="text-gray-500 text-base font-normal leading-normal">Gurgling sounds present</p>
                        <p class="text-gray-500 text-sm font-normal leading-normal">Status: Active</p>
                    </div>
                </div>
                <a href="https://www.youtube.com/watch?v=OYfZiDmXgIc" target="_blank" class="text-xs font-medium text-blue-600 hover:underline mt-1 inline-flex items-center gap-1">
                    ▶️ Listen for gut sounds (how-to video)
                </a>
            </div>

            <!-- Mucous Membranes -->
            <div class="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-green-500 text-2xl">dentistry</span>
                    <div>
                        <h2 class="text-gray-900 text-xl font-bold leading-tight">Mucous Membranes</h2>
                        <p class="text-gray-500 text-base font-normal leading-normal">Moist and pink</p>
                        <p class="text-gray-500 text-sm font-normal leading-normal">Status: Healthy</p>
                    </div>
                </div>
                <a href="https://www.rushhorseclinic.com/checking-mucous-membranes/" target="_blank" class="text-xs font-medium text-blue-600 hover:underline mt-1 inline-flex items-center gap-1">
                    📘 How to assess gums (vet clinic guide)
                </a>
            </div>

            <!-- Teeth Condition -->
            <div class="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-green-500 text-2xl">emergency_heat</span>
                    <div>
                        <h2 class="text-gray-900 text-xl font-bold leading-tight">Teeth Condition</h2>
                        <p class="text-gray-500 text-base font-normal leading-normal">Check every 6-12 months</p>
                        <p class="text-gray-500 text-sm font-normal leading-normal">Status: Up-to-date</p>
                    </div>
                </div>
                <a href="https://www.youtube.com/watch?v=1bS3dZxkzqE" target="_blank" class="text-xs font-medium text-blue-600 hover:underline mt-1 inline-flex items-center gap-1">
                    ▶️ Horse dental care explained (video)
                </a>
            </div>

            <!-- Farrier Schedule -->
            <div class="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-green-500 text-2xl">sprint</span>
                    <div>
                        <h2 class="text-gray-900 text-xl font-bold leading-tight">Farrier Schedule</h2>
                        <p class="text-gray-500 text-base font-normal leading-normal">Trim every 6-8 weeks</p>
                        <p class="text-gray-500 text-sm font-normal leading-normal">Status: Next week</p>
                    </div>
                </div>
                <a href="https://www.youtube.com/watch?v=4kP6tB7j2dU" target="_blank" class="text-xs font-medium text-blue-600 hover:underline mt-1 inline-flex items-center gap-1">
                    ▶️ Farrier trimming basics (tutorial)
                </a>
            </div>

            <!-- Hydration Status -->
            <div class="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-green-500 text-2xl">water_drop</span>
                    <div>
                        <h2 class="text-gray-900 text-xl font-bold leading-tight">Hydration Status</h2>
                        <p class="text-gray-500 text-base font-normal leading-normal">Skin snaps back in less than 1s</p>
                        <p class="text-gray-500 text-sm font-normal leading-normal">Status: Optimal</p>
                    </div>
                </div>
                <a href="https://www.youtube.com/watch?v=1Cq1o0Kl2y0" target="_blank" class="text-xs font-medium text-blue-600 hover:underline mt-1 inline-flex items-center gap-1">
                    ▶️ How to test hydration (simple demo)
                </a>
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