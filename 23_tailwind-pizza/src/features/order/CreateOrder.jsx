// import { useState } from "react";
import { Form, useActionData, useNavigation } from 'react-router-dom';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();

  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let&apos;s go!</h2>

      <Form method='POST'>
        <div>
          <label>First Name</label>
          <input type='text' name='customer' required />
          {formErrors?.phone && (
            <p className='mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700'>
              {formErrors.phone}
            </p>
          )}
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type='tel' name='phone' required />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input
              type='text'
              name='address'
              required
              className='w-full rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:ring focus:ring-yellow-400 focus:outline-none md:px-6 md:py-3'
            />
          </div>
        </div>

        <div>
          <input
            type='checkbox'
            name='priority'
            id='priority'
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
            className='h-6 w-6 accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none'
          />
          <label htmlFor='priority'>Want to yo give your order priority?</label>
        </div>

        <div>
          <input type='hidden' name='cart' value={JSON.stringify(cart)} />
          <button
            disabled={isSubmitting}
            className='focus: inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide text-stone-700 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed'
          >
            {isSubmitting ? 'Placing order....' : 'Order now '}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
