import Bar from "@/components/Bar"
import ProductCard from "@/components/ProductCard/ProductCard"
import { products } from "@/utils"

export default function Categories({ params }: { params: string[] }) {
    console.log(params)
    return (
        <div className="w-full">
            <Bar></Bar>
            <div className="flex flex-wrap justify-between content-start gap-5 ">
                {
                    products.map(product => (
                        <ProductCard product={product}></ProductCard>
                    ))
                }


            </div>

        </div>
    )
}
