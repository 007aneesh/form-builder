import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormifyAI",
  description:
    "FormifyAI is an innovative AI-powered form builder designed to transform the way you create and manage forms. With intelligent automation and intuitive design, FormifyAI streamlines form creation, automates workflows, and adapts to your unique needs. Whether you're building surveys, collecting feedback, or managing complex data, FormifyAI empowers you to create dynamic, responsive forms in minutes — no coding required. Harness the power of AI to simplify your workflow and elevate your productivity with smarter, faster, and more efficient forms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
