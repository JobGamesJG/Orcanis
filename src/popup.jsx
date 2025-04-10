import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import appConfig from "../public/config.json";

import "./styles/popup.scss";

const root = ReactDOM.createRoot(document.getElementById("react-target"));

const Popup = () => {
    const [hostname, setHostname] = useState("");
    const [supported, setSupported] = useState(false);

    useEffect(() => {
        // Query the active tab in the current window
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                const url = new URL(tabs[0].url);
                setHostname(url.hostname); // Extract hostname

                appConfig.supported_sites.forEach((site) => {
                    if (url.hostname == site.hostname) {
                        setSupported(true);
                    } else {
                        setSupported(false);
                    }
                });
            }
        });
    }, []);

    return (
        <>
            <div className="hostname-wrapper">
                {supported ? (
                    <FontAwesomeIcon icon={faCircleCheck} />
                ) : (
                    <FontAwesomeIcon className="x" icon={faCircleXmark} />
                )}
                <p id="url">{hostname || "Loading.."}</p>
            </div>
            <div className="main-wrapper">
                <p>Welcome to </p>
                <h1>JobK Tools</h1>
            </div>
        </>
    );
};

root.render(<Popup />);
