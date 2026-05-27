import { config, collection, singleton, fields } from "@keystatic/core";

/* ─────────────────────────────────────────────────────────────
   Keystatic — Sidebar alignée sur la structure du site
   ─────────────────────────────────────────────────────────────
   Site                                 Keystatic
   ──────────────────────────────       ──────────────────────────
   /                Accueil          →  Accueil
   /leslie-folcarelli Qui suis-je    →  Qui suis-je
   /cours-tango-nice  Mes offres     →  Mes offres (7 sous-entrées)
     └─ /collectifs, /prives, /stages,
        /evenements-tango/milonga-nice, /show-tango, /dj-tango, /tango-mariage-nice
   /evenements-tango  Agenda         →  Agenda (collection events)
   /galerie           Galerie        →  Galerie (collection photos)
   /contact           Contact        →  Contact

   Storage : local (fichiers dans content/ + images dans public/)
   En prod sur Vercel : basculer vers `kind: 'github'` avec OAuth.
   ───────────────────────────────────────────────────────────── */

// Storage automatique :
//  - Mode `github` si les secrets sont configurés (Vercel prod après setup)
//  - Mode `local` sinon (dev local + prod tant que les secrets ne sont pas là)
// Le reader lit toujours le filesystem côté serveur dans les deux cas.
const useGithub = Boolean(process.env.KEYSTATIC_GITHUB_CLIENT_ID);

export default config({
  storage: useGithub
    ? {
        kind: "github",
        repo: { owner: "SiteLeslie", name: "SiteTango" },
      }
    : { kind: "local" },

  ui: {
    brand: { name: "Leslie Folcarelli" },
    navigation: {
      "Accueil": ["pageAccueil"],
      "Qui suis-je": ["pageBio"],
      "Mes offres": [
        "pageCoursCollectifs",
        "pageCoursPrives",
        "pageMilonga",
        "pageShow",
        "pageMariage",
      ],
      "Agenda": ["events"],
      "Galerie": ["galerie"],
      "Contact": ["pageContact"],
    },
  },

  collections: {
    // ───────────── AGENDA — ÉVÉNEMENTS À VENIR ─────────────
    // Schéma minimaliste : titre + date + photo + description.
    // Le tri se fait automatiquement par date sur le site.
    events: collection({
      label: "Agenda — Événements à venir",
      slugField: "title",
      path: "content/events/*/",
      format: { data: "json" },
      entryLayout: "form",
      columns: ["date", "title"],
      schema: {
        title: fields.slug({
          name: {
            label: "Titre",
            description: "Ex : Milonga d'été — Soirée d'ouverture",
            validation: { length: { min: 1 } },
          },
          slug: {
            label: "Nom dans l'URL",
            description:
              "Généré automatiquement depuis le titre. Sert d'identifiant unique pour l'événement (vous n'avez pas besoin d'y toucher).",
          },
        }),
        date: fields.date({
          label: "Date",
          description: "Les événements s'affichent du plus proche au plus lointain",
          validation: { isRequired: true },
        }),
        photo: fields.image({
          label: "Photo / Flyer",
          description: "Photo principale de l'événement",
          directory: "public/images/events",
          publicPath: "/images/events/",
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: "Description",
          description: "Quelques lignes pour présenter l'événement",
          multiline: true,
          validation: { length: { min: 1 } },
        }),
        location: fields.text({
          label: "Lieu (optionnel)",
          description: "Ex : Nice — Salle Masséna",
        }),
        link: fields.url({
          label: "Lien externe (optionnel)",
          description: "Billetterie, événement Facebook, etc.",
        }),
      },
    }),

    // ───────────── GALERIE ─────────────
    galerie: collection({
      label: "Galerie",
      slugField: "title",
      path: "content/galerie/*/",
      format: { data: "json" },
      entryLayout: "form",
      columns: ["title", "order"],
      schema: {
        title: fields.slug({
          name: {
            label: "Titre / description courte",
            description: "Sert d'alt text pour l'accessibilité (ex : Tango scène Nice)",
            validation: { length: { min: 1 } },
          },
          slug: {
            label: "Nom dans l'URL",
            description:
              "Généré automatiquement depuis le titre. Sert d'identifiant unique pour la photo (vous n'avez pas besoin d'y toucher).",
          },
        }),
        image: fields.image({
          label: "Photo",
          directory: "public/images/galerie",
          publicPath: "/images/galerie/",
          validation: { isRequired: true },
        }),
        caption: fields.text({
          label: "Légende (optionnelle)",
          description: "Affichée sous la photo dans la lightbox",
        }),
        order: fields.integer({
          label: "Ordre d'affichage",
          description: "Plus le nombre est petit, plus la photo apparaît tôt",
          defaultValue: 100,
        }),
      },
    }),
  },

  singletons: {
    // ───────────── ACCUEIL ─────────────
    pageAccueil: singleton({
      label: "Accueil",
      path: "content/page-accueil/",
      format: { data: "json" },
      schema: {
        apercu: fields.image({
          label: "Photo « Aperçu Leslie »",
          description: "Section bio preview au milieu de la page d'accueil",
          directory: "public/images/accueil",
          publicPath: "/images/accueil/",
        }),
        apercuAlt: fields.text({
          label: "Texte alternatif de la photo",
          defaultValue: "Leslie Folcarelli, professeure de tango argentin",
        }),
      },
    }),

    // ───────────── QUI SUIS-JE ─────────────
    pageBio: singleton({
      label: "Qui suis-je",
      path: "content/page-bio/",
      format: { data: "json" },
      schema: {
        hero: fields.image({
          label: "Photo hero",
          description: "Grande photo sticky à gauche, à côté de la biographie",
          directory: "public/images/leslie-folcarelli",
          publicPath: "/images/leslie-folcarelli/",
        }),
        heroAlt: fields.text({
          label: "Texte alternatif de la photo",
          defaultValue: "Leslie Folcarelli, danseuse et professeure de tango argentin",
        }),
      },
    }),

    // ───────────── MES OFFRES — COURS COLLECTIFS ─────────────
    pageCoursCollectifs: singleton({
      label: "Cours collectifs",
      path: "content/page-cours-collectifs/",
      format: { data: "json" },
      schema: {
        photoMixte: fields.image({
          label: "Photo — Cours de groupe mixte",
          description: "Tous les mercredis 18h–19h",
          directory: "public/images/cours-tango-nice/collectifs",
          publicPath: "/images/cours-tango-nice/collectifs/",
        }),
        photoFollower: fields.image({
          label: "Photo — Technique Femme / Follower",
          description: "Tous les mercredis 19h–20h",
          directory: "public/images/cours-tango-nice/collectifs",
          publicPath: "/images/cours-tango-nice/collectifs/",
        }),
        photoChoregraphique: fields.image({
          label: "Photo — Chorégraphique TangoFemme",
          description: "Tous les mercredis 20h–21h",
          directory: "public/images/cours-tango-nice/collectifs",
          publicPath: "/images/cours-tango-nice/collectifs/",
        }),
      },
    }),

    // ───────────── MES OFFRES — COURS PRIVÉS ─────────────
    pageCoursPrives: singleton({
      label: "Cours privés",
      path: "content/page-cours-prives/",
      format: { data: "json" },
      schema: {
        photo: fields.image({
          label: "Photo principale",
          directory: "public/images/cours-tango-nice/prives",
          publicPath: "/images/cours-tango-nice/prives/",
        }),
      },
    }),

    // ───────────── MES OFFRES — MILONGA EN TUS BRAZOS ─────────────
    pageMilonga: singleton({
      label: "Milonga En Tus Brazos",
      path: "content/page-milonga/",
      format: { data: "json" },
      schema: {
        presentation: fields.image({
          label: "Photo de présentation",
          description: "Photo en haut de page, à côté du paragraphe d'introduction",
          directory: "public/images/evenements-tango/milonga-nice",
          publicPath: "/images/evenements-tango/milonga-nice/",
        }),
        evenement: fields.image({
          label: "Photo « Soirée d'ouverture »",
          description: "Photo flottante à gauche dans la section événement",
          directory: "public/images/evenements-tango/milonga-nice",
          publicPath: "/images/evenements-tango/milonga-nice/",
        }),
      },
    }),

    // ───────────── MES OFFRES — SHOW, STAGE & DJ ─────────────
    pageShow: singleton({
      label: "Show, Stage & DJ",
      path: "content/page-show/",
      format: { data: "json" },
      schema: {
        hero: fields.image({
          label: "Photo hero (bandeau en haut)",
          directory: "public/images/evenements-tango/show-tango",
          publicPath: "/images/evenements-tango/show-tango/",
        }),
      },
    }),

    // ───────────── MES OFFRES — MARIAGE & ÉVÉNEMENTS PRIVÉS ─────────────
    pageMariage: singleton({
      label: "Mariage & Événements privés",
      path: "content/page-mariage/",
      format: { data: "json" },
      schema: {
        ouverture: fields.image({
          label: "Photo « Ouverture de bal »",
          directory: "public/images/evenements-tango/tango-mariage-nice",
          publicPath: "/images/evenements-tango/tango-mariage-nice/",
        }),
      },
    }),

    // ───────────── CONTACT ─────────────
    pageContact: singleton({
      label: "Contact",
      path: "content/page-contact/",
      format: { data: "json" },
      schema: {
        hero: fields.image({
          label: "Photo hero (bandeau en haut)",
          directory: "public/images/contact",
          publicPath: "/images/contact/",
        }),
        heroAlt: fields.text({
          label: "Texte alternatif de la photo",
          defaultValue: "Leslie Folcarelli",
        }),
      },
    }),
  },
});
