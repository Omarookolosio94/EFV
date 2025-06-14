import { useState, useEffect } from "react";
import { fetchTowers } from "../api/mockApi";

export const useTowers = () => {
  const [data, setData] = useState<Tower[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTowers().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
};
