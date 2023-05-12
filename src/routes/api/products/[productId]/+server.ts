export const GET = async ({params}) => {
	try {
		const dataNew = await getProductById(+params.productId);
		return new Response(JSON.stringify(dataNew), { status: 200 });
	} catch (error) {
		throw new Error(`Exception in fetching products: ${error}`);
	}
};



async function getProductById(id: number) {
	try {
		const url = `https://fakestoreapi.com/products/${id}`;
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});
		const product = await response.json();
		return product;
	} catch (error) {
		throw new Error(`Exception in getProducts: ${error}`);
	}
}