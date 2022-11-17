import { SVGProps } from "react"

interface logo extends SVGProps<SVGSVGElement>{
  stroke: string,
}

const Logo: React.FC<logo> = ({stroke, ...args}) => (
  <svg
  viewBox="0 0 37 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...args}
  >
    <path
      d="M2.758 19.191C2.924 9.697 10.221 2.125 19.056 2.28c8.835.154 15.863 7.976 15.698 17.47l-18.22-.317-.258 14.804"
      stroke={stroke}
      strokeWidth={4}
    />
  </svg>
)

export default Logo
