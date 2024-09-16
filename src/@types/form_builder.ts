type FormBuilder = {
  type: string;
  label: string;
  name: string;
  validations?: {
    required?: boolean;
  };
  options?: Array<{ value: string; label: string }>;
  className?: string;
  placeholder?: string;
};

type OptionType = {
  value: string;
  label: string;
};

export type { FormBuilder, OptionType };