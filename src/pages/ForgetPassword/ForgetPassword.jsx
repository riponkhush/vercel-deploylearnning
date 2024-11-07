import { useState } from "react";

const ForgetPassword = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setError("");
    
        try {
          await(email);
          setMessage("Password reset email sent! Check your inbox.");
        } catch (error) {
          setError("Failed to send password reset email. Please try again.", error);
        }
    
        setLoading(false);
      };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password?</h2>
        {message && <div className="bg-green-200 text-green-800 p-2 mb-4 rounded">{message}</div>}
        {error && <div className="bg-red-200 text-red-800 p-2 mb-4 rounded">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
              Enter your email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 text-white bg-blue-500 rounded-lg ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Email"}
          </button>
        </form>
      </div>
    </div>
    );
};

export default ForgetPassword;