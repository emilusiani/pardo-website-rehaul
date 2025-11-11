// Static fallback content (used until CMS is configured)

export interface Service {
  key: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  key: string;
  image: string;
  alt: string;
  tag: string;
  title: string;
  summary: string;
}

export interface ContentData {
  services: Service[];
  projects: Project[];
}

export const staticContent: ContentData = {
  services: [
    {
      key: 'hotel',
      title: 'Hotel Renovations',
      description: 'Phased guest room, corridor, lobby, and amenity upgrades with minimal disruption and brand‑aligned finishes.',
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><path d="M10 12h4"/><path d="M9 16h6"/></svg>`
    },
    {
      key: 'fnb',
      title: 'Restaurant & Bar',
      description: 'Dining and lounge modernizations improving flow, ambiance, and peak‑service throughput.',
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 3v8a4 4 0 0 0 4 4h1V3"/><path d="M15 3v12a4 4 0 0 0 4 4h1V3"/><path d="M9 3h6"/></svg>`
    },
    {
      key: 'amenities',
      title: 'Resort Amenities',
      description: 'Upgrades for spa, pool, and recreation—uniting durability, lighting, and guest experience.',
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"/><path d="M2 12h7"/><path d="M15 12h7"/><path d="M12 2v7"/><path d="M12 15v7"/></svg>`
    },
    {
      key: 'rooms',
      title: 'Guest Room Programs',
      description: 'Turnkey FF&E replacement, bath modernization, and energy‑efficient upgrades aligned to brand standards.',
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-6h6v6"/></svg>`
    }
  ],
  projects: [
    {
      key: 'resort',
      image: '/assets/image2.jpg',
      alt: 'Mountain lodge style hotel rendering with timber and stone',
      tag: 'Resort / Adaptive',
      title: 'DoubleTree Mountain Lodge',
      summary: 'Exterior re‑skin, lobby arrival experience, and amenity enhancements.'
    },
    {
      key: 'rooms',
      image: '/assets/image3.jpg',
      alt: 'Modern hotel living area with city view and dining nook',
      tag: 'Guest Rooms',
      title: 'Urban Business Hotel',
      summary: '150‑room phased refresh: finishes, bath reconfiguration, and energy upgrades.'
    },
    {
      key: 'public',
      image: '/assets/image1.jpg',
      alt: 'Contemporary hotel exterior with night lighting and entry canopy',
      tag: 'Public Spaces',
      title: 'City Center Hotel',
      summary: 'Lobby, lounge, and F&B modernization to improve circulation and brand impact.'
    },
    {
      key: 'historic',
      image: '/assets/image4.jpg',
      alt: 'Historic hotel facade with formal entry court',
      tag: 'Historic / Adaptive',
      title: 'Heritage Waterfront Hotel',
      summary: 'System upgrades and finish preservation—guest experience centered.'
    }
  ]
};
