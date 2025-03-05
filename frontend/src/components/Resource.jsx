import { useState } from "react";
import greyLogo from '../assets/grey-boys-scouts-logo.png'


export default function InfoDropdown() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div style={{backgroundImage: 'url(https://res.cloudinary.com/dmrevelyc/image/upload/v1740607699/Animated_Shape_3_vagk64.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}} className="w-[100vw] h-[255vh] lg:h-auto pt-[5rem]">

    {/* Contains all of the resources */}

    <div className="w-[90vw] h-[120vh] place-self-center border-4 mb-[4rem] bg-white border-brand-primary-gold">
        <div className="w-[88vw] h-[18vh] text-black bg-brand-accent-light uppercase text-center place-self-center text-[1.5rem] lg:w-[80vw] lg:h-[7vh] lg:mt-8 lg:place-self-center lg:text-[2rem] lg:uppercase lg:text-white lg:text-center lg:bg-brand-primary-gold ">
            <h2>Important forms and resources for troop 747</h2>
        </div>

        <div className="lg:columns-2 mt-[5rem]">

        {/* Dropdowns Resources */}
      <div className="ml-[1.4rem] columns-1 lg:ml-16">

      <div className="mb-[1rem]">
        <button onClick={() => toggleDropdown("permissionSlips")} className="w-[75vw] h-[7vh] uppercase text-white text-[1.3rem] text-center bg-brand-primary-gold lg:w-[40vw] lg:text-[1.5rem] lg:bg-brand-accent-light">Permission Slips ▼</button>

        {openDropdown === "permissionSlips" && (
          <div>
            <p>dnasjldals lsjdnasjldalnksdalasljn skajdnajdaksdna jndasjdaksdnak</p>
          </div>
        )}
      </div>

      <div className="mb-[1rem]">
        <button onClick={() => toggleDropdown("healthcareForms")} className="w-[75vw] h-[7vh] uppercase text-center text-white text-[1.3rem] bg-brand-primary-gold lg:w-[40vw] lg:text-[1.5rem] lg:bg-brand-accent-light">Healthcare Forms ▼</button>

        {openDropdown === "healthcareForms" && (
          <div>
            <p>dnasjldals lsjdnasjldalnksdalasljn skajdnajdaksdna jndasjdaksdnak</p>
          </div>
        )}
      </div>

      <div className="mb-[1rem]">
        <button onClick={() => toggleDropdown("otherResources")} className="w-[75vw] h-[7vh] uppercase text-center text-[1.3rem] text-white bg-brand-primary-gold lg:w-[40vw] lg:text-[1.5rem] lg:bg-brand-accent-light">Other Resources ▼</button>

        {openDropdown === "otherResources" && (
          <div>
            <p>dnasjldals lsjdnasjldalnksdalasljn skajdnajdaksdna jndasjdaksdnak</p>
          </div>
        )}
      </div>
    </div>

        {/* Grey Boys Scouts Logo */}
          <div className="lg:ml-[5rem]">
            <img src={greyLogo} alt="Boys Scouts Logo"/>
          </div>
        </div>
        </div>

        {/* bottom half of the page */}
        <div className=" object-contain h-auto lg:columns-2">
          {/* The hover image thing??? Im not too sure */}
          <div className="hidden lg:bg-white lg:flex lg:justify-center lg:items-center ml-[2.2rem] lg:border-none lg:w-[40vw] lg:h-[60vh] lg: mt-0 lg:ml-[10rem]">
            <div className=" items-center hover:scale-110 duration-300 ease-in-out lg:bg-[#D9D9D9] lg:w-[30vw] lg:h-[45vh]">
              {/* text bar??? */}
              <p className=" lg:text-white lg:w-[25vw] lg:h-[7vh] lg:opacity-100 lg:flex justify-self-center mt-[18rem] lg:border-none lg:hover:opacity-100 duration-300 ease-in-out"></p>
            </div>
          </div>

        <div className=" mt-[-18rem] lg:mt-[0]">
          <div className="w-[80vw] h-[15vh] place-self-center bg-white border-4 mt-[20rem] mb-[2rem] border-brand-primary-gold lg:w-[30vw] lg:h-[20vh]"></div>
          <div className="w-[80vw] h-[15vh] place-self-center bg-white border-4 mb-[2rem] border-brand-primary-gold lg:w-[30vw] lg:h-[20vh]"></div>
          <div className="w-[80vw] h-[15vh] place-self-center bg-white border-4 mb-[2rem] border-brand-primary-gold lg:w-[30vw] lg:h-[20vh]"></div>
        </div>
        <div className="bg-white border-brand-primary-gold border-4 w-[80vw] h-[35vh] flex justify-center items-center ml-[2.2rem] lg:hidden">
            <div className="w-[85vw] h-[7vh] bg-[#6B5A18] place-self-center mt-[42.2vh] lg:hidden">there will be text here</div>
            </div>
            <div className="bg-[#D9D9D9] w-[80vw] h-[7vh] mt-[6rem] mb-[2rem] place-self-center lg:hidden">Image description</div>
        </div>
    </div>
  );

}
