import { FaRegMessage } from "react-icons/fa6";
import { LuCopy } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { RxTwitterLogo } from "react-icons/rx";
import { FaFigma } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-36 h-7 text-sm font-medium bg-gray-700 flex justify-center items-center rounded-md mt-24">
          Get in touch
        </div>
        <div className="text-xl w-[576px] text-center mt-4">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </div>
      </div>
      <div className="flex flex-col items-center mt-12">
        <div className="flex items-center text-4xl">
          <FaRegMessage className="w-8 h-8 mr-5" />
          tom@pinecone.mn
          <LuCopy className="ml-5" />
        </div>
        <div className="flex items-center text-4xl">
          <LuPhone className="w-8 h-8 mr-5" />
          +976 88112233
          <LuCopy className="ml-5" />
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center mt-12">
          <div className="text-base font-normal">
            You may also find me on these platforms!
          </div>
          <div>
            <div className="flex text-3xl mt-4 gap-3">
              <LuGithub />
              <RxTwitterLogo />
              <FaFigma />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default Contact;
