import { SpearlyClient } from '../spearlyClient';

// mastraのToolとしてエクスポートする関数群の雛形
export const spearlyTool = {
  // 例: コンテンツ一覧取得
  async listContents(params: { contentType: string, query?: Record<string, any> }) {
    const client = new SpearlyClient();
    return await client.listContents(params.contentType, params.query);
  },
  // コンテンツ取得（記事メタデータ含む）
  async getContent(params: { contentType: string, contentId: string }) {
    const client = new SpearlyClient();
    return await client.getContent(params.contentType, params.contentId);
  },
  // コンテンツ追加
  async createContent(params: { contentType: string, data: Record<string, any> }) {
    const client = new SpearlyClient();
    return await client.createContent(params.contentType, params.data);
  },
  // コンテンツ内フィールドの修正
  async updateContentField(params: { contentType: string, contentId: string, field: string, value: any }) {
    const client = new SpearlyClient();
    return await client.updateContentField(params.contentType, params.contentId, params.field, params.value);
  },
  // コンテンツ修正（フィールドのバルク修正）
  async updateContentBulk(params: { contentType: string, contentId: string, fields: Record<string, any> }) {
    const client = new SpearlyClient();
    return await client.updateContentBulk(params.contentType, params.contentId, params.fields);
  },
  // 全コンテンツのフィールド修正（バルク修正）
  async updateAllContentsBulk(params: { contentType: string, fields: Record<string, any> }) {
    const client = new SpearlyClient();
    return await client.updateAllContentsBulk(params.contentType, params.fields);
  },
  // 他のエンドポイントも同様に追加予定
}; 