export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option>ASSIGNMENTS</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option>Percentage</option>
              <option>Letter</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option>Online</option>
              <option>In Person</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label>Online Entry Options</label>
            <div>
              <input id="wd-text-entry" type="checkbox" value="" />
              <label htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div>
              <input id="wd-website-url" type="checkbox" value="" />
              <label htmlFor="wd-website-url">Website URL</label>
            </div>
            <div>
              <input id="wd-media-recordings" type="checkbox" value="" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div>
              <input id="wd-student-annotation" type="checkbox" value="" />
              <label htmlFor="wd-student-annotation">Student Annotations</label>
            </div>
            <div>
              <input id="wd-file-upload" type="checkbox" value="" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </div>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <div>
              <label htmlFor="wd-assign-to">Assign to</label>
            </div>
            <input id="wd-assign-to" value="Everyone" />

            <div>
              <label htmlFor="wd-due-date">Due</label>
            </div>
            <input id="wd-due-date" type="date" />

            <div>
              <label htmlFor="wd-available-from">Available from</label>
              <label htmlFor="wd-available-until">{"        Until"}</label>
            </div>
            <input id="wd-available-from" type="date" />
            <input id="wd-available-until" type="date" />

            <hr />
            <div>
              <button>Cancel</button>
              <button>Save</button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
