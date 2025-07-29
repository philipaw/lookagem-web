import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function EntrancePage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { sendVerificationCode } = useAuth();

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "");

    // Format as (XXX) XXX-XXXX
    if (digits.length >= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(
        6,
        10
      )}`;
    } else if (digits.length >= 3) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      return digits;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedNumber);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Extract digits only for validation
    const digits = phoneNumber.replace(/\D/g, "");

    if (digits.length !== 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await sendVerificationCode(digits);
      navigate("/verify");
    } catch (err) {
      setError("Failed to send verification code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card fade-in">
        {/* Studio Nordost Header */}
        <div className="auth-header">
          <div className="auth-brand">GEM 💎</div>
          <p className="auth-subtitle">Make stuff</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="(555) 123-4567"
              className="form-input"
              maxLength={14}
            />
          </div>

          {error && <div className="form-error text-center">{error}</div>}

          <button
            type="submit"
            disabled={isLoading || phoneNumber.replace(/\D/g, "").length !== 10}
            className="btn btn-primary w-full"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-3">
                <div className="loading-spinner w-5 h-5"></div>
                <span>Sending...</span>
              </div>
            ) : phoneNumber.replace(/\D/g, "").length > 0 ? (
              "Continue"
            ) : (
              "Get Started"
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="body-sm">We'll send you a verification code via SMS</p>
        </div>
      </div>
    </div>
  );
}
