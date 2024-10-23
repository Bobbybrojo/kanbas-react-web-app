import { BsGripVertical } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments">
      <div className="container ">
        <div className="row mr-l">
          <input
            className="form-control col"
            id="wd-search-assignment"
            placeholder="Search..."
          />
          <button className="btn col-sm" id="wd-add-assignment-group">
            + Group
          </button>
          <button className="btn col-sm" id="wd-add-assignment">
            + Assignment
          </button>
        </div>
      </div>
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <FaCaretDown className="me-2 fs-3" />
            Assignments
            <AssignmentsControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <div className="d-inline">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdAssignment className="me-2 fs-3" />
                  </div>
                  <div className="d-inline-block">
                    <Link key={assignment._id} to={`${assignment._id}`}>
                      {assignment.title}
                    </Link>
                    <p>
                      Multiple Modules | <strong>Not available until</strong>{" "}
                      May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm
                      | 100pts
                    </p>
                  </div>
                  <div className="d-inline">
                    <LessonControlButtons />
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
