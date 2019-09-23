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