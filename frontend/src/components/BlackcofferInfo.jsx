import React from 'react';  
import './BlackcofferInfo.css';  

const BlackcofferInfo = () => {  
    return (  
        <div className="container">  
            <h4>The reason why Blackcoffer stands out</h4>  
            <h3>Blackcoffer Unfolds Solutions To Everything</h3>  
            <div className="grid">  
                <div className="box years">  
                    <h3>12+</h3>  
                    <h4>Years of Experience</h4>  
                </div>  
                <div className="box clients">  
                    <h3>100+</h3>  
                    <h4>Clients</h4>  
                </div>  
                <div className="box retention">  
                    <h3>97%</h3>  
                    <h4>Client Retention Rate</h4>  
                </div>  
                <div className='box Image'>
                        <img src="https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149346624.jpg?ga=GA1.1.91848471.1731676592&semt=ais_hybrid" alt="image meet" />
                </div>
                <div className="box ai">  
                    {/* <img src="https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?ga=GA1.1.91848471.1731676592&semt=ais_hybrid" height={40} alt="AI solutions" />   */}
                    <h3>40+</h3>  
                    <h4>AI Solutions</h4>  
                </div>  
                <div className="box employees">  
                    <h3>350+</h3>  
                    <h4>Employees</h4>  
                </div>  
                <div className="box countries">  
                    <h3>2+</h3>  
                    <h4>Countries</h4>  
                </div>  
                <div className="box big-data">  
                    <h3>80+</h3>  
                    <h4>Big Data Solutions</h4>  
                </div>  
                <div className="box dedicated">  
                    <h4>Dedicated to</h4>  
                    <h3>Providing Top-Notch Big Data Analytics & BI Services</h3>  
                </div> 
            </div>  
             
        </div>  
    );  
};  

export default BlackcofferInfo;