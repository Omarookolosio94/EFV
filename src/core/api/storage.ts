const STORAGE_KEY = "property-visualizer-data";

export const saveDataToStorage = (data: Tower[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const loadDataFromStorage = (): Tower[] | null => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};

export const clearStorage = () => {
  localStorage.removeItem(STORAGE_KEY);
};
