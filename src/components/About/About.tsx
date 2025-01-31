import React from "react";
import styles from './About.module.css';

interface AboutProps {
  name: string; // nom de la personne
  git: string; // le lien vers le profil GitHub
  photo: string; // URL de la photo  de la personne
}

const About: React.FC<AboutProps> = ({ name, git, photo }) => {
  const altText = name ? `${name}'s photo` : "Profile picture"; 
  return (
    <section className={styles.about}>
      <img 
        className={styles.photo} 
        src={photo} 
        alt={altText} 
      />
      <div className={styles.details}>
        <h2 className={styles.name}>{name}</h2>
        <a
          className={styles.git}
          href={git}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile
        </a>
      </div>
    </section>
  );
};

export default About;
