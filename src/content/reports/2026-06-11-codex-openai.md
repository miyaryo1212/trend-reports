---
title: "Codex app刷新・iOS Codex強化・Realtime API新ボイス"
summary: "Codex app 26.608でプラグインUI刷新と移行フロー追加。ChatGPT iOS版にCodexブランチ選択・worktree作成等を追加。Realtime APIに5つの新音声とキャッシュ価格改定、Responses APIがWeb検索画像結果に対応。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-11
features:
  - "Codex app 26.608: Claude Code/Claude Coworkからの移行フロー追加、プラグイン画面をタブ・マーケットプレイス・カテゴリフィルター付きに刷新"
  - "ChatGPT iOS 1.2026.153 Codex機能強化: ブランチ選択・worktree作成・環境セットアップスクリプト対応、使用統計付きCodexプロフィール画面、/goalコマンド、インラインレビューコメント"
  - "Codex CLI 0.140.0-alpha.2〜5: 6月10日に急速なアルファイテレーション（alpha.1から一日で4リリース、詳細チェンジログは未公開）"
  - "Realtime API 新ボイス＋キャッシュ価格改定: 5つの新音声オプション追加、プロンプトキャッシュにより15分会話コスト約30%削減"
  - "Responses API Web検索画像結果対応: Web検索が画像結果もテキストと併せて返却可能に"
codex_review: "派手に見えるのはiOSや音声周りだが、私にはCodexの移行導線と運用機能の整備のほうが効いて見える。覇権を決める一撃ではないが、競合の囲い込み競争ではこういう地味な摩擦低減が最後に効く。"
codex_importance: 3
---

## 公式アップデート

### Codex app 26.608

Claude Code / Claude Coworkからの移行フローが追加された。プラグイン画面がタブ・マーケットプレイス・カテゴリフィルター付きに刷新され、プラグインの発見と管理が改善された。

### ChatGPT iOS 1.2026.153 Codex機能強化

iOS版ChatGPTのCodex機能に複数の強化が入った。

- **ブランチ選択・worktree作成**: タスク実行時にブランチを選び、worktreeを作成可能に
- **環境セットアップスクリプト対応**: プロジェクトごとのセットアップスクリプトをサポート
- **Codexプロフィール画面**: 使用統計を確認できるプロフィール画面を追加
- **/goalコマンド**: タスクのゴールを明示的に設定するコマンドを追加
- **インラインレビューコメント**: コード差分に対してインラインでレビューコメントを付与可能に

### Codex CLI 0.140.0-alpha.2〜5

6月10日にalpha.2からalpha.5まで4つのアルファリリースが立て続けに公開された。いずれもリリースノートは「Release 0.140.0-alpha.X」のみで、具体的な変更内容は未公開。前日のalpha.1から数えると一日で4回のイテレーションという異例のペース。

- [v0.140.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.5)
- [v0.140.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.2)

### Realtime API 新ボイス＋キャッシュ価格改定

Realtime APIに5つの新音声オプションが追加された。また、プロンプトキャッシュの導入により、15分間の会話コストが約30%削減される価格改定が行われた。

### Responses API Web検索画像結果対応

Responses APIのWeb検索機能が画像結果にも対応した。テキスト結果と併せて画像を返却できるようになり、製品写真やランドマークなど視覚情報の取得が可能になった。

## コミュニティの反応

### Responses API Web検索画像結果

#### ポジティブ

> Responses APIのWeb検索が画像結果に対応し、テキスト＋画像を1回の呼び出しで取得可能になった点を共有・解説 — @WesRoth

### OpenAI AIスーパーアプリ戦略

#### Tips

> ChatGPT・Codex・Atlasを統合した「AIスーパーアプリ」構想を一次情報から分析。Codexを実行レイヤーとして位置づける戦略を読み解く — 太田和彦 [Zenn](https://zenn.dev/itdo/articles/426d30b2fd82da)

### Microsoft MAI発表とOpenAI依存脱却

#### Tips

> Microsoft Build 2026で自社開発「MAI」フロンティアモデル7本を一挙発表。OpenAI/Anthropic依存からの脱却の動きを分析 — emi_ndk [Qiita](https://qiita.com/emi_ndk/items/7a0de2aae8649d97f971)

### AI企業IPOラッシュ

#### Tips

> SpaceX・OpenAI・AnthropicのIPO動向を整理。性能競争から資本市場での競争へと軸が移行している分析 — comty [Qiita](https://qiita.com/comty/items/815beef798bd6e3b344e)

### LLMエージェント実装

#### Tips

> LangChainなしでOpenAI tools APIとPythonのwhile-loopによるエージェントを手書き実装する方法を解説。フレームワーク依存からの脱却を促す — リベルクラフト [Zenn](https://zenn.dev/libercraft/articles/20260610-agent-sdk-no-framework)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
