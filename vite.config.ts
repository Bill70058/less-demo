import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import less from 'less';
import lessLoader from 'less-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // css预处理器
    preprocessorOptions: {
      build: {
        loaders: {
          less: {
            test: /\.less$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader'
              },
              {
                loader: 'less-loader',
                options: {
                  less,
                  modifyVars: {
                    'primary-color': '#1DA57A',
                    'self-color': 'aqua'
                  }
                }
              }
            ]
          }
        }
      }
    },
   },
});
