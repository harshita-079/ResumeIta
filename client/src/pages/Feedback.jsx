// import React from 'react'
import { useState } from 'react'
import api from "../api/axios"
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

function Feedback() {
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
      try {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        const response= await api.post("/feedback", {
          userId: currentUser.id,
          rating,
          message
        });

        if(response.data) {
          toast.success("Thank you for your feedback!");
        }

        setRating(0);
        setMessage('');
        navigate("/");

    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-950 px-6'>
      <div className='max-w-2xl w-full bg-white/5 rounded-3xl p-10 border border-white/10'>
        <h1 className='text-4xl font-bold text-white text-center'>
            Share your feedback with us! 
        </h1>
        <p className='text-slate-400 text-center mt-3'>
            Tell us about your ResumeIta experience
        </p>
        <div className='mt-8 flex justify-content gap-3'>
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    onClick={() => setRating(star)}
                    className='text-2xl focus:outline-none'
                >
                    {star <= rating ? '⭐' : '☆'}
                </button>
            ))}
        </div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Write your feedback...'
          className='w-full mt-8 h-40 bg-white/5 text-white border border-white/10 rounded-2xl p-4 outline-nonefocus:ring-2 focus:ring-blue-500 '
          rows='5'
        />
        <button 
        onClick={handleSubmit}
        className='w-full mt-6 bg-linear-to-r font-medium p-4 from-indigo-500 to-purple-500 text-white rounded-full hover:bg-blue-700 transition-colors duration-300'>
          Submit Feedback
        </button>
      </div>
    </div>
  )
}

export default Feedback
