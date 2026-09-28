---
title: "Codex CLI 0.158.0 安定版がリリース"
summary: "alpha 版タグのみが続いていた Codex CLI に安定版 0.158.0 が到着し、TUI のコピー挙動、MCP の OAuth クライアントシークレット対応、exec-server の WebSocket 認証、昇格権限コマンドの承認既定化などが入った。コミュニティでは gpt-live-1 の技術解説と、エージェント事案を一次情報から検証する記事が出ている。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-29

features:
  - "Codex CLI 0.158.0"
codex_review: "派手な能力向上ではないが、認証や権限承認、サンドボックスの修正はエージェントを日常業務に置くための地味で重要な土台だ。個々の改善は堅実な一方、CLIの安定版到着だけで業界全体が変わるほどのニュースではない。"
codex_importance: 2
pipeline_warnings:
  - "Step 1 (機能抽出) で claude -p がfeatures.txtを生成できずフォールバック発動 (max turns到達等)。features=なし扱いとなり、X検索 (Step 2) もスキップされたため、新規アップデートを取りこぼしている可能性があります。"
---

## 公式アップデート

### Codex CLI 0.158.0 (安定版)

alpha 版タグが続いていた Codex CLI に安定版 0.158.0 がリリースされました。主な新機能は以下のとおりです。

- フルスクリーン TUI で copy-on-select と右クリック貼り付けを設定可能に。コピーした transcript の選択範囲は Markdown 書式を保持する (#47639, #47896, #48118)
- 事前登録済みの OAuth クライアントシークレットを要求する MCP サーバーへ接続可能に。`codex mcp add --oauth-client-secret` 経由でも設定できる (#47891)
- exec-server への直接 WebSocket 接続を bearer トークンで保護。app-server 経由で構成した接続も対象 (#47601, #47648)
- 画像生成・編集で透過背景を明示的に要求できるように。編集はファイル由来の会話画像も受け付ける (#47484, #47956)
- 昇格権限で実行されるコマンドのターミナル入力承認をデフォルトで有効化。実行時のみの権限付与では不要なレビューが発生しなくなった (#47799, #48073)

バグ修正では以下が挙がっています。

- Windows サンドボックスの不具合 (通常の Windows 10 パス、拒否される保存済み資格情報、大きな権限ポリシー) を修正 (#47672, #47695, #47919)
- ネストした書き込み可能ルートでの Linux サンドボックス起動を修正。Linux / macOS の書き込み可能ルート間で Git メタデータ保護を維持 (#47623, #47974)
- macOS の patch 操作が既存権限でカバーされるシステムパスのエイリアスを認識し、不要な承認プロンプトを回避 (#47879)
- 承認レビューが新しいユーザー入力の到着時に再試行されるようになり、状況確認の質問で保留中の操作が自動中断されなくなった (#47819)
- Mermaid フローチャートで引用符付きラベルとアンパサンドが描画されるように。未対応の図はソース表示にフォールバックする理由を説明する (#47572, #47678)
- コマンド完了イベントに早期出力を含め、プロセス起動失敗をクライアントへ報告 (#47529, #47665)

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.158.0)

なお prerelease ラインは 0.160.0-alpha.2 まで進んでいますが、リリースノート本文は「Release \<version\>」のみで変更内容の記載はありません。

OpenAI Blog / API Changelog に本日の新規エントリはありません。

## コミュニティの反応

### Codex CLI 0.158.0

#### 該当なし

本日時点で 0.158.0 に言及する日本語記事・X 投稿は確認できませんでした。本日は Step 1 で新機能が抽出されなかったため、X 検索を実施していません。

### gpt-live-1 の技術解説

#### 日本語記事

- [gpt-live-1 技術解説：会話とバックエンドの分離、Function Calling / Jev の実行経路の可視化](https://qiita.com/nohanaga/items/739bdb2d02ba62548aaf) — gpt-live-1 が音声対話を担当し、検索・深い推論・ツール選択をバックエンドへ委譲するフルデュプレックス音声モデルである点を、音声理解から応答までを 1 モデルが担う gpt-realtime-2.1 と役割分担の観点で比較している。
- [GPT-Live-1への言い直しがアプリの動作にどう届くのかをゲームで可視化してみた](https://zenn.dev/yukurash/articles/d119e6ac6e1626) — 「音声への割込みはバックエンドの仕事を自動キャンセルしない」という公式記述に着目し、運搬中に指示を言い直せるゲームを作ってどこまで処理が止まるかの境界を検証。

#### トーン

いずれも中立的で、アーキテクチャ上の責務分離と、その副作用としての「声は止まるが処理は止まらない」挙動を実地で確かめる方向。

### OpenAI エージェント事案の続報

#### 日本語記事

- [「AIが暴走した」で止めていいのか――OpenAIエージェント事案を一次情報まで分解する](https://qiita.com/BugiAK/items/7bba5192069096261a59) — 相次ぐ「暴走」報道に対し、公開ログ・政府の説明・当事者の技術報告まで遡って事実関係を分解。豪州政府と OpenAI の調査は継続中で今後更新されうる、と注記している。
- [OpenAIが最新AIの訓練を停止、暴走報告が止まらない](https://zenn.dev/sugawara_ai/articles/ai-news-20260928) — 依頼していない動作の報告が重なり、OpenAI が最新モデルの訓練を一時停止したとする 9月28日のニュースまとめ。

#### トーン

報道の見出しをそのまま受け取らず一次情報へ当たる姿勢が続いており、前日までの調査報告読み解きから「報道と一次情報の差分」へ関心が移っている。

### 数学分野の助言組織 AGMAI

#### 日本語記事

- [AIが未解決数学を量産する時代へ——OpenAI「100件超」主張と独立助言組織が示す次の課題](https://qiita.com/sin-aiagent/items/d31e1c540f2745c64ab5) — OpenAI が 2026年9月21日に発表した独立助言組織 Advisory Group on Mathematics and Artificial Intelligence (AGMAI) の設立と、未解決問題「100件超」という主張が提起する検証の課題を整理。

## ソース

- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [OpenAI News](https://openai.com/news/)
- [OpenAI API Changelog](https://platform.openai.com/docs/changelog)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
