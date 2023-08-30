import {
    mobile,
    soleo, vodafone,courir,
    canva, aftereffect, unnamed, sellsy, 
    photoshop, illustrator, word, powerpoint, premierepro,
    backend, creator, web,
    wine, interview, sneakers, lunch, creation, cherch,
    collegegc, paris, isefac, utrillo,
    futura, frandroid, leg_white,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "profil",
      title: "Profil",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Gestion de projet",
      file: 'http://localhost:5173/CV_-_Gaël_Luntala.pdf',
      filename: 'CV_Gael_Luntala',
      icon: web,
    },
    {
      title: "Stratégie marketing",
      file: 'http://localhost:5173/Calendrier_paris_ESI_3_2022.pdf',
      filename: 'Calendrier_Ingetis',
      icon: mobile,
    },
    {
      title: "Analyse de marché ",
      file: 'http://localhost:5173/Plaquette-ingetis.pdf',
      filename: 'Brochure_Ingetis',
      icon: backend,
    },
    {
      title: "Créativité",
      file: 'https://www.graphcom.fr/',
      filename: 'Graphcom',
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Canvas",
      icon: canva,
    },
    {
      name: "After Effect",
      icon: aftereffect,
    },
    {
      name: "Premier Pro",
      icon: premierepro,
    },
    {
      name: "CapCut",
      icon: unnamed,
    },
    {
      name: "Sellsy",
      icon: sellsy,
    },
    {
      name: "Photoshop",
      icon: photoshop,
    },
    {
      name: "Illustrator",
      icon: illustrator,
    },
    {
      name: "Powerpoint",
      icon: powerpoint,
    },
    {
      name: "Word",
      icon: word,
    },
  ];
  
  const experiences = [
    {
      title: "CHEF DE PROJET MARKETING ET VENTE",
      company_name: "SOLEO - Alternance",
      icon: soleo,
      iconBg: "#E6DEDD",
      date: "Mars 2023",
      points: [
        "Refonte des plaquettes marketing", 
        "Mise en place de campagne de growth hacking",
        "Réalisation des réunions commerciales",
        "Réalisation d'interviews",
        "Montage vidéos",
        "Recherche et contact des nouveaux prospect",
      ],
    },
    {
      title: "CHERCH. ",
      company_name: "CHERCH",
      icon: cherch,
      iconBg: "#383E56",
      date: "Mars 2023",
      points: [
        "Conception de la marque",
        "Développement de la stratégie marketing",
        "Gestion des médias sociaux",
        "Création de contenu",
        "Analyse de la concurrence",
        "Gestion du budget",
      ],
    },
    {
      title: "RESELL SNEAKERS",
      company_name: "AUTO-DIDACTE",
      icon:leg_white,
      iconBg: "#383E56",
      date: "2022 - 2023",
      points: [
        "Recherche de sneakers rares",
        "Élaboration d’une stratégie de vente",
        "Communication et vente sur différents réseaux sociaux",
        "Fiche produit",
        "Veille concurrentielle",
      ],
    },
    {
      title: "ASSISTANT CHEF DE PROJET",
      company_name: "CHRISLO FRANCHISE DU GROUPE VODACOM KINSHASA",
      icon: vodafone,
      iconBg: "#383E56",
      date: "Juin 2022",
      points: [
        "Assurer la mise en place et le suivi des projets",
        "Assurer la liaison entre les différents services",
        "Mise en place d’évènement pour promouvoir les produits",
      ],
    },
    {
      title: "VENDEUR/ CHARGÉ DES STOCKS",
      company_name: "COURIR 92012 BOULOGNE-BILLANCOURT",
      icon: courir,
      iconBg: "#E6DEDD",
      date: "Juil 2021 - Sep 2021",
      points: [
        "Conseiller la clientèle",
        "Mise en rayons des articles",
        "Réception et rangement des stocks",
      ],
    }
    
  ];
  
  const study = [
    {
      title: "ISEFAC Alternance",
      ville: "Paris 10ème Arr.",
      diplome: "Master 1 - Brand management & product marketing",
      option: "Aucune option",
      obtenu: "Date de délivrance: En cours ...",
      icon: isefac,
      iconBg: "#FFFFFF",
      date: "Sept 2023 - Juil 2024",
    },
    {
      title: "ISEFAC Alternance",
      ville: "Paris 10ème Arr.",
      diplome: "Bachelor 3 - Business Developer",
      option: "Aucune option",
      obtenu: "Date de délivrance: Juil 2023",
      icon: isefac,
      iconBg: "#FFFFFF",
      date: "Sept 2022 - Juil 2023",
    },
    {
      title: "Université Paris Sorbonne Nord",
      ville: "Villetaneuse",
      diplome: "Licence Droit",
      option: "Aucune option",
      obtenu: "Date de délivrance: Juil 2022",
      icon: paris,
      iconBg: "#FFFFFF",
      date: "Sept 2019 - Juil 2022",
    },
    {
      title: "Lycée Maurice Utrillo",
      ville: "Stains",
      diplome: "Baccalauréat Sciences et Technologies du Management et de la Gestion",
      option: "Ressources Humaines",
      obtenu: "Date de délivrance: Juil. 2017",
      icon: utrillo,
      iconBg: "#FFFFFF",
      date: "Sept 2015 - Juil 2017",
    },
    {
      title: "Collège Gustave Courbet",
      ville: "Pierrefitte-sur-Seine",
      diplome: "Diplôme National du Brevet",
      option: "Classe Sport (Football)",
      obtenu: "Date de délivrance: Juil. 2014",
      icon: collegegc,
      iconBg: "#FFFFFF",
      date: "Sept 2010 - Juil 2014",
    },
  ];

  const testimonials = [
    {
      testimonial:
        "Apple compte intégrer une nouvelle technologie de lentilles pour lunettes et capteurs photo.",
      name: "Théo Sire",
      designation: "Le 14 Avril 2023",
      // company: "Journaliste Hi-Tech",
      image: "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2023/04/theo-09-grande-e1681476478231.jpeg?webp=1&resize=164,164&key=947e73d0",
      liens: "https://www.frandroid.com/marques/apple/1664997_apple-pourrait-proposer-des-meta-verres-pour-ses-lunettes-connectees",
      icon: frandroid,
    },
    {
      testimonial:
        "Des chercheurs ont mis au point des lunettes connectées capables de détecter les mots articulés.",
      name: "Edward Back",
      designation: "Le 8 Avril 2023",
      // company: "Journaliste Hi-Tech",
      image: "https://cdn.futura-sciences.com/cdn-cgi/image/width=87.5,height=96.25,quality=60,format=auto/sources/images/Edward%20Back.jpg",
      liens: "https://www.futura-sciences.com/tech/actualites/technologie-lunettes-connectees-lisent-levres-104620/",
      icon: futura,
    },
    {
      testimonial:
        "Les lunettes connectées se sont en effet imposées comme une des plus grandes tendances à suivre.",
      name: "Titouan Gourlin",
      designation: "Le 4 Mars 2023",
      // company: "Journaliste",
      image: "https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/04/titouan-01.jpg?resize=200,200",
      liens : "https://www.frandroid.com/produits-android/accessoires-objets-connectes/lunettes-intelligentes/1625419_les-stars-du-mwc-2023-cetaient-les-lunettes-connectees-voici-les-plus-belles-nouveautes",
      icon: frandroid,
    },
  ];
  
  const projects = [
    {
      name: "Interview Soleo",
      description:
        "Mon projet consistait à réaliser deux interviews captivantes. Dans la première interview, j’ai eu l’opportunité d’interviewer le Directeur Général de Soleo, qui a répondu à une série de questions permettant de découvrir l’entreprise. Dans la deuxième interview, j’ai pu échanger avec un membre du conseil départemental de Hautes-de-Seine, qui a expliqué les raisons de leur choix de collaborer avec Soleo.  Pour donner vie à cette interview. J’ai utilisé Premiere Pro, un logiciel de montage vidéo professionnel, pour assembler et créer un contenu final captivant.",
      tags: [
        {
          name: "Interview",
          color: "blue-text-gradient",
        },
        {
          name: "PremierePro ",
          color: "green-text-gradient",
        },
        {
          name: "Montage",
          color: "pink-text-gradient",
        },
      ],
      image: interview,
      source_code_link: "https://www.dropbox.com/sh/kc1jpb223m4b1l7/AABJWry-ZaTqQruydZAw2Pm8a?dl=0",
    },
    {
      name: "Création 3D",
      description:
        " J'ai crée des éléments 3D pour promouvoir ma marque de sac, pour cela j'ai utilisé After Effects pour donner vie à mes designs de sacs. J’ai également utilisé Premiere Pro pour le montage, j'ai pu assembler et créer une vidéo finale mettant en valeur mes produits de manière dynamique et attrayante. Cette combinaison a permis de donner une nouvelles dimension à ma marque et de présenter mes sacs d'une manière artique et percutante. Cette expérience m'a permis de développer des compétences dans l'utilisation de la suite Adobe. Cela renforcé l'image de la marque en la présentant sous un jour artistique.",
      tags: [
        {
          name: "Création3D",
          color: "blue-text-gradient",
        },
        {
          name: " AfterEffects",
          color: "green-text-gradient",
        },
        {
          name: "PremierePro ",
          color: "pink-text-gradient",
        },
      ],
      image: creation,
      source_code_link: "https://www.dropbox.com/sh/xkeomizwwlzczs6/AACB-mKAbFY7A4ptvWMjv4Dsa?dl=0",
    },
    {
      name: "Création marque ",
      description:
        "J’ai crée ma marque 'CHERCH', une marque de sacs uniques et faits à la main, confectionnés à partir de pelotes en coton. Chaque sac est réalisé avec soin et passion.'CHERCH' incarne l'élégance et l'originalité, en offrant des designs uniques qui s'adaptent parfaitement aux besoins et aux styles de nos clients. Cette expérience m'a apporté une compréhension approfondie du marketing digital et des médias sociaux. Sur le plan de la gestion de projet, j'ai appris à mener à bien un projet, à planifier minutieusement toute les étapes, que ce soit dans la gestion des délais ou dans l'xécution des tâches. ",
      tags: [
        {
          name: "Marque",
          color: "blue-text-gradient",
        },
        {
          name: "Homemade",
          color: "green-text-gradient",
        },
        {
          name: "PelotesCoton",
          color: "pink-text-gradient",
        },
      ],
      image: cherch,
      source_code_link: "",
    },
    {
      name: "Resell Sneakers",
      description:
        "Mon projet était centré dans l’univers des sneakers où j’ai exercé dans le domaine du resell. Cette expérience m’a offert une opportunité incroyable de vendre mes produits à l’international et de collaborer avec de grandes entreprises du secteur. Grâce à cette aventure, j’ai acquis de précieuses compétences dans le développement de stratégie marketing pour promouvoir mes produits, ainsi qu’en gestion de projet, tant sur les aspects financiers que logistiques. Mes compétences se sont élargies, enrichissant ainsi mon parcours.",
      tags: [
        {
          name: "Resell",
          color: "blue-text-gradient",
        },
        {
          name: "Sneakers",
          color: "green-text-gradient",
        },
        {
          name: "MarketPlace",
          color: "pink-text-gradient",
        },
      ],
      image: sneakers,
      source_code_link: "",
    },
    {
      name: "Lunch and learn",
      description:
        "Mon projet consistait à mettre en place et à organiser un événement lunch and learn. Cet événement a été conçu pour offrir une opportunité d’apprentissage informelle aux participants tout en partageant un repas convivial. Grâce à une planification méticuleuse, j’ai créé un environnement propice à l’échange d’idées et à l’acquisition de connaissances. Cet événement a permis aux participants de développer leurs compétences professionnelles et de renforcer les liens, offrant une expérience enrichissante pour tous les participants.",
      tags: [
        {
          name: "Evenement",
          color: "blue-text-gradient",
        },
        {
          name: "Lunch",
          color: "green-text-gradient",
        },
        {
          name: "Apprentissage",
          color: "pink-text-gradient",
        },
      ],
      image: lunch,
      source_code_link: "",
    },
    {
      name: "Wines",
      description:
        "Pendant la période du COVID, j’ai réalisé un site qui avait pour objectif de simplifier les prises de rendez-vous pour les personnes proposant diverses prestations à domicile. Grâce à cette plateforme, les prestataires de services pouvaient proposer leurs disponibilités, tandis que les clients pouvaient facilement réserver leurs rendez-vous en ligne. Ce projet a contribué à faciliter la vie des professionnels ainsi que des utilisateurs en leur offrant un moyen pratique et sûr de gérer leurs rendez-vous pendant une période difficile avec le confinement.",
      tags: [
        {
          name: "RDV",
          color: "blue-text-gradient",
        },
        {
          name: "SiteInternet",
          color: "green-text-gradient",
        },
        {
          name: "Covid",
          color: "pink-text-gradient",
        },
      ],
      image: wine,
      source_code_link: "",
    },
  ];
  
  export { services, technologies, experiences, study, testimonials, projects };