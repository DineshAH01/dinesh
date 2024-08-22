import React, { useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../componet/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import './style.scss';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
    const templateParams = {
      userName: formData.name,
      email: formData.email,
      description: formData.description,
    };
  
    emailjs.send('service_2hhj5gt', 'template_aw606mb', templateParams, '2sGfeaHkjFIabdVua') 
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        Swal.fire({ 
          title: 'Success',
          text: 'Your message has been sent!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }, (error) => {
        console.log('FAILED...', error);
        Swal.fire({
          title: 'Error',
          text: `Failed to send message. Status: ${error.text}`,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  };
  
  

  
  return (
    <section id='contact' className='contact'>

        <PageHeaderContent
          headerText="My Contact"
          icon = {<BsInfoCircleFill size={40}/>}
        />
        <div className='contact_content'>
            <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform : "translateX(-200px)"
            }}
            end={{
              transform : "translateX(0px)"
            }}
            >
              <h3 className='contact_content_header-text'>Let's Talk</h3>

            </Animate>

            <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform : "translateX(-200px)"
            }}
            end={{
              transform : "translateX(0px)"
            }}
            >
              <form className='contact_content_form' onSubmit={handleSubmit}>
                <div className='contact_content_form_controlsWrapper'>
                  <div className='nameWrapper'> 
                    <input required name='name' className='inputName' type={'text'} 
                    value={formData.name} onChange={handleChange} 
                    />
                    <label htmlFor='name' className='nameLabel'>Name</label>
                  </div>
                  <div className='emailWrapper'>
                    <input required name='email' className='inputEmail' type={'text'} 
                    value={formData.email} onChange={handleChange}
                    />
                    <label htmlFor='email' className='emailLabel'>Email</label>
                  </div>
                  <div className='descriptionWrapper'>
                    <textarea required name='description' className='inputDescription' type={'text'} rows="5" 
                    value={formData.description} onChange={handleChange}
                    />
                    <label htmlFor='description' className='descriptionLabel'>Description</label>
                  </div>
                </div>
                <button>Submit</button>
              </form>
            </Animate>
        </div>
    </section>
  )
}
export default Contact;