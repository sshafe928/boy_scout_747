import { useState } from "react";
import greyLogo from '../assets/grey-boys-scouts-logo.png'


export default function InfoDropdown() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
    <div style={{backgroundImage: 'url(https://res.cloudinary.com/dmrevelyc/image/upload/v1740607699/Animated_Shape_3_vagk64.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}} className="w-[100vw] h-auto pt-[5rem]">

    {/* Contains all of the resources */}

    <div className="w-[90vw] h-[120vh] place-self-center border-4 mb-[4rem] bg-white border-brand-primary-gold">
        <div className="w-[88vw] h-[18vh] text-black bg-brand-accent-light uppercase text-center place-self-center text-[1.5rem] md:w-[80vw] md:h-[7vh] md:mt-8 md:place-self-center md:text-[2rem] md:uppercase md:text-white md:text-center md:bg-brand-primary-gold ">
            <h2>Important forms and resources for troop 747</h2>
        </div>

        <div className="md:columns-2 mt-[5rem]">

        {/* Dropdowns Resources */}
      <div className="ml-[1.4rem] columns-1 md:ml-16">

      <div className="mb-[1rem]">
        <button onClick={() => toggleDropdown("permissionSlips")} className="w-[75vw] h-[7vh] uppercase text-white text-[1.3rem] text-center bg-brand-primary-gold md:w-[40vw] md:text-[1.5rem]md:bg-brand-accent-light">Permission Slips ▼</button>

        {openDropdown === "permissionSlips" && (
          <div>
            <p>dnasjldals lsjdnasjldalnksdalasljn skajdnajdaksdna jndasjdaksdnak</p>
          </div>
        )}
      </div>

      <div className="mb-[1rem]">
        <button onClick={() => toggleDropdown("healthcareForms")} className="w-[75vw] h-[7vh] uppercase text-center text-white text-[1.3rem] bg-brand-primary-gold md:w-[40vw] md:text-[1.5rem] md:bg-brand-accent-light">Healthcare Forms ▼</button>

        {openDropdown === "healthcareForms" && (
          <div>
            <p>dnasjldals lsjdnasjldalnksdalasljn skajdnajdaksdna jndasjdaksdnak</p>
          </div>
        )}
      </div>

      <div className="mb-[1rem]">
        <button onClick={() => toggleDropdown("otherResources")} className="w-[75vw] h-[7vh] uppercase text-center text-[1.3rem] text-white bg-brand-primary-gold md:w-[40vw] md:text-[1.5rem] md:bg-brand-accent-light">Other Resources ▼</button>

        {openDropdown === "otherResources" && (
          <div>
            <p>dnasjldals lsjdnasjldalnksdalasljn skajdnajdaksdna jndasjdaksdnak</p>
          </div>
        )}
      </div>
    </div>

        {/* Grey Boys Scouts Logo */}
          <div className="md:ml-[5rem]">
            <img src={greyLogo} alt="Boys Scouts Logo"/>
          </div>
        </div>
        </div>

        {/* bottom half of the page */}
        <div className=" object-contain h-auto md:columns-2">
          {/* The hover image thing??? Im not too sure */}
          <div className="bg-white w-[80vw] h-[35vh] flex justify-center items-center ml-[2.2rem] md:w-[40vw] md:h-[60vh] md:ml-[10rem]">
            <div className=" items-center hover:scale-110 duration-300 ease-in-out md:bg-[#D9D9D9] md:w-[30vw] md:h-[45vh]">
              {/* text bar??? */}
              <p className=" text-white w-[25vw] h-[7vh] opacity-100 flex justify-self-center mt-[18rem] hover:opacity-100 duration-300 ease-in-out">There will be text here</p>
            </div>
          </div>

        <div className="mt-[-10rem] md:mt-[0]">
          <div className="w-[80vw] h-[15vh] place-self-center bg-white border-4 mt-[20rem] mb-[2rem] border-brand-primary-gold md:w-[30vw] md:h-[20vh]"></div>
          <div className="w-[80vw] h-[15vh] place-self-center bg-white border-4 mb-[2rem] border-brand-primary-gold md:w-[30vw] md:h-[20vh]"></div>
          <div className="w-[80vw] h-[15vh] place-self-center bg-white border-4 mb-[2rem] border-brand-primary-gold md:w-[30vw] md:h-[20vh]"></div>
        </div>
        </div>
    </div>
    </>
  );

}
