import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
     <section className='hm-banner-sec-wrp py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                   <div className='hm-banner-dsc'>
                      <h4 className='text-white'>HELLO,</h4>
                      <h2 className='text-white'>I'm Milon</h2>
                      <h5 className='text-white'>UI/UX Designer</h5>
                      <p className='text-white content-jusitify'>I'm a Tunisian based web designer & Ui/Ux Designer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                      <Link className='rounded'>Hire Me</Link>
                    </div> 
                </div>
            </div>
        </div>
     </section>
    </>
  )
}
export default Banner;