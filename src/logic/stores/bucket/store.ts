import { writable } from 'svelte/store';

export const bucketConfigStore = writable(null);

export const bucketImagesStore = writable<any>({} as any);