// Structured content for Amani Krid's portfolio.
// Edit this file to update experience, projects, skills, timeline, photos - no template changes needed.

export const experiences = [
  {
    id: "amadeus",
    company: "Amadeus SAS",
    introEn: "One of the world's largest travel-technology companies, powering booking and day-to-day operations for airlines around the globe.",
    introFr: "L'un des plus grands acteurs mondiaux de la tech du voyage, au cœur de la réservation et de l'exploitation quotidienne des compagnies aériennes.",
    role: "AI & Data Engineering Intern - end-of-studies",
    roleFr: "Stagiaire Ingénierie IA & Data - fin d'études",
    period: "Apr 2026 - Sep 2026",
    location: "Sophia Antipolis, France",
    tagEn: "Featured case study",
    tagFr: "Étude de cas phare",
    problemEn: "When flights are disrupted, hundreds of passengers have to be rebooked within minutes. Amadeus already does this at scale for major airlines, but the system decided who goes where using rules set by hand, with no way to learn from what had actually worked before.",
    problemFr: "Quand des vols sont perturbés, des centaines de passagers doivent être réacheminés en quelques minutes. Amadeus le fait déjà à grande échelle pour de grandes compagnies, mais le système décidait qui va où à partir de règles fixées à la main, sans jamais apprendre de ce qui avait réellement marché auparavant.",
    contributionEn: "My part: bring solution ranking, cost and final assignment together into one pipeline that learns from history.",
    contributionFr: "Ma part : réunir le classement des solutions, le coût et l'affectation finale dans un seul pipeline qui apprend de l'historique.",
    constraintsEn: "It is a hard, time-boxed problem: thousands of passengers for a limited number of seats, with connections, fares and commercial priority all to respect, and only past decisions to learn from rather than clean labels.",
    constraintsFr: "C'est un problème difficile et minuté : des milliers de passagers pour un nombre limité de sièges, avec correspondances, tarifs et priorité commerciale à respecter, et seulement des décisions passées pour apprendre, sans annotations propres.",
    solutionEn: "I built a pipeline that learns to rank the best rebooking options from past decisions, estimates what each one really costs, and then solves the whole assignment as one problem, replacing the hand-tuned engine used in production.",
    solutionFr: "J'ai construit un pipeline qui apprend à classer les meilleures options de réacheminement à partir des décisions passées, estime ce que chacune coûte réellement, puis résout toute l'affectation comme un seul problème, en remplaçant le moteur réglé à la main utilisé en production.",
    impactEn: "It gives the recovery system data-driven foundations ready for where the industry is heading, and I delivered it as a working demo with results that engineers and product managers can both read and trust.",
    impactFr: "Cela dote le système de reprise de fondations pilotées par la donnée, prêtes pour la direction que prend l'industrie, et je l'ai livré sous forme de démonstration fonctionnelle avec des résultats que les ingénieurs comme les product managers peuvent lire et comprendre.",
    lessonsEn: "I worked inside an international team split across Nice, Bogota and Sydney, in a SAFe setup, defending a technical direction to both an innovation group and a long-standing production group. The biggest lesson: a model is only as useful as people's confidence that they can understand it.",
    lessonsFr: "J'ai travaillé au sein d'une équipe internationale répartie entre Nice, Bogota et Sydney, en organisation SAFe, en défendant une direction technique à la fois auprès d'une équipe innovation et d'une équipe produit installée de longue date. La plus grande leçon : un modèle n'est utile que dans la mesure où les gens ont confiance en leur capacité à le comprendre.",
    technologies: ["Python", "LightGBM", "PuLP / CBC", "OR-Tools", "HiGHS", "pandas", "scikit-learn", "Splunk", "SAFe", "Scrum", "Jira", "Confluence"]
  },
  {
    id: "liris",
    company: "LIRIS Research Lab",
    introEn: "A major French computer-science research lab (CNRS / University of Lyon).",
    introFr: "Un grand laboratoire de recherche français en informatique (CNRS / Université de Lyon).",
    role: "Research Intern - urban mobility",
    roleFr: "Stagiaire recherche - mobilité urbaine",
    period: "May 2025 - Jul 2025",
    location: "Lyon, France",
    tagEn: "Research",
    tagFr: "Recherche",
    summaryEn: "Cities lose time and trust when taxis sit idle in the wrong place. Working alongside the lab team, I built a simulator that predicts demand and moves cars before people ask, then tested it against real trips from three cities.",
    summaryFr: "Les villes perdent du temps et de la confiance quand les taxis attendent au mauvais endroit. Avec l'équipe du labo, j'ai construit un simulateur qui prévoit la demande et déplace les voitures avant même qu'on les appelle, puis je l'ai testé sur des trajets réels de trois villes.",
    metrics: [
      { value: "2.71 min", label: "average passenger wait", labelFr: "attente moyenne des passagers" },
      { value: "12.3%", label: "requests rejected", labelFr: "demandes rejetées" }
    ],
    technologies: ["Python", "NetworkX", "OSMnx", "ARIMA", "KMeans", "pandas", "GitLab"]
  },
  {
    id: "bmw",
    company: "Primatec Engineering - BMW",
    introEn: "An engineering firm building embedded software for the automotive industry, here on a project for BMW.",
    introFr: "Un bureau d'ingénierie qui développe du logiciel embarqué pour l'automobile, ici sur un projet pour BMW.",
    role: "Software Engineering Intern",
    roleFr: "Stagiaire ingénierie logicielle",
    period: "Jul 2024 - Aug 2024",
    location: "Sfax, Tunisia",
    tagEn: "Systems",
    tagFr: "Systèmes",
    summaryEn: "Engineers were waiting seconds every time they searched embedded-computer data, over and over. With the team, I built a tool that converts and searches that data, and compared several strategies to find the fastest. It now runs in production.",
    summaryFr: "Les ingénieurs perdaient des secondes à chaque recherche dans les données des calculateurs embarqués, encore et encore. Avec l'équipe, j'ai construit un outil qui convertit et recherche ces données, en comparant plusieurs stratégies pour trouver la plus rapide. Il tourne aujourd'hui en production.",
    metrics: [
      { value: "4.4s → 0.11s", label: "search time, 6 strategies compared", labelFr: "temps de recherche, 6 stratégies comparées" },
      { value: "×40", label: "faster, now in production", labelFr: "plus rapide, désormais en production" }
    ],
    technologies: ["Rust", "Python", "Pest", "SQLite", "Streamlit", "GitHub"]
  }
];

export const projects = [
  {
    id: "agriscope",
    titleEn: "Making 30 years of French farming actually readable",
    titleFr: "Rendre 30 ans d'agriculture française vraiment lisibles",
    domain: "Data Visualization · Team",
    descEn: "Three decades of French agricultural data sit in public archives, but they are scattered, dense and almost impossible to read as a story. Yet they hold real answers about water use, emissions and how each region specialises.",
    descFr: "Trois décennies de données agricoles françaises dorment dans les archives publiques, mais elles sont dispersées, denses et presque illisibles comme récit. Pourtant, elles répondent à de vraies questions sur l'eau, les émissions et la spécialisation de chaque région.",
    challengeEn: "With a teammate, I built an interactive observatory: one map, a timeline you slide across the decades, and short written briefings that update on their own, so anyone can spot a trend in seconds instead of hours.",
    challengeFr: "Avec un binôme, j'ai construit un observatoire interactif : une carte, une frise que l'on fait glisser sur les décennies, et de courts bulletins écrits qui se mettent à jour tout seuls, pour repérer une tendance en secondes plutôt qu'en heures.",
    metrics: [
      { value: "30 yrs", label: "of open data made explorable", labelFr: "de données ouvertes rendues explorables" },
      { value: "12", label: "regions across 3 live view modes", labelFr: "régions sur 3 modes de vue en direct" }
    ],
    technologies: ["React", "D3.js", "GeoJSON", "Data Viz"]
  },
  {
    id: "sovrizon",
    titleEn: "Sharing private photos without ever exposing the keys",
    titleFr: "Partager des photos privées sans jamais exposer les clés",
    domain: "Cybersecurity · Team",
    descEn: "Our first version let people share encrypted images, but the keys had to travel to the browser to do the work, leaving the door open to interception and hidden local copies. For something meant to be truly private, that was not good enough.",
    descFr: "Notre première version permettait de partager des images chiffrées, mais les clés devaient transiter jusqu'au navigateur pour faire le travail, laissant la porte ouverte à l'interception et à des copies locales cachées. Pour quelque chose censé être vraiment privé, ce n'était pas suffisant.",
    challengeEn: "As a four-person team, we rebuilt it around one rule: the keys never leave the server. A trusted component handles everything sensitive, images only ever appear for a moment, and each one carries an invisible mark so any leak can be traced.",
    challengeFr: "En équipe de quatre, nous l'avons reconstruit autour d'une règle : les clés ne quittent jamais le serveur. Un composant de confiance gère tout ce qui est sensible, les images n'apparaissent qu'un instant, et chacune porte une marque invisible pour tracer toute fuite.",
    metrics: [
      { value: "0", valueStyle: " display:inline-block; transform:translateY(-60px);", label: "keys ever sent to the client", labelFr: "clé jamais envoyée au client" },
      { value: "60s", label: "the only window an image is visible", labelFr: "seule fenêtre où une image est visible" }
    ],
    technologies: ["Python", "FastAPI", "React", "AES-256"]
  },
  {
    id: "bookverse",
    titleEn: "A shared library that finally knows what it owns",
    titleFr: "Une bibliothèque partagée qui sait enfin ce qu'elle possède",
    domain: "Databases · Team",
    descEn: "École Centrale's labs share books, journals and internal reports, but tracking who holds what, across labs and in three currencies, was a manual mess. Lost items and unclear access rights quietly slowed everyone down.",
    descFr: "Les laboratoires de Centrale partagent livres, revues et rapports internes, mais suivre qui détient quoi, entre labos et en trois devises, relevait du casse-tête manuel. Pertes et droits d'accès flous ralentissaient tout le monde en silence.",
    challengeEn: "With a teammate, we designed and built the whole management system: a clean catalogue with real search, borrowing rules per lab, loss tracking, and an admin side that stays honest, from the data model all the way up to the interface.",
    challengeFr: "Avec un binôme, nous avons conçu et construit tout le système de gestion : un catalogue clair avec une vraie recherche, des règles d'emprunt par labo, un suivi des pertes et une interface d'administration fiable, du modèle de données jusqu'à l'interface.",
    metrics: [
      { value: "3", label: "publication types in one catalogue", labelFr: "types de publications dans un catalogue" },
      { value: "Multi-lab", label: "borrowing with per-lab access rights", labelFr: "emprunts avec droits d'accès par labo" }
    ],
    technologies: ["Python", "Flask", "MySQL", "Bootstrap"]
  },
  {
    id: "search-engine",
    titleEn: "A search engine that understands meaning, not just words",
    titleFr: "Un moteur de recherche qui comprend le sens, pas seulement les mots",
    domain: "Information Retrieval",
    descEn: "Search over scientific papers usually rewards matching words, not matching ideas. So the paper that says the same thing in different terms never surfaces, even though in research that is often exactly the one you needed.",
    descFr: "La recherche dans les articles scientifiques récompense en général les mots qui correspondent, pas les idées. L'article qui dit la même chose autrement ne remonte jamais, alors qu'en recherche c'est souvent celui qu'il vous fallait.",
    challengeEn: "I built an engine that reads for meaning as well as wording, and looks at how papers cite each other to judge what is truly relevant. The hard part, and the whole point, was balancing exact terms against real meaning.",
    challengeFr: "J'ai construit un moteur qui lit à la fois le sens et les mots, et qui observe comment les articles se citent pour juger de la vraie pertinence. Le plus dur, et tout l'intérêt, était d'équilibrer les termes exacts et le sens réel.",
    metrics: [
      { value: "0.847", label: "F-measure, up from 0.283 on keywords", labelFr: "F-mesure, contre 0,283 par mots-clés" },
      { value: "0.974", label: "AUC ranking quality", labelFr: "qualité de classement (AUC)" }
    ],
    technologies: ["Python", "Sentence-BERT", "scikit-learn", "NetworkX"]
  },
  {
    id: "rl-mlops",
    titleEn: "Teaching agents to learn, in a way you can actually trust",
    titleFr: "Apprendre à des agents, d'une manière en laquelle on peut vraiment avoir confiance",
    domain: "Reinforcement Learning · Robotics",
    descEn: "Reinforcement learning has a quiet credibility problem: results are famously hard to reproduce, so it is easy to claim a model works and nearly impossible to prove it. I wanted to do it the honest way.",
    descFr: "L'apprentissage par renforcement a un problème de crédibilité discret : les résultats sont réputés difficiles à reproduire, alors il est facile d'affirmer qu'un modèle marche et presque impossible de le prouver. Je voulais le faire honnêtement.",
    challengeEn: "I trained agents from a simple control task up to a robotic arm, then wrapped everything in tracking and public model releases so any result could be checked rather than just believed. Reproducibility was the goal, not an afterthought.",
    challengeFr: "J'ai entraîné des agents, d'une tâche de contrôle simple jusqu'à un bras robotique, puis j'ai tout enveloppé de suivi et de publications de modèles pour que chaque résultat puisse être vérifié plutôt que simplement cru. La reproductibilité était le but, pas un détail.",
    metrics: [
      { value: "100%", label: "success rate on control and robotic tasks", labelFr: "taux de réussite sur les tâches de contrôle et robotiques" }
    ],
    technologies: ["PyTorch", "Stable-Baselines3", "Gymnasium", "Weights & Biases"]
  },
  {
    id: "generative",
    titleEn: "Running modern image generation on a normal machine",
    titleFr: "Faire tourner la génération d'images moderne sur une machine normale",
    domain: "Computer Vision · Generative AI",
    descEn: "Generative models are everywhere, but running a serious one usually means a datacenter GPU most people will never touch. I wanted to really understand them by building them, on hardware I actually own.",
    descFr: "Les modèles génératifs sont partout, mais en faire tourner un sérieux suppose d'ordinaire un GPU de datacenter que la plupart des gens n'auront jamais. Je voulais vraiment les comprendre en les construisant, sur du matériel que je possède réellement.",
    challengeEn: "I worked through the main families of image generation myself, then shrank a large modern model down enough to run on everyday hardware. Trading a little quality for something a normal machine can handle was the real lesson.",
    challengeFr: "J'ai parcouru moi-même les grandes familles de génération d'images, puis j'ai réduit un grand modèle récent assez pour tenir sur du matériel courant. Céder un peu de qualité pour ce qu'une machine normale peut encaisser a été la vraie leçon.",
    metrics: [
      { value: "3", label: "generative architectures built by hand", labelFr: "architectures génératives construites à la main" },
      { value: "4×", label: "smaller, runs on consumer hardware", labelFr: "plus léger, tourne sur du matériel grand public" }
    ],
    technologies: ["PyTorch", "diffusers", "bitsandbytes"]
  }
];

export const skillGroups = [
  { key: "languages", labelEn: "Languages", labelFr: "Langages", items: ["Python", "C++", "Java", "JavaScript", "TypeScript", "Rust"] },
  { key: "ai", labelEn: "AI & Data", labelFr: "IA & Data", items: ["PyTorch", "Keras", "scikit-learn", "LightGBM", "pandas", "Sentence-BERT", "Reinforcement Learning", "NLP", "OR-Tools", "RAG", "Building AI Agents", "LLM Fine-Tuning"] },
  { key: "infra", labelEn: "Infrastructure", labelFr: "Infrastructure", items: ["MySQL", "MongoDB", "SQLite", "Docker", "GitHub Actions", "Linux", "Bash"] }
];

export const timeline = [
  { period: "2020 - 2022", titleEn: "IPEST - Preparatory Cycle", titleFr: "IPEST - Cycle préparatoire", detailEn: "Scientific preparatory classes · ranked 66th / 1500 nationally", detailFr: "Classes préparatoires scientifiques · classée 66ᵉ / 1500 au concours national", place: "La Marsa, Tunisia" },
  { period: "2022 - 2024", titleEn: "ENSI - Computer Engineering", titleFr: "ENSI - Ingénierie informatique", detailEn: "Top of class (200 students) · 16.01 / 20", detailFr: "Majore de promotion (200 étudiants) · 16,01 / 20", place: "La Manouba, Tunisia" },
  { period: "2024", titleEn: "Primatec Engineering - BMW", titleFr: "Primatec Engineering - BMW", detailEn: "Software engineering internship - embedded systems tooling", detailFr: "Stage d'ingénierie logicielle - outillage systèmes embarqués", place: "Sfax, Tunisia" },
  { period: "2024 - 2026", titleEn: "École Centrale de Lyon", titleFr: "École Centrale de Lyon", detailEn: "General engineering degree · double degree with ENSI", detailFr: "Diplôme d'ingénieur généraliste · double diplôme avec l'ENSI", place: "Lyon, France" },
  { period: "2025", titleEn: "LIRIS Research Lab", titleFr: "Laboratoire LIRIS", detailEn: "Research internship - predictive taxi dispatch", detailFr: "Stage de recherche - dispatch prédictif de taxis", place: "Lyon, France" },
  { period: "2026", titleEn: "Amadeus - end-of-studies internship", titleFr: "Amadeus - stage de fin d'études", detailEn: "AI-driven passenger recovery", detailFr: "Reprise passagers pilotée par IA", place: "Sophia Antipolis, France" }
];

export const photos = [
  { src: "assets/photo-beaulieu.png", en: "Beaulieu-sur-Mer. The sea and a book, two things I love, in one frame. Some of my best thinking happens exactly like this: offline, unhurried, letting a problem sit until it works itself out.", fr: "Beaulieu-sur-Mer. La mer et un livre, deux choses que j'aime, dans une même image. Certaines de mes meilleures idées arrivent exactement comme ça : hors ligne, sans me presser, en laissant un problème reposer jusqu'à ce qu'il se dénoue tout seul." },
  { src: "assets/photo-bicycle.png", en: "Nice. An ordinary bicycle against a wall turns into a composition once you wait for the right light. Debugging takes the same kind of patience: the fix was usually there all along, I just hadn't looked at it from the right angle yet.", fr: "Nice. Un vélo ordinaire contre un mur devient une composition dès qu'on attend la bonne lumière. Déboguer demande le même genre de patience : la solution était souvent là depuis le début, je ne l'avais simplement pas regardée sous le bon angle." },
  { src: "assets/photo-lyon.png", en: "Place Bellecour, Lyon. Every line in the street runs toward a single point on the horizon. Good architectures feel similar to me: every part points toward one clear center.", fr: "Place Bellecour, à Lyon. Toutes les lignes de la rue filent vers un seul point à l'horizon. Les bonnes architectures me font le même effet : chaque partie pointe vers un centre clair." },
  { src: "assets/photo-cat.png", en: "My cat, asleep. Shot low and close, everything soft except that one sharp line of whiskers. I keep a camera around for exactly these unplanned moments, the ones you can't stage and can't repeat.", fr: "Mon chat, endormi. Pris tout bas et tout près, tout est doux sauf cette seule ligne nette de moustaches. Je garde un appareil à portée de main pour exactement ces moments non prévus, ceux qu'on ne peut ni mettre en scène ni refaire." },
  { src: "assets/photo-eiffel.png", en: "The Eiffel Tower at night, glowing gold through bare winter branches. I love architecture that is clean and complex at once, thousands of tiny iron pieces resolving into one simple, unmistakable shape. Good engineering looks like that too.", fr: "La Tour Eiffel de nuit, dorée à travers les branches d'hiver. J'aime l'architecture à la fois épurée et complexe, des milliers de petites pièces de fer qui se résolvent en une forme simple et reconnaissable entre toutes. La bonne ingénierie ressemble à ça aussi." },
  { src: "assets/photo-mahdia.png", en: "Mahdia, Tunisia, at sunset. A kid keeping a football up, just at the waterline, the whole scene reduced to a silhouette against the light. I love football, and I love that this needed no colour to work - sometimes the simplest version of a thing is the strongest one.", fr: "Mahdia, en Tunisie, au coucher du soleil. Un gamin qui jongle avec un ballon, juste à la limite de l'eau, toute la scène réduite à une silhouette à contre-jour. J'aime le football, et j'aime que cette image n'ait eu besoin d'aucune couleur pour fonctionner - parfois la version la plus simple d'une chose est la plus forte." }
];

export const domains = [
  { key: "web", labelEn: "Software & Web", labelFr: "Logiciel & Web", angle: -90, blurbEn: "Where it began", blurbFr: "Là où tout a commencé", why: { en: "Where it all started, building things people could actually use.", fr: "Là où tout a commencé, construire des choses que les gens pouvaient vraiment utiliser." } },
  { key: "embedded", labelEn: "Embedded Systems", labelFr: "Systèmes Embarqués", angle: -57, blurbEn: "Close to the hardware", blurbFr: "Proche du matériel", why: { en: "BMW's embedded computers needed a bridge between two data formats. It was my first real taste of performance work close to the hardware.", fr: "Les calculateurs embarqués de BMW avaient besoin d'un pont entre deux formats de données. C'était mon premier vrai contact avec l'optimisation proche du matériel." } },
  { key: "optimization", labelEn: "Optimization", labelFr: "Optimisation", angle: -24, blurbEn: "Making things fast", blurbFr: "Rendre les choses rapides", why: { en: "Making that BMW tool 40× faster was about thinking in algorithms and search strategy, not just writing more code.", fr: "Rendre cet outil BMW 40× plus rapide, c'était penser en algorithmes et en stratégie de recherche, pas seulement écrire plus de code." } },
  { key: "distributed", labelEn: "Distributed Systems", labelFr: "Systèmes Distribués", angle: 8, blurbEn: "At production scale", blurbFr: "À l'échelle production", why: { en: "The recovery system at Amadeus runs across an international team and at production scale. Optimization stops being theoretical when thousands of passengers depend on it in real time.", fr: "Le système de reprise chez Amadeus tourne au sein d'une équipe internationale et à l'échelle production. L'optimisation cesse d'être théorique quand des milliers de passagers en dépendent en temps réel." } },
  { key: "ai-data", labelEn: "AI & Data Engineering", labelFr: "IA & Ingénierie des Données", angle: 41, blurbEn: "Where data meets decisions", blurbFr: "La donnée qui décide", why: { en: "Learning-to-rank at Amadeus, demand prediction at LIRIS. Data is where optimization runs into real-world uncertainty.", fr: "L'apprentissage de classement chez Amadeus, la prédiction de la demande au LIRIS. La donnée, c'est là où l'optimisation rencontre l'incertitude du monde réel." } },
  { key: "rl-robotics", labelEn: "Reinforcement Learning & Robotics", labelFr: "Renforcement & Robotique", angle: 74, blurbEn: "Agents that act", blurbFr: "Des agents qui agissent", why: { en: "Taxi dispatch at LIRIS needed learning for sequential decisions, which drew me toward training agents that actually act, all the way to a robotic arm.", fr: "Le dispatch de taxis au LIRIS demandait de l'apprentissage pour des décisions séquentielles, ce qui m'a attirée vers l'entraînement d'agents qui agissent vraiment, jusqu'à un bras robotique." } },
  { key: "nlp-ir", labelEn: "NLP & Information Retrieval", labelFr: "NLP & Recherche d'Information", angle: 106, blurbEn: "Search, at heart", blurbFr: "Chercher, au fond", why: { en: "Ranking passenger options is really a search problem, and the same instinct led me to build a search engine that understands meaning over scientific papers.", fr: "Classer des options passagers, c'est au fond un problème de recherche, et le même réflexe m'a menée à construire un moteur de recherche qui comprend le sens des articles scientifiques." } },
  { key: "cv-gen", labelEn: "Computer Vision & Generative AI", labelFr: "Vision & IA Générative", angle: 139, blurbEn: "How models create", blurbFr: "Comment les modèles créent", why: { en: "I was curious about how models create, not just classify. It comes from the same instinct that makes me point a camera at a scene.", fr: "J'étais curieuse de comprendre comment les modèles créent, pas seulement classent. Ça vient du même réflexe qui me fait pointer un appareil photo vers une scène." } },
  { key: "dashboarding", labelEn: "Dashboarding", labelFr: "Dashboarding", angle: 172, blurbEn: "Numbers you can decide on", blurbFr: "Des chiffres pour décider", why: { en: "Turning messy numbers into something people can actually decide from, from the AgriScopeFR observatory to explainable results at Amadeus.", fr: "Transformer des chiffres en désordre en quelque chose sur quoi on peut vraiment décider, de l'observatoire AgriScopeFR aux résultats explicables chez Amadeus." } },
  { key: "consulting", labelEn: "Consulting", labelFr: "Conseil", angle: -155, blurbEn: "Framing the problem", blurbFr: "Cadrer le problème", why: { en: "A month-long consulting immersion at Centrale Lyon with firms like Accenture, CGI and SIA Partners. My team won first prize in the partners' consulting competition, and I learned to frame a problem, listen to a client, and tailor a message to any audience.", fr: "Une immersion d'un mois en conseil à Centrale Lyon avec des cabinets comme Accenture, CGI et SIA Partners. Mon équipe a remporté le premier prix du concours de conseil des partenaires, et j'y ai appris à cadrer un problème, écouter un client et adapter un message à tout public." } },
  { key: "security", labelEn: "Cybersecurity", labelFr: "Cybersécurité", angle: -122, blurbEn: "How systems break", blurbFr: "Comment les systèmes cassent", why: { en: "A team project rebuilt around a single security rule: keys never leave the server. Understanding a system also means understanding how it breaks.", fr: "Un projet d'équipe reconstruit autour d'une seule règle de sécurité : les clés ne quittent jamais le serveur. Comprendre un système, c'est aussi comprendre comment il casse." } }
];
