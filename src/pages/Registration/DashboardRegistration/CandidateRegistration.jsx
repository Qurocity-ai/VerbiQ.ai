import { useState } from "react";
import styles from "./registration.module.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { LockClosedIcon, MailIcon, UsersIcon } from "@heroicons/react/solid";

const CandidateRegistration = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    emailId: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...formData, role: "Candidate" };

    try {
      setIsLoading(true);
      const response = await fetch(
        "https://verbiq-backend1-1.onrender.com/candidate/candidateRegister",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      if (response.ok) {
        // alert("Candidate registered successfully!");
        toast.success("Company registered successfully!", {
          duration: 3000,
          position: "top-center",
          icon: "🎉",
        });
        navigate("/candidatelogin");
        setIsLoading(true);
      } else {
        // alert(result.message || "Registration failed.");
        toast.error(result.message || "Registration failed.", {
          duration: 3000,
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      // alert("Error submitting form.");
      toast.error("Error submitting form.", {
        duration: 3000,
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-1/2 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl"
      >
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-center text-3xl font-extrabold text-gray-900"
          >
            Candidate Registration
          </motion.h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div className="relative">
              <UsersIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                name="fullname"
                placeholder="Candidate Name"
                value={formData.fullname}
                onChange={handleChange}
                className="appearance-none relative block w-full px-10 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
            <div className="relative">
              <MailIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="email"
                name="emailId"
                placeholder="Email Address"
                value={formData.emailId}
                onChange={handleChange}
                className="appearance-none relative block w-full px-10 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
            <div className="relative">
              <LockClosedIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="appearance-none relative block w-full px-10 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white ${
              isLoading ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-150`}
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </div>
            ) : (
              "Register Candidate"
            )}
          </motion.button>
        </form>
      </motion.div>
      <Toaster />
    </div>
  );
};

export default CandidateRegistration;
