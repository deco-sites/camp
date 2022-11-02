export default function GetStarted() {
  return (
    <section class="pt-20 pb-32">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center -m-6">
          <div class="w-full md:w-1/2 p-6">
            <div class="bg-decogreen p-1 mx-auto max-w-max overflow-hidden rounded-full">
              <img
                class="object-cover rounded-full"
                src="/deco-round.png"
                alt=""
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 p-6">
            <div class="md:max-w-md">
              <h2 class="mb-8 font-heading font-bold text-decogreen text-3xl sm:text-4xl">
                {`Comece a aprender webdev construindo sites de ecommerce reais.`}
              </h2>
              <p class="mb-8 text-lg font-light">
                Nosso curso gratuito te ensina tecnologias de ponta —
                literalmente — para fazer sites rápidos. No final, concorra a
                vagas de estágio em grandes marcas.
              </p>
              <a href="https://forms.gle/p2rKQv8sG5BTKXdv8" target="_blank">
                <button class="text-2xl bg-primary p-5 rounded-xl text-primary-dark font-bold shadow-xl">
                  Quero participar!
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
