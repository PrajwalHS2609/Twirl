import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client"; // adjust this path to match your setup
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;

      const imageUrl = urlFor(value).width(800).height(500).url();

      return (
        <div>
          <Image
            src={imageUrl}
            alt={value.alt || "Blog image"}
            width={800}
            height={500}
          />
        </div>
      );
    },
  },
};
