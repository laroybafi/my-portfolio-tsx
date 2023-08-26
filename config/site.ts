export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "My Portfolio - Laroybafia",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    	{
      		label: "About",
      		href: "/about",
    	},
    	{
      		label: "Experience",
      		href: "/experience",
    	},
    	{
      		label: "Blog",
      		href: "/blog",
    	},
    	{
      		label: "Contact",
      		href: "/contact",
    	}
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
	},
};
