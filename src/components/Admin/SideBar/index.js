import './sidebar.scss';
import { Link } from 'react-router-dom';
const SideBar = () => {
    return (
      <div className="col-2 side-bar">
        <div className="component">
          <Link to="/admin">
            <h2>DevPlus</h2>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="image-sliders">
              <i className="fa-solid fa-images"></i> Image Sliders
            </Link>
          </li>
          <li>
            <Link to="to-be-a-devplus">
              <i className="fa-solid fa-code"></i> To Be A DevPlus
            </Link>
          </li>
          <li>
            <Link to="edu-program">
              <i className="fa-solid fa-file-pen"></i> Education program
            </Link>
          </li>
          <li>
            <Link to="our-main-campus">
              <i className="fa-solid fa-paper-plane"></i> Our main campus
            </Link>
          </li>
          <li>
            <Link to="common-concerns">
              <i className="fa-solid fa-arrows-to-circle"></i> Common concerns
            </Link>
          </li>
          <li>
            <Link to="alumni-saying">
              <i className="fa-solid fa-person-military-to-person"></i> Alumni
              saying
            </Link>
          </li>
        </ul>
      </div>
    );
};
export default SideBar;
