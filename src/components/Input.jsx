import { useState } from "react"
import { formatter } from "../util/investment"

export default function Input({ label, handleUpdatedValue, tag, initialValue }) {
    const [ value, setValue ] = useState(initialValue)

    function handleValueChange(event) {
        const newValue = Number(event.target.value) // Convert the value to a number
        setValue(newValue)
        handleUpdatedValue(tag, newValue) // Pass the number to the parent
    }

    return (
        <div>
            <label>{label}</label>
            <input 
                type="number"
                required
                value={value}
                onChange={handleValueChange}
            />
        </div>
    )
}
