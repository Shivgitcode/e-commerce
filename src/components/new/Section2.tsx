import { assert } from "console"
import Image from "next/image"



export default function Section2() {
    return (
        <section className="flex items-center w-full justify-between gap-5 mb-5 flex-row-reverse">
            <div className="flex flex-col gap-5 flex-1">
                <div className="relative w-full p-[10px] h-[186px] bg-[#FBE285] rounded-[10px] flex justify-center items-center group overflow-hidden">
                    <div className="relative z-[1] pl-10 mr-[11px] group-hover:scale-110 transition-all duration-500 ease-in-out">
                        <p className="text-[18.72px] font-bold mb-[18px] whitespace-nowrap ">New in Knitwear</p>
                        <p className="text-[14px] font-medium">Layers.On.Layers</p>
                    </div>
                    <div className="relative w-[300px] h-[200px] left-14">
                        <Image src={"/asset 5.png"} alt="no" fill objectFit="cover" objectPosition="top" className=" group-hover:scale-110 transiton-all duration-500 ease-in-out relative"></Image>
                    </div>
                </div>
                <div className="relative w-full h-[186px] rounded-[10px] bg-[#F9CADA] p-[10px] flex justify-start items-center group overflow-hidden">
                    <div className="relative z-[1] pl-10 mr-[11px] group-hover:scale-110 transition-all duration-500 ease-in-out">
                        <p className="text-[18.72px] font-bold mb-[18px]">New Season</p>
                        <p className="text-[14px] font-medium">Reflect your style</p>

                    </div>

                    <div className="relative w-[300px] h-[200px] left-14 ">
                        <Image src={"/asset 6.png"} alt="no" fill objectFit="cover" objectPosition="top" className=" group-hover:scale-110 transition-all duration-500 ease-in-out relative"></Image>


                    </div>

                </div>
            </div>

            <div className="flex w-full gap-[20px] flex-1">
                <div className="flex flex-1 flex-col items-center p-[10px] w-[233px] h-[400px] bg-[#f6f6f6] rounded-xl justify-around group">
                    <div className="relative w-[213px] h-[245px] group-hover:scale-110 transition-all duration-500">
                        <Image src={"/asset 8.png"} alt="no" fill objectFit="cover" objectPosition="top"></Image>
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
                        <Image src={"/asset 7.png"} alt="no" fill objectFit="cover" objectPosition="top"></Image>
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
    )
}
