<script>
    let foo = "baz";
    let bar = "qux";
    let result2 = null;
    const API_URL =
        "https://visningsrom.stacc.com/dd_server_laaneberegning/rest/laaneberegning/v1/nedbetalingsplan";
    const loanTest = {
        laanebelop: 2000000,
        nominellRente: 3,
        terminGebyr: 30,
        utlopsDato: "2045-01-01",
        saldoDato: "2020-01-01",
        datoForsteInnbetaling: "2020-02-01",
        ukjentVerdi: "TERMINBELOP",
    };
    function doPost() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
            laanebelop: 100,
            nominellRente: 3,
            terminGebyr: 30,
            utlopsDato: "2021-01-01",
            saldoDato: "2020-01-01",
            datoForsteInnbetaling: "2020-02-01",
            ukjentVerdi: "TERMINBELOP",
        });
        let requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };
        fetch(API_URL, requestOptions)
            .then((response) => response.text())
            .then((result) => (result2 = result))
            .catch((error) => console.log("error", error));
    }
</script>

<div>
    <input bind:value={foo} />
    <input bind:value={bar} />
    <button type="button" on:click={doPost}> Post it. </button>
    <p>Result:</p>
    <pre> {result2} </pre>
</div>
