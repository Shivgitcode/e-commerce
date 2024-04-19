
export default function Sidebar() {
    const categories = [
        { id: 1, name: "New In", tag: "⚡" },
        { id: 2, name: "Clothing", tag: "👚" },
        { id: 3, name: "shoes", tag: "👠" },
        { id: 4, name: "Accessories", tag: "👜" },
        { id: 5, name: "Activewear", tag: "🤸" },
        { id: 6, name: "Gifts & Living", tag: "🎁" },
        { id: 7, name: "Inspiration", tag: "💎" }
    ]
    return (
        <div className="min-w-[208px]">
            <h2 className="text-[28px] font-bold mb-3">Explore</h2>
            <ul className="flex flex-col w-full">
                {
                    categories.map(category => (
                        <div className="py-[18px]">
                            <li className="flex gap-1 items-center text-sm font-medium"><span className=" mr-4">{category.tag}</span>{category.name} </li>


                        </div>
                    ))
                }
            </ul>
        </div>
    )
}
