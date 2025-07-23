import React, { useState, useEffect } from "react";
import axios from "axios";

const CallbackForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    number: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post("https://verbiq-backend1-1.onrender.com/query/callback", formData);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      alert("Failed to submit callback. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white text-black p-6 rounded-xl shadow-2xl w-full max-w-md border border-gray-300 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">Request a Callback</h2>
        
        {isSuccess ? (
          <div className="text-center py-8">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p className="text-lg font-medium">Thank you for your request!</p>
            <p className="text-gray-600 mt-2">We'll contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                type="email"
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                type="tel"
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
              />
            </div>

                        <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
                placeholder="Enter your Company Name"
                type="tel"
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
              />
            </div>


                        <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Designation </label>
              <input
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
                placeholder="Enter your  Designation"
                type="tel"
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="4"
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CallbackForm;