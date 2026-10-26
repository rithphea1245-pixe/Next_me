// export default async function ProductDetailsPage(
//     {
//         params
//     }:{
//         params: Promise <{uuid : string}>
//     }
// ){
//      const { uuid } = await params;
//     return (
//         <h1>Product ID: {uuid}</h1>
//     )
// }
import { Suspense } from "react";

type ProductDetailsProps = {
params: Promise<{ uuid: string }>;
};

async function ProductDetailsContent({
params,
}: ProductDetailsProps) {
const { uuid } = await params;


return <h1>Product ID: {uuid}</h1>;

}

export default function ProductDetailsPage({
params,
}: ProductDetailsProps) {
return ( <main> <h1>Product Details</h1>

        <Suspense fallback={<p>Loading product details...</p>}>
            <ProductDetailsContent params={params} />
        </Suspense>
    </main>
);
}