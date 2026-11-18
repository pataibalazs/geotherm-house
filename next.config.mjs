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
      // Pages of the former WordPress site (menu from the 2022 Wayback Machine capture)
      { source: "/projektek/:path*", destination: "/referenciak", permanent: true },
      { source: "/project/:path*", destination: "/referenciak", permanent: true },
      { source: "/project_category/:path*", destination: "/referenciak", permanent: true },
      { source: "/category/projektek/:path*", destination: "/referenciak", permanent: true },
      { source: "/category/ertekesitesre-varo-lakasok/:path*", destination: "/", permanent: true },
      { source: "/rendkivuli-ajanlat", destination: "/", permanent: true },
      { source: "/generalkivitelezes", destination: "/kivitelezes", permanent: true },
      { source: "/otthonfelujitasi-tamogatas", destination: "/kivitelezes", permanent: true },
      { source: "/palyazat", destination: "/kivitelezes", permanent: true },
      { source: "/altalanos-informaciok", destination: "/kapcsolat", permanent: true },
      { source: "/allas", destination: "/kapcsolat", permanent: true },
      { source: "/adatkezelesi-tajekoztato", destination: "/adatkezeles", permanent: true },
    ];
  },
};

export default nextConfig;
