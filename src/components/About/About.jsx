import React from 'react'
import './About.css'


const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>

            <div className="about-me-section">
                <div className="about-card about-intro">
                    <h3>Who I Am</h3>
                    <p>I am a 3rd year Computer Science student at the University of Manitoba with a strong interest in Data Analysis and Software Development. Through various projects and volunteer experiences, I have honed my communication and problem-solving skills. I thrive under pressure and am an effective team player capable of building strong collaborations.</p>
                </div>

                <div className="about-card about-achievements">
                    <div className="achievement-item">
                        <h1>4+</h1>
                        <p>PROJECTS</p>
                    </div>
                    <div className="achievement-item">
                        <h1>3+</h1>
                        <p>YEARS EXP</p>
                    </div>
                </div>
            </div>

            <div className="about-title">
                <h1>My Tech Stack</h1>
            </div>

            <div className="tech-stack-section">
                <div className="about-card about-skills">
                    <div className="skills-container">

                        <div className="skill-category">
                            <h4>Frontend</h4>
                            <div className="skill-badges">
                                <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black" alt="React" />
                                <img src="https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white" alt="Next.js" />
                                <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
                                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript" />
                                <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5" />
                                <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3" />
                            </div>
                        </div>

                        <div className="skill-category">
                            <h4>Backend</h4>
                            <div className="skill-badges">
                                <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" alt="Node.js" />
                                <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white" alt="Express" />
                                <img src="https://img.shields.io/badge/C%23-239120?logo=c-sharp&logoColor=white" alt="C#" />
                                <img src="https://img.shields.io/badge/.NET_Core-512BD4?logo=dot-net&logoColor=white" alt=".NET Core" />
                                <img src="https://img.shields.io/badge/Java-007396?logo=java&logoColor=white" alt="Java" />
                                <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?logo=spring-boot&logoColor=white" alt="Spring Boot" />
                                <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" alt="Python" />
                                <img src="https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white" alt="FastAPI" />
                                <img src="https://img.shields.io/badge/C-A8B9CC?logo=c&logoColor=black" alt="C" />
                                <img src="https://img.shields.io/badge/C++-00599C?logo=c%2B%2B&logoColor=white" alt="C++" />
                            </div>
                        </div>

                        <div className="skill-category">
                            <h4>Databases</h4>
                            <div className="skill-badges">
                                <img src="https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white" alt="MongoDB" />
                                <img src="https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white" alt="PostgreSQL" />
                            </div>
                        </div>

                        <div className="skill-category">
                            <h4>AI / ML</h4>
                            <div className="skill-badges">
                                <img src="https://img.shields.io/badge/LangChain-AI_Workflows-red" alt="LangChain" />
                                <img src="https://img.shields.io/badge/LangGraph-AI_Workflows-9cf" alt="LangGraph" />
                                <img src="https://img.shields.io/badge/TensorFlow-FF6F00?logo=tensorflow&logoColor=white" alt="TensorFlow" />
                                <img src="https://img.shields.io/badge/PyTorch-EE4C2C?logo=pytorch&logoColor=white" alt="PyTorch" />
                                <img src="https://img.shields.io/badge/LLMs-Large_Language_Models-blueviolet" alt="LLMs" />
                                <img src="https://img.shields.io/badge/NLP-Natural_Language_Processing-orange" alt="NLP" />
                                <img src="https://img.shields.io/badge/AI_Agents-Autonomous_Systems-8A2BE2" alt="AI Agents" />
                                <img src="https://img.shields.io/badge/Vector_Database-Semantic_Search-success" alt="VectorDB" />
                            </div>
                        </div>

                        <div className="skill-category">
                            <h4>Infrastructure / Tools</h4>
                            <div className="skill-badges">
                                <img src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white" alt="Docker" />
                                <img src="https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes&logoColor=white" alt="Kubernetes" />
                                <img src="https://img.shields.io/badge/AWS-232F3E?logo=amazon-aws&logoColor=white" alt="AWS" />
                                <img src="https://img.shields.io/badge/Azure-0078D4?logo=microsoft-azure&logoColor=white" alt="Azure" />
                                <img src="https://img.shields.io/badge/GCP-4285F4?logo=google-cloud&logoColor=white" alt="GCP" />
                                <img src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white" alt="Git" />
                                <img src="https://img.shields.io/badge/Terraform-623CE4?logo=terraform&logoColor=white" alt="Terraform" />
                                <img src="https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=black" alt="Linux" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About