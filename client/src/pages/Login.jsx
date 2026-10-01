
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/axios";

const Login = () => {
  const navigate = useNavigate();

  const query = new URLSearchParams(window.location.search);
  const redirect = query.get("redirect");

  const [state, setState] = useState(
    query.get("state") === "signup" ? "signup" : "login"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const isLogin = state === "login";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggle = () => {
    setState((prev) => (prev === "login" ? "signup" : "login"));
    setShowPassword(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();
    const password = formData.password;

    if (!isLogin && !name) {
      toast.error("Please enter your full name");
      return;
    }

    if (!email || !password) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!isLogin && password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    try {
      if (!isLogin) {
        const response = await api.post("/auth/signup", {
          name,
          email,
          password,
        });

        toast.success(
          response.data.message || "Account created successfully"
        );

        setFormData({
          name: "",
          email,
          password: "",
        });

        setState("login");
        return;
      }

      const response = await api.post("/auth/login", {
        email,
        password,
      });

      const { token, user } = response.data;

      if (!token || !user) {
        throw new Error("Invalid response from server");
      }

      localStorage.setItem("token", token);
      localStorage.setItem("currentUser", JSON.stringify(user));

      toast.success(`Welcome ${user.name || "back"}!`);

      if (redirect === "feedback") {
        navigate("/feedback", { replace: true });
      } else {
        navigate("/app", { replace: true });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050819] flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-800/20 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-[350px] h-[300px] bg-purple-700/20 rounded-full blur-3xl" />
      </div>

      {/* Auth card */}
      <div className="relative z-10 w-full max-w-[440px] bg-[#111426] border border-white/10 rounded-[28px] px-7 sm:px-8 py-9 sm:py-10 shadow-2xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            ResumeIta
          </h2>

          <h1 className="text-white text-2xl sm:text-3xl mt-6 font-semibold">
            {isLogin ? "Welcome Back 👋" : "Create Account"}
          </h1>

          <p className="text-slate-400 text-sm mt-3 leading-6">
            {isLogin
              ? "Continue building smarter ATS-friendly resumes."
              : "Start building recruiter-friendly resumes with AI."}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Name */}
          {!isLogin && (
            <div className="flex items-center gap-3 h-12 rounded-full bg-white/5 border border-white/10 px-5 focus-within:border-indigo-500 transition">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="w-4 h-4 text-slate-400 shrink-0"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M5 21a7 7 0 0 1 14 0" />
              </svg>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent text-white placeholder-slate-400 outline-none text-sm"
              />
            </div>
          )}

          {/* Email */}
          <div className="flex items-center gap-3 h-12 rounded-full bg-white/5 border border-white/10 px-5 focus-within:border-indigo-500 transition">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="w-4 h-4 text-slate-400 shrink-0"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent text-white placeholder-slate-400 outline-none text-sm"
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-3 h-12 rounded-full bg-white/5 border border-white/10 px-5 focus-within:border-indigo-500 transition">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="w-4 h-4 text-slate-400 shrink-0"
              aria-hidden="true"
            >
              <rect x="4" y="10" width="16" height="11" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              autoComplete={
                isLogin ? "current-password" : "new-password"
              }
              value={formData.password}
              onChange={handleChange}
              minLength={!isLogin ? 8 : undefined}
              required
              className="w-full min-w-0 bg-transparent text-white placeholder-slate-400 outline-none text-sm"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-xs text-slate-400 hover:text-white transition"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 active:scale-[0.99] transition-all duration-200 font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading
              ? isLogin
                ? "Logging in..."
                : "Creating account..."
              : isLogin
                ? "Login"
                : "Create Account"}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-slate-400 text-sm text-center mt-8">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            type="button"
            onClick={handleToggle}
            className="text-indigo-400 hover:text-indigo-300 transition ml-2 font-medium"
          >
            {isLogin ? "Create Account" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
