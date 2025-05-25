import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { LisaFeatures } from "./LisaFeatures.jsx";

import appConfig from "../public/config.json";

import "./styles/popup.scss";

const root = ReactDOM.createRoot(document.getElementById("react-target"));

const Popup = () => {
    const [hostname, setHostname] = useState("");
    const [supported, setSupported] = useState(false);

    //handle header
    useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                const supported = new URL(tabs[0].url);
                setHostname(supported.hostname);

                appConfig.supported_sites.forEach((site) => {
                    if (site.hostname == supported.hostname) {
                        setSupported(true);
                    }
                });
            }
        });
    }, []);

    //save data
    const [active, setActive] = useState(false);

    useEffect(() => {
        chrome.storage.sync.get(["isSupportedList"], (result) => {
            setActive(result.isSupportedList ?? false);
        });
    }, []);

    const toggleSetting = () => {
        const newValue = !active;
        setActive(newValue);
        chrome.storage.sync.set({ isSupportedList: newValue });
    };

    //set listlenght

    return (
        <>
            <div className="popup-hostname">
                <img src="../../icons/icon-512.png" />
                <h1>{hostname || "Loading.."}</h1>
                {supported ? (
                    <FontAwesomeIcon icon={faCircleCheck} />
                ) : (
                    <FontAwesomeIcon className="x" icon={faCircleXmark} />
                )}
            </div>
            {hostname == "mijn.lisahockey.nl" ? (
                <LisaFeatures props={appConfig.lisaFeatures} />
            ) : (
                ""
            )}
            <div className={`popup-list ${active ? "" : "deactive"}`}>
                <div className="popup-list-header button" onClick={toggleSetting}>
                    <h1>Supported Sites</h1>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <div
                    className="popup-list-items"
                    style={{ height: `calc(${appConfig.supported_sites.length} * 3.13rem)` }}>
                    {appConfig.supported_sites.map((site, key) => (
                        <p key={key}>{site.hostname}</p>
                    ))}
                </div>
            </div>
            <div className="popup-footer">
                <p className="button" onClick={() => window.open("https://jobgamesjg.xyz/")}>
                    About me
                </p>
                <i>●</i>
                <p className="button">info</p>
            </div>
        </>
    );
};

root.render(<Popup />);
