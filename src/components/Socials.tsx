import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

interface props {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  { icon: <FaGithub />, path: "https://github.com/BENwada" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/shingo-a481281a1/",
  },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@wadadomo9959" },
  { icon: <FaTwitter />, path: "https://x.com/kanntakuyuto" },
];

const Socials = ({ containerStyles, iconStyles }: props) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
