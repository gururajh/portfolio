import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={`${styles.hero} animate-fade-in`}>
            <div className="container">
                <h1 className={styles.title}>
                    Gururaj Hegde <br />
                    <span className="text-gradient">Lead QA & Automation Engineer</span>
                </h1>
                <p className={styles.subtitle}>
                    10+ Years of crafting resilient automation frameworks, ensuring continuous quality, and empowering seamless CI/CD pipelines.
                </p>
                <div className={styles.ctaGroup}>
                    <a href="#expertise" className={styles.primaryBtn}>Explore Expertise</a>
                    <a href="#contact" className={styles.secondaryBtn}>Get in Touch</a>
                </div>
            </div>
        </section>
    );
}
