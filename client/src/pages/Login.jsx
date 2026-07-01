import React from 'react'
import toast from 'react-hot-toast'
import {useNavigate} from'react-router-dom'
import api from "../api/axios"

const Login = () => {
    const navigate=useNavigate()

    const query = new URLSearchParams(window.location.search)

    const redirect=query.get("redirect");

    const urlState=query.get('state')

    const [state, setState] = React.useState(urlState ||"login")

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        // SIGNUP
        if (state === "signup") {

            const response = await api.post(
                "/auth/signup",
                formData
            );

            toast.success(response.data.message);

            setFormData({
                name: "",
                email: "",
                password: ""
            });

            setState("login");
        }

        // LOGIN
        else {

            const response = await api.post(
                "/auth/login",
                {
                    email: formData.email,
                    password: formData.password
                }
            );

            const { token, user } = response.data;

            localStorage.setItem(
                "token",
                token
            );

            localStorage.setItem(
                "currentUser",
                JSON.stringify(user)
            );

            toast.success(`Welcome ${user.name}`);

            if(redirect==="feedback"){
                navigate('/feedback')
            } else {
                navigate("/app");
            }
        }

    } catch (error) {

        toast.error(
            error.response?.data?.message ||
            "Something went wrong"
        );

    }

};

    return (

        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 relative overflow-hidden">

            {/* Soft Background Glow */}
            <div className='fixed inset-0 -z-10 pointer-events-none'>

                <div className='absolute left-1/2 top-20 -translate-x-1/2 w-[700px] h-[350px] bg-linear-to-tr from-indigo-800/35 to-transparent rounded-full blur-3xl' />

                <div className='absolute right-10 bottom-10 w-[350px] h-[220px] bg-linear-to-bl from-purple-700/30 to-transparent rounded-full blur-3xl' />

            </div>

            {/* Form Card */}
            <form
                onSubmit={handleSubmit}
                className="w-full sm:w-[420px] text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-8 shadow-2xl"
            >

                {/* Logo */}
                <h2 className="text-4xl font-bold bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mt-10">

                    ResumeIta

                </h2>

                {/* Heading */}
                <h1 className="text-white text-3xl mt-6 font-semibold">

                    {state === "login" ? "Welcome Back 👋" : "Create Account"}

                </h1>

                {/* Subtitle */}
                <p className="text-slate-400 text-sm mt-3 leading-6">

                    {state === "login"
                        ? "Continue building smarter ATS-friendly resumes."
                        : "Start building recruiter-friendly resumes with AI."
                    }

                </p>

                {/* Name Input */}
                {state === "signup" && (

                    <div className="flex items-center mt-8 w-full bg-white/5 ring-1 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-3 transition-all">

                        {/* User Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="text-white/60"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="8" r="5" />
                            <path d="M20 21a8 8 0 0 0-16 0" />
                        </svg>

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className="w-full bg-transparent text-white placeholder-white/50 outline-none"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                    </div>
                )}

                {/* Email Input */}
                <div className="flex items-center mt-5 w-full bg-white/5 ring-1 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-3 transition-all">

                    {/* Mail Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="text-white/60"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                    </svg>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full bg-transparent text-white placeholder-white/50 outline-none"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                </div>

                {/* Password Input */}
                <div className="flex items-center mt-5 w-full bg-white/5 ring-1 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-3 transition-all">

                    {/* Lock Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="text-white/60"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full bg-transparent text-white placeholder-white/50 outline-none"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                </div>

                {/* Forgot Password */}
                {state === "login" && (

                    <div className="mt-4 text-left">

                        <button
                            type="button"
                            className="text-sm text-indigo-400 hover:text-indigo-300 transition"
                        >

                            Forgot password?

                        </button>

                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-6 w-full h-12 rounded-full text-white bg-linear-to-r from-indigo-500 to-purple-500 hover:scale-[1.02] hover:opacity-90 transition-all duration-300 font-medium"
                >

                    {state === "login" ? "Login" : "Create Account"}

                </button>

                {/* Divider */}
                <div className="flex items-center gap-4 my-7">

                    <div className="flex-1 h-px bg-white/10"></div>

                    <p className="text-sm text-slate-500">

                        OR

                    </p>

                    <div className="flex-1 h-px bg-white/10"></div>

                </div>

                {/* Google Button */}
                <button
                    type="button"
                    className="w-full h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white"
                >

                    Continue with Google

                </button>

                {/* Toggle */}
                <p className="text-slate-400 text-sm mt-8 mb-10">

                    {state === "login"
                        ? "Don't have an account?"
                        : "Already have an account?"
                    }

                    <span
                        onClick={() =>
                            setState((prev) =>
                                prev === "login" ? "signup" : "login"
                            )
                        }
                        className="text-indigo-400 hover:text-indigo-300 transition cursor-pointer ml-2"
                    >

                        {state === "login"
                            ? "Create Account"
                            : "Login"
                        }

                    </span>

                </p>

            </form>

        </div>
    )
}

export default Login