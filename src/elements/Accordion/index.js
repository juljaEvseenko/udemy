import { useState } from "react"
import { AccordionItem } from "./AccordionItem"

export const Accordion = ({ data }) => {
    const [expandedIndex, setIndex] = useState(-1);

    const handleEvent = (index) => {
        setIndex((curr) => {
            return curr === index ? -1 : index
        })
    };
    
    const itemsJSX = data.map(({ title, content, id }, index) => {
        return <AccordionItem
            key={id}
            handleEvent={() => handleEvent(index)}
            title={title}
            content={content}
            isOpen={index === expandedIndex}
        />
    });

    return (
        <div>{itemsJSX}</div>
    )
}