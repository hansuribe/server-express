<script>
	import UserInput from "./components/UserInput.svelte";
	import TestAPI from "./components/TestAPI.svelte";
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
	<UserInput class="forms" />
	<TestAPI />
</main>
