import '../componentCss/Hero.css'

const Hero = () =>{
    return(

    <div id='hero'>
        <div className="hero">
            <div className="hero-content">
                <h2>Premium Roastery</h2>
                <h1>Experience the Art of Premium Coffee</h1>
                <p>Savor the richness of handcrafted brews delivered from our artisan roastery directly to your cup.</p>

                <div className="buttons">
                    <button id='orange-button'>Order Now</button>
            
                    <button id='transparent-button'>View Menu</button>
                </div>
            </div>
        </div>

        <br />
        
    </div>
    )
}

export default Hero