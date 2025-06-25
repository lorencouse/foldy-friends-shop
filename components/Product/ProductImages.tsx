import React, { useState } from "react";
import Image from "next/image";

export const ProductImages = ({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) => {
  const [currentImg, setCurrentImg] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean[]>(images.map(() => false));

  const handleImageLoad = (index: number) => {
    setLoaded((prevLoaded) => {
      const newLoaded = [...prevLoaded];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <div className="product-images grid grid-cols-12 sm:gap-3 mb-3">
      <div className="image-gallery md:col-span-2 col-span-3 flex flex-col overflow-y-auto md:mx-0 mr-5">
        {images.map((image, i) => (
          <div
            key={i}
            onClick={() => setCurrentImg(i)}
            className={`gallery-image-container aspect-square m-1 rounded-lg overflow-hidden relative cursor-pointer hover:opacity-80 hover:scale-105 ${
              i === currentImg ? "opacity-80 scale-105" : ""
            }`}
          >
            <div className="image-container">
              <Image
                src={
                  image
                    ? `https://lfuijoomjeqehavkvbhl.supabase.co/storage/v1/object/public/product-images//${image}.jpg`
                    : "/assets/dog-mascot.png"
                }
                alt={alt}
                loading="lazy"
                className={`w-full h-full object-cover ${loaded[i] ? "loaded" : "loading"}`}
                onLoad={() => handleImageLoad(i)}
                height={100}
                width={100}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="product-image md:col-span-10 col-span-9 paper">
        <div className="tape-section z-10"></div>
        <div className="image-container ">
          <Image
            className={`w-full h-auto ${loaded[currentImg] ? "loaded" : "loading"}`}
            src={
              images[currentImg]
                ? `https://lfuijoomjeqehavkvbhl.supabase.co/storage/v1/object/public/product-images//${images[currentImg]}.jpg`
                : "/assets/dog-mascot.png"
            }
            alt={alt}
            loading="lazy"
            onLoad={() => handleImageLoad(currentImg)}
            height={500}
            width={500}
          />
        </div>
        <div className="tape-section "></div>
      </div>
    </div>
  );
};
