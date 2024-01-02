<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <BrotherNavbar />

    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <BrotherFooter />
  </div>
</template>
