// src/data/parcoursPersonnalises.js

export const PROFILS = {
  formateur: {
    nom: "Formateur / Coach certifié",
    emoji: "👩‍🏫",
    description: "Tu transmets, mais tu veux un modèle rentable et fluide",
    objectif90j: "1 offre phare claire + 1 système de RDV automatisé"
  },
  freelance: {
    nom: "Freelance créatif",
    emoji: "🎨",
    description: "Tu crées de la valeur, mais tu te perds dans le désordre",
    objectif90j: "3 clients réguliers + temps pour ton projet perso"
  },
  consultant: {
    nom: "Consultant / Expert technique",
    emoji: "💼",
    description: "Tu résous des problèmes, mais tu veux arrêter d'échanger temps contre argent",
    objectif90j: "1 offre conseil premium + automatisation des leads"
  },
  saas: {
    nom: "Entrepreneur SaaS / Solopreneur tech",
    emoji: "💻",
    description: "Tu construis des systèmes qui tournent seuls",
    objectif90j: "MVP vendu + 10 premiers utilisateurs payants"
  },
  community: {
    nom: "Community Manager / Support digital",
    emoji: "📱",
    description: "Tu aides et organises, mais tu as besoin de structure",
    objectif90j: "Système de gestion fluide + offre claire à 500€"
  }
};

export const PARCOURS = {
  formateur: {
    strate1: {
      titre: "CLARTÉ - Formateur/Coach",
      duree: "7 jours",
      objectif: "1 offre phare claire + positionnement LinkedIn aligné",
      transformation: "De 'multi-certifié dispersé' à 'expert positionné'",
      
      plan: [
        {
          jour: 1,
          titre: "Définir sa vision 90J et son rôle signature",
          action: "Identifier ta direction claire et ton positionnement unique",
          fiches: [1, 3, 4],
          livrable: {
            nom: "Vision 1 page + engagement public",
            format: "Notion ou Google Docs",
            exemple: "Ma vision : Devenir LA référence en [domaine] pour [clients idéaux]"
          },
          resultat: "Nouvelle direction claire",
          tempsEstime: "2h",
          checklist: [
            "Lire Fiche 1 : Le Nouveau Riche vs l'Ancien Riche",
            "Lire Fiche 3 : Le DEAL revisité",
            "Lire Fiche 4 : Éliminer avant d'automatiser",
            "Écrire ma vision 90 jours (1 page maximum)",
            "Publier mon engagement sur LinkedIn"
          ]
        },
        {
          jour: 2,
          titre: "Identifier sa valeur unique et son client idéal",
          action: "Clarifier qui tu sers et ce qui te différencie",
          fiches: [5, 7],
          livrable: {
            nom: "Fiche persona Notion",
            format: "Template Notion",
            exemple: "Mon client idéal : [Profil détaillé avec douleurs et aspirations]"
          },
          resultat: "Avatar client aligné",
          tempsEstime: "1h30",
          checklist: [
            "Lire Fiche 5 (contenu à définir selon tes fiches)",
            "Lire Fiche 7 (contenu à définir selon tes fiches)",
            "Créer ma fiche persona dans Notion",
            "Identifier 3 douleurs précises de mon avatar",
            "Noter les 3 résultats qu'il recherche"
          ]
        },
        {
          jour: 3,
          titre: "Lister tout ce qu'elle sait faire et trier",
          action: "Faire l'inventaire de tes compétences et identifier les synergies",
          fiches: [8, 9],
          livrable: {
            nom: "Carte de compétences Notion",
            format: "Mind map ou tableau",
            exemple: "3 domaines d'expertise à fusionner en 1 offre unique"
          },
          resultat: "3 domaines à fusionner identifiés",
          tempsEstime: "1h30",
          checklist: [
            "Lire Fiche 8",
            "Lire Fiche 9",
            "Lister toutes mes certifications/compétences",
            "Identifier les 3 domaines qui se complètent",
            "Définir ma zone d'expertise unique"
          ]
        },
        {
          jour: 4,
          titre: "Définir sa promesse de transformation",
          action: "Créer un message clair de transformation avant/après",
          fiches: [10, 12],
          livrable: {
            nom: "Phrase de promesse 'avant/après'",
            format: "1 phrase percutante",
            exemple: "J'aide [client] à passer de [situation A] à [résultat B] en [délai]"
          },
          resultat: "Clarté du message",
          tempsEstime: "1h",
          checklist: [
            "Lire Fiche 10",
            "Lire Fiche 12",
            "Écrire ma promesse de transformation",
            "Tester 3 versions différentes",
            "Choisir la plus claire"
          ]
        },
        {
          jour: 5,
          titre: "Prioriser une offre phare",
          action: "Créer ton offre principale à forte valeur",
          fiches: [13, 14],
          livrable: {
            nom: "Page offre V0 (Notion ou Canva)",
            format: "Document 1-2 pages",
            exemple: "Offre : [Nom] - [Prix] - [Transformation] - [Durée]"
          },
          resultat: "1 offre focus",
          tempsEstime: "2h",
          checklist: [
            "Lire Fiche 13",
            "Lire Fiche 14",
            "Nommer mon offre phare",
            "Définir le prix (1000-2000€)",
            "Structurer le contenu/durée"
          ]
        },
        {
          jour: 6,
          titre: "Revoir sa communication LinkedIn",
          action: "Aligner ton profil et tes contenus avec ton nouveau positionnement",
          fiches: [15, 16],
          livrable: {
            nom: "Nouvelle bio + 3 posts",
            format: "LinkedIn",
            exemple: "Bio clarifiée + 3 posts de repositionnement"
          },
          resultat: "Positionnement cohérent",
          tempsEstime: "1h30",
          checklist: [
            "Lire Fiche 15",
            "Lire Fiche 16",
            "Réécrire ma bio LinkedIn",
            "Préparer 3 posts de repositionnement",
            "Publier le 1er post"
          ]
        },
        {
          jour: 7,
          titre: "Synthèse semaine + publication",
          action: "Consolider tes apprentissages et créer ta première preuve sociale",
          fiches: [17],
          livrable: {
            nom: "Post 'Nouvelle ère de ma formation'",
            format: "LinkedIn ou autre réseau",
            exemple: "Post de bilan : 'Cette semaine, j'ai clarifié...'"
          },
          resultat: "1ère preuve sociale",
          tempsEstime: "1h",
          checklist: [
            "Lire Fiche 17",
            "Faire le bilan de la semaine",
            "Identifier mes 3 victoires",
            "Rédiger mon post de synthèse",
            "Publier et engager avec les commentaires"
          ]
        }
      ]
    },
    
    strate2: {
      titre: "SYSTÈME - Automatisation",
      duree: "7 jours",
      objectif: "Tunnel RDV automatisé + 5h/semaine libérées",
      transformation: "De 'toujours en réaction' à 'système qui tourne'",
      
      plan: [
        {
          jour: 8,
          titre: "Créer un mini tunnel (opt-in → RDV)",
          action: "Installer ton système de capture et qualification",
          fiches: [18, 19],
          livrable: {
            nom: "Page de capture + Calendly",
            format: "Landing page + outil de RDV",
            exemple: "Lead magnet connecté à Calendly"
          },
          resultat: "Tunnel actif",
          tempsEstime: "2h",
          checklist: [
            "Lire Fiche 18",
            "Lire Fiche 19",
            "Créer compte Calendly (gratuit)",
            "Créer page de capture simple",
            "Connecter les 2"
          ]
        },
        {
          jour: 9,
          titre: "Automatiser la prise de RDV",
          action: "Mettre en place les workflows automatiques",
          fiches: [20],
          livrable: {
            nom: "Workflow actif Make/n8n",
            format: "Automation",
            exemple: "Lead → Email auto → RDV → Rappel"
          },
          resultat: "RDV automatisés",
          tempsEstime: "2h",
          checklist: [
            "Lire Fiche 20",
            "Créer compte Make ou n8n",
            "Configurer workflow de base",
            "Tester le parcours complet"
          ]
        },
        {
          jour: 10,
          titre: "Créer son mini CRM Notion",
          action: "Organiser ton pipeline de clients",
          fiches: [21],
          livrable: {
            nom: "Base clients Notion",
            format: "Database Notion",
            exemple: "Pipeline : Lead → Qualifié → Client → Suivi"
          },
          resultat: "Suivi pipeline clair",
          tempsEstime: "1h30",
          checklist: [
            "Lire Fiche 21",
            "Dupliquer template CRM Notion",
            "Ajouter mes premiers contacts",
            "Définir mes statuts de pipeline"
          ]
        },
        {
          jour: 11,
          titre: "Mettre en place une routine Deep Work",
          action: "Bloquer du temps pour le travail profond",
          fiches: [23, 24],
          livrable: {
            nom: "Agenda productif",
            format: "Google Calendar",
            exemple: "Blocs Deep Work + Blocs Admin + Temps libre"
          },
          resultat: "Focus retrouvé",
          tempsEstime: "1h",
          checklist: [
            "Lire Fiche 23",
            "Lire Fiche 24",
            "Bloquer 3 créneaux Deep Work/semaine",
            "Désactiver notifications pendant ces créneaux",
            "Tester 1 session cette semaine"
          ]
        },
        {
          jour: 12,
          titre: "Créer un modèle d'email d'invitation",
          action: "Template d'approche qui convertit",
          fiches: [25],
          livrable: {
            nom: "1 template IA / GPT",
            format: "Document",
            exemple: "Email de prospection personnalisable"
          },
          resultat: "+45% taux de réponse",
          tempsEstime: "1h",
          checklist: [
            "Lire Fiche 25",
            "Créer 3 versions d'email",
            "Tester avec ChatGPT",
            "Envoyer à 5 prospects"
          ]
        },
        {
          jour: 13,
          titre: "Tracker son temps et ROI",
          action: "Mesurer l'impact de tes automatisations",
          fiches: [26, 27],
          livrable: {
            nom: "Tableau KPI",
            format: "Notion ou Excel",
            exemple: "Temps économisé + RDV obtenus + CA généré"
          },
          resultat: "5h/semaine libérées mesurées",
          tempsEstime: "1h",
          checklist: [
            "Lire Fiche 26",
            "Lire Fiche 27",
            "Créer mon tableau de tracking",
            "Noter mes KPI de départ",
            "Planifier revue hebdo"
          ]
        },
        {
          jour: 14,
          titre: "Synthèse semaine + publication",
          action: "Partager ta transformation système",
          fiches: [28],
          livrable: {
            nom: "Post 'Mon système est prêt'",
            format: "LinkedIn",
            exemple: "Bilan : système installé + temps libéré"
          },
          resultat: "Preuve sociale système",
          tempsEstime: "1h",
          checklist: [
            "Lire Fiche 28",
            "Calculer le temps libéré cette semaine",
            "Partager mes outils utilisés",
            "Publier mon bilan"
          ]
        }
      ]
    },
    
    strate3: {
      titre: "TRANSFORMATION - Application",
      duree: "7 jours",
      objectif: "1ère vente + preuve concrète",
      transformation: "De 'système en place' à 'revenus générés'",
      
      plan: [
        {
          jour: 15,
          titre: "Créer l'offre MVP à 1500€",
          action: "Finaliser ton offre testable",
          fiches: [29],
          livrable: {
            nom: "Fiche offre complète",
            format: "Document détaillé",
            exemple: "Offre packagée prête à vendre"
          },
          resultat: "Offre testable",
          tempsEstime: "2h",
          checklist: [
            "Lire Fiche 29",
            "Finaliser le contenu de l'offre",
            "Définir le prix (1200-1500€)",
            "Préparer bonus/garantie"
          ]
        },
        {
          jour: 16,
          titre: "Rédiger page de vente courte",
          action: "Créer une page simple mais efficace",
          fiches: [30, 31],
          livrable: {
            nom: "Page Canva / Notion",
            format: "1-page sales page",
            exemple: "Problème → Solution → Offre → CTA"
          },
          resultat: "Page partageable",
          tempsEstime: "2h",
          checklist: [
            "Lire Fiche 30",
            "Lire Fiche 31",
            "Rédiger les 4 sections",
            "Ajouter témoignages/preuves",
            "Obtenir feedback de 2 personnes"
          ]
        },
        {
          jour: 17,
          titre: "Contacter 10 prospects qualifiés",
          action: "Approche personnalisée et directe",
          fiches: [32],
          livrable: {
            nom: "Messages personnalisés",
            format: "Emails/DM",
            exemple: "10 messages envoyés"
          },
          resultat: "3 appels bookés",
          tempsEstime: "1h30",
          checklist: [
            "Lire Fiche 32",
            "Lister 10 prospects idéaux",
            "Personnaliser chaque message",
            "Envoyer les 10 messages",
            "Faire le suivi 48h après"
          ]
        },
        {
          jour: 18,
          titre: "Faire les 3 appels test",
          action: "Vendre et apprendre",
          fiches: [33],
          livrable: {
            nom: "Scripts d'appel + notes",
            format: "Document",
            exemple: "Retours clients documentés"
          },
          resultat: "Feedbacks réels",
          tempsEstime: "3h",
          checklist: [
            "Lire Fiche 33",
            "Préparer script d'appel",
            "Faire les 3 appels",
            "Noter objections/questions",
            "Identifier ajustements"
          ]
        },
        {
          jour: 19,
          titre: "Ajuster l'offre",
          action: "Intégrer les retours et améliorer",
          fiches: [34],
          livrable: {
            nom: "V2 Offre + bonus",
            format: "Document mis à jour",
            exemple: "Offre ajustée + bonus ajouté"
          },
          resultat: "Offre consolidée",
          tempsEstime: "1h30",
          checklist: [
            "Lire Fiche 34",
            "Analyser les feedbacks",
            "Ajuster prix/contenu si besoin",
            "Ajouter un bonus irrésistible",
            "Mettre à jour la page"
          ]
        },
        {
          jour: 20,
          titre: "Relance intelligente",
          action: "Créer l'urgence sans pression",
          fiches: [35],
          livrable: {
            nom: "Email 'dernière chance'",
            format: "Séquence email",
            exemple: "Message de relance + offre limitée"
          },
          resultat: "1-2 ventes",
          tempsEstime: "1h",
          checklist: [
            "Lire Fiche 35",
            "Relancer les 7 non-répondeurs",
            "Offrir bonus limité dans le temps",
            "Closer les intéressés",
            "Célébrer la 1ère vente"
          ]
        },
        {
          jour: 21,
          titre: "Bilan semaine + publication",
          action: "Partager ta preuve de transformation",
          fiches: [36],
          livrable: {
            nom: "Post 'Mes 1ers résultats'",
            format: "LinkedIn",
            exemple: "1ère vente + apprentissages"
          },
          resultat: "Preuve financière publique",
          tempsEstime: "1h",
          checklist: [
            "Lire Fiche 36",
            "Documenter le parcours client",
            "Partager (sans montant si tu préfères)",
            "Remercier ceux qui t'ont aidé",
            "Annoncer prochaine étape"
          ]
        }
      ]
    },
    
    strate4: {
      titre: "LIBÉRATION - Stabilisation",
      duree: "9 jours",
      objectif: "Système durable + 10h/semaine libérées",
      transformation: "De '1ère vente' à 'système récurrent'",
      
      plan: [
        {
          jour: 22,
          titre: "Créer SOP et automatiser livrables",
          action: "Documenter tes processus",
          fiches: [37, 38],
          livrable: {
            nom: "Notion Process doc",
            format: "SOP documentées",
            exemple: "Processus client de A à Z"
          },
          resultat: "+2h/jour libérées",
          tempsEstime: "2h30",
          checklist: [
            "Lire Fiche 37",
            "Lire Fiche 38",
            "Documenter onboarding client",
            "Créer templates livrables",
            "Automatiser ce qui est possible"
          ]
        },
        {
          jour: 23,
          titre: "Préparer séquence contenu 90J",
          action: "Planifier ta visibilité",
          fiches: [39],
          livrable: {
            nom: "Calendrier 90J",
            format: "Notion/Trello",
            exemple: "12 semaines de contenu planifié"
          },
          resultat: "Vision stable",
          tempsEstime: "2h",
          checklist: [
            "Lire Fiche 39",
            "Définir 3 piliers de contenu",
            "Préparer 12 sujets",
            "Planifier fréquence de publication"
          ]
        },
        {
          jour: 24,
          titre: "Créer offre complémentaire",
          action: "Diversifier tes revenus",
          fiches: [40],
          livrable: {
            nom: "Pack mini-offres",
            format: "Document offres",
            exemple: "Offre basse/moyenne/haute"
          },
          resultat: "+CA récurrent potentiel",
          tempsEstime: "2h",
          checklist: [
            "Lire Fiche 40",
            "Créer offre d'entrée (300-500€)",
            "Définir upsell logique",
            "Préparer offre récurrente"
          ]
        },
        {
          jour: 25,
          titre: "Lancer automatisation contenu",
          action: "Système de publication automatique",
          fiches: [41],
          livrable: {
            nom: "Workflow n8n publication",
            format: "Automation",
            exemple: "Notion → LinkedIn automatique"
          },
          resultat: "+visibilité constante",
          tempsEstime: "2h",
          checklist: [
            "Lire Fiche 41",
            "Configurer workflow contenu",
            "Tester publication auto",
            "Planifier 1 mois de contenu"
          ]
        },
        {
          jour: 26,
          titre: "Préparer 1 page témoignages",
          action: "Construire ta crédibilité",
          fiches: [42],
          livrable: {
            nom: "Page preuves clients",
            format: "Landing page",
            exemple: "3-5 témoignages + résultats"
          },
          resultat: "Crédibilité renforcée",
          tempsEstime: "1h30",
          checklist: [
            "Lire Fiche 42",
            "Demander témoignages clients",
            "Créer page dédiée",
            "Ajouter résultats chiffrés"
          ]
        },
        {
          jour: 27,
          titre: "Établir routine hebdo",
          action: "Rituel de pilotage et ajustement",
          fiches: [43],
          livrable: {
            nom: "Table KPI hebdo",
            format: "Notion dashboard",
            exemple: "Revue hebdo 30min"
          },
          resultat: "Suivi durable",
          tempsEstime: "1h",
          checklist: [
            "Lire Fiche 43",
            "Définir mes 5 KPI clés",
            "Bloquer créneau revue hebdo",
            "Faire ma 1ère revue"
          ]
        },
        {
          jour: 28,
          titre: "Bilan 30 jours complet",
          action: "Mesurer la transformation totale",
          fiches: [44],
          livrable: {
            nom: "Rapport 30J complet",
            format: "Document PDF",
            exemple: "Avant/Après + Chiffres + Learnings"
          },
          resultat: "Conscience du chemin parcouru",
          tempsEstime: "2h",
          checklist: [
            "Lire Fiche 44",
            "Comparer J1 vs J28",
            "Mesurer temps libéré",
            "Calculer CA généré",
            "Identifier prochaines étapes"
          ]
        },
        {
          jour: 29,
          titre: "Plan 90 jours stratégique",
          action: "Définir la suite de ta transformation",
          fiches: [45],
          livrable: {
            nom: "Roadmap 90J",
            format: "Notion timeline",
            exemple: "3 mois de croissance planifiée"
          },
          resultat: "Vision alignée",
          tempsEstime: "2h",
          checklist: [
            "Lire Fiche 45",
            "Définir objectifs 3 mois",
            "Planifier actions clés",
            "Identifier ressources nécessaires"
          ]
        },
        {
          jour: 30,
          titre: "Publication transformation + célébration",
          action: "Partager ton parcours complet",
          fiches: [],
          livrable: {
            nom: "Post transformation complète",
            format: "LinkedIn longform",
            exemple: "Histoire complète J1→J30"
          },
          resultat: "Preuve sociale ultime",
          tempsEstime: "1h30",
          checklist: [
            "Rédiger histoire complète",
            "Partager chiffres (si confortable)",
            "Remercier communauté",
            "Célébrer victoires",
            "Proposer d'aider les suivants"
          ]
        }
      ]
    }
  }
  
  // TODO: Ajouter les 4 autres profils (freelance, consultant, saas, community)
  // en dupliquant cette structure et en adaptant les actions/livrables
};

// Fonction utilitaire pour récupérer un plan
export function getPlan(profil, strate) {
  return PARCOURS[profil]?.[`strate${strate}`] || null;
}

// Fonction pour récupérer info profil
export function getProfilInfo(profil) {
  return PROFILS[profil] || null;
}
