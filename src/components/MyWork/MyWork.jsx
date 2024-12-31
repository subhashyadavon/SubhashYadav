import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
    return(
        <div className='mywork'>
            <div id='work' className="mywork-title">
                <h1>My Work</h1>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work,index)=>{
                    return <img key={index} src={work.w_img} alt="" />
                })}
                <div className="pro-1"><a href='https://github.com/Subhash1861815/Blockchain'>Click here for Github repo Link</a></div>
                <div className="pro-2"><a href='https://github.com/rileydes/COMP3380'>Click here for Github repo Link</a></div>
                <div className="pro-3"><a href='https://github.com/Subhash1861815/SubhashYadav'>Click here for Github repo Link</a></div>     
            </div>    
            
            
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>

        </div>
    )
}

export default MyWork