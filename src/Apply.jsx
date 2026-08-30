// AI slop btw, have no idea how to do ts
// I mean I can do the js but whatever monstrosity this is, yeah no
// I did all the backend myself tho, I'm good at that
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router'
import Bar from "./Bar.jsx";

const SUBJECTS = ["math", "science", "english", "digi-tech", "german", "music", "arts", "hass",];
const DAYS = ["monday"];

function Apply() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    yearGroup: "",
    extra: "",
  });
  const [subjects, setSubjects] = useState([]);
  const [days, setDays] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const toggleFromList = (setter) => (value) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };
  const toggleSubject = toggleFromList(setSubjects);
  const toggleDay = toggleFromList(setDays);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const yearGroupNum = parseInt(form.yearGroup, 10);
    if (Number.isNaN(yearGroupNum)) {
      setStatus("error");
      setErrorMsg("Year level must be a number.");
      return;
    }
    if (subjects.length === 0) {
      setStatus("error");
      setErrorMsg("Pick at least one subject.");
      return;
    }
    if (days.length === 0) {
      setStatus("error");
      setErrorMsg("Pick at least one day.");
      return;
    }

    try {
      const res = await fetch("/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          year_group: yearGroupNum,
          subjects,
          days,
          extra: form.extra,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.detail ? JSON.stringify(body.detail) : `Server responded ${res.status}`);
      }

      setStatus("success");
      setForm({ name: "", email: "", yearGroup: "", extra: "" });
      setSubjects([]);
      setDays([]);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <>
      <div className="content">
        <h1 className="sub-heading">
          Apply for a session
        </h1>
        <form className="apply-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="textfield">
                    <input type="text" id="name" placeholder=" " value={form.name} onChange={handleChange} required/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="textfield">
                    <input type="email" id="email" placeholder=" " value={form.email} onChange={handleChange} required/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="textfield">
                    <input type="number" id="yearGroup" placeholder=" " value={form.yearGroup} onChange={handleChange} required/>
                    <label htmlFor="yearGroup">Year level</label>
                </div>
            </div>

            <h2 className="sub-heading">
            Desired subject(s)
            </h2>
            <div className="chip-group">
                {SUBJECTS.map((subject) => (
                  <label key={subject}>
                    <input
                      type="checkbox"
                      hidden
                      checked={subjects.includes(subject)}
                      onChange={() => toggleSubject(subject)}
                    />
                    <span className="chip">{subject}</span>
                  </label>
                ))}
            </div>

            <h2 className="sub-heading">
            Preferred day(s)
            </h2>
            <div className="chip-group">
                {DAYS.map((day) => (
                  <label key={day}>
                    <input
                      type="checkbox"
                      hidden
                      checked={days.includes(day)}
                      onChange={() => toggleDay(day)}
                    />
                    <span className="chip">{day}</span>
                  </label>
                ))}
            </div>

            <div className="textfield extra-textfield">
                <input type="text" id="extra" placeholder=" " value={form.extra} onChange={handleChange}/>
                <label htmlFor="extra">Extra information/requests(can be anything)</label>
            </div>

            {status === "error" && <p className="paragraph error">{errorMsg}</p>}
            {status === "success" && <p className="paragraph success">Application submitted — thanks!</p>}

            <button className="form-submit-button" type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Submitting…" : "Submit"}
            </button>
            <p className="paragraph">Looking for website lessons? Head to <Link to="/lessons" className='internal-link'>our lessons page</Link>.</p>
            <p className="paragraph">Joke applications will be ignored.</p>
        </form>
        
      </div>
    </>
  );
}

export default Apply;