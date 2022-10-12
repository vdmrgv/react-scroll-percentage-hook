import { VerticalScroll, HorizontalScroll, WindowScroll } from './pages';

const appTree = [
  {
    name: 'Common',
    path: '/common',
    subs: [
      {
        name: 'Vertical Scroll',
        path: '/vertival-scroll',
        Component: VerticalScroll,
      },
      {
        name: 'Horizontal Scroll',
        path: '/horizontal-scroll',
        Component: HorizontalScroll,
      },
      {
        name: 'Window Scroll',
        path: '/window-scroll',
        Component: WindowScroll,
      },
    ],
  },
];

export const routes = appTree.reduce((acc, tree) => {
  return [
    ...acc,
    ...tree.subs.map(({ path, Component }) => ({
      path: `${tree.path}${path}`,
      Component,
    })),
  ];
}, [] as { path: string; Component: () => JSX.Element }[]);

export const sidebarNavs = appTree.map((tree) => ({
  ...tree,
  subs: tree.subs.map(({ path, name }) => ({ path, name })),
}));
