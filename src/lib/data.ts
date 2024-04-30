import prisma from "./connect"

export const getProducts = async (id: string) => {
    const products = await prisma.product.findMany({
        where: {
            categoryId: id


        }
    })

    return products

}



