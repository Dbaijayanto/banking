'use client';

import React, { useState } from 'react';

const Transfer = () => {
  const [formData, setFormData] = useState({
    sourceBank: '',
    transferNote: '',
    email: '',
    accountNumber: '',
    amount: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transfer Initiated:", formData);
    // you can integrate API call here
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-1">Payment Transfer</h1>
      <p className="text-gray-500 mb-8">Please provide any specific details or notes related to the payment transfer</p>

      <form onSubmit={handleSubmit} className="space-y-10">

        {/* Transfer Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Transfer details</h2>
          <p className="text-sm text-gray-500 mb-4">Enter the details of the recipient</p>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block mb-2 font-medium">Select Source Bank</label>
              <select 
                name="sourceBank"
                value={formData.sourceBank}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value="">Select Account</option>
                <option value="Bank of Baroda">Bank of Baroda</option>
                <option value="HDFC Bank">HDFC Bank</option>
                <option value="SBI">SBI</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Transfer Note (Optional)</label>
              <textarea 
                name="transferNote"
                value={formData.transferNote}
                onChange={handleChange}
                rows="4"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Bank Account Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Bank account details</h2>
          <p className="text-sm text-gray-500 mb-4">Enter the bank account details of the recipient</p>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block mb-2 font-medium">Recipient's Email Address</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@gmail.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Recipient's Bank Account Number</label>
              <input 
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                placeholder="Enter the account number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Amount</label>
              <input 
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium text-lg transition"
          >
            Transfer Funds
          </button>
        </div>
      </form>
    </div>
  );
};

export default Transfer;
