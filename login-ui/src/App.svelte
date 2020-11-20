<script>
</script>

<style>
	main {
		width: 60%;
		height: 55%;
		border: 1px solid rgb(223, 222, 222);
		border-radius: 3px;
	}
	.flex-col {
		display: flex;
		flex-direction: column;
		padding: 20px;
	}
	.center {
		display: inline;
		text-align: center;
	}
	.login {
		background: blue;
		color: white;
		font-weight: bold;
		border: 0px solid;
		border-radius: 6px;
	}
	.new-account {
		background: green;
		color: white;
		font-weight: bold;
		border: 0px solid;
		border-radius: 6px;
		width: 44%;
		margin-left: 25%;
	}
	input {
		border: 0.3px solid black;
		border-radius: 6px;
	}
	input::after {
		border: 1px solid red;
	}
</style>

<main>
	<div class="flex-col">
		<input type="text" placeholder="Email address or phone number" />
		<input type="password" placeholder="Password" />
		<button class="login">Login</button>
	</div>

	<div class="flex-col">
		<span class="center"><a href="/">Forgotten password?</a></span>
	</div>
	<hr />
	<div class="flex-col">
		<button class="new-account">Create New Account</button>
	</div>
</main>
