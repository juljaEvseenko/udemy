import { useState } from "react"
import { Dropdown } from "../../elements/Dropdown"

export const DropdownPage = () => {
    const [value, setTerm] = useState(null);
    const onChange = (optionData) => {
        setTerm(optionData);
    };

    const data = [
        {
            id:'111',
            label: 'Spicy',
            value: 'spicy'
        },
        {
            id:'222',
            label: 'Middle',
            value: 'middle'
        },
        {
            id:'333',
            label: 'Extra spicy',
            value: 'extra_spicy'
        },
    ];

    return <div className="flex">
        <Dropdown 
            data = {data}
            value = {value}
            onChange={onChange}
        />
    </div>
}