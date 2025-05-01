import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router hook
import './ModeOfPay.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ModeOfPay = () => {
  const [selectedMethod, setSelectedMethod] = useState('gpay');
  const navigate = useNavigate(); // For page navigation

  const paymentMethods = [
    { id: 'gpay', label: 'GPay', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Pay_Logo.svg' },
    { id: 'upi', label: 'Pay by any UPI App', icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png' },
    { id: 'wallet', label: 'Wallet', icon: 'https://cdn-icons-png.flaticon.com/512/648/648186.png' },
    { id: 'card', label: 'Debit/Credit Cards', icon: 'https://cdn-icons-png.flaticon.com/512/633/633611.png' },
    { id: 'netbanking', label: 'Net Banking', icon: 'https://cdn-icons-png.flaticon.com/512/633/633652.png' },
  ];

  const handleProceed = () => {
    navigate('/confirmation'); // Route to confirmation page
  };

  return (
    <div className="payment-container container mt-4">
      <h2 className="mb-4">Select Payment Method</h2>

      <div className="payment-options">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`payment-option d-flex justify-content-between align-items-center p-3 mb-3 border rounded ${
              selectedMethod === method.id ? 'border-primary bg-light' : ''
            }`}
            onClick={() => setSelectedMethod(method.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="d-flex align-items-center">
              <img src={method.icon} alt={method.label} className="icon me-3" style={{ width: '32px', height: '32px' }} />
              <span>{method.label}</span>
            </div>
            <input type="radio" checked={selectedMethod === method.id} readOnly />
          </div>
        ))}
      </div>

      <button className="btn btn-primary w-100 mt-3" onClick={handleProceed}>
        Proceed to Pay
      </button>
    </div>
  );
};
