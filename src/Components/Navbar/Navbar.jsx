import { NavLink } from "react-router-dom";

 
export default function Navbar() {
  function openmenue(){
    document.querySelector("nav ul").classList.toggle("block");
    document.querySelector("nav ul").classList.toggle("hidden");
  }
  return (
    <nav className="py-8 bg-[#2C3E50] text-white">
      <div className="w-[80%] mx-auto md:flex flex-wrap justify-between items-center text-2xl block">
      <div className=" relative   flex flex-wrap justify-between items-center text-2xl">
    <h2 className="text-center"><NavLink to="">AhmedAshraf</NavLink></h2>
    <div className="w-[50px] h-[40px] border-0 cursor-pointer flex flex-col md:hidden justify-around" onClick={()=>openmenue()}>
  <span className="w-full rounded-xl h-[3px] bg-white block"></span>
  <span className="w-full rounded-xl h-[3px] bg-white block"></span>
  <span className="w-full rounded-xl h-[3px] bg-white block"></span>
</div>
      </div>
      <ul className="text-center hidden md:flex justify-center items-center pt-4 md:pt-0">
      <li className="md:mr-5 md:mb-0 mb-3 p-4 md:p-0 hover:bg-black md:hover:bg-[#2C3E50]"><NavLink to="About">About</NavLink></li>
      <li className="md:mr-5 md:mb-0 mb-3 p-4 md:p-0 hover:bg-black md:hover:bg-[#2C3E50]"><NavLink to="protofolio">protofolio</NavLink></li>
      <li className=" p-4 md:p-0 hover:bg-black md:hover:bg-[#2C3E50]"><NavLink to="Contact">Contact</NavLink></li>
    </ul>
      </div>
    </nav>
  )
}
