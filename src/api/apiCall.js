
export function getProducts() {
    return fetch('Shopping-Cart/products.json',{
        headers: {
            'CrossDomain':true,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
}
