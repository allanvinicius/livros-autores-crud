"use client";

import React from "react";
import ReactInputMask from "react-input-mask";

const maskList = {
  cep: "99999-999",
  phone: "(99) 99999-9999",
  date: "99/99/9999",
  number: "999",
};
type MaskItems = keyof typeof maskList;

type TextFieldProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  description: string;
  groupClassName?: string | undefined;
  type: MaskItems | "email" | "text" | "password";
};

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ type, description, ...props }, ref) => {
    const selectedMask = maskList[type as MaskItems] || "";
    const typeAttr = type === "password" ? "password" : "text";

    return (
      <div className="relative">
        <ReactInputMask
          mask={selectedMask}
          {...(props as ReactInputMask)}
          inputRef={ref}
          type={typeAttr}
          aria-label={description}
          title={description}
        />
      </div>
    );
  }
);

TextField.displayName = "TextField";
