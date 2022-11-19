import Button from "../../ui/Button.tsx";

export default function Container(
  props: {
    name: string;
    class: string;
    icon: string;
    att: { name: string }[] | undefined;
  },
) {
  return (
    //TODO - refactor this code
    <div>
      {props.name == "Alunos"
        ? (
          <li
            key={props.name}
            class="col-span-1 bg-white rounded-[10px] p-[3px] shadow bg-gradient-to-br from-primary-darker to-deco-medium-green md:mt-0 mt-6 max-w-[320px]"
          >
            <div class="rounded-lg bg-white p-[2px]">
              <div class="w-full flex items-center justify-between p-6 space-x-6">
                <div class="flex-1 truncate ">
                  <div class="flex items-center space-x-3 justify-around">
                    <img src={props.icon} class={props.class} />
                    <h3 class="text-black text-lg font-medium truncate ">
                      {props.name}
                    </h3>
                    <div>
                      {props.name == "Alunos"
                        ? <div />
                        : (
                          <button class="focus:outline-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6 text-gray-400"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </button>
                        )}
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4">
                {props.att?.map((att) => (
                  <div class="flex mt-4">
                    <img src="/check-icon.png" />
                    <span class="text-black ml-4">{att.name}</span>
                  </div>
                ))}

                <div class="mt-8 mb-2">
                  <Button>Comece agora!</Button>
                </div>
              </div>
            </div>
          </li>
        )
        : (
          <li
            key={props.name}
            class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 border border-gray-200 rounded-2xl md:mt-0 mt-6 max-w-[320px]"
          >
            <div class="w-full flex items-center justify-between p-6 space-x-6">
              <div class="flex-1 truncate ">
                <div class="flex items-center space-x-3 justify-around">
                  <img src={props.icon} class={props.class} />
                  <h3 class="text-gray-400 text-lg font-medium truncate ">
                    {props.name}
                  </h3>
                  <div>
                    {props.name == "Alunos"
                      ? <div />
                      : (
                        <button class="focus:outline-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 text-gray-400"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </button>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        )}
    </div>
  );
}
