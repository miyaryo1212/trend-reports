---
title: "Codex CLI v0.135.0正式リリース、多数の新機能搭載"
summary: "Codex CLI v0.135.0が正式リリース。codex doctor診断強化、Vimモード改善、名前付き権限プロファイル、Python SDK Sandboxプリセットなど多数の新機能を含む。v0.136.0-alpha.1も同日公開。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-29
features:
  - "Codex CLI v0.135.0"
  - "codex doctor 環境診断強化"
  - "/status リモート接続表示"
  - "Vimモード改善"
  - "/permissions 名前付きプロファイル"
  - "バンドルzshヘルパー"
  - "Python SDK Sandboxプリセット"
  - "Codex CLI v0.136.0-alpha.1"
codex_review: "派手な新機能より、doctor強化や権限プロファイル整備のような運用の摩擦を削る改良が効いている。CLIの成熟を示す更新だが、業界全体への波及はまだ限定的だ。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI v0.135.0

5月28日にv0.135.0が正式リリースされた。前日までアルファ版だったものが安定版に昇格。主な変更点は以下の通り。

#### 新機能

- **`codex doctor` 環境診断強化**: Git、ターミナル、app-server、スレッドインベントリの詳細診断を追加（[#24261](https://github.com/openai/codex/pull/24261), [#24311](https://github.com/openai/codex/pull/24311), [#24305](https://github.com/openai/codex/pull/24305)）
- **`/status` リモート接続表示**: TUIがリモートトランスポート経由の接続詳細とサーバーバージョンを表示（[#24420](https://github.com/openai/codex/pull/24420)）
- **Vimモード改善**: テキストオブジェクト編集、単語/行末動作の改善、割り込みターンバインド設定対応（[#24382](https://github.com/openai/codex/pull/24382), [#24380](https://github.com/openai/codex/pull/24380), [#24766](https://github.com/openai/codex/pull/24766)）
- **`/permissions` 名前付きプロファイル**: カスタム権限プロファイルの表示・選択に対応（[#21559](https://github.com/openai/codex/pull/21559)）
- **バンドルzshヘルパー**: macOS/Linuxパッケージにパッチ済みzshフォークを同梱（[#23756](https://github.com/openai/codex/pull/23756), [#24171](https://github.com/openai/codex/pull/24171)）
- **Python SDK Sandboxプリセット**: スレッド/ターンAPIに使いやすいSandboxプリセットを追加（[#24772](https://github.com/openai/codex/pull/24772)）

#### バグ修正

- Markdownテーブル・複数行リストのTUI表示改善
- macOS/ZellijでのTUI出力安定化（stderr/composerの干渉解消）
- スラッシュコマンド補完時の既存テキスト保持
- tmux/iTerm旧バージョンでのCtrl-C動作修正
- アクセス不可アプリのメンション候補除外
- Resume時のexecセッション対応とcwdオーバーライド修正

#### 内部改善

- メモリランタイムをSQLiteデータベースに移行
- レガシー設定プロファイルの廃止、TUI設定をapp-server APIに移行
- Responsesリトライ処理とMCPツール命名ロジックの集約
- Rustツールチェーン・SQLx/SQLite依存の更新

[リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.135.0)

### Codex CLI v0.136.0-alpha.1

v0.135.0と同日（5月28日）に次期バージョンのアルファ版が公開された。リリースノートは「Release 0.136.0-alpha.1」のみで詳細は未公開。

[リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.136.0-alpha.1)

## コミュニティの反応

### Codex CLI

X/Twitterでのv0.135.0に対する反応は確認されなかった。

#### Tips

> Codexのコンテキスト圧縮はなぜ優秀なのか — ソースコードから読み解く設計。コンテキストウィンドウ管理の仕組みをコードレベルで分析 — nogataka [Qiita](https://qiita.com/nogataka/items/9b71285a9dd448e53bb1)

> Codex Petsを導入してみる — 有効化からSkillを活用したカスタムペット作成まで整理。Codexの作業状態をデスクトップ上のアニメーションで把握する機能の導入ガイド — jiawei.feng [Zenn](https://zenn.dev/acntechjp/articles/b074df81b93b38)

> OpenAI Codex CLI を本番運用するためのセキュリティ初期設定と運用ルール（前回から継続） — サボさん [Zenn](https://zenn.dev/engineer__117/articles/codex-cli-security-best-practices)

> Claude CodeとCodexを2ヶ月使い比べて分かった選び方 — settings.jsonを育てた側が速い（前回から継続） — playpark [Zenn](https://zenn.dev/playpark/articles/claude-code-vs-codex-comparison)

> 正式リリースされたCodexの/goalコマンドってなんだろう？（前回から継続） — Yoji [Zenn](https://zenn.dev/sun_asterisk/articles/e144769108a880)

> なぜCodex App Serverをサブプロセスで動かしたのか（前回から継続） — ユイチロ [Zenn](https://zenn.dev/spade3/articles/8138e0b698310d)

> AIエージェント検証用PCを作るメモ⑥：Codex CLIでREADMEを編集してみる（前回から継続） — Mai [Zenn](https://zenn.dev/imaginarygate/articles/64b61226a2c46d)

### OpenAI全般

#### Tips

> 毎月のAI API代、減らせるところまだ残ってませんか？ — Prompt Cachingで月額を1/3〜1/10にする実践ガイド（Anthropic / OpenAI / Gemini 3社比較） — akira_papa_AI [Qiita](https://qiita.com/akira_papa_AI/items/7206bad9004031c53c15)

> AIの出力をregexで抜くのは、もう卒業しませんか — 構造化出力（Structured Outputs）でLLMを"壊れない部品"にする実践ガイド（前回から継続） — akira_papa_AI [Qiita](https://qiita.com/akira_papa_AI/items/e0c288c2195f417049e0)

> AnthropicとOpenAI、公式プロンプトベストプラクティスを徹底比較してみた（前回から継続） — AI Ops Insider [Zenn](https://zenn.dev/aiops_insider/articles/a6c56302c3e651)

> Opus 4.7 と GPT-5.5 のレビュー特性を統計的に明らかにした — 720ケースの統計評価（前回から継続） — Nori [Zenn](https://zenn.dev/nnakapa/articles/lab-19-opus47-gpt55-code-review)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
