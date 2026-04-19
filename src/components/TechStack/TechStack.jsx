import './TechStack.css'

const TechStack = () => {
    return (
        <section id='techstack' className='techstack'>
            <h2>Technical Skills</h2>
            <div className="skills-container">
                <div className="skill-category">
                    <h3>Frontend</h3>
                    <p>React, Next.js, TypeScript, JavaScript, HTML5, CSS3</p>
                </div>

                <div className="skill-category">
                    <h3>Backend</h3>
                    <p>Node.js, Express, C#, .NET Core, Java, Spring Boot, Python, FastAPI, C, C++</p>
                </div>

                <div className="skill-category">
                    <h3>Databases</h3>
                    <p>MongoDB, PostgreSQL</p>
                </div>

                <div className="skill-category">
                    <h3>AI / ML</h3>
                    <p>LangChain, LangGraph, TensorFlow, PyTorch, Large Language Models (LLMs), Natural Language Processing (NLP), AI Agents, Vector Databases</p>
                </div>

                <div className="skill-category">
                    <h3>Infrastructure & Tools</h3>
                    <p>Docker, Kubernetes, AWS, Azure, GCP, Git, Terraform, Linux</p>
                </div>
            </div>
        </section>
    )
}

export default TechStack
