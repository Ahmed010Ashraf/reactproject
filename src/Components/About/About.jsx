export default function About() {
  return (
    <div className="h-screen bg-[#1ABC9C] flex flex-wrap justify-center items-center text-white text-center">
      <div>
        <h2 className="text-5xl mb-3">about component</h2>
        <div className="flex justify-center items-center mb-4">
          <div className="line w-28 h-1 bg-white"></div>
          <i className="fa-solid fa-star mx-4"></i>
          <div className="line w-28 h-1 bg-white"></div>
        </div>
        <p className="w-80 text-center mx-auto">
          Freelancer is a free bootstrap theme created by light. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization
        </p>
      </div>
    </div>
  );
}
