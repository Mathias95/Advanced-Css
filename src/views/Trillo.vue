<template>
	<div class="trillo">
		<div class="container">
			<header class="main-header">
				<img src="../assets/img/logotrillo.png" alt="trillo logo" class="t-logo">

				<form action="#" class="search">
					<input type="text" class="search__input" placeholder="Search hotels">
					<button class="search__button"><svg class="search__icon"> <use xlink:href="../assets/img/sprite.svg#icon-magnifying-glass"></use></svg></button>
				</form>

				<nav class="user-nav">
					<div class="user-nav__icon-box">
						<svg class="user-nav__icon">
							<use xlink:href="../assets/img/sprite.svg#icon-bookmark"></use>
						</svg>
						<span class="user-nav__notification">7</span>
					</div>
					<div class="user-nav__icon-box">
						<svg class="user-nav__icon">
							<use xlink:href="../assets/img/sprite.svg#icon-chat"></use>
						</svg>
						<span class="user-nav__notification">13</span>
					</div>
					<div class="user-nav__user">
						<img src="../assets/img/user-3.jpg" alt="profile user" class="user-nav__user-photo">
						<span class="user-nav__user-name">Mathias</span>
					</div>
				</nav>
			</header>

			<div class="content">
				<nav class="sidebar">
					<ul class="side-nav">
						<li class="side-nav__item side-nav__item--active">
							<router-link to="#" class="side-nav__link">
								<svg class="side-nav__icon">
									<use xlink:href="../assets/img/sprite.svg#icon-home"></use>
								</svg>
								<span>Hotel</span>
							</router-link>
						</li>
						<li class="side-nav__item">
							<router-link to="#" class="side-nav__link">
								<svg class="side-nav__icon">
									<use xlink:href="../assets/img/sprite.svg#icon-aircraft-take-off"></use>
								</svg>
								<span>Flight</span>
							</router-link>
						</li>
						<li class="side-nav__item">
							<router-link to="#" class="side-nav__link">
								<svg class="side-nav__icon">
									<use xlink:href="../assets/img/sprite.svg#icon-key"></use>
								</svg>
								<span>Car rental</span>
							</router-link>
						</li>
						<li class="side-nav__item">
							<router-link to="#" class="side-nav__link">
								<svg class="side-nav__icon">
									<use xlink:href="../assets/img/sprite.svg#icon-map"></use>
								</svg>
								<span>Tours</span>
							</router-link>
						</li>
					</ul>
					<div class="side-nav__legal">
						&copy; 2019 by Trillo. All rights reserved.
					</div>
				</nav>

				<main class="hotel-view">
					<div class="gallery">
						<figure class="gallery__item"><img src="../assets/img/hotel-1.jpg" alt="Photo of hotel 1" class="gallery__photo"></figure>
						<figure class="gallery__item"><img src="../assets/img/hotel-2.jpg" alt="Photo of hotel 2" class="gallery__photo"></figure>
						<figure class="gallery__item"><img src="../assets/img/hotel-3.jpg" alt="Photo of hotel 3" class="gallery__photo"></figure>
					</div>
					<div class="overview">
						<h1 class="overview__heading">Hotel Las Palmas</h1>

						<div class="overview__stars">
							<svg class="overview__icon-star">
								<use xlink:href="../assets/img/sprite.svg#icon-star"></use>
							</svg>
							<svg class="overview__icon-star">
								<use xlink:href="../assets/img/sprite.svg#icon-star"></use>
							</svg>
							<svg class="overview__icon-star">
								<use xlink:href="../assets/img/sprite.svg#icon-star"></use>
							</svg>
							<svg class="overview__icon-star">
								<use xlink:href="../assets/img/sprite.svg#icon-star"></use>
							</svg>
							<svg class="overview__icon-star">
								<use xlink:href="../assets/img/sprite.svg#icon-star"></use>
							</svg>
						</div>

						<div class="overview__location">
							<svg class="overview__icon-location">
								<use xlink:href="../assets/img/sprite.svg#icon-location-pin"></use>
							</svg>
							<button class="btn-inline">Malaga, Spain</button>
						</div>
						
						<div class="overview__rating">
							<div class="overview__rating-avg">8.6</div>
							<div class="overview__rating-count">429 votes</div>
						</div>
					</div>

					<div class="detail">
						<div class="description">
							<p class="description__paragraph">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
							</p>
							<p class="description__paragraph">
								Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
							</p>
							<ul class="description__list">
								<li class="description__item">Close to the beach</li>
								<li class="description__item">Breakfast included</li>
								<li class="description__item">Free airport shuttle</li>
								<li class="description__item">Free wifi in all rooms</li>
								<li class="description__item">Airconditioning and heating</li>
								<li class="description__item">Pets are allowed</li>
								<li class="description__item">We speak all languages</li>
								<li class="description__item">Perfect for families</li>
							</ul>
							<div class="recommend">
								<p class="recommend__count">
									Lucy and 3 other friends recommend this hotel.
								</p>
								<div class="recommend__friends">
									<img src="../assets/img/user-3.jpg" alt="Friend 1" class="recommend__photo">
									<img src="../assets/img/user-4.jpg" alt="Friend 2" class="recommend__photo">
									<img src="../assets/img/user-5.jpg" alt="Friend 3" class="recommend__photo">
									<img src="../assets/img/user-6.jpg" alt="Friend 4" class="recommend__photo">
								</div>
							</div>
						</div>
						<div class="user-reviews">
							<figure class="review">
								<blockquote class="review__text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
								</blockquote>
								<figcaption class="review__user">
									<img src="../assets/img/user-1.jpg" alt="User 1" class="review__photo">
									<div class="review__user-box">
										<p class="review__user-name">Nick Smith</p>
										<p class="review__user-date">Feb 23rd, 2019</p>
									</div>
									<div class="review__rating">7.8</div>
								</figcaption>
							</figure>

							<figure class="review">
								<blockquote class="review__text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
								</blockquote>
								<figcaption class="review__user">
									<img src="../assets/img/user-2.jpg" alt="User 2" class="review__photo">
									<div class="review__user-box">
										<p class="review__user-name">Mary Thomas</p>
										<p class="review__user-date">Sep 13th, 2019</p>
									</div>
									<div class="review__rating">9.3</div>
								</figcaption>
							</figure>

							<button class="btn-inline">Show all <span>&rarr;</span></button>
						</div>
					</div>

					<div class="cta">
						<h2 class="cta__book-now">Good news! We have 4 free rooms for your selected dates!</h2>
						<router-link to="/">
							<button class="cta__btn">
								<span class="cta__btn--visible">Book now</span>
								<span class="cta__btn--hidden">Only 4 rooms left</span>
							</button>
						</router-link>
					</div>

				</main>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'trillo',
	components: {}
};
</script>

<style lang="sass">
	@import "@/assets/sass/2-Trillo/main.sass"
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600')
</style>