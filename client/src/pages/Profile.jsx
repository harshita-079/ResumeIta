import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../api/axios";
import {
  Phone,
  Briefcase,
  MapPin,
  UserCircle,
} from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("TOKEN:", token);

      const res = await api.get("/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("PROFILE RESPONSE:", res.data);

      setUser(res.data.user);
    } catch (error) {
      console.error(error);
      console.error("PROFILE ERROR:", error.response?.data || error);
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.put("/user/profile", user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEditing(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile.");
    }
  };

  // Profile completion calculation
  const fields = [
    user?.name,
    user?.phone,
    user?.profession,
    user?.location,
    user?.bio,
  ];

  const completed = fields.filter((field) => field && field.trim() !== "").length;

  const completion = Math.round((completed / fields.length) * 100);

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen app-page dark:bg-slate-950 dark:text-white p-6">
      <div className="max-w-3xl app-card mx-auto dark:bg-slate-900 rounded-3xl p-8 border dark:border-white/10">

      {/* AVATAR AND NAME*/}
        <div className="flex items-center gap-5 mb-8"> 
          <div className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center text-3xl font-bold">
            {user.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <div>
            <h1 className="text-3xl font-bold">{user.name || "User"}</h1>
            <p className="text-slate-400 mt-1">{user.email}</p>
          </div>
        </div>

        {/* PROFILE COMPLETION BAR */}
        <div className="mt-5">
          <div className="app-text-muted flex justify-between text-sm dark:text-slate-400 mb-2">
            <span>Profile Completion</span>
            <span>{completion}%</span>
          </div>

          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 transition-all duration-500"
              style={{ width: `${completion}%` }}
            />
          </div>
        </div>

        {/* PROFILE DETAILS */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div>
            <div className="flex items-center gap-2 text-sm dark:text-slate-400 mb-2">
              <Phone size={16} />
              <span>Phone</span>
            </div>

            <input
              type="text"
              name="phone"
              value={user.phone || ""}
              onChange={handleChange}
              disabled={!editing}
              placeholder="Add your phone number"
              className="w-full app-input dark:bg-slate-800 rounded-xl p-4 border dark:border-white/10 disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <div>
            <div className="flex items-center gap-2 text-sm dark:text-slate-400 mb-2">
              <Briefcase size={16} />
              <span>Profession</span>
            </div>
            <input
              type="text"
              name="profession"
              value={user.profession || ""}
              onChange={handleChange}
              disabled={!editing}
              placeholder="Add your profession"
              className="w-full app-input dark:bg-slate-800 rounded-xl p-4 border dark:border-white/10 disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            
          </div>

          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-sm dark:text-slate-400 mb-2">
              <MapPin size={16} />
              <span>Location</span>
            </div>
            <input
              type="text"
              name="location"
              value={user.location || ""}
              onChange={handleChange}
              disabled={!editing}
              placeholder="Add your location"
              className="w-full app-input dark:bg-slate-800 rounded-xl p-4 border dark:border-white/10 disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-sm dark:text-slate-400 mb-2">
              <UserCircle size={16} />
              <span>About</span>
            </div>
            <textarea
              name="bio"
              value={user.bio || ""}
              onChange={handleChange}
              disabled={!editing}
              rows={4}
              placeholder="Add a short bio about yourself"
              className="w-full app-input dark:bg-slate-800 rounded-xl p-4 border dark:border-white/10 disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </div>

          {/* button */}
          <div className="md:col-span-2 flex justify-end mt-4">
            {editing ? (
              <button
                onClick={handleSave}
                className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 transition font-medium shadow-lg shadow-green-500/20"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-medium shadow-lg shadow-indigo-500/20"
              >
                Edit Profile
              </button>
            )}
          </div>

        </div>

      </div>
    </div>

  )
};

export default Profile;