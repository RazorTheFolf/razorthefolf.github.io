import Navbar from "../components/Navbar";
import ProfilePicture from "../assets/profile_picture.webp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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

  console.log("Hewoo :3");
  console.log("I'm glad you're here :D");
  console.log("So you're a developer too ?");
  console.log(
    "You can check the code here: https://github.com/RazorTheWolf/razorthewolf.github.io"
  );
  return (
    <>
      <Navbar {...props} />
      <main>
        <section className="flex justify-center items-center flex-col md:flex-row-reverse gap-10 md:gap-24 xl:gap-32 mt-[10vh] md:mt-[21vh]">
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
              <h1 className="cursor-default text-2xl md:text-4xl font-bold text-center md:text-left text-cs-gray dark:text-cs-light transition-colors ease-in-out duration-200 animate-typing border-r-4 w-max border-r-white overflow-hidden whitespace-nowrap">
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
            <div className="flex flex-row items-center justify-center md:justify-start gap-5">
              <Link
                to="/contact"
                className="self-center md:self-start bg-black rounded-2xl text-xl text-cs-light my-5 w-fit py-3 px-7 select-none"
              >
                Contact Me
              </Link>
              <Link
                to="/work"
                className="flex items-center gap-3 text-cs-gray dark:text-cs-light text-xl transition ease-in-out duration-200"
              >
                See my Work
                <svg
                  viewBox="0 0 5 16"
                  height="10"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  id="arrow-horizontal"
                >
                  <path
                    className="text-cs-gray dark:text-cs-light transition-colors ease-in-out duration-200"
                    fill="currentColor"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    data-name="Path 10"
                    id="Path_10"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
        {matches ? (
          <svg
            className="absolute bottom-0 left-0 w-screen h-auto -z-10"
            id="visual"
            viewBox="0 0 960 540"
            width="960"
            height="540"
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
            className="absolute bottom-0 left-0 w-screen h-auto -z-10"
            id="visual"
            viewBox="0 0 675 900"
            width="675"
            height="900"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <path
              d="M0 724L16 705C32 686 64 648 96.2 644.7C128.3 641.3 160.7 672.7 192.8 680.8C225 689 257 674 289.2 658.3C321.3 642.7 353.7 626.3 385.8 637.5C418 648.7 450 687.3 482.2 706.2C514.3 725 546.7 724 578.8 704.3C611 684.7 643 646.3 659 627.2L675 608L675 901L659 901C643 901 611 901 578.8 901C546.7 901 514.3 901 482.2 901C450 901 418 901 385.8 901C353.7 901 321.3 901 289.2 901C257 901 225 901 192.8 901C160.7 901 128.3 901 96.2 901C64 901 32 901 16 901L0 901Z"
              fill="#f97316"
            ></path>
            <path
              d="M0 707L16 715.5C32 724 64 741 96.2 741.5C128.3 742 160.7 726 192.8 723.8C225 721.7 257 733.3 289.2 732.2C321.3 731 353.7 717 385.8 703.2C418 689.3 450 675.7 482.2 669.8C514.3 664 546.7 666 578.8 665.5C611 665 643 662 659 660.5L675 659L675 901L659 901C643 901 611 901 578.8 901C546.7 901 514.3 901 482.2 901C450 901 418 901 385.8 901C353.7 901 321.3 901 289.2 901C257 901 225 901 192.8 901C160.7 901 128.3 901 96.2 901C64 901 32 901 16 901L0 901Z"
              fill="#fb903b"
            ></path>
            <path
              d="M0 721L16 734.5C32 748 64 775 96.2 780.3C128.3 785.7 160.7 769.3 192.8 760.7C225 752 257 751 289.2 757.5C321.3 764 353.7 778 385.8 778.7C418 779.3 450 766.7 482.2 764.7C514.3 762.7 546.7 771.3 578.8 777.3C611 783.3 643 786.7 659 788.3L675 790L675 901L659 901C643 901 611 901 578.8 901C546.7 901 514.3 901 482.2 901C450 901 418 901 385.8 901C353.7 901 321.3 901 289.2 901C257 901 225 901 192.8 901C160.7 901 128.3 901 96.2 901C64 901 32 901 16 901L0 901Z"
              fill="#fca95e"
            ></path>
            <path
              d="M0 818L16 811.7C32 805.3 64 792.7 96.2 786C128.3 779.3 160.7 778.7 192.8 781.3C225 784 257 790 289.2 788.7C321.3 787.3 353.7 778.7 385.8 773C418 767.3 450 764.7 482.2 769.5C514.3 774.3 546.7 786.7 578.8 790.2C611 793.7 643 788.3 659 785.7L675 783L675 901L659 901C643 901 611 901 578.8 901C546.7 901 514.3 901 482.2 901C450 901 418 901 385.8 901C353.7 901 321.3 901 289.2 901C257 901 225 901 192.8 901C160.7 901 128.3 901 96.2 901C64 901 32 901 16 901L0 901Z"
              fill="#fdc183"
            ></path>
            <path
              d="M0 814L16 814.5C32 815 64 816 96.2 820.3C128.3 824.7 160.7 832.3 192.8 839.8C225 847.3 257 854.7 289.2 858C321.3 861.3 353.7 860.7 385.8 861.8C418 863 450 866 482.2 865.2C514.3 864.3 546.7 859.7 578.8 858.3C611 857 643 859 659 860L675 861L675 901L659 901C643 901 611 901 578.8 901C546.7 901 514.3 901 482.2 901C450 901 418 901 385.8 901C353.7 901 321.3 901 289.2 901C257 901 225 901 192.8 901C160.7 901 128.3 901 96.2 901C64 901 32 901 16 901L0 901Z"
              fill="#fed7aa"
            ></path>
          </svg>
        )}
      </main>
    </>
  );
}
