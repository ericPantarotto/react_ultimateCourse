import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import Button from '../../ui/components/Button';
import { formatCurrency } from '../../utils/helpers';
import EmptyCart from '../cart/EmptyCart';
import { getCart, getTotalCartPrice } from '../cart/cartSlice';
import { fetchAddress } from '../user/userSlice';

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === 'loading';

  const dispatch = useDispatch();

  // const cart = fakeCart;
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className='px-4 py-6'>
      <h2 className='mb-8 text-xl font-semibold'>
        Ready to order? Let&apos;s go!
      </h2>

      <Form method='POST'>
        <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
          <label className='sm:basis-40'>First Name</label>
          <input
            type='text'
            name='customer'
            defaultValue={username}
            required
            className='input grow'
          />
        </div>

        <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
          <label className='sm:basis-40'>Phone number</label>
          <div className='grow'>
            <input type='tel' name='phone' required className='input w-full' />
            {formErrors?.phone && (
              <p className='mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700'>
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className='relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
          <label className='sm:basis-40'>Address</label>
          <div className='grow'>
            <input
              disabled={isLoadingAddress}
              defaultValue={address}
              type='text'
              name='address'
              required
              className='input w-full'
            />
            {addressStatus === 'error' && (
              <p className='mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700'>
                {errorAddress}
              </p>
            )}
          </div>

          {!position.latitude && !position.longitude && (
            <span className='absolute top-[3px] right-[3px] z-50 md:top-[5px] md:right-[5px]'>
              <Button
                disabled={isLoadingAddress}
                type='small'
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get position
              </Button>
            </span>
          )}
        </div>

        <div className='mb-12 flex items-center gap-5'>
          <input
            type='checkbox'
            name='priority'
            id='priority'
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className='h-6 w-6 accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none'
          />
          <label htmlFor='priority' className='font-medium'>
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type='hidden' name='cart' value={JSON.stringify(cart)} />
          <input
            type='hidden'
            name='position'
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ''
            }
          />
          
          <Button type='primary' disabled={isSubmitting}>
            {isSubmitting
              ? 'Placing order....'
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];
