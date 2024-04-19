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
            <section className="flex items-center w-full justify-between">
                <div>
                    <div className="relative w-[200px] h-[200px] ">
                        <Image src={"/asset 1.png"} alt="no" fill></Image>
                        <p>Get up to 50% off</p>
                    </div>
                    <div className="relative w-[200px] h-[200px]">
                        <p>New Jordan Series</p>
                        <p>Best of daily wear</p>
                        <Image src={"/asset 2.png"} alt="no" fill></Image>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="relative w-[200px] h-[200px]">
                            <Image src={"/asset 3.png"} alt="no" fill></Image>
                        </div>
                        <div>
                            <h3>Hugo Boss Leather Jacket</h3>
                            <p>
                                <div>
                                    300$
                                </div>
                                200$
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="relative w-[200px] h-[200px]">
                            <Image src={"/asset 4.png"} alt="no" fill></Image>
                        </div>
                        <div>
                            <h3>Polka-dotted slip dress</h3>
                            <p>
                                200$
                            </p>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    )
}
