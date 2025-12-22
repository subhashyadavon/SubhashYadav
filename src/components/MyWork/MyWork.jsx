import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {

    return (
        <div className='mywork'>
            <div className="mywork-wrapper">
                <div id='work' className="mywork-title">
                    <h1>Projects</h1>
                </div>
                <div className="glass-card">
                    <div className="mywork-container">
                        {mywork_data.map((work, index) => {
                            return (
                                <div key={index} className="project-card">
                                    <div className="project-image-container">
                                        <img src={work.w_img} alt={work.w_name} />
                                        <div className="project-overlay">
                                            <div className="project-links">
                                                <a href={work.w_github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                                                    <i className="fa-brands fa-github"></i> GitHub
                                                </a>
                                                <a href={work.w_link} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                                                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Live
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-info">
                                        <h3>{work.w_name}</h3>
                                        <p>{work.w_desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyWork