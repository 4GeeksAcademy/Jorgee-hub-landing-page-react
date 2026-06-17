import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import CardSection from "./CardSection";
import Footer from "./Footer";
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Hero />
				<CardSection />
			</div>
			<Footer />
		</>
	)
}
export default Home;