import React from 'react'

type ExperienceItemProps = {
  logo: React.ReactNode
  title: string
  company: string
  description: React.ReactNode
  from: string
  to: string
}

const ExperienceItem = ({logo, title, company, description, from, to}: ExperienceItemProps) => {
  return (
    <div className="w-full max-w-[900px]">
      <div className="grid grid-cols-4 items-center md:gap-6 mb-6 md:flex">
        {logo}
        <h4 className="font-bold md:text-2xl col-span-3 md:col-span-2">
          {title} at {company}
        </h4>
        <small className="md:text-right md:ml-auto text-gray-400 col-span-3 md:col-span-1 col-start-2 md:col-start-4 md:w-40">
          {from} - {to}
        </small>
      </div>
      <div className="leading-8 font-thin text-sm md:text-base">{description}</div>
    </div>
  )
}

export default ExperienceItem
