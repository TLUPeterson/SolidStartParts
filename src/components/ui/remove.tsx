import { JSX } from "solid-js";

function IconRemove(props: JSX.IntrinsicAttributes & JSX.SvgSVGAttributes<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
      <path d="M8 11a1 1 0 100 2h8a1 1 0 100-2H8z" />
      <path
        fill-rule="evenodd"
        d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-2 0a9 9 0 11-18 0 9 9 0 0118 0z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

export default IconRemove;
