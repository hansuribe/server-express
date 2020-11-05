<script>
  let years = 15;
  let loanAmount = 100000;
  let interestRateInput = 250;

  $: interestRate = interestRateInput / 100;
  $: totalPayments = years * 12;
  $: monthlyInterestRate = interestRate / 100 / 12;
  $: monthlyPayment =
    (loanAmount *
      Math.pow(1 + monthlyInterestRate, totalPayments) *
      monthlyInterestRate) /
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
  $: totalPaid = monthlyPayment * totalPayments;
  $: interestPaid = totalPaid - loanAmount;
  $: loanAmountWithSpacing = add_spacing_to_number(loanAmount);

  //Adds spacing to large integers
  const add_spacing_to_number = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
</script>

<style>
  .forms {
    background: #f8f4e5;
    padding: 25px 50px;
    max-width: 50%;
    border: 2px solid black;
    box-shadow: 15px 15px 1px #ffa580, 15px 15px 1px 2px black;
  }

  @media only screen and (max-width: 1111px) {
    .forms {
      max-width: 100%;
    }
  }

  .outputs {
    text-align: center;
    border: 1px solid;
    padding: 10px;
  }

  .button {
    border: 3px solid;
    margin: 5px;
  }

  input[type="number"]:focus {
    background-color: #ffe0ba;
  }

  input[type="range"] {
    width: 100%;
    margin: 7.6px 0;
    background-color: transparent;
    -webkit-appearance: none;
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    background: rgba(255, 212, 160, 0.2);
    border: 0.3px solid rgba(1, 0, 1, 0.3);
    border-radius: 25px;
    width: 100%;
    height: 7.8px;
    cursor: pointer;
  }

  input[type="range"]::-webkit-slider-thumb {
    margin-top: -7.9px;
    width: 12px;
    height: 23px;
    background: #f9fafc;
    border: 1.9px solid #000000;
    border-radius: 50px;
    cursor: pointer;
    -webkit-appearance: none;
  }

  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #ffe0ba;
  }

  input[type="range"]::-moz-range-track {
    background: rgba(255, 212, 160, 0.2);
    border: 0.3px solid rgba(1, 0, 1, 0.3);
    border-radius: 25px;
    width: 100%;
    height: 7.8px;
    cursor: pointer;
  }

  input[type="range"]::-moz-range-thumb {
    width: 12px;
    height: 23px;
    background: #f9fafc;
    border: 1.9px solid #000000;
    border-radius: 50px;
    cursor: pointer;
  }

  input[type="range"]::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 8.6px 0;
    color: transparent;
    width: 100%;
    height: 7.8px;
    cursor: pointer;
  }

  input[type="range"]::-ms-fill-lower {
    background: #ffc886;
    border: 0.3px solid rgba(1, 0, 1, 0.3);
    border-radius: 50px;
  }

  input[type="range"]::-ms-fill-upper {
    background: rgba(255, 212, 160, 0.2);
    border: 0.3px solid rgba(1, 0, 1, 0.3);
    border-radius: 50px;
  }

  input[type="range"]:focus::-ms-fill-lower {
    background: rgba(255, 212, 160, 0.2);
  }

  input[type="range"]:focus::-ms-fill-upper {
    background: #ffe0ba;
  }
</style>

<main class="container forms">
  <div class="row">
    <h2>Nedbetalings Kalkulator</h2>
  </div>

  <div class="row">
    <div class="columns six">
      <label>Ønsket lånebeløp
        <input
          bind:value={loanAmount}
          class="u-full-width"
          type="range"
          min="1"
          max={10000 * 100} />
      </label>
    </div>
    <div class="columns six">
      <label>Lånesum
        <input
          style="z-index: 1; font-size: 20px"
          bind:value={loanAmount}
          class="u-full-width"
          type="number"
          step="50000"
          min="1" />
      </label>
      <div id="container" style="position: relative;" />
    </div>
  </div>

  <div class="row">
    <div class="columns six">
      <label>Nedbetalingstisd
        <input
          bind:value={years}
          class="u-full-width"
          type="range"
          min="1"
          max="35" />
      </label>
    </div>
    <div class="columns six outputs"><b>{years} År</b></div>
  </div>

  <div class="row">
    <div class="columns six">
      <label>Nominell Rente
        <input
          bind:value={interestRateInput}
          class="u-full-width"
          type="range"
          min="1"
          max="1000"
          id="interest-slider" />
      </label>
    </div>
    <div class="columns six outputs"><b>{interestRate} %</b></div>
  </div>

  <div>
    <h2>Oversikt</h2>
    <div class="row outputs" style="margin: 5px">
      <div class="columns">
        Total Kostnad:
        {add_spacing_to_number(Math.round((totalPaid + Number.EPSILON) * 100) / 100)}
        kr
      </div>
    </div>

    <div class="row outputs" style="margin: 5px">
      <div class="columns ">
        Terminbeløp:
        {add_spacing_to_number(Math.round((monthlyPayment + Number.EPSILON) * 100) / 100)}
        kr
      </div>
    </div>

    <div class="row outputs" style="margin: 5px">
      <div class="columns ">
        Renter:
        {add_spacing_to_number(Math.round((interestPaid + Number.EPSILON) * 100) / 100)}
        kr
      </div>
    </div>
  </div>

  <br />

  <h2>Nedbetalingsplan</h2>
  <div class="row"><button class="columns ">Kalkuler</button></div>
</main>
