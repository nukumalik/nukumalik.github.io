import Avatar from '../assets/avatar.svg'

const Hero = () => {
  return (
    <div id="home" className="px-8 2xl:px-0 py-12">
      <img src={Avatar} alt="avatar" className="mx-auto" />
      <div className="my-16 text-center">
        <h2 className="text-5xl md:text-[55px] font-extrabold md:flex justify-center gap-2">
          <span>Hi</span>
          <span className="rotate-[-30deg]">🖐️</span>
          <span>, I'm</span>
          <span className="bg-gradient-to-br from-orange-400 to-purple-700 bg-clip-text text-transparent block md:inline my-1 md:my-0">
            Nuku Malik
          </span>
        </h2>
        <h2 className="text-2xl md:text-[55px] font-extrabold mt-2 md:mt-8">
          Web & Mobile Developer
        </h2>
      </div>
      <div className="md:flex md:flex-col md:items-center text-center text-gray-100 font-extralight tracking-wider gap-1 md:text-lg mb-14">
        <span>I am a seasoned software engineer with over 4 years of </span>
        <span>professional experience, specializing in website and mobile development. </span>
        <span>My expertise lies in leveraging modern frameworks and technologies </span>
        <span>to deliver seamless and intuitive user experiences.</span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <a
          href="mailto:nukumalik@gmail.com"
          className="bg-white px-8 py-4 text-black font-semibold rounded-full border-2 border-white w-full md:w-fit text-center"
        >
          Get In Touch
        </a>
        <a
          href="/#trusted"
          className="bg-transparent px-8 py-4 text-white font-semibold rounded-full border-2 border-white w-full md:w-fit text-center"
        >
          Show More
        </a>
      </div>
    </div>
  )
}

export default Hero
