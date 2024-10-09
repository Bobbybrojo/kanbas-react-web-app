import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaEye, FaChartBar } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { GiArrowCursor } from "react-icons/gi";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoNotificationsCircle } from "react-icons/io5";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish{" "}
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish{" "}
          </button>
        </div>
      </div>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons{" "}
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <GiArrowCursor className="me-2 fs-5" />
        Choose Home Page
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaEye className="me-2 fs-5" />
        View Course Stream
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <TfiAnnouncement className="me-2 fs-5" />
        New Announcement
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaChartBar className="me-2 fs-5" />
        View Analytics
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoNotificationsCircle className="me-2 fs-5" />
        View Course Notifications
      </button>
    </div>
  );
}

// export default function CourseStatus() {
//   return (
//     <div id="wd-course-status">
//       <h2>Course Status</h2>
//       <button>Unpublish</button> <button>Publish</button>
//       <div>
//         <button>Import Existing Content</button>
//       </div>
//       <div>
//         <button>Import from Commons</button>
//       </div>
//       <div>
//         <button>Choose Home Page</button>
//       </div>
//       <div>
//         <button>View Course Stream</button>
//       </div>
//       <div>
//         <button>New Announcement</button>
//       </div>
//       <div>
//         <button>View Analytics</button>
//       </div>
//       <div>
//         <button>View Course Notifications</button>
//       </div>
//     </div>
//   );
// }
