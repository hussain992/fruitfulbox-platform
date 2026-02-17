import { useEffect, useState, useCallback } from "react";

interface CacheWrapper<T> {
  data: T;
  expiresAt: number;
}

export const useCachedData = <T,>(
  key: string,
  expirationTimeMs: number = 24 * 60 * 60 * 1000, // Defaults to 24h
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const executeFetch = useCallback(async () => {
    setIsLoading(true);
    console.log('api called again');
    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const newData = await fetch(`${apiBaseUrl}/${key}`).then((res) =>
        res.json(),
      );
      const cacheObject: CacheWrapper<T> = {
        data: newData,
        expiresAt: Date.now() + expirationTimeMs,
      };
      localStorage.setItem(key, JSON.stringify(cacheObject));
      setData(newData);
      setError(null);
    } catch (err) {
      setError(err as Error);
      console.error(`Error fetching data for key "${key}":`, err);
    } finally {
      setIsLoading(false);
    }
  }, [key, expirationTimeMs]);

  useEffect(() => {
    const cachedData = localStorage.getItem(key);

    if (cachedData) {
      try {
        const parsed = JSON.parse(cachedData) as CacheWrapper<T>;
        const isExpired = Date.now() > parsed.expiresAt;
        console.log(isExpired, parsed);
        if (
          !isExpired &&
          parsed.data &&
          Object.keys(parsed.data).length > 0
        ) {
          console.log(`Using cached data for key "${key}"`);
          setData(parsed.data);
          setIsLoading(false);
          return; // Exit early, no need to fetch
        }
      } catch (e) {
        // If JSON parse fails, treat as empty cache
        console.error(`Error parsing cached data for key "${key}":`, e);
        localStorage.removeItem(key);
      }
    }

    // If we reach here, data is either missing or expired
    executeFetch();
  }, [key, executeFetch]);

  return { data, isLoading, error, refetch: executeFetch };
};
