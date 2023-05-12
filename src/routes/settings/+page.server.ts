export const load = async ({ fetch }) => {
	const res = await fetch(`/api/products`);
	const items = await res.json();
	return { products: items };
};
