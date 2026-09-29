import { useState } from "react";

function NewSurvey() {
  const [formData, setFormData] = useState({
    farmerName: "",
    surveyNumber: "",
    village: "",
    district: "",
    landType: "Agricultural",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Survey Data:", formData);

    alert("Survey created successfully!");
  };

  return (
    <div className="survey-page">

      <div className="page-title">
        <div>
          <h1>New Land Survey</h1>
          <p>Create a new agricultural land survey record</p>
        </div>
      </div>

      <div className="survey-card">

        <h2>Land Information</h2>
        <p className="form-description">
          Enter the basic information of the agricultural land.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <div className="form-group">
              <label>Farmer Name</label>

              <input
                type="text"
                name="farmerName"
                placeholder="Enter farmer name"
                value={formData.farmerName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Survey Number</label>

              <input
                type="text"
                name="surveyNumber"
                placeholder="Example: 123/4A"
                value={formData.surveyNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Village</label>

              <input
                type="text"
                name="village"
                placeholder="Enter village"
                value={formData.village}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>District</label>

              <input
                type="text"
                name="district"
                placeholder="Enter district"
                value={formData.district}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Land Type</label>

              <select
                name="landType"
                value={formData.landType}
                onChange={handleChange}
              >
                <option value="Agricultural">Agricultural</option>
                <option value="Residential">Residential</option>
                <option value="Government">Government</option>
                <option value="Other">Other</option>
              </select>
            </div>

          </div>

          <div className="boundary-section">

            <div className="boundary-icon">📍</div>

            <div>
              <h3>Land Boundary</h3>

              <p>
                Use the GIS map to capture the exact agricultural
                land boundary.
              </p>
            </div>

            <button
              type="button"
              className="map-button"
            >
              Open GIS Map →
            </button>

          </div>

          <div className="form-actions">

            <button
              type="button"
              className="cancel-button"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-button"
            >
              Save Survey
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default NewSurvey;