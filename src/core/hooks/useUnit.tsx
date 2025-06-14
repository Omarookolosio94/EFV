import { useState, useEffect } from "react";
import { fetchUnit } from "../api/mockApi";

export const useUnit = (
  towerSlug: string,
  floorSlug: string,
  unitSlug: string,
) => {
  const [data, setData] = useState<Unit | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUnit(towerSlug, floorSlug, unitSlug).then((res) => {
      setData(res ?? null);
      setLoading(false);
    });
  }, [towerSlug, floorSlug, unitSlug]);

  return { data, loading };
};
