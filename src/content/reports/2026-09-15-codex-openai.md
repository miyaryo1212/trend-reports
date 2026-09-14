---
title: "本日の公式アップデートなし、コミュニティは実運用の検証へ"
summary: "OpenAI / Codex の公式チャネルに本日新規の発表はなく、Codex CLI も 0.155.0-alpha.4 のプレリリースタグ更新のみ。日本語コミュニティでは Agents API の設計解説や Codex の service_tier 残留問題など、先週の発表を実運用で検証する記事が中心となっている。"
importance: 1
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-15

features: []
codex_review: "公式発表がない日の観測としては地味だが、実運用での摩擦が見え始めている点は面白い。特にservice_tier残留は小さな不具合以上に信頼設計の論点だと思う。"
codex_importance: 2
pipeline_warnings:
  - "Step 1 (機能抽出) で claude -p がfeatures.txtを生成できずフォールバック発動 (max turns到達等)。features=なし扱いとなり、X検索 (Step 2) もスキップされたため、新規アップデートを取りこぼしている可能性があります。"
---

## 公式アップデート

本日の公式アップデートはありません。

Codex CLI の GitHub Releases は 0.155.0-alpha.4 (2026-09-14) が最新だが、リリースノートは "Release 0.155.0-alpha.4" のみでプレリリースのタグ更新にとどまる。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

公式の新規発表がないため、本日は日本語コミュニティ (Zenn / Qiita) で公開された記事のうち、直近の動きを扱ったものを挙げる。X/Twitter 検索は対象機能がないためスキップした。

### Codex / Agents API の実運用検証

先週公開された Agents API と Codex ハーネスまわりを、一次資料や実測に基づいて整理する記事が続いている。

#### Tips

> Agents API のコア概念・アーキテクチャ・データモデルを一次資料に沿って整理し、Agents SDK / Responses API との役割分担と、セッション実装時にアプリケーション側へ残る責務を明示している — [アプリケーションからCodexハーネスへ仕事を渡すOpenAI Agents API](https://zenn.dev/suwash/articles/openai-codex-agents-api-openai-p1_20260911) (suwa-sh / 諏訪真一)

> Agents API が「リカバリーも面倒をみる」と謳ったことを受け、自前の指示書に存在していた自己修復ステップを棚卸しする実践記事 — [OpenAIのAgents APIが「リカバリーも面倒みる」と謳った日、自分の指示書には専用の自己修復ステップが4つ独立して存在していた](https://qiita.com/Hideki_Tamae/items/658eed8c20551e878852) (Hideki_Tamae)

#### ネガティブ

> Codex で priority tier のモデルを使った後に Astra へ戻しても、同一セッション内で `service_tier="priority"` が残留する事象を 0.153.4 / 0.154.0 の両バージョンで再現確認。`config.toml` を `default` にしていても発生し、暫定対応はセッションの再起動 — [Codexのservice_tierがpriority（Fast Mode）のまま残留する問題を調査・対策した](https://zenn.dev/emilia_lab/articles/codex-service-tier-priority-residual) (エミリアラボ)

#### ポジティブ

> Codex に日々のメール・議事録・稟議書などの定型業務を委ねる運用を、承認フローを人間側に残す形で構築した事例 — [Codexにメールを頼んだら、送信ボタンがオレの机に来たので、AIに稟議書を書かせることにした](https://zenn.dev/shio_shoppaize/articles/kagemusha-codex-dual-wield) (おしお)

> Codex のペット機能でデスクトップに常駐キャラクターを設定した試用レポート — [Codexに自分専用のデスクトップペットを作ってもらった](https://qiita.com/tech_tech_pingu/items/d2f6b1d0728438ba71cb) (tech_tech_pingu)

## ソース

- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
