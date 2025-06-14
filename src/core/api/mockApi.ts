import { generateMockData } from "./mockData";
import { loadDataFromStorage, saveDataToStorage } from "./storage";

let cachedData: Tower[] | null = null;

const getData = (): Tower[] => {
  if (cachedData) return cachedData;

  const stored = loadDataFromStorage();

  if (stored) {
    cachedData = stored;
    return stored;
  }

  const generated = generateMockData();
  saveDataToStorage(generated);
  cachedData = generated;
  return generated;
};

const simulateNetwork = <T>(data: T, delay = 300): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), delay));

export const fetchTowers = () => simulateNetwork(getData());

export const fetchTower = (slug: string) =>
  simulateNetwork(getData().find((t) => t.slug === slug));

export const fetchFloor = (towerSlug: string, floorSlug: string) => {
  const tower = getData().find((t) => t.slug === towerSlug);
  return simulateNetwork(tower?.floors.find((f) => f.slug === floorSlug));
};

export const fetchUnit = (
  towerSlug: string,
  floorSlug: string,
  unitSlug: string,
) => {
  const tower = getData().find((t) => t.slug === towerSlug);
  const floor = tower?.floors.find((f) => f.slug === floorSlug);
  return simulateNetwork(floor?.units.find((u) => u.slug === unitSlug));
};
