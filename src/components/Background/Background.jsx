import './Background.css'
import TeslaVideo from '../../assets/CYBERTRUCK.mp4'
import image1 from '../../assets/Tesla_Cyber_1.jpg'
import image2 from '../../assets/Tesla_Cyber_2.png'
import image3 from '../../assets/Tesla_Interior_1.png'
import image4 from '../../assets/Tesla_Interior_2.png'

const Background = ({playStatus,heroCount}) => {
   if (playStatus){
    return(
        <video className='background fade-in' autoPlay loop muted>
            <source src={TeslaVideo} type='video/mp4'/>
        </video>
    )
   }
    else if(heroCount===0)
    {
        return <img src={image1} className='background fade-in' alt=""/>
    }
    else if(heroCount===1)
    {
        return <img src={image2} className='background fade-in' alt=""/>
    }
    else if(heroCount===2)
    {
        return <img src={image3} className='background fade-in' alt=""/>
    }
    else if(heroCount===3)
    {
        return <img src={image4} className='background fade-in' alt=""/>
    }
}

export default Background