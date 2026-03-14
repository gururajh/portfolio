import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={`${styles.hero} animate-fade-in`}>
            <div className="container">
                <h1 className={styles.title}>
                    Gururaj Hegde <br />
                    <span className="text-gradient">Senior QA & Automation Engineer</span>
                </h1>
                <p className={styles.subtitle}>
                    ISTQB Certified QA Engineer with 10 years of experience ensuring quality across mobile, cloud, and medical device domains.
                </p>
                <div className={styles.ctaGroup}>
                    <a href="#expertise" className={styles.primaryBtn}>Explore Expertise</a>
                    <a href="#contact" className={styles.secondaryBtn}>Get in Touch</a>
                </div>
            </div>
        </section>
    );
}
