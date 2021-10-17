import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './index.css'
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Navigation,Autoplay} from 'swiper'
// import 'swiper/css/swiper.css'
// import "swiper/css/navigation"


SwiperCore.use([Navigation,Autoplay])

const dummyData = [
    {
        mId:0,
        imgURL:  "https://res.cloudinary.com/dfxicv9iv/image/upload/v1634473161/images_i5e0kc.jpg",
        episodeNo:1,
        title:"Eplid d dfg dg  dfgfggffhfhfhdfhdfdfhdfhfdhhdg "
    },
    {
        mId:1,
        imgURL:  "https://res.cloudinary.com/dfxicv9iv/image/upload/v1634473161/images_i5e0kc.jpg",
        episodeNo:1,
        title:"Eplid dg "
    },
    {
        mId:2,
        imgURL:  "https://res.cloudinary.com/dfxicv9iv/image/upload/v1634473161/images_i5e0kc.jpg",
        episodeNo:1,
        title:"Eplid dg "
    },
    {
        mId:3,
        imgURL:  "https://res.cloudinary.com/dfxicv9iv/image/upload/v1634473161/images_i5e0kc.jpg",
        episodeNo:1,
        title:"Eplid dg "
    },  
      {
        mId:4,
        imgURL:  "https://res.cloudinary.com/dfxicv9iv/image/upload/v1634473161/images_i5e0kc.jpg",
        episodeNo:1,
        title:"Eplid dg "
    },
    {
        mId:5,
        imgURL:  "https://res.cloudinary.com/dfxicv9iv/image/upload/v1634473161/images_i5e0kc.jpg",
        episodeNo:1,
        title:"Eplid dg "
    },
    {
        mId:5,
        imgURL:  "https://res.cloudinary.com/dfxicv9iv/image/upload/v1634473161/images_i5e0kc.jpg",
        episodeNo:1,
        title:"Eplid dg "
    },
    {
        mId:5,
        imgURL:  "https://res.cloudinary.com/dfxicv9iv/image/upload/v1634473161/images_i5e0kc.jpg",
        episodeNo:1,
        title:"Eplid dg "
    },    {
        mId:5,
        imgURL:  "https://res.cloudinary.com/dfxicv9iv/image/upload/v1634473161/images_i5e0kc.jpg",
        episodeNo:1,
        title:"Eplid dg "
    }
]

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

        const renderImages = ()=>{
             return dummyData.map(image =>
                <SwiperSlide className="image">
                    <img className="episode-image" key={image.mId} src={image.imgURL}/>
                    <h4 className="heading" > E{image.episodeNo} : {image.title}</h4>
                </SwiperSlide>)
            }


        useEffect(() => {
            getVootAPIRequest()
        }, [])



        return (
            <div className="app-container">
                <img src="https://res.cloudinary.com/dfxicv9iv/image/upload/v1634459712/Voot-Logo_txz2qg.svg" />
                <h2 className="main-heading">Pick of this week</h2>
                <div className="images-container">
                <Swiper 
                navigation
                slidesPerView={4}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                  }}
                >
                 {renderImages()}
                </Swiper>
                </div>
            </div>
        )
}

export default VootPage
