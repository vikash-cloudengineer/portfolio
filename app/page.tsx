import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
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
          AWS • Linux • DevOps • Web Development
        </p>

        <p className="max-w-2xl text-gray-400">
          Building scalable cloud infrastructure, automating workflows,
          and creating modern web applications.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
  <a
    href="https://github.com/vikash-cloudengineer"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/vikash-m-800a053a9?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition"
  >
    LinkedIn
  </a>

  <a
    href="/Vikash_Resume.pdf"
    download
    className="border border-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-500 transition"
  >
    Resume
  </a>

  <a
    href="#contact"
    className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
  >
    Contact
  </a>
</div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-orange-400 mb-8">
          About Me
        </h2>

        <p className="text-gray-300 leading-8 text-lg">
          I am an aspiring Cloud Engineer focused on AWS, Linux,
          Networking and DevOps technologies. I enjoy building
          cloud-based solutions, automating infrastructure,
          and continuously learning new technologies.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-orange-400 mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "AWS",
            "Linux",
            "Git",
            "GitHub",
            "Networking",
            "Next.js",
            "React",
            "HTML",
            "CSS",
            "JavaScript",
            "Supabase",
            "Vercel",
          ].map((skill) => (
            <div
              key={skill}
              className="border border-gray-800 rounded-xl p-6 text-center hover:border-orange-500 hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-orange-400 mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition">
            <h3 className="text-2xl font-semibold mb-3">
              Portfolio Website
            </h3>
            <p className="text-gray-400">
              Personal portfolio built with Next.js, Tailwind CSS and deployed on Vercel.
            </p>
          </div>

          <div className="border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition">
            <h3 className="text-2xl font-semibold mb-3">
              Salon Booking App
            </h3>
            <p className="text-gray-400">
              Appointment booking application built using React and Supabase backend.
            </p>
          </div>

          <div className="border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition">
            <h3 className="text-2xl font-semibold mb-3">
              AWS Static Website Hosting
            </h3>
            <p className="text-gray-400">
              Hosted static websites using AWS cloud services with secure deployment.
            </p>
          </div>

          <div className="border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition">
            <h3 className="text-2xl font-semibold mb-3">
              Linux Administration Lab
            </h3>
            <p className="text-gray-400">
              User management, permissions, services, networking and server administration practice.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold text-orange-400 mb-10">
          Contact Me
        </h2>

        <div className="border border-gray-800 rounded-xl p-8 hover:border-orange-500 transition">
          <div className="space-y-4 text-lg">

            <p>
              📧 Email:
              <span className="text-gray-300 ml-2">
                vikashmadhu2004@gmail.com
              </span>
            </p>
            <p>
             📱 Mobile:
              <span className="text-gray-300 ml-2">
                +91 8428422595  
              </span>
</p>

            <p>
              💻 GitHub:
              <a
                href="https://github.com/vikash-cloudengineer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 ml-2 hover:underline"
              >
                github.com/vikash-cloudengineer
              </a>
            </p>

            <p>
              🌐 Portfolio:
              <a
                href="https://portfolio-rho-sand-30.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 ml-2 hover:underline"
              >
                portfolio-rho-sand-30.vercel.app
              </a>
            </p>

            <p>
              📍 Location:
              <span className="text-gray-300 ml-2">
                Chennai, India
              </span>
            </p>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-gray-800">
        <p className="text-gray-500">
          © 2026 Vikash | Cloud Engineer Portfolio
        </p>
      </footer>

    </main>
  );
}