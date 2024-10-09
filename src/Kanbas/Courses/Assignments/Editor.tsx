export default function AssignmentEditor() {
  return (
    <div className="container" id="wd-assignments-editor">
      <div className="row">
        <label htmlFor="wd-name">Assignment Name</label>
        <input className="form-control" id="wd-name" value="A1 - ENV + HTML" />
      </div>
      <textarea className="form-control float-end" id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>

      <div className="row">
        <label className="col text-end" htmlFor="wd-points">
          Points
        </label>

        <input
          className="form-control float-end col-lg"
          id="wd-points"
          value={100}
        />
      </div>

      <div className="row">
        <label className="col text-end" htmlFor="wd-group">
          Assignment Group
        </label>

        <select className="form-control float-end col-lg" id="wd-group">
          <option>ASSIGNMENTS</option>
        </select>
      </div>

      <div className="row">
        <label className="col text-end" htmlFor="wd-display-grade-as">
          Display Grade as
        </label>

        <select className="form-control float-end col" id="wd-display-grade-as">
          <option>Percentage</option>
          <option>Letter</option>
        </select>
      </div>

      <div className="row">
        <label className="col text-end" htmlFor="wd-submission-type">
          Submission Type
        </label>

        <div className="card col">
          <div className="card-body">
            <select className="form-control float-end" id="wd-submission-type">
              <option>Online</option>
              <option>In Person</option>
            </select>

            <label className="">Online Entry Options</label>

            <div className="container">
              <div className="row">
                <input
                  className="form-check-input col-xs"
                  id="wd-text-entry"
                  type="checkbox"
                  value=""
                />
                <label className="col" htmlFor="wd-text-entry">
                  Text Entry
                </label>
              </div>
              <div className="row">
                <input
                  className="form-check-input col-xs"
                  id="wd-website-url"
                  type="checkbox"
                  value=""
                />
                <label className="col" htmlFor="wd-website-url">
                  Website URL
                </label>
              </div>
              <div className="row">
                <input
                  className="form-check-input col-xs"
                  id="wd-media-recordings"
                  type="checkbox"
                  value=""
                />
                <label className="col" htmlFor="wd-media-recordings">
                  Media Recordings
                </label>
              </div>
              <div className="row">
                <input
                  className="form-check-input col-xs"
                  id="wd-student-annotation"
                  type="checkbox"
                  value=""
                />
                <label className="col" htmlFor="wd-student-annotation">
                  Student Annotations
                </label>
              </div>
              <div className="row">
                <input
                  className="form-check-input col-xs"
                  id="wd-file-upload"
                  type="checkbox"
                  value=""
                />
                <label className="col" htmlFor="wd-file-upload">
                  File Uploads
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <label className="col text-end" htmlFor="wd-assign-to">
          Assign
        </label>
        <div className="card col">
          <div className="card-body">
            <div>
              <label htmlFor="wd-assign-to">Assign to</label>
            </div>
            <input
              className="form-control float-end"
              id="wd-assign-to"
              value="Everyone"
            />

            <div>
              <label htmlFor="wd-due-date">Due</label>
            </div>
            <input
              className="form-control float-end"
              id="wd-due-date"
              type="date"
            />
            <div className="container">
              <div className="row">
                <div className="col">
                  <label htmlFor="wd-available-from">Available from</label>
                  <input
                    className="form-control float-end"
                    id="wd-available-from"
                    type="date"
                  />
                </div>
                <div className="col">
                  <label htmlFor="wd-available-until">Until</label>
                  <input
                    className="form-control float-end"
                    id="wd-available-until"
                    type="date"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <button className="btn float-end">Cancel</button>
          <button className="btn btn-primary float-end">Save</button>
        </div>
      </div>
    </div>
  );
}
