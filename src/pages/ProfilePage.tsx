import FabMenu from '../components/FabMenu';

    const ProfilePage = () => {
      return (
        <div className="max-w-md mx-auto bg-white min-h-screen pb-16 relative">
          {/* Page Content */}
          <div className="p-4">
            <h1 className="text-2xl font-bold">Profile</h1>
            <p className="text-gray-600">Your profile view goes here.</p>
          </div>

          {/* FAB Menu */}
          <FabMenu />
        </div>
      );
    };

    export default ProfilePage;
