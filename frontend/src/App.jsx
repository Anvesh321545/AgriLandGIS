import "./App.css";
import Map from "./Map.jsx";

function App() {
  return (
    <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="logo-section">
          <div className="logo-icon">A</div>

          <div>
            <h1>AgriLandGIS</h1>
            <p>Land Survey Platform</p>
          </div>
        </div>

        <nav className="sidebar-nav">

          <button className="nav-item active">
            <span>▦</span>
            Dashboard
          </button>

          <button className="nav-item">
            <span>＋</span>
            New Survey
          </button>

          <button className="nav-item">
            <span>▤</span>
            Survey Records
          </button>

          <button className="nav-item">
            <span>⌖</span>
            GIS Map
          </button>

          <button className="nav-item">
            <span>▥</span>
            Reports
          </button>

          <button className="nav-item">
            <span>⚙</span>
            Settings
          </button>

        </nav>

        <div className="sidebar-status">
          <div className="status-dot"></div>
          <div>
            <strong>System Online</strong>
            <p>SIH 2026 • SIH26010</p>
          </div>
        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* HEADER */}
        <header className="top-header">

          <div>
            <h1>Survey Dashboard</h1>
            <p>
              Smart Rural Agricultural Land Survey &amp; Resurvey
            </p>
          </div>

          <div className="user-section">
            <div className="user-avatar">A</div>

            <div>
              <strong>Admin</strong>
              <p>Survey Officer</p>
            </div>
          </div>

        </header>


        {/* STATISTICS */}
        <section className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon">▦</div>
            <div>
              <p>Total Surveys</p>
              <h2>128</h2>
              <span>All recorded surveys</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✓</div>
            <div>
              <p>Verified</p>
              <h2>96</h2>
              <span>Verified parcels</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">◷</div>
            <div>
              <p>Pending</p>
              <h2>24</h2>
              <span>Need verification</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⌖</div>
            <div>
              <p>Land Surveyed</p>
              <h2>486</h2>
              <span>Acres surveyed</span>
            </div>
          </div>

        </section>


        {/* MAP + QUICK ACTIONS */}
        <section className="dashboard-grid">

          {/* GIS MAP */}
          <div className="panel map-panel">

            <div className="panel-header">

              <div>
                <h2>GIS Survey Map</h2>
                <p>Recent agricultural land parcels</p>
              </div>

              <button className="view-button">
                View Full Map →
              </button>

            </div>

            <div
              className="map"
              style={{
                height: "380px",
                width: "100%",
                overflow: "hidden",
                borderRadius: "12px"
              }}
            >
              <Map />
            </div>

          </div>


          {/* QUICK ACTIONS */}
          <div className="panel quick-panel">

            <div className="panel-header">
              <div>
                <h2>Quick Actions</h2>
                <p>Start your next survey</p>
              </div>
            </div>

            <div className="quick-actions">

              <button className="action-button">
                <span className="action-icon">＋</span>

                <div>
                  <strong>Start New Survey</strong>
                  <p>Capture a new land boundary</p>
                </div>

                <span>→</span>
              </button>


              <button className="action-button">
                <span className="action-icon">⌖</span>

                <div>
                  <strong>Open GIS Map</strong>
                  <p>View surveyed parcels</p>
                </div>

                <span>→</span>
              </button>


              <button className="action-button">
                <span className="action-icon">▥</span>

                <div>
                  <strong>Generate Report</strong>
                  <p>Create survey report</p>
                </div>

                <span>→</span>
              </button>

            </div>

          </div>

        </section>


        {/* RECENT SURVEYS */}
        <section className="panel recent-panel">

          <div className="panel-header">

            <div>
              <h2>Recent Surveys</h2>
              <p>Latest agricultural land survey records</p>
            </div>

            <button className="view-button">
              View All →
            </button>

          </div>


          <div className="table-container">

            <table>

              <thead>
                <tr>
                  <th>Survey ID</th>
                  <th>Village</th>
                  <th>Area</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>ALG-00128</td>
                  <td>Kadiyam</td>
                  <td>4.25 Acres</td>
                  <td>29 Sep 2026</td>
                  <td>
                    <span className="status verified">
                      Verified
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>ALG-00127</td>
                  <td>Dowleswaram</td>
                  <td>2.80 Acres</td>
                  <td>29 Sep 2026</td>
                  <td>
                    <span className="status pending">
                      Pending
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>ALG-00126</td>
                  <td>Bommuru</td>
                  <td>6.15 Acres</td>
                  <td>28 Sep 2026</td>
                  <td>
                    <span className="status verified">
                      Verified
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;