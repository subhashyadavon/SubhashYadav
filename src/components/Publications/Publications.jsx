import './Publications.css'
import publications_data from '../../assets/publications_data'

const Publications = () => {
    return (
        <section id='publications' className='publications'>
            <h2>Research & Publications</h2>
            {publications_data.length === 0 ? (
                <div className="publications-coming-soon">
                    <p>Academic papers and research publications will be added here soon.</p>
                </div>
            ) : (
                <div className="publications-container">
                    {publications_data.map((pub, index) => (
                        <div key={index} className="publication-item">
                            <div className="publication-header">
                                <span className="pub-date">{pub.p_date}</span>
                                <span className="pub-venue">{pub.p_venue}</span>
                            </div>
                            <h3>{pub.p_title}</h3>
                            <p className="pub-authors">By {pub.p_authors}</p>
                            <p className="pub-abstract">{pub.p_abstract}</p>
                            
                            <div className="pub-tags">
                                {pub.p_tags.map((tag, idx) => (
                                    <span key={idx} className="pub-tag">{tag}</span>
                                ))}
                            </div>

                            <div className="publication-links">
                                <a href={pub.p_pdf} target="_blank" rel="noopener noreferrer" className={pub.p_pdf === "#" ? "link-disabled" : ""}>
                                    [ {pub.p_pdf === "#" ? "Paper Coming Soon" : "View Research Paper"} ]
                                </a>
                                {pub.p_github !== "#" && (
                                    <a href={pub.p_github} target="_blank" rel="noopener noreferrer">
                                        [ Source Repo ]
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Publications
