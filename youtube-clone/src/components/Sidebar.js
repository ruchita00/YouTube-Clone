import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  console.log(isMenuOpen);
  // Early Return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-2/12 h-lvh ">
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/demo">Demo</Link>
        </li>
        <li> Shorts</li>
        <li> Videos</li>
        <li> Live</li>
      </ul> */}
      <ul>
        <span>
          <Link to="/">
            <li className="p-3 shadow-sm hover:bg-gray-100 rounded-lg">
              {" "}
              <i class="fa-sharp fa-regular fa-house"></i> Home
            </li>
          </Link>
        </span>
        <li className="p-2 shadow-sm hover:bg-gray-100 rounded-lg">
          <i class="fa-solid fa-bolt"></i> Shorts
        </li>
        <span className="flex">
          <li className="p-2 shadow-sm hover:bg-gray-100 rounded-lg">
            {" "}
            <i class="fa-brands fa-square-youtube"></i> Subscription
          </li>
        </span>
      </ul>
      {/* <h1 className="font-bold text-bold pt-5  shadow-sm hover:bg-gray-100 rounded-lg">
        You
      </h1>
      <ul>
        <li className="p-2 shadow-sm hover:bg-gray-100 rounded-lg">
          {" "}
          Your channel
        </li>
        <li className="p-2 shadow-sm hover:bg-gray-100 rounded-lg"> History</li>
        <li className="p-2 shadow-sm hover:bg-gray-100 rounded-lg">
          {" "}
          Your videos
        </li>
        <li className="p-2 shadow-sm hover:bg-gray-100 rounded-lg">
          {" "}
          Watch later
        </li>
      </ul> */}
      <h1 className="font-bold pt-5 shadow-sm hover:bg-gray-100 rounded-lg">
        Explore
      </h1>
      <ul>
        <li className="p-2 shadow-sm hover:bg-gray-100 rounded-lg">
          {" "}
          Trending
        </li>
        <li className="p-2 shadow-sm hover:bg-gray-100 rounded-lg"> Shoping</li>
        <li className="p-2 shadow-sm hover:bg-gray-100 rounded-lg"> Music</li>
        <li className="p-2 shadow-sm hover:bg-gray-100 rounded-lg">
          {" "}
          Movies
        </li>{" "}
        <li className="p-2 shadow-sm hover:bg-gray-100 rounded-lg"> Live</li>
        <li className="p-2 shadow-sm hover:bg-gray-100 rounded-lg"> Gaming</li>
        <li className="p-2 shadow-sm hover:bg-gray-100 rounded-lg"> News</li>
        <li className="p-2 shadow-sm hover:bg-gray-100 rounded-lg"> Sports</li>
        <li className="p-2 shadow-sm hover:bg-gray-100 rounded-lg">
          {" "}
          Learning
        </li>
        <li className="p-2 shadow-sm hover:bg-gray-100 rounded-lg">
          {" "}
          Fashion $ Beauty
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
