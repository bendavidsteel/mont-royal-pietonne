import { defineAstroI18nConfig } from 'astro-i18n'

const siteUrl = 'https://lawellpietonne.com'

const fr = {
  siteUrlBase: siteUrl,
  siteUrl,
  siteName: 'La Well piétonne',
  siteDescription: 'Consultation publique et pétition pour la piétonnisation permanente de la rue Wellington',

  otherLangs: {
    en: 'English'
  },

  headerDescription: 'Une initiative pour piétonniser la rue Wellington en permanence',

  step: 'étape',
  completed: 'complétée',
  stepsTitle: 'Progrès de l\'initiative',
  steps: {
    1: {
      title: 'Projet de pétition',
      subtitle: 'Signée par 25 résidents'
    },
    2: {
      title: 'Texte approuvé',
      subtitle: 'par l\'arrondissement de Verdun'
    },
    3: {
      title: 'Période de signatures',
      subtitle: '90 jours - 3031 signatures'
    },
    4: {
      title: 'Consultation publique',
      subtitle: 'avec les résidents de Verdun'
    }
  },

  petitionTextHeading: 'La texte du pétition',
  
  seeCta: 'Voir la pétition',
  signCta: 'Signer la pétition',
  signCtaSubtext: 'sur montreal.ca',
  signCtaRequirements: 'Résidents de Verdun âgé de 15 ans ou plus',

  email: 'Courriel',
  optional: 'facultatif',

  volunteerCta: 'Bénévole',
  volunteerCtaSubtext: 'pour la collecte de signatures',

  inspirationAndReading: 'Inspiration et lecture',

  footerNoticeUnaffiliated: 'Ce site n\'est pas affiliée à ',

  contactUs: 'Contactez-nous',

  notFound: '404 : Introuvable',
  goHome: 'Page d\'accueil',

  petitionUrl: 'https://montreal.ca/petitions/detail/6428dc4ac490e6ee4229c32a',
  petitionSignUrl: 'https://montreal.ca/petitions/signer/6428dc4ac490e6ee4229c32a',
}

const en = {
  siteUrlBase: siteUrl,
  siteUrl: `${siteUrl}/en`,
  siteName: 'La Well Piétonne',
  siteDescription: 'A public consultation and petition to pedestrianize Wellington street permanently',

  otherLangs: {
    fr: 'Français'
  },

  headerDescription: 'An initiative to make Wellington a pedestrian street permanently',

  step: 'step',
  completed: 'completed',
  stepsTitle: 'Initiative progress',
  steps: {
    1: {
      title: 'Petition draft',
      subtitle: 'Signed by 25 residents'
    },
    2: {
      title: 'Petition text approved',
      subtitle: 'by the borough of Verdun'
    },
    3: {
      title: 'Signature period',
      subtitle: '90 days - 3031 signatures'
    },
    4: {
      title: 'Public consultation',
      subtitle: 'with residents of Verdun'
    }
  },

  petitionTextHeading: 'Petition text',

  seeCta: 'See the petition',
  signCta: 'Sign the petition',
  signCtaSubtext: 'on montreal.ca',
  signCtaRequirements: 'Must be a resident of Verdun age 15 or older',

  email: 'E-mail',
  optional: 'optional',

  volunteerCta: 'Volunteer',
  volunteerCtaSubtext: 'for signature collection',

  inspirationAndReading: 'Inspiration and reading',
  
  footerNoticeUnaffiliated: 'This site is not affiliated with ',
  
  contactUs: 'Contact us',

  notFound: '404: Not Found',
  goHome: 'Go home',

  petitionUrl: 'https://montreal.ca/en/petitions/details/6428dc4ac490e6ee4229c32a',
  petitionSignUrl: 'https://montreal.ca/en/petitions/sign/6428dc4ac490e6ee4229c32a',
}

export const translations = { en, fr }

export default defineAstroI18nConfig({
  defaultLangCode: 'fr',
  supportedLangCodes: ['en'],
  showDefaultLangCode: false,
  translations: { en, fr },
  routeTranslations: {
    en: {
      signer: 'sign',
      petition: 'petition'
    }
  },
})