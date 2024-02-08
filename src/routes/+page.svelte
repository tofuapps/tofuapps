<script>
	import About from '$lib/About.svelte';
	import Products from '$lib/Products.svelte';
	import { onMount } from 'svelte';

	let logo, container, center, contents;
	function updateLogoImage() {
		if (logo.complete) {
			logo.style.background = 'none';
		} else {
			logo.onload = () => {logo.style.background = 'none'};
		}
	}
	function preventAnimationReplay() {
		container.style.opacity = 1;
		container.style.animation = "none";
		center.style.opacity = 1;
		center.style.animation = "none";
		contents.style.opacity = 1;
		contents.style.animation = "none";
	}
	let handler = () => {
		updateLogoImage();
		setTimeout(() => {
			let scrollDistance = document.documentElement.scrollTop;
			if (scrollDistance > 20) {
				preventAnimationReplay();
			}
		}, 50);
	};
	onMount(handler);
</script>
<div id="landing-container" bind:this={container}>
	<div id="landing-center" bind:this={center}>
		<div id="landing-logo-container">
			<img id="landing-logo" src="/logo.png" alt="Tofu Apps Logo"
										  on:contextmenu|preventDefault={()=>{}}
										  on:touchstart|preventDefault={()=>{}}
										  bind:this={logo}
										  />
		</div>
		<h1>
			<span style="--i:1">T</span><!--
			--><span style="--i:2">o</span><!--
			--><span style="--i:3">f</span><!--
			--><span style="--i:4">u</span><!--
			--><span style="--i:5">&nbsp;</span><!--
			--><span style="--i:6">A</span><!--
			--><span style="--i:7">p</span><!--
			--><span style="--i:8">p</span><!--
			--><span style="--i:9">s</span>
		</h1>
		<span>Developing Delicious Software</span>
	</div>
</div>
<div class="contents center" bind:this={contents}>
	<div id="products" class="section">
		<h2>Products</h2>
		<Products limit="3" />
		<a href="/products">Browse All...</a>
	</div>
	<div id="about" class="section">
		<h2>About Us</h2>
		<About />
	</div>
</div>
<style lang="scss">

	@keyframes tofu-slidein {
		0% {opacity: 0; transform: translateY(20px);}
		100% {opacity: 1; transform: translateY(0);}
	}

	@keyframes tofu-anim {
		50%, 80%, 100% {transform: none;}
		40% {transform: translateY(-15px) scaleY(1.05) rotate(-0.8deg);}
		60% {transform: translateY(-7px) scaleY(1.02) rotate(0.5deg);}
	}

	@keyframes tofu-hover-1 {
		100% {transform: translateY(-20px) scaleY(1.1) rotate(1deg);}
	}

	@keyframes tofu-hover-2 {
		100% {transform: translateY(-1px) scaleY(0.99) rotate(-0.2deg);}
	}

	@keyframes tofu-breathe {
		20%, 80% {transform: none;}
		50% {transform: translateY(-4px) scaleY(1.03);}
	}

	#landing-container {
		height: 50vh;
		max-height: 512px;
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		transition: height 0.1s ease;
		opacity: 0;
		animation: tofu-slidein 0.5s ease-out forwards;
	}

	#landing-center {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		padding: 16px;
		text-align: center;
		transition: margin 0.1s ease, padding 0.1s ease, transform 0.5s ease;
		& > h1 {
			margin: 0;
			padding: 0;
			opacity: 0;
			font-size: 2rem;
			transition: font-size 0.1s ease-in-out;
			animation: tofu-slidein 0.5s ease-out 1.3s forwards;
			& > span {
				position: relative;
				display: inline-block;
				margin: 0;
				animation: wave-text 1s ease-in-out;
				animation-delay: calc(.1s * var(--i) + 1.5s);
				&:first-child {
					/*offsets 'T' in Tofu towards the 'o'*/
					margin-right: -0.1em;
				}
				@keyframes wave-text {
					0%,40%,100% {
						transform: translateY(0)
					}
					20% {
						transform: translateY(-5px)
					}
				}
			}
		}
		& > span {
			opacity: 0;
			animation: tofu-slidein 0.5s ease-out 1.3s forwards;
		}
	}

	img#landing-logo {
		width: 100%;
		height: 100%;
		object-fit: contain;
		background: url(/logo-preview.png);
		background-repeat: no-repeat;
		background-size: contain;
		transition: transform 0.5s ease;
		user-select: none;
		&:hover {
			transform: translateY(-10px) scaleX(1.01) scaleY(1.03) rotate(1deg);
		}
		&:active {
			transform: translateY(-5px) scaleX(0.995) scaleY(0.99) rotate(-1deg) rotateY(0.5deg);
		}
	}
	#landing-logo-container {
		max-width: 572px;
		max-height: 324px;
		margin: -16px 0;
		transition: width 0.1s ease-in-out, height 0.1s ease-in-out, opacity 0.1s ease-in-out;
		transform: none;
		animation: tofu-anim 1.5s ease-out 0.5s forwards, tofu-breathe 5s ease-in-out 2s infinite forwards;
		will-change: transform;
	}
	@media (max-height: 600px) {
		#landing-container {
			height: auto;
		}
		#landing-center {
			width: 100%;
			height: 100%;
			padding-top: 0;
			padding-bottom: 0;
			margin: 0;
			overflow: hidden;
			h1 {
				font-size: 1.5rem;
			}
		}
		#landing-logo-container {
			height: 45vh;
		}

	}

	@media (max-height: 450px) {
		#landing-container {
			margin: 0 auto;
			padding: 0;
			height: calc(100vh - $top-distance);
		}
		#landing-logo-container {
			height: 60vh;
		}
	}


	@media (max-width: 500px) and (min-height: 601px) {
		#landing-container {
			height: auto;
		}
		#landing-center {
			width: 100%;
			height: 100%;
			margin: 0;
			overflow: hidden;
		}
		#landing-logo-container {
			width: 130vw;
		}
	}

	@media (min-width: 501px) and (min-height: 601px) {
		#landing-logo-container {
			height: 45vh;
		}
	}

	.contents {
		display: block;
		max-width: 768px;
		margin: 0 auto;
		opacity: 0;
		animation: tofu-slidein 0.5s ease-out 1.6s forwards;
	}
	.section {
		padding-top: 32px;
	}

</style>
