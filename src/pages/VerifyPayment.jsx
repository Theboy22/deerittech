// src/pages/VerifyPayment.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const VerifyPayment = () => {
  const [searchParams] = useSearchParams();
  const reference = searchParams.get('reference');
  const [status, setStatus] = useState('verifying');
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const verify = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/paystack/verify/${reference}`
        );
        setStatus('success');
        setDetails(response.data.data);
      } catch (err) {
        setStatus('error');
        console.error(err.response?.data || err.message);
      }
    };

    if (reference) verify();
    else setStatus('error');
  }, [reference]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {status === 'verifying' && <h3>⏳ Verifying your payment...</h3>}

      {status === 'success' && (
        <>
          <h2>✅ Payment Successful!</h2>
          <p>
            Thank you,{' '}
            <strong>
              {details?.metadata?.fullName || details?.customer?.email}
            </strong>
            .
          </p>
          <p>Program: {details?.metadata?.program}</p>
          <p>
            Amount Paid: ₦{(details?.amount / 100).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>
          <p>
            Status: <strong>{details?.status}</strong>
          </p>
        </>
      )}

      {status === 'error' && (
        <div>
          <h2>❌ Error verifying payment</h2>
          <p>Please contact support if this continues.</p>
        </div>
      )}
    </div>
  );
};

export default VerifyPayment;
