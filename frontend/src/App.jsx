import "./App.css";

export default function App() {
  return (
    <div className="app-bg">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">☰</div>
        <h3 className="nav-title">Task Manager</h3>
        <div className="nav-right">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="avatar"
          />
        </div>
      </nav>

      <div className="phone">

        {/* LEFT PANEL */}
        <div className="left">
          <p className="muted">Good Morning 👋</p>
          <h2>
            You have <span>49 tasks</span><br />this month 👍
          </h2>

          <input className="search" placeholder="Search a task..." />

          <div className="status-row">
            <div className="status todo">To-Do</div>
            <div className="status progress">Progress</div>
            <div className="status done">Done</div>
          </div>

          <h3 className="section">Today’s Tasks</h3>

          <div className="task-card blue">
            <h4>Team Meeting 🤝</h4>
            <p>Group discussion for the new product</p>
            <div className="footer">
              <span>10:00 AM</span>
              <span>48%</span>
            </div>
          </div>

          <div className="task-card red">
            <h4>UI Design 🎨</h4>
            <p>Make a homepage design</p>
            <div className="footer">
              <span>11:00 AM</span>
              <span>70%</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right">
          <button className="add-btn">＋ Add Task</button>

          <div className="timeline">
            <div className="time-card pink">
              <h4>Wireframing</h4>
              <p>Make ideation from sketch</p>
              <span>12:00 PM</span>
            </div>

            <div className="time-card purple">
              <h4>UI Design</h4>
              <p>Visual design from wireframe</p>
              <span>1:30 PM</span>
            </div>

            <div className="time-card yellow">
              <h4>Prototyping</h4>
              <p>Interactive prototype</p>
              <span>3:00 PM</span>
            </div>

            <div className="time-card green">
              <h4>Usability Testing</h4>
              <p>Primary user testing</p>
              <span>3:45 PM</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

