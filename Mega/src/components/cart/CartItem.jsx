import React from 'react';
import { X } from 'lucide-react'; // Close icon for removing item

const CartItem = () => {
  return (
    <div className="flex justify-between items-center mb-4 border-b-2">
      {/* Product Image */}
      <img
        src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_147,f_auto,q_auto/https://cdn.shopify.com/s/files/1/1104/4168/files/A11038_24Q3_Tree_Dasher_2_Blizzard_Multi_Blizzard_PDP_SINGLE_3Q_9bc96cbc-ea25-4fee-9150-56a2d74276b8.png?v=1720477550"
        alt="Product"
        className="w-16 h-16 object-cover rounded transition-transform duration-500 ease-in-out group-hover:scale-105"
      />

      {/* Product Details */}
      <div className="flex-1 px-4">
        <h4 className="text-sm font-medium">Men's Tree Dasher 2</h4>
        <p className="text-xs text-gray-500">Blizzard/Bloom Coral (Blizzard Sole)</p>
        <p className="text-xs text-gray-500">Size: 9.5</p>
        <p className="text-sm font-bold text-red-600">$101 <span className="line-through text-gray-400">$135</span></p>
      </div>

      {/* Quantity and Remove */}
      <div className="flex items-center space-x-2">
        <button className="px-2 py-1 border rounded text-sm">-</button>
        <span className="text-sm">1</span>
        <button className="px-2 py-1 border rounded text-sm">+</button>
      </div>

      {/* Remove Item */}
      <button className="ml-4 text-gray-600 hover:text-gray-900">
  <X
    size={20}
    className="transform transition-transform duration-300 hover:rotate-360"
  />
</button>

    </div>
  );
};

export default CartItem;
