export interface CacheOptions {
  ttl?: number; // milliseconds
}

export interface CacheStore<T = unknown> {
  get(key: string): T | null;
  set(key: string, value: T, options?: CacheOptions): void;
  has(key: string): boolean;
  delete(key: string): void;
  clear(): void;
  size(): number;
}
