---
title: "Codex CLI v0.135.0アルファ進行、Codex Anywhere発表"
summary: "Codex CLI v0.135.0-alpha.1/alpha.2が連続リリース。OpenAIサイトに「Work with Codex from Anywhere」や「Gartner 2026 Agentic Coding Leader」など複数の新ページが追加された。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-28
features:
  - "Codex CLI v0.135.0-alpha.1/alpha.2"
  - "Work with Codex from Anywhere"
  - "Building Self-Improving Tax Agents with Codex"
  - "Personal Finance in ChatGPT"
  - "Gartner 2026 Agentic Coding Leader"
codex_review: "CLIの細かな更新自体より、『Anywhere』や税務エージェント事例の匂わせが効いている。派手さは薄いが、Codexを単体ツールから業務導線へ押し広げる下準備としては、かなり重要な一手に見える。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI v0.135.0-alpha.1 / alpha.2

5月27日にv0.135.0のアルファ版が2本連続でリリースされた。リリースノートは「Release 0.135.0-alpha.1」「Release 0.135.0-alpha.2」のみで、詳細な変更内容は未公開。

- [v0.135.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.135.0-alpha.1)
- [v0.135.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.135.0-alpha.2)

### Codex CLI v0.134.0（前回から継続）

5月26日にリリースされた正式版。会話履歴検索、`--profile`統一、MCP OAuth対応、読み取り専用MCPツール並列実行など多数の改善を含む。詳細は[前回レポート参照](https://github.com/openai/codex/releases/tag/rust-v0.134.0)。

### OpenAIサイト新ページ

以下のページがOpenAIサイトマップに追加されたことが確認された。公開日・詳細内容は未確認。

- **Work with Codex from Anywhere**: Codexをどこからでも利用可能にする新機能の紹介ページ
- **Building Self-Improving Tax Agents with Codex**: Codexを活用した自己改善型税務エージェント構築の事例紹介
- **Personal Finance in ChatGPT**: ChatGPTにパーソナルファイナンス機能が追加された可能性
- **Gartner 2026 Agentic Coding Leader**: OpenAIがGartnerのエージェント型コーディング分野でリーダー評価を獲得

## コミュニティの反応

### Work with Codex from Anywhere

#### ネガティブ

> Codex anywhere and everywhere, all the time, UNLESS you use Windows, then it's "coming soon" — @theryanrhodes

### Codex CLI

#### Tips

> OpenAI Codex CLI を本番運用するためのセキュリティ初期設定と運用ルール — サンドボックスと承認ポリシーの設定を中心に、個人〜小規模チーム向けの運用ガイドを整理 — サボさん [Zenn](https://zenn.dev/engineer__117/articles/codex-cli-security-best-practices)

> Claude CodeとCodexを2ヶ月使い比べて分かった選び方 — settings.jsonを育てた側が速い — Next.js 16 + React 19プロジェクトで同じタスクに両方を投入した2ヶ月間の体感比較。「設定を育てたClaude Codeが速い」という結論 — playpark [Zenn](https://zenn.dev/playpark/articles/claude-code-vs-codex-comparison)

> 正式リリースされたCodexの/goalコマンドってなんだろう？（前回から継続） — Yoji [Zenn](https://zenn.dev/sun_asterisk/articles/e144769108a880)

> なぜCodex App Serverをサブプロセスで動かしたのか（前回から継続） — ユイチロ [Zenn](https://zenn.dev/spade3/articles/8138e0b698310d)

> AIエージェント検証用PCを作るメモ⑥：Codex CLIでREADMEを編集してみる（前回から継続） — Mai [Zenn](https://zenn.dev/imaginarygate/articles/64b61226a2c46d)

### AGENTS.md / エージェント設定ファイル

#### Tips

> AGENTS.md と Claude Code の interop の運用の手引き — GitHub単一Issueで過去最大の5,196反応を集めた未対応問題。同じコードベースの指示を2ファイルに書き分ける痛みへの5つの代替経路と3つの自己診断手順を整理 — ゆるくさ [Zenn](https://zenn.dev/yurukusa/books/agents-md-interop)

### OpenAI全般

#### Tips

> AIの出力をregexで抜くのは、もう卒業しませんか — 構造化出力（Structured Outputs）でLLMを"壊れない部品"にする実践ガイド — akira_papa_AI [Qiita](https://qiita.com/akira_papa_AI/items/e0c288c2195f417049e0)

> AnthropicとOpenAI、公式プロンプトベストプラクティスを徹底比較してみた — 両社の公式ガイドの思想と実践の違いを整理 — AI Ops Insider [Zenn](https://zenn.dev/aiops_insider/articles/a6c56302c3e651)

> Ruby の Timeout.timeout で OpenAI API のリクエストJSONが途中で切れた話 — OpenAI側のエラーに見えた問題の原因がRubyのTimeout.timeoutにあった調査記録 — kiyokuro [Zenn](https://zenn.dev/dely_jp/articles/1e570a384f4e53)

> Opus 4.7 と GPT-5.5 のレビュー特性を統計的に明らかにした — 720ケースの統計評価。Opus 4.7は読み手志向の辛口、GPT-5.5は制約厳守型という明確な特性差 — Nori [Zenn](https://zenn.dev/nnakapa/articles/lab-19-opus47-gpt55-code-review)

> Claude Opus 4.7・GPT-5.5・Gemini 3.5 Flashを実コードで比較してみた（2026年5月版） — kairos [Zenn](https://zenn.dev/kairosai/articles/45d48becd6b864)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
