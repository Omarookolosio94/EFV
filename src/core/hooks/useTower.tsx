import { useState, useEffect } from "react";
import { fetchTower } from "../api/mockApi";

export const useTower = (slug: string) => {
  const [data, setData] = useState<Tower | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTower(slug).then((res) => {
      setData(res ?? null);
      setLoading(false);
    });
  }, [slug]);

  return { data, loading };
};
