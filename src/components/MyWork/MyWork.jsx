import { useState } from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
    const [showUnavailableModal, setShowUnavailableModal] = useState(false)

    return (
        <section id='work' className='mywork'>
            <h2>Selected Projects</h2>
            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <div key={index} className="project-item">
                        {work.w_img && (
                            <div className="project-image">
                                <img src={work.w_img} alt={work.w_name} />
                            </div>
                        )}
                        <div className="project-content">
                            <h3>{work.w_name}</h3>
                            <p>{work.w_desc}</p>

                            {work.w_tags && (
                                <div className="project-tags">
                                    {work.w_tags.map((tag, idx) => (
                                        <span key={idx} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            )}

                            <p className="project-links">
                                <a href={work.w_github} target="_blank" rel="noopener noreferrer">
                                    [Source Code / GitHub]
                                </a>
                                {work.w_link && (
                                    work.w_link_unavailable ? (
                                        <> | <a href="#" onClick={e => { e.preventDefault(); setShowUnavailableModal(true) }}>
                                            [Demo / {work.w_link_label || "Live"}]
                                        </a></>
                                    ) : (
                                        <> | <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                                            [Demo / {work.w_link_label || "Live"}]
                                        </a></>
                                    )
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

            {showUnavailableModal && (
                <div className="resume-modal-overlay" onClick={() => setShowUnavailableModal(false)}>
                    <div className="resume-modal" onClick={e => e.stopPropagation()}>
                        <p>Not live — Azure free credits exhausted.</p>
                        <button className="resume-modal-close" onClick={() => setShowUnavailableModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default MyWork
