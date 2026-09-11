---
title: "公式更新なし、コミュニティは Astra 検証と Codex 不具合報告"
summary: "本日は OpenAI 公式・Codex CLI ともに新規の安定版アップデートはなく、GitHub には 0.155.0 系アルファのビルドが並ぶのみ。コミュニティでは GPT-6 Astra の指示設計・安全性評価をめぐる検証記事と、Codex の service_tier が priority のまま残留する不具合の調査報告が目立った。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-12

features: []
codex_review: "公式不在の日に、Astraの使い方論とCodexの運用バグが前に出るのは地味だが重要だ。派手なモデル評価より、現場がどこで詰まるかが見えている。"
codex_importance: 2
pipeline_warnings:
  - "Step 1 (機能抽出) で claude -p がfeatures.txtを生成できずフォールバック発動 (max turns到達等)。features=なし扱いとなり、X検索 (Step 2) もスキップされたため、新規アップデートを取りこぼしている可能性があります。"
---

## 公式アップデート

本日の公式アップデートはありません。

OpenAI 公式ブログおよび Codex CLI の GitHub Releases を確認したが、新規の発表・安定版リリースは確認できなかった。GitHub Releases には 0.155.0-alpha.3.1 〜 alpha.3.10 のアルファビルドが並んでいるが、いずれもリリースノートはバージョン表記のみで、内容を伴う新規情報はない。

## コミュニティの反応

本日は Step 1 で新規の公式トピックが検出されなかったため、X/Twitter 検索はスキップしている。以下は日本語コミュニティ (Zenn / Qiita) で本日新たに確認できた記事。

### Codex の不具合・運用知見

Codex 本体の挙動に関する調査報告が上がっている。

- [Codex の service_tier が priority (Fast Mode) のまま残留する問題を調査・対策した](https://zenn.dev/emilia_lab/articles/codex-service-tier-priority-residual) (エミリアラボ)
  - Luna / Terra などの priority tier モデルを使った後 Astra へ戻しても、同一セッション内で `service_tier="priority"` が残留するパターンを確認したとする報告。`config.toml` で `service_tier = "default"` を指定していても発生し、0.153.4 / 0.154.0 の両バージョンで再現したという。暫定策は priority 側モデル使用後にセッションを閉じて起動し直すこと。ローカルの `logs_2.sqlite` を SQLite で調べることで状態遷移を追跡できるとしている。

### Agents API

前回レポートで詳述した public beta について、日本語の解説記事が追加で出ている。

- [OpenAI が「Codex の頭脳」を全開発者に開放 ― 新 API「Agents API」で長時間稼働エージェントが誰でも作れる時代へ](https://zenn.dev/tashikani/articles/openai-agents-api-2026) (タシカニ)
  - Codex を支えてきたハーネス (長時間タスク管理、ツール呼び出し、複数エージェント連携) が単一 API で使えるようになった意義を整理した記事。記事自身が「これは OpenAI 自身の発表である」と情報源の性質に注記を付けている点が特徴。

### GPT-6 Astra の指示設計・評価

Astra をどう使うかをめぐる記事が引き続き多い。前回取り上げた検証記事群に加えて、本日は以下が新規に確認できた。

#### Tips

- [Astra に「玉ねぎを 3 ミリに切れ」と指示する愚行](https://zenn.dev/karamage/articles/e49ccf76ad111c) (karamage)
  - 長大な指示文・スキル・ルールを積み上げる従来型のプロンプト設計は Astra には向かず、「短く雑に」出すことが求められる、という主張。筆者は Claude の Fable でも同様だと見ている。

#### 中立・批判的

- [GPT-6 Astra 登場、でも本当に大事なのは「裏を取る力」](https://zenn.dev/sugawara_ai/articles/ai-news-20260911) (菅原友和)
  - GPT-6 Astra、DeepSeek の新モデル、SWE-2 が相次いだ日を取り上げつつ、「すごそうな発表ほど数字と主張の裏を取るべき」という論調。発表内容そのものより検証姿勢に重心を置いている。

- [「Critical」という格付けを GPT-6 Astra が受け取った週、このタスクが触れていいリポジトリは 2 つしかなかった](https://zenn.dev/hideki_tamae/articles/gated-capability-access-design) (田前秀樹)
  - Astra が OpenAI の Preparedness Framework における「Critical」レベルのサイバー能力に到達した初のモデルとされた件を起点に、エージェントに与えるリポジトリ権限を絞る設計を論じたもの。記事は本番用の安全対策を外した状態での ExploitBench スコアやゼロデイ発見の報告に言及している (いずれも OpenAI 側の公表値)。

### GPT Image 2.5

画像生成モデル側の検証記事も継続して出ている。

- [GPT Image 2.5 を日本語で試してみた｜Flare と Sunburst の違い・生成例・画像編集](https://zenn.dev/owen01/articles/b5477d7e62a0a7) (owen01) — 速度重視の Flare と精度重視の Sunburst の使い分けを実生成例で比較
- [漫画で分かる GPT-Image2.5 ──ChatGPT の画像生成がさらに進化した件](https://zenn.dev/acntechjp/articles/42b52a94e40584) (kyohei.DoAI / Accenture Japan) — 最大の進化は画質より「頼んでいないところを変えない」能力だと整理。「最大 50% 低レイテンシ」は公称値であり全環境で半減する意味ではない、と注記
- [ChatGPT Images 2.5 の本命は編集精度だった。GPT-Image-2 との違いを Web 版で検証](https://zenn.dev/takuh/articles/36b94449d95353) (takuh) — 「直すと壊れる」問題の解消という観点で Web 版を実操作した検証
- [GPT-Image-2.5 Flare vs Sunburst: Which Model Should You Use?](https://zenn.dev/neotechpark/articles/514d034e19f370) (NeoTechPark) — 英語記事。GPT-Image-2 と同価格で 2 モデルに分割された点を整理

### その他

- [「日本語は 1 文字 1 トークン」を 6 つのトークナイザーで実測したら、当たっていたのは一世代前だけだった](https://zenn.dev/aishigoto_lab/articles/japanese-token-ratio-measured) (AI 仕事ラボ) — 16 ジャンル 40 本・9,676 文字の日本語文書を 6 種のトークナイザーで実測した結果
- [GTA6 トレーラーから GTA6 Astra を作れるか【GPT-6 Astra】](https://zenn.dev/mcp/articles/d41863c3c2ae23) (mcp) — 記事自身が「実装して動作確認した結果ではなく制作構想と検証手順」と明記
- [Tech Watch 2026-09-09: Agent 基盤](https://zenn.dev/laiken/articles/20260909-tech-watch) (らいけん) — Agent を動かす周辺インフラに焦点を当てた日次まとめ

Qiita の OpenAI タグは本日、.NET 11 関連の記事が大半で、Codex / OpenAI に直接関わる新規記事は [Gemini 3.8 Flash vs GPT-5.6 Sol — 週報起草の実タスクで品質・コスト・可用性を実測した](https://qiita.com/jinno_ai/items/00abc34b6d491ecba233) (@jinno_ai) のみだった。

## ソース

- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
