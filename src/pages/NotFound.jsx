import PrimaryBtn from "../components/Primary-Btn";

export default function NotFound() {
  document.title = "404 | Not Found";
  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen gap-3">
        <h1 className="text-cs-gray dark:text-cs-light text-9xl font-Reospec">
          404
        </h1>
        <h2 className="text-cs-gray dark:text-cs-light text-md">
          Page Not Found
        </h2>
        <h2 className="text-cs-gray dark:text-cs-light text-xl">
          Uh, oh there is nothing to see here 👀
        </h2>
        <PrimaryBtn text="Back Home" href="/" />
      </main>
    </>
  );
}
