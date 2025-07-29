import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserData {
  phoneNumber: string;
  isVerified: boolean;
}

interface AuthContextType {
  userData: UserData;
  isAuthenticated: boolean;
  sendVerificationCode: (phoneNumber: string) => Promise<void>;
  verifyCode: (code: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>({
    phoneNumber: "",
    isVerified: false,
  });

  const sendVerificationCode = async (phoneNumber: string) => {
    // Stub API call to send verification code
    console.log("Sending verification code to:", phoneNumber);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setUserData((prev) => ({ ...prev, phoneNumber }));
  };

  const verifyCode = async (code: string) => {
    // Stub API call to verify code
    console.log("Verifying code:", code, "for phone:", userData.phoneNumber);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For demo purposes, accept any 6-digit code
    if (code.length === 6) {
      setUserData((prev) => ({ ...prev, isVerified: true }));
    } else {
      throw new Error("Invalid verification code");
    }
  };

  const logout = () => {
    setUserData({ phoneNumber: "", isVerified: false });
  };

  const value = {
    userData,
    isAuthenticated: userData.isVerified,
    sendVerificationCode,
    verifyCode,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
