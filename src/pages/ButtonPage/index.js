import { Button } from "../../elements/Button";

export const ButtonPage = () => {

  const handleClick = () => console.log('Click!');


  return <>
    <Button rounded plain onClick = {handleClick} className={'Hello'}> Hello there1</Button>
    <Button rounded outline primary  onClick = {handleClick}> Hello there1</Button>
    <Button outline secondary  onClick = {handleClick}> Hello there1</Button>
    <Button success  onClick = {handleClick}> Hello there1</Button>
    <Button warning  onClick = {handleClick}> Hello there1</Button>
  </>
}