import React, { useState } from 'react';
import { Settings, Heart, User, Watch, Calendar, Bell, Moon, Sun, Shield, LogOut } from 'lucide-react';
import HealthReport from './HealthReport';
import FabMenu from '../components/FabMenu';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const [activeView, setActiveView] = useState<'health' | 'settings'>('settings');
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const SettingsContent = () => (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>
      
      {/* Account Settings */}
      <div className="bg-purple-50 p-4 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <User className="w-6 h-6 text-purple-600" />
          <h3 className="text-lg font-semibold">Account</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Name</span>
            <button className="text-purple-600 hover:text-purple-700">Edit</button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Email</span>
            <button className="text-purple-600 hover:text-purple-700">Edit</button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Password</span>
            <button className="text-purple-600 hover:text-purple-700">Change</button>
          </div>
        </div>
      </div>

      {/* Appearance Settings */}
      <div className="bg-purple-50 p-4 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          {darkMode ? (
            <Moon className="w-6 h-6 text-purple-600" />
          ) : (
            <Sun className="w-6 h-6 text-purple-600" />
          )}
          <h3 className="text-lg font-semibold">Appearance</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Dark Mode</span>
            <button 
              onClick={toggleDarkMode}
              className={`relative w-12 h-6 rounded-full p-1 transition-colors ${
                darkMode ? 'bg-purple-600' : 'bg-gray-200'
              }`}
            >
              <div 
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  darkMode ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Theme Color</span>
            <button className="text-purple-600 hover:text-purple-700">Customize</button>
          </div>
        </div>
      </div>

      {/* Notifications Settings */}
      <div className="bg-purple-50 p-4 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <Bell className="w-6 h-6 text-purple-600" />
          <h3 className="text-lg font-semibold">Notifications</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Enable Notifications</span>
            <button 
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className={`relative w-12 h-6 rounded-full p-1 transition-colors ${
                notificationsEnabled ? 'bg-purple-600' : 'bg-gray-200'
              }`}
            >
              <div 
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  notificationsEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Notification Sound</span>
            <button className="text-purple-600 hover:text-purple-700">Change</button>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-purple-50 p-4 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-purple-600" />
          <h3 className="text-lg font-semibold">Security</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Two-Factor Authentication</span>
            <button className="text-purple-600 hover:text-purple-700">Enable</button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Login History</span>
            <button className="text-purple-600 hover:text-purple-700">View</button>
          </div>
        </div>
      </div>

      {/* Logout */}
      <div className="mt-8">
        <button
          onClick={() => navigate('/')}
          className="w-full flex items-center justify-center gap-2 p-3 text-red-600 border border-red-600 rounded-lg hover:bg-red-50"
        >
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-16 relative">
      {/* Header with Navigation */}
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Settings</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveView('health')}
              className={`p-2 rounded-full ${
                activeView === 'health' 
                  ? 'bg-purple-100 text-purple-600' 
                  : 'text-gray-500 hover:bg-purple-50'
              }`}
            >
              <Heart className="w-6 h-6" />
            </button>
            <button
              onClick={() => setActiveView('settings')}
              className={`p-2 rounded-full ${
                activeView === 'settings'
                  ? 'bg-purple-100 text-purple-600'
                  : 'text-gray-500 hover:bg-purple-50'
              }`}
            >
              <Settings className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="overflow-y-auto">
        {activeView === 'health' ? <HealthReport /> : <SettingsContent />}
      </div>

      {/* FAB Menu */}
      <FabMenu />
    </div>
  );
};

export default SettingsPage;
