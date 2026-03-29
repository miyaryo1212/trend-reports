# AI Trend Reports

![Astro](https://img.shields.io/badge/Astro-5.7-ff5d01?logo=astro&logoColor=white)
![Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-f38020?logo=cloudflare&logoColor=white)

生成AI関連のトレンド情報を自動収集・レポート化して公開する静的サイトです。

**https://aitrends.miyaryo1212.com**

## チャンネル

| チャンネル | 更新頻度 |
|---|---|
| Claude / Anthropic | 毎日 6:00 |
| Codex / OpenAI | 毎日 6:30 |
| 生成AIトレンド総合 | 毎日 7:00 |
| GitHub急成長リポ | 毎週月曜 8:00 |

## 機能

- **レポート閲覧** - チャンネル別・日付別のトレンドレポート
- **Claude Code要約** - 各レポート冒頭にAI生成の要約と注目度（★1〜5）
- **全文検索** - Pagefindによるクライアントサイド全文検索
- **フィルター** - チャンネル / 期間 / 注目度で絞り込み
- **SNSシェア** - X(Twitter)シェアボタン / URLコピー
- **OGタグ** - SNSシェア時のタイトル・説明文の正しい表示
- **PWA対応** - ホーム画面に追加してアプリライクに利用可能
- **ダーク/ライトモード** - OSの設定に自動追従

## 技術スタック

- **フレームワーク**: [Astro](https://astro.build/) (SSG)
- **検索**: [Pagefind](https://pagefind.app/)
- **ホスティング**: [Cloudflare Pages](https://pages.cloudflare.com/) (push検知で自動ビルド・デプロイ)
- **コンテンツ**: Markdown (Astro Content Collections)

## 開発

```bash
npm install
npm run dev       # 開発サーバー
npm run build     # ビルド (Astro + Pagefind)
npm run preview   # ビルド結果プレビュー
```

## 関連リポジトリ

- [trend-system](https://github.com/miyaryo1212/trend-system) - レポート自動生成パイプライン（収集・分析・Markdown生成）
