export const GET = async () => {
	try {
		const dataNew = await getProducts();
		return new Response(JSON.stringify(dataNew), { status: 200 });
	} catch (error) {
		throw new Error(`Exception in fetching products: ${error}`);
	}
};

async function getProducts() {
	try {
		const url = `https://fakestoreapi.com/products`;
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});
		const paginatedResponse = await response.json();
		return paginatedResponse;
	} catch (error) {
		throw new Error(`Exception in getProducts: ${error}`);
	}
}
