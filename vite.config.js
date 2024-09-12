import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  css: {
    modules: {
      // 启用 CSS 模块化
      localsConvention: 'camelCaseOnly',
      scopeBehaviour: 'local',
      generateScopedName: '[name]_[local]_[hash:base64:5]',
      globalModulePaths: [],
    },
    preprocessorOptions: {
      // 预处理器选项
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    },
    postcss: {
      // PostCSS 配置
      plugins: [
        autoprefixer()
      ]
    }
  }
})