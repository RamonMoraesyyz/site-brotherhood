<script setup>
    //adicione aqui o seu código para envio do formulário de contato com o formspree 🍺
    const dadosDoFormulario = reactive({
    name: undefined,
    email: undefined,
    message: undefined
    });


    async function enviaFormulario() {
  try {
    console.log(JSON.stringify(dadosDoFormulario))

    //envia os dados do formulário para o formspree
    const {error} = await $fetch('https://formspree.io/f/xvoeakye', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosDoFormulario)
    });

    // Se houver erro, cria uma mensagem de erro que o bloco catch irá capturar
    if (error) {
      throw new Error(`Erro na requisição: ${error.data}`);
    }

    // Limpa campos do formulário após o envio bem-sucedido
    dadosDoFormulario.name = '';
    dadosDoFormulario.email = '';
    dadosDoFormulario.message = '';
  } catch (erro) {
    // Se houver erro, exibe no console
    console.error('Erro ao enviar formulário:', erro);
  }
}


</script>

<template>
<main class="text-gray-800 px-7">
    <div class="grid grid-cols-2 gap-4">
        <div class="mb-8">
            <h1 class="text-5xl font-bold py-8">Contato</h1>
            <h2 class="text-lg py-2">Rua Francisco Medeiros, N°243, Centro<br>Bela Vista de Goiás/GO - CEP: 75240-000</h2>
            <div class="mt-6 p-4 h-80 rounded-3xl border-4 border-orange-300 text-xl text-justify relative overflow-hidden">
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
        <div class="flex flex-col justify-end text-sm font-bold px-4 py-6">
            <UForm @submit="enviaFormulario" :state="dadosDoFormulario">
                <UFormGroup class="w-full mb-4">
                    <UInput placeholder="Nome" required minlength="2" maxlength="30" v-model="dadosDoFormulario.name"/>
                </UFormGroup>
                <UFormGroup class="w-full mb-4">
                    <UInput placeholder="E-mail" required type="email" minlength="2" maxlength="30" v-model="dadosDoFormulario.email" />
                </UFormGroup>
                <UTextarea color="white" variant="outline" placeholder="Mensagem" :rows="13" required  minlength="10" maxlength="500" v-model="dadosDoFormulario.message"/>
                <button class="my-2 py-2 rounded-lg w-full border-2 border-gray-800 bg-black text-xl text-gray-100">
                    Enviar
                </button>
            </UForm>
        </div>
    </div>
</main>
</template>