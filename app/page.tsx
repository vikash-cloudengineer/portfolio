import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <Image
          src="/vikash.jpg"
          alt="Vikash"
          width={220}
          height={220}
          className="rounded-full border-4 border-orange-500 shadow-2xl mb-8"
        />

        <p className="uppercase tracking-[0.3em] text-sm text-orange-400 mb-4">
          Cloud Engineer
        </p>

        <h1 className="text-6xl md:text-8xl font-extrabold mb-4">
          Vikash
        </h1>

        <p className="text-xl text-gray-300 mb-6">
          AWS • Linux • Web Development
        </p>

        <p className="max-w-2xl text-gray-400 mx-auto">
          Building modern cloud solutions, scalable infrastructure, and
          interactive web experiences.
        </p>
      </div>
    </main>
  );
}