import React from 'react';

const cardsData = [
  {
    bank: 'Horizon Banking',
    name: 'ADRIAN HAJDIN',
    expiry: '06/24',
    number: '1234 1234 1234 1234',
    color: 'from-blue-500 to-blue-400',
    barColor: 'bg-blue-600',
  },
  {
    bank: 'Bank of Australia',
    name: 'ADRIAN HAJDIN',
    expiry: '06/24',
    number: '1234 1234 1234 1234',
    color: 'from-blue-500 to-blue-400',
    barColor: 'bg-blue-600',
  },
  {
    bank: 'Bank of India',
    name: 'ADRIAN HAJDIN',
    expiry: '06/24',
    number: '1234 1234 1234 1234',
    color: 'from-blue-500 to-blue-400',
    barColor: 'bg-blue-600',
  },
  {
    bank: 'Bank of America',
    name: 'OLIVIA RHYE',
    expiry: '06/24',
    number: '1234 1234 1234 1234',
    color: 'from-purple-600 to-purple-500',
    barColor: 'bg-purple-700',
  },
  {
    bank: 'Bank of Canada',
    name: 'OLIVIA RHYE',
    expiry: '06/24',
    number: '1234 1234 1234 1234',
    color: 'from-purple-600 to-purple-500',
    barColor: 'bg-purple-700',
  },
  {
    bank: 'Bank of Pakistan',
    name: 'OLIVIA RHYE',
    expiry: '06/24',
    number: '1234 1234 1234 1234',
    color: 'from-purple-600 to-purple-500',
    barColor: 'bg-purple-700',
  },
];

const MyBanks = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900">My Bank Accounts</h1>
      <p className="text-gray-500 mt-1 mb-6">
        Effortlessly Manage Your Banking Activities
      </p>

      <h2 className="text-xl font-semibold mb-4">Your cards</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`rounded-2xl p-4 text-white bg-gradient-to-r ${card.color} shadow-lg`}
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">{card.bank}</span>
              <span className="cursor-pointer">📋</span>
            </div>

            <div className="mt-6">
              <p className="text-sm">{card.name}</p>
              <p className="text-sm">{card.expiry}</p>
              <p className="text-xl font-mono mt-2">{card.number}</p>
              <div className="text-right text-xl mt-2">💳</div>
            </div>

            <div className="mt-4 text-sm text-white/90 flex justify-between">
              <span>Spending this month</span>
              <span>$2,840.40</span>
            </div>

            <div className="w-full h-2 bg-white/30 rounded mt-2">
              <div className={`h-full rounded ${card.barColor} w-4/5`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBanks;
