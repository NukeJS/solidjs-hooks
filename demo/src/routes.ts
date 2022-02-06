import type { RouteDefinition } from 'solid-app-router';
import { lazy } from 'solid-js';

const routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('./pages/index')),
  },

  /**
   * Hooks Pages
   */
  {
    path: '/use-boolean',
    component: lazy(() => import('./pages/hooks/useToggle')),
  },
  {
    path: '/use-cookie',
    component: lazy(() => import('./pages/hooks/useCookie')),
  },
  {
    path: '/use-counter',
    component: lazy(() => import('./pages/hooks/useCounter')),
  },
  {
    path: '/use-effect',
    component: lazy(() => import('./pages/hooks/useEffect')),
  },
  {
    path: '/use-interval',
    component: lazy(() => import('./pages/hooks/useInterval')),
  },
  {
    path: '/use-timeout',
    component: lazy(() => import('./pages/hooks/useTimeout')),
  },
  {
    path: '/use-title',
    component: lazy(() => import('./pages/hooks/useTitle')),
  },
  {
    path: '/use-toggle',
    component: lazy(() => import('./pages/hooks/useToggle')),
  },
  {
    path: '/use-window-size',
    component: lazy(() => import('./pages/hooks/useWindowSize')),
  },
];

export default routes;
