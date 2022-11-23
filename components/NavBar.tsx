const navigation = [
  { id: 1, span: "Plataforma", link: "/" },
  { id: 2, span: "Experts", link: "/" },
  { id: 3, span: "Comece Agora!", link: "https://deco.cx/discord" },
];

export default function NavBar() {
  return (
    <div class="flex flex-row justify-between sm:justify-around m-auto p-4 items-center ">
      <img src="/deco-logo.png" class="w-24 h-8" />
      <div class="hidden sm:flex">
        {navigation.map((link) => (
          <div class="ml-8" key={link.id}>
            <a key={link.id} href={link.link}>
              {link.id == 3
                ? (
                  <button class="text-black rounded-full border border-black p-2 pl-5 pr-5 focus:outline-none">
                    {link.span}
                  </button>
                )
                : (
                  <button class="text-black p-2 focus:outline-none">
                    {link.span}
                  </button>
                )}
            </a>
          </div>
        ))}
      </div>
      <div class="hidden items-center">
        <button class="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
