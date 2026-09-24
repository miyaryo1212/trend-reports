---
title: "Codexモバイルが設定を記憶、CLIは0.156アルファ進行"
summary: "iOS版ChatGPT 1.2026.251でCodexモバイルのファイル操作とタスク設定の記憶が追加された。Codex CLIは0.156.0アルファがalpha.5〜alpha.8まで進行したが内容は非公開。X上の反応は今日も確認できず、コミュニティはAgent APIの過剰請求やCodexのモデル選びを扱っている。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-20

features:
  - "ChatGPT for iOS 1.2026.251 (Codexモバイル)"
  - "Codex CLI 0.156.0 アルファ系列 (alpha.5〜alpha.8)"
  - "Australian Youth Safety Blueprint"
  - "Codex のモデル選び (Astra / Sol / Terra)"
  - "OpenAI Agent API ホスト型コンテナの過剰請求"
  - "OpenAI のモデル不整合 (misalignment) 定期開示フレームワーク"
codex_review: "モバイルの設定記憶は小粒だが、作業環境を毎回整え直す摩擦を減らす改善として好感が持てる。一方、CLIの連続アルファは中身が見えず評価しづらく、業界全体への注目点は不整合事例の開示を仕組み化する動きにある。 ※ このレビューは後日生成されました"
codex_importance: 2
---

## 公式アップデート

### ChatGPT for iOS 1.2026.251 (Codexモバイル)

iOS 版 ChatGPT アプリの更新で、Codex モバイル周りに次の変更が入った。

- ファイルピッカーからフォルダを新規作成できるようになった
- writing blocks に対応
- 新規タスク作成時に worktree モードと環境設定を記憶するようになった

[ソース](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

### Codex CLI 0.156.0 アルファ系列 (alpha.5〜alpha.8)

前回時点で alpha.4 まで進んでいた 0.156.0 のアルファタグが、alpha.5 / alpha.6 / alpha.7 / alpha.8 と 4 本進行した。いずれもリリースノートは「Release 0.156.0-alpha.N」の自動生成表記のみで、変更内容は公開されていない。

[ソース](https://github.com/openai/codex/releases)

### Australian Youth Safety Blueprint

OpenAI が、若年層の AI 利用を守るための 6 本柱からなる政策ロードマップを公開した。オーストラリア向けの提言という位置づけ。

[ソース](https://openai.com/news/)

## コミュニティの反応

Step 2 の X 検索では、本日の公式アップデート 3 件のいずれについても個人ユーザーの実体験・感想投稿は確認できなかった。0.156 系全般への不満 (不安定化・機能リバート) を述べる投稿は数件あったが、特定のアルファ版に紐づくものではないため除外している。

### ChatGPT for iOS 1.2026.251 (Codexモバイル)

該当なし。

### Codex CLI 0.156.0 アルファ系列 (alpha.5〜alpha.8)

該当なし。

### Australian Youth Safety Blueprint

該当なし。

### Codex のモデル選び (Astra / Sol / Terra)

#### Tips

> Codex で新しいタスクを作るときに並ぶ Astra・Sol・Terra の 3 モデルについて、Claude の Fable / Opus / Sonnet のような使い分けが分かりにくいという問題意識から、それぞれの性格と選び方を整理した記事 — @inoyu-qiita [Codexのモデル選びで迷わない。Astra・Sol・Terraの使い分け](https://qiita.com/inoyu-qiita/items/ab096a72824d31c154ea)

### OpenAI Agent API ホスト型コンテナの過剰請求

#### ネガティブ

> 2026年9月19日に OpenAI のステータスページへ掲載された 3 件のインシデントのうち、Agent API の OpenAI ホスト型コンテナに対する過剰請求を取り上げた記事。いずれも Resolved だが金銭が絡む問題であるため、利用者は請求内容を自分で確認すべきだと促している — @picnic [OpenAI Agent APIのホスト型コンテナで過剰請求、利用者は請求確認を](https://qiita.com/picnic/items/18463f8a209b5cb400b6)

### OpenAI のモデル不整合 (misalignment) 定期開示フレームワーク

#### Tips

> 2026年9月16日に OpenAI が公表した、自社モデルの不整合事例を追跡・調査・開示するためのフレームワークを読み解いた記事。同時公開された半年分の不整合事例 6 件よりも、「何を、どのようなプロセスで、どこまで開示するか」を定めた運用フレームワーク自体が公開された点を重要視し、公式ブログと個別レポートを横断して開示プロセスの構造を図解・表で整理している — タシカニ [OpenAIが「モデルの不整合」を定期開示する仕組みを作った](https://zenn.dev/tashikani/articles/openai-misalignment-disclosure-2026)

## ソース

- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [ChatGPT リリースノート](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
- [OpenAI News](https://openai.com/news/)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
