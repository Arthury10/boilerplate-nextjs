import { Input, InputProps } from "@/components/ui/input";
import { useController } from "react-hook-form";

interface InputFieldProps extends InputProps {
  name: string;
}

const InputField = ({ name, ...rest }: InputFieldProps) => {
  const { field } = useController({
    name
  });

  return (
    <Input
      {...rest}
      {...field}
      name={name}
      id={name}
    />
  )
}

export default InputField;