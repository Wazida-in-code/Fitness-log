import Image from "next/image";
import bannerImg from "@/app/assets/banner.png";
import AllCards from "./components/AllCards";

export default function Home() {
  return (
    <div className="bg-[#000000]">
      <main className="pt-8">
        <div className="flex flex-col md:flex-row justify-between rounded-2xl bg-[#15171D] w-11/12 mx-auto pt-8 pb-6 overflow-hidden">
          {/* Content */}
          <div className="w-full md:w-1/2">
            <p className="text-[#C2F800] ml-6 mt-6 mb-3.5">WORKOUT LIBRARY</p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl ml-6 mb-4 font-bold text-white">
              TRAIN WITH INTENT. LOG 
              EVERY SET.
            </h1>

            <p className="text-[#9CA3AF] ml-6 mb-4 text-sm sm:text-base">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
              <br className="hidden sm:block" />
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <a href="#allCards">
              <button className="bg-[#C2F800] px-4 py-2.5 ml-6 rounded-md font-bold">
                BROWSE WORKOUTS
              </button>
            </a>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <Image
              alt="bannerImg"
              src={bannerImg}
              className="w-full max-w-[430px] h-auto object-contain"
            />
          </div>
        </div>
      </main>

      <AllCards />
    </div>
  );
}
