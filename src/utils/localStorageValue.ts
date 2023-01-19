type Repository = {
  value: string;
  remove: () => void;
};

export const localStorageRepository = (
  key: string,
  initialValue: string
): Repository => ({
  get value() {
    return window.localStorage.getItem(key) || initialValue;
  },
  set value(value: string) {
    window.localStorage.setItem(key, value);
  },
  remove() {
    window.localStorage.removeItem(key);
  },
});
