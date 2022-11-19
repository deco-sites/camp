import StepInfo from "./StepInfo.tsx";

const stepsInfo = [
  {
    title: "Entre para a comunidade",
    text:
      "No nosso canal do Discord você tira suas dúvidas, encontra especialistas em comércios digital e expande seu network.",
  },
  {
    title: "Aprenda no seu ritmo",
    text:
      "Video aulas pré-gravadas e sessões ao vivo para você se conectar com outros alunos e ter uma experiência transformadora.",
  },
  {
    title: "Pratique com desafios reais",
    text:
      "Aprenda fazendo. Implemente lojas de verdade, do início ao fim. Se o projeto for aprovado, você ainda é remunerado! ",
  },
  {
    title: "Revise com seu mentor",
    text:
      "Nada como um bom match, né? Baseado no seu perfil, vamos recomendar o mentor perfeito para guiar a sua evolução.",
  },
];

const StepsInfo = () => {
  return (
    <div class="m-auto">
      {stepsInfo.map((step) => (
        <div>
          <StepInfo title={step.title} text={step.text} />
        </div>
      ))}
    </div>
  );
};

export default StepsInfo;
