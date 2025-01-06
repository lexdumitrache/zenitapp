import FabMenu from '../components/FabMenu';

    const HomePage = () => {
      return (
        <div className="max-w-md mx-auto bg-white min-h-screen pb-16 relative">
          {/* Page Content */}
          <div className="p-4">
            <h1 className="text-2xl font-bold">Home</h1>
            <p className="text-gray-600">Welcome to the homepage!</p>
          </div>

          {/* FAB Menu */}
          <FabMenu />
        </div>
      );
    };

    export default HomePage;
