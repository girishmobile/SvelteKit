import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		author: 'Girish Chauhan',
	}
});

export default app;