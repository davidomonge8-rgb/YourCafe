import '../componentCss/Featured.css' 


const Featured = () => {
    return(
        <div className = 'Featured'>
            <h2>The collection</h2>

            <div id='Featured-nav'>
                <h1>Featured Briews</h1>
                <h2 className='view-link'><a href="">View all items</a></h2>
            </div>
        </div>
    )
}

export default Featured