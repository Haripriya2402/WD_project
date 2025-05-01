import React, { useState } from 'react';
import './PlaceOrder.css';
import { useLocation, useNavigate } from 'react-router-dom';

export const PlaceOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const total = location.state?.total || 0;

  const fee = total / 10;
  const GSTAmount = (total * 5) / 100;
  const grandTotal = total + fee + GSTAmount;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: false });
  };

  const handleSubmit = () => {
    const errors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        errors[key] = true;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      alert('Please fill all delivery information fields.');
      return;
    }

    setFormErrors({});
    navigate('/payment', { state: { formData, grandTotal } });
  };

  return (
    <div className="container py-5">
      <div className="row g-5">
        {/* Delivery Form */}
        <div className="col-lg-7">
          <div className="card shadow rounded-4 p-4">
            <h3 className="text-center mb-4">Delivery Information</h3>
            <form className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  name="firstName"
                  className={`form-control ${formErrors.firstName ? 'is-invalid' : ''}`}
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="lastName"
                  className={`form-control ${formErrors.lastName ? 'is-invalid' : ''}`}
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <input
                  type="email"
                  name="email"
                  className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  name="address"
                  className={`form-control ${formErrors.address ? 'is-invalid' : ''}`}
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="city"
                  className={`form-control ${formErrors.city ? 'is-invalid' : ''}`}
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="state"
                  className={`form-control ${formErrors.state ? 'is-invalid' : ''}`}
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="country"
                  className={`form-control ${formErrors.country ? 'is-invalid' : ''}`}
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="zip"
                  className={`form-control ${formErrors.zip ? 'is-invalid' : ''}`}
                  placeholder="Zip Code"
                  value={formData.zip}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <input
                  type="tel"
                  name="phone"
                  className={`form-control ${formErrors.phone ? 'is-invalid' : ''}`}
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="col-lg-5">
          <div className="card shadow rounded-4 p-4">
            <h3 className="text-center mb-4">Cart Summary</h3>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item d-flex justify-content-between border-0">
                <span>Subtotal</span>
                <strong>${total.toFixed(2)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between border-0">
                <span>GST (5%)</span>
                <strong>${GSTAmount.toFixed(2)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between border-0">
                <span>Delivery Fee (10%)</span>
                <strong>${fee.toFixed(2)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between border-top pt-3 fs-5">
                <span>Total</span>
                <strong>${grandTotal.toFixed(2)}</strong>
              </li>
            </ul>
            <button
              className="btn btn-primary w-100 rounded-pill py-2"
              onClick={handleSubmit}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
