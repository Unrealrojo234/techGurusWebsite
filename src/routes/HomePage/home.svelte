<script>
	import SlideShow from './SlideShow.svelte';
	import Contacts from '../Contacts/contacts.svelte';
	import Skills from './Skills/Skills.svelte';
	import Footer from '../Footer/footer.svelte';
</script>

<main class="container-fluid">
	<h1 id="title" class="text-center">Tech It</h1>
	<p>
		Welcome to Tech It, where passion meets technology! We are a team of university students united
		by a shared enthusiasm for innovation, creativity, and problem-solving in the tech world.
	</p>
	<p>
		Founded by a group of like-minded tech enthusiasts, Tech It was born out of late-night
		brainstorming sessions, collaborative coding marathons, and a deep curiosity for emerging
		technologies. What started as a passion project has evolved into a growing venture fueled by our
		commitment to creating impactful tech solutions.
	</p>
	<SlideShow />
	<Skills />
	<Contacts />
	<Footer />
</main>

<style>
	#title {
		font-size: 4rem;
		background: linear-gradient(45deg, yellow, teal, lime, gold);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text; /* For Firefox */
		color: transparent;
		font-weight: 600;
	}
	p {
		font-size: larger;
	}

	main {
		max-width: 68rem;
		padding-bottom: 2px;
	}
</style>
