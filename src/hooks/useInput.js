import { useState, useEffect } from "react";

const Input = ({
    type,
    id,
    className,
    label,
    placeholder,
    value,
    updateValue
}) => (<label aria-label={label}htmlFor={id}>
    <input onChange={(e) => {
        updateValue(e.target.value);
    }} type={type} value={value} className={className} placeholder={placeholder}/>
</label>);

const useInput = (props) => {
    const [value, updateValue] = useState(props.initialValue);

    useEffect(() => {
        props.cb && props.cb(value);
    }, [value])

    return [
        value,
        <Input
            value={value}
            updateValue={updateValue}
            {...props}
        />,
        updateValue
    ];
};

export default useInput;