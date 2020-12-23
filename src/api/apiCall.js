
export function getProducts() {
    // return new Promise((resolve, reject) => fetch('products.json',{
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     }
    // }).then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    //   resolve(data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // })
    // );
    return fetch('products.json',{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
}
