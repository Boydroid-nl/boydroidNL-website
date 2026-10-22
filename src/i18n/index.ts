export const languages = { nl: 'Nederlands', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'nl';

// Every page exists in both languages; this maps a page key to its path per language.
export const routes = {
  home: { nl: '/', en: '/en/' },
  werkwijze: { nl: '/werkwijze/', en: '/en/how-we-work/' },
  portfolio: { nl: '/portfolio/', en: '/en/portfolio/' },
  overOns: { nl: '/over-ons/', en: '/en/about/' },
  team: { nl: '/team/', en: '/en/team/' },
  contact: { nl: '/contact/', en: '/en/contact/' },
} as const;
export type RouteKey = keyof typeof routes;

export const appPath = (lang: Lang, slug: string) =>
  lang === 'nl' ? `/apps/${slug}/` : `/en/apps/${slug}/`;

export const platforms = ['Android', 'iOS', 'Android Automotive'] as const;
export type Platform = (typeof platforms)[number];
export const platformSlug = (p: Platform) => p.toLowerCase().replace(/\s+/g, '-');
export const platformPath = (lang: Lang, p: Platform) => `${routes.portfolio[lang]}${platformSlug(p)}/`;

// Content entries are stored as "<slug>/<lang>" (src/content/apps/<slug>/<lang>.md).
export const splitAppId = (id: string) => {
  const i = id.lastIndexOf('/');
  return { slug: id.slice(0, i), lang: id.slice(i + 1) as Lang };
};

export const nav: RouteKey[] = ['home', 'werkwijze', 'portfolio', 'overOns', 'team', 'contact'];

export const contact = {
  email: 'info@boydroid.nl',
  appEmail: 'boy@boydroid.nl',
  phone: '085 401 0233',
  phoneHref: 'tel:+31854010233',
  whatsapp: 'https://wa.me/31854010233',
  linkedin: 'https://nl.linkedin.com/company/boydroid',
  company: 'Boydroid B.V.',
  postal: ['Jupiter 44', '6121 ND Born'],
  visit: 'Kasteelhof 4, 6121 XK Born',
  kvk: '97638609',
  btw: 'NL868150897B01',
  terms: '/algemene-voorwaarden.pdf',
};

export const ui = {
  nl: {
    'nav.home': 'Home',
    'nav.werkwijze': 'Werkwijze',
    'nav.portfolio': 'Portfolio',
    'nav.overOns': 'Over ons',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.skip': 'Naar de inhoud',
    'theme.toggle': 'Wissel tussen licht, donker en systeemthema',
    'theme.system': 'Systeem',
    'theme.light': 'Licht',
    'theme.dark': 'Donker',
    'footer.quick': 'Snel links',
    'footer.useful': 'Handige links',
    'footer.connect': "Let's connect",
    'footer.terms': 'Algemene voorwaarden',
    'footer.tagline': 'app development',
    'clients.title': 'Tevreden klanten',
    'clients.label': 'Klanten van Boydroid',
    'app.client': 'Opdrachtgever',
    'app.platforms': 'Platformen',
    'app.website': 'Bekijk het project op',
    'app.screenshots': 'Screenshots',
    'app.more': 'Bekijk app',
    'app.back': 'Alle apps',
    'filter.all': 'Alle apps',
    'filter.label': 'Filter op platform',
    'filter.title': 'Apps voor',
    'store.play': 'Download op Google Play',
    'store.apple': 'Download in de App Store',
    'cta.app': 'Ik wil een app',
    'cta.how': 'Hoe het werkt',
    'cta.call': 'Gewoon Boydroid bellen',
    'cta.werkwijze': 'Werkwijze',
    'cta.team': 'Ons team',
    'notfound.title': 'Pagina niet gevonden',
    'notfound.text': 'De pagina die je zoekt bestaat niet of is verplaatst.',
    'notfound.home': 'Terug naar home',
  },
  en: {
    'nav.home': 'Home',
    'nav.werkwijze': 'How we work',
    'nav.portfolio': 'Portfolio',
    'nav.overOns': 'About us',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.skip': 'Skip to content',
    'theme.toggle': 'Switch between light, dark and system theme',
    'theme.system': 'System',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'footer.quick': 'Quick links',
    'footer.useful': 'Useful links',
    'footer.connect': "Let's connect",
    'footer.terms': 'Terms and conditions (Dutch)',
    'footer.tagline': 'app development',
    'clients.title': 'Happy clients',
    'clients.label': 'Boydroid clients',
    'app.client': 'Client',
    'app.platforms': 'Platforms',
    'app.website': 'See the project at',
    'app.screenshots': 'Screenshots',
    'app.more': 'View app',
    'app.back': 'All apps',
    'filter.all': 'All apps',
    'filter.label': 'Filter by platform',
    'filter.title': 'Apps for',
    'store.play': 'Get it on Google Play',
    'store.apple': 'Download on the App Store',
    'cta.app': 'I want an app',
    'cta.how': 'How it works',
    'cta.call': 'Just call Boydroid',
    'cta.werkwijze': 'How we work',
    'cta.team': 'Our team',
    'notfound.title': 'Page not found',
    'notfound.text': 'The page you are looking for does not exist or has been moved.',
    'notfound.home': 'Back to home',
  },
} as const;

export type UiKey = keyof (typeof ui)['nl'];
export const useTranslations = (lang: Lang) => (key: UiKey) => ui[lang][key];
