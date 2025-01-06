import { useState } from 'react';
    import { X, Plus, Clock, AlertCircle } from 'lucide-react';

    const HabitForm = ({ onClose, onSubmit }) => {
      const [habitName, setHabitName] = useState('');
      const [frequency, setFrequency] = useState('daily');
      const [importance, setImportance] = useState(3);
      const [timeOfDay, setTimeOfDay] = useState('');
      const [duration, setDuration] = useState(30);
      const [alertsEnabled, setAlertsEnabled] = useState(false);
      const [alertTime, setAlertTime] = useState('');
      const [subtasks, setSubtasks] = useState([]);
      const [errors, setErrors] = useState({});

      const validate = () => {
        const newErrors = {};
        if (!habitName.trim()) newErrors.habitName = 'Habit name is required';
        if (!timeOfDay) newErrors.timeOfDay = 'Time of day is required';
        if (duration < 1) newErrors.duration = 'Duration must be at least 1 minute';
        if (alertsEnabled && !alertTime) newErrors.alertTime = 'Alert time is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          onSubmit({
            habitName,
            frequency,
            importance,
            timeOfDay,
            duration,
            alerts: alertsEnabled ? alertTime : null,
            subtasks,
          });
          onClose();
        }
      };

      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Create New Habit</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Habit Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Habit Name</label>
                <input
                  type="text"
                  value={habitName}
                  onChange={(e) => setHabitName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
                {errors.habitName && <p className="text-sm text-red-500 mt-1">{errors.habitName}</p>}
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Frequency</label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              {/* Importance */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Importance (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={importance}
                  onChange={(e) => setImportance(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              {/* Time of Day */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Time of Day</label>
                <input
                  type="time"
                  value={timeOfDay}
                  onChange={(e) => setTimeOfDay(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
                {errors.timeOfDay && <p className="text-sm text-red-500 mt-1">{errors.timeOfDay}</p>}
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
                <input
                  type="number"
                  min="1"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
                {errors.duration && <p className="text-sm text-red-500 mt-1">{errors.duration}</p>}
              </div>

              {/* Alerts */}
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={alertsEnabled}
                    onChange={(e) => setAlertsEnabled(e.target.checked)}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Enable Alerts</span>
                </label>
                {alertsEnabled && (
                  <div className="mt-2">
                    <label className="block text-sm font-medium text-gray-700">Alert Time</label>
                    <input
                      type="time"
                      value={alertTime}
                      onChange={(e) => setAlertTime(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    />
                    {errors.alertTime && <p className="text-sm text-red-500 mt-1">{errors.alertTime}</p>}
                  </div>
                )}
              </div>

              {/* Subtasks */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Subtasks</label>
                {subtasks.map((subtask, index) => (
                  <div key={index} className="flex items-center gap-2 mt-2">
                    <input
                      type="text"
                      value={subtask}
                      onChange={(e) => {
                        const newSubtasks = [...subtasks];
                        newSubtasks[index] = e.target.value;
                        setSubtasks(newSubtasks);
                      }}
                      className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    />
                    <button
                      type="button"
                      onClick={() => setSubtasks(subtasks.filter((_, i) => i !== index))}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setSubtasks([...subtasks, ''])}
                  className="mt-2 flex items-center text-sm text-purple-600 hover:text-purple-700"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add Subtask
                </button>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700"
                >
                  Create Habit
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    };

    export default HabitForm;
