import '../componentCss/Featured.css' 
import Card from './Card.tsx'


const Featured = () => {
    return(
        <div className = 'Featured'>
            <h2>The collection</h2>

            <div id='Featured-nav'>
                <h1>Featured Briews</h1>
                <h2 className='view-link'><a href="">View all items</a></h2>
                
            </div>

            <Card/>
        </div>
    )
}

export default Featured