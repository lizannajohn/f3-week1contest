fetch("https://dummyjson.com/products")
.then((response) => response.json())
.then((data) =>
{
    console.log(data);
    let productArr = data.products;
    console.log(productArr);
    let container = document.getElementById("container");
    productArr.map((product) => {
        container.innerHTML += 
        `
            <div class="items">
                <div class="img-cont">
                    <div class="img">
                        <img src="${product.images[0]}">
                    </div>
                </div>
                <div class="details">
                    <div> Title: ${product.title} </div>
                    <div> Brand: ${product.brand} </div>
                    <div> ${product.price} </div>
                    <div> Rating: ${product.rating} </div>
                    <div> Stock: ${product.stock}
                </div>
            </div>
        `
    });
});