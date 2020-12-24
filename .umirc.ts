import { defineConfig } from 'umi'

export default defineConfig({
  favicon: '/assets/favicon.ico',
  title: 'svg-react-editor',
  targets: {
    ie: 11,
  },
  nodeModulesTransform: {
    type: 'none',
  },
})
