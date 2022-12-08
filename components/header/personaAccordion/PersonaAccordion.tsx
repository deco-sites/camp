import Container from "./Container.tsx";

const containers = [
  {
    name: "Alunos",
    icon: "/students-icon.png",
    class: "h-10",
    attachments: [{ name: "Ganhe dinheiro para aprender." }, {
      name: "Seja orientado por experts.",
    }, { name: "Trabalhe para grandes marcas." }],
  },
  {
    name: "Mentores",
    icon: "/mentors-icon.png",
    class: "h-10 ",
    attachments: [{ name: "Ganhe dinheiro para aprender." }, {
      name: "Seja orientado por experts.",
    }, { name: "Trabalhe para grandes marcas." }],
  },
  { name: "Empresas", icon: "/business-icon.png", class: "h-10", open: false },
];

const PersonaAccordion = () => {
  return (
    <div class="lg:flex block justify-between w-full ">
      {containers.map((cont) => (
        <div class="mx-6 mt-6 max-w-[320px] w-full mx-auto" key={cont.name}>
          <Container
            name={cont.name}
            icon={cont.icon}
            class={cont.class}
            att={cont.attachments}
          />
        </div>
      ))}
    </div>
  );
};

export default PersonaAccordion;
