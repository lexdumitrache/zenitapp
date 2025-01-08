import React, { useState } from 'react';
import { Settings, Heart } from 'lucide-react';
import HealthReport from './HealthReport';
import FabMenu from '../components/FabMenu';

const ProfilePage = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-16 relative">
      {/* Header with Settings */}
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Health Report</h1>
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-500" />
            <div className="relative">
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Settings className="w-6 h-6" />
              </button>
              
              {showSettings && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
                  <ul className="py-2">
                    <li>
                      <button
                        className="w-full px-4 py-2 text-left hover:bg-gray-100"
                        onClick={() => setShowSettings(false)}
                      >
                        Account Settings
                      </button>
                    </li>
                    <li>
                      <button
                        className="w-full px-4 py-2 text-left hover:bg-gray-100"
                        onClick={() => setShowSettings(false)}
                      >
                        Notifications
                      </button>
                    </li>
                    <li>
                      <button
                        className="w-full px-4 py-2 text-left hover:bg-gray-100"
                        onClick={() => setShowSettings(false)}
                      >
                        Privacy
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Health Report Content */}
      <HealthReport />

      {/* FAB Menu */}
      <FabMenu />
    </div>
  );
};

export default ProfilePage;
