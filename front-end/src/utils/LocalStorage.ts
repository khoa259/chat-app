interface ILocalStorage {
  key: string;
  value: unknown;
}

const setItem = (key: ILocalStorage, value: ILocalStorage) => {
  console.log(key, value);
  localStorage.setItem(String(key), JSON.stringify(value));
};

export const getItem = (key: ILocalStorage) => {
  const item = localStorage.getItem(String(key));
  return item ? JSON.parse(item) : null;
};

export const local = {
  setItem,
  getItem,
};
