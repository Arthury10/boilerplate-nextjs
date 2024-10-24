import { Input, InputProps } from "@/components/ui/input";
import { useController } from "react-hook-form";

interface InputFileFieldProps extends InputProps {
  name: string;
  onFileSelect?: (file: File) => void;
}

const InputFileField = ({ name, onFileSelect, ...rest }: InputFileFieldProps) => {
  const { field } = useController({
    name
  });

  const handleChooseFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    if (onFileSelect) {
      onFileSelect(file);
    }
    if (field?.value) {
      field.onChange([...field?.value, file]);
    } else {
      field.onChange([file]);
    }
  }

  return (
    <div className="relative">
      <Input
        {...rest}
        onChange={handleChooseFile}
        type="file"
        name={name}
        id={name}
      />
    </div>
  )
}

export default InputFileField;