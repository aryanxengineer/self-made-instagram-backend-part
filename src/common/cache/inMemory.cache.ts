import { type CacheOptions, type CacheStore } from "./cache.interface.js";

interface CacheEntry<T> {
  value: T;
  expiresAt: number | null;
}

export class InMemoryCache<T> implements CacheStore<T> {
  private store = new Map<string, CacheEntry<T>>();
  private maxSize: number;

  constructor(maxSize = 500) {
    this.maxSize = maxSize;
  }

  get(key: string): T | null {
    const entry = this.store.get(key);
    if (!entry) return null;

    // TTL expired
    if (entry.expiresAt && entry.expiresAt < Date.now()) {
      this.store.delete(key);
      return null;
    }

    // LRU update
    this.store.delete(key);
    this.store.set(key, entry);

    return entry.value;
  }

  set(key: string, value: T, options?: CacheOptions): void {
    if (this.store.has(key)) {
      this.store.delete(key);
    }

    if (this.store.size >= this.maxSize) {
      // remove least recently used
      const lruKey = this.store.keys().next().value;
      this.store.delete(lruKey as string);
    }

    const expiresAt = options?.ttl ? Date.now() + options.ttl : null;

    this.store.set(key, { value, expiresAt });
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  delete(key: string): void {
    this.store.delete(key);
  }

  clear(): void {
    this.store.clear();
  }

  size(): number {
    return this.store.size;
  }
}
