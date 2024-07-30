 import mainimg from "./../../assets/avataaars.svg"
export default function Home() {
  return (
    <div className="h-screen bg-[#1ABC9C] flex justify-center items-center flex-wrap">
      <div>
      <img src={mainimg} alt="mainimg" />
      <h2 className="text-center text-white md:text-4xl text-3xl my-4">start Framework</h2>
      <div className="flex justify-center items-center mb-4">
        <div className="line w-28 h-1 bg-white"></div>
        <i className="fa-solid fa-star mx-4"></i>
        <div className="line w-28 h-1 bg-white"></div>
      </div>
      <p className="text-white">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  )
}
