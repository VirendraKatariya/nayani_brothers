import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className="footer-area">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<center>
								<div className="footer-logo">
									<a href="/">
										<img
											src="assets/img/f-logo.png"
											style="max-height: 210px;max-width: 420px;"
											className="img-fluid footer_logo"
										/>
									</a>
								</div>
							</center>
						</div>
						<div className="col-md-6">
							<div className="footer-content">
								<div className="footer-head">
									<p>
										<b>
											We have Expertise to Shine Diamond
											Since 1980 And Specializes in
											Manufacturing & Import-Export
											Diamond industries.
										</b>
									</p>
									<ul>
										<li>
											<i
												className="bi bi-gem"
												style="color: #3ec1d5;"
											></i>{" "}
											Diamond Polishing
										</li>
										<li>
											<i
												className="bi bi-gem"
												style="color: #3ec1d5;"
											></i>{" "}
											Diamond Manufacturing
										</li>
										<li>
											<i
												className="bi bi-gem"
												style="color: #3ec1d5;"
											></i>{" "}
											Diamond Import & Export
										</li>
										<li>
											<i
												className="bi bi-gem"
												style="color: #3ec1d5;"
											></i>{" "}
											Diamond Trading
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-md-6">
							<div className="footer-content">
								<div className="footer-head">
									<p>
										<b>
											You are always welcome to contact
											us, we will be happy to assist you.
										</b>
									</p>
									<div className="footer-contacts">
										<p>
											<span>Tel:</span> 0261 2535601
										</p>
										<p>
											<span>Email:</span>{" "}
											nayanibrothers3@gmail.com
										</p>
										<p>
											<span>Working Hours:</span>{" "}
											Monday-Saturday (8:30AM - 7:30PM)
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-area-bottom">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-sm-12 col-xs-12">
							<div className="copyright text-center">
								<p>
									&copy; Copyright{" "}
									<strong>NayaniBrothers</strong>. All Rights
									Reserved
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
