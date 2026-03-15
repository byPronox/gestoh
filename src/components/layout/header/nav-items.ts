export const navItems = [
  {
    type: 'link',
    href: '/',
    label: 'Inicio',
  },
  {
    type: 'link',
    label: 'Precios',
    href: '/pricing',
  },
  {
    type: 'link',
    label: 'Contacto',
    href: '/contact',
  },
] satisfies NavItem[];

type NavItem = Record<string, string | unknown> &
  (
    | {
        type: 'link';
        href: string;
      }
    | {
        type: 'dropdown';
      }
  );
