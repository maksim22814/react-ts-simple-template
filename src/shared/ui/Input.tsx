import { ChangeEvent, useState } from "react";

interface IInputProps {
    placeholder?: string;
    type?: "text" | "number" | "password";
    value?: string | number;
    defaultValue?: string | number;
    changeAction?: (value: string) => void;
}

function Input({
    placeholder = "Введите текст...",
    type = "text",
    value,
    defaultValue,
    changeAction = () => {},
}: IInputProps) {
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        changeAction(event.target.value);
    }

    return (
        <input
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={handleChange}
            defaultValue={defaultValue}
        />
    );
}
export default Input;
