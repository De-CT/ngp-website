import * as React from "react";
const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={25} fill="none" {...props}>
    <path
      stroke="#761C30"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m19.92 9.45-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 9.45"
    />
  </svg>
);
export { ChevronDownIcon };
