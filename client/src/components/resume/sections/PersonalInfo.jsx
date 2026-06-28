const PersonalInfo = ({ resumeData, setResumeData }) => {

  const handleChange = (e) => {

    const { name, value } = e.target;

    setResumeData((prev) => ({
      ...prev,
      personal_info: {
        ...prev.personal_info,
        [name]: value,
      },
    }));
  };

  return (

    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Personal Information
      </h2>

      <div className="grid sm:grid-cols-2 gap-5">

        {/* Full Name */}
        <div>

          <label className="text-sm text-slate-400 block mb-3">
            Full Name
          </label>

          <input
            type="text"
            name="full_name"
            value={resumeData.personal_info.full_name}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full h-12 rounded-2xl bg-slate-900 border border-white/10 px-4 outline-none focus:border-indigo-500 transition"
          />

        </div>

        {/* Profession */}
        <div>

          <label className="text-sm text-slate-400 block mb-3">
            Profession
          </label>

          <input
            type="text"
            name="profession"
            value={resumeData.personal_info.profession}
            onChange={handleChange}
            placeholder="Frontend Developer"
            className="w-full h-12 rounded-2xl bg-slate-900 border border-white/10 px-4 outline-none focus:border-indigo-500 transition"
          />

        </div>

        {/* Email */}
        <div>

          <label className="text-sm text-slate-400 block mb-3">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={resumeData.personal_info.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full h-12 rounded-2xl bg-slate-900 border border-white/10 px-4 outline-none focus:border-indigo-500 transition"
          />

        </div>

        {/* Phone */}
        <div>

          <label className="text-sm text-slate-400 block mb-3">
            Phone
          </label>

          <input
            type="text"
            name="phone"
            value={resumeData.personal_info.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
            className="w-full h-12 rounded-2xl bg-slate-900 border border-white/10 px-4 outline-none focus:border-indigo-500 transition"
          />

        </div>

        {/* Location */}
        <div className="sm:col-span-2">

          <label className="text-sm text-slate-400 block mb-3">
            Location
          </label>

          <input
            type="text"
            name="location"
            value={resumeData.personal_info.location}
            onChange={handleChange}
            placeholder="Delhi, India"
            className="w-full h-12 rounded-2xl bg-slate-900 border border-white/10 px-4 outline-none focus:border-indigo-500 transition"
          />

        </div>

      </div>

    </div>
  );
};

export default PersonalInfo;