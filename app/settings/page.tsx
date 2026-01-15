import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SettingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">設定</h1>
      <Card>
        <CardHeader>
          <CardTitle>アカウント設定</CardTitle>
          <CardDescription>
            プロフィールと通知設定を管理します
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            設定項目は今後追加予定です。
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
