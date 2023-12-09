<template>
  <div class="relative w-full h-screen overflow-hidden">
    <video autoplay muted loop class="object-cover w-full h-full">
     
      <source src="../public/beervideo.mp4" type="video/mp4">
      
    </video>

    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <img src="../public/logobrotherhood.png" alt="Logo" class="w-32 md:w-48 lg:w-64 xl:w-80 mx-auto" />
    </div>

    <header class="absolute top-0 right-0 left-0 bg-black text-white px-4 flex justify-end">
      <div class="flex flex-row gap-2">
        <UButton color="black" variant="solid" :ui="{ rounded: 'rounded-none' }">Início</UButton>
        <UButton color="black" variant="solid" :ui="{ rounded: 'rounded-none' }">Sobre nós</UButton>
        <UButton color="black" variant="solid" :ui="{ rounded: 'rounded-none' }">Contato</UButton>
        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
          <UButton color="black" variant="solid" :ui="{ rounded: 'rounded-none' }">Produtos</UButton>
        </UDropdown>
      </div>
    </header>
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
