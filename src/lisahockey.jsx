import "./styles/reorder.scss";

const observer = new MutationObserver(() => {
    Array.from(document.getElementsByClassName("el-row mt-1")).forEach((DataRow) => {
        // Check if the button already exists to prevent adding it multiple times

        if (!DataRow.querySelector("div.JK-wrapper")) {
            addHubDiv(DataRow);
        }

        const mainDiv = DataRow.querySelector("div.JK-wrapper");

        if (!DataRow.querySelector("button.reorder-button")) {
            addReorderButton(mainDiv);
        }

        if (!DataRow.querySelector("div.paidData-wrapper")) {
            addPaidData(mainDiv);
        }

        calcPaidData(mainDiv);
    });
});

observer.observe(document.body, { subtree: true, childList: true, attributes: true });

//main div
const addHubDiv = (parent) => {
    const div = document.createElement("div");
    div.className = "JK-wrapper JK";

    parent.appendChild(div);
};

const addReorderButton = (parent) => {
    const button = document.createElement("button");
    button.className = "reorder-button JK";
    button.innerText = "Reorder";
    button.addEventListener("click", async () => {
        reorderByDateNewOld();
    });

    parent.appendChild(button);
};

const reorderByDateNewOld = () => {
    let tbody = document.querySelector(".el-table__body tbody");
    let rows = Array.from(tbody.querySelectorAll("tr.el-table__row"));

    rows.sort((rowA, rowB) => {
        let dateA = getDateFromRow(rowA);
        let dateB = getDateFromRow(rowB);
        return dateB - dateA; // Ascending order
    });

    rows.forEach((row) => tbody.appendChild(row)); // Reorder rows in table

    function getDateFromRow(row) {
        let strongElement = row.querySelector("td .cell p strong");
        if (!strongElement) {
            console.error("Date not found in row:", row);
            return new Date(0); // Default date to prevent errors
        }

        let dateText = strongElement.innerText.trim();

        // Remove day abbreviations (ma, di, wo, do, vr, za, zo)
        dateText = dateText.replace(/\b(ma|di|wo|do|vr|za|zo)\b/gi, "").trim();

        // Convert date string to a valid Date object
        let parsedDate = parseDate(dateText);
        if (isNaN(parsedDate.getTime())) {
            console.error("Invalid date format:", dateText);
            return new Date(0);
        }

        return parsedDate;
    }

    function parseDate(dateString) {
        const months = {
            jan: 0,
            feb: 1,
            mrt: 2,
            apr: 3,
            mei: 4,
            jun: 5,
            jul: 6,
            aug: 7,
            sep: 8,
            okt: 9,
            nov: 10,
            dec: 11,
        };
        let parts = dateString.toLowerCase().match(/(\d{1,2})\s([a-z]{3})\s(\d{4})/);
        if (!parts || !months.hasOwnProperty(parts[2])) {
            console.error("Invalid date format:", dateString);
            return new Date(0);
        }
        return new Date(parts[3], months[parts[2]], parts[1]);
    }
};

//paid data
const calcPaidData = (parent) => {
    if (!document.querySelector("td.el-table_1_column_8.el-table__cell div span")) {
        return;
    }

    let tbody = document.querySelector(".el-table__body tbody");
    let rows = Array.from(tbody.querySelectorAll("tr.el-table__row"));

    let uitbetaald = 0;

    rows.forEach((row) => {
        let isPaid = row.querySelector(
            "td.el-table_1_column_8.el-table__cell div span",
        ).textContent;

        if (isPaid == "Nee") {
            let amount = row
                .querySelector("td.el-table_1_column_5.el-table__cell div span strong")
                .textContent.replace("€", "")
                .replace(",", ".");

            uitbetaald += Number(amount);
        }
    });

    if (parent.querySelector("a").innerText.replace("€", "").replace(" ", "") == "undefined") {
        console.log(" test");

        parent.querySelector("a").innerText = uitbetaald.toFixed(2);
    } else if (
        parent.querySelector("a").innerText.replace("€", "").replace(" ", "") !=
        uitbetaald.toFixed(2)
    ) {
        parent.querySelector("a").innerText = uitbetaald.toFixed(2);
    }

    return uitbetaald.toFixed(2);
};

const addPaidData = (parent) => {
    const wrapper = document.createElement("div");
    wrapper.className = "paidData-wrapper JK";

    const text = document.createElement("p");
    text.innerText = "Not paid yet: ";
    wrapper.appendChild(text);

    const data = document.createElement("a");
    data.innerText = ` € ${calcPaidData(wrapper)}`;
    wrapper.appendChild(data);

    parent.appendChild(wrapper);
};
