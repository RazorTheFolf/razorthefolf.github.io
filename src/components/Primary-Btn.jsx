import { Link } from "react-router-dom";
export default function PrimaryBtn(props) {
  const { text, href, isRotated } = props;
  return (
    <>
      <Link
        to={href}
        className="relative flex items-center gap-3 text-cs-light text-xl bg-black rounded-2xl py-3 px-7"
      >
        {text}
        <svg
          viewBox="0 0 5 16"
          height="10"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
          id="arrow-horizontal"
        >
          <path
            className="text-cs-light"
            fill="currentColor"
            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
            data-name="Path 10"
            id="Path_10"
          ></path>
        </svg>
      </Link>
    </>
  );
}
