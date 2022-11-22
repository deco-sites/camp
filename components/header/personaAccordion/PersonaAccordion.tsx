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
  { name: "Mentores", icon: "/mentors-icon.png", class: "h-10 " },
  { name: "Empresas", icon: "/business-icon.png", class: "h-10" },
];

const PersonaAccordion = () => {
  return (
    <div>
      <ul
        role="list"
        class="block md:grid sm:grid-cols-1 sm:gap-6 sm:grid-cols-1 lg:grid-cols-3"
      >
        {containers.map((cont) => (
          <div key={cont.name}>
            <Container
              name={cont.name}
              icon={cont.icon}
              class={cont.class}
              att={cont.attachments}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PersonaAccordion;
