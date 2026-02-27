import styles from './TechStack.module.css';

const techGroups = [
    {
        category: "Automation Frameworks",
        items: ["Selenium WebDriver", "Playwright", "Cypress", "Appium", "RestAssured"]
    },
    {
        category: "Languages & Core",
        items: ["Java", "JavaScript", "TypeScript", "Python", "SQL"]
    },
    {
        category: "CI/CD & DevOps",
        items: ["Jenkins", "GitHub Actions", "Docker", "Git", "Maven/Gradle"]
    },
    {
        category: "Testing & Management",
        items: ["JIRA", "TestRail", "Postman", "JMeter", "Allure"]
    }
];

export default function TechStack() {
    return (
        <section className={`section ${styles.techStack}`}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Technical <span className="text-gradient">Arsenal</span></h2>

                <div className={styles.grid}>
                    {techGroups.map((group, index) => (
                        <div key={index} className={styles.categoryCard}>
                            <h3 className={styles.categoryTitle}>{group.category}</h3>
                            <div className={styles.tagList}>
                                {group.items.map((item, i) => (
                                    <span key={i} className={styles.tag}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
