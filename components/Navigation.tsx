'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'ホーム' },
    { href: '/portfolio', label: 'ポートフォリオ' },
    { href: '/badges', label: 'バッジ' },
    { href: '/settings', label: '設定' },
  ];

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl font-bold">
              Blind Side
            </Link>
            <SignedIn>
              <div className="hidden md:flex items-center gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === item.href
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SignedIn>
          </div>

          <div className="flex items-center gap-4">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in">
                <Button variant="ghost">ログイン</Button>
              </Link>
              <Link href="/sign-up">
                <Button>新規登録</Button>
              </Link>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
}
