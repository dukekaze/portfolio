import { BsMoonStarsFill } from "react-icons/bs";

const NavButtons = () => {
  return (
    <div className="flex border-l border-gray-400 h-6 mt-3 items-center">
      <BsMoonStarsFill className="text-xl ml-4" />
      <button className="py-[6px] px-4 bg-white text-black rounded-xl flex items-center h-7 ml-4 p">
        Download CV
      </button>
    </div>
  );
};

export default NavButtons;
