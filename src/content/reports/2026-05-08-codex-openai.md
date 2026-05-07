---
title: "Codex CLI v0.129.0正式版公開、Vim対応やプラグイン共有など大型更新"
summary: "Codex CLI v0.129.0が正式リリース。TUIのVimモーダル編集、プラグインのワークスペース共有、Hooks管理UI、実験的Goalsなど多数の新機能を搭載。v0.130.0-alpha.1も開始。コミュニティではAgent Ops設計やコスト最適化の議論が活発。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-08
features:
  - "Codex CLI v0.129.0"
  - "Codex CLI v0.130.0-alpha.1"
codex_review: "Vim対応より、プラグイン共有やHooks管理UIの整備に正式版らしい本気度を感じる。派手さは抑えめだが、Codexを一発ネタでなく運用基盤へ押し上げる更新として地味に重要だ。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI v0.129.0

5月7日正式リリース。前回レポート時点ではalpha.12だった0.129.0系がstableに昇格した。多数の新機能・バグ修正を含む大型アップデート。

#### 新機能

- **TUI Vimモーダル編集**: コンポーザーでVimキーバインドが使用可能に。`/vim`コマンド、デフォルトモード設定、Vim専用キーマップコンテキストに対応 ([#18595](https://github.com/openai/codex/pull/18595))
- **ワークフロー再開の刷新**: resume/forkピッカーの再設計、raw scrollbackモード、`/ide`コンテキスト注入、ワークスペース対応の`/diff` ([#20065](https://github.com/openai/codex/pull/20065), [#20819](https://github.com/openai/codex/pull/20819), [#20294](https://github.com/openai/codex/pull/20294), [#21001](https://github.com/openai/codex/pull/21001))
- **ステータスラインの強化**: テーマ対応カラー、PR・ブランチ変更サマリーの表示、`/keymap debug`によるターミナルキーイベント検査 ([#19631](https://github.com/openai/codex/pull/19631), [#20892](https://github.com/openai/codex/pull/20892), [#20794](https://github.com/openai/codex/pull/20794))
- **プラグイン管理の大幅拡充**: ワークスペース共有API、共有アクセス制御、ソースフィルタリング、ローカル共有パス追跡、マーケットプレイス削除/アップグレード、リモートバンドル同期、管理者無効化ステータス対応 ([#20278](https://github.com/openai/codex/pull/20278), [#21124](https://github.com/openai/codex/pull/21124), [#21419](https://github.com/openai/codex/pull/21419) 他)
- **Hooks管理UI**: `/hooks`からフック一覧の閲覧・トグルが可能に。コンパクション前後のフック実行、`PreToolUse`コンテキスト追加。Codex Appsの認証とMCPエリシテーションがTUI/Guardianフローで表面化 ([#19882](https://github.com/openai/codex/pull/19882), [#19905](https://github.com/openai/codex/pull/19905), [#20692](https://github.com/openai/codex/pull/20692) 他)
- **実験的Goals機能**: 発見しやすくなり、resumeをまたいでpause状態を保持、バリデーション改善、複数日にわたる期間表示 ([#20083](https://github.com/openai/codex/pull/20083), [#20790](https://github.com/openai/codex/pull/20790) 他)

#### バグ修正

- tmuxでの`/copy`、Alt+Enter・Delete/Backspaceキーの修正、Windows入力/ペースト遅延の低減
- 大きなペーストプレースホルダーとCtrl+C一時保存ドラフトがclear/editorワークフローで壊れなくなった
- TUI起動・アクセシビリティの改善（ターミナルプローブの制限、`animations = false`の尊重）
- Linuxサンドボックスの信頼性向上（古いbwrap、シンボリックリンク保護パス、共有`/tmp`対応）
- Windowsサンドボックスの改善（名前付きパイプ、ConPTYティアダウン、PowerShellラップ許可ルール）
- TLSインスペクトプロキシ背後でのカスタムCAログイン、Bedrockランタイムエンドポイント報告、MCP/フック出力の無制限成長を修正

#### その他

- Linuxリリースにスタンドアロン`bwrap`フォールバックを同梱
- Bubblewrap 0.11.2に更新（setuidサポート周りのセキュリティ変更を含む）
- Windows Bazel CIでクロスコンパイルによる高速化
- app-server/protocolの内部リファクタリング（トランスポート抽出、プロトコルモジュール分解）

- [v0.129.0 リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.129.0)
- [Changelog: rust-v0.128.0...rust-v0.129.0](https://github.com/openai/codex/compare/rust-v0.128.0...rust-v0.129.0)

### Codex CLI v0.130.0-alpha.1

5月7日公開。次期バージョンの最初のアルファビルド。リリースノートは「Release 0.130.0-alpha.1」のみで詳細変更点は未記載。

- [v0.130.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.130.0-alpha.1)

## コミュニティの反応

### Codex CLI長時間作業の安定化

#### Tips

> Codex CLIの長時間作業を安定させるAgent Ops設計。profile、instruction、サブエージェントの役割分担、リポジトリ管理まで含めた安定運用ノウハウ — ootakazuhiko [Qiita](https://qiita.com/ootakazuhiko/items/feda3d1ace44ee1cccf6)

### Codexコスト最適化

#### Tips

> ChatGPT Proは高いのでCodex + GitHub Copilotでお小遣いを守りたい。Coding Agentの選択肢が豊富な中での節約術を考察 — faunsu [Qiita](https://qiita.com/faunsu/items/f6edd279d32102e6f5a8)

### セキュリティスキャン

#### Tips

> Vercel deepsec入門 — Claude×Codexで大規模コードベースの脆弱性を自動スキャンする — kai_kou [Qiita](https://qiita.com/kai_kou/items/c9a7092902afdca3571f)

### OpenAI Privacy Filter

#### Tips

> OpenAIの新OSSモデル Privacy Filterを日本語+リハビリ医療文書にファインチューニングしてみた（前編：データセット作成）。学習前後でF1スコアに改善あり — yumaha [Qiita](https://qiita.com/yumaha/items/476b5b4c5c64a3f9361c)

### OpenAIデータ分析基盤

#### Tips

> OpenAI社のデータ分析基盤を体感してみた。メタデータだけでは足りない6層のナレッジ階層を参考に実装 — p_katsu [Zenn](https://zenn.dev/p_katsu/articles/122ebc943d3148)

### ChatGPT Proプラン（前回から継続）

#### Tips

> ChatGPT Pro $100プラン入門 — Codex 5倍枠と2層Pro体制の全容 — 甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/205-openai-chatgpt-pro-100-codex-pricing-guide)

> ChatGPT Proは学生に必要か？卒研・修論・個人開発目線で契約してみた — あまり [Zenn](https://zenn.dev/ryyy_my/articles/65a4f36981f169)

### Codex / Claude Code 併用ノウハウ（前回から継続）

#### Tips

> CodexとClaude Codeの併用で学んだこと（Issue運用＆.md編） — UKM [Zenn](https://zenn.dev/ukm/articles/cc22e39a0f6dd8)

> Claude CodeとCodexの併用で学んだこと（容量制限編） — UKM [Zenn](https://zenn.dev/ukm/articles/179d2f90ac8abd)

> Google Chrome CanaryでCodexのComputer Useの並行作業を可能にする — 古家大 [Zenn](https://zenn.dev/masarufuruya/articles/63b1edfae89c45)

### Claude Code → Codex App 移行（前回から継続）

#### Tips

> Claude CodeからCodex Appへ移行する実践ガイド — mine_take [Zenn](https://zenn.dev/minewo/articles/claude-code-to-codex-app-migration)

### OpenAI Symphony（前回から継続）

#### Tips

> （2026/5/4号）週刊AIニュース：OpenAI SymphonyはCodex向けのオーケストレーション仕様書 — ほりえ [Zenn](https://zenn.dev/my_vision/articles/e6ae2b9d2cd62c)

### ChatGPT Images 2.0（前回から継続）

#### Tips

> Claude Code × ChatGPT Image 2.0 — Chrome MCP経由でAPIキー不要で最新モデルを使う — Alba Luce [Zenn](https://zenn.dev/albaluce/articles/d9fcd30e984a3f)

> ChatGPT Images 2.0の画像生成が本気を出した。テキスト描画能力の飛躍的向上を検証 — satoshi yoshida [Zenn](https://zenn.dev/syoshida07/articles/ce43088859acc1)

### LLMプロンプトキャッシュ（前回から継続）

#### Tips

> なぜ「キャッシュヒット」で90%オフ？ LLMプロンプトキャッシュの仕組みを全部図解する — lumichy [Zenn](https://zenn.dev/lumichy/articles/prompt-caching-guide-2026)

### AIエージェントのメモリ設計（前回から継続）

#### Tips

> AIエージェントのメモリ設計アーキテクチャ：Markdownと規律の徹底 — Nao8 [Zenn](https://zenn.dev/dragon1208/articles/1abe47b3fa88a9)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
