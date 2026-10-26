import { Suspense } from "react";

type UsersID = {
params: Promise<{ id: number }>;
};

async function UsersContent({
params,
}: UsersID) {
const { id } = await params;


return <h1>User ID: {id}</h1>;

}

export default function UsersIDpage({
params,
}: UsersID) {
return ( <main> <h1>Product Details</h1>

        <Suspense fallback={<p>Loading product details...</p>}>
            <UsersContent params={params} />
        </Suspense>
    </main>
);
}