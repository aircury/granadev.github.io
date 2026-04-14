// lang-switcher.js
// Shared language switching logic for Granadev

(function () {
    // --- Translations Object ---
    const translations = {
        en: {
            navHome: "Home", navServices: "Services", navAbout: "About Us", navPolicy: "Integrated policy", navContact: "Contact", navSoc: "Summer of Code", navOffers: "Job Offers",
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
            integratedPolicyTitle: "Integrated management policy",
            integratedPolicyBody: `<p class="text-lg leading-relaxed mb-6"><strong>Granadev S.L. is part of the Aircury group.</strong> The AIRCURY group is a business group dedicated to the design, development, deployment, operation and maintenance of software solutions and digital services, supported by cloud infrastructures and a predominantly remote working model, serving national and international clients.</p><p class="mb-6">AIRCURY group management recognises that service quality, environmental protection, effective management of information technology services and information security are strategic elements for sustainability, customer trust, regulatory compliance and business continuity.</p><p class="mb-8">To this end, AIRCURY establishes and maintains an Integrated Management System, in accordance with ISO 9001, ISO 14001, ISO/IEC 20000-1, ISO/IEC 27001 and the requirements of the National Security Scheme (Royal Decree 311/2022), committing to its implementation, maintenance and continual improvement.</p><h3 class="text-2xl text-tarawera-blue font-cursive mt-10 mb-4">Management</h3><p class="mb-3">AIRCURY group management commits to:</p><ul class="list-disc pl-6 space-y-2 mb-8 text-tarawera-blue/90"><li>Providing the resources needed for the Integrated Management System to function properly.</li><li>Ensuring leadership, accountability and engagement at all levels of the organisation.</li><li>Integrating quality, environmental, service management and information security principles into strategy and business processes.</li><li>Fostering a preventive culture focused on continual improvement, risk management and operational excellence.</li></ul><h3 class="text-2xl text-tarawera-blue font-cursive mt-10 mb-4">Quality</h3><p class="mb-3">AIRCURY, regarding quality, commits to:</p><ul class="list-disc pl-6 space-y-2 mb-8 text-tarawera-blue/90"><li>Providing software services and solutions that meet applicable customer, legal and contractual requirements.</li><li>Ensuring the planning, control and improvement of processes supporting service delivery.</li><li>Measuring and analysing process performance and customer satisfaction as a basis for continual improvement.</li><li>Managing risks and opportunities that may affect the quality of services provided.</li></ul><h3 class="text-2xl text-tarawera-blue font-cursive mt-10 mb-4">Environment</h3><p class="mb-3">AIRCURY accepts its responsibility for environmental protection and commits to:</p><ul class="list-disc pl-6 space-y-2 mb-8 text-tarawera-blue/90"><li>Complying with applicable environmental legislation and other requirements subscribed by the organisation.</li><li>Preventing pollution and minimising environmental impacts arising from its activity, especially those associated with technological and energy resource use.</li><li>Promoting efficient resource use, reducing consumption and proper waste management.</li><li>Integrating the environmental perspective into decision-making and continual improvement of the management system.</li></ul><h3 class="text-2xl text-tarawera-blue font-cursive mt-10 mb-4">IT services</h3><p class="mb-3">AIRCURY, regarding IT services, commits to:</p><ul class="list-disc pl-6 space-y-2 mb-8 text-tarawera-blue/90"><li>Planning, designing, delivering, operating and improving information technology services in a controlled manner aligned with business and customer needs.</li><li>Defining and maintaining service level agreements, support processes and performance monitoring mechanisms.</li><li>Managing incidents, problems, changes and service continuity appropriately.</li><li>Ensuring alignment between IT service management and the organisation’s strategic objectives.</li></ul><h3 class="text-2xl text-tarawera-blue font-cursive mt-10 mb-4">Information security</h3><p class="mb-3">AIRCURY recognises that information and the systems supporting it are critical assets and commits to:</p><ul class="list-disc pl-6 space-y-2 mb-8 text-tarawera-blue/90"><li>Protecting the confidentiality, integrity, availability, authenticity and traceability of information.</li><li>Complying with ISO/IEC 27001:2022 and National Security Scheme requirements, according to the defined scope and categorisation level.</li><li>Applying a risk-based approach to identify, assess and treat threats that may affect information and services.</li><li>Implementing appropriate technical, organisational and procedural controls to prevent security incidents and respond effectively to them.</li><li>Ensuring service continuity and resilience of information systems.</li></ul><h3 class="text-2xl text-tarawera-blue font-cursive mt-10 mb-4">People</h3><p class="mb-3">The AIRCURY group and its people commit to:</p><ul class="list-disc pl-6 space-y-2 mb-8 text-tarawera-blue/90"><li>Ensuring staff competence and training in relation to quality, the environment, service management and information security.</li><li>Raising awareness and individual responsibility for compliance with established policies, standards and procedures.</li><li>Promoting active staff participation in improving the Integrated Management System.</li></ul><h3 class="text-2xl text-tarawera-blue font-cursive mt-10 mb-4">Compliance</h3><p class="mb-3">AIRCURY compliance management commits to:</p><ul class="list-disc pl-6 space-y-2 mb-8 text-tarawera-blue/90"><li>Identifying and complying with legal, regulatory and contractual requirements applicable to its activity.</li><li>Periodically evaluating Integrated Management System performance through monitoring, measurement, internal audits and management reviews.</li><li>Applying corrective and improvement actions to increase the effectiveness, efficiency and maturity of the system.</li><li>Maintaining this policy as a reference framework for establishing objectives and improvement plans.</li></ul><p class="mb-4">This Integrated Management Policy is communicated to all staff and relevant interested parties, and is available for consultation.</p><p class="mb-6">The policy will be reviewed periodically, and whenever significant changes occur in the organisation, activity, context or applicable requirements.</p><p class="text-sm text-tarawera-blue/70">Approved by: AIRCURY Group Management. Issue date: 12 January 2026. Official reference: <a href="https://www.aircury.es/politica-integrada" class="text-silver-tree-green hover:underline" target="_blank" rel="noopener noreferrer">aircury.es/politica-integrada</a>.</p>`,
            contactTitle: "Let's Build Something Great Together", 
            contactIntro: "Have a project in mind or questions about our services? We'd love to hear from you!",
            contactAddressLabel: "Our Office", 
            contactAddressValue: "Calle Recogidas, 35, 1A<br>18005 Granada, Spain",
            contactEmailLabel: "Email Us", 
            contactEmailValue: "info@granadev.es",
            contactHoursLabel: "Business Hours",
            footerText: `© ${new Date().getFullYear()} Granadev. All Rights Reserved.`,
            footerPrivacyLink: "Privacy policy",
            footerPrivacyHref: "privacy-policy.html",
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
            navHome: "Inicio", navServices: "Servicios", navAbout: "Quiénes Somos", navPolicy: "Política integrada", navContact: "Contacto", navSoc: "Summer of Code", navOffers: "Ofertas de Trabajo",
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
            integratedPolicyTitle: "Política integrada de gestión",
            integratedPolicyBody: `<p class="text-lg leading-relaxed mb-6"><strong>Granadev S.L. forma parte del grupo Aircury.</strong> El grupo AIRCURY es un conjunto empresarial dedicado al diseño, desarrollo, implantación, operación y mantenimiento de soluciones software y servicios digitales, apoyado en infraestructuras en la nube y en un modelo de trabajo mayoritariamente en teletrabajo, prestando servicios a clientes nacionales e internacionales.</p><p class="mb-6">La Dirección del grupo AIRCURY asume que la calidad de los servicios, la protección del medio ambiente, la gestión eficaz de los servicios de tecnologías de la información y la seguridad de la información constituyen elementos estratégicos para la sostenibilidad, la confianza de los clientes, el cumplimiento normativo y la continuidad del negocio.</p><p class="mb-8">Con este propósito, AIRCURY establece y mantiene un Sistema Integrado de Gestión, conforme a las normas ISO 9001, ISO 14001, ISO/IEC 20000-1, ISO/IEC 27001 y a los requisitos del Esquema Nacional de Seguridad (RD 311/2022), comprometiéndose a su implantación, mantenimiento y mejora continua.</p><h3 class="text-2xl text-tarawera-blue font-cursive mt-10 mb-4">Dirección</h3><p class="mb-3">La Dirección del grupo AIRCURY se compromete a:</p><ul class="list-disc pl-6 space-y-2 mb-8 text-tarawera-blue/90"><li>Proporcionar los recursos necesarios para el correcto funcionamiento del Sistema Integrado de Gestión.</li><li>Garantizar el liderazgo, la responsabilidad y la implicación de todos los niveles de la organización.</li><li>Integrar los principios de calidad, medio ambiente, gestión de servicios y seguridad de la información en la estrategia y en los procesos de negocio.</li><li>Fomentar una cultura preventiva, orientada a la mejora continua, la gestión de riesgos y la excelencia operativa.</li></ul><h3 class="text-2xl text-tarawera-blue font-cursive mt-10 mb-4">Calidad</h3><p class="mb-3">AIRCURY, en relación a la calidad, se compromete a:</p><ul class="list-disc pl-6 space-y-2 mb-8 text-tarawera-blue/90"><li>Proporcionar servicios y soluciones software que satisfagan los requisitos de los clientes, legales y contractuales aplicables.</li><li>Garantizar la planificación, control y mejora de los procesos que soportan la prestación del servicio.</li><li>Medir y analizar el desempeño de los procesos y la satisfacción del cliente como base para la mejora continua.</li><li>Gestionar los riesgos y oportunidades que puedan afectar a la calidad de los servicios prestados.</li></ul><h3 class="text-2xl text-tarawera-blue font-cursive mt-10 mb-4">Medio ambiente</h3><p class="mb-3">AIRCURY asume su responsabilidad con la protección del medio ambiente y se compromete a:</p><ul class="list-disc pl-6 space-y-2 mb-8 text-tarawera-blue/90"><li>Cumplir la legislación ambiental aplicable y otros requisitos suscritos por la organización.</li><li>Prevenir la contaminación y minimizar los impactos ambientales derivados de su actividad, especialmente los asociados al uso de recursos tecnológicos y energéticos.</li><li>Promover un uso eficiente de los recursos, la reducción de consumos y la correcta gestión de residuos.</li><li>Integrar la perspectiva ambiental en la toma de decisiones y en la mejora continua del sistema de gestión.</li></ul><h3 class="text-2xl text-tarawera-blue font-cursive mt-10 mb-4">Servicios de IT</h3><p class="mb-3">AIRCURY, en cuanto a servicios de IT, se compromete a:</p><ul class="list-disc pl-6 space-y-2 mb-8 text-tarawera-blue/90"><li>Planificar, diseñar, entregar, operar y mejorar los servicios de tecnologías de la información de forma controlada y coherente con las necesidades del negocio y de los clientes.</li><li>Definir y mantener acuerdos de nivel de servicio, procesos de soporte y mecanismos de seguimiento del desempeño.</li><li>Gestionar adecuadamente los incidentes, problemas, cambios y continuidades del servicio.</li><li>Asegurar la alineación entre la gestión de servicios TI y los objetivos estratégicos de la organización.</li></ul><h3 class="text-2xl text-tarawera-blue font-cursive mt-10 mb-4">Seguridad de la información</h3><p class="mb-3">AIRCURY reconoce que la información y los sistemas que la soportan son activos críticos y se compromete a:</p><ul class="list-disc pl-6 space-y-2 mb-8 text-tarawera-blue/90"><li>Proteger la confidencialidad, integridad, disponibilidad, autenticidad y trazabilidad de la información.</li><li>Cumplir con los requisitos de ISO/IEC 27001:2022 y del Esquema Nacional de Seguridad, conforme al alcance y nivel de categorización definidos.</li><li>Aplicar un enfoque basado en riesgos para identificar, evaluar y tratar las amenazas que puedan afectar a la información y a los servicios.</li><li>Implementar controles técnicos, organizativos y procedimentales adecuados para prevenir incidentes de seguridad y responder eficazmente ante ellos.</li><li>Garantizar la continuidad de los servicios y la resiliencia de los sistemas de información.</li></ul><h3 class="text-2xl text-tarawera-blue font-cursive mt-10 mb-4">Equipo humano</h3><p class="mb-3">El grupo AIRCURY y su equipo humano se compromete a:</p><ul class="list-disc pl-6 space-y-2 mb-8 text-tarawera-blue/90"><li>Garantizar la competencia y formación del personal en relación con la calidad, el medio ambiente, la gestión de servicios y la seguridad de la información.</li><li>Fomentar la concienciación y responsabilidad individual en el cumplimiento de las políticas, normas y procedimientos establecidos.</li><li>Promover la participación activa del personal en la mejora del Sistema Integrado de Gestión.</li></ul><h3 class="text-2xl text-tarawera-blue font-cursive mt-10 mb-4">Compliance</h3><p class="mb-3">La dirección de compliance de AIRCURY se compromete a:</p><ul class="list-disc pl-6 space-y-2 mb-8 text-tarawera-blue/90"><li>Identificar y cumplir los requisitos legales, reglamentarios y contractuales aplicables a su actividad.</li><li>Evaluar periódicamente el desempeño del Sistema Integrado de Gestión mediante seguimiento, medición, auditorías internas y revisiones por la Dirección.</li><li>Aplicar acciones correctivas y de mejora que permitan aumentar la eficacia, eficiencia y madurez del sistema.</li><li>Mantener esta Política como marco de referencia para el establecimiento de objetivos y planes de mejora.</li></ul><p class="mb-4">La presente Política Integrada de Gestión es comunicada a todo el personal y a las partes interesadas pertinentes, estando disponible para su consulta.</p><p class="mb-6">La Política será revisada periódicamente, y siempre que se produzcan cambios significativos en la organización, la actividad, el contexto o los requisitos aplicables.</p><p class="text-sm text-tarawera-blue/70">Aprobada por: Dirección del Grupo AIRCURY. Fecha de emisión: 12 de enero de 2026. Referencia oficial: <a href="https://www.aircury.es/politica-integrada" class="text-silver-tree-green hover:underline" target="_blank" rel="noopener noreferrer">aircury.es/politica-integrada</a>.</p>`,
            contactTitle: "Construyamos Algo Grande Juntos", 
            contactIntro: "¿Tienes un proyecto en mente o preguntas sobre nuestros servicios? ¡Nos encantaría escucharte!",
            contactAddressLabel: "Nuestra Oficina", 
            contactAddressValue: "Calle Recogidas, 35, 1A<br>18005 Granada, España",
            contactEmailLabel: "Escríbenos", 
            contactEmailValue: "info@granadev.es",
            contactHoursLabel: "Horario de Atención",
            footerText: `© ${new Date().getFullYear()} Granadev. Todos los Derechos Reservados.`,
            footerPrivacyLink: "Política de privacidad",
            footerPrivacyHref: "politica-privacidad.html",
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
                    if (key === 'info' || key === 'contactAddressValue' || key === 'integratedPolicyBody') {
                        element.innerHTML = value;
                    } else if ((key === 'socEmail' || key === 'contactEmailValue') && element.tagName === 'A') {
                        element.href = `mailto:${value}`;
                        element.textContent = value;
                    } else if (key === 'footerPrivacyLink' && element.tagName.toUpperCase() === 'A') {
                        element.textContent = value;
                        const href = translations[lang].footerPrivacyHref;
                        if (href) element.setAttribute('href', href);
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
        const urlLang = getLangFromUrl()?.toLowerCase();
        const preferredLanguage = localStorage.getItem('preferredLanguage')?.toLowerCase();
        const browserLanguage = navigator.language.split('-')[0].toLowerCase();
        const langToUse = urlLang || preferredLanguage || (translations[browserLanguage] ? browserLanguage : 'en');
        setLanguage(langToUse);
    });

    // Expose setLanguage for manual use if needed
    window.setLanguage = setLanguage;
})(); 