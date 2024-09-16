import React from "react";
import FormGenerator from "@/components/form/FormGenerator";
import PlausibleProvider from "next-plausible";
import { FloatingNav as Header } from "@/components/ui/header";
import { IconHome, IconMessage, IconAppWindow } from "@tabler/icons-react";

export default function Home() {

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: (
        <IconAppWindow className="h-6 w-6 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-6 w-6 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <main className="">
      <Header navItems={navItems} />
      <div className="flex flex-col items-center min-h-screen">
        <PlausibleProvider domain={process.env.PLAUSIBLE_DOMAIN || ""}>
          <section
            className="flex flex-col relative items-center justify-center space-y-4 pt-0 min-h-screen sm:pt-24 w-full bg-[url('/grid.svg')]"
            id="hero"
          >
            <h1 className="text-4xl font-bold text-center tracking-tighter sm:text-5xl md:text-6xl leading-6">
              Create your forms <br></br>in seconds not hours
            </h1>
            <p className="max-w-[600px] mt-4 text-center text-gray-500 md:textl-xl">
              Generate, publish and share your form right away with AI. Dive
              into insightful results, charts and analytics.
            </p>
            <FormGenerator btn="Create your form" title="Create a form!" />
            <div className="w-full bg-gradient-to-b absolute bottom-0 from-transparent to-white h-16"></div>
          </section>
          <section
            className="flex flex-col items-center justify-center space-y-4 mt-12 pb-24"
            id="features"
          >
            <h2 className="text-3xl font-bold text-center tracking-tighter sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            
          </section>
        </PlausibleProvider>
      </div>
    </main>
  );
}
