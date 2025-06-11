import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
// CSS for both post and service
// import "@/components/Blog/Blog.css";
import "@/components/Style/style.css";
import SlugHeader from "@/components/SlugHeader/SlugHeader";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import SlugSubHeader from "@/components/SlugHeader/SlugSubHeader";

export const revalidate = 0;

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body,
  metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  }
}`;

const SERVICE_QUERY = `*[_type == "ServiceCategory" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body1,
  body2,
  metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  }
}`;

const SUBSERVICE_QUERY = `*[_type == "SubService" && slug.current == $slug][0]{
  _id,
  serviceType,
  title,
  description,
  slug,
  body1,
  body2,
  metaTitle,
  metaDescription,
  youtubeVideoUrl,
  mainImage {
    asset->{
      _id,
      url
    }
  }
}`;

// ✅ keep generateMetadata as you wanted
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch(POST_QUERY, { slug });
  const service = !post ? await client.fetch(SERVICE_QUERY, { slug }) : null;
  const subservice =
    !post && !service ? await client.fetch(SUBSERVICE_QUERY, { slug }) : null;
  const content = post || service || subservice;

  if (!content) {
    return {
      title: "Not Found",
      description: "The page you're looking for doesn't exist.",
    };
  }

  return {
    title: content.metaTitle || content.title || "Default Title",
    description: content.metaDescription || "Default description.",
  };
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug });
  const service = !post
    ? await client.fetch<SanityDocument>(SERVICE_QUERY, { slug })
    : null;
  const subservice =
    !post && !service
      ? await client.fetch<SanityDocument>(SUBSERVICE_QUERY, { slug })
      : null;

  const content = post || service || subservice;
  if (!content) notFound();

  const imageUrl = content?.mainImage?.asset?.url || null;
  const isPost = !!post;
  const isService = !!service;
  const isSubService = !!subservice;

  return (
    <>
      {isPost && (
        <div className="blog-container">
          <div className="blog-wrapper1">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={content.title || "Image"}
                width={550}
                height={310}
              />
            ) : (
              <p className="image-fallback">Image not available</p>
            )}
            <div className="blogHead-content">
              <PortableText value={content.body} />
            </div>
          </div>
          <div className="blog-wrapper2">{/* <BlogSidebar /> */}</div>
        </div>
      )}

      {isService && (
        <div className="main-container">
          <SlugHeader
            imageSrc={imageUrl}
            alt={content.title || "Image"}
            title={content.title}
          />
          <div className="subServiceContent-container">
            <div className="subServicesMain-item">
              <h1>{content.title}</h1>
              <PortableText value={content.body1} />
            </div>
          </div>
          <HomeTreatments />
          <HomeInterior />
          <HomeTestimonial />
          <HomeInspire />
          <div className="subServiceContent-container">
            <div className="subServicesMain-item">
              <PortableText value={content.body2} />
            </div>
          </div>
        </div>
      )}

      {isSubService && (
        <div className="main-container">
          <SlugSubHeader
            imageSrc={imageUrl}
            alt={content.title || "Image"}
            title={content.title}
            description={content.description}
            serviceType={content.serviceType}
          />
          <div className="subServiceContent-container">
            <div className="subServicesMain-item">
              <h1>{content.title}</h1>
              <PortableText value={content.body1} />
            </div>
          </div>

          {/* Optional: Show YouTube Video if available */}
          {content.youtubeVideoUrl && (
            <div className="youtube-container">
              <iframe
                width="100%"
                height="400"
                src={content.youtubeVideoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <HomeTreatments />
          <HomeInterior />
          <HomeTestimonial />
          <HomeInspire />
          <div className="subServiceContent-container">
            <div className="subServicesMain-item">
              <PortableText value={content.body2} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ⛳ Static Params
type SlugType = { slug: { current: string } };

export async function generateStaticParams() {
  const postSlugs = await client.fetch<SlugType[]>(
    `*[_type == "post"]{ slug }`
  );
  const serviceSlugs = await client.fetch<SlugType[]>(
    `*[_type == "ServiceCategory"]{ slug }`
  );
  const subServiceSlugs = await client.fetch<SlugType[]>(
    `*[_type == "SubService"]{ slug }`
  );

  return [...postSlugs, ...serviceSlugs, ...subServiceSlugs].map((item) => ({
    slug: item.slug.current,
  }));
}
