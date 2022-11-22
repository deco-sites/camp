import Icon from "../icons/Icon.tsx";

const icons = [
  {
    src: "/linkedin-icon.png",
    alt: "linkedin Icon",
    class: "w-8 h-8 mr-5",
    href: "/",
  },
  { src: "/github-icon.png", alt: "github Icon", class: "w-9 h-9", href: "/" },
];

const MentorInfos = (props: { name: string; position: string }) => {
  return (
    <div class="bg-white">
      <div class="">
        <div class="text-center">
          <p class="mt-1 font-bold text-gray-900  sm:tracking-tight text-xl">
            {props.name}
          </p>
          <p class=" mt-1 mx-auto text-lg text-[#939393] ">
            {props.position}
          </p>
        </div>
        <div class="flex justify-center mt-2">
          {icons.map((icon) => (
            <div>
              <a href={icon.href}>
                <Icon src={icon.src} class={icon.class} alt={icon.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorInfos;
