'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '4rem 1.5rem',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Something went wrong</h2>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        We apologize for the inconvenience. Please try again.
      </p>
      <button
        onClick={reset}
        style={{
          padding: '0.75rem 2rem',
          backgroundColor: '#789271',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem',
        }}
      >
        Try again
      </button>
    </div>
  );
}
