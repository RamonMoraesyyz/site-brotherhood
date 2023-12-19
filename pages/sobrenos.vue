<template>
    <div class="h-screen bg-orange-50 text-black flex flex-col">
      
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
    
      
      <main class="flex flex-col bg-orange-50 h-screen">
        <div class="flex flex-row text-5xl font-bold px-7 py-8">
          <h1>Sobre nós</h1>
          <img class="h-12 px-3" src="../public/beer.png" />
        </div>
        <div
          class="flex justify-center h-auto mx-5 my-2 p-8 rounded-3xl border-4 border-gray-800 text-xl text-justify"
        >
        Brotherhood vai além da definição comum de uma cervejaria artesanal, é uma celebração viva da amizade e da paixão por cervejas excepcionais. Fundada por dois visionários unidos por uma visão compartilhada, 
        nossa marca personifica a união e a camaradagem que nascem ao desfrutar de uma cerveja excepcional entre verdadeiros amigos.
        <br> <br>
        Na Brotherhood, acreditamos que a cerveja é uma forma de arte, e cada gole é uma jornada única e memorável. 
        Nosso compromisso com a qualidade vai além da produção de cervejas excepcionais; dedicamo-nos a selecionar apenas os melhores ingredientes e seguir processos rigorosos, assegurando que cada cerveja carregue consigo um sabor autêntico e inesquecível.
        <br> <br>
        Não nos limitamos apenas à produção de cerveja. Prezamos por oferecer um atendimento personalizado e uma experiência completa aos nossos clientes. Nossa equipe está sempre pronta para ajudar na escolha da cerveja perfeita para cada ocasião, 
        e nossos espaços acolhedores são ideais para reunir amigos e saborear juntos momentos cervejeiros extraordinários.
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
    [{ label: 'Cerveja 1' }],
    [{ label: 'Cerveja 2' }],
    [{ label: 'Cerveja 3' }],
    [{ label: 'Cerveja 4' }],
  ];
  </script>