import styles from './Expertise.module.css';

const expertiseData = [
    {
        title: "Test Automation",
        desc: "Architecting robust frameworks from scratch using Selenium, Playwright, and Cypress for UI and API testing.",
        icon: "⚙️"
    },
    {
        title: "Continuous Integration",
        desc: "Integrating test suites into modern CI/CD pipelines (GitHub Actions, Jenkins) for immediate feedback.",
        icon: "🚀"
    },
    {
        title: "Performance & Load",
        desc: "Ensuring applications remain resilient under heavy load via JMeter and k6 load testing strategies.",
        icon: "📈"
    },
    {
        title: "Agile Quality",
        desc: "Embedding QA early in the SDLC, driving 'Shift-Left' strategies, and leading sprint quality metrics.",
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
