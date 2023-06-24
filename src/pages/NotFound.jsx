import { Link } from "react-router-dom";

export default function NotFound() {
  document.title = "404 | Not Found";
  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen gap-3">
        <h1 className="text-cs-gray dark:text-cs-light text-9xl">404</h1>
        <h2 className="text-cs-gray dark:text-cs-light text-xl">
          Uh, oh there is nothing to see here 👀
        </h2>
        <Link
          to="/"
          className="bg-black rounded-2xl text-md text-cs-light w-fit py-3 px-7 select-none hover:scale-110 transition ease-in-out duration-200"
        >
          Wanna go back Home ?
        </Link>
      </main>
    </>
  );
}
