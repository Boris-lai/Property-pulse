"use client";
import ClockLoader from "react-spinners/ClockLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <ClockLoader
      color="#36d7b7"
      loading={loading}
      cssOverride={override}
      size={70}
      aria-label="Loading Spinner"
    />
  );
};
export default Spinner;
