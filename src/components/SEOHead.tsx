
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage?: string;
  structuredData?: object;
  breadcrumbs?: Array<{ name: string; url: string }>;
  pageType?: 'website' | 'article' | 'faq' | 'contact';
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://rapidkeycheck.lovable.app/og-image.png",
  structuredData,
  breadcrumbs,
  pageType = 'website'
}: SEOHeadProps) => {
  const fullTitle = `${title} | KeyTest Pro - Professional Keyboard Tester`;
  
  // Default organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KeyTest Pro",
    "url": "https://rapidkeycheck.lovable.app/",
    "logo": "https://rapidkeycheck.lovable.app/og-image.png",
    "description": "Professional online keyboard testing tools for Windows, Mac, and all keyboard types",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service"
    }
  };

  // Website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "KeyTest Pro - Professional Keyboard Tester",
    "url": "https://rapidkeycheck.lovable.app/",
    "description": "Free online keyboard tester for Windows, Mac, gaming, and mechanical keyboards",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rapidkeycheck.lovable.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Breadcrumb schema
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  } : null;

  // Page-specific schema
  const pageSchema = pageType === 'article' ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": canonicalUrl,
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "KeyTest Pro"
    },
    "publisher": organizationSchema
  } : pageType === 'faq' ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": title,
    "description": description,
    "url": canonicalUrl
  } : null;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={pageType === 'article' ? 'article' : 'website'} />
      <meta property="og:site_name" content="KeyTest Pro" />
      
      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@KeyTestPro" />
      
      {/* Technical SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="en" />
      <meta name="author" content="KeyTest Pro" />
      <meta name="generator" content="KeyTest Pro - Professional Keyboard Tester" />
      
      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Structured Data Schemas */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      
      {pageSchema && (
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      )}
      
      {/* Custom structured data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
