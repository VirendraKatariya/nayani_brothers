import React from "react";
import Logo from "../assets/img/logo.png";

const Header = () => {
	return (
		<header id="header" className="fixed-top d-flex align-items-center">
			<div className="container d-flex justify-content-between">
				<div
					className="logo navbar-left"
					style={{
						padding: "10px 0px",
					}} //"padding-top: 10px;padding-bottom: 10px;"
				>
					<a href="/">
						<img
							src={Logo} //"assets/img/logo.png"
							alt=""
							className="change_logo"
						/>
					</a>
				</div>

				<nav id="navbar" className="navbar">
					<ul>
						<li>
							<a
								className="nav-link scrollto active"
								href="#hero"
							>
								Home
							</a>
						</li>
						<li>
							<a className="nav-link scrollto" href="#about">
								About
							</a>
						</li>
						<li>
							<a className="nav-link scrollto" href="#services">
								Services
							</a>
						</li>
						<li>
							<a className="nav-link scrollto" href="#contact">
								Contact
							</a>
						</li>
					</ul>
					<i className="bi bi-list mobile-nav-toggle"></i>
				</nav>
			</div>
		</header>
	);
};

export default Header;
