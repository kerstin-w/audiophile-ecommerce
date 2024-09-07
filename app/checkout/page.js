'use client';

import { useState } from 'react';
import BackButton from '../_components/BackButton';
import Summary from '../_components/Checkout/Summary';
import OrderSummaryModal from '../_components/Checkout/OrderSummaryModal';
import Cta from '../_components/Cta';
import { useShoppingCart } from '../_context/ShoppingCartContext';
import { createOrder } from '../_lib/cartStorage';

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const [orderSummary, setOrderSummary] = useState(null);
  const [orderItemsSummary, setOrderItemsSummary] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const { getCartTotal, cart } = useShoppingCart();

  const validateForm = (formData) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;

    if (!formData.get('name').trim()) errors.name = 'Name is required';
    if (!emailRegex.test(formData.get('email')))
      errors.email = 'Invalid email address';
    if (!phoneRegex.test(formData.get('phone')))
      errors.phone = 'Invalid phone number';
    if (!formData.get('address').trim()) errors.address = 'Address is required';
    if (!formData.get('zip').trim()) errors.zip = 'ZIP code is required';
    if (!formData.get('city').trim()) errors.city = 'City is required';
    if (!formData.get('country').trim()) errors.country = 'Country is required';

    return errors;
  };

  const createOrderWithData = async (formData) => {
    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const { createdOrder, createdOrderItems } = await createOrder(formData);
        setOrderSummary(createdOrder);
        setOrderItemsSummary(createdOrderItems);
        setShowModal(true);
        document.querySelector('form').reset();
      } catch (error) {
        console.error('Error creating order:', error);
        setFormErrors({
          submit:
            'An error occurred while placing your order. Please try again.',
        });
      }
    } else {
      // Scroll to the first error
      const firstErrorField = document.querySelector(
        `[name="${Object.keys(errors)[0]}"]`
      );
      if (firstErrorField)
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (cart.length === 0) {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center">
        <p className="uppercase text-2xl mb-10 tracking-wider">
          Your shopping cart is empty.
        </p>
        <Cta path="/">Continue Shopping</Cta>
      </div>
    );
  }

  const InputField = ({
    name,
    label,
    type = 'text',
    placeholder,
    required = false,
  }) => (
    <div className="space-y-2 mb-4 w-full">
      <label className="block text-sm font-medium mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        id={name}
        className={`w-full border rounded px-3 py-2 ${
          formErrors[name] ? 'border-red-500' : 'border-primary-100'
        }`}
        placeholder={placeholder}
        required={required}
      />
      {formErrors[name] && (
        <p className="text-red-500 text-xs mt-1">{formErrors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="xl:px-36 md:px-24 px-12 pb-24 bg-primary-100">
      <BackButton />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createOrderWithData(new FormData(e.target));
        }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 bg-white px-10 py-12 rounded-lg shadow-md">
            <h2 className="font-bold text-4xl leading-11 tracking-wider text-black uppercase mb-12">
              Checkout
            </h2>

            {formErrors.submit && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                role="alert"
              >
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline"> {formErrors.submit}</span>
              </div>
            )}

            {/* Billing Details */}
            <section className="mb-6">
              <h3 className="font-bold text-base text-primary-300 text-uppercase tracking-tight uppercase mb-5">
                Billing Details
              </h3>

              <div className="flex gap-5 flex-row">
                <InputField
                  name="name"
                  label="Name"
                  placeholder="Alexei Ward"
                  required
                />
                <InputField
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="alexei@email.com"
                  required
                />
              </div>
              <InputField
                name="phone"
                label="Phone Number"
                type="tel"
                placeholder="+1 202-555-0136"
              />
            </section>

            {/* Shipping Info */}
            <section className="mt-12">
              <h3 className="font-bold text-base text-primary-300 text-uppercase tracking-tight uppercase mb-5">
                Shipping Info
              </h3>
              <InputField
                name="address"
                label="Address"
                placeholder="1137 Williams Avenue"
                required
              />
              <div className="grid grid-cols-2 gap-5">
                <InputField
                  name="zip"
                  label="ZIP Code"
                  placeholder="10001"
                  required
                />
                <InputField
                  name="city"
                  label="City"
                  placeholder="New York"
                  required
                />
              </div>
              <InputField
                name="country"
                label="Country"
                placeholder="United States"
                required
              />
              <input name="total" type="hidden" value={getCartTotal()} />
            </section>

            {/* Payment Details */}
            <section className="mt-12">
              <h3 className="font-bold text-base text-primary-300 text-uppercase tracking-tight uppercase mb-5">
                PAYMENT DETAILS
              </h3>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Payment Method
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="e-money"
                      className="mr-2"
                      defaultChecked
                    />
                    <span>e-Money</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      className="mr-2"
                    />
                    <span>Cash on Delivery</span>
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  name="e-money-number"
                  label="e-Money Number"
                  placeholder="238521993"
                />
                <InputField
                  name="e-money-pin"
                  label="e-Money PIN"
                  type="password"
                  placeholder="6891"
                />
              </div>
            </section>
          </div>
          {/* Order summary */}
          <Summary pendingLabel="Placing Order..">Continue and Pay</Summary>
        </div>
      </form>
      {showModal && (
        <OrderSummaryModal
          order={orderSummary}
          orderItems={orderItemsSummary}
        />
      )}
    </div>
  );
}
