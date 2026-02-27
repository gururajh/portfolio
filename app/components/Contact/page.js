import styles from './Contact.module.css';

export default function Contact() {
    return (
        <footer id="contact" className={`section ${styles.contact}`}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>Let's Build Quality Together</h2>
                    <p className={styles.subtitle}>
                        Open to discussing scalable automation frameworks, QA strategy, or exciting new roles.
                    </p>

                    <div className={styles.links}>
                        <a href="mailto:gururajahegdev@gmail.com" className={styles.primaryLink}>
                            Email Me ✉️
                        </a>
                        <a href="https://github.com/gururajh" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            GitHub 💻
                        </a>
                        <a href="https://www.linkedin.com/in/gururajahegdev" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            LinkedIn 🤝
                        </a>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} Gururaj Hegde. Built with Next.js & Vanilla CSS.</p>
                </div>
            </div>
        </footer>
    );
}
