import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        home: 'home.html',
        projects: 'projects.html',
        photography: 'photography.html',
        services: 'services.html',
        about: 'about.html',
        contact: 'contact.html',
        'project-1': 'project-1.html',
        'project-2': 'project-2.html',
        'project-3': 'project-3.html',
        'project-4': 'project-4.html',
        'project-5': 'project-5.html',
      },
    },
  },
});