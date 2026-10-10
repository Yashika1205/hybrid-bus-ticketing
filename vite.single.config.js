// Optional: bundles everything into one HTML file (dist-single/index.html), handy for quick sharing.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
export default defineConfig({ plugins: [react(), viteSingleFile()], build: { outDir: 'dist-single' } });
