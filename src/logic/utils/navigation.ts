import { page } from "$app/stores";
import { writable } from "svelte/store";

function QueryParams() {
  const params = writable<Record<string, string>>({});
  page.subscribe(({ url }) => {
    if (url) {
      params.set(Object.fromEntries(url.searchParams.entries()));
    }
  });

  return { subscribe: params.subscribe };
}

export const queryParams = QueryParams();