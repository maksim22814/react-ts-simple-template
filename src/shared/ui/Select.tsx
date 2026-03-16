import { ChangeEvent } from "react";

interface ISelectProps {
    options?: string[];
    value?: string | number;
    defaultValue?: string | number;
    changeAction?: (value: string) => void;
}

function Select({ options = [], changeAction = () => {}, value, defaultValue }: ISelectProps) {
    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        changeAction(event.target.value);
    }

    return (
        <select onChange={handleChange} defaultValue={defaultValue} value={value}>
            {options.map((option) => (
                <option>{option}</option>
            ))}
        </select>
    );
}
export default Select;
