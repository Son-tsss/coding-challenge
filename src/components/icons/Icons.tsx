import React from 'react';

type IconProps = {
  className?: string;
  viewBox?: string;
  children: React.ReactNode | React.ReactNodeArray;
  size?: number;
}

const Icon = (props: IconProps) => {
  const {viewBox = "0 0 24 24", children, size = 24, ...rest} = props;

  return (
    <svg style={{height: size}} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" {...rest}>
      {children}
    </svg>
  )
};

export const LogoutIcon = ({...props}) => (
  <Icon {...props}>
    <path d="M0 0h24v24H0z" fill="none"/>
    <path
      d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
  </Icon>
);

export const SendIcon = ({...props}) => (
  <Icon {...props}>
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
  </Icon>
);

export const ActionIcon = ({...props}) => (
  <Icon {...props}>
    <path d="M0 0h24v24H0z" fill="none"/>
    <path
      d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
  </Icon>
);

export const StarIcon = ({...props}) => (
  <Icon {...props}>
    <g>
      <rect fill="none" height="24" width="24" x="0"/>
      <polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10"/>
    </g>
  </Icon>
);

export default Icon;
