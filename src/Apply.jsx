import { Routes, Route, Link } from 'react-router'

function Apply() {
  return (
    <>
      <div className="content">
        <h1 className="sub-heading">
          Apply for a session
        </h1>
        <form className="apply-form">
            <div className="form-row">
                {/* should prob turn these text fields into a component sometime. Also prob the chips */}
                <div className="textfield">
                    <input type="text" id="name" placeholder=" "/>
                    <label for="name">Name</label>
                </div>
                <div className="textfield">
                    <input type="text" id="email" placeholder=" "/>
                    <label for="email">Email</label>
                </div>
                <div className="textfield">
                    <input type="text" id="year" placeholder=" "/>
                    <label for="year">Year level</label>
                </div>
            </div>
            {/* Ill uhh work on the time slots for stuff later */}
            <h2 className="sub-heading">
            Desired subject(s)
            </h2>
            <div class="chip-group">
                <input type="checkbox" id="math" hidden/>
                <label for="math" class="chip">Math</label>

                <input type="checkbox" id="science" hidden/>
                <label for="science" class="chip">Science</label>

                <input type="checkbox" id="english" hidden/>
                <label for="english" class="chip">English</label>

                <input type="checkbox" id="digi-tech" hidden/>
                <label for="digi-tech" class="chip">digi tech</label>

                <input type="checkbox" id="german" hidden/>
                <label for="german" class="chip">German</label>

                <input type="checkbox" id="chinese" hidden/>
                <label for="chinese" class="chip">Chinese</label>

                <input type="checkbox" id="music" hidden/>
                <label for="music" class="chip">Music</label>

                <input type="checkbox" id="arts" hidden/>
                <label for="arts" class="chip">Arts</label>
            </div>
            <div className="textfield extra-textfield">
                <input type="text" id="extra" placeholder=" "/>
                <label for="extra">Extra information/requests(can be anything)</label>
            </div>
            <button className="form-submit-button">
                Submit
            </button>
            <p className="paragraph">Looking for website lessons? Head to <Link to="/lessons" className='internal-link'>our lessons page</Link>.</p>
            <p className="paragraph">Joke applications will be ignored.</p>
        </form>
        
      </div>
    </>
  );
}

export default Apply;
