<template>
    <div class="min-h-screen bg-orange-50 text-black flex flex-col">
      
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
    
      
      <div class="flex-grow flex">
      
        <div class="md:w-1/2 bg-orange-50">
       
            <img src="../../public/jabuticaba.png" alt="Product Image" class="w-1/3 mx-auto mt-12">
            </div>

            <div class="md:w-2/3 flex flex-col p-4">
        
            <div class="mb-6">
                <div class="flex flex-col justify-center h-auto mx-1 my-2 p-8 rounded-3xl border-4 border-gray-800 text-xl text-justify mt-10">
                    <h2 class="font-bold text-2xl mb-4">Vinho de Jabuticaba</h2>
                    
                    <p>
                        O vinho de jabuticaba é uma bebida única, destacando-se pela coloração vibrante, sabor agridoce equilibrado com notas frutadas intensas da jabuticaba. Com aroma marcante, teor alcoólico elevado e versatilidade, 
                        é apreciado tanto por si só quanto em harmonização com queijos finos e pratos que complementam suas características frutadas. 
                        Uma opção exótica para apreciadores de vinhos distintos.
                    </p>
          
          
                </div>

            </div>

            <div class="flex flex-col md:flex-row md:justify-center space-y-4 md:space-x-4 md:space-y-0">
            <div class="md:w-2/3 bg-orange-50 p-8 border-4 border-gray-800 font-bold text-xl rounded-3xl text-center">ABV: 15%</div>
            <div class="md:w-2/3 bg-orange-50 p-8 border-4 border-gray-800 font-bold text-xl rounded-3xl text-center">IBU: 6</div>
            <div class="md:w-2/3 bg-orange-50 p-8 border-4 border-gray-800 font-bold text-xl rounded-3xl text-center">EBC: 47</div>
        </div>
      </div>
        </div>
    
      
      
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
    [{ label: 'Cerveja 1' }],
    [{ label: 'Cerveja 2' }],
    [{ label: 'Cerveja 3' }],
    [{ label: 'Cerveja 4' }],
  ];
  </script>