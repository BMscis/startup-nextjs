import {Brand} from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <div className="w-full">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center rounded-lg bg-gray-light p-2 dark:bg-gray-dark md:p-8 ">
            {brandsData.map(brand => (
              <SingleBrand key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;

const SingleBrand = ({brand}: {brand: Brand}) => {
  const {href, image, imageLight, name} = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100">
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a>
    </div>
  );
};
