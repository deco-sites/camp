const footerIcons = [
  { href: "https://github.com/deco-cx", icon: "/gitHubIcon-footer.png", id: 1 },
  {
    href: "https://www.linkedin.com/company/deco-cx/",
    icon: "/linkedinIcon-footer.png",
    id: 2,
  },
];

const Footer = () => {
  return (
    <footer class="bg-[#113032] ">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-around lg:px-8">
        <div>
          <img src="/decoLogo-footer.png" />
        </div>
        {
          /* <p class="text-white text-sm md:mt-0 mt-10">
          Nibh volutpat, aliquam id sagittis elementum.
        </p> */
        }
        <div class="flex md:mt-0 mt-10">
          {footerIcons.map((icon) => (
            <a href={icon.href} key={icon.id}>
              <div class="ml-4" target="_blank" rel="noopener noreferrer">
                <img src={icon.icon} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
