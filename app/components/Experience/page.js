import styles from './Experience.module.css';

const experiences = [
    {
        role: "Senior Quality Assurance Engineer",
        company: "Oracle India Pvt. Ltd",
        period: "May 2022 – Present",
        achievements: [
            "Tested core features of cloud-based mobile applications in healthcare domain across Android & iOS.",
            "Designed & executed manual and automated tests ensuring compliance with release quality gates.",
            "Created test strategies and reusable test data models for faster test execution and regression cycles."
        ]
    },
    {
        role: "Senior Quality Engineer",
        company: "QualiTest India Pvt. Ltd",
        period: "Nov 2018 – May 2022",
        achievements: [
            "Wrote comprehensive test plans and executed test cases for web-based and mobile healthcare apps.",
            "Thoroughly validated API functionality and system integrations.",
            "Tracked quality assurance metrics including defect density and root cause analysis."
        ]
    },
    {
        role: "Software Test Engineer",
        company: "Cardiac Design Labs",
        period: "Dec 2013 – Apr 2018",
        achievements: [
            "Performed validation of medical device software for regulatory compliance (ISO 13485, IEC 62304).",
            "Tested cloud-synced applications and APIs for medical telemetry devices.",
            "Designed and executed functional, integration, and compatibility test scenarios."
        ]
    }
];

export default function Experience() {
    return (
        <section className={`section ${styles.experience}`}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Career <span className="text-gradient">Journey</span></h2>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.timelinePoint}></div>
                            <div className={styles.timelineContent}>
                                <div className={styles.header}>
                                    <h3>{exp.role}</h3>
                                    <span className={styles.period}>{exp.period}</span>
                                </div>
                                <h4 className={styles.company}>{exp.company}</h4>
                                <ul className={styles.achievements}>
                                    {exp.achievements.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
