export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Anak Pembaca",
  description: "Membaca membuka jendela dunia",
  mainNav: [
    {
      title: "Beranda",
      href: "/",
    },
    {
      title: "Buku",
      href: "/book",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
