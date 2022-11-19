import StepsHeader from "./StepsHeader.tsx";
import StepsImages from "./stepsImages/StepsImages.tsx";
import StepsInfo from "./stepsInfo/StepsInfo.tsx";

const Steps = () => {
  return (
    <div>
      <StepsHeader />
      <div class="md:flex max-w-[1100px] m-auto">
        <div class="hidden md:block">
          <StepsImages />
        </div>
        <div class="hidden lg:block">
          <img src="/vertical-line.png" />
        </div>
        <div>
          <StepsInfo />
        </div>
      </div>
    </div>
  );
};

export default Steps;
