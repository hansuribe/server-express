<script>
  let years = 15;
  let loanAmount = 100000;
  let interestRateInput = 200;

  $: interestRate = interestRateInput / 100;
  $: totalPayments = years * 12;
  $: monthlyInterestRate = interestRate / 100 / 12;
  $: monthlyPayment =
    (loanAmount * Math.pow(1 + monthlyInterestRate, totalPayments) * monthlyInterestRate) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
  $: totalPaid = monthlyPayment * totalPayments;
  $: interestPaid = totalPaid - loanAmount;
  $: loanAmountWithSpacing = add_spacing_to_number(loanAmount)

  //Adds spacing to large integers
  const add_spacing_to_number = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

</script>

<main class="container">
  <div class="row">
    <h1>Nedbetalings Kalkulator</h1>
  </div>

  <div class="row">
    <label>Fyll ut ønsket beløp</label>
    <div id="container" style="position: relative;">

      <input bind:value={loanAmount} class="u-full-width" min="1" type="text">

      <input style="z-index: 1;" bind:value={loanAmountWithSpacing} class="u-full-width" min="1" type="number">
    </div>
  </div>

  <div class="row">
    <div class="columns six">
      <label>Nedbetalingstid</label>
      <input bind:value={years} class="u-full-width" type="range" min=1 max=35>
    </div>
    <div class="columns six outputs">
      <b>{years} År</b>
    </div>
  </div>

  <div class="row">
    <div class="columns six">
      <label>Nominell Rente</label>
      <input bind:value={interestRateInput} class="u-full-width" type="range" min=1 max=1000 id="interest-slider">
    </div>
    <div class="columns six outputs">
      <b>{interestRate} %</b>
    </div>
  </div>

  <h1>Oversikt</h1>
  <div class="row outputs">
    <div class="columns">Total Kostnad: {add_spacing_to_number(Math.round((totalPaid + Number.EPSILON) * 100)
      /
      100)} kr</div>
  </div>

  <div class="row outputs">
    <div class="columns ">Terminbeløp: {add_spacing_to_number(Math.round((monthlyPayment + Number.EPSILON) *
      100) / 100)} kr</div>
  </div>



  <div class="row outputs">
    <div class="columns ">Renter: {add_spacing_to_number(Math.round((interestPaid + Number.EPSILON) * 100)
      / 100)} kr</div>
  </div>

  <br>

  <h1>Nedbetalingsplan</h1>
  <div class="row">
    <button class="columns ">Kalkuler</button>
  </div>
</main>

<style>
  .outputs {
    font-size: 20px;
    margin-top: 15px;
    text-align: center;
    border: 1px solid;
    padding: 10px;

  }

  .button {
    border: 3px solid;
    margin: 5px;
  }

  input[type=range] {
    width: 100%;
    margin: 7.6px 0;
    background-color: transparent;
    -webkit-appearance: none;
  }

  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    background: rgba(255, 212, 160, 0.2);
    border: 0.3px solid rgba(1, 0, 1, 0.3);
    border-radius: 25px;
    width: 100%;
    height: 7.8px;
    cursor: pointer;
  }

  input[type=range]::-webkit-slider-thumb {
    margin-top: -7.9px;
    width: 12px;
    height: 23px;
    background: #f9fafc;
    border: 1.9px solid #000000;
    border-radius: 50px;
    cursor: pointer;
    -webkit-appearance: none;
  }

  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #ffe0ba;
  }

  input[type=range]::-moz-range-track {
    background: rgba(255, 212, 160, 0.2);
    border: 0.3px solid rgba(1, 0, 1, 0.3);
    border-radius: 25px;
    width: 100%;
    height: 7.8px;
    cursor: pointer;
  }

  input[type=range]::-moz-range-thumb {
    width: 12px;
    height: 23px;
    background: #f9fafc;
    border: 1.9px solid #000000;
    border-radius: 50px;
    cursor: pointer;
  }

  input[type=range]::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 8.6px 0;
    color: transparent;
    width: 100%;
    height: 7.8px;
    cursor: pointer;
  }

  input[type=range]::-ms-fill-lower {
    background: #ffc886;
    border: 0.3px solid rgba(1, 0, 1, 0.3);
    border-radius: 50px;
  }

  input[type=range]::-ms-fill-upper {
    background: rgba(255, 212, 160, 0.2);
    border: 0.3px solid rgba(1, 0, 1, 0.3);
    border-radius: 50px;
  }

  input[type=range]::-ms-thumb {
    width: 12px;
    height: 23px;
    background: #f9fafc;
    border: 1.9px solid #000000;
    border-radius: 50px;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }

  input[type=range]:focus::-ms-fill-lower {
    background: rgba(255, 212, 160, 0.2);
  }

  input[type=range]:focus::-ms-fill-upper {
    background: #ffe0ba;
  }

  /*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
how to remove the virtical space around the range input in IE*/
  @supports (-ms-ime-align:auto) {

    /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
    input[type=range] {
      margin: 0;
      /*Edge starts the margin from the thumb, not the track as other browsers do*/
    }
  }
</style>
