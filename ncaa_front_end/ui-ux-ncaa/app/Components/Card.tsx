import Image from "next/image";
import Google from "../../public/assets/Google.svg";
import User from "../../public/assets/User.svg";
import Logo from "../../public/assets/Logo.svg";
import Gradient from "../../public/assets/Gradient.svg";

export default function Card() {
  return (
    <>
      <div className="flex items-center justify-center min-h screen container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="card">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <Image src={Gradient} alt="gradient" />
              </div>
              <h5 className="text-2xl md:text-3xl font-medium mt-3">Low</h5>
              <p className="text-slate-500 text-lg mt-3">Thingy thing thing</p>
              <a
                href="#"
                className="text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out "
              >
                Explore
              </a>
            </div>
          </div>
          <div className="card">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <Image src={Gradient} alt="gradient" />
              </div>
              <h5 className="text-2xl md:text-3xl font-medium mt-3">Medium</h5>
              <p className="text-slate-500 text-lg mt-3">Thingy thing thing</p>
              <a
                href="#"
                className="text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out "
              >
                Explore
              </a>
            </div>
          </div>
          <div className="card">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <Image src={Gradient} alt="gradient" />
              </div>
              <h5 className="text-2xl md:text-3xl font-medium mt-3">High</h5>
              <p className="text-slate-500 text-lg mt-3">Thingy thing thing</p>
              <a
                href="#"
                className="text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out "
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
