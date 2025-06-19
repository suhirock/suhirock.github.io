// src/routes/blog/+layout.ts
import { getYears } from '$lib/api/posts';

export const load = async () => {
  return {
    archiveYears: getYears()
  };
};