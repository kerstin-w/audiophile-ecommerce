'use client';

import { useState } from 'react';
import BackButton from '../_components/BackButton';
import Summary from '../_components/Checkout/Summary';
import OrderSummaryModal from '../_components/Checkout/OrderSummaryModal';
import { useShoppingCart } from '../_context/ShoppingCartContext';
import { createOrder } from '../_lib/cartStorage';

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const [orderSummary, setOrderSummary] = useState(null);
  const [orderItemsSummary, setOrderItemsSummary] = useState([]);

  const { getCartTotal } = useShoppingCart();
  const createOrderWithData = async (formData) => {
    try {
      const { createdOrder, createdOrderItems } = await createOrder(formData);

      // Set order summary and show modal
      setOrderSummary(createdOrder);
      setOrderItemsSummary(createdOrderItems);
      setShowModal(true);

      // Reset the form
      document.querySelector('form').reset();
    } catch (error) {
      console.error('Error creating order:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="xl:px-36 md:px-24 px-12 pb-24 bg-primary-100">
      <BackButton />
      {/* Checkout form */}
      <form action={createOrderWithData}>
        <div className="container mx-auto flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 bg-white px-10 py-12 rounded-lg shadow-md">
            <h2 className="font-bold text-4xl leading-11 tracking-wider text-black uppercase mb-12">
              Checkout
            </h2>

            {/* Billing Details */}
            <section className="mb-6">
              <h3 className="font-bold text-base text-primary-300 text-uppercase tracking-tight uppercase mb-5">
                Billing Details
              </h3>

              <div className="flex gap-5 flex-row">
                <div className="space-y-2 mb-4 w-full">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    className="w-full border rounded border-primary-100 px-3 py-2"
                    placeholder="Alexei Ward"
                    required
                  />
                </div>
                <div className="space-y-2 mb-4 w-full">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="w-full border border-primary-100 px-3 py-2"
                    placeholder="alexei@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2 mb-4 w-1/2 pr-5">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  id="phone"
                  className="w-full border rounded border-primary-100 px-3 py-2"
                  placeholder="+1 202-555-0136"
                />
              </div>
            </section>

            {/* Shipping Info */}
            <section className="mt-12">
              <h3 className="font-bold text-base text-primary-300 text-uppercase tracking-tight uppercase mb-5">
                Shipping INfo
              </h3>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  name="address"
                  type="text"
                  id="address"
                  required
                  className="w-full border rounded px-3 py-2"
                  placeholder="1137 Williams Avenue"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="zip"
                  >
                    ZIP Code
                  </label>
                  <input
                    name="zip"
                    type="text"
                    id="zip"
                    customer_address
                    className="w-full border rounded px-3 py-2"
                    placeholder="10001"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    name="city"
                    type="text"
                    id="city"
                    required
                    className="w-full border rounded px-3 py-2"
                    placeholder="New York"
                  />
                </div>
              </div>
              <div className="mt-4 pr-3 w-1/2">
                <label
                  className="block text-sm font-medium mb-1 "
                  htmlFor="country"
                >
                  Country
                </label>
                <input
                  name="country"
                  type="text"
                  id="country"
                  required
                  className="w-full border rounded px-3 py-2"
                  placeholder="United States"
                />
              </div>
              <label className="hidden" htmlFor="total"></label>
              <input
                name="total"
                type="hidden"
                id="total"
                value={getCartTotal()}
              />
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
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="e-money-number"
                  >
                    e-Money Number
                  </label>
                  <input
                    type="text"
                    id="e-money-number"
                    className="w-full border rounded px-3 py-2"
                    placeholder="238521993"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="e-money-pin"
                  >
                    e-Money PIN
                  </label>
                  <input
                    type="password"
                    id="e-money-pin"
                    className="w-full border rounded px-3 py-2"
                    placeholder="6891"
                  />
                </div>
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
