export interface SelectOption {
  key?: string;
  label: string;
  value: string;
  disabled?: boolean;
}

export interface StringObject {
  [key: string]: string;
};