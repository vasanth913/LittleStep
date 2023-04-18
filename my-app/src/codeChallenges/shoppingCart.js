import React from 'react';
import { useState } from 'react';

const items = [
    {
        name: 'apple',
        price: 2.39
    },
    {
        name: 'orange',
        price: 4.56
    },
    {
        name: 'mango',
        price: 0.69
    },
    {
        name: 'strawberry',
        price: 0.70
    }
]

const ShoppingCart = () => {
  const[cart, setCart] = useState([]);

  const addToCart = (item) => {
    const cartCopy = [...cart];
    console.log('**** cartCopy', cartCopy);
    const itemInCart = cartCopy.find((i) => item.name === i.name);
    if(itemInCart) {
        itemInCart.quantity  += 1;
        setCart(cartCopy);
    } else {
        setCart(prevCart => [...prevCart, {...item, quantity: 1}])
    }
  }

  const increase = (name) => {
    const cartCopy = [...cart];
    const item = cartCopy.find((i) => i.name === name)
    item.quantity += 1;
    setCart(cartCopy)
  }

  const decrease = (name) => {
    let cartCopy = [...cart];
    const item = cartCopy.find((i) => i.name === name)
        if(item.quantity > 1){
            item.quantity -= 1
        } else {
            cartCopy= cartCopy.filter((i) => i.name !== name)
        }
    setCart(cartCopy)
  }


  return (
    <div className='row'>
      <div className='col-6'>
        <h2>
          Items
        </h2>   
        {
         items.map((item) => {
            return (
                <div key={item.name}>
                    <h3>
                        {item.name}
                    </h3>
                    <h3>
                        ${item.price}
                    </h3>
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
            )
         })
        }
      </div>
      <div className='col-6'>
        <h2>Cart</h2>
        {
            cart.map((item) => {
                return (
                    <div key={item.name}>
                        <h2>
                            {item.name}
                        </h2>
                          <p>
                            <button onClick={() => decrease(item.name)}> - </button>
                              <span className='p-2' >{item.quantity}</span>
                            <button onClick={() => increase(item.name)}> + </button>
                          </p>
                        <p> Subtotal: ${(item.quantity * item.price).toFixed()}</p>
                   </div>
                )
            })
        }
      </div>
      <div>
        <h2> Total: ${cart.reduce((acc, i) => acc + (i.quantity + i.price), 0).toFixed()}</h2>
      </div>
    </div>
  )
}

export default ShoppingCart;