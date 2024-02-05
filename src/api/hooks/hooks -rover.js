import { useQuery } from "@tanstack/react-query";
import { fetchRover } from "../fetch-rover";

export const useGetRover = () => {
  useQuery({
    queryKey: ["photos"],
    queryFn: fetchRover,
  });
};
