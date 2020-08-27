import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const price = props.orderedCourseValue;

  let total = 0;

  for (let i = 0; i < price.length; i++) {
    let element = price[i];
    total = total + parseFloat(element);
  }

  return (
    <div className="shadow p-3 mt-4 text-center">
      <h5 className="text-center total-order pb-3">Order Summary</h5>
      <p className="ordered-course">Ordered Course: {price.length}</p>
      <p className="total-price">Total Price: ${(total).toFixed(2)}</p>    
      <a className="btn rounded-pill px-4">Checkout</a>
    </div>
  );
};

export default Cart;