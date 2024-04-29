class Storage {
  get<T = any>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }
  set<T = any>(key: string, value: T) {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
  remove(key: string) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
}
export const storage = new Storage();
