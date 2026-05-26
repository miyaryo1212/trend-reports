---
title: "Codex CLI v0.134.0正式リリース、公式ブログで技術解説2本公開"
summary: "Codex CLI v0.134.0が正式リリースされ、会話履歴検索やプロファイル統一など多数の改善を含む。公式ブログではCodexハーネスとエージェントループの技術解説記事が公開された。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-27
features:
  - "Codex CLI v0.134.0: 会話履歴のローカル検索機能"
  - "--profileフラグの統一"
  - "MCP セットアップ改善"
  - "コネクタツールスキーマ改善"
  - "読み取り専用MCPツールの並列実行"
  - "拡張機能・フックコンテキスト強化"
  - "Unlocking the Codex Harness (公式ブログ)"
  - "Unrolling the Codex Agent Loop (公式ブログ)"
codex_review: "新モデル発表のような華はないが、検索やMCP周りの改善は現場の摩擦を確実に削る類いで、むしろこういう地味な成熟のほうが長く効く。OpenAIがツール基盤を本命事業として磨き始めた感じがある。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI v0.134.0

v0.134.0-alpha.3から正式版がリリースされた。主な変更点は以下の通り。

**新機能:**

- **会話履歴のローカル検索**: 大文字小文字を区別しない全文検索を追加。結果プレビュー付き（[#23519](https://github.com/openai/codex/pull/23519), [#23921](https://github.com/openai/codex/pull/23921)）
- **`--profile`フラグの統一**: CLI・TUI・サンドボックス全体でプロファイル選択を`--profile`に統一。レガシー設定は移行ガイダンス付きで廃止（[#23708](https://github.com/openai/codex/pull/23708)他）
- **MCPセットアップ改善**: サーバーごとの環境ターゲティングとStreamable HTTPサーバー向けOAuthオプションを追加（[#23583](https://github.com/openai/codex/pull/23583), [#24120](https://github.com/openai/codex/pull/24120)）
- **コネクタツールスキーマ改善**: ローカル`$ref`/`$defs`構造の保持と大規模スキーマの自動コンパクション（[#23357](https://github.com/openai/codex/pull/23357), [#23904](https://github.com/openai/codex/pull/23904)）
- **読み取り専用MCPツールの並列実行**: `readOnlyHint`アノテーション付きMCPツールの同時実行が可能に（[#23750](https://github.com/openai/codex/pull/23750)）
- **拡張機能・フックコンテキスト強化**: 拡張ツールに会話履歴を公開、フック入力にサブエージェントIDを追加（[#22882](https://github.com/openai/codex/pull/22882), [#23963](https://github.com/openai/codex/pull/23963)）

**バグ修正:**

- リモート接続の信頼性向上（exec-server WebSocket再接続、認証復旧後の即時リトライ、remote compaction v2ストリームのリトライ）
- Windows TUIの描画崩れを修正（仮想ターミナルモードの復元）
- ワークスペース別の使用量制限メッセージを表示
- Node.jsベースツールがCodexのマネージドネットワークプロキシを正しく参照するよう修正

[ソース: GitHub Releases](https://github.com/openai/codex/releases/tag/rust-v0.134.0)

### 公式ブログ記事

- **Unlocking the Codex Harness**: Codexハーネスに関する技術解説（詳細未取得）
- **Unrolling the Codex Agent Loop**: Codexエージェントループの内部構造に関する技術解説（詳細未取得）

## コミュニティの反応

### Codex CLI

#### Tips

> 正式リリースされたCodexの/goalコマンドってなんだろう？ — 2026年5月21日に実験的機能から正式機能に昇格した/goalコマンドの機能解説。数時間〜数日単位でCodexを特定目的に向けて動かせる機能と紹介 — Yoji [Zenn](https://zenn.dev/sun_asterisk/articles/e144769108a880)

> なぜCodex App Serverをサブプロセスで動かしたのか — macOS向けAI画像生成アプリ「Draft Canvas」の設計判断を解説 — ユイチロ [Zenn](https://zenn.dev/spade3/articles/8138e0b698310d)

> AIエージェント検証用PCを作るメモ⑥：Codex CLIでREADMEを編集してみる（前回から継続） — Mai [Zenn](https://zenn.dev/imaginarygate/articles/64b61226a2c46d)

> Codex Petsを導入してみる——有効化からカスタムペット作成まで整理（前回から継続） — jiawei.feng [Zenn](https://zenn.dev/acntechjp/articles/b074df81b93b38)

> Codex App Server とは何か — 自プロダクトにAIコーディングエージェントを埋め込む新しい選択肢（前回から継続） — ShintaroAmaike [Zenn](https://zenn.dev/shintaroamaike/articles/4d69e695902992)

### AIエージェント・ツール設計

#### Tips

> AIエージェントのツール定義設計原則：スキーマ・命名・レスポンスの実践ガイド — JSON Schemaの設計7原則、レスポンス設計でトークン消費60%以上削減する手法、30個以上のツールセットでの精度維持手法を解説 — ohno [Zenn](https://zenn.dev/0h_n0/articles/581a4e0ece7056)

> AIは今、何と繋がるか — 連携方式を誤ると作り直しになる、2026年の3つの選択肢 — AI解読部 [Zenn](https://zenn.dev/aidecodelabjp/articles/ai-integrations-2026)

### OpenAI全般

#### Tips

> 「りんご」のベクトルを覗いたら、AppleとLingoが別人だった話 — text-embedding-3-largeで果物軸を探す実験記録 — masafy [Qiita](https://qiita.com/masafy/items/4473222f8e8fd472b5ee)

> LLMはカナ編集距離を計算できるのか？ — tokenizationの影響で文字の表層的類似度の計算が困難になる問題を検証 — shimajiroxyz [Qiita](https://qiita.com/shimajiroxyz/items/06d2cf27d43bc9383022)

> 【Claude vs GPT】肌診断AIを実働5日で成立させた話 — Claude Sonnet 4.5のvisionの限界をgpt-image-2で突破した事例 — MakiNest AI [Zenn](https://zenn.dev/makinestai/articles/claude-vs-gpt-image-2-skin-ai)

#### 分析

> OpenAI、80年未解決の数学問題を解いたと発表――今度こそ本物か（前回から継続） — Quotidia [Zenn](https://zenn.dev/quotidia/articles/quotidia-aq-015)

> 「glacier-alpha」って結局なんなんですか、という話（前回から継続） — 多田悠 [Zenn](https://zenn.dev/tadayuu/articles/7612983470e8a6)

> 【2026年決定版】主要AI API徹底比較！性能・料金・ユースケースから選ぶ最適な1本（前回から継続） — のりそう [Zenn](https://zenn.dev/noriso_dev/articles/5351dd1ffa6628)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
