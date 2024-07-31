import React from "react";

const Main = () => {
	return (
		<main id="main">
			<div id="about" className="about-area area-padding">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-sm-12 col-xs-12">
							<div className="section-headline text-center">
								<h2>About NayaniBrothers</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-sm-6 col-xs-12">
							<div className="well-left">
								<div className="single-well">
									<a href="#">
										<img
											src="assets/img/about/1.jpg"
											alt=""
											style="border-radius: 5%"
										/>
									</a>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-sm-6 col-xs-12">
							<div className="well-middle">
								<div className="single-well">
									<a href="#">
										<h4 className="sec-head">
											Diamond Manufacturing
										</h4>
									</a>
									<p>
										We have Expertise to Shine Diamond Since
										1980 And Specializes in Manufacturing &
										Import-Export Diamond industries.
									</p>
									<ul>
										<li>
											<i className="bi bi-gem"></i>{" "}
											Diamond Polishing
										</li>
										<li>
											<i className="bi bi-gem"></i>{" "}
											Diamond Manufacturing
										</li>
										<li>
											<i className="bi bi-gem"></i>{" "}
											Diamond Import & Export
										</li>
										<li>
											<i className="bi bi-gem"></i>{" "}
											Diamond Trading
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="services" className="services-area area-padding">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-sm-12 col-xs-12">
							<div className="section-headline services-head text-center">
								<h2>Our Services</h2>
							</div>
						</div>
					</div>
					<div className="row text-center">
						<div className="col-md-4 col-sm-4 col-xs-12">
							<div className="about-move">
								<div className="services-details">
									<div className="single-services">
										<a
											className="services-icon"
											href="#"
											style="color: #3ec1d5"
										>
											<i className="bi bi-briefcase"></i>
										</a>
										<h4 style="color: #3ec1d5">
											Import - Export
										</h4>
										<p>
											We are Expertise in Diamond Import &
											Export Business Since 1999.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-4 col-xs-12">
							<div className="about-move">
								<div className="services-details">
									<div className="single-services">
										<a
											className="services-icon"
											href="#"
											style="color: #3ec1d5"
										>
											<i className="bi bi-gem"></i>
										</a>
										<h4 style="color: #3ec1d5">
											Polishing & Shining
										</h4>
										<p>
											We specialize in shining and
											polishing diamonds
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-4 col-xs-12">
							<div className=" about-move">
								<div className="services-details">
									<div className="single-services">
										<a
											className="services-icon"
											href="#"
											style="color: #3ec1d5"
										>
											<i className="bi bi-calendar4-week"></i>
										</a>
										<h4 style="color: #3ec1d5">
											24/7 Support
										</h4>
										<p>
											We are always ready for support to
											our clients 24/7 hours.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="suscribe-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs=12">
							<div className="suscribe-text text-center">
								<h3>Welcome to NayaniBrothers</h3>
								<a className="sus-btn" href="#contact">
									Contact US
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="contact" className="contact-area">
				<div className="contact-inner area-padding">
					<div className="contact-overly"></div>
					<div className="container ">
						<div className="row">
							<div className="col-md-12 col-sm-12 col-xs-12">
								<div className="section-headline text-center">
									<h2>Contact us</h2>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4">
								<div className="contact-icon text-center">
									<div className="single-icon">
										<i className="bi bi-phone"></i>
										<p>
											<b style="color: #3ec1d5;">Call:</b>{" "}
											0261 2535601
											<br />
											<b style="color: #3ec1d5;">
												Mobile:
											</b>{" "}
											+91 99242 02111
											<br />
											<span>
												Monday-Saturday (8:30AM -
												7:30PM)
											</span>
										</p>
									</div>
								</div>
							</div>

							<div className="col-md-4">
								<div className="contact-icon text-center">
									<div className="single-icon">
										<i className="bi bi-envelope"></i>
										<p>
											<b style="color: #3ec1d5;">
												Email:
											</b>{" "}
											nayanibrothers3@gmail.com
											<br />
											<span>
												<b style="color: #3ec1d5;">
													Web:
												</b>{" "}
												<a
													href="http://nayanibrothers.com"
													style="color: #444;"
												>
													www.nayanibrothers.com
												</a>
											</span>
										</p>
									</div>
								</div>
							</div>

							<div className="col-md-4">
								<div className="contact-icon text-center">
									<div className="single-icon">
										<i className="bi bi-geo-alt"></i>
										<p>
											<b style="color: #3ec1d5;">
												Location:
											</b>{" "}
											1st floor,102-shivam tower
											<br />
											<span>
												kesharba market, gotalawadi
											</span>
											<br />
											<span>katargam, Surat-395004</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Main;
