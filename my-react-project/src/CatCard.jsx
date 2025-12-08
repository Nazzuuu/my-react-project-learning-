import catImage from './assets/cat.jpg'
import dogImage from './assets/dog.jpg'
import pandaImage from './assets/pandass.jpg'
function CatCard () {
    return(

       <>
        <div className = "card">
            
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
            <p>Independent, confident, timid, laidback, affectionate, or adaptable.</p>

        </div>

        <hr className = "underline"></hr>
        </>


        
    );
}

export default CatCard