import { FaGithub, FaLinkedinIn, FaResearchgate } from "react-icons/fa";

const links = [
  {
    href: "https://github.com/furkanucgull",
    icon: <FaGithub size={23} />,
  },
  {
    href: "https://www.linkedin.com/in/furkanucgull/",
    icon: <FaLinkedinIn size={23} />,
  },
  {
    href: "https://www.researchgate.net/profile/Furkan-Uecguel",
    icon: <FaResearchgate  size={23} />,
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black ">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center md:text-left text-base">
          &copy; {new Date().getFullYear()}. All rigths reserved
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white px-4"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
