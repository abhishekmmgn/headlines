import localFont from "next/font/local";
import { PT_Serif } from "next/font/google";

export const helvetica = localFont({
	src: "./Helvetica.woff",
	variable: "--helvetica",
});
export const helveticaLight = localFont({
	src: "./Helvetica-Light.woff",
	variable: "--helvetica-light",
});
export const helveticaBold = localFont({
	src: "./Helvetica-Bold.woff",
	variable: "--helvetica-bold",
});
export const helveticaOblique = localFont({
	src: "./Helvetica-Oblique.woff",
	variable: "--helvetica-oblique",
});

export const ptSerif = PT_Serif({
	subsets: ["latin"],
	weight: ["400", "700"],
	display: "swap",
});
