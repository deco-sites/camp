const StepsHeader = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center relative">
          <div class="max-w-[500px] m-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#113032] tracking-wide w-full">
              4 passos para{"  "}
              <span class="font-bold text-[#2FD180] ">
                participar
              </span>
            </h2>
            <div class="absolute m-auto  ml-11">
              <img src="/green-risk3.png" />
            </div>
          </div>

          <p className="max-w-4xl mt-5 mx-auto text-xl text-gray-500">
            Se você é universitário, estudante de ciência da computação, ou
            cursos relacionados, e sabe HTML, CSS e JavaScript, você está pronto
            para participar do Deco Camp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepsHeader;
