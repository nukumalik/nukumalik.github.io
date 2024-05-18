import ProjectItem from './ProjectItem'

import Setirkanan from '../assets/images/setirkanan.png'
import Accelbyte from '../assets/images/accelbyte.png'
import Edot from '../assets/images/edot.png'
import Agreemarket from '../assets/images/agreemarket.png'
import Pedulianak from '../assets/images/pedulianak.png'
import Angkasapura from '../assets/images/angkasapura.png'

const items = [
  {
    image: Setirkanan,
    url: 'https://setirkanan.co.id/'
  },
  {
    image: Accelbyte,
    url: 'https://accelbyte.io/'
  },
  {
    image: Edot,
    url: 'https://edot.id'
  },
  {
    image: Agreemarket,
    url: 'https://market.agreeculture.id/'
  },
  {
    image: Pedulianak,
    url: 'https://www.pedulianak.org/id/'
  },
  {
    image: Angkasapura,
    url: 'https://ap1.co.id/'
  }
]

const Projects = () => {
  return (
    <div
      id="projects"
      className="container mx-auto flex flex-col items-center justify-center py-12 gap-12"
    >
      <h3 className="font-extrabold text-3xl bg-gradient-to-b from-orange-400 to-orange-700 bg-clip-text text-transparent mb-7">
        PROJECTS
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 2xl:gap-16">
        {items.map((item, index) => (
          <div key={index} className="place-self-center">
            <ProjectItem image={item.image} url={item.url} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
