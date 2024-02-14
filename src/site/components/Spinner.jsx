import React from "react";

import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  // margin: "0 auto",
  textAlign: "center",
  borderColor: "#000061",
};

function Spinner() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", padding: "2rem 0" }}
    >
      <ClipLoader
        // color="#000061"
        loading="true"
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
