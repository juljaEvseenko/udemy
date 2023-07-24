import { useState } from "react"
import { Modal } from "../../elements/Modal";
import { Button } from "../../elements/Button";

export const ModalPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
        setIsVisible(true);
    }
    const onClose = () => {
        setIsVisible(false);
    }

    return <div className=" ">
        <Button success onClick={handleClick}> Hello there1</Button>
        {isVisible && <Modal onClose={onClose} actionBar={<>
            <Button warning onClick={onClose}> Decline</Button>
            <Button primary > Accept</Button>
        </>
        } >
            <p>modale conenr</p>
        </Modal>}

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula vulputate elit, ut commodo sem ornare quis. Aenean sit amet diam suscipit, tincidunt mi non, sagittis ligula. Etiam quis metus dolor. Duis eu orci eu nulla auctor vehicula eget ac arcu. Nam varius, dui non vestibulum ullamcorper, ex dui blandit eros, elementum molestie mauris enim vulputate elit. Etiam molestie lobortis lectus in iaculis. Donec venenatis nulla ac molestie laoreet. Pellentesque libero massa, molestie a convallis sit amet, interdum at dui.

        Aliquam imperdiet blandit mauris, sit amet egestas risus ultrices vitae. Pellentesque pretium ut odio et porta. Etiam laoreet mauris et nunc ornare, sit amet dictum erat interdum. Suspendisse dapibus diam sem, sed dapibus urna laoreet sit amet. Quisque sed orci velit. Etiam ex nibh, tincidunt non lacinia non, ultricies et urna. In dignissim magna eget eros vehicula, ac condimentum urna imperdiet.

        Maecenas aliquam nisl vitae erat euismod, id placerat justo blandit. Nam molestie blandit tempus. Phasellus quam diam, egestas eu scelerisque nec, ornare eget tortor. Pellentesque blandit orci sed felis gravida luctus. Morbi eu justo nisi. Nulla varius sapien eu diam eleifend accumsan. Sed semper augue sed justo tempor eleifend. Vivamus sed consectetur erat. Sed velit urna, finibus eu purus vel, fringilla ullamcorper urna. Phasellus volutpat vulputate purus quis imperdiet.

        Cras aliquet ac turpis id ullamcorper. Quisque massa lectus, blandit vel mauris aliquam, imperdiet sollicitudin nisl. Quisque sed velit in leo finibus commodo. Integer imperdiet luctus magna nec pulvinar. Donec semper posuere felis in tincidunt. Aenean elit enim, lobortis et sem nec, laoreet dignissim magna. Aliquam rutrum risus enim, id dignissim neque tempor ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent consequat risus ut tincidunt ultricies. Nunc a mauris vehicula, tempor ipsum ullamcorper, elementum velit. Vivamus finibus blandit tellus quis ullamcorper.

        Maecenas dictum at eros sed placerat. Sed eleifend volutpat ipsum sit amet dapibus. Cras aliquam pharetra augue, in consectetur risus. Sed luctus ante ex. Nunc elementum lorem id lectus molestie, sed vulputate turpis bibendum. Donec quam magna, interdum volutpat urna sed, luctus auctor augue. Integer suscipit venenatis nibh, quis iaculis felis dictum ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vel lorem non elit elementum luctus nec quis libero. Integer in massa ac odio blandit tincidunt. Morbi nunc libero, tincidunt at libero eu, venenatis vulputate libero. Sed malesuada leo est.
    </div>
}