import PersonaAccordion from "./personaAccordion/PersonaAccordion.tsx";

const Header = () => {
  return (
    <div>
      <div class="flex justify-center mt-20 mb-20 mx-10 relative">
        <div class="max-w-[922px] relative">
          <div class="">
            <img src="/header-text.png" />
          </div>
          <div class="max-w-[573px] absolute right-4 ">
            <img src="/green-risk.png" />
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
