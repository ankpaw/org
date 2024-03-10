interface AddIconProps {
  fillA?: string;
  fillB?: string;
}
const AddIcon = ({
  fillA = 'rgba(255,255,255,0)',
  fillB = '#fff',
}: AddIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <defs>
      <style>
        {`.addIconA{fill:${fillA};}.addIconB{fill:${fillB};stroke:#325baf;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.5px;}`}
      </style>
    </defs>
    <g transform="translate(-27.3 -0.445)">
      <rect
        className="addIconA"
        width="16"
        height="16"
        transform="translate(27.3 0.445)"
      />
      <path
        className="addIconB"
        d="M7.5,0A7.5,7.5,0,1,0,15,7.5,7.508,7.508,0,0,0,7.5,0Zm3.281,8.125H8.125v2.656a.625.625,0,1,1-1.25,0V8.125H4.219a.625.625,0,1,1,0-1.25H6.875V4.219a.625.625,0,1,1,1.25,0V6.875h2.656a.625.625,0,1,1,0,1.25Zm0,0"
        transform="translate(27.8 0.945)"
      />
    </g>
  </svg>
);

export default AddIcon;
