import Navbar from "../components/Navbar";
import ProfilePicture from "../assets/profile_picture.webp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard";
import PrimaryBtn from "../components/Primary-Btn";

export default function Home(props) {
  document.title = "Razor's Site | Home";
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <>
      <Navbar {...props} />
      <main>
        <section className="flex justify-center items-center flex-col md:flex-row-reverse gap-10 md:gap-24 xl:gap-32 mt-[10vh] md:mt-[23vh]">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-blue-700 rounded-full h-40 w-40 md:h-44 md:w-44 xl:h-60 xl:w-60 blur-xl animate-rotate-bg"></div>
            <img
              src={ProfilePicture}
              alt="My Razor OC :3"
              className="relative rounded-full h-40 w-40 md:h-44 md:w-44 xl:h-60 xl:w-60 select-none pointer-events-none"
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="w-max">
              <h1 className="cursor-default text-2xl md:text-4xl font-bold text-center md:text-left text-cs-gray dark:text-cs-light transition-colors ease-in-out duration-200 animate-typing border-r-4 w-max dark:border-r-white border-r-black overflow-hidden whitespace-nowrap">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                  Razor
                </span>
              </h1>
            </div>

            <h2 className="cursor-default text-lg md:text-2xl font-semibold text-center md:text-left text-cs-gray dark:text-cs-light transition-colors ease-in-out duration-200">
              I'm a <span className="text-orange-500">IT Student</span>
            </h2>
            <h2 className="cursor-default text-lg md:text-2xl font-semibold text-center md:text-left text-cs-gray dark:text-cs-light transition-colors ease-in-out duration-200">
              <span className="text-orange-500">Who</span> wants to be a{" "}
              <span className="underline underline-offset-1 decoration-orange-500 decoration-2">
                Software Developer
              </span>
            </h2>
            <div className="flex flex-col items-center justify-center md:justify-start gap-5 my-5">
              <div className="relative group md:self-start">
                <div className="absolute md:-inset-0.5 md:bg-gradient-to-r md:from-orange-600 md:to-blue-700 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition ease-in-out duration-200"></div>
                <PrimaryBtn text="See my work" href="/work" />
              </div>
              <section className="flex justify-center items-center flex-wrap w-[300px] md:w-fit gap-3">
                <ContactCard
                  href="https://discord.com/users/razorthewolf"
                  type="discord"
                  text="razorthewolf"
                />
                <ContactCard
                  href="https://twitter.com/Razorthewolf_"
                  type="twitter"
                  text="@Razorthewolf_"
                />
                <ContactCard
                  href="https://t.me/RazorTheWolf25"
                  type="telegram"
                  text="@RazorTheWolf25"
                />
                <ContactCard
                  href="https://steamcommunity.com/id/RazorTheWolf_/"
                  type="steam"
                  text="RazorTheWolf"
                />
              </section>
            </div>
          </div>
        </section>
        {matches ? (
          <svg
            className="absolute bottom-0 left-0 w-screen h-auto -z-10"
            id="visual"
            viewBox="0 0 960 540"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <path
              d="M0 434L22.8 422.5C45.7 411 91.3 388 137 386C182.7 384 228.3 403 274 408C319.7 413 365.3 404 411.2 394.7C457 385.3 503 375.7 548.8 382.3C594.7 389 640.3 412 686 423.2C731.7 434.3 777.3 433.7 823 421.8C868.7 410 914.3 387 937.2 375.5L960 364L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
              fill="#f97316"
            ></path>
            <path
              d="M0 424L22.8 429C45.7 434 91.3 444 137 444.3C182.7 444.7 228.3 435.3 274 434.2C319.7 433 365.3 440 411.2 439.3C457 438.7 503 430.3 548.8 422C594.7 413.7 640.3 405.3 686 401.7C731.7 398 777.3 399 823 398.7C868.7 398.3 914.3 396.7 937.2 395.8L960 395L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
              fill="#fb903b"
            ></path>
            <path
              d="M0 432L22.8 440.2C45.7 448.3 91.3 464.7 137 468C182.7 471.3 228.3 461.7 274 456.5C319.7 451.3 365.3 450.7 411.2 454.5C457 458.3 503 466.7 548.8 467C594.7 467.3 640.3 459.7 686 458.3C731.7 457 777.3 462 823 465.5C868.7 469 914.3 471 937.2 472L960 473L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
              fill="#fca95e"
            ></path>
            <path
              d="M0 491L22.8 487.2C45.7 483.3 91.3 475.7 137 471.5C182.7 467.3 228.3 466.7 274 468.2C319.7 469.7 365.3 473.3 411.2 472.7C457 472 503 467 548.8 463.7C594.7 460.3 640.3 458.7 686 461.5C731.7 464.3 777.3 471.7 823 473.7C868.7 475.7 914.3 472.3 937.2 470.7L960 469L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
              fill="#fdc183"
            ></path>
            <path
              d="M0 488L22.8 488.3C45.7 488.7 91.3 489.3 137 492C182.7 494.7 228.3 499.3 274 503.8C319.7 508.3 365.3 512.7 411.2 514.7C457 516.7 503 516.3 548.8 517C594.7 517.7 640.3 519.3 686 518.8C731.7 518.3 777.3 515.7 823 514.8C868.7 514 914.3 515 937.2 515.5L960 516L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
              fill="#fed7aa"
            ></path>
          </svg>
        ) : (
          <svg
            className="absolute bottom-0 left-0 -z-10"
            id="visual"
            viewBox="0 0 540 960"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <path
              d="M0 820L18 811C36 802 72 784 108 766.7C144 749.3 180 732.7 216 728.7C252 724.7 288 733.3 324 741.3C360 749.3 396 756.7 432 758C468 759.3 504 754.7 522 752.3L540 750L540 961L522 961C504 961 468 961 432 961C396 961 360 961 324 961C288 961 252 961 216 961C180 961 144 961 108 961C72 961 36 961 18 961L0 961Z"
              fill="#f97316"
            ></path>
            <path
              d="M0 770L18 771.5C36 773 72 776 108 787C144 798 180 817 216 828.5C252 840 288 844 324 847.7C360 851.3 396 854.7 432 857C468 859.3 504 860.7 522 861.3L540 862L540 961L522 961C504 961 468 961 432 961C396 961 360 961 324 961C288 961 252 961 216 961C180 961 144 961 108 961C72 961 36 961 18 961L0 961Z"
              fill="#fb903b"
            ></path>
            <path
              d="M0 808L18 810.2C36 812.3 72 816.7 108 827.8C144 839 180 857 216 857C252 857 288 839 324 834.5C360 830 396 839 432 850.3C468 861.7 504 875.3 522 882.2L540 889L540 961L522 961C504 961 468 961 432 961C396 961 360 961 324 961C288 961 252 961 216 961C180 961 144 961 108 961C72 961 36 961 18 961L0 961Z"
              fill="#fca95e"
            ></path>
            <path
              d="M0 907L18 908.3C36 909.7 72 912.3 108 906C144 899.7 180 884.3 216 876.5C252 868.7 288 868.3 324 873.7C360 879 396 890 432 886.8C468 883.7 504 866.3 522 857.7L540 849L540 961L522 961C504 961 468 961 432 961C396 961 360 961 324 961C288 961 252 961 216 961C180 961 144 961 108 961C72 961 36 961 18 961L0 961Z"
              fill="#fdc183"
            ></path>
            <path
              d="M0 935L18 931.7C36 928.3 72 921.7 108 913.8C144 906 180 897 216 896.2C252 895.3 288 902.7 324 906.3C360 910 396 910 432 913.5C468 917 504 924 522 927.5L540 931L540 961L522 961C504 961 468 961 432 961C396 961 360 961 324 961C288 961 252 961 216 961C180 961 144 961 108 961C72 961 36 961 18 961L0 961Z"
              fill="#fed7aa"
            ></path>
          </svg>
        )}
      </main>
    </>
  );
}
