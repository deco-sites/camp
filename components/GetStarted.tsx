/** @jsx h */
import { h } from "preact";

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
              <h2 class="mb-3 font-heading font-bold text-decogreen text-6xl sm:text-7xl">
                Trabalhe para empresas que constroem o futuro da tecnologia de
                digital experience.
              </h2>
              <p class="mb-4 text-lg font-light">
                Aqui você encontra oportunidades de trabalho para empresas que
                usam tecnologias de ponta — literalmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
