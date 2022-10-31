/*
    {
        title: "Hemd",
        description: "Ultra feine baumwolle, 100%, ...",
        price: 79,
        variation: ["S", "M", "L", "XL"],  // variation: ["red-blue", "black-white", "violett-green"],
        imageLink: "http://...",
        stockCount: 100 // es gibt noch 100 stück davon
    }
*/

function makeProduct({ _id, title, description, price, variations, imageLink, stockCount, createdAt }) {
    if (!Array.isArray(variations)) {
        throw new Error("Product variations must be an array.")
    }


    return {
        title: title || "New Product",
        description,
        price,
        variations,
        imageLink: imageLink || "",
        stockCount,
        createdAt: createdAt || Date.now(),
        _id
    }
}

module.exports = {
    makeProduct
}