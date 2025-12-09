import catImage from './assets/cat.jpg'
import dogImage from './assets/dog.jpg'
import pandaImage from './assets/pandass.jpg'
import catdogss from './assets/catdogs.jpg'
function Cardss () {
    return(

       <>
        <div className = "card" id ="card-section">
            
            <img className = "card-image" src = {catImage} alt = "Cat Profile Picture"></img>
            <h2><span className = "text-cat">Silly Cat</span></h2>
            <p> Cuddly, playful, curious, independent, affectionate.</p>

        </div>

        <div className = "dog-card">

            <img className = "dog-image" src = {dogImage} alt = "Dog Profile Picture"></img>
            <h2><span className = "text-dog">Cute Dog</span></h2>
            <p>Independent, confident, timid, laidback, affectionate, or adaptable.</p>

        </div>

        <div className="panda-card">

            <img className = "panda-image" src = {pandaImage} alt = "Panda Profile Picture"></img>
            <h2><span className = "text-panda">Cute Panda</span></h2>
            <p>Big, black-and-white bears with round faces and chubby bodies.</p>

        </div>

        <div class="about-section" id ="about-section">
           <h1>
            <span className="about-page" href = "https://animalia.bio/?mon=84876600">About us Page</span>
            </h1>
         

            <div className="about-text-content">
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
       
            <img src = {catdogss} id = "cat-dogs" alt = "Cat and Dogs Picture"></img>

        </div>     

        <hr className = "underline"></hr>
        </>


        
    );
}

export default Cardss