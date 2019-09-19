<template>
  <div class="home">

		<div class="navigation">
			<input type="checkbox" class="navigation__check-box" id="navi-toggle">
			<label for="navi-toggle" class="navigation__button">
				<span class="navigation__icon">&nbsp;</span>
			</label>

			<div class="navigation__background">&nbsp;</div>
			
			<nav class="navigation__nav">
				<ul class="navigation__list">
					<li class="navigation__item"><a href="#" class="navigation__link"><span class="navigation__number">01</span>About Natours</a></li>
					<li class="navigation__item"><a href="#" class="navigation__link"><span class="navigation__number">02</span>Your benifits</a></li>
					<li class="navigation__item"><a href="#" class="navigation__link"><span class="navigation__number">03</span>Popular tours</a></li>
					<li class="navigation__item"><a href="#" class="navigation__link"><span class="navigation__number">04</span>Stories</a></li>
					<li class="navigation__item"><a href="#" class="navigation__link"><span class="navigation__number">05</span>Book now</a></li>
				</ul>
			</nav>
		</div>

    <header class="header">
      <div class="header__logo-box">
        <router-link to="/">
          <img src="../assets/img/logo-white.png" alt="Logo" class="header__logo" />
        </router-link>
      </div>
      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">Outdoors</span>
          <span class="heading-primary--sub">Is where life happens</span>
        </h1>
        <router-link to="/Codepen" class="btn btn--white btn--animated">Discover our tours</router-link>
      </div>
    </header>
		
		<main>
			<section class="section-about">
				<div class="u-center-text u-margin-bottom-big">
					<h2 class="heading-secondary">
						Exciting tours for adenturous people
					</h2>
				</div>
				<div class="row">
					<div class="col-1-of-2">
						<h3 class="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
						<p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor voluptates doloremque! Accusantium ex quas veniam quos, vitae reprehenderit, deserunt temporibus laudantium!</p>

						<h3 class="heading-tertiary u-margin-bottom-small">Live adventues like you never have before</h3>
						<p class="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore temporibus nihil harum voluptatibus ducimus deleniti doloremque itaque repellendus.</p>

						<a href="#" class="btn-text">Learn more &rarr;</a>
					</div>
					<div class="col-1-of-2">
						<div class="composition">
							<img src="../assets/img/nat-1-large.jpg" alt="Photo 1" class="composition__photo composition__photo--p1">
							<img src="../assets/img/nat-2-large.jpg" alt="Photo 2" class="composition__photo composition__photo--p2">
							<img src="../assets/img/nat-3-large.jpg" alt="Photo 3" class="composition__photo composition__photo--p3">
						</div>
					</div>
				</div>
			</section>

			<section class="section-features">
				<div class="row">
					<div class="col-1-of-4">
						<div class="feature-box">
							<i class="feature-box__icon icon-basic-world"></i>
							<h3 class="heading-tertiary u-margin-bottom-small">Explore the world</h3>
							<p class="feature-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor voluptates doloremque!</p>
						</div>
					</div>
					<div class="col-1-of-4">
						<div class="feature-box">
							<i class="feature-box__icon icon-basic-compass"></i>
							<h3 class="heading-tertiary u-margin-bottom-small">Meet nature</h3>
							<p class="feature-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor voluptates doloremque!</p>
						</div>
					</div>
					<div class="col-1-of-4">
						<div class="feature-box">
							<i class="feature-box__icon icon-basic-map"></i>
							<h3 class="heading-tertiary u-margin-bottom-small">Find your way</h3>
							<p class="feature-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor voluptates doloremque!</p>
						</div>
					</div>
					<div class="col-1-of-4">
						<div class="feature-box">
							<i class="feature-box__icon icon-basic-heart"></i>
							<h3 class="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
							<p class="feature-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor voluptates doloremque!</p>
						</div>
					</div>
				</div>
			</section>

			<section class="section-tours" id="section-tours">
				<div class="u-center-text u-margin-bottom-big">
					<h2 class="heading-secondary">
						Most popular tours
					</h2>
				</div>
				<div class="row">
					<div class="col-1-of-3">
						<div class="card">
							<div class="card__side card__side--front">
								<div class="card__picture card__picture--1">&nbsp;</div>
								<h4 class="card__heading"><span class="card__heading-span card__heading-span--1">The Sea Explorer</span></h4>
								<div class="card__details">
									<ul>
										<li>3 day tour</li>
										<li>Up to 30 people</li>
										<li>2 tour guides</li>
										<li>Sleep in cozy hotels</li>
										<li>Difficulty: easy</li>
									</ul>
								</div>
							</div>
							<div class="card__side card__side--back card__side--back-1">
								<div class="card__cta">
									<div class="card__price-box">
										<p class="card__price-only">Only</p>
										<p class="card__price-value">$297</p>
									</div>
									<a href="#popup" class="btn btn--white">Book now!</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-1-of-3">
						<div class="card">
							<div class="card__side card__side--front">
								<div class="card__picture card__picture--2">&nbsp;</div>
								<h4 class="card__heading"><span class="card__heading-span card__heading-span--2">The forest hiker</span></h4>
								<div class="card__details">
									<ul>
										<li>7 day tour</li>
										<li>Up to 40 people</li>
										<li>6 tour guides</li>
										<li>Sleep in provided tents</li>
										<li>Difficulty: medium</li>
									</ul>
								</div>
							</div>
							<div class="card__side card__side--back card__side--back-2">
								<div class="card__cta">
									<div class="card__price-box">
										<p class="card__price-only">Only</p>
										<p class="card__price-value">$497</p>
									</div>
									<a href="#popup" class="btn btn--white">Book now!</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-1-of-3">
						<div class="card">
							<div class="card__side card__side--front">
								<div class="card__picture card__picture--3">&nbsp;</div>
								<h4 class="card__heading"><span class="card__heading-span card__heading-span--3">The snow adventure</span></h4>
								<div class="card__details">
									<ul>
										<li>5 day tour</li>
										<li>Up to 15 people</li>
										<li>3 tour guides</li>
										<li>Sleep in provided tents</li>
										<li>Difficulty: hard</li>
									</ul>
								</div>
							</div>
							<div class="card__side card__side--back card__side--back-3">
								<div class="card__cta">
									<div class="card__price-box">
										<p class="card__price-only">Only</p>
										<p class="card__price-value">$897</p>
									</div>
									<a href="#popup" class="btn btn--white">Book now!</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="u-center-text u-margin-top-huge">
					<a href="#" class="btn btn--green">Discover all tours</a>
				</div>
			</section>

			<section class="section-stories">
				<div class="bg-video">
					<video class="bg-video__content" autoplay muted loop>
						<source src="../assets/img/video.mp4" type="video/mp4">
						<source src="../assets/img/video.webm" type="video/webm">
						Your browser is not supported
					</video>
				</div>
				<div class="u-center-text u-margin-bottom-big">
					<h2 class="heading-secondary">
						We make people genuinely happy
					</h2>
				</div>
				<div class="row">
					<div class="story">
						<figure class="story__shape">
							<img class="story__img" src="../assets/img/nat-8.jpg" alt="person on tour">
							<figcaption class="story__caption">Mary Smith</figcaption>
						</figure>
						<div class="story__text">
							<h3 class="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, natus neque? Nulla minus voluptate perspiciatis blanditiis obcaecati asperiores quasi possimus alias sit voluptatem. Ratione, dicta iste est quaerat voluptatum corporis. Rerum, natus neque? Nulla minus voluptate.</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="story">
						<figure class="story__shape">
							<img class="story__img" src="../assets/img/nat-9.jpg" alt="person on tour">
							<figcaption class="story__caption">Jack Wilson</figcaption>
						</figure>
						<div class="story__text">
							<h3 class="heading-tertiary u-margin-bottom-small">Wow! My life is completely different now</h3>
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, natus neque? Nulla minus voluptate perspiciatis blanditiis obcaecati asperiores quasi possimus alias sit voluptatem. Ratione, dicta iste est quaerat voluptatum corporis. Rerum, natus neque? Nulla minus voluptate.</p>
						</div>
					</div>
				</div>
				<div class="u-center-text u-margin-top-huge">
					<a href="#" class="btn-text">Read all stories &rarr;</a>
				</div>
			</section>

			<section class="section-book">
				<div class="row">
					<div class="book">
						<div class="book__form">
							<form action="#" class="form">
								<div class="u-margin-bottom-medium">
									<h2 class="heading-secondary">
										Start booking now
									</h2>
								</div>
								<div class="form__group">
									<input type="text" class="form__input" id="name" placeholder="Full Name" required>
									<label for="name" class="form__label">Full name</label>
								</div>
								<div class="form__group">
									<input type="email" class="form__input" id="mail" placeholder="Full Name" required>
									<label for="email" class="form__label">Email adress</label>
								</div>
								<div class="form__group u-margin-bottom-medium">
									<div class="form__radio-group">
										<input class="form__radio-input" id="small" type="radio" name="size">
										<label class="form__radio-label" for="small">
											<span class="form__radio-button"></span>
											Small tour group
										</label>
									</div>
									<div class="form__radio-group">
										<input class="form__radio-input" id="large" type="radio" name="size">
										<label class="form__radio-label" for="large">
											<span class="form__radio-button"></span>
											Large tour group
										</label>
									</div>
								</div>
								<div class="form__group">
									<button class="btn btn--green" type="submit">Next step &rarr;</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</main>

		<footer class="footer">
			<div class="footer__logo-box">
				<img src="../assets/img/logo-green-2x.png" alt="Full logo" class="footer__logo">
			</div>
			<div class="row">
				<div class="col-1-of-2">
					<div class="footer__navigation">
						<ul class="footer__list">
							<li class="footer__item"><a href="#" class="footer__link">Company</a></li>
							<li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
							<li class="footer__item"><a href="#" class="footer__link">Carrers</a></li>
							<li class="footer__item"><a href="#" class="footer__link">Privacy</a></li>
							<li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
						</ul>
					</div>
				</div>
				<div class="col-1-of-2">
					<p class="footer__copyright">
						Build my <a href="#" class="footer__link">Theme template</a> for a online course <a href="#" class="footer__link">Advanced CSS and Sass</a>. Copyright &copy; by Mathias Jacobsen. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original autho, Jonas Schmedtmann, is of course highly appreciated.
					</p>
				</div>
			</div>
		</footer>

		<!--Popup element on click-->
		<div class="popup" id="popup">
			<div class="popup__content">
				<div class="popup__left">
					<img src="../assets/img/nat-8.jpg" class="popup__img" alt="Tour photo">
					<img src="../assets/img/nat-9.jpg" class="popup__img" alt="Tour photo">
				</div>
				<div class="popup__right">
					<a href="#section-tours" class="popup__close">&times;</a>
					<h2 class="heading-secondary u-margin-bottom-small">Start booking now</h2>
					<h3 class="heading-tertiary u-margin-bottom-small">Important &ndash; Please reads these terms before booking</h3>
					<p class="popup__text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In fermentum posuere urna nec. Tellus molestie nunc non blandit massa enim nec dui nunc. In hac habitasse platea dictumst quisque. Sem nulla pharetra diam sit amet nisl suscipit. Mi in nulla posuere sollicitudin aliquam. Adipiscing commodo elit at imperdiet dui accumsan. Eget mi proin sed libero enim sed faucibus turpis. Quis auctor elit sed vulputate mi sit. Vel elit scelerisque mauris pellentesque pulvinar. Amet mauris commodo quis imperdiet. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Ultrices in iaculis nunc sed augue lacus viverra vitae. Arcu dictum varius duis at consectetur lorem donec massa. Pretium quam vulputate dignissim suspendisse in est ante in. Ut porttitor leo a diam sollicitudin. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Egestas erat imperdiet sed euismod.
					</p>
					<a href="#" class="btn btn--green">Book now</a>
				</div>
			</div>
		</div>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {}
};
</script>

<style lang="sass">

</style>
