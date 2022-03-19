import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className= "container-position">
            <footer className='btcontainer-footer'>
                <div style={{ width: "50%" }}>
                    <h4>Contactanos ❤️</h4>
                    <div className="container-contact">
                        <div className='contact'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" /></svg>
                            <h6>1122334455</h6>
                        </div>
                        <div className='contact'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 512 512"><path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" /></svg>
                            <h6>RulosArg@RulosArg.com</h6>

                        </div>
                        <div className='contact'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" /></svg>
                            <h6>Buenos Aires Argentina</h6>

                        </div>
                    </div>
                </div>



                <div>
                <h4 className="title-Mica">Hecho por Mica Isla</h4> 
                </div>
              
            </footer>
        </div>
    );
};

export default Footer;