<script>
    export let nedBetalingsPlan;
    let paymentObjects = [
        {
            restgjeld: 2018271.1989743472,
            dato: "2020-06-01",
            innbetaling: -44925.04372965079,
            gebyr: 30.0,
            renter: 3581828.4264359963,
            total: 3536933.3827063455,
        },
        {
            restgjeld: 1958178.1468799855,
            dato: "2020-07-01",
            innbetaling: 60093.052094361745,
            gebyr: 30.0,
            renter: 3476810.330611984,
            total: 3536933.3827063455,
        },
        {
            restgjeld: 1975571.6785184876,
            dato: "2020-08-01",
            innbetaling: -17393.531638502143,
            gebyr: 30.0,
            renter: 3554296.9143448477,
            total: 3536933.3827063455,
        },
        {
            restgjeld: 2024536.2783617852,
            dato: "2020-09-01",
            innbetaling: -48964.59984329762,
            gebyr: 30.0,
            renter: 3585867.982549643,
            total: 3536933.3827063455,
        },
        {
            restgjeld: 1975235.8753164802,
            dato: "2020-10-01",
            innbetaling: 49300.40304530505,
            gebyr: 30.0,
            renter: 3487602.9796610405,
            total: 3536933.3827063455,
        },
        {
            restgjeld: 2023590.9574370803,
            dato: "2020-11-01",
            innbetaling: -48355.08212060016,
            gebyr: 30.0,
            renter: 3585258.4648269457,
            total: 3536933.3827063455,
        },
        {
            restgjeld: 1972662.0806968487,
            dato: "2020-12-01",
            innbetaling: 50928.876740231644,
            gebyr: 30.0,
            renter: 3485974.505966114,
            total: 3536933.3827063455,
        },
        {
            restgjeld: 2016345.4580038246,
            dato: "2021-01-01",
            innbetaling: -43683.37730697589,
            gebyr: 30.0,
            renter: 3580586.7600133214,
            total: 3536933.3827063455,
        },
        {
            restgjeld: 2155437.1246871315,
            dato: "2021-02-01",
            innbetaling: -139091.66668330692,
            gebyr: 30.0,
            renter: 3675995.0493896524,
            total: 3536933.3827063455,
        },
        {
            restgjeld: 1966643.2430768837,
            dato: "2021-03-01",
            innbetaling: 188793.88161024777,
            gebyr: 30.0,
            renter: 3348109.5010960978,
            total: 3536933.3827063455,
        },
        {
            restgjeld: 2015122.9090785156,
            dato: "2021-04-01",
            innbetaling: -48479.66600163188,
            gebyr: 30.0,
            renter: 3585383.0487079774,
            total: 3536933.3827063455,
        },
        {
            restgjeld: 1964682.842908781,
            dato: "2021-05-01",
            innbetaling: 50440.06616973458,
            gebyr: 30.0,
            renter: 3486463.316536611,
            total: 3536933.3827063455,
        },
        {
            restgjeld: 2009588.507598206,
            dato: "2021-06-01",
            innbetaling: -44905.66468942491,
            gebyr: 30.0,
            renter: 3581809.0473957704,
            total: 3536933.3827063455,
        },
    ];
</script>

<table class="u-full-width">
    <thead>
        <tr>
            <th>Dato</th>
            <th>Restgjeld</th>
            <th>Innbetaling</th>
            <th>Gebyr</th>
            <th>Renter</th>
            <th>Total</th>
        </tr>
    </thead>

    {#each paymentObjects as payment}
        <tr style="font-size: 100%">
            <td>{payment.dato}</td>
            <td>{Math.ceil(payment.restgjeld)}kr</td>
            <td>{Math.ceil(payment.innbetaling)}kr</td>
            <td>{Math.ceil(payment.gebyr)}kr</td>
            <td>{Math.ceil(payment.renter)}kr</td>
            <td>{Math.ceil(payment.total)}kr</td>
        </tr>
    {/each}
    <tbody />
</table>
