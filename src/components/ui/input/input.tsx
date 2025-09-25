import { twMerge } from "tailwind-merge";
import type {Dispatch, SetStateAction} from "react";

interface InputProps {
  placeholder?: string;
  className?: string;
  classNameLabel?: string;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
}

const Input = ({ placeholder, className, classNameLabel, value, setValue }: InputProps) => {
  return (
    <label className={classNameLabel}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue ? setValue(e.target.value) : undefined}
        className={twMerge(
          "bg-white border border-[#d9d9d9] rounded-[2px] py-2 text-base/[24px] pl-[35px] bg-no-repeat bg-[left_11px_center] w-full",
          className,
        )}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
