import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AccountPage() {
  const { logout, userData } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleBackToHome = () => {
    navigate("/home");
  };

  const formattedPhoneNumber = userData.phoneNumber
    ? `(${userData.phoneNumber.slice(0, 3)}) ${userData.phoneNumber.slice(
        3,
        6
      )}-${userData.phoneNumber.slice(6)}`
    : "";

  return (
    <div className="studio-layout">
      {/* Navigation */}
      <nav className="nav container">
        <div className="nav-brand">GEM</div>
        <div className="nav-links">
          <button onClick={handleBackToHome} className="btn btn-ghost">
            ← Back to Home
          </button>
          <button onClick={handleLogout} className="btn btn-ghost">
            Logout
          </button>
        </div>
      </nav>

      {/* Account Content */}
      <main className="container section-lg">
        <div className="auth-card mx-auto fade-in">
          <div className="auth-header">
            <div className="auth-brand">Account</div>
            <p className="auth-subtitle">Your Profile Information</p>
          </div>

          <div className="space-y-6">
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <div className="form-input bg-gray-50 opacity-75">
                {formattedPhoneNumber || "Not provided"}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Account Status</label>
              <div className="form-input bg-gray-50 opacity-75">Verified</div>
            </div>

            <div className="form-group">
              <label className="form-label">Member Since</label>
              <div className="form-input bg-gray-50 opacity-75">
                {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <button onClick={handleLogout} className="btn btn-secondary w-full">
              Sign Out
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
