import React from 'react';
import './About.css'; // Import your stylesheet

const About = () => {
    return (
        <div className="about-section">
            <div className="about-content">
                <h1>Welcome to The Paper Magic</h1>
                <p className="tagline">Ignite Your Creativity</p>
                <p>At The Paper Magic, we celebrate the world of art and craft, where imagination knows no bounds. Our passion lies in nurturing your creative spirit and empowering you to embark on artistic journeys that are as unique as you are.</p>
                <p>From mesmerizing paintings that tell stories to handcrafted wonders that bring joy, our curated selection of art supplies, kits, and workshops is designed to inspire, educate, and awaken the artist within.</p>
                <p>Whether you're a seasoned artist or just starting to explore the world of creativity, The Paper Magic is your trusted companion. Unleash your potential, express your emotions, and discover the magic of self-expression through art and craft.</p>
                <p>Join us on this enchanting journey, where every brushstroke, every stitch, and every creation is a masterpiece in the making.</p>
            </div>
            <div className="about-image">
                {/* Insert an image that represents art and craft */}
                <img src={require("./about.jpg")} alt="Art and Craft" />
            </div>
        </div>
    );
}

export default About;
