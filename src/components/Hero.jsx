import React from "react";

const Hero = () => {
	return (
		<section id="hero">
			<div className="hero-container">
				<div
					id="heroCarousel"
					className="carousel slide carousel-fade"
					data-bs-ride="carousel"
					data-bs-interval="5000"
				>
					<ol
						id="hero-carousel-indicators"
						className="carousel-indicators"
					></ol>

					<div className="carousel-inner" role="listbox">
						<div
							className="carousel-item active"
							style="background-image: url(assets/img/hero-carousel/1.jpg)"
						>
							<div className="carousel-container">
								<div className="container">
									<h2 className="animate__animated animate__fadeInDown">
										Nayani Brothers
									</h2>
									<p className="animate__animated animate__fadeInUp">
										We're In The Business Of Manufacturing,
										Trading & Import-Export Diamond
									</p>
									<a
										href="#contact"
										className="btn-get-started scrollto animate__animated animate__fadeInUp"
									>
										Contact Us
									</a>
								</div>
							</div>
						</div>

						<div
							className="carousel-item"
							style="background-image: url(assets/img/hero-carousel/2.jpg)"
						>
							<div className="carousel-container">
								<div className="container">
									<h2 className="animate__animated animate__fadeInDown">
										Nayani Brothers
									</h2>
									<p className="animate__animated animate__fadeInUp">
										We're In The Business Of Manufacturing,
										Trading & Import-Export Diamond
									</p>
									<a
										href="#contact"
										className="btn-get-started scrollto animate__animated animate__fadeInUp"
									>
										Contact Us
									</a>
								</div>
							</div>
						</div>

						<div
							className="carousel-item"
							style="background-image: url(assets/img/hero-carousel/3.jpg)"
						>
							<div className="carousel-container">
								<div className="container">
									<h2 className="animate__animated animate__fadeInDown">
										Nayani Brothers
									</h2>
									<p className="animate__animated animate__fadeInUp">
										We're In The Business Of Manufacturing,
										Trading & Import-Export Diamond
									</p>
									<a
										href="#contact"
										className="btn-get-started scrollto animate__animated animate__fadeInUp"
									>
										Contact Us
									</a>
								</div>
							</div>
						</div>
					</div>

					<a
						className="carousel-control-prev"
						href="#heroCarousel"
						role="button"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon bi bi-chevron-left"
							aria-hidden="true"
						></span>
					</a>

					<a
						className="carousel-control-next"
						href="#heroCarousel"
						role="button"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon bi bi-chevron-right"
							aria-hidden="true"
						></span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
