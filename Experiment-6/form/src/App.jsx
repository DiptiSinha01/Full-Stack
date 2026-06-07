import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
  fname: "",
  lname: "",
  dob: "",
  gender: "",
  skills: [],
  state: ""
});

  // Handle input change
  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  if (type === "checkbox") {
    setFormData((prev) => {
      if (checked) {
        // Add only if not already present
        if (!prev.skills.includes(value)) {
          return {
            ...prev,
            skills: [...prev.skills, value]
          };
        }
        return prev;
      } else {
        // Remove unchecked value
        return {
          ...prev,
          skills: prev.skills.filter((skill) => skill !== value)
        };
      }
    });
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }
};

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    alert(`
First Name: ${formData.fname}
Last Name: ${formData.lname}
DOB: ${formData.dob}
Gender: ${formData.gender}
Skills: ${formData.skills.join(", ")}
State: ${formData.state}
    `);
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <h1 className="form-title">User Information</h1>
        <p className="form-subtitle">Please fill in your details below</p>
        
        <form onSubmit={handleSubmit} className="form-container">
          {/* Name Section */}
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input 
                type="text" 
                name="fname" 
                placeholder="John"
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input 
                type="text" 
                name="lname" 
                placeholder="Doe"
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              max={new Date().toISOString().split("T")[0]}
              onChange={handleChange}
              required
            />
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="gender" 
                  value="Male" 
                  onChange={handleChange}
                />
                <span>Male</span>
              </label>
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="gender" 
                  value="Female" 
                  onChange={handleChange}
                />
                <span>Female</span>
              </label>
            </div>
          </div>

          {/* Skills */}
          <div className="form-group">
            <label>Skills</label>
            <div className="checkbox-group">
              {['HTML', 'CSS', 'Frontend', 'Backend', 'Full Stack', 'DSA'].map((skill) => (
                <label key={skill} className="checkbox-label">
                  <input 
                    type="checkbox" 
                    name="skills"
                    value={skill}
                    onChange={handleChange}
                  />
                  <span>{skill}</span>
                </label>
              ))}
            </div>
          </div>

          {/* State */}
          <div className="form-group">
            <label>State</label>
            <div className="select-wrapper">
              <select name="state" onChange={handleChange} required>
                <option value="">Select State</option>
                <option value="Bihar">Bihar</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Uttrakhand">Uttrakhand</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;