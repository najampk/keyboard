
import { useEffect } from 'react';
import { generateSitemap } from '../utils/sitemapGenerator';

const SitemapXml = () => {
  useEffect(() => {
    const sitemap = generateSitemap();
    
    // Set the content type to XML
    const response = new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
    
    // Create a blob and download or serve the sitemap
    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // For client-side, we'll redirect to show the XML content
    document.body.innerHTML = `<pre>${sitemap.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`;
    document.title = 'Sitemap.xml';
  }, []);

  return <div>Loading sitemap...</div>;
};

export default SitemapXml;
