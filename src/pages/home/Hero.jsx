import './Hero.css'
import img from './Untitled design.png'

export const Hero = () => {
    return (
        <div id="container">
            <img id="image" src={img} />
            <h1 className='bonus' id="text">
                Fill your basket with joy
            </h1>
        </div>
    )
}