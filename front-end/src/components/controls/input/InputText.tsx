import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useFormContext, Controller } from "react-hook-form";

import { Input } from "@/components/ui/input";

interface InputProps {
  name: string; // Thêm name để sử dụng trong react-hook-form
  label: string;
  type?: string;
  placeholder?: string;
  autocomplete?: string;
  className?: string;
}

const InputText = (props: InputProps) => {
  const { t } = useTranslation();
  const { control } = useFormContext();
  const [inputType, setInputType] = useState(props.type || "text");

  console.log(control);
  const changeType = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className="relative">
      <label htmlFor={props.name} className="block text-start text-base font-medium leading-6 text-gray-800">
        {t(props.label)}
      </label>
      <Controller
        name={props.name}
        control={control}
        render={({ field }) => <Input {...field} type={inputType} placeholder={props.placeholder} className={`focus:ring-1 focus-visible:ring-stone-300 focus-visible:ring-1 focus-visible:ring-offset-0 bg-transparent ${props.className}`} />}
      />
      {props.type === "password" && (
        <button onClick={changeType} type="button" className="absolute top-[50%] translate-y-[10%] right-3 text-sm text-gray-500 cursor-pointer">
          {inputType === "password" ? <i className="fa-light fa-eye"></i> : <i className="fa-sharp fa-light fa-eye-slash"></i>}
        </button>
      )}
    </div>
  );
};

export default InputText;
