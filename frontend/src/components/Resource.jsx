import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import greyLogo from '../assets/grey-boys-scouts-logo.png'


export default function InfoDropdown() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="w-full h-full p-6" style={{backgroundImage: 'url(https://res.cloudinary.com/dmrevelyc/image/upload/v1740607699/Animated_Shape_3_vagk64.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="flex flex-col items-center border-4 border-brand-accent-warm bg-brand-accent-yellow lg:p-8">
        <header className="bg-brand-primary-gold text-white font-8xl mb-8 uppercase w-full h-12 flex items-center justify-center">IMPORTANT FORMS AND RESOURCES FOR TROOP 747</header>
        <section className="flex flex-col lg:flex-row">
          <div className="flex-col">
            <div onClick={() => toggleDropdown("permissionSlips")} className="w-[75vw] h-[7vh] uppercase text-white text-[1.3rem] text-center bg-brand-primary-gold lg:w-[40vw] lg:text-[1.5rem] lg:bg-brand-accent-light">
              <p className="flex">Permission Slips <FaChevronDown /></p>
              {openDropdown === "permissionSlips" && (
                <div>
                  <p>dnasjldals lsjdnasjldalnksdalasljn skajdnajdaksdna jndasjdaksdnak</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );

}
