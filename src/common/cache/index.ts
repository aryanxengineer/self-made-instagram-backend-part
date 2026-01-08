import { InMemoryCache } from "./inMemory.cache.js";

export const appCache = new InMemoryCache<any>(1000);
