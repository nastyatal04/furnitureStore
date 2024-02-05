import React from "react";

const url = "";

export const fetchRover = async () => {
  return fetch(url).then((response) => response.json());
};
