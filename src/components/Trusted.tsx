import SoftwareSeni from '../assets/icons/softwareseni_logo.svg'
import Telkom from '../assets/icons/telkom_logo.svg'
import Accelbyte from '../assets/icons/accelbyte_logo.svg'
import Traveloka from '../assets/icons/traveloka_logo.svg'
import Ait from '../assets/icons/ait_logo.svg'
import Astra from '../assets/icons/astra_logo.svg'

const Trusted = () => {
  return (
    <div id="trusted" className="container mx-auto py-12">
      <div className="flex flex-col items-center px-8 2xl:px-0">
        <h4 className="font-semibold tracking-widest md:text-[20px] mb-14">
          TRUSTED BY LEADING BRANDS
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-6 items-baseline gap-5">
          <img
            className="h-8 mx-6  justify-self-center"
            src={SoftwareSeni}
            alt="softwareseni"
            loading="lazy"
          />
          <img className="h-14 mx-6 justify-self-center" src={Telkom} alt="telkom" loading="lazy" />
          <img
            className="h-18 mx-6  justify-self-center relative bottom-[-10px]"
            src={Accelbyte}
            alt="accelbyte"
            loading="lazy"
          />
          <img className="h-18 mx-6 justify-self-center" src={Astra} alt="astra" loading="lazy" />
          <img
            className="h-16 mx-6 justify-self-center relative bottom-[-15px]"
            src={Traveloka}
            alt="traveloka"
            loading="lazy"
          />
          <img className="h-12 mx-6 justify-self-center" src={Ait} alt="ait" loading="lazy" />
        </div>
      </div>
    </div>
  )
}

export default Trusted
