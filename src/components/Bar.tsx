import { MdOutlineSort } from "react-icons/md"
export default function Bar({ name, tag }: { name: string, tag: any }) {
    return (
        <section className="flex w-full justify-between items-center mb-10">
            <h2 className="font-bold text-[28px]">{tag}{" "}{name}</h2>
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
    )
}
