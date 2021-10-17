import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './index.css'

function VootPage() {

    const [data, setdata] = useState([])
const getVootAPIRequest = async ()=>{

    await axios.get('https://tvapiv2.voot.com/wsv_1_0/episode/list.json?%20tvSeriesId=361251&from=1&to=20&sortId=mostPopular')
    .then(response =>{
        console.log(response)
        setdata(response.data.assets)
    })
    .catch(error =>{
        console.log(error)
    })
}

    
    
    
    useEffect(() => {
        getVootAPIRequest()
    }, [])


const rednerImgaes = ()=>{
   return data.map(image =>{
       return   <div className="image">
                    <img className="episode-image" key={image.mId} src={image.imgURL}/>
                    <h4 className="heading" > E{image.episodeNo} : {image.title}</h4>
                </div>
    })
}
    return (
        <div className="app-container">
            <img src="https://res.cloudinary.com/dfxicv9iv/image/upload/v1634459712/Voot-Logo_txz2qg.svg" />
            <div className="images-container">
                {rednerImgaes()}
            </div>
        </div>
    )
}

export default VootPage
