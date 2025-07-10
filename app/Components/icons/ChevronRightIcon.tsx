import * as React from "react";
const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#761C30"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m8.91 19.92 6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
    />
  </svg>
);
export { ChevronRightIcon };
