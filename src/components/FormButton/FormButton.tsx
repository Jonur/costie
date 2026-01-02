import type { ButtonHTMLAttributes } from "react";
import { SuperSwitch, Option } from "react-super-switch";

import { c } from "../../utils";

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: "chevron-right" | "chevron-left" | "square" | "play";
  iconPosition?: "left" | "right";
  label: string;
  variant?: "primary" | "secondary";
}

const FormButton = ({
  icon,
  iconPosition = "right",
  label,
  variant,
  type = "button",
  ...buttonProps
}: FormButtonProps) => {
  const iconClasses = variant === "primary" || !variant ? "fill-white" : "fill-black";

  return (
    <button
      {...buttonProps}
      type={type}
      className={c(
        "rounded-md py-2 font-medium transition-colors cursor-pointer flex",
        {
          "bg-black text-white hover:bg-black/90 disabled:bg-black/40 disabled:cursor-auto":
            variant === "primary" || !variant,
          "bg-white text-black border border-lightgrey hover:bg-lightgrey/10": variant === "secondary",
          "px-5": !icon,
          "flex-row-reverse flex items-center pl-3 pr-6": icon && iconPosition === "left",
          "flex-row flex items-center pl-6 pr-3": icon && iconPosition === "right",
        },
        buttonProps.className
      )}
    >
      <span>{label}</span>
      <SuperSwitch optional>
        <Option condition={icon === "chevron-right"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            className={iconClasses}
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
          </svg>
        </Option>
        <Option condition={icon === "chevron-left"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            className={iconClasses}
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
          </svg>
        </Option>
        <Option condition={icon === "square"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="16px"
            viewBox="0 0 24 24"
            width="16px"
            className={iconClasses}
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <g>
                <rect height="18" width="18" x="3" y="3" />
              </g>
            </g>
          </svg>
        </Option>
        <Option condition={icon === "play"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 0 24 24"
            width="20px"
            className={iconClasses}
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M8 5v14l11-7z" />
          </svg>
        </Option>
      </SuperSwitch>
    </button>
  );
};

export default FormButton;
