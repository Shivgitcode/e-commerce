import Image from "next/image";
import { MdOutlineSort } from "react-icons/md";
export default function New() {
    return (
        <div className="w-full">
            <section className="flex w-full justify-between items-center mb-10">
                <h2 className="font-bold text-[28px]">⚡ New In</h2>
                <div className="flex items-center gap-5">
                    <button className="flex items-center px-[18px] py-[10px] border-[2px] border-gray-300 rounded-[10px] flex-1">
                        <MdOutlineSort fontSize={22}></MdOutlineSort>
                        <span className="font-bold ml-5">Sort</span>

                    </button>
                    <button className="flex justify-between items-center px-[18px] py-[10px] border-[2px] border-gray-300 rounded-[10px] flex-1">
                        <div className="rounded-full text-black font-bold  text-center ">
                            0
                        </div>
                        <span className="font-bold ml-5">Filter</span>

                    </button>


                </div>

            </section>
            <section className="flex items-center w-full justify-between gap-5 mb-5">
                <div className="flex flex-col gap-5 flex-1">
                    <div className="relative w-full p-[10px] h-[180px] bg-[#bce7f0] rounded-[10px] flex justify-center items-center group overflow-hidden">
                        <Image src={"/asset 1.png"} alt="no" fill className=" object-cover group-hover:scale-110 transition-all duration-500"></Image>
                        <p className=" text-3xl font-bold z-[1] relative group-hover:scale-110 transition-all duration-500">Get up to 50% off</p>
                    </div>
                    <div className="relative w-full h-[180px] rounded-[10px] bg-[#dec8f3] p-[10px] flex justify-start items-center group overflow-hidden">
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
            <section className="flex items-center w-full justify-between gap-5 mb-5 flex-row-reverse">
                <div className="flex flex-col gap-5 flex-1">
                    <div className="relative w-full p-[10px] h-[180px] bg-[#bce7f0] rounded-[10px] flex justify-center items-center group overflow-hidden">
                        <Image src={"/asset 1.png"} alt="no" fill className=" object-cover group-hover:scale-110 transition-all duration-500"></Image>
                        <p className=" text-3xl font-bold z-[1] relative group-hover:scale-110 transition-all duration-500">Get up to 50% off</p>
                    </div>
                    <div className="relative w-full h-[180px] rounded-[10px] bg-[#dec8f3] p-[10px] flex justify-start items-center group overflow-hidden">
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
            <section className="flex items-center w-full justify-between gap-5 mb-5">
                <div className="flex flex-col gap-5 flex-1">
                    <div className="relative w-full p-[10px] h-[180px] bg-[#bce7f0] rounded-[10px] flex justify-center items-center group overflow-hidden">
                        <Image src={"/asset 1.png"} alt="no" fill className=" object-cover group-hover:scale-110 transition-all duration-500"></Image>
                        <p className=" text-3xl font-bold z-[1] relative group-hover:scale-110 transition-all duration-500">Get up to 50% off</p>
                    </div>
                    <div className="relative w-full h-[180px] rounded-[10px] bg-[#dec8f3] p-[10px] flex justify-start items-center group overflow-hidden">
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

        </div>
    )
}
