import api from "../api/axios";
import toast from "react-hot-toast";
import ThemeToggle from "../components/ThemeToggle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Settings as SettingsIcon, Save, LogOut} from "lucide-react";

const Settings = () => {
  const navigate = useNavigate();

  const [autoSave, setAutoSave] = useState(
    JSON.parse(localStorage.getItem("autoSave")) ?? true
  );
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");


  // Save setting
  const handleAutoSave = () => {
    const newValue = !autoSave;
    setAutoSave(newValue);
    localStorage.setItem("resumeita-autosave", newValue);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  //chage password
  const handleChangePassword = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.put(
        "/user/change-password",
        { currentPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Password changed successfully!");
      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to change password");
    }
  };


  return (
    <div className=" app-page  p-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-8">
          <SettingsIcon className="text-indigo-400" size={32} />
          <h1 className="text-4xl font-bold">Settings</h1>
        </div>

        <div className="space-y-6">

          {/* Appearance */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Theme</p>
              <p className="text-sm text-slate-400">
                Choose between dark and light mode.
              </p>
            </div>

            <ThemeToggle/>
          </div>

          {/* Security */}
          <div className="app-card rounded-3xl p-6 border ">
            <h2 className="text-2xl font-semibold mb-6">Security</h2>

            <div className="space-y-4 max-w-md">
              <input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className=" app-input w-full p-3 rounded-xl dark:bg-slate-800 border dark:border-white/10 outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="app-input w-full p-3 rounded-xl dark:bg-slate-800 border dark:border-white/10 outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <button
                onClick={handleChangePassword}
                className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 font-medium transition"
              >
                Update Password
              </button>
            </div>
          </div>
          {/* Resume Preferences */}
          <div className="app-card dark:bg-slate-900 border dark:border-white/10 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Save size={20} className="text-slate-300" />
              <h2 className="text-xl font-semibold">Resume Preferences</h2>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Auto Save Resume</p>
                <p className="text-sm text-slate-400">
                  Automatically save changes while editing your resume.
                </p>
              </div>

              <button
                onClick={handleAutoSave}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  autoSave ? "bg-indigo-600" : "bg-slate-700"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    autoSave ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Account */}
          <div className="app-card dark:bg-slate-900 border dark:border-red-500/20 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <LogOut size={20} className="text-red-400" />
              <h2 className="text-xl font-semibold text-red-400">Account</h2>
            </div>

            <p className="text-sm text-slate-400 mb-5">
              Logging out will remove your current session from this device.
            </p>

            <button
              onClick={handleLogout}
              className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-medium shadow-lg shadow-red-500/20"
            >
              Logout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Settings;