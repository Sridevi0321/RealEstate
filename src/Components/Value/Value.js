import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../Utils/accordion";
function Value() {
    const [className,setClassName] = useState(null);
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                <div className="v-left">
                    <div className="image-container">
                        <img src="main4.jpg" alt="" />
                    </div>

                </div>
                <div className="v-right flexColStart">
                    <span className="orangeText">Our Value</span>
                    <span className="primaryText">Value we give to you</span>
                    <span className="secondaryText">We always help you to find the right Property <br /> Best service
                        you can get is from us related to buying the best property that will
                        have great value in future</span>
                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {data.map((item, i) => {
                            return (
                                <AccordionItem
                                    className={`accordionItem ${className}`}
                                    key={i}
                                    uuid={i}
                                >
                                    <AccordionItemHeading>
                                        <AccordionItemButton className=" flexCenter accordionButton">
                                            <AccordionItemState>
                                                {({ expanded }) =>
                                                    expanded
                                                        ? setClassName("expanded")
                                                        : setClassName("collapsed")
                                                }
                                            </AccordionItemState>

                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">{item.heading}</span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                </div>

            </div>
        </section>
    )
}

export default Value
 