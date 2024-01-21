<template>
<main class="text-gray-800 px-7">
    <div class="grid grid-cols-2 gap-4">
        <div class="mb-8">
            <h1 class="text-5xl font-bold py-8">Contato</h1>
            <h2 class="text-lg py-2">Rua Francisco Medeiros, N°243, Centro<br>Bela Vista de Goiás/GO - CEP: 75240-000</h2>
            <div class="my-7 p-4 h-80 rounded-3xl border-4 border-orange-300 text-xl text-justify relative overflow-hidden">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.0950052721955!2d-48.95635125352049!3d-16.969876506355227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935f24a3efd5b04f%3A0x52f8564a82c394a!2sR.%20Francisco%20Medeiros%2C%20243%2C%20Bela%20Vista%20de%20Goi%C3%A1s%20-%20GO%2C%2075240-000!5e0!3m2!1spt-BR!2sbr!4v1704590202068!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="absolute inset-0 w-full h-full object-cover rounded-3xl"
            alt="maps"
            ></iframe>
            </div>
        </div>
        <div class="flex flex-col justify-end text-sm font-bold px-4 py-8">
            <UFormGroup class="w-full mb-4">
                <UInput placeholder="Nome" />
            </UFormGroup>
            <UFormGroup class="w-full mb-4">
                <UInput placeholder="E-mail" />
            </UFormGroup>
            <UTextarea color="white" variant="outline" placeholder="Mensagem" :rows="13"/>
            <button class="my-2 py-2 rounded-lg w-full border-2 border-gray-800 bg-black text-xl text-gray-100">
            Enviar
            </button>
        </div>
    </div>
</main>
</template>