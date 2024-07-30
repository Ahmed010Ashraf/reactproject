 
export default function Contact() {
  return (
    <div className="h-screen">
      <h2 className="text-center my-3 text-[#2C3E50] text-4xl ">Contact component</h2>
      <div className="flex justify-center items-center mb-4 text-[#2C3E50]">
          <div className="line w-28 h-1 bg-[#2C3E50]"></div>
          <i className="fa-solid fa-star mx-4"></i>
          <div className="line w-28 h-1 bg-[#2C3E50]"></div>
        </div>
        <div className="form flex justify-center flex-col items-end">
          <input className="md:w-[50%] w-full m-auto shadow bottom-1 mb-3 p-2 block" placeholder="yout name" type="text" />
          <input className="md:w-[50%] w-full m-auto shadow bottom-1 mb-3 p-2 block" placeholder="yout email" type="text" />
          <input className="md:w-[50%] w-full m-auto shadow bottom-1 mb-3 p-2 block" placeholder="yout password" type="email" />
          <input className="md:w-[50%] w-full m-auto shadow bottom-1 p-2 block" placeholder="yout age" type="passward" />
        <button className="py-1 px-3 text-xl bg-sky-400 text-white block m-auto rounded-lg mt-4">send</button>
        </div>
    </div>
  )
}
