import React, { useState } from 'react';
import { Settings, Heart, User, Watch, Calendar } from 'lucide-react';
import HealthReport from './HealthReport';
import FabMenu from '../components/FabMenu';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [activeView, setActiveView] = useState<'health' | 'settings'>('health');
  const navigate = useNavigate();

  const SettingsPage = () => (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>
      
      {/* Profile Configuration */}
      <div className="bg-purple-50 p-4 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <User className="w-6 h-6 text-purple-600" />
          <h3 className="text-lg font-semibold">Profile Configuration</h3>
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
        </div>
      </div>

      {/* Wearable Device Connection */}
      <div className="bg-purple-50 p-4 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <Watch className="w-6 h-6 text-purple-600" />
          <h3 className="text-lg font-semibold">Wearable Devices</h3>
        </div>
        <div className="space-y-3">
          <button className="w-full p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Connect New Device
          </button>
          <div className="text-sm text-gray-600">
            Currently connected: 2 devices
          </div>
        </div>
      </div>

      {/* Calendar Integration */}
      <div className="bg-purple-50 p-4 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="w-6 h-6 text-purple-600" />
          <h3 className="text-lg font-semibold">Calendar Integration</h3>
        </div>
        <div className="space-y-3">
          <button className="w-full p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Connect Calendar
          </button>
          <div className="text-sm text-gray-600">
            Currently connected: Google Calendar
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-16 relative">
      {/* Header with Navigation */}
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Profile</h1>
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
        {activeView === 'health' ? <HealthReport /> : <SettingsPage />}
      </div>

      {/* FAB Menu */}
      <FabMenu />
    </div>
  );
};

export default ProfilePage;
