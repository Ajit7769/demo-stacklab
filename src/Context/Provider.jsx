import React, { useState } from "react";
import FetchContext from "./FetchContext";
import axios from "axios";
import { useEffect } from "react";
import LoadingScreen from "../Componant/LoadingScreen";

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/data",
      responseType: "json",
    }).then(function (response) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      setData(response.data);
      // setIsLoading(false);
    });
  }, []);

  // useEffect(() => {
  //   // Simulate an API call
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const contextValue = { data };

  return (
    <FetchContext.Provider value={contextValue}>
      {children}
    </FetchContext.Provider>
  );
};

export default Provider;
