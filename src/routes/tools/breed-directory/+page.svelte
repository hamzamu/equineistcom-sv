
<div class="bg-white">
    <!-- Header Section -->
    <header class="py-8 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-black tracking-tighter text-gray-900">Horse Breed Explorer</h1>
            <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
                Discover and learn about the most common horse breeds from around the world.
            </p>
            <div class="mt-8 w-full max-w-2xl mx-auto">
                <label class="relative flex items-center">
                    <span class="material-symbols-outlined absolute left-4 text-gray-500">search</span>
                    <input class="w-full h-14 rounded-full border-0 bg-gray-50 pl-12 pr-6 text-lg text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-shadow" placeholder="Search for a breed..." type="search"/>
                </label>
            </div>
        </div>
    </header>

    <!-- Navigation Bar -->
    <nav class="border-b border-gray-200 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <div class="flex-shrink-0 flex items-center">
                        <span class="material-symbols-outlined text-2xl text-gray-900 mr-2">pets</span>
                        <span class="font-bold text-xl text-gray-900">Horse Farm Mgmt</span>
                    </div>
                    <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <a href="#" class="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Dashboard</a>
                        <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Horses</a>
                        <a href="#" class="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Breeds</a>
                        <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Schedule</a>
                    </div>
                </div>
                <div class="flex items-center">
                    <button class="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Add Horse
                    </button>
                    <div class="ml-4 flex-shrink-0">
                        <img class="h-8 w-8 rounded-full" src="https://via.placeholder.com/32" alt="User avatar"/>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="py-8 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Arabian Card -->
            <div class="bg-gray-50 rounded-xl p-6">
                <h2 class="text-2xl font-bold text-gray-900 mb-2">Arabian</h2>
                <p class="text-sm text-gray-600 mb-4">Origin: Arabian Peninsula</p>
                <div class="flex space-x-2 mb-4">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Endurance</span>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Pleasure</span>
                </div>
                <p class="text-gray-600 mb-4">
                    Known for its distinctive head shape and high tail carriage, the Arabian is one of the most easily recognizable horse breeds in the world. They are spirited, versatile, and excel in endurance riding.
                </p>
                <div class="mb-4">
                    <p class="font-semibold text-sm text-gray-900 mb-1">Prominent In:</p>
                    <div class="flex space-x-4 text-sm text-gray-600">
                        <span>🇸🇦 Saudi Arabia</span>
                        <span>🇺🇸 United States</span>
                    </div>
                </div>
                <div class="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>
            </div>

            <!-- Thoroughbred Card -->
            <div class="bg-gray-50 rounded-xl p-6">
                <div class="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>
                <h2 class="text-xl font-bold text-gray-900 mb-2">Thoroughbred</h2>
                <p class="text-sm text-gray-600 mb-4">Origin: England</p>
                <div class="flex space-x-2 mb-4">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Racing</span>
                </div>
                <a href="#" class="text-sm font-bold text-blue-600 hover:text-blue-800">Learn More →</a>
            </div>

            <!-- Quarter Horse Card -->
            <div class="bg-gray-50 rounded-xl p-6">
                <div class="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>
                <h2 class="text-xl font-bold text-gray-900 mb-2">Quarter Horse</h2>
                <p class="text-sm text-gray-600 mb-4">Origin: United States</p>
                <div class="flex space-x-2 mb-4">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Rodeo</span>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Work</span>
                </div>
                <a href="#" class="text-sm font-bold text-blue-600 hover:text-blue-800">Learn More →</a>
            </div>

            <!-- Appaloosa Card -->
            <div class="bg-gray-50 rounded-xl p-6">
                <h2 class="text-xl font-bold text-gray-900 mb-2">Appaloosa</h2>
                <p class="text-sm text-gray-600 mb-4">Origin: United States</p>
                <p class="text-gray-600 mb-4">
                    Distinctive for its colorful spotted coat pattern, the Appaloosa is a versatile and popular breed.
                </p>
                <div class="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>
            </div>

            <!-- Clydesdale Card -->
            <div class="bg-gray-50 rounded-xl p-6">
                <h2 class="text-xl font-bold text-gray-900 mb-2">Clydesdale</h2>
                <p class="text-sm text-gray-600 mb-4">Origin: Scotland</p>
                <p class="text-gray-600 mb-4">
                    A gentle giant, this draft horse is famous for its size, strength, and feathered legs.
                </p>
                <div class="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>
            </div>

            <!-- Friesian Card -->
            <div class="bg-gray-50 rounded-xl p-6">
                <h2 class="text-xl font-bold text-gray-900 mb-2">Friesian</h2>
                <p class="text-sm text-gray-600 mb-4">Origin: Netherlands</p>
                <div class="flex space-x-2 mb-4">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Dressage</span>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Driving</span>
                </div>
                <p class="text-gray-600 mb-4">
                    Graceful and nimble with a stunning black coat and long, flowing mane and tail, the Friesian is a truly eye-catching breed. Originally bred as a war horse, it now excels in dressage and driving.
                </p>
                <div class="mb-4">
                    <p class="font-semibold text-sm text-gray-900 mb-1">Prominent In:</p>
                    <div class="flex space-x-4 text-sm text-gray-600">
                        <span>🇳🇱 Netherlands</span>
                        <span>🇩🇪 Germany</span>
                    </div>
                </div>
                <div class="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>
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
```