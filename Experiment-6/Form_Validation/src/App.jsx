import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = formData.password;

  /* ---------------- EMAIL VALIDATION ---------------- */
  const emailRegex = /^[a-zA-Z0-9._%+-]+@cuchd\.in$/;
  const isEmailValid = emailRegex.test(formData.email);

  /* ---------------- PASSWORD VALIDATION (ENHANCED) ---------------- */
  const validations = {
    minLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    noSpaces: !/\s/.test(password),
    noConsecutive: !/(.)\1{2,}/.test(password),
    passwordMatch: password === formData.confirmPassword && password !== ""
  };

  // Calculate password strength
  const strengthScore = Object.values(validations).filter(v => v).length;
  const passwordStrength = 
    strengthScore <= 2 ? "weak" :
    strengthScore <= 4 ? "fair" :
    strengthScore <= 6 ? "good" :
    "strong";

  const isPasswordValid =
    validations.minLength &&
    validations.hasUpperCase &&
    validations.hasLowerCase &&
    validations.hasNumber &&
    validations.hasSpecialChar &&
    validations.noSpaces &&
    validations.noConsecutive;

  /* ---------------- HANDLE CHANGE ---------------- */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /* ---------------- HANDLE SUBMIT ---------------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmailValid) {
      alert("Only @cuchd.in email addresses are allowed");
      return;
    }

    if (!isPasswordValid) {
      alert("Please fix password requirements");
      return;
    }

    if (!validations.passwordMatch) {
      alert("Passwords do not match");
      return;
    }

    alert("Form Submitted Successfully ✅\nPassword strength: " + passwordStrength.toUpperCase());
  };

  return (
    <div className="wrapper">
      <div className="card">
        <h2>Form Validation</h2>

        <form onSubmit={handleSubmit}>
          {/* EMAIL */}
          <label>Email ID</label>
          <input
            type="email"
            name="email"
            placeholder="example@cuchd.in"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {formData.email && (
            <p className={isEmailValid ? "valid" : "invalid"}>
              {isEmailValid
                ? "✔ Valid CUCHD Email"
                : "✖ Only @cuchd.in email allowed"}
            </p>
          )}

          {/* PASSWORD */}
          <label>Password</label>
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter a strong password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>

          {/* PASSWORD STRENGTH INDICATOR */}
          {formData.password && (
            <div className="strength-container">
              <div className={`strength-bar strength-${passwordStrength}`}></div>
              <p className={`strength-text strength-${passwordStrength}`}>
                Password Strength: {passwordStrength.toUpperCase()}
              </p>
            </div>
          )}

          {/* PASSWORD REQUIREMENTS */}
          <div className="password-box">
            <p className="title">Password Requirements:</p>

            <p className={validations.minLength ? "valid" : "invalid"}>
              {validations.minLength ? "✔" : "✖"} At least 8 characters long
            </p>

            <p className={validations.hasUpperCase ? "valid" : "invalid"}>
              {validations.hasUpperCase ? "✔" : "✖"} Contains at least one UPPERCASE letter (A-Z)
            </p>

            <p className={validations.hasLowerCase ? "valid" : "invalid"}>
              {validations.hasLowerCase ? "✔" : "✖"} Contains at least one lowercase letter (a-z)
            </p>

            <p className={validations.hasNumber ? "valid" : "invalid"}>
              {validations.hasNumber ? "✔" : "✖"} Contains at least one number (0-9)
            </p>

            <p className={validations.hasSpecialChar ? "valid" : "invalid"}>
              {validations.hasSpecialChar ? "✔" : "✖"} Contains special character (!@#$%^&*...)
            </p>

            <p className={validations.noSpaces ? "valid" : "invalid"}>
              {validations.noSpaces ? "✔" : "✖"} Does not contain spaces
            </p>

            <p className={validations.noConsecutive ? "valid" : "invalid"}>
              {validations.noConsecutive ? "✔" : "✖"} No consecutive repeated characters
            </p>
          </div>

          {/* CONFIRM PASSWORD */}
          <label>Confirm Password</label>
          <div className="input-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              disabled={!isPasswordValid}
            />
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>

          {formData.confirmPassword && (
            <p className={validations.passwordMatch ? "valid" : "invalid"}>
              {validations.passwordMatch
                ? "✔ Passwords match"
                : "✖ Passwords do not match"}
            </p>
          )}

          <button 
            type="submit" 
            disabled={!isEmailValid || !isPasswordValid || !validations.passwordMatch}
            className={isEmailValid && isPasswordValid && validations.passwordMatch ? "submit-enabled" : ""}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;