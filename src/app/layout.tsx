import type { Metadata } from "next";
import "./globals.css";
import { helvetica } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
	title: "Headlines",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					helvetica.className,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<div className="mx-auto w-full px-5 sm:px-auto sm:container sm:max-w-6xl pt-16 sm:pt-20">
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
