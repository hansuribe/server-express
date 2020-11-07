<script>
  //Variables
  let years = 15;
  let loanAmount = 100000;
  let interestRateInput = 250;

  //Reactive Variables
  $: interestRate = interestRateInput / 100;
  $: totalPayments = years * 12;
  $: monthlyInterestRate = interestRate / 100 / 12;
  $: monthlyPayment = (loanAmount * Math.pow(1 + monthlyInterestRate, totalPayments) * monthlyInterestRate) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
  $: totalPaid = monthlyPayment * totalPayments;
  $: interestPaid = totalPaid - loanAmount;


  //Returns readable large integers, e.g: 10000 -> "10 000"
  const formatPrettyNumber = (largeInt) => {
    return largeInt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
</script>

<style>
  .section {}
</style>

<main>
  <div class="container forms section">
    <div class="row">
      <h2>Nedbetalings <b>Kalkulator</b></h2>
      <p>Med nedbetalings kalkulatoren kan du enkelt beregne kostnadene for ditt lån, og lagre din egen
        nedbetalingsplan.</p>
    </div>

    <div class="row">
      <div class="columns six">
        <label>Ønsket lånebeløp
          <input bind:value={loanAmount} class="u-full-width" type="range" min="1" />
        </label>
      </div>
      <div class="columns six">
        <label>Lånesum
          <input bind:value={loanAmount} class="u-full-width" type="number" step="50000" min="1" />
        </label>
        <div id="container" style="position: relative;" />
      </div>
    </div>

    <div class="row">
      <div class="columns six ">
        <label>Nedbetalingstid
          <div style="position: absolute;
    left: 35px;"></div><input bind:value={years} class="u-full-width" type="range" min="1" max="35" />
        </label>
      </div>
      <div class="columns six outputs"><b>{years} År</b></div>
    </div>

    <div class="row">
      <div class="columns six">
        <label>Nominell Rente
          <input bind:value={interestRateInput} class="u-full-width" type="range" min="1" max="1000"
            id="interest-slider" />
        </label>
      </div>
      <div class="columns six outputs"><b>{interestRate} %</b></div>
    </div>

    <h2>Oversikt</h2>
    <div class="row outputs" style="margin: 5px">
      <div class="columns">
        Total Kostnad:
        {formatPrettyNumber(Math.round((totalPaid + Number.EPSILON) * 100) / 100)}
        kr
      </div>
    </div>

    <div class="row outputs" style="margin: 5px">
      <div class="columns ">
        Terminbeløp:
        {formatPrettyNumber(Math.round((monthlyPayment + Number.EPSILON) * 100) / 100)}
        kr
      </div>
    </div>

    <div class="row outputs" style="margin: 5px">
      <div class="columns ">
        Renter:
        {formatPrettyNumber(Math.round((interestPaid + Number.EPSILON) * 100) / 100)}
        kr
      </div>

    </div>
    <br>
    <button class="">Vis Nedbetalingsplan</button>

  </div>


</main>
