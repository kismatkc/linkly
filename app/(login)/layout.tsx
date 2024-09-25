import { ThemeProvider } from "@/components/theme-provider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className="flex flex-col gap-y-16 max-w-5xl">{children}</main>
    </ThemeProvider>
  );
}
