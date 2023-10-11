import { IProduct } from "@/app/utils/types";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

type ModalProductProps = {
  product: IProduct;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalProduct = ({ product, setToggle }: ModalProductProps) => {
  return (
    <section className="inset-center lg:w-[1000px] lg:h-[609px] flex flex-col lg:flex-row gap-10 mx-10 p-4 lg:p-10 pb-6 lg:pb-16 z-10 text-[#313337] bg-white">
      <div className="flex flex-col gap-6 lg:w-1/2">
        <Image
          src={product.imageSrc}
          alt=""
          width={270}
          height={300}
          className="w-full h-[300px] object-cover flex flex-1"
        />

        <div className="flex flex-col justify-start">
          <p>
            <span className="font-bold leading-[10px] text-[16px]">
              Warrant{" "}
            </span>
            5 years.
          </p>
          <p>
            <span className="font-bold leading-[10px] text-[16px]">
              Free delivery in Canada{" "}
            </span>
            in 1-5 days
          </p>
        </div>

        <p className="leading-[13.8px] text-[12px]">
          This model is in a different color and size, as well as other models
          <Link href="/products" className="text-blue-600 underline">
            {" "}
            see in our catalog
          </Link>
        </p>
      </div>

      <div className="flex flex-col lg:w-1/2">
        <h3 className="text-[22.57px] font-extralight">{product.name}</h3>

        <div className="flex flex-col gap-4 lg:gap-9">
          <div className="flex-col gap-2 hidden lg:flex">
            <h5 className="font-bold text-[14px]"> Description: </h5>
            <p className="text-[14px] leading-[13.8px]">
              {product.description}
            </p>
          </div>

          <div>
            <h5 className="font-bold text-[14px]"> Specifications: </h5>
            <div className="flex flex-col gap-3">
              <p className="flex items-center">
                <span className="text-[#91959C]">Size</span>
                <span className="flex-grow bg-[#91959C] h-[1px] ml-2"></span>
                <span>{product.size}mm</span>
              </p>
              <p className="flex items-center">
                <span className="text-[#91959C]">Material</span>
                <span className="flex-grow bg-[#91959C] h-[1px] ml-2"></span>
                <span>{product.material}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between">
            <div>
              <p>
                In stock{" "}
                <span className="text-green-600">
                  {product.pieces_left} pcs.
                </span>
              </p>
              <p>Art 110122</p>
            </div>
            <div className="flex flex-col">
              <p className="font-extrabold text-[26px]">
                {product.price}{" "}
                <span className="text-[11px] font-normal underline">$</span>
              </p>
            </div>
          </div>

          <div className="inline-flex justify-end pt-4">
            <Button className="px-20 py-4 bg-gradient-to-r from-[#ec4c14] via-[#ec6214] to-[#ec6f35] rounded-lg text-white font-bold">
              Buy in 1 click
            </Button>
          </div>
        </div>
      </div>

      <Image
        src={"/products/close-button.svg"}
        alt=""
        width={28}
        height={28}
        className="absolute top-6 right-6"
        onClick={() => setToggle(false)}
      />
    </section>
  );
};

export default ModalProduct;
