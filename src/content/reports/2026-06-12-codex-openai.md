---
title: "Ona買収・Oracle提携・Codex CLI alpha.11到達"
summary: "OpenAIがクラウド実行環境スタートアップOnaを買収しCodex部門に統合。Oracle Cloudとの提携でOCI顧客がCodexにアクセス可能に。Codex CLIは0.140.0-alpha.11まで急速にイテレーション。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-12
features:
  - "Ona買収: クラウド実行環境スタートアップOnaを買収しCodex部門に統合、エージェントの永続的・セキュアなクラウド実行基盤を強化"
  - "OpenAI × Oracle Cloud提携: OCI顧客がOracle Universal CreditsでOpenAIモデルとCodexにアクセス可能に（6月11日発表）"
  - "Codex CLI 0.140.0-alpha.6〜11: コードモードからのWeb検索直接呼び出し、MCP向けスキーマ互換性改善、リモート実行のCODEX_API_KEY登録対応、画像生成拡張（feature-gated）、Gitフック経由の攻撃防止等セキュリティ強化"
codex_review: "Ona買収より、Oracle経由で企業予算に乗せにきた動きのほうが効きそうで、Codexが実験段階から調達済みの業務ツールへ寄っていく感じがある。CLIの連打更新は派手だが、本当に重要なのは地味な実行基盤と安全性の整備だと思う。"
codex_importance: 4
---

## 公式アップデート

### Ona買収 — Codexクラウド実行基盤の内製化

OpenAIがクラウド実行環境スタートアップOnaを買収し、Codex部門に統合した。Onaはエージェント向けの永続的かつセキュアなクラウド実行基盤を手がけており、Codexのリモート実行環境の強化が狙い。

### OpenAI × Oracle Cloud提携

6月11日、OpenAIとOracle Cloudの提携が発表された。OCI（Oracle Cloud Infrastructure）顧客がOracle Universal Creditsを使ってOpenAIモデルおよびCodexにアクセス可能になる。エンタープライズ市場でのCodex普及を後押しする提携。

### Codex CLI 0.140.0-alpha.6〜11

前日のalpha.5から一日でさらに6リリースが公開され、alpha.11に到達した。リリースノートは簡素だが、Step 1の抽出情報によると以下の変更が含まれる。

- **コードモードからのWeb検索直接呼び出し**: code mode内のJavaScriptからWeb検索を直接実行可能に
- **MCP向けスキーマ互換性改善**: MCPサーバーとの接続互換性を向上
- **リモート実行のCODEX_API_KEY登録対応**: リモート実行時のAPIキー管理を改善
- **画像生成拡張（feature-gated）**: フィーチャーフラグ付きで画像生成機能を拡張
- **Gitフック経由の攻撃防止**: セキュリティ強化としてGitフック経由の攻撃ベクターに対処

- [v0.140.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.11)
- [v0.140.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-vrust-v0.140.0-alpha.6)

## コミュニティの反応

### Codex CLI code mode Web検索対応

#### Tips

> Codex 0.139.0でcode modeのJavaScriptからWeb検索を直接呼べるようになった経緯と技術的背景を解説。「モデルにはコードを書かせて、ツール呼び出しの合成はランタイム側で済ませる」方式への収束を分析 — とうもろこし茶 [Zenn](https://zenn.dev/okssusucha/articles/20260611-codex-code-mode-standalone-web-search) / [Qiita](https://qiita.com/okssusucha/items/6a303df47fb60d30e022)

### Codex MCP互換性

#### Tips

> 同じMCPサーバーでもClaude CodeとCodexで動作が異なる理由を解説。設定ファイル形式、対応トランスポート範囲、認証情報の渡し方の差異を整理 — サボさん [Zenn](https://zenn.dev/engineer__117/articles/claude-code-codex-mcp-compatibility)

### Codex活用事例

#### Tips

> 自分専用のAIニュースキュレーターをCodexで構築し約1か月運用した知見を共有。興味関心に合わせたカスタマイズの利点を報告 — ukita（松尾研究所） [Zenn](https://zenn.dev/mkj/articles/966c62588bd8fc)

> OpenAI Codexの全機能ガイド。Computer Use・スケジュール自動化・90以上のプラグインの全貌を整理 — kai_kou [Qiita](https://qiita.com/kai_kou/items/fe089a7afb3498b94325)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
