const addLocalStorage = (name) => {
    let productItems = {};
    const getProducts = localStorage.getItem('Add-Products-List');
    if (getProducts) {
        const updateProducts = JSON.parse(getProducts);
        productItems = updateProducts;
    }
    else {
        productItems = {};
    }
    const quantity = productItems[name];
    if (quantity) {
        const newQuantity = quantity + 1;
        productItems[name] = newQuantity;
    }
    else {
        productItems[name] = 1;
    }
    localStorage.setItem('Add-Products-List', JSON.stringify(productItems));

}
const getStoredCart = () => {
    let productItems = {};
    const getProducts = localStorage.getItem('Add-Products-List');
    if (getProducts) {
        const updateProducts = JSON.parse(getProducts);
        productItems = updateProducts;
    }
    else {
        productItems = {};
    }
    return productItems;
}
export { addLocalStorage, getStoredCart };