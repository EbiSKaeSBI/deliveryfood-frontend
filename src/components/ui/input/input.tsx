import { twMerge } from "tailwind-merge";

interface InputProps {
  placeholder?: string;
  className?: string;
  classNameLabel?: string;
  value?: string;
  setValue?: (value: string) => void; // меняем тип на простую функцию
}

const Input = ({
                 placeholder,
                 className,
                 classNameLabel,
                 value,
                 setValue,
               }: InputProps) => {
  return (
      <label className={classNameLabel}>
        <input
            type="text"
            value={value}
            onChange={(e) => setValue?.(e.target.value)} // упрощаем вызов
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