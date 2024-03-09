import React from 'react';

interface AccountIconProps {
  fillA?: string;
  fillB?: string;
}

const AccountIcon: React.FC<AccountIconProps> = ({ fillA = 'rgba(255,255,255,0)', fillB = '#fff' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g transform="translate(-2 4)">
      <rect className="a" fill={fillA} width="24" height="24" transform="translate(2 -4)"/>
      <g transform="translate(4 -4)">
        <path className="b" fill={fillB} d="M92.817,11.547a5.6,5.6,0,0,0,4.091-1.691A5.58,5.58,0,0,0,98.6,5.773a5.581,5.581,0,0,0-1.7-4.082,5.793,5.793,0,0,0-8.181,0,5.581,5.581,0,0,0-1.7,4.082,5.58,5.58,0,0,0,1.7,4.082A5.605,5.605,0,0,0,92.817,11.547Zm0,0" transform="translate(-82.957)"/>
        <path className="b" fill={fillB} d="M19.975,254.17a14.244,14.244,0,0,0-.194-1.515,11.921,11.921,0,0,0-.373-1.523,7.517,7.517,0,0,0-.627-1.42,5.36,5.36,0,0,0-.945-1.23,4.168,4.168,0,0,0-1.358-.852,4.7,4.7,0,0,0-1.733-.313,1.76,1.76,0,0,0-.94.4c-.282.183-.611.4-.979.63a5.612,5.612,0,0,1-1.266.557,4.923,4.923,0,0,1-3.1,0,5.6,5.6,0,0,1-1.265-.557c-.364-.232-.694-.445-.98-.631a1.758,1.758,0,0,0-.939-.4,4.691,4.691,0,0,0-1.733.314,4.165,4.165,0,0,0-1.358.852,5.361,5.361,0,0,0-.945,1.23,7.532,7.532,0,0,0-.627,1.42,11.949,11.949,0,0,0-.373,1.523,14.193,14.193,0,0,0-.194,1.515c-.032.459-.048.935-.048,1.416A3.978,3.978,0,0,0,1.184,258.6a4.264,4.264,0,0,0,3.05,1.111H15.79a4.263,4.263,0,0,0,3.05-1.111,3.976,3.976,0,0,0,1.184-3.012C20.023,255.1,20.007,254.626,19.975,254.17Zm0,0" transform="translate(0 -235.708)"/>
      </g>
    </g>
  </svg>
);

export default AccountIcon;