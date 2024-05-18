import {useEffect} from 'react'

type ProjectItemProps = {
  image: React.ReactNode
  url: string
}

const ProjectItem = ({image, url}: ProjectItemProps) => {
  useEffect(() => {
    document.getElementById(`cover-${url}`)!.style.backgroundImage = `url(${image})`
  }, [image, url])

  return (
    <div
      id={`cover-${url}`}
      className="rounded-xl w-80 h-72 bg-no-repeat bg-cover bg-center flex items-start justify-end p-2 xl:grayscale xl:hover:grayscale-0 relative z-60"
    >
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopen"
        className="bg-[rgba(22,21,19,0.7)] hover:bg-gradient-to-br hover:from-orange-400 hover:to-purple-700 hover:opacity-90 py-2 px-6 rounded-full text-xs"
      >
        Visit Site
      </a>
    </div>
  )
}

export default ProjectItem
