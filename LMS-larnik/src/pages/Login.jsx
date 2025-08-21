import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [loginMode, setLoginMode] = useState("email"); // "email" | "phone"
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  // Dummy OTP handlers
  const handleSendOtp = () => {
    setOtpSent(true);
    alert("Dummy OTP: 1234");
  };

  const handleVerifyOtp = () => {
    if (otp === "1234") {
      setIsOtpVerified(true);
      alert("OTP Verified ✅");
    } else {
      alert("Invalid OTP ❌");
    }
  };

  const handleLogin = () => {
    if (loginMode === "email") {
      alert("Logged in with Email & Password ✅");
    } else {
      if (!isOtpVerified) {
        alert("Please verify OTP first ❌");
        return;
      }
      alert("Logged in with Phone & OTP ✅");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-2">Login</h2>
        <p className="text-gray-500 mb-6">
          {loginMode === "email"
            ? "Sign in with Email & Password"
            : "Sign in with Phone & OTP"}
        </p>

        {/* Toggle Login Mode */}
        <div className="flex justify-center mb-6 gap-3">
          <button
            onClick={() => setLoginMode("email")}
            className={`px-4 py-2 rounded-l-lg ${
              loginMode === "email"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Email
          </button>
          <button
            onClick={() => setLoginMode("phone")}
            className={`px-4 py-2 rounded-r-lg ${
              loginMode === "phone"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Phone
          </button>
        </div>

        {/* Email + Password Login */}
        {loginMode === "email" && (
          <>
            {/* Email */}
            <div className="mb-4">
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg p-2"
              />
            </div>

            {/* Password */}
            <div className="mb-6 relative">
              <label className="block mb-1 text-sm">Password</label>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full border rounded-lg p-2 pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-8 text-gray-500 bg-white px-1 py-0.5"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </>
        )}

        {/* Phone + OTP Login */}
        {loginMode === "phone" && (
          <>
            {/* Phone Number */}
            <div className="mb-4">
              <label className="block mb-1 text-sm">Phone Number</label>
              <div className="flex gap-2">
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="flex-1 border rounded-lg p-2"
                />
                {!otpSent ? (
                  <button
                    onClick={handleSendOtp}
                    className="bg-blue-500 text-white px-4 rounded-lg"
                  >
                    Send OTP
                  </button>
                ) : (
                  <button
                    onClick={handleVerifyOtp}
                    className="bg-green-500 text-white px-4 rounded-lg"
                  >
                    Verify OTP
                  </button>
                )}
              </div>
            </div>

            {/* OTP Input */}
            {otpSent && (
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border rounded-lg p-2 mb-4"
              />
            )}
          </>
        )}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white rounded-lg p-2 font-medium"
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-green-600 font-semibold">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
