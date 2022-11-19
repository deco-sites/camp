const StepInfo = (props: { title: string; text: string }) => {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#113032] tracking-wide ">
              {props.title}
            </h2>
            <p className="max-w-xl mt-5 mx-auto text-xl text-[#113032] ">
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepInfo;
