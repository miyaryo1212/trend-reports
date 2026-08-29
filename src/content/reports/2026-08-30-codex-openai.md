---
title: "Codex CLI 0.151.0 正式版、MCP拡張と権限保持を強化"
summary: "Codex CLI 0.151.0 が正式リリースされ、オプションMCPサーバの探索猶予設定、拡張機能によるMCPツール結果の介入、プラグインカタログのリポジトリ単位設定統合が入った。あわせて 0.152.0-alpha.1 が始動し、OpenAI は SpaceX による買収を受けて Cursor へのモデル提供を 2026年11月12日に終了すると発表した。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-08-30

features:
  - "Codex CLI 0.151.0 正式版"
  - "Codex CLI 0.152.0-alpha.1"
  - "OpenAI が Cursor へのモデル提供を終了"
codex_review: "MCPまわりの猶予設定や権限保持の修正は派手さこそ薄いが、実運用の信頼性を底上げする類いで好感がある。一方、Cursor切り離しは業界再編の象徴としては大きいが、まだ評価は少し先だと思う。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI 0.151.0 正式版

alpha 系列を重ねてきた 0.151.0 が正式版としてリリースされた。

**新機能**

- オプション扱いの MCP サーバからツールを探索する際の猶予期間を設定可能にした (#41199)
- 拡張機能が、MCP ツールの実行結果をモデルに渡る前に検査・置換できるようになった (#41202)
- プラグインカタログがリポジトリ単位の設定を統合するようになり、不正なプロジェクトマーケットプレイスがあっても有効なプラグインを隠さずに報告する (#41208)

**バグ修正**

- TUI のターンをまたいで復元済みの権限プロファイルを保持し、`/cd` によってサンドボックス制限が緩むのを防止 (#41192)
- モデル切り替え時やフォールバック時に、ツールの利用可否と reasoning effort が正しく維持されるよう修正 (#41195, #41206)
- リモートサンドボックスの制御を、実行環境側のホームディレクトリ・OS・パス規約に基づいて行うよう改善 (#41196, #41204, #41207, #41209)
- app-server の応答で MCP ツール／リソースの構造化エラーを保持 (#41196)
- ネストしたサブエージェントのトークン消費をルートゴールの予算に計上 (#41183)
- 権限状態が変化した後に、古い Guardian の分類結果でアクションが許可されるのを防止 (#41196)

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.151.0)

### Codex CLI 0.152.0-alpha.1

0.151.0 の正式リリース当日に、次期マイナーバージョンの alpha 系列が始動した。リリースノート本文は「Release 0.152.0-alpha.1」のみで、変更点の記載はない。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.1)

### OpenAI が Cursor へのモデル提供を終了

2026年8月28日、OpenAI は Cursor が SpaceX に買収された (8月14日、600億ドル) ことを受け、Cursor への OpenAI モデル提供契約を段階的に終了 (wind down) すると発表した。遮断予定日は 2026年11月12日。

[ソース](https://qiita.com/picnic/items/e4c292122c09fa4a7306)

## コミュニティの反応

### Codex CLI 0.151.0 正式版

#### ポジティブ・ネガティブ・Tips

該当なし。直近 7 日間の X 投稿を Codex CLI / MCP 関連で広く検索したが、0.151.0 正式版の新機能 (MCP ツール探索猶予、拡張機能による MCP ツール結果の介入、プラグインカタログのリポジトリ単位設定) に言及した個人ユーザーの実体験投稿は確認できなかった。MCP 接続の設定トラブルやワークフローへの言及は散見されたが、公式・企業・宣伝系の投稿が中心だった。

### Codex CLI 0.152.0-alpha.1

0.152.0-alpha.1 そのものに完全一致する投稿は直近 1 週間で確認されなかったため、以下は同シリーズ (0.150〜0.151 系) に対する個人の実体験・感想。

#### ポジティブ

> Codex CLI でローカル完結の多段 RAG パイプラインを 3 日で構築できた。片方のモデルが証拠を探し、もう片方が再ランク付けし、生成モデルが最適な資料だけから回答する流れがスムーズ。 — @NoN_440_NoN [出典](https://x.com/NoN_440_NoN/status/2093484843157840213)

> Codex の新エンタープライズプランで 0.150 の互換性問題が発生したが、10 分で PR が作られマージ・即リリースされた。オープンソースの速さに感動した。 — @ggsimm [出典](https://x.com/ggsimm/status/2093466986512535756)

#### ネガティブ

> Codex CLI の UI が奇妙で、auto モードの起動がわかりにくく、QoL オプションが実際には存在しない。 — @Hardel7401 [出典](https://x.com/Hardel7401/status/2093470241909031369)

> UI がツールコール後にテキスト表示を停止する深刻なバグが 1 週間以上続いており、ロールバック機能もない。 — @OwenKemeys [出典](https://x.com/OwenKemeys/status/2091690058730348911)

> ファイルが大量生成されて使い物にならず、API キーも拒否されトークンを無駄に消費する。ほぼ使えない状態。 — @Jamyies [出典](https://x.com/Jamyies/status/2092414660230443368)

#### Tips

> Codex CLI 0.150 系で @ メンションによる別タスク参照が可能になったのは地味に便利。複数作業を並行させる際に文脈の受け渡しが崩れにくい。 — @LastExile2011 [出典](https://x.com/LastExile2011/status/2093459047769080101)

> Codex CLI の Harness で「キャンバスツールで自画像を描け」というプロンプトを実行し、追加実行で画像生成まで確認できた。 — @Kraxkrokat [出典](https://x.com/Kraxkrokat/status/2093454351486640470)

### OpenAI が Cursor へのモデル提供を終了

#### ポジティブ・ネガティブ・Tips

該当なし。直近 1 週間の X 投稿を複数の検索方針で確認したが、個人ユーザーによる「Cursor + OpenAI / Codex」の実体験・感想・Tips を含む投稿は 0 件だった。ニュース速報・企業アカウント・分析系の投稿が大半を占めている。

### 日本語コミュニティ (Zenn / Qiita)

本日新たに確認できた、上記トピックに関連する日本語記事。

#### ニュース

> [OpenAIがCursorへのモデル提供を終了、SpaceX買収が引き金に](https://qiita.com/picnic/items/e4c292122c09fa4a7306) — 8月28日の公式ブログ発表を整理し、Cursor が GPT 系モデルを組み込んできた経緯と段階的終了の意味を解説。

#### Tips

> [Codexのconfig profileでread-only起動を保存する — 毎回の長いオプションを10分で短くする](https://qiita.com/akira_papa_AI/items/84d0b74935523dd0bbcc) — `codex --sandbox read-only` を毎回打つ代わりに config profile に保存する手順。0.151.0 の権限プロファイル保持強化とあわせて読むと理解しやすい。

> [【超小ネタ】デスクトップ版ChatGPTアプリの Codex で今のフォルダを対象にアプリを開くコマンド](https://qiita.com/youtoy/items/c77c89874e24c45565bc) — Mac の zsh でカレントフォルダを作業対象にして統合版 ChatGPT デスクトップアプリの Codex を開く方法。

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [rust-v0.151.0](https://github.com/openai/codex/releases/tag/rust-v0.151.0)
- [rust-v0.152.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.1)
- [@NoN_440_NoN の投稿 (X)](https://x.com/NoN_440_NoN/status/2093484843157840213)
- [@ggsimm の投稿 (X)](https://x.com/ggsimm/status/2093466986512535756)
- [@Hardel7401 の投稿 (X)](https://x.com/Hardel7401/status/2093470241909031369)
- [@OwenKemeys の投稿 (X)](https://x.com/OwenKemeys/status/2091690058730348911)
- [@Jamyies の投稿 (X)](https://x.com/Jamyies/status/2092414660230443368)
- [@LastExile2011 の投稿 (X)](https://x.com/LastExile2011/status/2093459047769080101)
- [@Kraxkrokat の投稿 (X)](https://x.com/Kraxkrokat/status/2093454351486640470)
- [Qiita: OpenAIがCursorへのモデル提供を終了、SpaceX買収が引き金に](https://qiita.com/picnic/items/e4c292122c09fa4a7306)
- [Qiita: Codexのconfig profileでread-only起動を保存する](https://qiita.com/akira_papa_AI/items/84d0b74935523dd0bbcc)
- [Qiita: デスクトップ版ChatGPTアプリの Codex で今のフォルダを対象にアプリを開くコマンド](https://qiita.com/youtoy/items/c77c89874e24c45565bc)
