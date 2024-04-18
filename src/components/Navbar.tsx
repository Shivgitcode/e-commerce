import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Navbar() {
    return (
        <div className="flex justify-between items-center py-5">
            <div className=" font-bold text-3xl italic w-[25%]">
                Shopping
            </div>

            <div className="flex justify-center gap-2 items-center flex-1">
                <CiSearch fontSize={20} className="mr-2"></CiSearch>

                <input type="text" placeholder="Search for products and more .." className="w-full" />
            </div>
            <div className="flex justify-between items-center">
                <div className="flex justify-center p-2 items-center">
                    <IoCartOutline fontSize={20} className="mr-2"></IoCartOutline>
                    <p className="flex items-center font-bold">

                        Cart: <span className="ml-1">0</span>

                    </p>

                </div>
                <div className="flex items-center ml-10">
                    <div className=" w-8 h-8 relative mr-3">
                        <Image src="/solo.png" alt="solo" fill className="rounded-full"></Image>

                    </div>
                    <p className="flex items-center gap-1 font-bold">
                        Hello <span className="flex items-center gap-1 font-normal">Guest <MdKeyboardArrowDown></MdKeyboardArrowDown></span>
                    </p>

                </div>
            </div>

        </div>
    )
}
