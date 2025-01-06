import { Plus } from 'lucide-react';

    const InboxPage = () => {
      const tasks = [
        { title: 'Grocery shopping', dueDate: '17 Dec 2024', priority: '+1' },
        { title: 'Study french grammar', dueDate: 'none', priority: '+3' },
      ];

      return (
        <>
          {/* Task List */}
          <div className="px-4 sm:px-6 space-y-3">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="bg-purple-100 p-4 rounded-xl flex justify-between items-center shadow-sm"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <input
                    type="checkbox"
                    className="h-5 w-5 border-2 border-gray-400 rounded-md"
                  />
                  <div>
                    <p className="font-medium text-gray-800 text-base sm:text-lg">{task.title}</p>
                    <p className="text-sm text-gray-600">Due date: {task.dueDate}</p>
                  </div>
                </div>
                <span className="text-sm sm:text-base text-purple-800 font-medium">{task.priority}</span>
              </div>
            ))}
          </div>

          {/* Add Button */}
          <button className="fixed right-6 bottom-20 bg-purple-600 text-white rounded-full p-3 shadow-lg hover:bg-purple-700 transition-colors sm:right-8 sm:bottom-24">
            <Plus className="w-6 h-6" />
          </button>
        </>
      );
    };

    export default InboxPage;
