'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[\d\s\-\+\(\)]+$/.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Validation
    if (!formState.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name');
      return;
    }

    if (!formState.email.trim() || !validateEmail(formState.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    if (formState.phone && !validatePhone(formState.phone)) {
      setStatus('error');
      setErrorMessage('Please enter a valid phone number');
      return;
    }

    if (!formState.message.trim()) {
      setStatus('error');
      setErrorMessage('Please enter a message');
      return;
    }

    // Simulate form submission - in production, this would send to your backend
    try {
      // For now, we'll use mailto as fallback
      const mailtoLink = `mailto:info@pardoconstructionllc.com?subject=Project Inquiry from ${encodeURIComponent(formState.name)}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\nCompany: ${formState.company}\n\nMessage:\n${formState.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      // Reset form after a delay
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
        setStatus('success');
      }, 1000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to submit form. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">
            Name <span className="required" aria-label="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            aria-required="true"
            disabled={status === 'submitting'}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email <span className="required" aria-label="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            aria-required="true"
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            disabled={status === 'submitting'}
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formState.company}
            onChange={handleChange}
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">
          Message <span className="required" aria-label="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formState.message}
          onChange={handleChange}
          required
          aria-required="true"
          disabled={status === 'submitting'}
        />
      </div>

      {status === 'error' && (
        <div className="form-message error" role="alert">
          {errorMessage}
        </div>
      )}

      {status === 'success' && (
        <div className="form-message success" role="status">
          Thank you! Your message has been sent.
        </div>
      )}

      <button 
        type="submit" 
        className="btn btn-submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      <style jsx>{`
        .contact-form {
          max-width: 700px;
          margin: 0 auto;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 640px) {
          .form-row {
            grid-template-columns: 1fr 1fr;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--near-black);
        }

        .required {
          color: var(--color-danger-600);
        }

        .form-group input,
        .form-group textarea {
          padding: 0.75rem;
          border: 2px solid var(--color-border);
          border-radius: var(--radius-sm);
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.2s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
        }

        .form-group input:disabled,
        .form-group textarea:disabled {
          background-color: var(--color-bg-muted);
          cursor: not-allowed;
        }

        .form-message {
          padding: 1rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .form-message.error {
          background-color: var(--color-danger-50);
          color: var(--color-danger-700);
          border: 1px solid var(--color-danger-400);
        }

        .form-message.success {
          background-color: var(--color-success-50);
          color: var(--color-success-600);
          border: 1px solid var(--color-success-400);
        }

        .btn-submit {
          width: 100%;
          padding: 1rem 2rem;
        }

        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </form>
  );
}
