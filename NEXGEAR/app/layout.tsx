import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Scene3D from "@/components/Scene3D";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NEXGEAR | Precise Interaction",
    description: "The archive of elite input devices. Engineered for absolute transparency.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SmoothScroll>
                    <div className="relative z-10">
                        <CustomCursor />
                        {children}
                    </div>
                    <Scene3D />
                </SmoothScroll>
            </body>
        </html>
    );
}
