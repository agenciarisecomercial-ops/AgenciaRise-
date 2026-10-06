import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Rise Agency — Tráfego pago com direção',description:'Gestão de tráfego pago para clínicas, restaurantes, escolas e e-commerce. Meta Ads, Google Ads e acompanhamento próximo com a Rise Agency.',icons:{icon:'/rise-symbol-transparent.png'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body>{children}</body></html>}
