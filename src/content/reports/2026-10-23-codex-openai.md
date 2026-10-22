---
title: "Decisions API が GA、Codex CLI は alpha.12 まで前進"
summary: "GPT-6 Luna 搭載の Decisions API が公開ベータを卒業し全開発者に提供開始。Codex CLI は 0.164.0-alpha.10〜12 と 0.163 系ホットフィックスで enterprise MCP 認証や Windows 対応を強化した。Cloudflare・Uber・AT&T の導入事例、配布パートナー向けポリシー、サイバー防御の青写真も公開された。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-23

features:
  - "Decisions API が正式版 (GA) に"
  - "Codex CLI 0.164.0-alpha.10〜12 公開"
  - "Codex CLI 0.163.0-alpha.11.2 公開"
  - "Cloudflare が Daybreak と Codex を採用"
  - "Uber が ChatGPT Work を全社展開"
  - "配布パートナー向け利用ポリシーの明確化 (Broad access through consistent standards)"
  - "民主的ガバナンス第2弾「サイバー防御者のエンパワーメント」"
  - "ChatGPT 広告スタックの技術解説"
  - "「OpenAI における FDE とは」"
  - "AT&T が社内法務業務を OpenAI で刷新"
codex_review: "型付き判定APIのGAは、生成AIを曖昧な文章生成から業務ロジックへ組み込む流れを後押ししそうで面白い。一方、導入事例は華やかでも利用者の声がほぼなく、定着度や実効性はまだ測りにくい。"
codex_importance: 3
---

## 公式アップデート

### Decisions API が正式版 (GA) に

GPT-6 Luna を搭載した型付き判定エンドポイントの Decisions API が、公開ベータを卒業して正式版となりました。判定タイプは predicate / choice / score の 3 種類で、すべての開発者に提供されます。価格は入力 100 万トークンあたり $0.10 です(10月22日発表)。

[ソース](https://openai.com/news/)

### Codex CLI 0.164.0-alpha.10〜12 公開

10月22日にかけて 0.164 系のプレリリースタグが 3 本追加されました。

- 0.164.0-alpha.10(10月22日 00:13 UTC)
- 0.164.0-alpha.11(10月22日 04:31 UTC)
- 0.164.0-alpha.12(10月22日 11:27 UTC)

alpha.10〜12 で追加された主な変更は次のとおりです。

- enterprise MCP 認証で confidential OAuth クライアントに対応
- Windows でのプロキシ認証トンネル
- Bedrock セットアップウィザードを既定で有効化
- 診断情報の ZIP エクスポート
- リクエスト単位で OAuth 資格情報を扱う API

いずれも GitHub Actions による自動タグで、リリースノートは 1 行のみです。安定版 0.164.0 は本日時点で未公開です。

[ソース](https://github.com/openai/codex/releases)

### Codex CLI 0.163.0-alpha.11.2 公開

10月22日 06:47 UTC に 0.163 系のホットフィックスタグが追加されました。Windows レジストリ(HKLM\SOFTWARE\Policies\OpenAI\Codex)から requirements.toml のパス上書きを指定できるようになっています。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.11.2)

### Cloudflare が Daybreak と Codex を採用

Cloudflare の導入事例が公開されました。Daybreak で脆弱性の調査と修正案の提示を行い、開発者は Codex でコード品質を高めるという使い分けが紹介されています(10月21日)。

[ソース](https://openai.com/news/)

### Uber が ChatGPT Work を全社展開

Uber が 30,000 人超の従業員に ChatGPT Work を展開したことが発表されました。調査、データ分析、資料作成、複雑なワークフローに活用しているとしています(10月22日)。

[ソース](https://openai.com/news/)

### 配布パートナー向け利用ポリシーの明確化 (Broad access through consistent standards)

クラウドなどの配布パートナー経由で OpenAI のモデルを提供する場合も、一貫した安全対策と Usage Policies を適用するという方針が公表されました(10月21日)。

[ソース](https://openai.com/news/)

### 民主的ガバナンス第2弾「サイバー防御者のエンパワーメント」

民主的ガバナンスに関するシリーズの第 2 弾として、フロンティア AI でサイバー防御側を強化するための青写真が公開されました。安全対策と公的機関のレジリエンスが主題です(10月21日)。

[ソース](https://openai.com/news/)

### ChatGPT 広告スタックの技術解説

ChatGPT の広告配信基盤を解説する技術記事が公開されました。会話の意図を理解しつつ、回答と広告を分離する LLM ベースの配信基盤の構築手法が説明されています(10月21日)。

[ソース](https://openai.com/news/)

### 「OpenAI における FDE とは」

Forward Deployed Engineering(FDE)の役割と働き方を解説するエンジニアリング記事が公開されました(10月22日)。

[ソース](https://openai.com/news/)

### AT&T が社内法務業務を OpenAI で刷新

AT&T の LegalEdge チームが、案件受付(intake)と法的判断のスケール化に ChatGPT を活用する事例が公開されました(10月21日)。

[ソース](https://openai.com/news/)

## コミュニティの反応

### Decisions API が正式版 (GA) に

X では GA 発表に対する個人ユーザーの実体験・感想は確認できませんでした。Zenn では GA 前の Decisions API を他サービスと比較した記事が 1 件あり、トーンは中立です。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> TypeSafe の Jev の画像入力と OpenAI Decisions API に同じ写真を送り、精度・速度・費用を比較した検証記事 — [Jevの画像入力とOpenAI Decisions APIを比べてみる](https://zenn.dev/tkada/articles/ae2519179679df)

### Codex CLI 0.164.0-alpha.10〜12 公開

X / Zenn / Qiita のいずれでも、alpha.10〜12 の新機能に関する個人ユーザーの投稿は確認できませんでした(該当なし)。

### Codex CLI 0.163.0-alpha.11.2 公開

X / Zenn / Qiita のいずれでも、Windows レジストリによる requirements.toml 上書きに関する個人ユーザーの投稿は確認できませんでした(該当なし)。

### Cloudflare が Daybreak と Codex を採用

X / Zenn / Qiita のいずれでも、個人ユーザーの投稿は確認できませんでした(該当なし)。

### Uber が ChatGPT Work を全社展開

X の投稿はニュースの共有や軽い感想にとどまり、個人ユーザーの実体験・活用 Tips・不満に該当する投稿は確認できませんでした(該当なし)。

### 配布パートナー向け利用ポリシーの明確化 (Broad access through consistent standards)

X / Zenn / Qiita のいずれでも、個人ユーザーの投稿は確認できませんでした(該当なし)。

### 民主的ガバナンス第2弾「サイバー防御者のエンパワーメント」

該当なし

### ChatGPT 広告スタックの技術解説

該当なし

### 「OpenAI における FDE とは」

該当なし

### AT&T が社内法務業務を OpenAI で刷新

該当なし

## ソース

- [GitHub: openai/codex Releases](https://github.com/openai/codex/releases)
- [OpenAI News](https://openai.com/news/)
- [Zenn: Jevの画像入力とOpenAI Decisions APIを比べてみる](https://zenn.dev/tkada/articles/ae2519179679df)
- [Zenn: OpenAI トピック](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
