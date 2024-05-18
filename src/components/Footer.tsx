import Linkedin from '../assets/icons/linkedin.svg'
import Github from '../assets/icons/github.svg'
import Email from '../assets/icons/email.svg'

const Footer = () => {
  return (
    <div className="container mx-auto p-8 2xl:px-0 border-t-[1px] border-gray-500">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <small>&copy; 2024 Nuku Malik. All rights reserved.</small>
        <small>
          Designed by{' '}
          <a
            href="https://www.figma.com/@abmhub"
            className="bg-gradient-to-br from-orange-400 to-purple-700 bg-clip-text text-transparent font-semibold"
          >
            ABM
          </a>
        </small>
        <div className="flex gap-7 items-center">
          <a href="mailto:nukumalik@gmail.com" target="__blank" rel="noreferrer noopen">
            <img src={Email} alt="email" loading="lazy" className="h-7" />
          </a>
          <a href="https://github.com/nukumalik" target="__blank" rel="noreferrer noopen">
            <img src={Github} alt="github" loading="lazy" className="h-5" />
          </a>
          <a href="https://linkedin.com/in/nuku-malik" target="__blank" rel="noreferrer noopen">
            <img src={Linkedin} alt="linkedin" loading="lazy" className="h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
