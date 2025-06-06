import "../styles/lisahockey.scss";

import React, { useEffect } from "react";
import Overlay from "./overlay.jsx";
import { createRoot } from "react-dom/client";

let root = "";

//HOR = Hijacked item
//OR = Orcanis added item

const parseDate = (input) => {
    const monthMap = {
        jan: "01",
        feb: "02",
        mrt: "03",
        apr: "04",
        mei: "05",
        jun: "06",
        jul: "07",
        aug: "08",
        sep: "09",
        okt: "10",
        nov: "11",
        dec: "12",
        january: "01",
        february: "02",
        march: "03",
        april: "04",
        may: "05",
        june: "06",
        july: "07",
        august: "08",
        september: "09",
        october: "10",
        november: "11",
        december: "12",
    };

    const parts = input.trim().split(" ");

    const day = parts[1];
    const month = monthMap[parts[2].toLowerCase()];
    const year = parts[3];

    if (!month) {
        throw new Error("Invalid month abbreviation");
    }

    const monthIndex = parseInt(month, 10) - 1;

    return [day, month, year, new Date(year, monthIndex, day)];
};

const observer = new MutationObserver(() => {
    const dataBar = document.querySelector("div.el-row.mt-1");
    if (!dataBar) return;

    addORWrapper(dataBar);

    const orcanisWrapper = dataBar.querySelector("div.Orcanis-wrapper");
    if (!orcanisWrapper) return;

    addPaidData(orcanisWrapper);
    addReorderButton(orcanisWrapper);
    addAgenda(orcanisWrapper);

    calcPaidData(orcanisWrapper);
    addToAgenda();
});

observer.observe(document.body, { subtree: true, childList: true, attributes: true });

//adds main wrapper
const addORWrapper = (parent) => {
    if (parent.querySelector("div.Orcanis-wrapper")) return;

    const wrapper = document.createElement("div");
    wrapper.className = "Orcanis-wrapper";
    wrapper.id = "root";

    parent.appendChild(wrapper);
    parent.id = "HOR";

    //reorder
    const container = parent;
    const children = Array.from(container.children);

    const reorder = children[2];
    const target = children[1];

    if (reorder && target) {
        container.insertBefore(reorder, target);
    }
};

//adds the reorder dates button
const addReorderButton = (parent) => {
    if (parent.querySelector("p.reorder-button")) return;

    const button = document.createElement("p");
    button.className = "reorder-button JK button";
    button.id = "OR";
    button.innerText = "Reorder";
    button.addEventListener("click", async () => {
        reorderByDateNewOld();
    });

    parent.appendChild(button);
};

//reorder function
const reorderByDateNewOld = () => {
    const tbody = document.querySelector(".el-table__body tbody");
    const rows = Array.from(tbody.querySelectorAll("tr.el-table__row"));

    rows.sort((rowA, rowB) => {
        const dateA = getDateFromRow(rowA);
        const dateB = getDateFromRow(rowB);
        return dateB - dateA;
    });

    rows.forEach((row) => tbody.appendChild(row));

    function getDateFromRow(row) {
        const dateElement = row.querySelector("td .cell p strong");

        return parseDate(dateElement.innerText)[3];
    }
};

//paid data
const addPaidData = (parent) => {
    if (parent.querySelector("div.Orcanis-paidData")) return;

    const wrapper = document.createElement("div");
    wrapper.className = "Orcanis-paidData";
    wrapper.id = "OR";

    const totalNotPaid = document.createElement("p");
    totalNotPaid.innerText = "Totaal niet uitbetaald: ";
    wrapper.appendChild(totalNotPaid);

    const totalNotPaidData = document.createElement("a");
    totalNotPaidData.innerText = "loading...";
    totalNotPaidData.className = "Total-Not-Paid";
    totalNotPaid.appendChild(totalNotPaidData);

    const nextMonth = document.createElement("p");
    nextMonth.innerText = "Volgende maand: ";
    wrapper.appendChild(nextMonth);

    const nextMonthData = document.createElement("a");
    nextMonthData.className = "Next-Month";
    nextMonthData.innerText = "loading...";
    nextMonth.appendChild(nextMonthData);

    parent.appendChild(wrapper);
};

const calcPaidData = (parent) => {
    const tbody = document.querySelector(".el-table__body tbody");
    const rows = Array.from(tbody.querySelectorAll("tr.el-table__row"));
    if (!Array.from(rows[0].children)[7]) return;

    const totalNotPaid = parent.querySelector("A.Total-Not-Paid");
    const nextMonth = parent.querySelector("A.Next-Month");
    if (!totalNotPaid || !nextMonth) return;

    const currentDate = new Date();

    let notPaid = 0;
    let nextPaid = 0;

    rows.forEach((row) => {
        const rowItems = Array.from(row.children);
        const date = row.querySelector("td .cell p strong").innerText;

        if (rowItems[7].textContent == "Nee") {
            const amount = Number(rowItems[4].textContent.replace("€", "").replace(",", "."));

            notPaid += amount;
        }

        if (
            parseDate(date)[2] == currentDate.getFullYear() &&
            parseDate(date)[1] == currentDate.getMonth() - 1
        ) {
            const amount = Number(rowItems[4].textContent.replace("€", "").replace(",", "."));

            nextPaid += amount;
        }
    });

    if (
        totalNotPaid.innerText.replace("€", "").replace(" ", "") !=
        notPaid.toFixed(2).replace(".", ",")
    ) {
        totalNotPaid.innerText = ` € ${notPaid.toFixed(2).replace(".", ",")}`;
    }

    if (
        nextMonth.innerText.replace("€", "").replace(" ", "") !=
        nextPaid.toFixed(2).replace(".", ",")
    ) {
        nextMonth.innerText = ` € ${nextPaid.toFixed(2).replace(".", ",")}`;
    }
};

//agenda
const addAgenda = (parent) => {
    if (parent.querySelector("div.Orcanis-Overlay")) return;

    const container = document.getElementById("root");

    if (container) {
        if (root == "") {
            root = createRoot(container);
        }

        root.render(<Overlay />);
    }
};

const addToAgenda = () => {
    const reactCalendar = document.querySelector("div.react-calendar");
    if (!reactCalendar) return;

    const tbody = document.querySelector(".el-table__body tbody");
    const rows = Array.from(tbody.querySelectorAll("tr.el-table__row"));
    if (!Array.from(rows[0])) return;

    const activeDayDate = reactCalendar.querySelector(
        "div.react-calendar__viewContainer div div div div.react-calendar__month-view__days button.react-calendar__tile.react-calendar__tile--active.react-calendar__tile--range.react-calendar__tile--rangeStart.react-calendar__tile--rangeEnd.react-calendar__tile--rangeBothEnds.react-calendar__month-view__days__day",
    );

    const agendaMonthYear = () => {
        const date = parseDate(
            "mon 11 " +
                reactCalendar.querySelector(
                    "div.react-calendar__navigation button.react-calendar__navigation__label span",
                ).innerText,
        );

        return [date[1], date[2]];
    };

    const dayDates = document.getElementsByClassName(
        "react-calendar__tile react-calendar__month-view__days__day",
    );

    Array.from(dayDates).forEach((dayDate) => {
        dayDate.addEventListener("click", async () => {
            rows.forEach((row) => {
                const listDate = row.querySelector("td .cell p strong");

                if (
                    parseDate(listDate.innerText)[2] == agendaMonthYear()[1] &&
                    parseDate(listDate.innerText)[1] == agendaMonthYear()[0] &&
                    parseDate(listDate.innerText)[0] == dayDate.querySelector("abbr").innerText
                ) {
                    row.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            });
        });
    });

    rows.forEach((row) => {
        const listDate = row.querySelector("td .cell p strong");

        Array.from(dayDates).forEach((dayDate) => {
            if (
                parseDate(listDate.innerText)[2] == agendaMonthYear()[1] &&
                parseDate(listDate.innerText)[1] == agendaMonthYear()[0]
            ) {
                if (!dayDate.querySelector("i.marker")) {
                    if (
                        parseDate(listDate.innerText)[0] == dayDate.querySelector("abbr").innerText
                    ) {
                        const marker = document.createElement("i");
                        marker.className = "marker";

                        dayDate.appendChild(marker);
                    }
                }

                if (activeDayDate) {
                    if (activeDayDate.innerText == parseDate(listDate.innerText)[0]) {
                        row.style.backgroundColor = "#b3c6fa";
                    } else {
                        row.style.backgroundColor = "unset";
                    }
                }
            } else {
                row.style.backgroundColor = "unset";
            }
        });
    });
};
