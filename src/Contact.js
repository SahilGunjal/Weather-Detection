
import React, { Component } from 'react'



class Contact extends Component {

    render() {
        return (
            <div className="container" style={{marginTop:"10px"}}>
                <section className="contact_us text-center">
    
            <div className="container">
                <i className="fa fa-headphones fa-5x"></i>
                <h1>Tell Us What You Feel</h1>
                <h4>Feel Free To Contact Us Any Time</h4>
                <section className="resume-section p-2 text-center" id="contact">
        <div className="my-auto">
          <h2 className="mb-4">&lt;Contact Information /&gt;</h2>

          <ul className="fa-ul mb-4 ml-0">
            <li id="mail-address">
                <i className="fas fa-envelope-open mr-2 contact-icons"></i>sahil.gunjal@gmail.com
            </li>
            <li>
              <i className="fas fa-mobile-alt mr-2 contact-icons"></i>+91 762-0929-800
            </li>
            <li>
              <i className="fas fa-map-marker-alt mr-2 contact-icons"></i>Narhe,Pune,India
            </li>
          </ul>

          <p>
            ...or leave your message below and I will be back to you as soon as
            possible.
          </p>
 
          <form  className="contact-form d-flex flex-column align-items-center"  action="/ajax/email"  method="POST" 
          onSubmit="return submitEmailForm(this);">
            <div className="form-group w-75" style={{padding:"8px"}}>
              <input  type="name"   className="form-control"  name="name"  placeholder="Name"   required    />
            </div>

            <div className="form-group w-75" style={{padding:"8px"}}>
              <input  type="email"   className="form-control" placeholder="Email"    name="name"   required    />
            </div>

            <div className="form-group w-75" style={{padding:"8px"}}>
              <textarea  className="form-control"  type="text"  placeholder="Message"   rows="7" name="name"  required></textarea>
            </div>

            <button type="submit" className="btn btn-outline-primary w-50" style={{padding:"8px"}}>Submit</button>
          </form>
        </div>
      </section>


            </div>

    </section>
               </div>
        )
    }
}

export default Contact
