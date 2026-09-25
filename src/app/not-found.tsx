import Image from "next/image";
import notFoundImg from "@/app/assets/App-Error.png"
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#000000] px-4">
      <div className="text-center mb-2">
        <Image
          src={notFoundImg}
          alt="Page not found"
          className="mx-auto w-full"
        />
        <p className="mt-2 text-[#8A92A0]">
          Sorry, the page you are looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-[#C2F800] px-6 py-3 font-bold text-black"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
