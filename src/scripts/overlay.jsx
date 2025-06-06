import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/calander.scss";

const Overlay = () => {
    const [active, setActive] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div id="OR" className={`Orcanis-Overlay ${active ? "active" : ""}`}>
            <a
                id="topBtn"
                onClick={() =>
                    document
                        .querySelector("div.el-row.mt-1")
                        .scrollIntoView({ behavior: "smooth", block: "center" })
                }>
                <FontAwesomeIcon icon={faArrowUp} />
            </a>

            <div className={`calendar-wrapper ${active ? "" : "deactive"}`}>
                <a onClick={() => setActive(!active)}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </a>
                <Calendar onChange={setSelectedDate} value={selectedDate} />
            </div>
        </div>
    );
};

export default Overlay;
