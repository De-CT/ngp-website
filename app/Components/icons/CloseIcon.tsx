import * as React from "react"
const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" {...props}>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.632 14.37 10 10l4.369 4.37m0-8.74L10 10 5.632 5.63"
    />
  </svg>
)
export { CloseIcon }
