
let cartitems = document.querySelectorAll('.addinCart');
myCart();


let product = [
    {
        pname : 'red Shirt',
        price : '15',
        qty: 0,
        id: "redShirt"
    },
    {
        pname : 'white Shirt',
        price : '25',
        qty: 0,
        id: "whiteShirt"
    },
    {
        pname : 'whiteFaceColored Shirt',
        price : '10',
        qty: 0,
        id: "whiteFaceColoredShirt"
    }
]



for(let i=0; i < cartitems.length; i++) {
    cartitems[i].addEventListener('click', () => {
        // console.log('Added in Cart', cartitems[i])

        cartDetails(product[i])
        totalCost(product[i])
        getProductQuantity(product[i])
        
    })
}

function getProductQuantity(p) {
    let productQuantity = localStorage.getItem('cartProducts');  
    
    productQuantity = JSON.parse(productQuantity);
    
    console.log("q ......  ", productQuantity[p.id].qty);

    let qty = document.querySelector(".p-qty-"+[p.id]);

    qty.innerHTML = `<b>Quantity:</b>  ${productQuantity[p.id].qty}`

}

function cartDetails(product) {
        let prodNumber = localStorage.getItem("itemNumber")
    

        prodNumber = parseInt(prodNumber)

        if(prodNumber) {
            localStorage.setItem('itemNumber', prodNumber+1)
        } 
        else {
            localStorage.setItem('itemNumber', 1)
        }

        setProductDetails(product)  
    }

function setProductDetails(prod) {
    
    // prod.qty = prod.qty + 1;

    let cartProductslist = localStorage.getItem('cartProducts');   
        
    cartProductslist = JSON.parse(cartProductslist)

    console.log('setProductDetails ...cartProductslist..... ',  cartProductslist)

    if(cartProductslist != null) {
        
        // console.log(' ------------not null -------------')

        if(cartProductslist[prod.id] == undefined) {
            console.log('cartProducts.....undefined....  ', cartProductslist);
            console.log('cartProducts.....undefined....  ', [prod.id],"  ", [prod.qty]);

            cartProductslist = { 
                ...cartProductslist, 
                [prod.id]: prod 
              }
           }

        console.log('---------- cartProducts.....if   ', cartProductslist);

        cartProductslist[prod.id].qty =  cartProductslist[prod.id].qty + 1;

    } else {
        console.log('---------- cartProducts.....else   ', cartProductslist);
        cartProductslist = {  [prod.id]: prod   }
        cartProductslist[prod.id].qty =  cartProductslist[prod.id].qty + 1;

    }

    // console.log('prod..... ', cartProducts)

    localStorage.setItem("cartProducts", JSON.stringify(cartProductslist));
}

function totalCost(prod) {

    let cartTotalPrice = localStorage.getItem("totalCost");

    if(cartTotalPrice  != null) {
        cartTotalPrice = parseInt(cartTotalPrice) + parseInt(prod.price);
    } else {
        cartTotalPrice = prod.price;
    }

    localStorage.setItem("totalCost", cartTotalPrice)

    console.log("totalCost.........", totalCost)
}

// function removeProduct(pid) {
//     console.log("remove  ", pid);

//     let products = localStorage.getItem('cartProducts');  
    
//     products = JSON.parse(products);
//     console.log(products)

//     localStorage.removeItem("cartProducts",products[pid])

//     console.log(products)

//     myCart();
// }
function removeProduct() {
    console.log("remove  ");

    let products = localStorage.getItem('cartProducts');  
    
    products = JSON.parse(products);
    console.log(products)

    localStorage.removeItem("cartProducts")
    localStorage.removeItem("totalCost")
    localStorage.removeItem("itemNumber")

    console.log(products)

    myCart();

    location.reload();
}


function myCart() {
    let myCartProducts = localStorage.getItem("cartProducts")
    let totalCost1 = localStorage.getItem("totalCost")

    myCartProducts  =   JSON.parse(myCartProducts);

    let cartContainer = document.querySelector(".my-products-inCart");
    
    console.log("myCartProducts ........  ", myCartProducts);

    if(myCartProducts && cartContainer) {
        
        console.log("cartContainer ^^^^^^^^  ", cartContainer);

        cartContainer.innerHTML = "";

        Object.values(myCartProducts).map(p => {
         console.log("cartContainer ........  ",             p.pname );

         cartContainer.innerHTML += `
            <div class="my-product"> 
            <img class="images-cart" src="/src/images/shoppingCart/${p.id}.jpg"><br/>               
            <span>${p.pname}  </span> 
            </div>

            <div class="product-price"> $${p.price}.00 </div>
            <div class="product-qty"> ${p.qty}  </div>
                
            <div class="product-total">$${p.qty * p.price}.00 </div>
            </div>   
            `           
         });

         cartContainer.innerHTML += `<h3>Total Cost= $ ${totalCost1}.00</h3>         
       
         <a  class="cart-links" href = "#" onclick="removeProduct();">Reset All </a>
         <a class="cart-links" href="/src/html/shoppingCart/index.html">Home</a>

          `  
        //   <input type="button" value="Reset"  onclick = removeProduct()> </input>       
        //  <input type="button" value="Remove Product" onclick = removeProduct(\"${p.id}\")> </input>
    }

}