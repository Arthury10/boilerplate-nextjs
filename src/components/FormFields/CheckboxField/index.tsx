import { Checkbox } from "@/components/ui/checkbox";
import { useController } from "react-hook-form";

interface CheckboxFieldProps extends React.ComponentProps<typeof Checkbox> {
  name: string;
}

const CheckboxField = ({ name, ...rest }: CheckboxFieldProps) => {
  const { field } = useController({
    name
  });

  return (
    <Checkbox
      id={name}
      {...rest}
      {...field}
      onCheckedChange={(value) => field.onChange(value)}
      name={name}
    />
  )
}

export default CheckboxField;