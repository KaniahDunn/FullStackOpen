import React from "react";

function Filter({searchQuery, onChange}) {
  return (
    <div>
      Search: <input value={searchQuery} onChange={onChange} />
    </div>
  );
}

export default Filter;
