<script>
    import Table from "./Table.svelte";

    let showTable = false;

    let downpaymentPlan = "";
    const API_URL =
        "https://visningsrom.stacc.com/dd_server_laaneberegning/rest/laaneberegning/v1/nedbetalingsplan";

    //Props recieved form parent component (UserInput) before being passed to POST request
    export let loanAmount;
    export let interestRate;
    export let years;
    export let loanFee;

    //Increment a datestring's day, month or year by 1 and returns the result as a string.
    const incrementDate = (dateString, whatToIncrement = "date") => {
        //Split dateString
        var splitDate = dateString.split("-");

        //Construct date object
        var dt = new Date(
            parseInt(splitDate[0], 10), // year
            parseInt(splitDate[1], 10 - 1), // month (starts with 0)
            parseInt(splitDate[2], 10) // date
        );

        if (whatToIncrement === "date") {
            dt.setDate(dt.getDate() + 1);
        }
        if (whatToIncrement == "month") {
            dt.setMonth(dt.getMonth() + 1);
        }
        if (whatToIncrement == "year") {
            dt.setFullYear(dt.getFullYear() + 1);
        }

        splitDate[0] = dt.getFullYear();

        splitDate[1] = "" + dt.getMonth();
        if (splitDate[1].length < 2) {
            //Concatenate "0" if month is represented with  1 digit.
            splitDate[1] = "0" + splitDate[1];
        }

        splitDate[2] = "" + dt.getDate();
        if (splitDate[2].length < 2) {
            //Concatenate "0" if date is 1 digit.
            splitDate[2] = "0" + splitDate[2];
        }

        return splitDate.join("-");
    };

    //Get today's date in the form a string accepted by the API. addYears will increase the year by X.
    const getTodaysDateString = (addYears = 0) => {
        let today = new Date();
        let date = today.getDate();
        let month = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        //Append "0" to date if single digit
        if (date.toString().length == 1) {
            date = "0" + date;
        }

        return `${yyyy + addYears || yyyy}-${month}-${date}`;
    };

    async function postLoan() {
        showTable = showTable ? false : true;

        if (showTable) {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            let raw = JSON.stringify({
                laanebelop: loanAmount,
                nominellRente: interestRate,
                terminGebyr: loanFee,
                utlopsDato: getTodaysDateString(years),
                saldoDato: incrementDate(getTodaysDateString(), "month"),
                datoForsteInnbetaling: getTodaysDateString(0, 1),
                ukjentVerdi: "TERMINBELOP",
            });
            console.log(JSON.parse(raw));

            let requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            };

            fetch(API_URL, requestOptions)
                .then((response) => response.text())
                .then((result) => (downpaymentPlan = result))
                .then((result) => console.log(JSON.parse(result)))
                .catch((error) => console.log("error", error));
        }
    }
</script>

<div>
    <button type="button" on:click={postLoan}>
        {showTable ? 'Skjul Nedbetalingsplan' : 'Vis Nedbetalingsplan'}
    </button>

    {#if showTable}
        <Table />
    {/if}
</div>
