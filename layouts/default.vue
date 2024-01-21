<template>
  <div class="flex flex-col min-h-screen bg-orange-50">

    <!-- Header -->
    <BrotherNavbar />

    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <BrotherFooter />

  </div>
</template>
