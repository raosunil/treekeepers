
 
export const load = (async ({ fetch, params }) => {
  if (isNaN(parseInt(params.productId))) {
    return {
      title: 'Hello world!',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    };
  } else {
    const res = await fetch(`/api/products/${params.productId}`);
    const item = await res.json();
    return { item };
  };
});
