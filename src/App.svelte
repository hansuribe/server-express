<script>
	import LoanCalculator from "./components/LoanCalculator.svelte";
	import DownPaymentPlan from "./components/DownPaymentPlan.svelte";
</script>

<style>
	* {
		font-family: "Work Sans", sans-serif;
	}

	.topNav {
		height: 5rem;

		width: 100%;
	}
</style>

<main>
	<header class="topNav" />
	<LoanCalculator class="forms" />
</main>
