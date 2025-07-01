
export const generateSitemap = () => {
  const baseUrl = 'https://keyboard.najam.me';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/windows-keyboard-test', priority: '0.9', changefreq: 'monthly' },
    { path: '/mac-keyboard-test', priority: '0.9', changefreq: 'monthly' },
    { path: '/gaming-keyboard-test', priority: '0.8', changefreq: 'monthly' },
    { path: '/mechanical-keyboard-test', priority: '0.8', changefreq: 'monthly' },
    { path: '/laptop-keyboard-test', priority: '0.8', changefreq: 'monthly' },
    { path: '/wireless-keyboard-test', priority: '0.8', changefreq: 'monthly' },
    { path: '/numpad-keyboard-test', priority: '0.7', changefreq: 'monthly' },
    { path: '/function-keys-test', priority: '0.7', changefreq: 'monthly' },
    { path: '/sticky-keys-test', priority: '0.7', changefreq: 'monthly' },
    { path: '/key-response-test', priority: '0.7', changefreq: 'monthly' },
    { path: '/second-hand-keyboard-test', priority: '0.7', changefreq: 'monthly' },
    { path: '/keyboard-repair-guide', priority: '0.6', changefreq: 'monthly' },
    { path: '/how-to-test-keyboard-keys-working', priority: '0.8', changefreq: 'monthly' },
    { path: '/keyboard-testing-software-free-download', priority: '0.8', changefreq: 'monthly' },
    { path: '/online-keyboard-tester-for-mac', priority: '0.8', changefreq: 'monthly' },
    { path: '/best-keyboard-testing-tool-for-windows-10', priority: '0.8', changefreq: 'monthly' },
    { path: '/keyboard-latency-testing-program', priority: '0.7', changefreq: 'monthly' },
    { path: '/how-to-test-mechanical-keyboard-switches', priority: '0.7', changefreq: 'monthly' },
    { path: '/keyboard-hardware-diagnostic-tool', priority: '0.7', changefreq: 'monthly' },
    { path: '/check-keyboard-ghosting-and-rollover', priority: '0.7', changefreq: 'monthly' },
    { path: '/keyboard-test-no-software-needed', priority: '0.8', changefreq: 'monthly' },
    { path: '/test-gaming-keyboard-anti-ghosting', priority: '0.7', changefreq: 'monthly' },
    { path: '/keyboard-health-check-utility', priority: '0.7', changefreq: 'monthly' },
    { path: '/keyboard-matrix-testing-tutorial', priority: '0.6', changefreq: 'monthly' },
    { path: '/keyboard-key-press-recognition-test', priority: '0.7', changefreq: 'monthly' },
    { path: '/keyboard-stuck-key-detection-online', priority: '0.7', changefreq: 'monthly' }
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemapXml;
};
