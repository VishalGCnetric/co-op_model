import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const QuoteDetails = ({ quote={
    id: 'Q-00009',
    date: '07/25/2024 02:15 PM',
    status: 'Accepted',
    total: 32000.00,
    items: [
      { name: 'Dell Laptop', quantity: 2, price: 7500.00, image: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/pro-10_1bf59adc-8340-44f5-a49b-4e869a84af07.jpg?v=1720753642&width=600' },
    ],
  }, onCancel }) => {
  const navigate = useNavigate();

  return (<div className="flex justify-center items-center py-8">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4 w-2/3">
      <h2 className="text-xl font-bold mb-4">Quote Details - {quote.id}</h2>
      <div className="mb-4">
        <p className="font-semibold">Requested on: {quote.date}</p>
        <p className="font-semibold">
          Status: <span className={`${quote.status == 'Accepted' ? 'text-green' : quote.status === 'Declined' ? 'text-red' : 'text-yellow'}-500`}>{quote.status}</span>
        </p>
      </div>
      <div className="border p-4">
        <h3 className="font-bold">Items</h3>
        {quote.items.map((item, index) => (
          <div key={index} className="flex justify-between my-2">
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
              <p>{item.name} (x{item.quantity})</p>
            </div>
            <p>Rs.{(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <div className="flex justify-end">
          <p className="font-bold">Total: Rs.{quote.total.toFixed(2)}</p>
        </div>
      </div>

      {/* Show Checkout and Cancel buttons only for Accepted quotes */}
      {quote.status === 'Accepted' && (
        <div className="mt-4 flex justify-end">
            <button className="bg-black text-white px-4 py-2 mr-2" onClick={() => navigate('/account', { state: { tab: 'quote' } })}>Back to Quotes</button>
          <button className="bg-black text-white px-4 py-2 mr-2" onClick={() => navigate(`/checkout/quote/${quote.id}`)}>Checkout</button>
          <button className="bg-red-500 text-white px-4 py-2" onClick={onCancel}>Cancel Quote</button>
        </div>
      )}
    </motion.div>
    </div>
  );
};

export default QuoteDetails;
