import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Confirmation = () => {
  const navigate = useNavigate();

  const paymentMethod = "Credit Card";
  const orderId = "ORD123456789";
  const deliveryTime = "30-45 minutes";

  const handleGoHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="container py-5">
      <div className="card shadow rounded-4 p-5 text-center">
        <h2 className="text-success mb-4">Order Confirmed!</h2>
        <p className="fs-5">Thank you for your purchase.</p>

        <div className="my-4">
          <h5>Order Details</h5>
          <ul className="list-unstyled">
            <li><strong>Order ID:</strong> {orderId}</li>
            <li><strong>Payment Method:</strong> {paymentMethod}</li>
            <li><strong>Estimated Delivery:</strong> {deliveryTime}</li>
          </ul>
        </div>

        <p className="mt-4">A confirmation email has been sent to your registered email address.</p>

        <button className="btn btn-primary mt-4 rounded-pill px-4 py-2" onClick={handleGoHome}>
          Go to Home
        </button>
      </div>
    </div>
  );
};
