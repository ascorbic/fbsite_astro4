export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/about_PE_7gdIc.mjs').then(n => n.z);

export { page };
