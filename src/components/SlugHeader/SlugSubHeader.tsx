import Image from "next/image";
import React from "react";

interface HeaderProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  serviceType: string;
}
export default function SlugSubHeader({
  imageSrc,
  alt,
  title,
  description,
  serviceType,
}: HeaderProps) {
  return (
    <div className="subServiceHead-container">
      <div className="subServiceHead-content">
        <Image src={imageSrc} alt={alt} height={300} width={300} />
      </div>
      <div className="subServiceHead-content">
        <h6>{serviceType}</h6>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
