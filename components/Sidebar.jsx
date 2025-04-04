import React from 'react';

const Sidebar = () => {
    return (
        <div style={styles.sidebar}>
            <h2 style={styles.title}>Subir CSV</h2>
            <ul style={styles.nav}>
                <li><a href="/" style={styles.link}>Inicio</a></li>
                <li><a href="/acerca-de" style={styles.link}>Acerca de</a></li>
                <li><a href="#" style={styles.link}>Subir CSV</a></li>
                <li><a href="#" style={styles.link}>Configuración</a></li>
            </ul>
        </div>
    );
}

const styles = {
    sidebar: {
        width: '220px',
        height: '100vh',
        backgroundColor: '#2c3e50',
        color: '#ecf0f1',
        padding: '1rem',
        position: 'fixed',
        top: '0',
        left: '0',
    },
    title: {
        fontSize: '1.5rem',
        marginBottom: '2rem',
    },
    nav: {
        listStyle: 'none',
        padding: '0',
        display: 'flex', // corregido
        flexDirection: 'column',
        gap: '1rem',
    },
    link: {
        color: '#ecf0f1',
        textDecoration: 'none',
    }
}

export default Sidebar;
