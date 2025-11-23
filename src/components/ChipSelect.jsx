export default function ChipSelect({ label, name, options, value, onChange }) {
    return (
        <fieldset className="chip-select">
            <legend>{label}</legend>

            <div className="chip-select-options">
                {options.map(option => (
                    <label 
                        style={{ background: value === option ? "#5264A6" : "#3B4877" }}
                        className="chip-select-option"
                        key={option}>
                            <input
                                type="radio"
                                name={name}
                                value={option}
                                checked={value === option}
                                onChange={() => onChange(option)}
                            />
                            {option}
                    </label>
                ))}
            </div>

        </fieldset>
    )
}