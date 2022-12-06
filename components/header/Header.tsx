import HeaderText from "./HeaderText.tsx";
import PersonaAccordion from "./personaAccordion/PersonaAccordion.tsx";

const Header = () => {
  return (
    <div>
      <div class="flex justify-center  mb-20 mx-10 relative">
        <div class="xl:min-w-[992px] xl:max-w-7xl relative">
          <div class="max-w-[922px] mt-28">
            <HeaderText text="para o comércio digital criando lojas de verdade." />
          </div>
        </div>
      </div>

      <div class="max-w-[1100px] flex justify-center m-auto">
        <PersonaAccordion />
      </div>
    </div>
  );
};

export default Header;
