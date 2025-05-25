import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import appConfig from "../public/config.json";

export const LisaFeatures = (props) => {
    //save data
    const [active, setActive] = useState(false);

    useEffect(() => {
        chrome.storage.sync.get(props.props.saveID, (result) => {
            setActive(result[props.props.saveID] ?? false);
        });
    }, []);

    const toggleSetting = () => {
        const newValue = !active;
        setActive(newValue);
        chrome.storage.sync.set({ [props.props.saveID]: newValue });
    };

    console.log(props.props.saveID);

    //set listlenght

    return (
        <>
            <div className={`popup-list Fea ${active ? "" : "deactive"}`}>
                <div className="popup-list-header button" onClick={toggleSetting}>
                    <h1>{props.props.title}</h1>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <div
                    className="popup-list-items"
                    style={{ height: `calc(${props.props.features.length} * 3.13rem)` }}>
                    {props.props.features?.map((item, key) => (
                        <p key={key}>{item.feature}</p>
                    ))}
                </div>
            </div>
        </>
    );
};
