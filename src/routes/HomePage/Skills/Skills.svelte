<script>
	import { onMount } from 'svelte';
	import Marquee from 'svelte-fast-marquee';

	let skills = $state([]);

	let images_api = 'https://image-server-mu.vercel.app/serve_all_images';

	$effect(() => {
		fetch(images_api)
			.then((res) => res.json())
			.then((data) => {
				skills = data;
				console.log(data);
			})
			.catch((error) => {
				console.error(error);
			});
	});

	let expertise = [
		'Web Development',
		'Mobile App Development',
		'Artificial Intelligence',
		'Cloud Computing',
		'UI/UX Design',
		'Software Engineering',
		'Cyber security'
	];
</script>

<br /><br />
<main>
	<h2 class="display-4 mb-4" style="color: yellowgreen;">Our Expertise ⚙️</h2>
	<p>
		We are a team of tech enthusiasts with a diverse range of skills and expertise. Our members come
		from different backgrounds and have a wide variety of interests, which allows us to tackle a
		broad spectrum of projects and challenges. Here are some of the key areas we specialize in:
	</p>

	<div id="skills">
		{#each expertise as data}
			<p><i class="fa-solid fa-circle-check" style="color: teal;"></i>&nbsp;&nbsp;{data}</p>
		{/each}
	</div>
	<div>
		<h2 class="display-4 mb-4" style="color: yellowgreen;">Tools 🧰</h2>
		{#await skills}
			<p>loading...</p>
		{:then skills}
			<!-- Multiple items -->
			<div class="scroll-container gradient-edges pause-on-hover">
				<div class="scroll-text scroll-multiple">
					<!-- svelte-ignore a11y_distracting_elements -->
					<Marquee speed={80}>
						{#each skills as skill}
							<img src={skill.url} alt={skill.name} />
						{/each}
					</Marquee>
				</div>
			</div>
		{:catch error}
			<p>{error.message}</p>
		{/await}
	</div>
	<br />
	<p>
		Whether you need a website, a mobile app, or a custom software solution, we have the skills and
		expertise to bring your ideas to life. Our team is dedicated to delivering high-quality tech
		solutions that meet your needs and exceed your expectations. Let us help you turn your vision
		into reality!
	</p>
</main>

<style>
	p {
		font-size: larger;
	}
	img {
		width: 4rem;
		height: auto;
		margin: 16px;
	}

	#skills {
		padding-left: 20px;
	}

	#skills p {
		font-size: 1.5cap;
	}

	/* Basic scrolling container */
	.scroll-container {
		overflow: hidden;
		position: relative;
		width: 100%;
	}

	@keyframes scrollText {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(-100%);
		}
	}

	/* Smooth pause on hover */
	.pause-on-hover .scroll-text {
		animation-play-state: running;
	}

	.pause-on-hover:hover .scroll-text {
		animation-play-state: paused;
	}

	/* Multiple items */
	.scroll-multiple {
		display: flex;
		gap: 20px;
	}

	/* Gradient fade edges */
	.gradient-edges {
		-webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
		mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
	}
</style>
