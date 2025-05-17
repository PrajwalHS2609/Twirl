import Image from "next/image";
import React from "react";
interface HeaderProps {
  imageSrc: string;
  alt: string;
  title: string;
}
export default function SlugHeader({
  imageSrc,
  alt,
  title,
}: HeaderProps) {
  return (
    <div className="subHead-container">
      <Image src={imageSrc} alt={alt} fill />
      <div className="subHead-content" id="slugHead">
        <h2>{title}</h2>
      </div>
    </div>
  );
}
