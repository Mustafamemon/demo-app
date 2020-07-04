import React from "react";
import { Link } from "react-router-dom";
function ListPages(props) {
  return (
    <div className='m-4'>
    <h3 className='text-center'>Demo Npm Pkg</h3>
    <div >
      <ul>
        <li>
          <Link to="/editable-label">Editable Label</Link>
        </li>
        <li>
          <Link to="/modal-dropdown">Modal Dropdown</Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default ListPages;
