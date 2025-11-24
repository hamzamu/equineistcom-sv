
  <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
    <!-- Header -->
    <header class="sticky top-0 z-10 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-4 p-4">
        <div class="flex items-center gap-6">
          <div class="flex gap-3 items-center">
            <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Sunny Meadows Farm logo" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7o45vf_9mKxO_HSFqe1uMe22Bc9HI-iNsFemLBY0x0zXXdvumI3-ZeXyeeyrKsutHhYODBI-ubnk40A0_rouPeOBYv0znIe3O57w5dnJEXNAPECqVI-_UocqedD_fTaIFNP385weFQKZFAbCCRD6FOjZbKbZtZweCThccJVeh3z0VapFhHk_jmbhUqjKrxcxxJA07xBra5QiSN34Cum0pMd1_bycUMkcMR2OCCDkams0uWaf8Cf05inoppT9vVtLV-FpwbWEP1IA");'></div>
            <!-- <h1 class="text-gray-900 text-base font-medium leading-normal hidden sm:block">Sunny Meadows Farm</h1> -->
             <h1 class="text-gray-900 text-2xl sm:text-2xl font-black leading-tight tracking-[-0.033em]">Equineist.com' Horse Management Tools</h1>
          </div>

          <nav class="flex gap-1 sm:gap-2 hidden">
            <a class="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100" href="#">
              <span class="material-symbols-outlined text-base">dashboard</span>
              <p class="text-sm font-medium leading-normal hidden md:block">Dashboard</p>
            </a>
            <a class="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100" href="#">
              <span class="material-symbols-outlined text-base">emergency_heat</span>
              <p class="text-sm font-medium leading-normal hidden md:block">Horses</p>
            </a>
            <a class="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/20 text-gray-900" href="#">
              <span class="material-symbols-outlined text-base" style="font-variation-settings: 'FILL' 1;">widgets</span>
              <p class="text-sm font-medium leading-normal hidden md:block">Tools</p>
            </a>
            <a class="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100" href="#">
              <span class="material-symbols-outlined text-base">calendar_month</span>
              <p class="text-sm font-medium leading-normal hidden md:block">Schedule</p>
            </a>
            <a class="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100" href="#">
              <span class="material-symbols-outlined text-base">group</span>
              <p class="text-sm font-medium leading-normal hidden md:block">Staff</p>
            </a>
          </nav>
        </div>
        <p>For Horse owners</p>

        <!-- <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-gray-900 text-sm font-bold leading-normal tracking-[0.015em] shrink-0">
          <span class="truncate">Add New Horse</span>
        </button> -->
        
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 w-full p-4 sm:p-6 md:p-8">
      <!--  -->
      <div class="layout-content-container flex flex-col max-w-7xl mx-auto flex-1">
        <!-- <div class="flex flex-col gap-1 text-center mb-8">
          <p class="text-gray-900 text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">Horse Management Tools</p>
          <p class="text-gray-500 text-base font-normal leading-normal">Your central hub for quick calculations, guides, and generators.</p>
        </div> -->

        <!-- Search Bar -->
        <!-- <div class="px-4 py-3 mb-6 max-w-xl mx-auto w-full">
          <label class="flex flex-col min-w-40 h-12 w-full">
            <div class="flex w-full flex-1 items-stretch rounded-lg h-full shadow-sm">
              <div class="text-gray-500 flex bg-white items-center justify-center pl-4 rounded-l-lg border-y border-l border-gray-200">
                <span class="material-symbols-outlined">search</span>
              </div>
              <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-gray-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-y border-r border-gray-200 bg-white h-full placeholder:text-gray-500 px-4 text-base font-normal leading-normal" placeholder="Find a tool..." value=""/>
            </div>
          </label>
        </div> -->

        <!-- Grid of Tools -->
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 auto-rows-fr">
          <!-- Hero Card -->
          <a href="#" class="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 md:col-span-2">
            <span class="material-symbols-outlined text-primary text-4xl">info</span>
            <div>
              <h2 class="text-gray-900 text-xl font-bold leading-tight">Your Equine Toolkit</h2>
              <p class="text-gray-500 text-base font-normal leading-normal mt-1">These tools are designed to simplify your daily horse management. From health checks to creative naming, get quick access to the information you need, right when you need it.</p>
            </div>
          </a>

          <!-- Weight Calculator -->
          <a href="/tools/weight-calc/" class="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 justify-between">
            <span class="material-symbols-outlined text-primary text-2xl">scale</span>
            <div class="mt-auto">
              <h2 class="text-gray-900 text-base font-bold leading-tight">Weight Calculator</h2>
              <p class="text-gray-500 text-sm font-normal leading-normal">Estimate your horse's weight.</p>
            </div>
          </a>

          <!-- Breed Guide -->
          <a  href="/tools/breeds" class="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 justify-between">
            <span class="material-symbols-outlined text-primary text-2xl">book_2</span>
            <div class="mt-auto">
              <h2 class="text-gray-900 text-base font-bold leading-tight">Breed Guide</h2>
              <p class="text-gray-500 text-sm font-normal leading-normal">Explore different horse breeds.</p>
            </div>
          </a>

          <!-- Normal Values -->
          <a href="/tools/values" class="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 justify-between">
            <span class="material-symbols-outlined text-primary text-2xl">favorite</span>
            <div class="mt-auto">
              <h2 class="text-gray-900 text-base font-bold leading-tight">Normal Values</h2>
              <p class="text-gray-500 text-sm font-normal leading-normal">Quick reference for vital signs.</p>
            </div>
          </a>

          <!-- Name Generator -->
          <a  href="/tools/name_generator" class="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 justify-between">
            <span class="material-symbols-outlined text-primary text-2xl">lightbulb</span>
            <div class="mt-auto">
              <h2 class="text-gray-900 text-base font-bold leading-tight">Name Generator</h2>
              <p class="text-gray-500 text-sm font-normal leading-normal">Find the perfect horse name.</p>
            </div>
          </a>

          <!-- Quote Directory -->
          <a href="/tools/quotes" class="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 justify-between md:col-span-2 lg:col-span-1">
            <span class="material-symbols-outlined text-primary text-2xl">format_quote</span>
            <div class="mt-auto">
              <h2 class="text-gray-900 text-base font-bold leading-tight">Quote Directory</h2>
              <p class="text-gray-500 text-sm font-normal leading-normal">Inspirational equestrian quotes.</p>
            </div>
          </a>

          <!-- Horse Card Generator -->
          <a href="/tools/card-generator" class="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 justify-between lg:col-span-2">
            <span class="material-symbols-outlined text-primary text-2xl">contact_mail</span>
            <div class="mt-auto">
              <h2 class="text-gray-900 text-base font-bold leading-tight">Horse Card Generator</h2>
              <p class="text-gray-500 text-sm font-normal leading-normal">Create shareable info cards.</p>
            </div>
          </a>

          <!-- Profile Generator -->
          <a  href="/tools/profile-generator" class="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 justify-between">
            <span class="material-symbols-outlined text-primary text-2xl">badge</span>
            <div class="mt-auto">
              <h2 class="text-gray-900 text-base font-bold leading-tight">Profile Generator</h2>
              <p class="text-gray-500 text-sm font-normal leading-normal">Build detailed horse profiles.</p>
            </div>
          </a>

          <!-- Medical Records -->
          <a  href="/tools/medical-records" class="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 md:col-span-3 lg:col-span-2">
            <span class="material-symbols-outlined text-primary text-4xl">medical_services</span>
            <div>
              <h2 class="text-gray-900 text-xl font-bold leading-tight">Medical Records</h2>
              <p class="text-gray-500 text-base font-normal leading-normal mt-1">Access and manage all health documents in one secure place. A vital tool for comprehensive care.</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  </div>
