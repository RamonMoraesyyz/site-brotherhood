<template>
  <footer class="fixed bottom-0 w-full bg-gray-900 px-4 flex justify-between items-center text-gray-50">

    <div>{{ new Date().getFullYear() }} | Brotherhood bebidas artesanais</div>

    <div class="flex flex-row items-center">
      <UButton icon="i-ic-sharp-whatsapp" size="sm" color="black" to="https://wa.me/5562996878970" target="_blank"> </UButton>
      <UButton icon="i-ic-outline-mail" size="sm" color="black" to="mailto: https://ramon.k13@gmail.com"></UButton>
      <UButton icon="i-ri-instagram-line" size="sm" color="black" to="https://www.instagram.com/?hl=pt-br" target="_blank"></UButton>
      <UButton icon="i-tabler-phone" size="sm" color="black" to="tel:+5562996878970"></UButton>
    </div>
  </footer>
</template>