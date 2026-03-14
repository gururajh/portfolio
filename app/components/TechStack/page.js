import styles from './TechStack.module.css';

const techGroups = [
    {
        category: "Automation & API Tools",
        items: ["Playwright", "Selenium", "Postman"]
    },
    {
        category: "Languages & OS",
        items: ["TypeScript", "Python", "Windows", "Linux"]
    },
    {
        category: "Test Management & Defect Tracking",
        items: ["Jira", "Bugzilla", "Azure DevOps"]
    },
    {
        category: "Standards & Compliance",
        items: ["ISO 13485", "IEC 62304", "HIPAA", "DICOM", "HL7"]
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
