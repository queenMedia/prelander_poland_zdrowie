export interface StepProps {
  type: "marked" | "unmarked";
  title: string;
  description: string;
  img: string;
  offer_name: string;
  offer: string;
  redirect: string | null;
  character_name: string;
  currency_simbol: string;
  currency: string;
}
