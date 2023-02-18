import React from 'react';

const About = () => {
    return (
        <div className='about'>
            <div className='infoAbout'>
                <h1 className='textAbout'>This Application is made by Aleks Golden using ReactJS, React Router v6.4 </h1>

                <h2 className='textAbout'>Contacts:</h2>
                <a className='textAbout' href='https://github.com/algoldenberg' target={'_blank'}>GitHub</a>
                <a className='textAbout' href='https://www.linkedin.com/in/aleks-goldenberg-841069256/'>LinkedIn</a>
                <a className='textAbout'href='https://www.facebook.com/agoldenberga/'>Facebook</a>
            </div>    
        </div>
    );
};
 
export default About;