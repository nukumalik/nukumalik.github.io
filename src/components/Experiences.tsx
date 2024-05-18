import ExperienceItem from './ExperienceItem'

import SS from '../assets/pt_softwareseni_logo.jpg'
import AB from '../assets/accelbyte_inc_logo.jpg'
import AIT from '../assets/akarinti_logo.jpg'

const items = [
  {
    title: 'Software Developer Team Leader',
    company: 'SoftwareSeni',
    logo: SS,
    from: 'May 2022',
    to: 'Present',
    description: (
      <div>
        As a Team Lead at SoftwareSeni, I spearheaded the development of cutting-edge software
        solutions. Leading a talented team, I ensured the successful delivery of high-quality
        projects on time and within budget. My role involved coordinating cross-functional efforts,
        mentoring junior developers, and driving innovation to meet our clients' needs effectively.
      </div>
    )
  },
  {
    title: 'React Developer',
    company: 'AccelByte',
    logo: AB,
    from: 'Jan 2023',
    to: 'Dec 2023',
    description: (
      <div>
        As a React Developer at AccelByte, outsourced from Softwareseni, I was integral in
        developing several products for AccelByte and their client, <b>2K Entertainment</b>. Working
        closely with a dynamic team, I utilized React to create high-quality, responsive web
        applications. My contributions helped deliver innovative solutions and enhance user
        experiences across various projects.
      </div>
    )
  },
  {
    title: 'React Developer',
    company: 'Akar Inti Teknologi',
    logo: AIT,
    from: 'Sep 2021',
    to: 'May 2022',
    description: (
      <div>
        As a React Developer at Akar Inti Teknologi, outsourced from Softwareseni, I played a key
        role in developing a food delivery app. Collaborating with a dedicated team, I utilized
        React to create a seamless and intuitive user interface. My contributions were essential in
        delivering a high-performance and user-friendly application, enhancing the overall customer
        experience.
      </div>
    )
  },
  {
    title: 'Javascript Develoepr',
    company: 'SoftwareSeni',
    logo: SS,
    from: 'Jan 2020',
    to: 'Apr 2022',
    description: (
      <div>
        As a JavaScript Developer at Softwareseni, I played a crucial role in building cutting-edge
        web and mobile applications. Utilizing ReactJS, React Native, and Flutter, I collaborated
        with a talented team to create seamless and performant user experiences. My contributions
        were key in delivering innovative solutions and enhancing the functionality of various
        projects.
      </div>
    )
  }
]

const Experiences = () => {
  return (
    <div className="relative z-0">
      <div
        id="experiences"
        className="relative container mx-auto flex flex-col gap-20 items-center justify-center py-24 z-10 px-8 2xl:px-0"
      >
        <h3 className="font-extrabold text-3xl bg-gradient-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
          EXPERIENCES
        </h3>
        {items.map((item, index) => (
          <ExperienceItem
            key={index}
            logo={
              <img
                className="h-14 md:h-10 rounded row-span-2 lg:row-span-1"
                src={item.logo}
                alt={item.company}
                loading="lazy"
              />
            }
            title={item.title}
            company={item.company}
            description={item.description}
            from={item.from}
            to={item.to}
          />
        ))}
      </div>
      {/* <div className="absolute w-[1000px] h-[1000px] top-[-250px] left-[-500px] radial-gradient-teal z-[-10] rounded-full hidden 2xl:block"></div> */}
      {/* <div className="absolute w-[1000px] h-[1000px] top-[500px] right-[-500px] radial-gradient-purple z-[-10] rounded-tl-full rounded-bl-full hidden 2xl:block"></div> */}
    </div>
  )
}

export default Experiences
