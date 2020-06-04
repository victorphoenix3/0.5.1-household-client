import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { Input } from "antd";

import "./index.css";

const { Search } = Input;

const HouseJoin = () => {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);
  const onJoinAttempt = (code) => {
    setLoading(true);
    addToast(
      "Joined house successfuly. Redirecting to house page in 5 seconds",
      {
        appearance: "success",
      }
    );
    setLoading(false);
  };
  return (
    <div className="house-join-wrapper">
      <h3>Enter the code for the house you want to join</h3>
      <Search
        disabled={loading}
        placeholder="input search text"
        onSearch={(value) => onJoinAttempt(value)}
        enterButton={!loading ? "Join House" : "Please wait ..."}
      />
    </div>
  );
};

export default HouseJoin;
