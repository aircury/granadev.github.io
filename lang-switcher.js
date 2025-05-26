// lang-switcher.js
// Shared language switching logic for Granadev

(function () {
    // --- Translations Object ---
    const translations = {
        en: {
            navHome: "Home", navServices: "Services", navAbout: "About Us", navContact: "Contact", navSoc: "Summer of Code",
            heroHeadline: "Quality Software Made in Granada",
            heroSubheadline: "We blend cutting-edge technology with local expertise to craft custom software, web applications, and mobile solutions that drive your business forward.", heroCTA: "Request a Consultation",
            servicesTitle: "Our Expertise, Your Solution", service1Title: "Custom Software Development", service1Desc: "Tailored software built precisely for your unique business processes and goals.", service2Title: "Web Application Development", service2Desc: "Powerful, scalable, and user-friendly web apps to engage your audience and streamline operations.", service3Title: "Mobile App Development (iOS & Android)", service3Desc: "Native and cross-platform mobile applications that deliver seamless user experiences on any device.", service4Title: "UI/UX Design", service4Desc: "Intuitive and engaging interfaces designed to delight users and enhance usability.",
            aboutTitle: "Why Partner with Granadev?", 
            aboutMainTitle: "Your Local Tech Partner in Granada",
            aboutMainDesc: "Based in the heart of Granada's tech ecosystem, we combine local expertise with global standards to deliver exceptional software solutions. Our team of passionate developers and designers work closely with you to understand your unique needs and transform them into powerful digital solutions.",
            aboutHighlight: "100% Local Team | 10+ Years Experience | 50+ Successful Projects",
            aboutStat1Title: "Projects", aboutStat1Value: "50+",
            aboutStat2Title: "Team", aboutStat2Value: "15+",
            aboutStat3Title: "Experience", aboutStat3Value: "10+",
            aboutStat4Title: "Clients", aboutStat4Value: "30+",
            aboutPoint1Title: "Granada-Based Expertise", aboutPoint1Desc: "Rooted in the vibrant tech scene of Granada, we combine local talent with global standards.",
            aboutPoint2Title: "Tailored Solutions", aboutPoint2Desc: "We don't believe in one-size-fits-all. Your software is built specifically for your needs.",
            aboutPoint3Title: "Quality & Innovation", aboutPoint3Desc: "Committed to delivering robust, reliable, and forward-thinking software using modern technologies.",
            aboutPoint4Title: "Client-Centric Approach", aboutPoint4Desc: "We work collaboratively with you, ensuring transparency and alignment throughout the project lifecycle.",
            contactTitle: "Let's Build Something Great Together", 
            contactIntro: "Have a project in mind or questions about our services? We'd love to hear from you!",
            contactAddressLabel: "Our Office", 
            contactAddressValue: "Calle Recogidas, 35, 1A<br>18005 Granada, Spain",
            contactEmailLabel: "Email Us", 
            contactEmailValue: "info@granadev.es",
            contactHoursLabel: "Business Hours",
            footerText: `© ${new Date().getFullYear()} Granadev. All Rights Reserved.`,
            // Summer of Code page
            heroTitle: "SUMMER", heroOf: "OF", heroCode: "CODE", heroScholarships: "3 SCHOLARSHIPS OF", heroAmount: "3000 €", heroEach: "EACH", heroSubtitle: "FOR 3 PROJECTS THIS SUMMER",
            mainPitch: "We reward the best open source proposals related to education or other social benefit",
            forStudents: "FOR PROGRAMMING STUDENTS", studentReq: "You only need to be enrolled in a degree related to:", studentReq1: "Programming", studentReq2: "Web development", studentReq3: "Cross-platform applications",
            sendTo: "SEND TO", socEmail: "summerofcode@aircury.es", proposal: "Proposal presentation", techList: "List of technologies", form: "Form provided in the rules",
            until: "UNTIL", deadline: "End of June", eval: "Evaluation of proposals and announcement of winners in the first days of July",
            ready: "Ready to participate?", info: "Informative piece.<br>The conditions and rules of the contest are described at the link ", basesLink: "bit.ly/aircury-summer-of-code-bases", bases: "RULES",
            sendProposal: "Send Proposal", seeBases: "See Rules", collab: "In collaboration with", aircury: "Aircury"
        },
        es: {
            navHome: "Inicio", navServices: "Servicios", navAbout: "Quiénes Somos", navContact: "Contacto", navSoc: "Summer of Code",
            heroHeadline: "Software de Calidad Hecho en Granada",
            heroSubheadline: "Combinamos tecnología punta con talento local para crear software a medida, aplicaciones web y soluciones móviles que impulsan tu negocio.", heroCTA: "Solicita una Consulta",
            servicesTitle: "Nuestra Experiencia, Tu Solución", service1Title: "Desarrollo de Software a Medida", service1Desc: "Software personalizado, construido precisamente para tus procesos de negocio y objetivos únicos.", service2Title: "Desarrollo de Aplicaciones Web", service2Desc: "Aplicaciones web potentes, escalables y fáciles de usar para atraer a tu audiencia y optimizar operaciones.", service3Title: "Desarrollo de Apps Móviles (iOS y Android)", service3Desc: "Aplicaciones móviles nativas y multiplataforma que ofrecen experiencias de usuario fluidas en cualquier dispositivo.", service4Title: "Diseño UI/UX", service4Desc: "Interfaces intuitivas y atractivas diseñadas para deleitar a los usuarios y mejorar la usabilidad.",
            aboutTitle: "¿Por Qué Elegir Granadev?",
            aboutMainTitle: "Tu Socio Tecnológico Local en Granada",
            aboutMainDesc: "Ubicados en el corazón del ecosistema tecnológico de Granada, combinamos la experiencia local con estándares globales para ofrecer soluciones de software excepcionales. Nuestro equipo de desarrolladores y diseñadores apasionados trabaja estrechamente contigo para entender tus necesidades únicas y transformarlas en potentes soluciones digitales.",
            aboutHighlight: "Equipo 100% Local | 10+ Años de Experiencia | 50+ Proyectos Exitosos",
            aboutStat1Title: "Proyectos", aboutStat1Value: "50+",
            aboutStat2Title: "Equipo", aboutStat2Value: "15+",
            aboutStat3Title: "Experiencia", aboutStat3Value: "10+",
            aboutStat4Title: "Clientes", aboutStat4Value: "30+",
            aboutPoint1Title: "Experiencia Local en Granada", aboutPoint1Desc: "Arraigados en la vibrante escena tecnológica de Granada, combinamos talento local con estándares globales.",
            aboutPoint2Title: "Soluciones a Medida", aboutPoint2Desc: "No creemos en soluciones únicas para todos. Tu software se construye específicamente para tus necesidades.",
            aboutPoint3Title: "Calidad e Innovación", aboutPoint3Desc: "Comprometidos con la entrega de software robusto, fiable y vanguardista utilizando tecnologías modernas.",
            aboutPoint4Title: "Enfoque Centrado en el Cliente", aboutPoint4Desc: "Trabajamos en colaboración contigo, asegurando transparencia y alineación durante todo el ciclo de vida del proyecto.",
            contactTitle: "Construyamos Algo Grande Juntos", 
            contactIntro: "¿Tienes un proyecto en mente o preguntas sobre nuestros servicios? ¡Nos encantaría escucharte!",
            contactAddressLabel: "Nuestra Oficina", 
            contactAddressValue: "Calle Recogidas, 35, 1A<br>18005 Granada, España",
            contactEmailLabel: "Escríbenos", 
            contactEmailValue: "info@granadev.es",
            contactHoursLabel: "Horario de Atención",
            footerText: `© ${new Date().getFullYear()} Granadev. Todos los Derechos Reservados.`,
            // Summer of Code page
            heroTitle: "SUMMER OF CODE", heroOf: "OF", heroCode: "CODE", heroScholarships: "3 BECAS DE", heroAmount: "3000 €", heroEach: "CADA UNA", heroSubtitle: "PARA 3 PROYECTOS ESTE VERANO",
            mainPitch: "Premiamos las mejores propuestas de código abierto relacionadas con la educación u otro beneficio social",
            forStudents: "PARA ESTUDIANTES DE PROGRAMACIÓN", studentReq: "Solo necesitas estar cursando un título reglado relacionado con:", studentReq1: "La programación", studentReq2: "El desarrollo web", studentReq3: "Aplicaciones multiplataforma",
            sendTo: "ENVÍA A", socEmail: "summerofcode@aircury.es", proposal: "Presentación de tu propuesta", techList: "Listado de tecnologías", form: "Formulario facilitado en las bases",
            until: "HASTA", deadline: "Final de junio", eval: "Evaluación de las propuestas y declaración de ganadores en los primeros días de julio",
            ready: "¿Listo para participar?", info: "Pieza de carácter informativo.<br>Las condiciones y las bases del concurso se encuentran descritas en el enlace ", basesLink: "bit.ly/aircury-summer-of-code-bases", bases: "BASES",
            sendProposal: "Enviar Propuesta", seeBases: "Ver Bases", collab: "En colaboración con", aircury: "Aircury"
        }
    };

    // --- DOM Element Selection ---
    function getElements() {
        return {
            translatableElements: document.querySelectorAll('[data-key]'),
            langButtons: document.querySelectorAll('.lang-btn'),
            htmlElement: document.documentElement,
            mobileMenuToggle: document.querySelector('.mobile-menu-toggle'),
            navLinks: document.querySelector('.nav-links')
        };
    }

    // --- URL Query Parameter Helpers ---
    function getLangFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('lang');
    }
    function setLangInUrl(lang) {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url);
    }

    // --- Language Switching Function ---
    function setLanguage(lang) {
        const { translatableElements, langButtons, htmlElement } = getElements();
        if (!translations[lang]) {
            console.error(`Language ${lang} not found in translations.`);
            return;
        }
        htmlElement.setAttribute('lang', lang);
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                const value = translations[lang][key];
                if (element.getAttribute('data-key') === key) {
                    if (key === 'info' || key === 'contactAddressValue') {
                        element.innerHTML = value;
                    } else if ((key === 'socEmail' || key === 'contactEmailValue') && element.tagName === 'A') {
                        element.href = `mailto:${value}`;
                        element.textContent = value;
                    } else if (element.placeholder !== undefined && (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA')) {
                        element.placeholder = value;
                    } else {
                        element.textContent = value;
                    }
                }
            }
        });
        langButtons.forEach(btn => {
            const btnLang = btn.id.split('-')[1];
            btn.classList.toggle('active', btnLang === lang);
            btn.classList.toggle('border-silver-tree-green', btnLang === lang);
            btn.classList.toggle('bg-silver-tree-green/10', btnLang === lang);
        });
        localStorage.setItem('preferredLanguage', lang);
        setLangInUrl(lang);
    }

    // --- Event Listeners ---
    function setupLanguageButtons() {
        const { langButtons, navLinks, mobileMenuToggle } = getElements();
        langButtons.forEach(button => {
            button.addEventListener('click', () => {
                const lang = button.id.includes('lang-en') ? 'en' : 'es';
                setLanguage(lang);
                // Close mobile menu if open after language change
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    navLinks.classList.add('hidden');
                    if (mobileMenuToggle) {
                        mobileMenuToggle.textContent = '☰';
                        mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    }
                }
            });
        });
    }

    // --- Initial Language Load ---
    document.addEventListener('DOMContentLoaded', () => {
        setupLanguageButtons();
        const urlLang = getLangFromUrl();
        const preferredLanguage = localStorage.getItem('preferredLanguage');
        const browserLanguage = navigator.language.split('-')[0];
        const langToUse = urlLang || preferredLanguage || (translations[browserLanguage] ? browserLanguage : 'en');
        setLanguage(langToUse);
    });

    // Expose setLanguage for manual use if needed
    window.setLanguage = setLanguage;
})(); 