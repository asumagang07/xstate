import React from "react";
import img from "../../../../public/dna-logo.png";

export interface ILogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Logo: React.FC<ILogoProps> = (props) => {
  const { src = img, className } = props;
  return <img src={src} alt="" className={`bg-cover ${className}`} />;
};

export default Logo;
