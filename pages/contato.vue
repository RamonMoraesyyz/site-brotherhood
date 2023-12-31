<template>
    <div class="min-h-screen bg-orange-50 text-black">
      <header class="bg-black text-white px-4 flex justify-end">
        <div class="flex flex-row gap-2">
          <UButton color="black" variant="solid" :ui="{ rounded: 'rounded-none' }">Início</UButton>
          <UButton color="black" variant="solid" :ui="{ rounded: 'rounded-none' }">Sobre nós</UButton>
          <UButton color="black" variant="solid" :ui="{ rounded: 'rounded-none' }">Contato</UButton>
          <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
            <UButton color="black" variant="solid" :ui="{ rounded: 'rounded-none' }">Produtos</UButton>
          </UDropdown>
        </div>
      </header>
  
      <main class="mt-5">
        <div class="grid grid-cols-2 gap-4">
            <div class="mb-8">
            <h1 class="text-5xl font-bold px-4 py-8">Contato</h1>

            <h2 class="text-xl px-4 py-2">Rua Francisco Medeiros, N°243, Centro<br>Bela Vista de Goiás/GO - CEP: 75240-000</h2>

            <h3 class="mx-5 my-7 p-4 h-80 rounded-3xl border-4 border-orange-300 text-xl text-justify relative overflow-hidden">
            <img src="../public/maps.jpg" alt="maps" class="absolute inset-0 w-full h-full object-cover rounded-3xl">
            </h3>
        </div>

        <div class="flex flex-col justify-end text-sm font-bold px-4 py-8">

            <div class="w-full mb-4">
                <UFormGroup>
                <UInput placeholder="Nome" />
                </UFormGroup>
            </div>

            <div class="w-full mb-4">
                <UFormGroup>
                <UInput placeholder="E-mail" />
                </UFormGroup>
            </div>

            <UTextarea color="white" variant="outline" placeholder="Mensagem" rows="13"/>

            <button class="my-2 py-2 rounded-lg w-full border-2 border-gray-800 bg-black text-xl text-white">
            Enviar
            </button>
        </div>
    </div>
    </main>
  
      <footer class="flex justify-between bg-gray-950 px-4 items-center text-gray-50">
        <div>2023 | Brotherhood bebidas artesanais</div>
        <div class="flex flex-row items-center">
          <UButton icon="i-ic-sharp-whatsapp" size="sm" color="black" variant="solid" :trailing="false"></UButton>
          <UButton icon="i-ic-outline-mail" size="sm" color="black" variant="solid" :trailing="false"></UButton>
          <UButton icon="i-ri-instagram-line" size="sm" color="black" variant="solid" :trailing="false"></UButton>
          <UButton icon="i-tabler-phone" size="sm" color="black" variant="solid" :trailing="false"></UButton>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  const items = [
    [{ label: 'Witbier' }],
    [{ label: 'Indian Pale Ale' }],
    [{ label: 'Saison' }],
    [{ label: 'Single Trappist' }],
    [{ label: 'Belgian Strong Bitter' }],
    [{ label: 'American Golden Ale' }],
  ];
  </script>