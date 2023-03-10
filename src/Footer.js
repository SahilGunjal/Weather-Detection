import React, { Component } from 'react'
import './FooterStyle.css'
class Footer extends Component {
    render() {
        return (
            // <div className="footer">
            //     <p>Created by ❤ Sahil Gunjal</p>
            //     <p>All rights are reserved &copy; WeatherToday</p>
            // </div>
            <div className="container">
            <footer className="footer-design">
            <p>Created by ❤ Sahil Gunjal</p>
            <p>All rights are reserved &copy; WeatherToday</p>
             </footer>
             </div>
                // {/* <div className="row">
                //     <div className="col-12">
                //     <footer>
                //         <p style={{background:"#1B1A1A",color:"white",fontSize:"18px",lineHeight:"30px",font:"serif"}}>Created by ❤ Sahil Gunjal</p>
                //         <p  style={{background:"#1B1A1A",color:"white",fontSize:"18px",lineHeight:"30px",paddingTop:"5px",marginTop:"-23px",font:"serif",marginBottom:"0px"}} >All rights are reserved &copy; WeatherToday
                //         </p>
                //         </footer>
                //     </div>
                // </div> */}
        )
    }
}

export default Footer
