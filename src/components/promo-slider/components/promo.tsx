import { twMerge } from "tailwind-merge";

interface PromoProps {
  text: string;
  title: string;
  subtitle: string;
  className?: string;
}

const Promo = ({ text, title, subtitle, className }: PromoProps) => {
  return (
    <section
      className={twMerge(
        "shadow-[0_7px_12px_rgba(158,158,163,0.1)] rounded-[10px] py-[68px] px-[70px] mb-[56px]",
        className,
      )}
    >
      <h1 className="not-italic font-bold text-[39px]/[46px] text-[#302c34]">
        {title} <br />
        {subtitle}
      </h1>
      <p className="not-italic font-normal text-2xl/[28px] text-[#302c34] max-w-[538px]">
        {text}
      </p>
    </section>
  );
};

export default Promo;
