 
export default function Footer() {
  return (
<>
<div className="bg-[#2C3E50] md:p-20 p-5 text-white text-[23px] text-center">
<div className="md:w-[80%] mx-auto flex md:justify-between justify-center items-center flex-wrap ">
      <div className="my-10 lg:w-1/3 md:w-1/2 w-full">
        <h3 className="mb-1">LOCATION</h3>
        <p className="mb-3 text-[14px]">2215 John Daniel Drive</p>
        <p className="text-[14px]">Clark, MO 65243</p>
      </div>
      <div className="mb-10 md:mb-0 lg:w-1/3  md:w-1/2 w-full">
        <h3 className="mb-4">AROUND THE WEB</h3>
        <ul className="flex justify-center items-center">
          <li><i className="fa-brands border-2 rounded-full p-2 mr-4 fa-facebook"></i></li>
          <li><i className="fa-brands border-2 rounded-full p-2 mr-4 fa-linkedin"></i></li>
          <li><i className="fa-brands border-2 rounded-full p-2 mr-4 fa-twitter"></i></li>
          <li><i className="fa-brands border-2 rounded-full p-2 fa-square-instagram"></i></li>
        </ul>
      </div>
      <div className="mb-10 md:mb-0 lg:w-1/3  md:w-1/2 w-full">
        <h3 className="mb-2">ABOUT FREELANCER</h3>
        <p className="text-[14px]">Freelance is a free to use, licensed </p>
        <p className="text-[14px]">Bootstrap theme created by light </p>
      </div>
    </div>
</div>
    <div className="p-5 text-center bg-[#1A252F] text-white">
      Copyright © reserved to ENG : Ahmed Ashraf
    </div>
</>
  )
}
