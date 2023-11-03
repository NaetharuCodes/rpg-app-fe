import React, { ReactNode } from "react";
import { IoCreateSharp } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import LogoutButton from "./auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./auth/LoginButton";

interface AppShellProps {
  children: ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col h-full">
      <header id="navbar" className="flex flex-between">
        <h2>RPG-AI</h2>
        {isAuthenticated ? (
          <div className="flex flex-middle">
            <ul className="flex">
              <li className="no-bullet">
                <a href="#" className="link font-standard">
                  <GrGallery />
                </a>
              </li>
              <li className="no-bullet">
                <a href="#" className="link font-standard">
                  <IoCreateSharp />
                </a>
              </li>
            </ul>
            <div>
              <LogoutButton />
              <p></p>
            </div>
          </div>
        ) : (
          <div>
            <LoginButton />
          </div>
        )}
      </header>
      <div className="flex-grow">{children}</div>
      <footer id="footer">App by James Bridge</footer>
    </div>
  );
};

export default AppShell;
