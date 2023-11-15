import { useState } from "react";

let counter = 0;
const SearchParams = () => {
  counter++;
  //   const location = "Seattle, WA";
  const [location, setLocation] = useState("");
  return (
    <div className="search-params">
      <h2>{counter}</h2>
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
