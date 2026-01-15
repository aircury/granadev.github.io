// lang-switcher.js
// Shared language switching logic for Granadev

(function () {
    // --- Translations Object ---
    const translations = {
        en: {
            navHome: "Home", navServices: "Services", navAbout: "About Us", navContact: "Contact", navSoc: "Summer of Code", navOffers: "Job Offers",
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
            sendProposal: "Send Proposal", seeBases: "See Rules", collab: "In collaboration with", aircury: "Aircury",
            // Job Offers page
            offersTitle: "Job Offers", offersSubtitle: "Join our team and help us build quality software solutions",
            offerTitle: "Software Developer Position", offerIntro: "We are looking for talented developers to join our team. This is an excellent opportunity for those starting their career in software development.",
            lookingForTitle: "What are we looking for?",
            lookingForDesc1: "We are looking for a junior programmer who has a passion for web application development. For this position we do not require previous experience. You need to know how to program.",
            lookingForDesc2: "We are looking for someone who is good at programming, eager to learn and grow. We don't need you to have formal education, but you will have to demonstrate that you have aptitudes for this position.",
            lookingForDesc3: "Have sufficient English level to be able to communicate well with native speakers. You don't need to have formal education or any certificate, but to give you an idea, around B2 level. Several of the colleagues are English and don't speak Spanish.",
            standOutTitle: "What would make you stand out?", standOutDesc: "For this position, it is essential to have a disability certificate equal to or greater than 33%.", standOutNote: "We're not looking for all of this, it's a list of qualities that if you have any, would make you stand out:",
            standOut1: "Demonstrating your creativity, originality and willingness to work.",
            standOut2: "Being up to date with industry trends.",
            standOut3: "Having experience with some version control system, ideally Git.",
            standOut4: "Currently studying or having completed a vocational training cycle or degree in Computer Science or related field.",
            standOut5: "Alternatively, demonstrating that you have had an interest in learning things independently, such as taking online courses.",
            standOut6: "If you have some experience with any of the technologies we use, it always helps (PHP, Javascript, Symfony, Laravel, Python, .NET, Ruby, Postgres, AWS, React, Vue).",
            processTitle: "What will the selection process be like?",
            process1: "We review your profile and see if it could fit with what we're looking for or not.",
            process2: "First interview and initial contact.",
            process3: "English level test.",
            process4: "Code test.",
            process5: "In-depth interview.",
            processNote: "If you need any adaptation in the tests or interviews, please let us know so we can make the necessary adjustments.",
            offerWhatTitle: "What do we offer?",
            offer1: "For this position we are looking for someone at point T1 to D4 on our scale (Intern to Junior), which means from 16,576 to 23,042 euros gross per year.",
            offer2: "Permanent contract.",
            offer3: "On-site work mode.",
            offer4: "Full-time schedule.",
            offer5: "Annual contract review.",
            offer6: "Great opportunities for progression.",
            offer7: "Fantastic access to professional development resources.",
            offer8: "Budget for training, conferences, etc.",
            offer9: "Flexible hours within the 7:30-19:30h interval, to overlap with colleagues.",
            offer10: "Great co-workers who are very happy to work at this company.",
            offer11: "Optional workshops and activities to socialize (health, cooking, board games...)",
            contactOffer: "If you are interested in this offer, please send your CV to:",
            thankYou: "Thank you very much!"
        },
        es: {
            navHome: "Inicio", navServices: "Servicios", navAbout: "Quiénes Somos", navContact: "Contacto", navSoc: "Summer of Code", navOffers: "Ofertas de Trabajo",
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
            sendProposal: "Enviar Propuesta", seeBases: "Ver Bases", collab: "En colaboración con", aircury: "Aircury",
            // Job Offers page
            offersTitle: "Ofertas de Trabajo", offersSubtitle: "Únete a nuestro equipo y ayúdanos a construir soluciones de software de calidad",
            offerTitle: "Puesto de Desarrollador de Software", offerIntro: "Buscamos desarrolladores con talento para unirse a nuestro equipo. Esta es una excelente oportunidad para aquellos que están comenzando su carrera en el desarrollo de software.",
            lookingForTitle: "¿Qué buscamos?",
            lookingForDesc1: "Estamos buscando a una persona programadora junior que tenga pasión por el desarrollo de aplicaciones web. Para este puesto no pedimos experiencia previa. Hace falta saber programar.",
            lookingForDesc2: "Buscamos a alguien que se le de bien la programación, con ganas de aprender y crecer. No necesitamos que tengas estudios reglados, pero tendrás que demostrar que tienes aptitudes para este puesto.",
            lookingForDesc3: "Tener nivel de inglés suficiente para poder comunicarte bien con nativos. No hace falta que tengas estudios reglados o ningún certificado, pero para que te hagas una idea, sobre B2. Varios de los compañeros son ingleses y no hablan español.",
            standOutTitle: "¿Qué te haría destacar sobre otros en el proceso?", standOutDesc: "Para esta oferta es imprescindible tener el certificado de discapacidad igual o superior al 33%.", standOutNote: "No buscamos todo ésto, es una lista de cualidades que si tienes alguna, te haría destacar:",
            standOut1: "Demostrándonos tu creatividad, originalidad y ganas de trabajar.",
            standOut2: "Estar al tanto de las tendencias del sector.",
            standOut3: "Tener experiencia en algún sistema de control de versiones, idealmente Git.",
            standOut4: "Estar cursando o haber terminado algún ciclo formativo o la carrera o el grado de Informática o algo relacionado.",
            standOut5: "Alternativamente, demostrar que has tenido interés en aprender cosas de manera independiente, como por ejemplo haciendo cursos online.",
            standOut6: "Si tienes algo de experiencia con alguna de las tecnologías que usamos pues siempre ayuda (PHP, Javascript, Symfony, Laravel, Python, .NET, Ruby, Postgres, AWS, React, Vue).",
            processTitle: "¿Cómo será el proceso de selección?",
            process1: "Miramos tu perfil y vemos si podría encajar con lo que buscamos o no.",
            process2: "Primera entrevista y toma de contacto.",
            process3: "Test de nivel de inglés.",
            process4: "Prueba de código.",
            process5: "Entrevista en profundidad.",
            processNote: "Si necesitas alguna adaptación en las pruebas o entrevistas, por favor indícanoslo para que podamos hacer los ajustes necesarios.",
            offerWhatTitle: "¿Qué ofrecemos?",
            offer1: "Para este puesto estamos buscando a alguien en el punto T1 a D4 de nuestra escala (Becario a Junior), lo cual quiere decir de 16,576 a 23,042 euros brutos anuales.",
            offer2: "Contrato indefinido.",
            offer3: "Modalidad de trabajo presencial.",
            offer4: "Jornada completa.",
            offer5: "Revisión del contrato anual.",
            offer6: "Magníficas oportunidades de progresión.",
            offer7: "Fantástico acceso a recursos de desarrollo profesional.",
            offer8: "Presupuesto para formación, conferencias, etc.",
            offer9: "Flexibilidad de horarios dentro del intervalo 7:30-19:30h, para solapar con los compañeros.",
            offer10: "Estupendos compañeros de trabajo que están muy contentos de trabajar en esta empresa.",
            offer11: "Talleres y actividades opcionales para socializar (salud, cocina, juegos de mesa...)",
            contactOffer: "Si te interesa esta oferta, envía por favor tu CV a:",
            thankYou: "¡Muchas gracias!"
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