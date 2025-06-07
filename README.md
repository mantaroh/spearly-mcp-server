# Spearly CMS MCP

Spearly CMSのコンテンツを検索・取得・修正・追加するためのMCPサーバーです。

## 利用方法

### 1. 設定

`.cursor/mcp.json`に以下の設定を追加します：

```json
{
    "mcpServers": {
        "spearly": {
            "command": "npx",
            "args": [
                "-y",
                "@spearly/mcp-server@latest",
                "--spearly-api-key=YOUR_API_KEY"
            ]
        }
    }
}
```

`YOUR_API_KEY`を実際のSpearly APIキーに置き換えてください。

### 2. Cursorでの利用

#### AIアシスタントとの対話による利用

CursorのAIアシスタントに自然な形で質問することで、Spearlyのコンテンツを取得できます。

例：
- 「Spearlyの記事一覧を取得して」
- 「Spearlyのブログ記事を検索して」
- 「Spearlyの特定の記事の内容を教えて」

AIアシスタントは自動的にMCPを使用して、要求されたコンテンツを取得し、適切な形式で表示します。

#### MCPパネルでの直接利用

1. Cursorの「MCP」パネルを開く
2. 「spearly」MCPを選択
3. 以下の操作が可能：
   - コンテンツ一覧取得
   - コンテンツ取得（記事メタデータ含む）
   - コンテンツ追加
   - コンテンツ内フィールドの修正
   - コンテンツ修正（フィールドのバルク修正）
   - 全コンテンツのフィールド修正（バルク修正）

#### Cursorでの具体的な利用手順

1. Cursorを起動し、プロジェクトを開く
2. 左側のサイドバーから「MCP」タブを選択
3. 「spearly」MCPを選択し、接続
4. MCPパネルから各操作を実行

例：コンテンツ一覧取得
```typescript
// MCPパネルで以下のように呼び出し
await spearly.listContents({ contentType: 'article' });
```

例：コンテンツ取得
```typescript
// MCPパネルで以下のように呼び出し
await spearly.getContent({ contentType: 'article', contentId: '123' });
```

## ライセンス

MIT 