import { RadioGroup } from "@/components/ui/radio-group";
import { useController } from "react-hook-form";

interface RadioGroupFieldProps extends React.ComponentProps<typeof RadioGroup> {
  name: string;
  children: React.ReactNode;
}

const RadioGroupField = ({ name, children, ...rest }: RadioGroupFieldProps) => {
  const { field } = useController({
    name
  });

  return (
    <RadioGroup
      {...rest}
      {...field}
      onValueChange={(value) => field.onChange(value)}
      name={name}
      id={name}
    >
      {children}
    </RadioGroup>
  )
}

export default RadioGroupField;