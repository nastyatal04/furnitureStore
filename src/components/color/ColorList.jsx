import React, { useEffect } from "react";
import { useGetColors } from "../../api/hooks/hooks-color/useGetColors";
import { ColorCard } from "./ColorCard";
import "./ColorList.css";
//import { useGetRover } from "../../api/hooks/hooks -rover";

export const ColorList = () => {
  const [colors, error, isLoading, fetchData] = useGetColors();
  useEffect(() => {
    fetchData();
  }, []);

  //   const { data: roverPhotosData } = useGetRover();

  return (
    <div className="color-list">
      {error ? (
        <p>{error}</p>
      ) : isLoading ? (
        <span>Загрузка...</span>
      ) : colors && colors.length > 0 ? (
        colors.map((color) => (
          <a href={`/color/${color.id}`}>
            <ColorCard
              key={color.id}
              id={color.id}
              name={color.name}
              hex={color.hex}
            />
          </a>
        ))
      ) : (
        <button onClick={fetchData}>Загрузить</button>
      )}
    </div>
  );
};
