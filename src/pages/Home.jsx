import Navbar from "../components/Navbar";
import ProfilePicture from "../assets/profile_picture.png";

export default function Home(props) {
  return (
    <>
      <Navbar {...props} />
      <main>
        <section className="flex justify-center items-center flex-col md:flex-row-reverse gap-10 md:gap-32 my-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to bg-blue-500 rounded-full h-40 w-40 blur-xl animate-rotate-bg"></div>
            <img
              src={ProfilePicture}
              alt="My Razor OC :3"
              className="relative rounded-full h-40 w-40 select-none pointer-events-none"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="cursor-default text-2xl md:text-4xl font-bold text-center md:text-left text-cs-gray dark:text-cs-light transition-colors ease-in-out duration-200">
              Hi, I'm <span className="text-orange-500">Razor</span>
            </h2>
            <h2 className="cursor-default text-lg md:text-2xl font-semibold text-center md:text-left text-cs-gray dark:text-cs-light transition-colors ease-in-out duration-200">
              I'm a <span className="text-orange-500">IT Student</span>
            </h2>
            <h2 className="cursor-default text-lg md:text-2xl font-semibold text-center md:text-left text-cs-gray dark:text-cs-light transition-colors ease-in-out duration-200">
              <span className="text-orange-500">Who</span> wants to be a{" "}
              <span className="underline underline-offset-1 decoration-orange-500 decoration-2">
                Software Developer
              </span>
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
