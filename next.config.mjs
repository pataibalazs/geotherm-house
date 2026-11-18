/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "geotherm.sirv.com",
        pathname: "/**",
      },
    ],
  },
  // Old English URLs moved to Hungarian slugs; permanent redirects keep indexed links and SEO value.
  async redirects() {
    return [
      { source: "/construction", destination: "/kivitelezes", permanent: true },
      { source: "/design", destination: "/tervezes", permanent: true },
      { source: "/references", destination: "/referenciak", permanent: true },
      { source: "/references/:slug", destination: "/referenciak/:slug", permanent: true },
      { source: "/about", destination: "/rolunk", permanent: true },
      { source: "/contact", destination: "/kapcsolat", permanent: true },
      // Pages of the former WordPress site
      { source: "/projektek/:path*", destination: "/referenciak", permanent: true },
      { source: "/altalanos-informaciok", destination: "/kapcsolat", permanent: true },
    ];
  },
};

export default nextConfig;
