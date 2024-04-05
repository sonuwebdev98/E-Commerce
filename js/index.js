
// ===== toggle menu starts ===== //

let icon_bar = document.querySelector('#hamburger')   

let active_menu = document.querySelector('.menu-bar') 


icon_bar.addEventListener('click' , function(){ 

  active_menu.classList.toggle('active-menu-bar') 
})


// ===== change product img starts ===== //

function clickimg(smallimg){
  let fullimg = document.querySelector("#active-img-box")

  fullimg.src = smallimg.src    
}


// ====== hover menu ====== //
let  user_account = document.querySelector('.user-account');
let hover_menu = document.querySelector('.user-menu');
let user_acount_details = document.querySelector('.user-acount-details')


user_account.addEventListener('click' , function(){

  hover_menu.classList.toggle('active-user-menu')
  user_acount_details.classList.toggle('active-user-acount-details')


})


// addToCart 

let additem = document.querySelector(".add-to-cart");

let addeditem = document.querySelector(".sale-items")

let whishadd = document.querySelector("#addwhish");

additem.addEventListener('click' ,  function(){

  document.getElementById("addeditem").addeditem

})




// ========= Countdown start here ========= //

const enddate ="10 Dec 2024 10:00  AM";
document.getElementById("end-date").innerText = enddate;

const  time_loop =document.querySelectorAll(".time-loop")


function clock(){
 
  const end = new Date(enddate) 
  const now = new Date()
  const diff = (end - now) / 1000;

  if(diff < 0) return;

 

  // convert into days 
  time_loop[0].value = Math.floor(diff / 3600 / 24); 
  time_loop[1].value = Math.floor(diff / 3600 ) % 24; 
  time_loop[2].value = Math.floor(diff / 60)  % 12;
  time_loop[3].value = Math.floor(diff ) % 60;



}

clock();
 
setInterval(

  () => {
    clock()
  },
  1000
)

// ========= Countdown ends here ========= //


let wishlistData = []
// console.log(wishlistData);

const Save_To_Whishlist = document.querySelectorAll(".save_to_whishlist");


Save_To_Whishlist.forEach((elem, index) => {

  elem.addEventListener('click', function(e){
    let itemImgSrc = e.target.parentNode.parentNode.parentNode.querySelector(".sale-img-1").attributes.src.value
    let itemTitle = e.target.parentNode.parentNode.parentNode.querySelector(".item-title").innerText
    let currentPrice = e.target.parentNode.parentNode.parentNode.querySelector(".price-up-down").children[0].innerText
    let prevPrice = e.target.parentNode.parentNode.parentNode.querySelector(".price-up-down").children[1].innerText
    wishlistData.push({"itemTitle": itemTitle, "currentPrice": currentPrice, "prevPrice": prevPrice, "itemImgSrc": itemImgSrc})
    console.log(wishlistData);

    localStorage.setItem("wishlistData", JSON.stringify(wishlistData))
  })
  
})








// whishadd section  ends here 


let sonu = () =>{
  
}





// // add to cart section starts here 

// const shopCart = document.getElementById('shopCart')

// let basket = JSON.parse(localStorage.getItem('data')) || []



// let genrateShop = () =>{

// shopCart.innerHTML =  shopItemData.map((x) => {
   
//   let {id , name , price , desc ,Img } = x 

//   return `

  
//   <div class="productitem"  id=shopCart-${id}>
    
//   <img src='${Img}' alt='' />
//  <div> </div>

//  <div class='product_info'> 
//   <h5>${name}</h5>

//  </div>

//  <p><span>${price}</span></p>

//  <div class="btn_link">
//  <button class="add_btn" onclick =" add_to_cart('${id}','${Img}' ,'${name}','${price}')">add to cart</button> 
//   </div>



//   </div>
 


//   `

// })
// }

// genrateShop();

// let add_to_cart = (id,name,Img,price) => {

// basket.push({

//   id:id,
//   item:1,
//   name:name,
//   price:price,
//   Img:Img
// })

// localStorage.setItem('data' , JSON.stringify(basket))

// calculate();

// }

// let calculate = () =>{

//   let cart_icon =  document.getElementById('cart_amount')
//   let cart_amount = basket.length

//   cart_icon.innerHTML = cart_amount 

// }

// calculate();

// // add to cart section ends here 














// ===== slider starts here  ===== //


const next = '<i class="fas fa-thin fa-arrow-right"></i>'
const prev = '<i class="fas fa-light fa-arrow-left"></i>'

// ===== owlCarousel-1 ===== //
 $('.owl-carousel-one').owlCarousel({
loop:true, 
margin:30,
padding:40,
autoplay:true, 
dots:false,
nav:true,
navText:[
prev,
next     
],
responsive:{
0:{
      items:1
  },

575:{
      items:2
  },

  767:{
      items:2
  }, 
  991:{
      items:3
  },
  1200:{
      items:4
  }
}
})


// ===== owlCarousel-2 ===== //

$('.owl-carousel-two').owlCarousel({
  loop:true, 
  autoplay:true, 
  margin:30,
  nav:true,
  navText:[
    prev,
    next      
    ],
  responsive:{ 
      0:{
          items:2
      },

      468:{
        items:3 ,
        margin:10
    },

      768:{
          items:4
      },

      991:{
        items:5 
    },
      1200:{
          items:6 
      }
  }
})

// ===== owlCarousel-3 ===== //

$('.owl-carousel-three').owlCarousel({
  loop:true, 
  autoplay:true, 
  margin:30,
  nav:true,
  navText:[
    prev,
    next      
    ],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:4
      },
      1200:{
          items:4  
      }
  }
})

// ===== owlCarousel-4 ===== //
$('.owl-carousel-four').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  navText:[
    prev,
    next     
    ],
  dots:false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
        
      },
      575:{
        items:2,
       
    },
      991:{
          items:3,          
      },

      1200:{
        items:4,    
       
    }
  }
})



// ===== owlCarousel-5 ===== //
$('.owl-carousel-five').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  navText:[
    prev,
    next     
    ],
  dots:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
        
      },
      600:{
          items:2,
         
      },
      1000:{
          items:3,
        
         
      }
  }
})



// banners slider  

$('.owl-carousel-six').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})


// ===== owlCarousel-7 ===== //
$('.owl-carousel-seven').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  navText:[
    prev,
    next     
    ],
  dots:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
        
      },
      575:{
          items:2,
         
      },
      768:{
        items:3,
       
    },

      1000:{
          items:3,      
      }
  }
})



// ======= swiperjs slider starts here 









