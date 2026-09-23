import Image from "next/image";
import bannerImg from "@/app/assets/banner.png"

export default function Home() {
  return (
    <main className="bg-[#15171D]">
      <div className="flex justify-between w-11/12 mx-auto pt-[40px] pb-[23px]">
        <div>
            <p className="text-[#C2F800] mt-6 mb-3.5">WORKOUT LIBRARY</p>
            <h1 className="text-5xl mb-4 font-bold text-white">TRAIN WITH INTENT. LOG <br /> EVERY SET.</h1>
            <p className="text-[#9CA3AF] mb-4">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into today&apos;s plan, and watch the week&apos;s work add up.</p>
            <button className="bg-[#C2F800] px-4 py-2.5 rounded-md font-bold">BROWSE WORKOUTS</button>
        </div>

        <div>
          <Image alt="bannerImg" src={bannerImg}></Image>
        </div>
      </div>
    </main>
  );
}
