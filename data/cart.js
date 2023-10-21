export let cart = JSON.parse(localStorage.getItem('cart')) || [];

function savetoStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addtoCart(productId, value){

  let matchingItem;

  cart.forEach((cartItem)=>{
    if (productId===cartItem.productId){
      matchingItem = cartItem; 
    }
  });
  if (matchingItem){
    matchingItem.quantity += value;
  }
  else{
    cart.push({
      productId : productId,
      quantity: value
    });
  }

  savetoStorage();
}

export function removeFromCart(productId){

  const newCart =[];

  cart.forEach((cartItem)=>{
    if (cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  savetoStorage();
}
