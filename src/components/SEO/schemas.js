const location = [
  {
    '@type': 'VirtualLocation',
    url: 'https://webaquebec.org/',
  },
  {
    '@type': 'Place',
    name: 'Terminal — Port de Québec',
    telephone: '+1 418-649-6409',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Canada',
      addressLocality: 'Québec',
      addressRegion: 'QC',
      postalCode: 'G1K 4C4',
      streetAddress: '84 rue Dhalousie',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '46.816714',
      longitude: '-71.200621',
    },
  },
];

const organizer = {
  '@type': 'Organization',
  name: 'Québec numérique',
  url: 'https://quebecnumerique.com/',
  telephone: '+1 877-334-2547',
  location: {
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Canada',
      addressLocality: 'Québec',
      addressRegion: 'QC',
      postalCode: 'G1K 3J4',
      streetAddress: '688 Boulevard Charest E',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '46.814944',
      longitude: '-71.220688',
    },
  },
};

const offers = {
  '@type': 'AggregateOffer',
  lowPrice: '195',
  highPrice: '895',
  priceCurrency: 'CAD',
  offerCount: '3',
  offers: [
    {
      '@type': 'Offer',
      price: '195',
      priceCurrency: 'CAD',
      url: 'https://webaquebec.org/billetterie',
    },
    {
      '@type': 'Offer',
      price: '595',
      priceCurrency: 'CAD',
      url: 'https://webaquebec.org/billetterie',
    },
    {
      '@type': 'Offer',
      price: '895',
      priceCurrency: 'CAD',
      url: 'https://webaquebec.org/billetterie',
    },
  ],
};

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Web à Québec',
  description:
    'Le plus grand événement numérique francophone en Amérique du Nord',
  startDate: '2024-05-28',
  endDate: '2024-05-30',
  eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  sameAs: [
    'https://www.facebook.com/webaquebec/',
    'https://twitter.com/webaquebec/',
    'https://www.instagram.com/webaquebec/',
    'https://www.linkedin.com/company/web-qu-bec/',
  ],
  location,
  organizer,
  offers,
};

export default eventSchema;
