import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const searchCache = useSelector((store) => store.search);

  /**
   * searchcache:{
   * {
  *'iphone':['iphone11','iphone14']}
  * }

   */

  useEffect(() => {
    //make an api call after ever key poress
    //but if the difference between 2 api call is <200ms
    //decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * key -i
   * render the component
   * useEffect()
   * start timer = make api call after 200ms
   *
   * key -in
   * destroy the component ( useEffect return method)
   * re render the component
   * useEffect()
   * start timer - make api call after 200ms
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //update cache

    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          className="h-8 mx-2 cursor-pointer"
          alt="menu"
          onClick={toggleHandler}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII="
        />
        <a href="/">
          <img
            className="h-14 w-24"
            style={{ marginTop: "-10px" }}
            alt="youtube-logo"
            src="data:image/png;base64,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"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 px-5 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100 ">
          <i class="fa-sharp fa-solid fa-magnifying-glass"></i>{" "}
        </button>
      </div>
      {showSuggestions && (
        <div className="fixed bg-white py-5 mt-12 ml-60 px-5 w-[36rem] shadow-lg rounded-lg">
          <ul>
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="py-2 px-3 shadow-sm hover:bg-gray-100"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* <div className="col-span-1 flex">
        <img
          alt="user"
          className="w-12"
          src="data:image/jpeg;base64,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"
        />
      </div> */}
    </div>
  );
};

export default Header;
