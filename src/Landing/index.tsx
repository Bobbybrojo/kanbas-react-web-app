import { Link } from "react-router-dom";
import TOC from "../Labs/TOC";
export default function Landing() {
  return (
    <>
      <h1>Assignment 1 Landing Page</h1>
      <h3>Name: Roberto Rojo</h3>
      <h3>Section: 01</h3>
      <div>
        <h3>Link to Labs and Kanbas:</h3>
        <TOC />
      </div>

      <h3>Link to Github Repo:</h3>
      <Link
        to={"https://github.com/Bobbybrojo/kanbas-react-web-app"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Github Link
      </Link>
    </>
  );
}
