import Image from 'next/image';
import Link from 'next/link';
import { getProduct } from '@/app/_lib/data-service';
import Cta from '../Cta';

export default async function OrderSummaryModal({ order, orderItems }) {
  const firstProduct = orderItems[0];
  const product = await getProduct(firstProduct.product_id);
  const otherItems = orderItems;
  const otherItemsCount = otherItems.length - 1;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex z-50 items-center justify-center">
      <div className="bg-white text-black p-7 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex flex-col items-start mb-6">
          <div className="p-2 mb-4">
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <circle fill="#D87D4A" cx="32" cy="32" r="32" />
                <path
                  stroke="#FFF"
                  strokeWidth="4"
                  d="m20.754 33.333 6.751 6.751 15.804-15.803"
                />
              </g>
            </svg>
          </div>
          <h2 className="font-bold text-2xl leading-11 tracking-wider text-black uppercase">
            Thank You for your order
          </h2>
          <p className="text-gray-500 mt-5">
            You will receive an email confirmation shortly.
          </p>
        </div>
        <div className="flex flex-row w-full mt-10 mb-10">
          <div className="bg-gray-100 p-5 rounded-s-lg w-2/3">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div className="w-16 h-16 relative">
                  <Image
                    src={product['image/mobile']}
                    alt={firstProduct.product_name}
                    fill
                    className="object-cover w-16 h-16 mr-4 rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold mb-1">
                    {firstProduct.product_name.replace(
                      /(Earphones|Headphones|Speaker)/gi,
                      ''
                    )}
                  </p>
                  <p className="text-gray-500 font-semibold">
                    ${' '}
                    {(
                      firstProduct.price * firstProduct.quantity
                    ).toLocaleString()}
                  </p>
                </div>
              </div>
              <p className="text-gray-500 font-semibold">
                x&nbsp;{firstProduct.quantity}
              </p>
            </div>
            {otherItemsCount > 0 && (
              <div className="text-sm text-gray-600 border-t mt-3">
                <p className="mt-3 text-center">
                  and {otherItemsCount} other item
                  {otherItemsCount > 1 ? 's' : ''}
                </p>
              </div>
            )}
          </div>

          <div className="bg-black text-white p-5 rounded-e-lg flex flex-col justify-center">
            <p className="uppercase opacity-50">Grand Total</p>
            <p className="font-bold text-lg uppercase">
              {' '}
              $ {order.total.toLocaleString()}
            </p>
          </div>
        </div>
        <Cta path="/" fullWidth>
          Back To Home
        </Cta>
      </div>
    </div>
  );
}
