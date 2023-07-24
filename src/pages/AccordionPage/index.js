import { Accordion } from "../../elements/Accordion"

export const AccordionPage = () => {
    const data = [
        {
            id:'111',
            title: 'title 1',
            content: 'lorem'
        },
        {
            id:'222',
            title: 'title 1',
            content: 'lorem 2'
        },
        {
            id:'333',
            title: 'title 1',
            content: 'lorem 3'
        },
    ]
    return <>
        <Accordion  data = {data}/>
    </>
}