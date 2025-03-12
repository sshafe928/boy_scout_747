import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import greyLogo from '../assets/grey-boys-scouts-logo.png'
import { Link } from 'react-router-dom'


export default function InfoDropdown() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="w-full h-full p-6" style={{backgroundImage: 'url(https://res.cloudinary.com/dmrevelyc/image/upload/v1740607699/Animated_Shape_3_vagk64.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="flex flex-col items-center border-4 border-brand-accent-warm bg-brand-accent-yellow lg:p-8">
        <header className="bg-brand-accent-light lg:bg-brand-primary-gold text-black lg:text-white text-3xl lg:text-4xl uppercase w-full text-center p-4 mb-12">IMPORTANT FORMS AND RESOURCES</header>
        <article className="flex flex-col items-center w-full lg:items-stretch lg:flex-row">
          <section className="flex flex-col text-xl w-5/6 lg:w-1/2 justify-around">
            {/* Permission Slips Dropdown */}
            <div onClick={() => toggleDropdown("permissionSlips")} className="w-full px-2 py-4 uppercase text-brand-primary-brown text-3xl text-center bg-brand-primary-gold cursor-pointer">
              {/* Title */}
              <p className="flex justify-center gap-4 text-white">Permission Slips <FaChevronDown className={`transition-transform duration-300 ${openDropdown === "permissionSlips" ? "rotate-180" : ""}`} /></p>
              <section className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${openDropdown === "permissionSlips" ? "max-h-96" : "max-h-0"}`}>
                <div className="flex flex-col border-2 border-brand-accent-brown-light p-4 text-xl bg-brand-accent-light">
                  {/* Link 1 */}
                  <div className="relative group hover:text-brand-accent-brown transition">
                    <Link href="one.pdf">Boy Scout Permission Slip</Link>
                    <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-brand-primary-brown scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left" />
                  </div>
                  {/* Link 2 */}
                  <div className="relative group hover:text-brand-accent-brown transition">
                    <Link href="two.pdf">PDF 2</Link>
                    <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-brand-primary-brown scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left" />
                  </div>
                  {/* Link 3 */}
                  <div className="relative group hover:text-brand-accent-brown transition">
                    <Link href="three.pdf">PDF 3</Link>
                    <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-brand-primary-brown scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left" />
                  </div>
                </div>
              </section>
            </div>
            {/* Healthcare Forms Dropdown */}
            <div onClick={() => toggleDropdown("healthcareForms")} className="w-full px-2 py-4 uppercase text-brand-primary-brown text-3xl text-center bg-brand-primary-gold cursor-pointer">
              {/* Title */}
              <p className="flex justify-center gap-4 text-white">Healthcare Forms <FaChevronDown className={`transition-transform duration-300 ${openDropdown === "healthcareForms" ? "rotate-180" : ""}`} /></p>
              <section className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${openDropdown === "healthcareForms" ? "max-h-96" : "max-h-0"}`}>
                <div className="flex flex-col border-2 border-brand-accent-brown-light p-4 text-xl bg-brand-accent-light">
                  {/* Link 1 */}
                  <div className="relative group hover:text-brand-primary-brown transition">
                    <Link href="one.pdf">Form 1</Link>
                    <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-brand-primary-brown scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left" />
                  </div>
                  {/* Link 2 */}
                  <div className="relative group hover:text-brand-primary-brown transition">
                    <Link href="two.pdf">Form 2</Link>
                    <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-brand-primary-brown scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left" />
                  </div>
                  {/* Link 3 */}
                  <div className="relative group hover:text-brand-primary-brown transition">
                    <Link href="three.pdf">Form 3</Link>
                    <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-brand-primary-brown scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left" />
                  </div>
                </div>
              </section>
            </div>
            {/* Scouter Resources Dropdown */}
            <div onClick={() => toggleDropdown("scouterResources")} className="w-full px-2 py-4 uppercase text-brand-primary-brown text-3xl text-center bg-brand-primary-gold cursor-pointer">
              {/* Title */}
              <p className="flex justify-center gap-4 text-white">Scouter Resources <FaChevronDown className={`transition-transform duration-300 ${openDropdown === "scouterResources" ? "rotate-180" : ""}`} /></p>
              <section className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${openDropdown === "scouterResources" ? "max-h-96" : "max-h-0"}`}>
                <div className="flex flex-col border-2 border-brand-accent-brown-light p-4 text-xl bg-brand-accent-light">
                  {/* Link 1 */}
                  <div className="relative group hover:text-brand-primary-brown transition">
                    <Link href="one.pdf">Resource 1</Link>
                    <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-brand-primary-brown scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left" />
                  </div>
                  {/* Link 2 */}
                  <div className="relative group hover:text-brand-primary-brown transition">
                    <Link href="two.pdf">Resource 2</Link>
                    <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-brand-primary-brown scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left" />
                  </div>
                  {/* Link 3 */}
                  <div className="relative group hover:text-brand-primary-brown transition">
                    <Link href="three.pdf">Resource 3</Link>
                    <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-brand-primary-brown scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left" />
                  </div>
                </div>
              </section>
            </div>
            {/* Troop Resources Dropdown */}
            <div onClick={() => toggleDropdown("troopResources")} className="w-full px-2 py-4 uppercase text-brand-primary-brown text-3xl text-center bg-brand-primary-gold cursor-pointer">
              {/* Title */}
              <p className="flex justify-center gap-4 text-white">Troop Resources <FaChevronDown className={`transition-transform duration-300 ${openDropdown === "troopResources" ? "rotate-180" : ""}`} /></p>
              <section className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${openDropdown === "troopResources" ? "max-h-96" : "max-h-0"}`}>
                <div className="flex flex-col border-2 border-brand-accent-brown-light p-4 text-xl bg-brand-accent-light">
                  {/* Link 1 */}
                  <div className="relative group hover:text-brand-primary-brown transition">
                    <Link href="one.pdf">Resource 1</Link>
                    <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-brand-primary-brown scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left" />
                  </div>
                  {/* Link 2 */}
                  <div className="relative group hover:text-brand-primary-brown transition">
                    <Link href="two.pdf">Resource 2</Link>
                    <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-brand-primary-brown scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left" />
                  </div>
                  {/* Link 3 */}
                  <div className="relative group hover:text-brand-primary-brown transition">
                    <Link href="three.pdf">Resource 3</Link>
                    <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-brand-primary-brown scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left" />
                  </div>
                </div>
              </section>
            </div>
            {/* Eagle Resources Dropdown */}
            <div onClick={() => toggleDropdown("eagleResources")} className="w-full px-2 py-4 uppercase text-brand-primary-brown text-3xl text-center bg-brand-primary-gold cursor-pointer">
              {/* Title */}
              <p className="flex justify-center gap-4 text-white">Eagle Resources <FaChevronDown className={`transition-transform duration-300 ${openDropdown === "eagleResources" ? "rotate-180" : ""}`} /></p>
              <section className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${openDropdown === "eagleResources" ? "max-h-96" : "max-h-0"}`}>
                <div className="flex flex-col border-2 border-brand-accent-brown-light p-4 text-xl bg-brand-accent-light">
                  {/* Link 1 */}
                  <div className="relative group hover:text-brand-primary-brown transition">
                    <Link href="one.pdf">Resource 1</Link>
                    <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-brand-primary-brown scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left" />
                  </div>
                  {/* Link 2 */}
                  <div className="relative group hover:text-brand-primary-brown transition">
                    <Link href="two.pdf">Resource 2</Link>
                    <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-brand-primary-brown scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left" />
                  </div>
                  {/* Link 3 */}
                  <div className="relative group hover:text-brand-primary-brown transition">
                    <Link href="three.pdf">Resource 3</Link>
                    <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-brand-primary-brown scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left" />
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section className="flex justify-center items-center w-1/2 height-full">
            <img src={greyLogo} alt="Grey Boy Scouts Logo" />
          </section>
        </article>
      </div>
    </div>
  );

}
