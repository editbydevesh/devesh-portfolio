import gsap from 'gsap';
import Lenis from 'lenis';

const routes = { home: '/home', projects: 'projects.html', photography: 'photography.html', services: 'services.html', about: 'about.html', contact: 'contact.html', 'project-1': 'project-1.html', 'project-2': 'project-2.html', 'project-3': 'project-3.html', 'project-4': 'project-4.html', 'project-5': 'project-5.html' };

const siteData = {
  home: { title: 'Designs by Devesh', eyebrow: 'Editorial portfolio', copy: 'Work shaped by graphic design and a careful editorial eye. Every detail is considered — from the first mark to the final interaction.', cards: [{ title: 'Logo Design', meta: 'Identity systems' }, { title: 'Brand Identity', meta: 'Premium storytelling' }, { title: 'Poster Design', meta: 'Print and campaign language' }, { title: 'Clothing Graphic', meta: 'Fashion-led visual direction' }, { title: 'Packaging Design', meta: 'Product and packaging visuals' }, { title: 'Social Media Post', meta: 'Editorial content for digital' }] },
  projects: { title: 'Projects', eyebrow: 'Case studies', intro: 'A curated selection of identity systems, packaging, and visual explorations. Each project is crafted with clarity, emotion, and strong editorial direction.', projects: [
    { id: 1, number: '01', cover: 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/Luke%27sb%201.png', title: "Luke's Iced Coffee", copy: 'Branding and packaging with a sharp vintage edge, balancing cool tone and tactile material cues.', role: 'Brand Identity, Packaging Design', year: '2024', client: "Luke's Iced Coffee", fullDescription: "Luke's Iced Coffees is embarking on an exciting venture. Brand personality that is both edgy and cool. The design resonate with modern sensibilities while also allowing for a touch of vintage charm. The brand convey qualities such as innovation, approach-ability, and a genuine connection with its audience.", gallery: ['https://raw.githubusercontent.com/editbydevesh/Portfolio/main/Assests/LUKE%27s-packaging-design2.webp', 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/Luke%27sb%201.png', 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/LUKE%27S-coffee-Cup%201.png', 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/LUKE%27S-Duct_Tape_Mockup%201.png'], details: ['Sharp vintage-inspired letterforms', 'Custom color palette: navy, cream, and copper', 'Sustainable packaging materials', 'Consistent visual language across touchpoints'] },
    { id: 2, number: '02', cover: 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/khajurao%20cir%201.png', title: 'Khajuraho Dance Festival', copy: 'A combination mark that mixes cultural ornament, temple-inspired geometry, and rich festival energy.', role: 'Logo Design, Visual Identity', year: '2024', client: 'Khajuraho Dance Festival', fullDescription: 'Central Motif: Two stylized dancing feet with traditional anklets, wrapped in sari-like fabric with intricate Indian patterns, set against a temple silhouette symbolizing Khajuraho\'s cultural heritage. Mandala Motif: A vibrant red mandala with red, green, blue, and orange geometric and floral designs, adding an ethnic touch reflective of Indian art and culture. Text Elements: "KHAJURAHO" in soft beige evokes tradition, while "DANCE" is bold with dancer silhouettes inside the letters, and "FESTIVAL" in dark brown to emphasize cultural richness.', gallery: ['https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/khajurahooo.jpg', 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/khaji.jpg', 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/khajurao-Circle_Card_Mockup%201.png', 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/khajurao-Tote_Bag_Mockup%201.png'], details: ['Temple-inspired geometric composition', 'Ornamental typography pairing', 'Multi-color and monochrome variations', 'Application across promotional materials'] },
    { id: 3, number: '03', cover: 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/lighting%20networks%20logo.png', title: 'Lightning Networks', copy: 'A fast, clean identity rooted in signal, speed, and infrastructure, built around a compact mark.', role: 'Logo Design, Brand System', year: '2024', client: 'Lightning Networks', fullDescription: 'A tech-forward identity system for a networking infrastructure company. The design emphasizes speed, connectivity, and modern technology through clean lines and a distinctive mark that suggests both signal transmission and growth. The logo, featuring a blue lightning bolt and green network bars forming an "L", represents a brand dedicated to delivering fast and reliable internet services.', gallery: ['https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/lighting%20networks%20logo.png', 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/lighting%20logo%20mockup%201.png', 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/lighting%20network%20mock%201.png', 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/lighting%20networks%20roughlogo.png'], details: ['Signal-inspired geometric mark', 'Tech-forward typography', 'Digital and print applications', 'Flexible color system for various contexts'] },
    { id: 4, number: '04', cover: 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/NaturalPRO%202.png', title: 'Natural Pro', copy: 'A monochrome fitness mark focused on strength, resilience, and a minimal premium sports aesthetic.', role: 'Logo Design, Brand Guidelines', year: '2024', client: 'Natural Pro', fullDescription: 'A premium fitness and wellness brand identity with a minimalist approach. The mark communicates strength and natural movement through geometric abstraction, supporting a holistic lifestyle brand positioning. The protein brand "NATURAL PRO" has a simple yet impactful design. It features an arm flexing a bicep, holding a dumbbell. The bicep has mountain peaks embedded within it, symbolizing strength, resilience, and perhaps a natural or organic quality. The entire design is enclosed within a circular outline, giving it a contained and balanced look. The monochromatic black-and-white style keeps it clean and bold, suitable for a fitness or health-related brand.', gallery: ['https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/NaturalPRO%202.png', 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/NaturalPRO-mockup%201.png', 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/naturalpro%20rough%20idea.png', 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/natural%20pro%20rough%20idea1.png'], details: ['Minimalist geometric form', 'Monochrome primary mark', 'Premium sports aesthetic', 'Comprehensive brand guidelines'] },
    { id: 5, number: '05', cover: 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/google%2025th.png', title: 'Selected Identity Set', copy: 'A broader logo system showing exploration across monograms, pictorial marks, and modern typography.', role: 'Logo System, Typography Design', year: '2024', client: 'Various Clients', fullDescription: 'A collection of diverse logo explorations showcasing different design approaches: abstract monograms, pictorial marks, and typographic systems. Each demonstrates a distinct visual language while maintaining cohesive design principles across the portfolio.', gallery: ['https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/google%2025th.png', 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/dd.png', 'https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/softpolka.png', '', '', ''], details: ['Six distinct logo variations', 'Monogram explorations', 'Pictorial mark systems', 'Typography-forward designs', 'Versatile mark structures', 'Multi-industry applications'] }
  ] },
  photography: { title: 'Photography', eyebrow: 'Visual stories', intro: 'Capturing quiet moments, textures, light, and atmosphere through an observational lens. A curated collection of frames exploring emotion, composition, and everyday cinematic detail.', cards: [['CAPTURED INTERIOR OF A CAFE', 'A warm café space with ambient lighting and intimate composition.'], ['CAPTURED ARCHITECTURE OF A BUILDING', 'An atmospheric evening frame focused on structure, symmetry, and mood.'], ['PORTRAIT OF A FEMALE MODEL', 'A minimal portrait setup with soft tones and editorial presence.'], ['EVENING WALK UNDER CITY LIGHTS', 'A cinematic outdoor frame shaped by shadow, light, and silence.'], ['COMBINATION OF SHADOWS AND LIGHTS', 'A dramatic sunset scene with layered color and natural contrast.'], ['PORTRAIT OF A WILD MONKEY', 'A candid wildlife moment captured with openness and curiosity.'], ['PORTRAIT OF A DOMESTIC CAT', 'A quiet close-up focused on texture, expression, and eye contact.'], ['CLOSEUP OF HANDPAINTED ART', 'A detailed composition exploring color, pattern, and handmade form.']] },
  services: { title: 'Services', eyebrow: 'What I make', intro: 'Creative design solutions crafted to build strong visual identity and digital presence. From branding to campaign design and web experiences, every project is shaped with clarity and intention.', services: [['Brand Identity', 'Logos, systems, and identity direction built with editorial discipline.'], ['Packaging Design', 'Cinematic product stories and premium tactile packaging language.'], ['Motion & Social', 'Short-form motion, reveals, and content assets for digital campaigns.'], ['Photography Direction', 'Visual planning, composition, and on-set art direction.'], ['Campaign Design', 'Posters, launches, and artful promotional material.'], ['Creative Consultation', 'A design-led review process for evolving visual systems.']] },
  about: { title: 'About', eyebrow: 'Profile', intro: 'I\'m Devesh Samaria — a multidisciplinary creative working across brand identity, motion, photography, and visual direction. My work combines editorial design principles with cinematic storytelling to create visuals that feel intentional, refined, and emotionally grounded.', story: ['My practice focuses on building premium visual systems through typography, composition, motion, and atmosphere.', 'I create brand identities, packaging, campaign visuals, and digital content with a balance of clarity and artistic character.', 'Each project is shaped with attention to structure, tactile detail, and visual rhythm to create memorable experiences.', 'From concept to execution, I aim to transform ideas into work that feels timeless, immersive, and visually distinct.'] },
  contact: { title: 'Contact', eyebrow: 'Start a project', intro: 'Let\'s create something visually lasting. Open for brand identities, creative collaborations, and editorial design projects.' },
};

const body = document.body;
const page = body.dataset.page || 'home';
const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const app = document.querySelector('#app');
const pageTransition = document.createElement('div');
pageTransition.className = 'page-transition';
document.body.appendChild(pageTransition);

const lenis = new Lenis({
  smoothWheel: true,
  lerp: 0.05,
  wheelMultiplier: 0.8
});

let rafId;
function raf(time) {
  lenis.raf(time);
  rafId = requestAnimationFrame(raf);
}
rafId = requestAnimationFrame(raf);
window.addEventListener('beforeunload', () => {
  cancelAnimationFrame(rafId);
  lenis.destroy();
});

function createHeader(activePage) {
  const navItems = [['Home', 'home'], ['Projects', 'projects'], ['Photography', 'photography'], ['Services', 'services'], ['About', 'about'], ['Contact', 'contact']];
  return `
    <header class="header">
      <div class="header__inner">
        <a class="brand-mark" href="${routes.home}" data-nav><img class="brand-mark__logo" src="https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/dd.png" alt="Devesh Samaria" /></a>
        <nav class="nav" aria-label="Primary">
          ${navItems.map(([label, key]) => `<a href="${routes[key]}" ${key === activePage ? 'class="is-active" aria-current="page"' : ''} data-nav>${label}</a>`).join('')}
        </nav>
      </div>
    </header>`;
}

function projectCardMarkup({ title, meta }, index) {
  return `<article class="glass-card reveal" data-reveal><span class="glass-card__orb" aria-hidden="true"></span><div><div class="glass-card__index">0${index + 1} / ${meta}</div><h3 class="glass-card__title">${title}</h3></div><div class="pill">Selected work</div></article>`;
}

function renderHome() {
  const data = siteData.home;
  return `${createHeader('home')}<main class="page-shell"><section class="hero section"><div class="hero__grid"><div><div class="eyebrow reveal" data-reveal>${data.eyebrow}</div><h1 class="reveal" data-reveal><span class="fill">DESIGNS</span> BY DEVESH</h1><p class="hero__copy reveal" data-reveal>${data.copy}</p><div class="hero__badge-row reveal" data-reveal><a class="btn btn--dark" href="${routes.projects}" data-nav>Explore projects</a><a class="btn" href="${routes.contact}" data-nav>Get in touch</a></div><div class="section-divider reveal" data-reveal></div></div><div class="hero__layout"><div class="hero__card reveal" data-reveal><img src="https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/lighting%20network%20mock%201.png" alt="Decorative header texture" loading="lazy" width="1200" height="800" /></div><div class="card-grid">${data.cards.map(projectCardMarkup).join('')}</div></div></div></section></main>`;
}

function renderProjects() {
  const data = siteData.projects;
  return `${createHeader('projects')}<main class="page-shell"><section class="section"><div class="section-title reveal" data-reveal><div><div class="eyebrow">${data.eyebrow}</div><h2 class="page-title">${data.title}</h2></div><p>${data.intro}</p></div><div class="project-stack">${data.projects.map((item) => `<a href="project-${item.id}.html" data-nav class="project-card reveal" data-reveal><div class="project-card__art" aria-hidden="true"></div><div class="project-card__content"><div class="project-card__meta"><div class="pill">${item.number}</div><h3>${item.title}</h3><p>${item.copy}</p></div><div class="project-card__figure">${item.cover ? '<img src="' + item.cover + '" alt="' + item.title + '" loading="lazy" width="1200" height="800" style="width:100%;height:100%;min-height:20rem;object-fit:cover;display:block;border-radius:1.5rem;" />' : ''}</div></div></a>`).join('')}</div></section></main>`;
}

function renderPhotography() {
  const data = siteData.photography;
  return `${createHeader('photography')}<main class="page-shell"><section class="section"><div class="section-title reveal" data-reveal><div><div class="eyebrow">${data.eyebrow}</div><h2 class="page-title">${data.title}</h2></div><p>${data.intro}</p></div><div class="photo-grid">${data.cards.map(([title, copy], index) => {
      const photoFiles = ['Rectangle', 'Rectangle%202', 'Rectangle%203', 'Rectangle%204', 'Rectangle%205', 'Rectangle%206', 'Rectangle%207', 'Rectangle%208'];
      const imgUrl = `https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/photography/${photoFiles[index]}.png`;
      return `<article class="photo-card reveal" data-reveal><div class="photo-card__image"><img src="${imgUrl}" alt="${title}" loading="lazy" width="900" height="600" /></div><div class="photo-card__body"><h3>${title}</h3><p>${copy}</p></div></article>`;
    }).join('')}</div></section></main>`;
}

function renderServices() {
  const data = siteData.services;
  return `${createHeader('services')}<main class="page-shell"><section class="section"><div class="section-title reveal" data-reveal><div><div class="eyebrow">${data.eyebrow}</div><h2 class="page-title">${data.title}</h2></div><p>${data.intro}</p></div><div class="service-grid">${data.services.map(([title, copy]) => `<article class="service-card reveal" data-reveal><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div></section></main>`;
}

function renderAbout() {
  const data = siteData.about;
  const dockIcons = [
    { name: 'Figma',         svg: '<svg viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="13" fill="#ffffff"/><g transform="translate(9.5,0)"><path d="M19 28.5C19 25.98 20 23.56 21.78 21.78C23.56 20 25.98 19 28.5 19C31.02 19 33.44 20 35.22 21.78C36.99 23.56 38 25.98 38 28.5C38 31.02 36.99 33.44 35.22 35.22C33.44 36.99 31.02 38 28.5 38C25.98 38 23.56 36.99 21.78 35.22C20 33.44 19 31.02 19 28.5Z" fill="#1ABCFE"/><path d="M0 47.5C0 44.98 1 42.56 2.78 40.78C4.56 39 6.98 38 9.5 38H19V47.5C19 50.02 18 52.44 16.22 54.22C14.44 55.99 12.02 57 9.5 57C6.98 57 4.56 55.99 2.78 54.22C1 52.44 0 50.02 0 47.5Z" fill="#0ACF83"/><path d="M19 0V19H28.5C31.02 19 33.44 18 35.22 16.22C36.99 14.44 38 12.02 38 9.5C38 6.98 36.99 4.56 35.22 2.78C33.44 1 31.02 0 28.5 0H19Z" fill="#FF7262"/><path d="M0 9.5C0 12.02 1 14.44 2.78 16.22C4.56 17.99 6.98 19 9.5 19H19V0H9.5C6.98 0 4.56 1 2.78 2.78C1 4.56 0 6.98 0 9.5Z" fill="#F24E1E"/><path d="M0 28.5C0 31.02 1 33.44 2.78 35.22C4.56 36.99 6.98 38 9.5 38H19V19H9.5C6.98 19 4.56 20 2.78 21.78C1 23.56 0 25.98 0 28.5Z" fill="#A259FF"/></g></svg>' },
    { name: 'Photoshop',     svg: '<svg viewBox="0 0 240 234" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="234" rx="42" fill="#001E36"/><text x="120" y="121" text-anchor="middle" dominant-baseline="central" font-family="Arial,Helvetica,sans-serif" font-weight="900" font-size="126" fill="#31A8FF">Ps</text></svg>'    },
    { name: 'Illustrator',   svg: '<svg viewBox="0 0 240 234" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="234" rx="42" fill="#310000"/><text x="120" y="121" text-anchor="middle" dominant-baseline="central" font-family="Arial,Helvetica,sans-serif" font-weight="900" font-size="126" fill="#FF9A00">Ai</text></svg>'    },
    { name: 'Premiere Pro',  svg: '<svg viewBox="0 0 240 234" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="234" rx="42" fill="#0A0740"/><text x="120" y="121" text-anchor="middle" dominant-baseline="central" font-family="Arial,Helvetica,sans-serif" font-weight="900" font-size="126" fill="#9999FF">Pr</text></svg>'    },
    { name: 'After Effects', svg: '<svg viewBox="0 0 240 234" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="234" rx="42" fill="#0D0640"/><text x="120" y="121" text-anchor="middle" dominant-baseline="central" font-family="Arial,Helvetica,sans-serif" font-weight="900" font-size="126" fill="#9FAAFF">Ae</text></svg>'    },
  ];
  const dockHTML = dockIcons.map(icon =>
    `<div class="dock-item"><div class="dock-icon-wrap">${icon.svg}</div><span class="dock-name">${icon.name}</span></div>`
  ).join('');
  return `${createHeader('about')}<main class="page-shell"><section class="section"><article class="about-card reveal" data-reveal><div class="eyebrow">${data.eyebrow}</div><h1 class="page-title">${data.title}</h1><p class="lead">${data.intro}</p><div class="quote-band"><p>“Minimal, practical, and precise.”</p></div></article><div class="tool-dock reveal" data-reveal><div class="eyebrow dock-eyebrow">Tools &amp; Software</div><div class="dock-shelf">${dockHTML}</div></div><div class="section-divider"></div><div class="service-grid">${data.story.map((copy, index) => `<article class="text-panel reveal" data-reveal><div class="pill">0${index + 1}</div><p>${copy}</p></article>`).join('')}</div></section></main>`;
}

function renderContact() {
  const data = siteData.contact;
  return `${createHeader('contact')}<main class="page-shell"><section class="section"><div class="section-title reveal" data-reveal><div><div class="eyebrow">${data.eyebrow}</div><h2 class="page-title">${data.title}</h2></div><p>${data.intro}</p></div><div class="contact-grid"><article class="contact-card reveal" data-reveal><h3>Direct</h3><p>workbydevesh@gmail.com</p><div class="section-divider"></div><p>Instagram, portfolio reviews, and project conversations.</p><div class="button-row" style="margin-top:1rem"><a class="btn btn--dark" href="mailto:workbydevesh@gmail.com">Email</a><a class="btn" href="${routes.projects}" data-nav>View work</a></div></article><article class="contact-card reveal" data-reveal><h3>Message</h3><form class="contact-form"><div class="field"><label for="name">Name</label><input id="name" name="name" placeholder="Your name" /></div><div class="field"><label for="email">Email</label><input id="email" name="email" type="email" placeholder="Your email" /></div><div class="field"><label for="message">Project brief</label><textarea id="message" name="message" placeholder="Tell me about the project"></textarea></div><div class="button-row"><button class="btn btn--dark" type="submit">Send enquiry</button><span class="pill">Responses within 48h</span></div></form></article></div></section></main>`;
}

function renderProjectDetail() {
  const projectId = parseInt(page.split('-')[1]);
  const project = siteData.projects.projects.find(p => p.id === projectId);
  if (!project) return renderProjects();
  
  const projects = siteData.projects.projects;
  const currentIndex = projects.findIndex(p => p.id === projectId);
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex] ?? projects[0];
  
  return `${createHeader('projects')}<main class="page-shell"><section class="section"><div class="project-detail reveal" data-reveal><div><div class="eyebrow">${project.number}</div><h1 class="page-title">${project.title}</h1><p class="lead">${project.copy}</p></div><div class="project-meta"><div class="meta-item"><strong>Client</strong><p>${project.client}</p></div><div class="meta-item"><strong>Role</strong><p>${project.role}</p></div><div class="meta-item"><strong>Year</strong><p>${project.year}</p></div></div></div><div class="section-divider reveal" data-reveal></div><div class="project-content"><article class="project-description reveal" data-reveal><h2>Overview</h2><p>${project.fullDescription}</p></article><div class="project-gallery reveal" data-reveal>${project.gallery.map(url => url ? `<div class="gallery-item"><img src="${url}" alt="${project.title}" loading="lazy" width="1200" height="800" /></div>` : `<div class="gallery-item gallery-item--blank"></div>`).join('')}</div><article class="project-details reveal" data-reveal><h2>Details</h2><ul class="details-list">${project.details.map(detail => `<li>${detail}</li>`).join('')}</ul></article></div><div class="section-divider reveal" data-reveal></div><div class="project-nav reveal" data-reveal><a href="${routes.projects}" data-nav class="btn">← Back to Projects</a><a href="project-${nextProject.id}.html" data-nav class="btn">Next Project →</a></div></section></main>`;
}

function createFooter() {
  return `
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__brand">
          <a href="${routes.home}" data-nav class="footer__logo"><img src="https://cdn.jsdelivr.net/gh/editbydevesh/Portfolio@main/Assests/dd.png" alt="Devesh Samaria" /></a>
          <div class="footer__brand-text">
            <h3>Devesh Samaria</h3>
            <p>Visual designer</p>
          </div>
        </div>
        
        <div class="footer__links">
          <nav class="footer__nav">
            <a href="${routes.home}" data-nav>Home</a>
            <a href="${routes.projects}" data-nav>Projects</a>
            <a href="${routes.photography}" data-nav>Photography</a>
            <a href="${routes.services}" data-nav>Services</a>
            <a href="${routes.about}" data-nav>About</a>
            <a href="${routes.contact}" data-nav>Contact</a>
          </nav>
          
          <div class="footer__social">
            <a href="https://www.instagram.com/editby23/" target="_blank" rel="noopener" aria-label="Instagram">Instagram</a>
            <a href="https://www.linkedin.com/in/editbydevesh/" target="_blank" rel="noopener" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://www.behance.net/editbydevesh" target="_blank" rel="noopener" aria-label="Behance">Behance</a>
          </div>
        </div>
        
        <div class="footer__divider"></div>
        
        <div class="footer__bottom">
          <p class="footer__email"><a href="mailto:workbydevesh@gmail.com">workbydevesh@gmail.com</a></p>
          <p class="footer__copyright">All Rights Reserved 2026 © Designs By Devesh</p>
        </div>
      </div>
    </footer>
  `;
}

function renderPage() {
  const renderers = { home: renderHome, projects: renderProjects, photography: renderPhotography, services: renderServices, about: renderAbout, contact: renderContact };
  let pageContent;
  
  if (page.startsWith('project-')) {
    pageContent = renderProjectDetail();
    const projectId = parseInt(page.split('-')[1]);
    const project = siteData.projects.projects.find(p => p.id === projectId);
    document.title = `${project?.title || 'Project'} | Devesh Samaria`;
  } else {
    pageContent = (renderers[page] || renderHome)();
    document.title = `${siteData[page]?.title || 'Portfolio'} | Devesh Samaria`;
  }
  
  app.innerHTML = `${pageContent}${createFooter()}`;
}

function setupFooterAnimation() {
  const footer = document.querySelector('.footer');
  if (!footer) return;
  if (prefersReducedMotion) {
    footer.style.opacity = '1';
    footer.style.transform = 'none';
  } else {
    gsap.set(footer, { opacity: 0, y: 30 });
    gsap.to(footer, { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power2.out' });
  }
  
  const footerLinks = footer.querySelectorAll('.footer__nav a, .footer__social a, .footer__logo');
  footerLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      if (!prefersReducedMotion) gsap.to(link, { y: -2, duration: 0.2, ease: 'power2.out', overwrite: 'auto' });
    });
    link.addEventListener('mouseleave', () => {
      if (!prefersReducedMotion) gsap.to(link, { y: 0, duration: 0.2, ease: 'power2.out', overwrite: 'auto' });
    });
  });
}

function setupReveal() {
  const items = app.querySelectorAll('[data-reveal]');
  if (!items.length) return;
  if (prefersReducedMotion) {
    items.forEach(i => { i.style.opacity = 1; i.style.visibility = 'visible'; i.style.transform = 'none'; });
    return;
  }

  gsap.set(items, { opacity: 0, y: 20, visibility: 'hidden' });
  gsap.to(items, {
    opacity: 1,
    y: 0,
    visibility: 'visible',
    duration: 0.7,
    stagger: 0.04,
    ease: 'power2.out',
    overwrite: 'auto'
  });
}

function setupHoverMotion() {
  const hoverSelector = '.btn, .nav a, .glass-card, .project-card, .photo-card, .service-card, .contact-card';
  const hoverElements = new Set(app.querySelectorAll(hoverSelector));
  
  app.addEventListener('mouseenter', (e) => {
    const target = e.target.closest(hoverSelector);
    if (target && hoverElements.has(target)) {
      if (!prefersReducedMotion) gsap.to(target, { y: -3, duration: 0.2, ease: 'power2.out', overwrite: 'auto' });
    }
  }, true);
  
  app.addEventListener('mouseleave', (e) => {
    const target = e.target.closest(hoverSelector);
    if (target && hoverElements.has(target)) {
      if (!prefersReducedMotion) gsap.to(target, { y: 0, duration: 0.2, ease: 'power2.out', overwrite: 'auto' });
    }
  }, true);
}

function setupNavigation() {
  document.querySelectorAll('[data-nav]').forEach((link) => {
    link.addEventListener('click', async (event) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('mailto:')) return;
      if (href === window.location.pathname.split('/').pop()) return;
      event.preventDefault();
      
      gsap.killTweensOf(app.querySelectorAll('[data-reveal]'));
      body.classList.add('is-transitioning');
      if (!prefersReducedMotion) {
        await gsap.to(pageTransition, {
          scaleY: 1,
          duration: 0.35,
          ease: 'power2.inOut',
          transformOrigin: 'top',
          overwrite: 'auto'
        });
      } else {
        pageTransition.style.transform = 'scaleY(1)';
      }

      window.location.href = href;
    });
  });
}

function setupForm() {
  const form = app.querySelector('form.contact-form');
  if (!form) return;
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    if (!button) return;
    
    const previous = button.textContent;
    button.textContent = 'Message sent';
    if (!prefersReducedMotion) gsap.to(button, { scale: 1.02, duration: 0.2, ease: 'power2.out' });
    
    setTimeout(() => {
      if (!prefersReducedMotion) gsap.to(button, { scale: 1, duration: 0.2, ease: 'power2.out' });
      button.textContent = previous;
      form.reset();
    }, 1200);
  });
}


function setupDock() {
  const shelf = document.querySelector('.dock-shelf');
  if (!shelf) return;
  const items = Array.from(shelf.querySelectorAll('.dock-item'));
  const MAX_SCALE = 1.8;
  const RANGE = 130;

  shelf.addEventListener('mouseenter', () => shelf.classList.add('is-hovered'));
  shelf.addEventListener('mouseleave', () => {
    shelf.classList.remove('is-hovered');
    gsap.to(items, { scale: 1, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.65)', overwrite: 'auto' });
  });
  shelf.addEventListener('mousemove', (e) => {
    items.forEach(item => {
      const wrap = item.querySelector('.dock-icon-wrap');
      const rect = wrap.getBoundingClientRect();
      const cx   = rect.left + rect.width / 2;
      const dist = Math.abs(e.clientX - cx);
      const scale = dist < RANGE ? MAX_SCALE - (MAX_SCALE - 1) * (dist / RANGE) : 1;
      const lift  = dist < RANGE ? (scale - 1) * 24 : 0;
      gsap.to(item, { scale, y: -lift, duration: 0.2, ease: 'power2.out', overwrite: 'auto' });
    });
  });
}

renderPage();
setupReveal();
setupHoverMotion();
setupNavigation();
setupForm();
setupFooterAnimation();
setupDock();

window.addEventListener('load', () => {
  body.classList.remove('is-transitioning');
  gsap.to(pageTransition, {
    scaleY: 0,
    duration: 0.4,
    ease: 'power2.inOut',
    transformOrigin: 'bottom',
    overwrite: 'auto'
  });
});