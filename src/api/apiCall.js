
export function getProducts() {
    return fetch('products.json',{
        headers: {
            'CrossDomain':true,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
}
