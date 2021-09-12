import { defineConfig } from 'umi';

export default defineConfig({
  title: 'LMH ❤️ YJ',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  theme: {
    'primary-color': '#7cb305',
  },
});
