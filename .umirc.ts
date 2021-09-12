import { defineConfig } from 'umi';

export default defineConfig({
  title: 'LMH ❤️ YJ',
  nodeModulesTransform: {
    type: 'none',
  },
  history: { type: 'hash' },
  outputPath: 'build',
  publicPath: 'https://lmh87883819.github.io/mid_autumn_travel/',
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  theme: {
    'primary-color': '#7cb305',
  },
});
