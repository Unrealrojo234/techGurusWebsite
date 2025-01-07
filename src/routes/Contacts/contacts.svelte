<script>
	import { fade } from 'svelte/transition';

	import Swal from 'sweetalert2';

	let name = '';
	let email = '';
	let message = '';

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
								name="message"
								placeholder="Write message"
								class="form-control custom-textarea"
							></textarea>
						</div>

						<button type="submit" class="btn w-100 mt-3 custom-button">
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
		background-color: #0c0c0c;
		color: aliceblue;
		border: 1px solid teal;
	}

	.custom-input:focus,
	.custom-textarea:focus {
		background-color: #0c0c0c;
		border-color: teal;
		box-shadow: none;
		color: aliceblue;
	}

	.custom-textarea {
		min-height: 200px;
		resize: vertical;
	}

	.custom-button {
		border: 1px solid teal;
		color: white;
		transition: background-color 0.2s;
	}

	.custom-button:hover {
		background-color: rgba(0, 128, 128, 0.2);
		border-color: teal;
		color: white;
	}

	.custom-button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
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
