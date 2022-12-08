import { useState } from "preact/hooks";
import Button from "../../ui/Button.tsx";

export default function Container(
  props: {
    name: string;
    class: string;
    icon: string;
    att: { name: string }[] | undefined;
  },
) {
  const checkDefault = () => {
    if (props.name == "Alunos") {
      return true;
    }

    return false;
  };

  const [isActive, setIsActive] = useState(checkDefault());

  return (
    <div class="w-full">
      <div
        class={isActive
          ? "rounded-[10px] p-[3px] bg-gradient-to-br from-primary-darker to-deco-medium-green transition-all duration-500"
          : ""}
      >
        <div
          key={props.name}
          class={isActive
            ? " col-span-1 bg-white rounded-t-[7px]   divide-y max-w-[320px]"
            : "col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 border border-gray-200 rounded-2xl max-w-[320px]"}
        >
          <div class="w-full flex items-center justify-between p-6 space-x-6 ">
            <div class="flex-1 truncate">
              <div class="flex items-center space-x-3 justify-around">
                <img src={props.icon} class={props.class} />
                <h3
                  class={isActive
                    ? "text-black text-lg font-medium truncate"
                    : "text-gray-400 text-lg font-medium truncate"}
                >
                  {props.name}
                </h3>
                <div>
                  <button
                    onClick={() => setIsActive(!isActive)}
                    class={isActive
                      ? "focus:outline-none hover:bg-gray-100 rounded-full p-1 transition-transform duration-500 rotate-180 "
                      : "focus:outline-none hover:bg-gray-100 rounded-full p-1 "}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class={isActive
                        ? "w-6 h-6 text-black"
                        : "w-6 h-6 text-gray-400"}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          key={props.name}
          class={isActive ? "" : "hidden"}
        >
          <div class="p-4 bg-white rounded-b-[7px]">
            {props.att?.map((att) => (
              <div class="flex mt-4">
                <img src="/check-icon.png" class="h-6" />
                <span class="text-black ml-4">{att.name}</span>
              </div>
            ))}

            <div class="mt-8 mb-2">
              <Button as="a" href="https://deco.cx/discord">
                Comece agora!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
