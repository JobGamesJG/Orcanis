import "./styles/lisahockey.scss";

//HJK = Hijacked item
//JK = JobKTools added item

const observer = new MutationObserver(() => {
    Array.from(document.getElementsByClassName("el-row mt-1")).forEach((DataRow) => {
        // Check if the button already exists to prevent adding it multiple times
        if (!DataRow.querySelector("div.JK-wrapper")) {
            addHubDiv(DataRow);
        }

        if (!DataRow.querySelector("div.paidData-wrapper")) {
            addPaidData(DataRow.querySelector("div.JK-wrapper"));
        }

        if (!DataRow.querySelector("p.reorder-button")) {
            addReorderButton(DataRow.querySelector("div.JK-wrapper"));
        }

        //continous items//

        calcPaidData(DataRow.querySelector("div.JK-wrapper"));

        //finishers
        HJKReorder(DataRow);
    });
});

observer.observe(document.body, { subtree: true, childList: true, attributes: true });

//HJK reorder
const HJKReorder = (parent) => {
    if (parent.classList.contains("HJK")) return;

    //Hijack css//
    parent.classList.add("HJK");

    //reorder
    const container = parent;
    const children = Array.from(container.children);

    const reorder = children[2];
    const target = children[1]; // The second element (you want to insert before this)

    if (reorder && target) {
        container.insertBefore(reorder, target);
    }
};

//main div
const addHubDiv = (parent) => {
    const div = document.createElement("div");
    div.className = "JK-wrapper JK";

    parent.appendChild(div);
};

const addReorderButton = (parent) => {
    const button = document.createElement("p");
    button.className = "reorder-button JK button";
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
    let tbody = document.querySelector(".el-table__body tbody");
    let rows = Array.from(tbody.querySelectorAll("tr.el-table__row"));

    if (!Array.from(rows[0].children)[7]) return;

    let uitbetaald = 0;

    rows.forEach((row) => {
        let isPaid = Array.from(row.children);

        if (isPaid[7].textContent == "Nee") {
            let amount = isPaid[4].textContent.replace("€", "").replace(",", ".");

            uitbetaald += Number(amount);
        }
    });

    if (parent.querySelector("a").innerText.replace("€", "").replace(" ", "") == "loading...") {
        parent.querySelector("a").innerText = ` € ${uitbetaald.toFixed(2).replace(".", ",")}`;
    } else if (
        parent.querySelector("a").innerText.replace("€", "").replace(" ", "") !=
        uitbetaald.toFixed(2).replace(".", ",")
    ) {
        parent.querySelector("a").innerText = ` € ${uitbetaald.toFixed(2).replace(".", ",")}`;
    }
};

const addPaidData = (parent) => {
    const wrapper = document.createElement("div");
    wrapper.className = "paidData-wrapper JK";

    const text = document.createElement("p");
    text.innerText = "Nog niet betaald: ";
    wrapper.appendChild(text);

    const data = document.createElement("a");
    data.innerText = "loading...";
    wrapper.appendChild(data);

    parent.appendChild(wrapper);
};
