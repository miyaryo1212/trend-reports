---
title: "OpenAI モデルと Codex が Google Cloud へ、PHP 脆弱性修正"
summary: "OpenAI はフロンティアモデルと Codex を Google Cloud の Gemini Model Garden / Marketplace で提供開始し、GPT-5.6 Sol で見つけた PHP の重大脆弱性2件を協調開示する Patch the Planet を発表した。Codex CLI は alpha.9 で enterprise MCP 認証を刷新。ChatGPT Ads の 26 か国拡大と GPT-Rosalind の大規模解析も公開された。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-22

features:
  - "OpenAI モデルと Codex が Google Cloud に提供開始"
  - "Patch the Planet(PHP 重大脆弱性の協調開示)"
  - "Codex CLI 0.164.0-alpha.9 / 0.163.0-alpha.11.1 公開"
  - "ChatGPT Ads が 26 か国に拡大"
  - "GPT-Rosalind による数千エージェントの生物データ解析"
codex_review: "Google Cloud展開は販路拡大として目を引くが、業界を動かすのはPHP脆弱性の協調修正のような地味な実務かもしれない。広告拡大と生物解析は勢いを示す一方、成果の独立検証が待たれる。"
codex_importance: 4
---

## 公式アップデート

### OpenAI モデルと Codex が Google Cloud に提供開始

OpenAI のフロンティアモデルと Codex のエージェントワークフローが、Google Cloud の Gemini Model Garden および Google Cloud Marketplace で提供開始されました。数週間以内に GA(一般提供)となる予定です。あわせて、Google の Antigravity と Gemini Agent にも展開されます。

[ソース](https://openai.com/news/)

### Patch the Planet(PHP 重大脆弱性の協調開示)

OpenAI は、GPT-5.6 Sol を用いて発見した PHP の重大脆弱性2件について、OpenAI 主導の連合で修正と協調開示を行ったことを発表しました。あわせて次の施策を公表しています。

- Daybreak による 10 億ドル規模の支援
- PHP バージョンチェッカーの Codex スキル提供
- OSS 保守者向けの「Codex for OSS」提供

[ソース](https://openai.com/news/)

### Codex CLI 0.164.0-alpha.9 / 0.163.0-alpha.11.1 公開

10月21日に 2 本のプレリリースタグが追加されました。

- 0.164.0-alpha.9(14:19 UTC、GitHub Actions による自動タグ): enterprise 向け MCP 認証を刷新し、Codex アカウント権限の再利用と OAuth リフレッシュの協調を既定で有効化。Rust を 1.99.1 に更新。
- 0.163.0-alpha.11.1(21:10 UTC、celia-oai による手動タグ): 0.163 系へのパッチタグ。

いずれもリリースノートは 1 行のみです。安定版 0.164.0 は本日時点で未公開です。

[ソース](https://github.com/openai/codex/releases)

### ChatGPT Ads が 26 か国に拡大

ChatGPT Ads の対象が新たに 26 か国に広がり、対象は計 89 か国となりました。累計の広告主は 10 万を超えています。広告は Free / Go プランのみに表示されます。日本が対象に含まれるかは発表に言及がありません。

[ソース](https://openai.com/news/)

### GPT-Rosalind による数千エージェントの生物データ解析

OpenAI は Scripps Research および PerturbAI と共同で、GPT-Rosalind の数千エージェントを用いて全脳 CRISPR アトラス(数百万細胞)を 32 分で解析したと発表しました。解析結果は公開 reasoning atlas として提供されます。

[ソース](https://openai.com/news/)

## コミュニティの反応

### OpenAI モデルと Codex が Google Cloud に提供開始

X / Zenn / Qiita のいずれでも、個人ユーザーの実体験・感想・Tips に該当する投稿は確認できませんでした(該当なし)。

### Patch the Planet(PHP 重大脆弱性の協調開示)

X / Zenn / Qiita のいずれでも、Patch the Planet、PHP バージョンチェッカーのスキル、Codex for OSS に関する個人ユーザーの投稿は確認できませんでした(該当なし)。

### Codex CLI 0.164.0-alpha.9 / 0.163.0-alpha.11.1 公開

alpha.9 の MCP 認証刷新そのものへの言及はありませんが、Codex CLI と MCP を組み合わせた個人の実験報告と、不具合報告が 1 件ずつ見られました。トーンは好意的と批判的が半々です。

#### ポジティブ

> ChatGPT から自作 MCP が動いた。自宅 PC への接続、Owner 承認でのコマンド実行、Codex CLI によるコード修正がすべて成功し、AI に「手」を持たせる挑戦が進んだ — @kurojack_jp [出典](https://x.com/kurojack_jp/status/2112880097069793506)

#### ネガティブ

> Codex CLI で「not found」のバグが発生し、使用量のメータリングもされない問題に直面している — @kaiwalya_ [出典](https://x.com/kaiwalya_/status/2112906138937417761)

#### Tips

該当なし

### ChatGPT Ads が 26 か国に拡大

X の投稿はニュース共有や一般論にとどまり、個人ユーザーの実体験・感想・Tips に該当する投稿は確認できませんでした(該当なし)。

### GPT-Rosalind による数千エージェントの生物データ解析

X / Zenn / Qiita のいずれでも、個人ユーザーの投稿は確認できませんでした(該当なし)。

## ソース

- [GitHub: openai/codex Releases](https://github.com/openai/codex/releases)
- [OpenAI News](https://openai.com/news/)
- [X: @kurojack_jp(自作 MCP と Codex CLI の連携)](https://x.com/kurojack_jp/status/2112880097069793506)
- [X: @kaiwalya_(Codex CLI の not found バグ)](https://x.com/kaiwalya_/status/2112906138937417761)
- [Zenn: OpenAI トピック](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
