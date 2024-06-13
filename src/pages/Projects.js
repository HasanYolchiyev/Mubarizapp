import React from 'react';
import "./Projects.css";

const Projects = () => {
    return (
        <section className="projects-section">
            <h2 className="section-title">Layihələr</h2>
            <ul className="project-list">
                <li>Dövlət özlləşdirmə payları</li>
                <li>Elmi çalışmalar: Məqalə və kitablar</li>
                <li>Məhkəmə işləri:
                    <ul>
                        <li>Mülki işlər</li>
                        <li>Kommersiya işləri</li>
                        <li>Cinayət işləri</li>
                        <li>İnzibati işlər</li>
                    </ul>
                </li>
                <li>Konstitusiya Məhkəməsi:
                    <ul>
                        <li>Qərarlar və təhlillər</li>
                        <li>Rəylər...</li>
                        <li>Foto galeriya</li>
                    </ul>
                </li>
                <li>Ali Məhkəmə: qərarlar və təhlillər</li>
            </ul>
        </section>
    );
}

export default Projects;
