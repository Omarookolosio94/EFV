import { useState, useEffect } from "react";
import { fetchFloor } from "../api/mockApi";

export const useFloor = (towerSlug: string, floorSlug: string) => {
  const [data, setData] = useState<Floor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFloor(towerSlug, floorSlug).then((res) => {
      setData(res ?? null);
      setLoading(false);
    });
  }, [towerSlug, floorSlug]);

  return { data, loading };
};
