import React from 'react';

const transactions = [
  {
    id: 1,
    name: 'Spotify',
    amount: '₹15.00',
    status: 'Processing',
    date: 'Wed 1:00pm',
    category: 'Subscriptions',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg',
    statusColor: 'text-gray-500 bg-gray-100',
    categoryColor: 'bg-blue-100 text-blue-600',
  },
  {
    id: 2,
    name: 'Alexa Doe',
    amount: '₹88.00',
    status: 'Success',
    date: 'Wed 2:45am',
    category: 'Deposit',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    statusColor: 'text-green-600 bg-green-100',
    categoryColor: 'bg-green-100 text-green-600',
  },
  {
    id: 3,
    name: 'JSM Pro',
    amount: '-₹18.99',
    status: 'Processing',
    date: 'Mon 1:10pm',
    category: 'Subscriptions',
    avatar: 'https://jsmasterypro.com/_next/static/media/logo.0498e49e.svg',
    statusColor: 'text-gray-500 bg-gray-100',
    categoryColor: 'bg-blue-100 text-blue-600',
  },
  {
    id: 4,
    name: 'Fresh F&V',
    amount: '-₹88.00',
    status: 'Success',
    date: 'Tue 12:15pm',
    category: 'Groceries',
    avatar: 'https://via.placeholder.com/30?text=FV',
    statusColor: 'text-green-600 bg-green-100',
    categoryColor: 'bg-blue-100 text-blue-600',
  },
  {
    id: 5,
    name: 'Figma',
    amount: '-₹18.99',
    status: 'Processing',
    date: 'Tue 6:10pm',
    category: 'Income',
    avatar: 'https://cdn.iconscout.com/icon/free/png-512/figma-3521426-2944870.png',
    statusColor: 'text-gray-500 bg-gray-100',
    categoryColor: 'bg-green-100 text-green-600',
  },
  {
    id: 6,
    name: 'Sam Sulek',
    amount: '-₹40.20',
    status: 'Declined',
    date: 'Tue 5:40am',
    category: 'Food and dining',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    statusColor: 'text-red-600 bg-red-100',
    categoryColor: 'bg-pink-100 text-pink-600',
  },
];

const TransactionHistory = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900">Transaction history</h1>
      <p className="text-gray-500 mt-1 mb-6">Gain Insights and Track Your Transactions Over Time</p>

      <div className="flex justify-between items-center bg-blue-600 text-white p-5 rounded-xl shadow-md mb-6">
        <div>
          <h2 className="text-xl font-bold">Chase</h2>
          <p className="text-sm">Chase Growth Savings Account</p>
          <div className="mt-2 tracking-widest text-lg">●●●● ●●●● ●●●● 9999</div>
        </div>
        <div className="text-right">
          <p className="text-sm">Current Balance</p>
          <p className="text-2xl font-bold">₹41,382.80</p>
        </div>
      </div>

      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Transaction history</h2>
        <button className="border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-100">Apply filter</button>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4">Transaction</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Category</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(txn => (
              <tr key={txn.id} className="border-b hover:bg-gray-50">
                <td className="flex items-center gap-3 px-6 py-4">
                  <img src={txn.avatar} alt={txn.name} className="w-8 h-8 rounded-full object-cover" />
                  <span>{txn.name}</span>
                </td>
                <td className={`px-6 py-4 font-medium ${txn.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {txn.amount}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${txn.statusColor}`}>
                    {txn.status}
                  </span>
                </td>
                <td className="px-6 py-4">{txn.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${txn.categoryColor}`}>
                    {txn.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
        <button className="hover:text-black">&larr; Previous</button>
        <div className="flex gap-2">
          {[1, 2, 3, '...', 9, 10].map((n, i) => (
            <button
              key={i}
              className={`w-8 h-8 rounded ${n === 1 ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'}`}
            >
              {n}
            </button>
          ))}
        </div>
        <button className="hover:text-black">Next &rarr;</button>
      </div>
    </div>
  );
};

export default TransactionHistory;
