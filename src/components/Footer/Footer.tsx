import { FunctionComponent } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="bg-dark-lighten text-white flex justify-between items-center py-3 px-4 shadow-md mt-3">
      <p className="flex gap-2">
        <span>Copyright polarbear</span>
        <span className="hidden md:block"> &copy; 19/7/2022</span>
      </p>
      <div className="flex gap-3 items-center">
        <p className="hidden md:block">Contact me: </p>
        <div className="flex gap-2">
          <a
            href="https://github.com/phamthanhlonglhpnd"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#6e5494] transition duration-300"
          >
            <AiFillGithub size={25} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100022806673901"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition duration-300"
          >
            <BsFacebook size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/long-ph%E1%BA%A1m-th%C3%A0nh-047173217/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition duration-300"
          >
            <AiFillLinkedin size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
