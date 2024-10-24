import { Textarea, TextareaProps } from "@/components/ui/textarea";
import { useController } from "react-hook-form";

interface TextareFieldProps extends TextareaProps {
  name: string;
}

const TextareField = ({ name, ...rest }: TextareFieldProps) => {
  const { field } = useController({
    name
  });

  return (
    <div className="relative">
      <Textarea
        {...rest}
        {...field}
        name={name}
        id={name}
      />
    </div>
  )
}

export default TextareField;