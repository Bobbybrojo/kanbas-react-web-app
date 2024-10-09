import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignemntsControlButtons() {
  return (
    <>
      <div className="float-end">
        <label className="assignment-control-percent">40% of Total</label>
        <BsPlus />
        <IoEllipsisVertical className="fs-4" />
      </div>
    </>
  );
}
