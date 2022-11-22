import StepImage from "./StepImage.tsx";

const stepsImg = [
  { src: "/steps-discorImg.png", alt: "" },
  { src: "/steps-gridImg.png", alt: "" },
  { src: "/steps-phoneImg.png", alt: "" },
  { src: "/steps-callImg.png", alt: "" },
];

const StepsImages = () => {
  return (
    <div class="m-auto">
      {stepsImg.map((step) => (
        <div class="sm:py-10 py-8" key={step.alt}>
          <StepImage src={step.src} alt={step.alt} />
        </div>
      ))}
    </div>
  );
};

export default StepsImages;
