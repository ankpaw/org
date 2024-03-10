import React from 'react';

interface CreditIconProps {
  fillA?: string;
  fillB?: string;
}

const CreditIcon: React.FC<CreditIconProps> = ({
  fillA = 'rgba(255,255,255,0)',
  fillB = '#fff',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g transform="translate(-1.5 4)">
      <rect fill={fillA} width="24" height="24" transform="translate(1.5 -4)" />
      <g transform="translate(1.5 -4.001)">
        <path
          fill={fillB}
          d="M12,24A12,12,0,0,1,3.515,3.516,12,12,0,0,1,20.485,20.487,11.922,11.922,0,0,1,12,24ZM10.453,9.746v8.837a1.162,1.162,0,0,0,1.161,1.161h.775a1.162,1.162,0,0,0,1.161-1.161V9.746l3.5,3.652a1.159,1.159,0,0,0,1.659.021l.527-.533a1.161,1.161,0,0,0,.342-.827,1.142,1.142,0,0,0-.342-.812L12.823,4.825a1.159,1.159,0,0,0-1.64,0L4.757,11.247a1.155,1.155,0,0,0-.342.824,1.142,1.142,0,0,0,.342.815l.527.533a1.166,1.166,0,0,0,.823.339,1.151,1.151,0,0,0,.842-.36l3.5-3.65Z"
          transform="translate(0 0)"
        />
      </g>
    </g>
  </svg>
);

export default CreditIcon;