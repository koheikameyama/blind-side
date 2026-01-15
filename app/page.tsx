import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Blind Side
        </h1>
        <p className="text-2xl mb-6 text-primary">
          見ないから、勝てる。
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          投資家の最大の敵は「感情」です。含み損を見て恐怖で売却し、含み益を見て早期利確してしまう。
          Blind Sideは、損益を意図的に見えなくすることで、感情に左右されない合理的な投資判断を支援します。
        </p>

        <SignedOut>
          <div className="flex gap-4">
            <Link href="/sign-up">
              <Button size="lg">今すぐ始める</Button>
            </Link>
            <Link href="/sign-in">
              <Button size="lg" variant="outline">ログイン</Button>
            </Link>
          </div>
        </SignedOut>

        <SignedIn>
          <Link href="/portfolio">
            <Button size="lg">ポートフォリオを見る</Button>
          </Link>
        </SignedIn>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">主な機能</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>損益を非表示</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                購入後、目標達成まで株価・含み損益を隠します
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ルールベース投資</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                購入前に決めた利確・損切りルールに従います
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>メンタルの平穏</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                毎日株価をチェックするストレスから解放されます
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ゲーミフィケーション</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                バッジ・励ましで投資の継続をサポートします
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
