import { telegram } from "./instances";
import type {getTelegram} from "@typing/services/telegram";
export async function getTelegram({page, character, offer_name, section}: getTelegram) {
  const payload = await telegram.get(`${page}-${character}%0AOffer: ${offer_name}%0ASection: ${section}`);
  return payload;
}

