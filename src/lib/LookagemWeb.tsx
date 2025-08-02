import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import App from "../App";

// Import the CSS
import "../index.css";
import { createRoot } from "react-dom/client";

export interface LookagemWebProps {
  basename?: string; // For nested routing
  className?: string;
}

export function mountLookagemWeb(
  element: HTMLElement,
  props: React.ComponentProps<typeof LookagemWeb>
) {
  const root = createRoot(element);
  root.render(<LookagemWeb {...props} />);
}

export const LookagemWeb: React.FC<LookagemWebProps> = ({
  basename = "/",
  className,
}) => {
  return (
    <div className={className}>
      <AuthProvider>
        <ThemeProvider>
          <Router basename={basename}>
            <App />
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
};

export default LookagemWeb;
