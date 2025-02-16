import { FcMindMap } from "react-icons/fc";
import { IoIosSearch } from "react-icons/io";

const Nav = () => {
  return (
    <div className="z-50 absolute top-3 left-[50%] -translate-x-[50%] backdrop-blur-2xl drop-shadow-xl rounded-2xl bg-zinc-200/20 border-[1px] border-zinc-200 h-[75px] flex items-center justify-between px-20 w-[90%]">
      <h4 className="text-4xl">
        <FcMindMap />
      </h4>
      <div className="flex gap-7 text-lg font-[400] font-sans">
        <h5 className="text-zinc-800">Home</h5>
        <h5 className="text-zinc-800">What is Hear</h5>
        <h5 className="text-zinc-800">Sound For Clinicians</h5>
        <h5 className="text-zinc-800">Why Hear</h5>
        <h5 className="text-zinc-800">Al Assistance</h5>
        <h5 className="text-zinc-800">Contact Us</h5>
      </div>
      <div className="flex items-center justify-baseline gap-3 border-[1px] border-zinc-400 py-[10px] px-5 rounded-3xl">
        <IoIosSearch className="text-xl" />
        <h4>Search</h4>
      </div>
    </div>
  );
};

export default Nav;
