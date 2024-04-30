import { Product } from "@/utils";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { img1 } from "../../../public";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className=" p-[10px] border-2 rounded-[10px] border-gray-300 relative">
            <div className="absolute top-3 right-5 bg-white w-[36px] h-[36px] p-[10px] z-[1]  rounded-full shadow-xl">
                <CiHeart fontSize={16} strokeWidth={1}></CiHeart>

            </div>

            <div className="w-[250px] h-[320px] relative mb-5">
                <Image src={product.img} alt="no" fill objectFit="cover"></Image>
            </div>

            <div className="flex flex-col items-center justify-start">
                <h3 className=" text-xl mb-2 leading-[21px] font-bold">{product.Brand}</h3>
                <p className=" text-[14px] leading-[21px] font-bold mb-[18px]">{product.name}</p>
                <div className="w-full flex items-center justify-center">
                    <div className="bg-[#ff0000] rounded-md font-semibold p-[10px] mr-[10px] text-white">
                        {product.discount}%
                    </div>
                    <div>
                        <p className="text-[#808080] font-bold text-[14px] line-through">{product.mrp}$</p>
                        <p className="font-bold text-lg">{product.sale}$</p>


                    </div>

                </div>
            </div>





        </div>
    )
}
