import { useRef, useState } from "react";
import catImage from './assets/cat.jpg'
import dogImage from './assets/dog.jpg'
import pandaImage from './assets/pandass.jpg'
import catdogss from './assets/catdogs.jpg'


function Cardss () {

        const currentApperance = useRef(null);

        const Clickabout = () => {
        const orig = currentApperance.current;
        orig.style.transform = "scale(1)";  
        orig.style.transition = "transform 0.6s ease"; 
        orig.style.boxShadow = "none";
 }
        const currentPosition = useRef(null);
        const [rotation, setRotation] = useState(0);

        const catRef = useRef(null);
        const dogRef = useRef(null);
        const pandaRef = useRef(null);


        const [rotationCat, setRotationCat] = useState(0);
        const [rotationDog, setRotationDog] = useState(0);
        const [rotationPanda, setRotationPanda] = useState(0);

        const rotate = (cardRef, rotation, setRotation) => {
        const card = cardRef.current;
        const newRotation = rotation + 360;
        card.style.transform = `rotateY(${newRotation}deg) scale(1)`;
        card.style.transition = "transform 1s ease";
        setRotation(newRotation);
  };

  return (
    <>
      <div className="card" id="card-section"
           ref={catRef} onClick={() => rotate(catRef, rotationCat, setRotationCat)}>
        <img className="card-image" src={catImage} alt="Cat Profile Picture" />
        <h2><span className="text-cat">Silly Cat</span></h2>
        <p>Cuddly, playful, curious, independent, affectionate.</p>
      </div>

      <div className="dog-card"
           ref={dogRef} onClick={() => rotate(dogRef, rotationDog, setRotationDog)}>
        <img className="dog-image" src={dogImage} alt="Dog Profile Picture" />
        <h2><span className="text-dog">Cute Dog</span></h2>
        <p>Independent, confident, timid, laidback, affectionate, or adaptable.</p>
        
      </div>

      <div className="panda-card"
           ref={pandaRef} onClick={() => rotate(pandaRef, rotationPanda, setRotationPanda)}>
        <img className="panda-image" src={pandaImage} alt="Panda Profile Picture" />
        <h2><span className="text-panda">Cute Panda</span></h2>
        <p>Big, black-and-white bears with round faces and chubby bodies.</p>
      </div>
  



        <div className="about-section" id ="about-section" >
           <h1>
           <a className="about-page about-link" href="https://animalia.bio/?mon=84876600" target="_blank"
            ref={currentApperance}onClick={Clickabout}>About us Page</a>
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