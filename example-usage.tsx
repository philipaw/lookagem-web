// Example of how to use LookaGem Web in another TypeScript project

import React from "react";
import { LookagemWeb } from "lookagem-web";

// Import the styles
import "lookagem-web/dist/style.css";

interface ServerAppProps {
  userRole?: "admin" | "user";
}

export const ServerApp: React.FC<ServerAppProps> = ({ userRole = "user" }) => {
  return (
    <div className="server-app">
      {/* Your server app header */}
      <header className="server-header">
        <h1>My Server Application</h1>
        <span>Role: {userRole}</span>
      </header>

      {/* Embedded LookaGem Web App */}
      <main className="main-content">
        <LookagemWeb basename="/design-tool" className="embedded-lookagem" />
      </main>
    </div>
  );
};

export default ServerApp;
