import React,{useRef,useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import {Image} from '@chakra-ui/react'
import HashLoader from "react-spinners/HashLoader";
import './aboutcss.css'
const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
                setTimeout(() =>{
        Line.current.classList.add('lineon')
        text.current.classList.add('titleon');
        },5)


        return () => {

        }
    },[])
    return (
        

        
        <>
        <Helmet>
            <title>About</title>
        </Helmet>


            <div className='headingA'>
                <div className = 'line' ref={Line}>
                </div>
                <h1 className ='title' ref={text}>About Us</h1>
            </div>
            <div className='Content1'>
                <div className = 'text'>
                    <h1>
                        Why?
                    </h1>
                <h2>Product Descriptions:</h2>
                <p>Our team takes pride in creating detailed and accurate product descriptions for all of our products. We understand that customers want to know exactly what they're buying, which is why we make sure to highlight all the key features and benefits of our products. Additionally, we include high-quality photos that showcase our products from all angles to give our customers the best possible view.</p>

<h2>Customer Reviews:</h2>
<p>We value our customers' opinions and encourage them to leave honest reviews about their experiences with our products and services. Positive reviews not only help build trust and credibility for our business, but they also serve as a testament to the quality of our products. We welcome all feedback, whether it's positive or negative, as we believe it can help us improve and grow as a business.</p>

<h2>How-to Guides:</h2>
<p>We understand that some of our products may require some explanation on how to use them properly. That's why we've created helpful how-to guides and tutorials to assist our customers. Our goal is to make sure our customers are satisfied with their purchases and know how to get the most out of our products.</p>
                </div>
               
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://images.unsplash.com/photo-1614771637369-ed94441a651a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' alt="Segun Adebayo"/>
                    </div>
                   </div>
            </div>
            <div className ='Content2'>
                   
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://images.unsplash.com/photo-1614038276039-667c23bc32fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=389&q=80' alt="Segun Adebayo"/>
                    </div>
                   </div>
                   <div className = 'text'>
                    <h1>
                        How?
                    </h1>
                <p>At CUCLOTHING, we are dedicated to providing our customers with high-quality products and exceptional service. Our team is passionate about what we do, and we strive to exceed our customers' expectations in every way possible.</p>

<p>We understand that shopping for the perfect product can be overwhelming at times, which is why we've made it our mission to make the process as easy and enjoyable as possible. From detailed product descriptions to helpful how-to guides, we're here to assist you every step of the way.</p>

<p>We take great pride in the quality of our products and stand behind them 100%. We believe in using only the finest materials and craftsmanship to create products that are not only beautiful, but also functional and long-lasting. Whether you're in need of a gift for a loved one or something special for yourself, we've got you covered.</p>

<p>We believe in building strong relationships with our customers, and we're committed to providing exceptional customer service every time. If you have any questions or concerns, our friendly and knowledgeable team is always here to assist you.</p>

<p>Thank you for choosing CUCLOTHING, and we look forward to serving you!</p>
                </div>
            </div>
        </>
    
    )
}

export default About
