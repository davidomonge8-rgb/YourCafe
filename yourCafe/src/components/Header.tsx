import '../componentCss/Header.css'
import "tailwindcss";

const Header = () =>{
    return(
        <div className='header'>
            <div className="brandName">
                <h1>YourCafe</h1>
            </div>

            <div className="nav">
                <ul>
                    <li><a href="">Menu</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Sign In</a></li>
                </ul>
                
                <button> Order Now </button>
            </div>
        </div>
    )
}

export default Header