import { useState } from "react";
import greyLogo from '../assets/grey-boys-scouts-logo.png'


export default function InfoDropdown() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
    <div className="">

    {/* Contains all of the resources */}

    <div className="w-[90vw] h-[120vh] place-self-center border-4 mt-[4rem] mb-[4rem] bg-white border-brand-primary-gold">
        <div className="w-[80vw] h-[7vh] mt-8 place-self-center text-[2rem] uppercase text-white text-center bg-brand-primary-gold">
            <h2>Important forms and resources for troop 747</h2>
        </div>

        <div className="columns-2 mt-[5rem]">

        {/* Dropdowns Resources */}
        <div className="grid ml-16">

      <div className="mb-[1rem]">
        <button onClick={() => toggleDropdown("permissionSlips")} className="w-[40vw] h-[7vh] uppercase text-[1.5rem] text-white text-center bg-brand-accent-light">Permission Slips ▼</button>

        {openDropdown === "permissionSlips" && (
          <div>
            <p>dnasjldals lsjdnasjldalnksdalasljn skajdnajdaksdna jndasjdaksdnak</p>
          </div>
        )}
      </div>

      <div className="mb-[1rem]">
        <button onClick={() => toggleDropdown("healthcareForms")} className="w-[40vw] h-[7vh] uppercase text-[1.5rem] text-white text-center bg-brand-accent-light">Healthcare Forms ▼</button>

        {openDropdown === "healthcareForms" && (
          <div>
            <p>dnasjldals lsjdnasjldalnksdalasljn skajdnajdaksdna jndasjdaksdnak</p>
          </div>
        )}
      </div>

      <div className="mb-[1rem]">
        <button onClick={() => toggleDropdown("otherResources")} className="w-[40vw] h-[7vh] uppercase text-[1.5rem] text-white text-center bg-brand-accent-light">Other Resources ▼</button>

        {openDropdown === "otherResources" && (
          <div>
            <p>dnasjldals lsjdnasjldalnksdalasljn skajdnajdaksdna jndasjdaksdnak</p>
          </div>
        )}
      </div>
    </div>

        {/* Grey Boys Scouts Logo */}
          <div className="ml-[5rem]">
            <img src={greyLogo} alt="Boys Scouts Logo"/>
          </div>
        </div>
        </div>

        {/* bottom half of the page */}
        <div className="columns-2 object-contain h-auto">
          {/* The hover image thing??? Im not too sure */}
          <div className="bg-white w-[40vw] h-[60vh] ml-[10rem] flex justify-center items-center ">
            <div className="bg-[#D9D9D9] w-[30vw] h-[45vh] items-center hover:scale-110 duration-300 ease-in-out">
              {/* text bar??? */}
              <div className=" bg-white w-[25vw] h-[7vh] opacity-0 flex justify-self-center mt-[18rem] hover:opacity-100 duration-300 ease-in-out"></div>
            </div>
          </div>

        <div>
          <div className="w-[30vw] h-[20vh] place-self-center bg-white border-4 mt-[20rem] mb-[2rem] border-brand-primary-gold"></div>
          <div className="w-[30vw] h-[20vh] place-self-center bg-white border-4 mb-[2rem] border-brand-primary-gold"></div>
          <div className="w-[30vw] h-[20vh] place-self-center bg-white border-4 mb-[2rem] border-brand-primary-gold"></div>
        </div>
        </div>
    </div>
    </>
  );

}
