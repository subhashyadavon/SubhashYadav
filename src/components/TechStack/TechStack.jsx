import './TechStack.css'

const TechStack = () => {
    return (
        <section id='techstack' className='techstack'>
            <h2>Technical Skills</h2>
            <div className="skills-container">

                <div className="skill-category">
                    <h3>Languages</h3>
                    <p><strong>Proficient:</strong> Python, Java, JavaScript, C, SQL</p>
                    <p><strong>Familiar:</strong> C#, C++, TypeScript</p>
                </div>

                <div className="skill-category">
                    <h3>Web & Backend</h3>
                    <p><strong>Proficient:</strong> Angular, React, FastAPI, .NET Core, HTML5, CSS3</p>
                    <p><strong>Familiar:</strong> Node.js, jQuery</p>
                </div>

                <div className="skill-category">
                    <h3>Databases</h3>
                    <p><strong>Proficient:</strong> PostgreSQL, SQLite</p>
                    <p><strong>Familiar:</strong> MongoDB, MSSQL</p>
                </div>

                <div className="skill-category">
                    <h3>AI / ML</h3>
                    <p><strong>Proficient:</strong> LangChain, NLP, scikit-learn, Vector Databases</p>
                    <p><strong>Exploring:</strong> PyTorch, TensorFlow, LangGraph, AI Agents</p>
                </div>

                <div className="skill-category">
                    <h3>Infrastructure & Tools</h3>
                    <p><strong>Proficient:</strong> Docker, Git, Linux, AWS (S3, EC2), Apache Airflow</p>
                    <p><strong>Familiar:</strong> Azure (App Service, Blob Storage), GitHub Actions</p>
                    <p><strong>Exploring:</strong> Kubernetes, Terraform, GCP</p>
                </div>

            </div>
        </section>
    )
}

export default TechStack
