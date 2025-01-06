import React from 'react';
    import { LineChart, Line, XAxis, Legend } from 'recharts';
    import { Home, Calendar, CheckSquare, User, Pencil, BookOpen, Coffee } from 'lucide-react';

    const WellnessDashboard = () => {
      const stressData = [
        { time: '6AM', actual: 2, predicted: 2 },
        { time: '9AM', actual: 3, predicted: 2.5 },
        { time: '12PM', actual: 4, predicted: 3.5 },
        { time: '3PM', actual: 3.5, predicted: 4 },
        { time: '6PM', actual: 3, predicted: 3.5 }
      ];

      return (
        <div className="max-w-md mx-auto bg-white p-4">
          {/* Header */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold">Hi Megan,</h1>
            <p className="text-gray-600">welcome back</p>
          </div>

          {/* Stress Level Section */}
          <div className="flex gap-4 mb-6">
            <div className="flex-grow flex flex-col gap-2">
              <div className="bg-purple-200 rounded-xl p-3">
                <p className="text-sm">Good job! Your stress level is as the one predicted</p>
              </div>
              <div className="bg-purple-100 rounded-xl p-3">
                <p className="text-sm">Fancy something else? Check our suggested activities</p>
              </div>
            </div>
            <div className="bg-purple-800 text-white rounded-xl p-4 w-24 flex flex-col items-center justify-center">
              <span className="text-4xl font-semibold">65</span>
              <span className="text-xs">Stress level</span>
            </div>
          </div>

          {/* Stress Level Graph */}
          <div className="mb-2 -mx-4">
            <h3 className="text-sm mb-2 px-4">Stress Level Comparison</h3>
            <div className="h-40">
              <LineChart 
                width={380} 
                height={150} 
                data={stressData} 
                margin={{ top: 5, right: 20, bottom: 20, left: 20 }}
              >
                <XAxis 
                  dataKey="time" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#666' }}
                />
                <Legend 
                  verticalAlign="bottom"
                  height={36}
                  content={({ payload }) => (
                    <div className="flex justify-center gap-6 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-0.5 bg-purple-400"></div>
                        <span>Current stress</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-0.5 bg-purple-200"></div>
                        <span>Predicted stress</span>
                      </div>
                    </div>
                  )}
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#9F7AEA"
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="#E9D5FF" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="text-base font-extrabold mb-2">Your day at a glance</h3>
            <div className="space-y-2">
              <div className="bg-purple-200 rounded-xl p-3 relative">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <BookOpen className="w-5 h-5" />
                    <div>
                      <p className="text-sm font-medium">Study Machine Learning</p>
                      <p className="text-xs text-gray-600">08:00-08:45 (45min)</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <Pencil className="w-4 h-4 text-gray-600 mb-2" />
                    <div className="flex gap-1">
                      <span className="text-sm text-green-600">+3</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-100 rounded-xl p-3 relative scale-95 origin-top">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <Coffee className="w-5 h-5" />
                    <div>
                      <p className="text-sm font-medium">Break</p>
                      <p className="text-xs text-gray-600">08:45-09:00 (15min)</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <Pencil className="w-4 h-4 text-gray-500 mb-2" />
                    <div className="flex gap-1">
                      <span className="text-sm text-red-600">-1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
            <div className="max-w-md mx-auto flex justify-around py-2">
              <button className="flex flex-col items-center">
                <Home className="w-6 h-6" />
                <span className="text-xs">Home</span>
              </button>
              <button className="flex flex-col items-center">
                <Calendar className="w-6 h-6" />
                <span className="text-xs">Calendar</span>
              </button>
              <button className="flex flex-col items-center">
                <CheckSquare className="w-6 h-6" />
                <span className="text-xs">Tasks</span>
              </button>
              <button className="flex flex-col items-center">
                <User className="w-6 h-6" />
                <span className="text-xs">Profile</span>
              </button>
            </div>
          </div>
        </div>
      );

      export default WellnessDashboard;
