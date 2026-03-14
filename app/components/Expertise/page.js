import styles from './Expertise.module.css';

const expertiseData = [
    {
        title: "Medical & Cloud Testing",
        desc: "Specialized in testing cloud-deployed applications within regulated environments (ISO 13485, IEC 62304) across mobile & web.",
        icon: "☁️"
    },
    {
        title: "Automation & API",
        desc: "Developing effective automation solutions using Playwright (TypeScript) and performing extensive API validations with Postman.",
        icon: "⚙️"
    },
    {
        title: "Test Strategy & Planning",
        desc: "Creating comprehensive test plans, protocols, and reusable data models for faster execution and regression cycles.",
        icon: "📋"
    },
    {
        title: "Agile (SAFe) Quality",
        desc: "Embedding QA early in the SDLC, managing defect lifecycles, and tracking quality metrics in Azure DevOps and Jira.",
        icon: "🛡️"
    }
];

export default function Expertise() {
    return (
        <section id="expertise" className={`section ${styles.expertise}`}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Core <span className="text-gradient">Expertise</span></h2>
                <div className={styles.grid}>
                    {expertiseData.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
