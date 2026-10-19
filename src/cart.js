function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {

  if (quantity == 0 || quantity> product.stock)
    throw RangeError();

  let item = cart.find(x => x.id == product.id);

  if (item == null)
  {
    item = { ...product, quantity: 0 };
    cart.push(item);
  }

  item.quantity += quantity;

  return cart;
}

function changeQuantity(cart, id, quantity) {

  let item = cart.find(x => x.id == id);

  if (item == null)
    return cart;

  if (quantity == 0 || quantity > item.stock)
    throw RangeError();

  item.quantity = quantity;

  return cart;
}

function removeFromCart(cart, id)
{
  let item = cart.find(x => x.id == id);

  if (item == null)
    return cart;

  let idx = cart.indexOf(item);

  cart.splice(idx,1);

  return cart;
}

function calculateCartSubtotal(cart)
{
   let total = 0;

   cart.forEach(element => {
    total += element.price*element.quantity;
   });

   return total;
}

function calculateOrderTotal(cart, promo)
{
  let subtotal =  calculateCartSubtotal(cart);
  let delivery = 30000;
  let discount = 0;

  if (subtotal >= 50000)
    delivery = 0;

  if (promo.toUpperCase().trim() == 'SAVE10' && subtotal >= 20000)
    discount = subtotal*0.1;

  let total = subtotal + delivery - discount;

  return {
    subtotal: subtotal,
    discount: discount,
    delivery: delivery,
    total: total
  };
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
