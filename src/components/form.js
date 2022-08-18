import React from "react"
import '../App.css';
import memesData from '../memesData.js';

export default function Form(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
    // eslint-disable-next-line
    const [allMemes, setAllMemes] = React.useState(memesData)
    
    function getMemes(){
        const memesArray = allMemes.data.memes
        const randomMeme = Math.floor(Math.random()*memesArray.length)
        const url = memesArray[randomMeme].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    return(
        <main>
            <div className='form'>
                <input
                    className = "form-text"
                    type = "text"
                    placeholder = "Enter Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    className = "form-text"
                    type = "text"
                    placeholder = "Enter bottum Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className = "form-button" onClick={getMemes}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="images" className = "meme-img" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}