import * as React from "react";
const ChevronUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={25} fill="none" {...props}>
    <path
      stroke="#989FA5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M19.92 15.55 13.4 9.03c-.77-.77-2.03-.77-2.8 0l-6.52 6.52"
    />
  </svg>
);
export { ChevronUpIcon };
