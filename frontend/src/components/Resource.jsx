import { useState } from "react";
import greyLogo from '../assets/grey-boys-scouts-logo.png.png'

export default function InfoDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="">
    {/* Contains all of the resources */}
    <div className="w-[90vw] h-[120vh] place-self-center border-4 mt-[4rem] mb-[4rem] bg-white border-brand-primary-gold">
        {/* Top title and its container */}
        <div className="w-[80vw] h-[7vh] mt-8 place-self-center text-[2rem] uppercase text-white text-center bg-brand-primary-gold">
            <h2>Important forms and resources for troop 747</h2>
        </div>
        <div className="columns-2 mt-[5rem]">
        {/* Dropdowns Resources */}
        <div className="grid ml-16 ">
            <div className="mb-[1rem]">
              <button onClick={() => setIsOpen(!isOpen)} className="w-[40vw] h-[7vh] uppercase place-self-center text-[1.5rem] uppercase text-white text-center bg-brand-accent-light">Permission Slips ▼</button>

              {isOpen && (
                <div className="">
                  <p className="">dnasjldals lsjdnasjldalnksdalasljn skajdnajdaksdna jndasjdaksdnak</p>
                </div>
              )}
            </div>

            <div className="mb-[1rem]">
              <button onClick={() => setIsOpen(!isOpen)} className="w-[40vw] h-[7vh] uppercase place-self-center text-[1.5rem] uppercase text-white text-center bg-brand-accent-light">Healthcare Forms ▼</button>

              {isOpen && (
                <div className="">
                  <p className="">dnasjldals lsjdnasjldalnksdalasljn skajdnajdaksdna jndasjdaksdnak</p>
                </div>
              )}
            </div>

            <div className="mb-[1rem]">
              <button onClick={() => setIsOpen(!isOpen)} className="w-[40vw] h-[7vh] uppercase place-self-center text-[1.5rem] uppercase text-white text-center bg-brand-accent-light">Other Resources ▼</button>

              {isOpen && (
                <div className="">
                  <p className="">dnasjldals lsjdnasjldalnksdalasljn skajdnajdaksdna jndasjdaksdnak</p>
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
        <div className="bg-white w-[35vw] h-[40vh] ml-[15rem] items-center">
          <div className="bg-[#D9D9D9] w-[25vw] h-[35vh] ml-[2.5rem]"></div>
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
