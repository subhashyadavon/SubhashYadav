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
                            const handleProjectClick = (e) => {
                                if (work.isUnderImplementation) {
                                    e.preventDefault();
                                    alert("This project is currently under implementation.");
                                }
                            };

                            return (
                                <div key={index} className="project-card">
                                    <div className="project-image-container">
                                        <img src={work.w_img} alt={work.w_name} />
                                        <div className="project-overlay">
                                            <div className="project-links">
                                                <a href={work.w_github} onClick={handleProjectClick} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                                                    <i className="fa-brands fa-github"></i> GitHub
                                                </a>
                                                {work.w_medium && (
                                                    <a href={work.w_medium} target="_blank" rel="noopener noreferrer" className="project-link medium-link">
                                                        <i className="fa-brands fa-medium"></i> Medium
                                                    </a>
                                                )}
                                                {work.w_apk && (
                                                    <a href={work.w_apk} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                                                        <i className="fa-brands fa-android"></i> APK
                                                    </a>
                                                )}
                                                <a href={work.w_link} onClick={(e) => {
                                                    if (work.isUnderImplementation || (work.w_link_label && work.w_link_label.includes("under process"))) {
                                                        e.preventDefault();
                                                        alert(work.isUnderImplementation ? "This project is currently under implementation." : `This project is ${work.w_link_label}.`);
                                                    }
                                                }} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                                                    <i className="fa-solid fa-arrow-up-right-from-square"></i> {work.w_link_label || "Live"}
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