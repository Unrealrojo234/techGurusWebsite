<script>
	import { onMount } from 'svelte';
	import Home from './HomePage/home.svelte';
	import Theme from './HomePage/Theme/theme.svelte';

	//getting the theme and setting appropriate color schemes
	let backgroundColor = $state('');
	let foregroundColor = $state('');

	function getSavedTheme() {
		try {
			const savedTheme = localStorage.getItem('theme');
			return savedTheme || 'light'; // Return saved theme or default to 'light'
		} catch (error) {
			console.warn('Error accessing localStorage:', error);
			return 'light'; // Return default theme if localStorage fails
		}
	}

	setInterval(() => {
		if (getSavedTheme()) {
			if (getSavedTheme() == 'dark') {
				backgroundColor = '#222428';
				foregroundColor = 'aliceblue';
			} else {
				backgroundColor = 'white';
				foregroundColor = 'black';
			}
		} else {
			backgroundColor = 'white';
			foregroundColor = 'black';
		}
	}, 1000);
</script>

<main style="color:{foregroundColor};background-color:{backgroundColor};">
	<Theme />
	<Home />
</main>
