export default function Index() {
  return (
    <>
      <div className="main-container">
        <div className="border-b-[.1px] border-[#E8EAED]">
          <h1 className="italic">This is me.</h1>
        </div>
        <div className="mt-[72px] grid grid-cols-2 gap-4">
          <div>
            <p className="text-[--off-white] font-thin text-5xl">
              Hi, I'm Nathan
            </p>
            <button className="group flex h-10 items-center gap-2 rounded-full bg-[--off-white] pl-4 pr-5 transition-all duration-300 ease-in-out hover:bg-[--dark-violet] hover:pl-3 active:bg-[--lavender-gray] mt-8">
              <span className="rounded-full bg-[--dark-violet] p-1 text-sm transition-colors duration-300 group-hover:bg-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-[--dark-violet] group-active:-rotate-45"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
              <span className="text-xl text-black group-hover:text-[--off-white]">
                Resume
              </span>
            </button>
          </div>
          <div>
            <p className="text-2xl font-light">
              I'm a passionate web developer dedicated to turning ideas into
              creative solutions. I specialize in creating seamless and ituitive
              user experiences.
            </p>
            <br></br>
            <p className="text-2xl font-light">
              I'm involved in every step of the process: from discovery and
              design to development, testing, and deployment. I focus on
              delivering high-quality, scalable results that drive positive user
              experiences.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
