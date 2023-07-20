import { Http } from "@tuentyfaiv/http";

import config from "@config";

export const registry = Http.create(config.registry_url, {
  params: {
    key: config.registry_key,
  },
});

export const api = Http.create(config.api, {
  storage: localStorage,
});

export const telegram = Http.create(`${config.api}`);
