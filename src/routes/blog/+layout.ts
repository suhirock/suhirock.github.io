// src/routes/blog/+layout.ts
import { getCategories, getYears } from '$lib/api/posts';

export const load = async () => {
  return {
    archiveYears: getYears(),
    categories: await getCategories()
  };
};