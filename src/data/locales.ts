export const locales = {
    en: {
        personalInfo: {
            name: "Marouane ACHARIFI",
            role: "Future Robotics Engineer | IoT & AI Specialist",
            location: "Nador, Morocco",
            phone: "+212 650944873",
            email: "marouane6acharifi@gmail.com",
            linkedin: "https://linkedin.com/in/marouane-acharifi",
            github: "https://github.com/MaroIng01",
            summary: "Future Robotics and IoT Engineer specializing in the design of intelligent solutions. I have solid experience in cobotics development integrating AI (Computer Vision) and in designing end-to-end IoT devices. Proficient in low-level programming (C++, ESP32) and control application development (Flutter), I am seeking a 4 to 6-month final-year internship to apply my skills to the creation of autonomous and interactive robotic systems."
        },
        nav: {
            about: "About",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            role: "ROBOTICS & AI ENGINEER",
            baseText: "Robotics<br/>Engineer",
            revealText: "Intelligent<br/>Machines",
            subtitle: "Building the next generation of",
            highlight: "Autonomous Systems",
            downloadCv: "Download CV",
            cvUrl: "/cv/Marouane_ACHARIFI_ShortEngCV.pdf"
        },
        about: {
            title: "01. About Me",
            revealTitle: "My Story",
            backgroundTitle: "ABOUT",
            skillTooltip: "A key technical skill in my arsenal."
        },
        experience: {
            title: "Experience 02.",
            revealTitle: "My Journey",
            backgroundTitle: "EXPERIENCE"
        },
        projects: {
            title: "Selected Works 03.",
            revealTitle: "My Creations",
            backgroundTitle: "WORK",
            code: "Code",
            details: "Details"
        },
        contact: {
            title: "Get In Touch !",
            revealTitle: "Let's Talk !",
            backgroundTitle: "CONTACT",
            subtitle: "I am currently seeking a 4-6 month final year internship in Robotics & AI.\nOpen to opportunities worldwide.",
            emailMe: "Email Me",
            callMe: "Call Me",
            location: "Location",
            connect: "CONNECT WITH ME"
        },
        education: [
            {
                school: "National School of AI and Digital, Berkane",
                degree: "Master of Engineering in Robotics and IoT",
                period: "2023–Present"
            },
            {
                school: "Faculty of Sciences, Rabat",
                degree: "Professional Bachelor’s Degree in Cybersecurity and Systems Engineering",
                period: "2022–2023"
            },
            {
                school: "Higher School of Technology, Oujda",
                degree: "University Diploma of Technology in Embedded Computing",
                period: "2020–2022"
            }
        ],
        experienceData: [
            {
                role: "Flutter Developer Intern",
                company: "CDO-Formation",
                period: "Jul-Sep 2025",
                location: "France-Remote",
                description: [
                    "Developed a cross-platform mobile application (iOS & Android) for the CDO-Formation training center using Flutter.",
                    "Provided users with centralized access to the center’s services and practical information.",
                    "Integrated a secure client area via a WebView to ensure a smooth and unified user experience."
                ]
            },
            {
                role: "IT Monitoring Intern",
                company: "Customs and Indirect Taxes Administration (ADII)",
                period: "May-Jul 2023",
                location: "Rabat",
                description: [
                    "Implemented a comprehensive IT monitoring solution using the Zabbix platform to oversee critical infrastructures.",
                    "Actively monitored Windows servers by deploying and configuring the Zabbix Agent and using the SNMP protocol.",
                    "Monitored network equipment, including F5 BIG-IP load balancers, to ensure high availability.",
                    "Developed custom dashboards and configured alert thresholds to proactively detect and resolve system incidents."
                ]
            },
            {
                role: "Embedded Systems Intern",
                company: "Mohammed VI University Hospital (CHU)",
                period: "Apr-Jun 2022",
                location: "Oujda",
                description: [
                    "Designed and developed a portable IoT device for real-time processing and tracking of blood samples.",
                    "Programmed an ESP32 microcontroller to integrate a barcode reader, an RFID reader (RC522), a color sensor (TCS3200), and servo motors.",
                    "Configured the device to connect to a WiFi network, retrieve patient data from a remote JSON file, and transmit results to a management system.",
                    "Designed and created a custom 3D-printed enclosure for the prototype using Tinkercad."
                ]
            }
        ],
        projectsData: [
            {
                title: "Cobotic License Plate Recognition System",
                tech: ["Robotics", "Computer Vision", "YOLOv8", "Gemini API", "Hybrid Architecture"],
                description: "Autonomous mobile robot featuring a robust Hybrid Architecture. Combines YOLOv8 for precise object detection with Google's Gemini API for advanced OCR, replacing traditional CRNN for superior accuracy."
            },
            {
                title: "AgroSys: Smart Solar Irrigation Mobile App",
                tech: ["Flutter", "IoT", "Google Generative AI", "RAG"],
                description: "Mobile app for remote irrigation control. Integrated smart assistant using RAG for agronomic advice. Designed embedded control system for hardware communication."
            },
            {
                title: "Reinforcement Learning AI Agent",
                tech: ["Unity ML-Agents", "PPO", "Reinforcement Learning"],
                description: "AI agent capable of autonomous navigation in complex 3D environments using Unity ML-Agents and PPO algorithm."
            },
            {
                title: "Smart Environment",
                tech: ["IoT", "ESP32", "ThingsBoard", "MQTT"],
                description: "Real-time air quality monitoring system. ESP32 collects data and transmits to ThingsBoard cloud via MQTT. Multi-channel alert system for pollution thresholds."
            },
            {
                title: "Earthquake Magnitude Prediction",
                tech: ["Machine Learning", "Python", "Scikit-learn", "Pandas"],
                description: "Regression models (Random Forest, SVR) to predict earthquake magnitude. Achieved 99% R² score."
            }
        ],
        skills: {
            "Robotics & IoT": ["Flutter", "Dart", "C/C++", "ROS", "ESP32", "Arduino", "Raspberry Pi", "3D Printing"],
            "AI & Data Science": ["Python", "Machine Learning"],
            "IT & Systems": ["Cybersecurity Principles"],
            "Tools": ["Git", "GitHub", "Trello"]
        },
        skillDescriptions: {
            "Flutter": "UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
            "Dart": "Client-optimized language for fast apps on any platform, powering the Flutter framework.",
            "C/C++": "Low-level programming languages essential for firmware development and high-performance robotics control.",
            "ROS": "Robot Operating System: The industry standard middleware for robot software development.",
            "ESP32": "Low-cost, low-power system on a chip microcontrollers with integrated Wi-Fi and dual-mode Bluetooth.",
            "Arduino": "Open-source electronics platform based on easy-to-use hardware and software for prototyping.",
            "Raspberry Pi": "Single-board computer used for edge computing, robotics control, and IoT gateways.",
            "3D Printing": "Rapid prototyping technology for creating custom mechanical parts and robot enclosures.",
            "Python": "Versatile programming language used extensively in AI, scripting, and data analysis.",
            "Machine Learning": "Algorithms that give computers the ability to learn without being explicitly programmed.",
            "Cybersecurity Principles": "Foundational knowledge for securing networks, systems, and IoT devices.",
            "Git": "Distributed version control system for tracking changes in source code.",
            "GitHub": "Platform for hosting and reviewing code, managing projects, and building software.",
            "Trello": "Visual tool for organizing work and managing projects."
        }
    },
    fr: {
        personalInfo: {
            name: "Marouane ACHARIFI",
            role: "Futur Ingénieur Robotique | Spécialiste IoT & IA",
            location: "Nador, Maroc",
            phone: "+212 650944873",
            email: "marouane6acharifi@gmail.com",
            linkedin: "https://linkedin.com/in/marouane-acharifi",
            github: "https://github.com/MaroIng01",
            summary: "Futur ingénieur en robotique et IoT, spécialisé dans la conception de solutions intelligentes. J'ai une solide expérience en développement cobotique intégrant l'IA (Vision par ordinateur) et en conception de dispositifs IoT de bout en bout. Compétent en programmation bas niveau (C++, ESP32) et en développement d'applications de contrôle (Flutter), je recherche un stage de fin d'études de 4 à 6 mois pour appliquer mes compétences à la création de systèmes robotiques autonomes et interactifs."
        },
        nav: {
            about: "À propos",
            experience: "Expérience",
            projects: "Projets",
            contact: "Contact"
        },
        hero: {
            role: "INGÉNIEUR ROBOTIQUE & IA",
            baseText: "Ingénieur<br/>Robotique",
            revealText: "Machines<br/>Intelligentes",
            subtitle: "Construire la prochaine génération de",
            highlight: "Systèmes Autonomes",
            downloadCv: "Télécharger CV",
            cvUrl: "/cv/Marouane_ACHARIFI_ENIAD_ROC3.pdf"
        },
        about: {
            title: "01. À Propos",
            revealTitle: "Mon Histoire",
            backgroundTitle: "À PROPOS",
            skillTooltip: "Une compétence technique clé dans mon arsenal."
        },
        experience: {
            title: "Expérience 02.",
            revealTitle: "Mon Parcours",
            backgroundTitle: "PARCOURS"
        },
        projects: {
            title: "Projets 03.",
            revealTitle: "Mes Créations",
            backgroundTitle: "PROJETS",
            code: "Code",
            details: "Détails"
        },
        contact: {
            title: "Restons en Contact !",
            revealTitle: "Discutons !",
            backgroundTitle: "CONTACT",
            subtitle: "Je suis actuellement à la recherche d'un stage de fin d'études de 4 à 6 mois en Robotique & IA.\nOuvert aux opportunités dans le monde entier.",
            emailMe: "Email",
            callMe: "Téléphone",
            location: "Localisation",
            connect: "CONNECTEZ-VOUS AVEC MOI"
        },
        education: [
            {
                school: "École Nationale d'IA et du Digital, Berkane",
                degree: "Élève Ingénieur en Robotique et IoT",
                period: "2023–Présent"
            },
            {
                school: "Faculté des Sciences, Rabat",
                degree: "Licence Professionnelle en Cyber-sécurité et Ingénierie des Systèmes",
                period: "2022–2023"
            },
            {
                school: "École Supérieure de Technologie, Oujda",
                degree: "Diplôme Universitaire de Technologie en Informatique Embarquée",
                period: "2020–2022"
            }
        ],
        experienceData: [
            {
                role: "Stagiaire Développeur Flutter",
                company: "CDO-Formation",
                period: "Juil-Sep 2025",
                location: "France-Télétravail",
                description: [
                    "Développement d'une application mobile multiplateforme (iOS et Android) pour le centre de formation CDO-Formation avec Flutter.",
                    "Fourniture aux utilisateurs d'un accès centralisé aux services du centre et aux informations pratiques.",
                    "Intégration d'un espace client sécurisé via une WebView pour assurer une expérience utilisateur fluide et unifiée."
                ]
            },
            {
                role: "Stagiaire Supervision Informatique",
                company: "Administration des Douanes et Impôts Indirects (ADII)",
                period: "Mai-Juil 2023",
                location: "Rabat",
                description: [
                    "Mise en œuvre d'une solution complète de supervision informatique utilisant la plateforme Zabbix pour surveiller les infrastructures critiques.",
                    "Surveillance active des serveurs Windows par le déploiement et la configuration de l'agent Zabbix et l'utilisation du protocole SNMP.",
                    "Surveillance des équipements réseau, y compris les équilibreurs de charge F5 BIG-IP, pour assurer une haute disponibilité.",
                    "Développement de tableaux de bord personnalisés et configuration de seuils d'alerte pour détecter et résoudre de manière proactive les incidents système."
                ]
            },
            {
                role: "Stagiaire Systèmes Embarqués",
                company: "Centre Hospitalier Universitaire Mohammed VI (CHU)",
                period: "Avr-Juin 2022",
                location: "Oujda",
                description: [
                    "Conception et développement d'un dispositif IoT portable pour le traitement et le suivi en temps réel d'échantillons sanguins.",
                    "Programmation d'un microcontrôleur ESP32 pour intégrer un lecteur de codes-barres, un lecteur RFID (RC522), un capteur de couleur (TCS3200) et des servomoteurs.",
                    "Configuration du dispositif pour se connecter à un réseau WiFi, récupérer les données des patients à partir d'un fichier JSON distant et transmettre les résultats à un système de gestion.",
                    "Conception et création d'un boîtier sur mesure imprimé en 3D pour le prototype à l'aide de Tinkercad."
                ]
            }
        ],
        projectsData: [
            {
                title: "Système Cobotique de Reconnaissance de Plaques",
                tech: ["Robotique", "Vision par Ordinateur", "YOLOv8", "API Gemini", "Architecture Hybride"],
                description: "Robot mobile autonome doté d'une architecture hybride robuste. Combine YOLOv8 pour une détection d'objets précise avec l'API Gemini de Google pour une OCR avancée, remplaçant le CRNN traditionnel pour une précision supérieure."
            },
            {
                title: "AgroSys : App Mobile d'Irrigation Solaire Intelligente",
                tech: ["Flutter", "IoT", "Google Generative AI", "RAG"],
                description: "Application mobile pour le contrôle de l'irrigation à distance. Assistant intelligent intégré utilisant le RAG pour des conseils agronomiques. Conception d'un système de contrôle embarqué pour la communication matérielle."
            },
            {
                title: "Agent IA par Apprentissage par Renforcement",
                tech: ["Unity ML-Agents", "PPO", "Apprentissage par Renforcement"],
                description: "Agent IA capable de navigation autonome dans des environnements 3D complexes utilisant Unity ML-Agents et l'algorithme PPO."
            },
            {
                title: "Environnement Intelligent",
                tech: ["IoT", "ESP32", "ThingsBoard", "MQTT"],
                description: "Système de surveillance de la qualité de l'air en temps réel. L'ESP32 collecte les données et les transmet au cloud ThingsBoard via MQTT. Système d'alerte multicanal pour les seuils de pollution."
            },
            {
                title: "Prédiction de Magnitude de Séismes",
                tech: ["Machine Learning", "Python", "Scikit-learn", "Pandas"],
                description: "Modèles de régression (Forêt Aléatoire, SVR) pour prédire la magnitude des séismes. Score R² de 99% atteint."
            }
        ],
        skills: {
            "Robotique & IoT": ["Flutter", "Dart", "C/C++", "ROS", "ESP32", "Arduino", "Raspberry Pi", "Impression 3D"],
            "IA & Data Science": ["Python", "Machine Learning"],
            "IT & Systèmes": ["Principes de Cybersécurité"],
            "Outils": ["Git", "GitHub", "Trello"]
        },
        skillDescriptions: {
            "Flutter": "Toolkit UI pour créer des applications natives compilées pour mobile, web et bureau.",
            "Dart": "Langage optimisé pour les applications rapides, propulsant le framework Flutter.",
            "C/C++": "Langages bas niveau essentiels pour le firmware et le contrôle robotique haute performance.",
            "ROS": "Robot Operating System : Le middleware standard pour le développement logiciel robotique.",
            "ESP32": "Microcontrôleurs SoC à faible coût et faible consommation avec Wi-Fi et Bluetooth intégrés.",
            "Arduino": "Plateforme électronique open-source pour le prototypage rapide matériel et logiciel.",
            "Raspberry Pi": "Ordinateur monocarte utilisé pour le edge computing et le contrôle robotique.",
            "Impression 3D": "Technologie de prototypage rapide pour créer des pièces mécaniques sur mesure.",
            "Python": "Langage polyvalent utilisé extensivement en IA, scripting et analyse de données.",
            "Machine Learning": "Algorithmes permettant aux ordinateurs d'apprendre sans être explicitement programmés.",
            "Principes de Cybersécurité": "Connaissances fondamentales pour sécuriser les réseaux et les objets connectés.",
            "Git": "Système de contrôle de version distribué pour le suivi des modifications de code.",
            "GitHub": "Plateforme pour l'hébergement de code, la gestion de projets et la collaboration.",
            "Trello": "Outil visuel pour l'organisation du travail et la gestion de projets agile."
        }
    }
};

export type LocaleData = typeof locales.en;
