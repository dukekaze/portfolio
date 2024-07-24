const Experience = () => {
  return (
    <div className="bg-slate-900">
      <div className="flex flex-col items-center ">
        <div className="w-28 h-7 bg-gray-700 flex rounded-md justify-center items-center mt-24">
          <div className="about px-5 py-1">Experience</div>
        </div>
        <div className="text-xl font-normal mt-4">
          Here is a quick summary of my most recent experiences:
        </div>
      </div>
      <div className=" flex justify-center mt-12">
        <div className="w-2/3 h-72 bg-slate-800">
          <div className="mx-8 my-8 flex">
            <div>
              <img src="./images/logo-upwork.svg" alt="" />
            </div>
            <div className="text-slate-200">
              <div className="text-xl font-semibold">
                Sr. Frontend Developer
              </div>
              <div>
                <ul className="list-disc list-inside text-base font-normal">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Ut pretium arcu et massa semper, id fringilla leo semper.
                  </li>
                  <li>Sed quis justo ac magna.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Experience;
