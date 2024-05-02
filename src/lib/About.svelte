
<p>
	We're a small team that loves to create software for the community. With complementing experiences in software development and user experience design, we're excited to bring you some of our best work.
</p>
<div id="about-founders-grid">
	<a href="https://l-yc.me/" target="_blank" class="about-founder">
		<img src="./logos/yuechen.jpg" alt="Yue Chen"/>
		<h3>Yue Chen</h3>
		<span>Co-Founder</span>
		<br/>
		<span class="link">
				<svg class="inline-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd" />
				</svg>
				l-yc.me
		</span>
	</a>
	<a href="https://wern.cc/" target="_blank" class="about-founder">
		<img src="./logos/wern.jpg" alt="Wern"/>
		<h3>Wern</h3>
		<span>Co-Founder</span>
		<br/>
		<span class="link">
				<svg class="inline-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd" />
				</svg>
				wern.cc
		</span>
	</a>
</div>
<p id="contactPrompt">Feel free to reach us via <a href="https://support.wern.cc/contact">Wern Central Support</a> if you have any queries.</p>
<style lang="scss">
	#about-founders-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		grid-gap: 16px;
		margin: 16px auto;
		max-width: 400px;
		align-items: center;
	}

	.about-founder {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		padding: 16px;
		text-align: center;
		@include card-style-interactive;
		img {
			width: 100px;
			height: 100px;
			border-radius: 50%;
			margin: 16px;
		}
		h3 {
			margin: 0;
			padding: 0;
		}
	}

	#contactPrompt {
		transition: opacity 0.5s ease-in-out;
	}
</style>
