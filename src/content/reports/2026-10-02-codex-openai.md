---
title: "Codex CLI 0.160.0 と新エッセイ連載"
summary: "Codex CLI の安定版 0.160.0 が公開され、Guardian レビューの文脈取得オプトイン、エージェントコマンドセンターの履歴ページネーション、プロジェクト外でのセッション開始などが入った。OpenAI は新プラットフォーム「Intelligence Age」でエッセイ連載を開始した。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-02

features:
  - "Codex CLI 0.160.0"
  - "The eternal complement"
  - "Codex CLI 0.159.3"
codex_review: "派手な性能向上より、履歴の追跡や権限復元、再接続時の重複防止といった運用の摩擦を潰す更新に、Codexが日常の開発基盤へ育っている実感がある。一方、経済論のエッセイは示唆的でも、現時点では製品変更ほど業界を動かす材料ではない。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI 0.160.0

安定版 0.160.0 が公開されました。主な新機能は以下のとおりです。

- エージェントコマンドセンターで、キーボード操作可能な「Show more」から過去のタスクを遡れるようになりました ([#49106](https://github.com/openai/codex/pull/49106))
- Guardian レビューにオプトインの機能が追加され、過去のユーザー指示の取得と、エージェント間の引き継ぎ (handoff) 文脈の取り込みができるようになりました ([#49036](https://github.com/openai/codex/pull/49036), [#49057](https://github.com/openai/codex/pull/49057))
- ポリシーが許す場合に、プロジェクト外でもワークスペース既定値を使ってセッションを開始でき、再開時に保存済みの権限が復元されます ([#49160](https://github.com/openai/codex/pull/49160))
- Linux X11 のローカルターミナルで、フルスクリーン時にトランスクリプトを選択して中クリック貼り付けができるようになりました ([#49112](https://github.com/openai/codex/pull/49112))

バグ修正では、再接続後に未送信のキュー済みメッセージを重複送信せずに再開する修正 ([#49105](https://github.com/openai/codex/pull/49105))、TUI がサーバープロバイダ・推論サマリー・冗長度の設定を保持し resume/fork 履歴に正しいセッションを表示する修正 ([#49144](https://github.com/openai/codex/pull/49144) ほか)、Windows サンドボックスの PowerShell フォールバックと長いパスの権限修復、バックグラウンドヘルパーによる不要なコンソールウィンドウの抑止 ([#49019](https://github.com/openai/codex/pull/49019), [#49058](https://github.com/openai/codex/pull/49058), [#49098](https://github.com/openai/codex/pull/49098), [#49164](https://github.com/openai/codex/pull/49164), [#49386](https://github.com/openai/codex/pull/49386)) などが含まれます。ほかに、起動中の環境をサブエージェントが保持する修正、SQLite の接続セットアップ・ログ出力でのストール防止と初期化エラーの表面化、プロバイダのモデルカタログが非対応の同梱モデルや古いエントリを再利用しない修正が入っています。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.160.0)

### The eternal complement

OpenAI の新プラットフォーム「Intelligence Age」で、「次の経済」をテーマとしたエッセイ連載の第1弾が公開されました。フロンティア知能と実行能力は経済学的な補完財である、という論旨です。

[ソース](https://openai.com/news/)

### Codex CLI 0.159.3

ChatGPT でサインインしたローカルセッションに対して、アカウントのセキュリティ設定についての任意のリマインダーを表示するバックポートのみを含む安定版です。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.159.3)

## コミュニティの反応

### Codex CLI 0.160.0

#### 該当なし

X の取得投稿はリリースノートや変更履歴の転載、非公式の通知系アカウントによるもののみで、個人ユーザーの実体験・感想・Tips に該当するものはありませんでした。日本語記事にも 0.160.0 を扱ったものは確認できませんでした。

### The eternal complement

#### 該当なし

X 投稿・日本語記事ともに、このエッセイについての個人ユーザーの反応は確認できませんでした。

### Codex CLI 0.159.3

#### 該当なし

X 投稿・日本語記事ともに、このバージョンについての個人ユーザーの反応は確認できませんでした。

## ソース

- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [OpenAI News](https://openai.com/news/)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
