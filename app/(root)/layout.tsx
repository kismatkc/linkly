import { ThemeProvider } from "@/components/theme-provider";
import SessionProviderWrapper from "@/components/session-provider";

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
      <SessionProviderWrapper >
       

        <main className="flex flex-col gap-y-16 max-w-5xl">{children}</main>
      </SessionProviderWrapper>
    </ThemeProvider>
  );
}
