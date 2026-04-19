import './MyWork.css'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
    return (
        <section id='work' className='mywork'>
            <h2>Selected Projects</h2>
            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <div key={index} className="project-item">
                        <div className="project-image">
                            <img src={work.w_img} alt={work.w_name} />
                        </div>
                        <div className="project-content">
                            <h3>{work.w_name}</h3>
                            <p>{work.w_desc}</p>
                            <p className="project-links">
                                <a href={work.w_github} target="_blank" rel="noopener noreferrer">
                                    [Source Code / GitHub]
                                </a>
                                {work.w_link && (
                                    <> | <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                                        [Demo / {work.w_link_label || "Live"}]
                                    </a></>
                                )}
                                {work.w_medium && (
                                    <> | <a href={work.w_medium} target="_blank" rel="noopener noreferrer">
                                        [Documentation / Medium]
                                    </a></>
                                )}
                                {work.w_apk && (
                                    <> | <a href={work.w_apk} target="_blank" rel="noopener noreferrer">
                                        [Download APK]
                                    </a></>
                                )}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MyWork