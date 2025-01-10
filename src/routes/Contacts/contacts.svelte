<script>
	import { fade } from 'svelte/transition';

	import Swal from 'sweetalert2';

	let name = $state('');
	let email = $state('');
	let message = $state('');

	const sendEmail = (e) => {
		e.preventDefault();

		fetch(`/api/email?name=${name}&msg=${message}&email=${email}`)
			.then((res) => res.json())
			.then((data) => {
				//console.log(data);
				Swal.fire({
					title: 'Delivered',
					text: 'Message delivered successfully',
					icon: 'success'
				});

				//clearing the input fields
				name = message = email = '';
			})
			.catch((err) => {
				console.error(err);
				Swal.fire({
					title: 'Error',
					text: 'An error occured, please retry again!',
					icon: 'error'
				});
			});
	};

	function getSavedTheme() {
		try {
			const savedTheme = localStorage.getItem('theme');
			return savedTheme || 'light'; // Return saved theme or default to 'light'
		} catch (error) {
			console.warn('Error accessing localStorage:', error);
			return 'light'; // Return default theme if localStorage fails
		}
	}

	let foregroundColor = $state('');

	setInterval(() => {
		if (getSavedTheme() == 'dark') {
			foregroundColor = 'aliceblue';
		} else {
			foregroundColor = 'black';
		}
	}, 1000);
</script>

<section class="py-5">
	<div>
		<div class="row align-items-center">
			<!-- Form Area -->
			<div>
				<h1 class="display-4 mb-4" style="color: yellowgreen;">Let's connect</h1>

				<form onsubmit={sendEmail} class="p-2 rounded">
					<div>
						<div class="row g-3">
							<div class="col-sm-6">
								<input
									name="name"
									style="color: {foregroundColor};"
									type="text"
									placeholder="Your name"
									bind:value={name}
									required
									class="form-control custom-input"
								/>
							</div>

							<div class="col-sm-6">
								<input
									bind:value={email}
									required
									style="color: {foregroundColor};"
									name="email"
									type="email"
									placeholder="Email address"
									class="form-control custom-input"
								/>
							</div>
						</div>

						<div class="mt-3">
							<textarea
								bind:value={message}
								required
								style="color: {foregroundColor};"
								name="message"
								placeholder="Write message"
								class="form-control custom-textarea"
							></textarea>
						</div>

						<button type="submit" class="btn w-100 mt-3 btn-outline-success">
							Send
							<i class="fa-sharp fa-solid fa-paper-plane fa-2xs ms-2"></i>
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

<style>
	.custom-input,
	.custom-textarea {
		background: none;
		border: 1px solid teal;
	}

	.custom-input:focus,
	.custom-textarea:focus {
		background: none;
		border-color: teal;
		box-shadow: none;
	}

	.custom-textarea {
		min-height: 200px;
		resize: vertical;
	}

	:global(.alert) {
		background-color: transparent;
		border: 1px solid;
	}

	:global(.alert-success) {
		border-color: #198754;
		color: #198754;
	}

	:global(.alert-danger) {
		border-color: #dc3545;
		color: #dc3545;
	}

	form {
		border: 1px solid teal;
	}
</style>
