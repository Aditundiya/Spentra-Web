import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Spentra — Smart Finance Tracker',
  description: 'Track expenses, manage income, split group bills, and understand where your money goes. Spentra is coming soon to Android.',
  openGraph: {
    title: 'Spentra — Smart Finance Tracker',
    description: 'Track expenses, manage income, split group bills. Coming soon to Android.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spentra — Smart Finance Tracker',
    description: 'Track expenses, manage income, split group bills. Coming soon to Android.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#6366F1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
