import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ポートフォリオ</h1>
      <Card>
        <CardHeader>
          <CardTitle>保有銘柄</CardTitle>
          <CardDescription>
            あなたの保有銘柄とBlind Mode設定を管理します
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            銘柄がまだ登録されていません。新規銘柄を追加してBlind Modeを開始しましょう。
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
