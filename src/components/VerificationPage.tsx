import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function VerificationPage() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendCooldown, setResendCooldown] = useState(30);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const navigate = useNavigate();
  const { userData, verifyCode, sendVerificationCode } = useAuth();

  // Redirect if no phone number
  useEffect(() => {
    if (!userData.phoneNumber) {
      navigate("/");
    }
  }, [userData.phoneNumber, navigate]);

  const formattedPhoneNumber = userData.phoneNumber
    ? `(${userData.phoneNumber.slice(0, 3)}) ${userData.phoneNumber.slice(
        3,
        6
      )}-${userData.phoneNumber.slice(6)}`
    : "";

  useEffect(() => {
    // Start cooldown timer
    const timer = setInterval(() => {
      setResendCooldown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleInputChange = (index: number, value: string) => {
    // Only allow digits
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;

    setCode(newCode);
    setError("");

    // Auto-focus next input
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    if (newCode.every((digit) => digit !== "") && index === 5) {
      handleVerification(newCode.join(""));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      // Focus previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (pastedData.length === 6) {
      const newCode = pastedData.split("");
      setCode(newCode);
      setError("");
      handleVerification(pastedData);
    }
  };

  const handleVerification = async (verificationCode: string) => {
    setIsLoading(true);
    setError("");

    try {
      await verifyCode(verificationCode);
      navigate("/home");
    } catch (err) {
      setError("Invalid verification code. Please try again.");
      setCode(["", "", "", "", "", ""]);
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (resendCooldown > 0) return;

    try {
      await sendVerificationCode(userData.phoneNumber);
      setResendCooldown(30);
      setError("");
      setCode(["", "", "", "", "", ""]);
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    } catch (err) {
      setError("Failed to resend code. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card fade-in">
        {/* Header with back button */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="btn btn-ghost text-left p-0 mb-6"
          >
            ← Back
          </button>
        </div>

        <div className="auth-header">
          <div className="auth-brand">Verification</div>
          <p className="auth-subtitle">Enter the code we sent</p>
          <p className="body-md mt-4">
            Code sent to: <strong>{formattedPhoneNumber}</strong>
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <label className="form-label text-center block">
              Verification Code
            </label>

            <div className="code-input-grid">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    el && (inputRefs.current[index] = el);
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="code-input"
                  disabled={isLoading}
                />
              ))}
            </div>
          </div>

          {error && <div className="form-error text-center">{error}</div>}

          {isLoading && (
            <div className="flex items-center justify-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="loading-spinner w-5 h-5"></div>
              <span className="body-md">Verifying...</span>
            </div>
          )}

          <div className="text-center space-y-4">
            <p className="body-sm">Didn't receive the code?</p>
            <button
              onClick={handleResendCode}
              disabled={resendCooldown > 0}
              className="btn btn-ghost"
            >
              {resendCooldown > 0
                ? `Resend in ${resendCooldown}s`
                : "Resend Code"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
