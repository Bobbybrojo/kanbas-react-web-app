import { BsGripVertical } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import { useEffect } from "react";

import {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
} from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `${Math.floor(Math.random() * 1000)}/`;
    console.log("Navigating to path");
    navigate(path);
  };

  const fetchAssignments = async () => {
    const assignemnts = await coursesClient.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div id="wd-assignments">
      <div className="container ">
        <div className="row mr-l">
          <input
            className="form-control col"
            id="wd-search-assignment"
            placeholder="Search..."
          />
          <button
            className="btn btn-secondary col-sm"
            id="wd-add-assignment-group"
          >
            + Group
          </button>
          <button
            className="btn btn-danger col-sm"
            id="wd-add-assignment"
            onClick={routeChange}
          >
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
            {assignments.map((assignment: any) => {
              console.log("Assignment:", assignment);
              console.log("Assignment Title:", assignment.title);
              return (
                <li
                  key={assignment._id}
                  className="wd-lesson list-group-item p-3 ps-1"
                >
                  <div className="d-inline">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdAssignment className="me-2 fs-3" />
                  </div>
                  <div className="d-inline-block">
                    <Link to={`${assignment._id}`}>{assignment.title}</Link>
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
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
}
