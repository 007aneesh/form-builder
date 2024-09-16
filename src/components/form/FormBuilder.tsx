import { Label } from "../ui/label"; 
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  FormBuilder as FormBuilderType,
  OptionType,
} from "@/@types/form_builder";

const FormBuilder = ({
  type,
  label,
  name,
  validations,
  options,
  className,
  ...props
}: FormBuilderType) => {
  const { register } = useFormContext();

  const renderFieldByType = () => {
    switch (type) {
      case "text":
      case "number":
      case "email":
        return (
          <div className="flex flex-col space-y-2">
            <Input
              id={name}
              type={type}
              placeholder={props.placeholder}
              {...register(name, { required: validations?.required })}
              className={cn(className)}
            />
          </div>
        );
      case "textarea":
        return (
          <div className="flex flex-col space-y-2">
            <textarea
              id={name}
              placeholder={props.placeholder}
              {...register(name, { required: validations?.required })}
              className="border rounded p-2 w-full"
            />
          </div>
        );
      case "select":
        return (
          <div className="flex flex-col space-y-2">
            <Label htmlFor={name}>{label}</Label>
            <select
              id={name}
              {...register(name, { required: validations?.required })}
              className="border rounded p-2 w-full"
            >
              {options?.map((option: OptionType) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );
      case "checkbox":
        return (
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={name}
              {...register(name, { required: validations?.required })}
              className={cn(className)}
            />
            <Label htmlFor={name}>{label}</Label>
          </div>
        );
      case "radio":
        return (
          <div className="flex flex-col space-y-2">
            {options?.map((option: OptionType) => (
              <div key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={`${name}-${option.value}`}
                  value={option.value}
                  {...register(name, { required: validations?.required })}
                />
                <Label htmlFor={`${name}-${option.value}`}>
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return <>{renderFieldByType()}</>;
};

export default FormBuilder;
