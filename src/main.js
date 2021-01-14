import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		todos: [
      { id: 0, todo: '' }
    ]
	}
});

export default app;