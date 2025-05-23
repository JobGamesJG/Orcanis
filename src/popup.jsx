import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import appConfig from "../public/config.json";

import "./styles/popup.scss";

const root = ReactDOM.createRoot(document.getElementById("react-target"));

const Popup = () => {
    const [hostname, setHostname] = useState("");
    const [supported, setSupported] = useState(false);

    const [active, setActive] = useState(false);

    useEffect(() => {
        // Query the active tab in the current window
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                const supported = new URL(tabs[0].url);
                setHostname(supported.hostname); // Extract hostname

                appConfig.supported_sites.forEach((site) => {
                    if (site.hostname == supported.hostname) {
                        setSupported(true);
                    }
                });
            }
        });
    }, []);

    document.documentElement.style.setProperty("--sups", appConfig.supported_sites.length);

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
            <div className={`popup-sites ${active ? "active" : ""}`}>
                <div className="popup-sites-header">
                    <h1>Supported Sites</h1>
                    <FontAwesomeIcon icon={faChevronDown} onClick={() => setActive(!active)} />
                </div>
                <div className="popup-supportedSites">
                    {appConfig.supported_sites.map((site, key) => (
                        <p key={key}>{site.hostname}</p>
                    ))}
                </div>
            </div>
            <div className="popup-footer">
                <p onClick={() => window.open("https://jobgamesjg.xyz/")}>About me</p>
                <i>●</i>
                <p>info</p>
            </div>
        </>
    );
};

root.render(<Popup />);
