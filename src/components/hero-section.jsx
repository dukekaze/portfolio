import { GrLocation } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="flex mt-24 justify-between">
      <div className="ml-52">
        <h1 className="text-6xl font-bold ">Hi, I’m Tom 👋</h1>
        <p className="text-base mt-2">
          I specialize in full stack development, particularly with React.js and
          Node.js.
          <br />
          My main goal is to create exceptional digital experiences that are
          fast, visually
          <br />
          appealing, and accessible to everyone. With over 7 years of experience
          in web
          <br />
          development, I continue to find joy in crafting innovative solutions
          and designs.
        </p>
        <div>
          <div className="flex items-center mt-12">
            <GrLocation className="" />{" "}
            <div className="ml-3 text-base text-gray-300">
              Ulaanbaatar, Mongolia
            </div>
          </div>
          <div className="flex items-center mt-2">
            <div className="dot h-3 w-3 bg-green-700 rounded-full"></div>
            <div className="ml-3 text-base text-gray-300">
              Available for new projects
            </div>
          </div>
          <div className="icons mt-12">
            <div className="flex text-2xl text-gray-300 gap-3">
              <FiGithub />
              <FaTwitter />
              <IoLogoFigma />
            </div>
          </div>
        </div>
      </div>
      <div className="persona flex justify-end mr-96">
        <img className="relative" src="/images/zurag.png" alt="" />
        <img className="relative" src="/images/zurag-ar.png" alt="" />
      </div>
    </div>
  );
};
export default Hero;
