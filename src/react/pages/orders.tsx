import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store/store'
import { addItemToOrder, removeItemFromOrder } from '../store/features/orderSlice'

function Orders() {
  const items = useSelector((state: RootState) => state.items)
  const orders = useSelector((state: RootState) => state.orders.items)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">🍽️ Restaurant Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.id} className="p-6 border border-gray-200 rounded-lg shadow-md bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-700 dark:text-gray-300">₹{item.price}</p>
            <button
              className={`px-4 py-2 mt-4 rounded w-full ${
                item.available
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-400 cursor-not-allowed text-white'
              }`}
              onClick={() => dispatch(addItemToOrder(item))}
              disabled={!item.available}
            >
              {item.available ? 'Add to Order' : 'Unavailable'}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-400">🛒 Your Order</h2>
        {orders.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">No items added.</p>
        ) : (
          <ul className="space-y-2">
            {orders.map(item => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-white dark:bg-gray-800 px-4 py-2 rounded shadow"
              >
                <span>{item.name} - ₹{item.price}</span>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => dispatch(removeItemFromOrder(item.id))}
                >
                  ❌ Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Orders;
