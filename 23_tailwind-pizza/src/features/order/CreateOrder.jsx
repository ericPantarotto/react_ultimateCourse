// import { useState } from "react";
import { Form, useActionData, useNavigation } from 'react-router-dom';
import Button from '../../ui/components/Button';

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
          <input type='text' name='customer' required className='input' />
          {formErrors?.phone && (
            <p className='mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700'>
              {formErrors.phone}
            </p>
          )}
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type='tel' name='phone' required className='input' />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type='text' name='address' required className='input' />
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
          <Button type='primary' disabled={isSubmitting}>
            {isSubmitting ? 'Placing order....' : 'Order now '}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
