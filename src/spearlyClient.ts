// @ts-ignore
import axios, { AxiosInstance } from 'axios';
// Node.jsの型定義
import process from 'process';

const API_BASE_URL = 'https://api.spearly.com/v2';

function getApiKey(apiKeyArg?: string): string {
  // 1. 引数で指定された場合
  if (apiKeyArg) return apiKeyArg;
  // 2. 環境変数
  if (process.env.SPEARLY_API_KEY) return process.env.SPEARLY_API_KEY;
  // 3. process.argvから --spearly-api-key=xxx 形式で取得
  const arg = process.argv.find(a => a.startsWith('--spearly-api-key='));
  if (arg) return arg.split('=')[1];
  throw new Error('SPEARLY_API_KEYが設定されていません。環境変数または引数でAPIキーを指定してください。');
}

export class SpearlyClient {
  private client: AxiosInstance;

  constructor(apiKeyArg?: string) {
    const apiKey = getApiKey(apiKeyArg);
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });
  }

  // ここに各APIエンドポイントのメソッドを追加していく

  // コンテンツ一覧取得
  async listContents(contentType: string, params?: Record<string, any>) {
    const res = await this.client.get(`/content/${contentType}`, { params });
    return res.data;
  }

  // コンテンツ取得（記事メタデータ含む）
  async getContent(contentType: string, contentId: string) {
    const res = await this.client.get(`/content/${contentType}/${contentId}`);
    return res.data;
  }

  // コンテンツ追加
  async createContent(contentType: string, data: Record<string, any>) {
    const res = await this.client.post(`/content/${contentType}`, data);
    return res.data;
  }

  // コンテンツ内フィールドの修正
  async updateContentField(contentType: string, contentId: string, field: string, value: any) {
    const res = await this.client.patch(`/content/${contentType}/${contentId}/fields/${field}`, { value });
    return res.data;
  }

  // コンテンツ修正（フィールドのバルク修正）
  async updateContentBulk(contentType: string, contentId: string, fields: Record<string, any>) {
    const res = await this.client.patch(`/content/${contentType}/${contentId}/fields`, fields);
    return res.data;
  }

  // 全コンテンツのフィールド修正（バルク修正）
  async updateAllContentsBulk(contentType: string, fields: Record<string, any>) {
    const res = await this.client.patch(`/content/${contentType}/fields`, fields);
    return res.data;
  }
} 