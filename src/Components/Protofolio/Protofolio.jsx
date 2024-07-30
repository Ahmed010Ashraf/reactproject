 import { useEffect, useState } from "react"
import fim1 from "./../../assets/poert1.png"
 import fim2 from "./../../assets/port2.png"
 import fim3 from "./../../assets/port3.png"
export default function Protofolio() {
  const [img, setImg] = useState(null);

  const handleImageClick = (src) => {
    setImg(src);
  };

  // const handleClose = () => {
  //   setImg(null);
  // };
  // const handleBodyClick = (event) => {
  //   if (event.target.closest("#maindiv")) {
  //     return;
  //   }
  //   handleClose();
  // };
  // useEffect(() => {
  //   document.addEventListener("click", handleBodyClick);

  //   return () => {
  //     document.removeEventListener("click", handleBodyClick);
  //   };
  // }, []);
  return (
    <div className="relative">
      <h2 className="text-center my-3 text-[#2C3E50] text-4xl ">portfolio component</h2>
      <div className="flex justify-center items-center mb-4 text-[#2C3E50]">
          <div className="line w-28 h-1 bg-[#2C3E50]"></div>
          <i className="fa-solid fa-star mx-4"></i>
          <div className="line w-28 h-1 bg-[#2C3E50]"></div>
        </div>
        <div className="flex justify-center items-center flex-wrap p-5">
          <div className="w-full p-4 cursor-pointer md:w-1/2 lg:w-1/3" ><img  className="w-full rounded-md mainimguse" src={fim1} alt="" onClick={()=>handleImageClick(fim1)} /></div>
          <div className="w-full p-4 cursor-pointer md:w-1/2 lg:w-1/3" ><img  className="w-full rounded-md mainimguse" src={fim2} alt="" onClick={()=>handleImageClick(fim2)} /></div>
          <div className="w-full p-4 cursor-pointer md:w-1/2 lg:w-1/3" ><img  className="w-full rounded-md mainimguse" src={fim3} alt="" onClick={()=>handleImageClick(fim3)} /></div>
          <div className="w-full p-4 cursor-pointer md:w-1/2 lg:w-1/3" ><img  className="w-full rounded-md mainimguse" src={fim1} alt="" onClick={()=>handleImageClick(fim1)} /></div>
          <div className="w-full p-4 cursor-pointer md:w-1/2 lg:w-1/3" ><img  className="w-full rounded-md mainimguse" src={fim2} alt="" onClick={()=>handleImageClick(fim2)} /></div>
          <div className="w-full p-4 cursor-pointer md:w-1/2 lg:w-1/3" ><img  className="w-full rounded-md mainimguse" src={fim3} alt="" onClick={()=>handleImageClick(fim3)} /></div>
        </div>
        <div id="maindiv" className={`h-full absolute top-0 left-0 w-full ${img==null?"hidden" : "flex"} bg-slate-200  justify-center items-center`}>
          <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
          <img src={img} alt="" />
          </div>
        </div>
    </div>
  )
}
