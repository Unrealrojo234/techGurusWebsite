// src/lib/stores/theme.js
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
	const { subscribe, set, update } = writable('light');

	const detectBrowserTheme = () => {
		if (!browser) return 'light';
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	};

	return {
		subscribe,
		toggle: () => update((theme) => (theme === 'light' ? 'dark' : 'light')),
		initialize: () => {
			if (!browser) return;
			const storedTheme = localStorage.getItem('theme');
			set(storedTheme || detectBrowserTheme());
		}
	};
}

export const theme = createThemeStore();
