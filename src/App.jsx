import Spline from "@splinetool/react-spline";
import Nav from "./nav";

const App = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-[100%] justify-center items-center px-[4vw] bg-[#f5f5f5]">
        <Nav></Nav>
        <div className="w-[100%] h-[35%] text-center font-mono leading-none -tracking-tighter z-10">
          <h2 className="text-blue-400 2xl:text-[5rem] md:text-[3rem] sm:text-[2.4rem] text-[1.8rem] mt-32">
            Transforming Cough Sounds
          </h2>
          <h2 className="text-blue-400 2xl:text-[4.7rem] md:text-[3rem] sm:text-[2.3rem] text-[1.7rem]">
            into Diagnostic Insights
          </h2>
          <p className="mt-3 text-[1.2rem] text-gray-500">
            At Hear, we revolutionizing healthcare with Al that analyzes cough
            sounds
          </p>
          <p className=" text-[1.2rem] text-gray-500">for early diagnosis.</p>
        </div>
        <div className="w-[100%] h-[65%]">
          <Spline scene="https://prod.spline.design/wLprUaAQWbsQNYQm/scene.splinecode" />
        </div>
      </div>
      <div className="h-screen bg-[#f5f5f5]"></div>
    </>
  );
};

export default App;
