# Spearly CMS MCP

Spearly CMSのコンテンツを検索・取得・修正・追加するためのMCPサーバーです。

## 利用方法

### 1. インストール

```bash
npm install
```

### 2. APIキーの設定

APIキーは以下のいずれかの方法で設定できます：

- 環境変数: `SPEARLY_API_KEY`
- コマンドライン引数: `--spearly-api-key=YOUR_API_KEY`
- `.cursor/mcp.json` の `args` に `--spearly-api-key=YOUR_API_KEY` を追加

### 3. MCPサーバーの起動

```bash
npm run mcp
```

### 4. Cursorでの利用

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

### 5. 開発

#### ディレクトリ構成

- `src/spearlyClient.ts`: Spearly CMS APIクライアント
- `src/tools/spearlyTool.ts`: mastraのToolとしての実装
- `src/index.ts`: Toolのエクスポート

#### ビルド

```bash
npm run build
```

#### テスト

```bash
npm test
```

## ライセンス

MIT 