import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function BadgesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">バッジ</h1>
      <Card>
        <CardHeader>
          <CardTitle>獲得バッジ</CardTitle>
          <CardDescription>
            投資の継続とルール順守で獲得できるバッジ
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            まだバッジを獲得していません。Blind Modeで投資を続けてバッジを集めましょう！
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
