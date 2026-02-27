import styles from './Experience.module.css';

const experiences = [
    {
        role: "Lead QA Automation Engineer",
        company: "Current Company",
        period: "2021 - Present",
        achievements: [
            "Architected a scalable Playwright automation framework reducing test execution time by 40%.",
            "Integrated automated suites into GitHub Actions, achieving true continuous deployment.",
            "Mentored a team of QA engineers to transition from manual to automated testing practices."
        ]
    },
    {
        role: "Senior QA Engineer",
        company: "Previous Company",
        period: "2018 - 2021",
        achievements: [
            "Developed Selenium WebDriver frameworks leveraging Page Object Model for Web UI.",
            "Conducted extensive REST API testing using RestAssured and Postman collections.",
            "Participated in agile sprint plannings to define acceptance criteria and test strategies."
        ]
    },
    {
        role: "QA Analyst",
        company: "First Company",
        period: "2015 - 2018",
        achievements: [
            "Executed comprehensive manual test plans for complex enterprise web applications.",
            "Managed defect tracking lifecycle resulting in a 25% reduction in production escapes.",
            "Initiated first steps toward automation utilizing basic scripting and tools."
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
