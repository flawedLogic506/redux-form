export type Field = {
  id: string;
  placeholder: string;
  required?: boolean;
  type: string;
  maxLength?: number;
  options?: string[];
}

export type ReadOnlyField = {
  field?: string;
  label?: string;
  value?: string | number;
}

export type Form = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  jobTitle: string;
  reason: string;
}

