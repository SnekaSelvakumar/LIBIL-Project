import React from 'react'
import Home from './Home'
import img from './images/Content_img.jpeg'

const About = () => {
  return (
    <div>
    <Home/>
    <div style={{ backgroundColor: "white", height: "100%" }}>
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "150px",
            padding: "0 20px" 
        }}>
            <img
                style={{
                    height: "200px",
                    width: "300px",
                    border: "2px solid black",
                    borderRadius: "10px",
                    objectFit: "cover" // Ensures the image doesn't distort
                }}
                src={img}
                alt="E-book"
            />
            <p style={{
                width: "60%", 
                color: "red",
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "20px" 
            }}>
                “The man who does not read good books is no better than the man who can't.” <br />
                E-books offer the convenience of carrying an entire library in your pocket, making it easy to read anytime, anywhere. They also often include interactive features like search functions and adjustable text sizes for a customizable reading experience.
            </p>
        </div>
    </div>
</div>

  )
}

export default About