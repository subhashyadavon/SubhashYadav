
import project2_img from './project2.png'
import ustep_img from './project3.png'
import project4_img from './project4.png'

import airflow_img from './airflow-project.png'
import database_img from './database.png'




const mywork_data = [
    {
        w_no: 1,
        w_name: "CarDex",
        w_desc: "Cardex is a digital trading card game where players collect, trade, and race cars. Features card collection and racing.",
        w_img: project2_img,
        w_github: "https://github.com/subhashyadavon/CarDex-Prod",
        w_link: "https://app-cardex.azurewebsites.net/",
        w_link_unavailable: true,
        w_medium: "https://medium.com/@subhashyadavon/building-cardex-reflections-on-architecture-concurrency-and-engineering-growth-9433319f9bd2",
        w_tags: ["C#", "React", "PostgreSQL", "Docker", "Terraform", "GitHub Actions"]
    },
    {
        w_no: 2,
        w_name: "UStep",
        w_desc: "Student-focused academic application simplify course management, grade tracking, and academic planning. Helps in monitoring current courses grades.",
        w_img: ustep_img,
        w_github: "https://github.com/subhashyadavon/ustep",
        w_medium: "https://medium.com/@subhashyadavon/ustep-revolutionizing-academic-planning-for-university-students-598c8edbbba6",
        w_apk: "https://github.com/subhashyadavon/ustep/actions/runs/29046721511",
        w_tags: ["Java", "Android Studio", "HSQLDB", "Python", "JUnit", "GitHub Actions"]
    },
    {
        w_no: 3,
        w_name: "RAG Chat App",
        w_desc: "An intelligent chat application that combines speech-to-text, vector search, and retrieval-augmented generation (RAG) to enable natural, voice-driven conversations.",
        w_github: "https://github.com/subhashyadavon/voice-driven-qna-bot.git",
        w_tags: ["Python", "FastAPI", "LangChain", "RAG"]
    },

    {
        w_no: 4,
        w_name: "HCI To-Do App",
        w_desc: "A To-Do web app that demonstrates key Human–Computer Interaction (HCI) principles through a simple, intuitive, and user-centered design.",
        w_img: project4_img,
        w_github: "https://github.com/subhashyadavon/todo-app",
        w_link: "https://subhashyadavon.github.io/todo-app/",
        w_tags: ["HTML", "CSS", "JavaScript"]
    },

    {
        w_no: 7,
        w_name: "Tech Market Intelligence Dashboard",
        w_desc: "Transforming fragmented and messy job market data into actionable, real-time insights for career and salary decision-making.",
        w_img: airflow_img,
        w_github: "https://github.com/subhashyadavon/airflow-project.git",
        w_tags: ["Apache Airflow", "Python", "PostgreSQL", "AWS S3"]
    },
    {
        w_no: 8,
        w_name: "CineBase: Media Management System",
        w_desc: "Developed as part of the Introduction to Database course, this project implements a robust database system for managing and querying complex media datasets.",
        w_img: database_img,
        w_github: "https://github.com/subhashyadavon/DatabaseProject.git",
        w_tags: ["Relational Databases", "SQL", "DBMS"]
    },



]

export default mywork_data;