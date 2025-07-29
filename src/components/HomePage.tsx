import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleAccountClick = () => {
    navigate("/account");
  };

  return (
    <div className="studio-layout">
      {/* Simple Navigation with Account Icon */}
      <nav className="nav container">
        <div className="nav-brand">GEM</div>
        <div className="nav-links">
          <button
            onClick={handleAccountClick}
            className="btn btn-ghost"
            title="Account"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          <button onClick={handleLogout} className="btn btn-ghost">
            Logout
          </button>
        </div>
      </nav>

      {/* Blank Content Area */}
      <main className="container section-lg">
        <div className="text-center">
          <p className="body-md opacity-50">Welcome to your workspace</p>
        </div>
      </main>
    </div>
  );
}
