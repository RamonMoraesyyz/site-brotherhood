<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Header -->
    <header class="absolute top-0 right-0 left-0 bg-gray-900 text-white px-4 flex justify-end z-10">
      <div class="flex flex-row gap-2">
        <UButton color="bg-gray-900" variant="solid" :ui="{ rounded: 'rounded-none' }" to="/">Início</UButton>
        <UButton color="bg-gray-900" variant="solid" :ui="{ rounded: 'rounded-none' }" to="/sobrenos">Sobre nós</UButton>
        <UButton color="bg-gray-900" variant="solid" :ui="{ rounded: 'rounded-none' }" to="/contato">Contato</UButton>
        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
          <UButton color="bg-gray-900" variant="solid" :ui="{ rounded: 'rounded-none' }">Produtos</UButton>
        </UDropdown>
      </div>
    </header>

    <!-- Vídeo de Fundo -->
    <div class="absolute w-full h-full bg-yellow-500 opacity-50">
      <video autoplay muted loop class="object-cover w-full h-full">
        <source src="../public/beervideo.mp4" type="video/mp4">
      </video>
    </div>

    <!-- Logo -->
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
      <img src="../public/logobrotherhood.png" alt="Logo" class="w-32 sm:w-80 mx-auto" />
    </div>

    <!-- Footer -->
    <footer class="absolute bottom-0 right-0 left-0 bg-gray-900 px-4 py-2 text-gray-50 flex justify-between items-center z-10">
      <div>2023 | Brotherhood bebidas artesanais</div>
      <div class="flex flex-row items-center">
        <UButton icon="i-ic-sharp-whatsapp" size="sm" color="bg-gray-900" variant="solid" :trailing="false"></UButton>
        <UButton icon="i-ic-outline-mail" size="sm" color="bg-gray-900" variant="solid" :trailing="false"></UButton>
        <UButton icon="i-ri-instagram-line" size="sm" color="bg-gray-900" variant="solid" :trailing="false"></UButton>
        <UButton icon="i-tabler-phone" size="sm" color="bg-gray-900" variant="solid" :trailing="false"></UButton>
      </div>
    </footer>
  </div>
</template>

<script setup>
const items = [
  [{ label: 'Cerveja 1' }],
  [{ label: 'Cerveja 2' }],
  [{ label: 'Cerveja 3' }],
  [{ label: 'Cerveja 4' }],
];
</script>
