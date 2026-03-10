import '../componentCss/Card.css'

import latte from "../assets/latte.jpg"
import icedCoffee from "../assets/icedCoffee.jpg"
import matcha from "../assets/matcha.jpg"

const Card = () =>{
    return(
        <div className='wholeCard'>
                <div id="latte">
                    <img src={latte} alt="latte" />

                    <div id='description'>
                        <h3>Latte:</h3>
                        <p>$4.50</p>
                    </div>

                    <p><i>Hot, Vanilla, Sweet </i></p>

                    <button>Add to Order</button>
                        
                </div>

                <div id="icedCoffee">
                    <img src={icedCoffee} alt="Iced Coffee" />

                    <div id='description'>
                        <h3>Iced Coffee:</h3>
                        <p>$3.50</p>
                    </div>

                    <p><i>Cold, Creamy ,Coffee</i></p>

                    <button>Add to Order</button>

                </div>


                <div id="matcha">
                    <img src={matcha} alt="Matcha" />

                    <div id='description'>
                        <h3>Matcha:</h3>
                        <p>$4.00</p>
                    </div>

                    <p><i>Warm, Earthy, Sweet</i></p>

                    <button>Add to Order</button>
                    
                </div>

        </div>
    )
}

export default Card