import Image from "next/image";
import { MdOutlineSort } from "react-icons/md";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Bar from "../Bar";
export default function New() {
    return (
        <div className="w-full">
            <Bar name="New In" tag={"⚡"}></Bar>
            <section className="flex items-center w-full justify-between gap-5 mb-5">
                <div className="flex flex-col gap-5 flex-1">
                    <div className="relative w-full p-[10px] h-[186px] bg-[#bce7f0] rounded-[10px] flex justify-center items-center group overflow-hidden">
                        <Image src={"/asset 1.png"} alt="no" fill className=" object-cover group-hover:scale-110 transition-all duration-500"></Image>
                        <p className=" text-3xl font-bold z-[1] relative group-hover:scale-110 transition-all duration-500">Get up to 50% off</p>
                    </div>
                    <div className="relative w-full h-[186px] rounded-[10px] bg-[#dec8f3] p-[10px] flex justify-start items-center group overflow-hidden">
                        <div className="relative z-[1] pl-10 mr-[11px] group-hover:scale-110 transition-all duration-500 ease-in-out">
                            <p className="text-[18.72px] font-bold mb-[18px]">New Jordan Series</p>
                            <p className="text-[14px] font-medium">Best of daily wear</p>

                        </div>

                        <Image src={"/asset 2.png"} alt="no" fill objectFit="contain" objectPosition="right" className=" group-hover:scale-110 transition-all duration-500 ease-in-out"></Image>
                    </div>
                </div>

                <div className="flex w-full gap-[20px] flex-1">
                    <div className="flex flex-1 flex-col items-center p-[10px] w-[233px] h-[400px] bg-[#f6f6f6] rounded-xl justify-around group">
                        <div className="relative w-[213px] h-[245px] group-hover:scale-110 transition-all duration-500">
                            <Image src={"/asset 3.png"} alt="no" fill objectFit="cover" objectPosition="top"></Image>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className=" text-sm font-bold mb-4 ">Hugo Boss Leather Jacket</h3>
                            <p className="text-[20px] font-bold">
                                <div className=" line-through text-[#808080] text-[14px]">
                                    300$
                                </div>
                                200$
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 items-center p-[10px] w-[233px] h-[400px] bg-[#f6f6f6] rounded-xl justify-around group">
                        <div className="relative w-[213px] h-[245px] group-hover:scale-110 transition-all duration-500">
                            <Image src={"/asset 4.png"} alt="no" fill objectFit="cover" objectPosition="top"></Image>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className=" text-sm font-bold mb-4 ">Polka-dotted slip dress</h3>
                            <p className="text-[20px] font-bold">
                                200$
                            </p>
                        </div>
                    </div>
                </div>


            </section>

            <Section2></Section2>

            <Section3></Section3>



        </div>
    )
}
