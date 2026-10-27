/**
 * Personal data that does not depend on the language.
 * Replace the placeholders below with real values.
 * Translatable texts (name, role, bio…) live in `public/assets/i18n/*.json` under `profile.*`.
 */
export const PROFILE = {
  /** Square image, at least 400×400. Put the file into `public/assets/images/profile/`. */
  photo: 'assets/images/profile/photo-placeholder.svg',
  email: 'info@example.com',
  phone: { display: '+380 00 000 00 00', href: 'tel:+380000000000' },
  socials: [
    { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { id: 'telegram', label: 'Telegram', href: 'https://t.me/' },
    { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/' },
    { id: 'github', label: 'GitHub', href: 'https://github.com/' },
  ],
  stats: [
    { value: '00+', label: 'profile.stats.years' },
    { value: '00+', label: 'profile.stats.projects' },
    { value: '00+', label: 'profile.stats.clients' },
  ],
};
