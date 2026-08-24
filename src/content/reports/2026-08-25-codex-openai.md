---
title: "Codex CLI 0.149.1 安定版、alpha.8 でTUI強化"
summary: "Codex CLI が 0.149.1 の安定版パッチをリリースし、codex exec に --thread-source が追加された。0.150.0-alpha.8 では TUI のタスク管理・Markdownリンク描画、cua_repl MCPサーバー対応などが入っている。GPT-5.6 ファミリーは AWS の Kiro でも利用可能になった。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-08-25

features:
  - "GPT-5.6 in Kiro"
  - "Codex CLI 0.149.1"
  - "Codex CLI 0.150.0-alpha.8"
  - "Codex TUIのタスク管理機能"
  - "Codex `cua_repl` MCPサーバー"
  - "Codex TUIのMarkdownリンク表示"
  - "Business Pro Lite の Business Premium 表記変更"
codex_review: "CLIの細かな改善自体は地味だが、TUIのタスク管理とKiro対応が揃うと、コーディングエージェントが単体ツールから作業基盤へ寄っていく流れが見える。まだ熱狂前夜で、期待先行になりすぎていない点も健全だ。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI 0.149.1 (安定版パッチ)

8月24日に安定版のパッチリリース。`codex exec` に `--thread-source` オプションが追加されたほか、リモート compaction 時に画像のバジェットを計上するよう変更、メモリ統合リクエストの識別が含まれる。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.149.1)

### Codex CLI 0.150.0-alpha.8

8月24日のアルファ更新。alpha.7 から 64 コミットを含む。主な変更は以下。

- **TUI のタスク管理機能**: TUI 上で Codex タスクを管理するツールと、コンポーザーへのタスクメンション機能を追加
- **`cua_repl` MCP サーバー**: Node REPL をバックエンドとする MCP サーバーとして `cua_repl` をサポート
- **TUI の Markdown リンク表示**: 対応ターミナルで Markdown リンクをクリック可能なラベルとして描画
- **Business Pro Lite の表記変更**: Codex 内で Business Pro Lite プランを Business Premium として表示

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.8)

### GPT-5.6 が AWS Kiro で利用可能に

8月24日、OpenAI の GPT-5.6 ファミリー (Sol / Terra / Luna) が AWS のコーディングエージェント Kiro で利用可能になった。Terminal-Bench 2.1 で約 82% のコスト削減が示されている。

(本項の一次ソース URL は本日の収集データに含まれていないため、リンクは省略)

## コミュニティの反応

X (Twitter) については、本日の全機能について検索を実施したが、公式・企業・bot 投稿を除いた個人ユーザーの実体験・感想投稿は**いずれも0件**だった。いずれも発表から24時間以内、かつアルファ版の変更が中心のため、まだ個人の利用報告が出ていない状況。以下は Zenn / Qiita で本日時点に確認できた記事。

### GPT-5.6 in Kiro

#### Tips

> Amazon Bedrock の GPT-5.6 (Sol / Terra / Luna) がクロスリージョン推論 (CRIS) に対応し、東京 (ap-northeast-1) / 大阪 (ap-northeast-3) がグローバル推論プロファイルのソースリージョンに追加された。3種類の API のコード例、グローバル推論プロファイル用の IAM 3ステートメント、リージョン制限 SCP の除外設定、プロンプトキャッシュ、クォータ管理までを扱っている。 — [東京リージョンから Amazon Bedrock の OpenAI GPT-5.6 を呼び出す実装ガイド (Zenn / kmotohas)](https://zenn.dev/aws_japan/articles/1c60f7329e7308)

> Codex の親エージェントに gpt-5.6-sol、サブエージェントに gpt-5.6-luna (reasoning=max) を割り当てる構成。Sol が要件整理・判断・検証・統合を担い、Luna Max が通常の調査や実装を担当する役割分担。 — [Codexを「Solが監督、Luna Maxがworker」の構成にする (Zenn / きょん)](https://zenn.dev/kimkiyong/articles/a853947d33876a)

#### ネガティブ

> 文字起こし SaaS の AI 生成機能5つを gpt-5.4-nano から gpt-5.6-luna + reasoning.effort=max へ一括置き換えする計画を、事前登録した SLO と費用の hard gate で検証。結果は「30秒以内成功が Luna 80% (Nano 100%)、成功1件あたりの実費が Luna は Nano より 4.2% 高い」で、採用条件を満たさず見送りとなった。 — [gpt-5.4-nanoをGPT-5.6 Luna(reasoning=max)で置き換え、SLO 80%と成功単価4%増で見送った (Zenn / のりちゃん)](https://zenn.dev/noricha/articles/gpt56-luna-max-nano-replacement)

#### ポジティブ

該当なし

### Codex CLI 0.149.1

#### Tips

> 今回 `--thread-source` が追加された `codex exec` について、対話セッションを開かずにタスクを実行する用途を検証した記事。CI パイプラインや使い捨てコンテナのように人間がターミナルに張り付けない環境で、API キー認証を使って Codex CLI を動かす手順を扱っている。 — [Codex CLIのexecをAPIキー認証でCIに組み込む (Qiita / kai_kou)](https://qiita.com/kai_kou/items/8520a86d7993100396dd)

#### ポジティブ・ネガティブ

該当なし

### Codex CLI 0.150.0-alpha.8

#### ポジティブ・ネガティブ・Tips

該当なし

### Codex TUIのタスク管理機能

#### ポジティブ・ネガティブ・Tips

該当なし

### Codex `cua_repl` MCPサーバー

#### ポジティブ・ネガティブ・Tips

該当なし

### Codex TUIのMarkdownリンク表示

#### ポジティブ・ネガティブ・Tips

該当なし

### Business Pro Lite の Business Premium 表記変更

#### ポジティブ・ネガティブ・Tips

該当なし

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [rust-v0.149.1](https://github.com/openai/codex/releases/tag/rust-v0.149.1)
- [rust-v0.150.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.8)
- [東京リージョンから Amazon Bedrock の OpenAI GPT-5.6 を呼び出す実装ガイド (Zenn)](https://zenn.dev/aws_japan/articles/1c60f7329e7308)
- [Codexを「Solが監督、Luna Maxがworker」の構成にする (Zenn)](https://zenn.dev/kimkiyong/articles/a853947d33876a)
- [gpt-5.4-nanoをGPT-5.6 Luna(reasoning=max)で置き換え、SLO 80%と成功単価4%増で見送った (Zenn)](https://zenn.dev/noricha/articles/gpt56-luna-max-nano-replacement)
- [Codex CLIのexecをAPIキー認証でCIに組み込む (Qiita)](https://qiita.com/kai_kou/items/8520a86d7993100396dd)
