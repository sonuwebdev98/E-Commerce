// add to cart section starts here 

const shopCart = document.getElementById('shopCart')

let basket = JSON.parse(localStorage.getItem('data')) || []



let genrateShop = () =>{

shopCart.innerHTML =  shopItemData.map((x) => {
   
  let {id , name , price , desc ,Img } = x 

  return `

  <div class="productitem productitem-wrapper"  id=shopCart-${id}>
    
  <img src='${Img}' alt='' />
  <div>${desc} </div>
  
  <div class='product_info'> 
  <h5 class="product-title">${name}</h5>
  
  </div>
  
  <p><span>${price}</span></p>
  
  <div class="btn_link">
  <button class="add_btn" onclick =" add_to_cart('${id}','${Img}' ,'${name}','${price}')">add to cart</button> 
  </div>
  
  
  
  </div> 

  `

})
}  


genrateShop();

let add_to_cart = (id,name,Img,price) => {

basket.push({

  id:id,
  item:1,
  name:name,
  price:price,
  Img:Img
})

localStorage.setItem('data' , JSON.stringify(basket))

calculate();

}

let calculate = () =>{

  let cart_icon =  document.getElementById('cart_amount')
  let cart_amount = basket.length

  cart_icon.innerHTML = cart_amount 

}

calculate();

// add to cart section ends here  



const productItemWrapper = document.querySelectorAll(".productitem-wrapper");
productItemWrapper.forEach((element, index) => {
  element.addEventListener('click', function(e){
    const productTitle = element.querySelector(".product_info .product-title").innerText;
    let newArr = shopItemData.filter(item => item.name === productTitle)
    console.log(newArr[0].id);

    
  })
})

