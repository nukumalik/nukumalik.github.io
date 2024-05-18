import Linkedin from '../assets/icons/linkedin.svg'
import Github from '../assets/icons/github.svg'
import Email from '../assets/icons/email.svg'

const Navbar = () => {
  return (
    <nav className="py-6 px-8 2xl:px-0">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-jakarta 2xl:w-1/6 bg-gradient-to-br from-orange-400 to-purple-700 bg-clip-text text-transparent">
          <a href="/#home">
            <span className="font-semibold">Nuku</span>
            <span className="font-light">Malik</span>
          </a>
        </div>
        <div className="gap-16 hidden lg:flex">
          <a href="/#trusted" className="navbar-menu-item">
            Brands
          </a>
          <a href="/#technologies" className="navbar-menu-item">
            Stacks
          </a>
          <a href="/#projects" className="navbar-menu-item">
            Projects
          </a>
          <a href="/#experiences" className="navbar-menu-item">
            Experiences
          </a>
        </div>
        <div className="2xl:w-1/6 flex items-center justify-end gap-4 md:gap-8">
          <a href="mailto:nukumalik@gmail.com" target="__blank" rel="noreferrer noopen">
            <img src={Email} alt="email" loading="lazy" className="h-5 md:h-7" />
          </a>
          <a href="https://github.com/nukumalik" target="__blank" rel="noreferrer noopen">
            <img src={Github} alt="github" loading="lazy" className="h-4 md:h-6" />
          </a>
          <a href="https://linkedin.com/in/nuku-malik" target="__blank" rel="noreferrer noopen">
            <img src={Linkedin} alt="linkedin" loading="lazy" className="h-4 md:h-5" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
