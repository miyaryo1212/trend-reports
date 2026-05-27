---
title: "v2.1.152で/code-review --fix登場、スキル・フック拡張も多数"
summary: "Claude Code v2.1.152がリリースされ、/code-review --fixによるレビュー結果の自動適用、スキルのdisallowed-tools、MessageDisplayフックなど多数の新機能が追加。コミュニティではスキル設計・プラグイン運用・セキュリティの実践知見が活発に投稿された。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-28
features:
  - "Claude Code v2.1.152 /code-review --fix"
  - "Claude Code v2.1.152 Skills disallowed-tools"
  - "Claude Code v2.1.152 /reload-skills コマンド"
  - "Claude Code v2.1.152 SessionStart hooks reloadSkills"
  - "Claude Code v2.1.152 SessionStart hooks sessionTitle"
  - "Claude Code v2.1.152 MessageDisplay hook"
  - "Claude Code v2.1.152 pluginSuggestionMarketplaces設定"
  - "Claude Code v2.1.152 Auto mode opt-in不要化"
  - "Claude Code v2.1.152 fallback-model自動切替"
  - "Claude Code v2.1.152 Vim mode逆履歴検索"
  - "Anthropic 韓国法人代表にKiYoung Choi氏を任命"
codex_review: "今回の更新は派手さ以上に、Claude Codeが「単発の補助」から「運用される開発環境」へ寄っているのが面白い。/code-review --fixが目玉でも、実はスキル制御やフック拡張のほうが長く効く進化だと思う。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.152（5月27日リリース）

前バージョンv2.1.150（内部改善のみ）から一転、多数の新機能とバグ修正を含む大型リリース。

#### 主な新機能

- **`/code-review --fix`**: レビュー結果をワーキングツリーに自動適用する新オプション。`/simplify`は`/code-review --fix`を呼び出すように変更された
- **Skills `disallowed-tools`**: スキルのフロントマターで`disallowed-tools`を指定し、スキル実行中に特定ツールを無効化可能に
- **`/reload-skills`コマンド**: セッション再起動なしでスキルディレクトリを再スキャン
- **SessionStartフック拡張**: `reloadSkills: true`を返してスキル再スキャンが可能に。`hookSpecificOutput.sessionTitle`でセッションタイトル設定も可能に
- **MessageDisplayフック**: アシスタントメッセージの表示テキストを変換・非表示にする新フックイベント
- **`pluginSuggestionMarketplaces`設定**: 管理者がコンテキスト対応ヒントで提案可能なプラグインマーケットプレイスを許可リスト化
- **Auto mode opt-in不要化**: オートモードの使用に同意確認が不要に
- **`--fallback-model`自動切替**: プライマリモデルが見つからない場合、セッション全体でフォールバックモデルに自動切替（毎回失敗する代わりに）
- **Vim mode逆履歴検索**: NORMALモードで`/`キーがCtrl+R相当の逆履歴検索を起動

#### UI/UX改善

- `/usage`の内訳にラージセッションファイルを追加（ストリーミング読み取りでメモリ使用量はフラット）
- Thinkingサマリーが最低3秒表示、Markdown描画、最大10行に制限
- フルスクリーンモードで「Thinking for Ns」がライブカウントアップ
- Workflowツールのインライン進捗表示を簡素化
- バックグラウンドエージェント/ワークフロー完了待ちのタイマー表示改善

#### 主なバグ修正

- 長時間セッションでのターミナルスタイル劣化をスタイルプールのリサイクルで修正
- プラグインMCPサーバーの環境変数違いによる誤った重複排除を修正
- リモートMCPサーバーがClaude Code Remoteでegress proxy有効時に接続失敗する問題を修正
- モデル/ログイン切替後にstaleなthinking-block signatureでセッションがスタックする問題を修正

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.152)

### Anthropic 韓国法人代表にKiYoung Choi氏を任命

Snowflake元韓国GMのKiYoung Choi氏がAnthropic韓国法人の代表取締役に就任。ソウルオフィス開設に先立つ人事。

## コミュニティの反応

### /code-review --fix・コードレビュー自動化

#### Tips

> Claude Code v2.1.152で`/code-review`に`--fix`フラグが追加。従来の「指摘して終わり」から「自動で修正するところまで」に進化 — @leomarokun [Qiita](https://qiita.com/leomarokun/items/64a1884de4bc889359f9)

> Claude Code v2.1.152 新機能まとめ：/code-review --fix 自動適用とMCPバグ修正。開発ワークフローに直結する変更を整理 — @picnic [Qiita](https://qiita.com/picnic/items/68bba9e96d001cc2b1bc)

> Opus 4.7とGPT-5.5のレビュー特性を統計的に明らかにした。720ケースの統計評価で、Opus 4.7は「読み手志向の辛口採点者」、GPT-5.5は「原則厳守の採点者」と特性が異なる結果 — @Nori [Zenn](https://zenn.dev/nnakapa/articles/lab-19-opus47-gpt55-code-review)

### スキル・コマンド設計

#### Tips

> Claude Codeのslash commandとcustom skillは何が違うのか。commands形式はそのまま動くが、skill形式だけが補助ファイル・自動読み込み・pathsによる絞り込み等のfrontmatterを持つ — @ぐで象 [Zenn](https://zenn.dev/gudezou/articles/d3b954f51bca04)

> Claude Codeの`/batch`で1つの指示を5〜30個のunitに分解。subagentが別々のgit worktree上で動き、それぞれがPRを開く — @ぐで象 [Zenn](https://zenn.dev/gudezou/articles/c2a4336ed5da0b)

> Claude CodeのAskUserQuestionツールを活用したスキル作成。対話形式でユーザーストーリーを作成するスキルの実装例 — @mizuki901 [Zenn](https://zenn.dev/ekispert_api/articles/ask-user-question)

### CLAUDE.md・メモリ設計・状態永続化

#### Tips

> 24時間稼働AIエージェントの状態永続化 — 3層メモリの設計判断。「とりあえずCLAUDE.mdに全部書く」で運用が破綻し始めた人向け — @yureki lab [Zenn](https://zenn.dev/yureki/articles/agent-state-3layer-design)

> Claude Codeの「記憶」を設計する — CLAUDE.mdとSkillsでAI Agentが別人になった話。CLAUDE.mdを書いているかどうかで開発体験が劇的に変わる — @浅井めぐみ [Zenn](https://zenn.dev/asayi_megumi/articles/58f1adbe2f7c53)

> コンテキスト負債ってやつ。古い記述の残渣がエージェントの判断材料に紛れ込み、勝手に辻褄を合わせて進めてしまう問題 — @超伝導ババア [Zenn](https://zenn.dev/niahiniahi/articles/fd0d7bfb2850bb)

### プラグイン・セキュリティ

#### Tips

> ハーネスエンジニアなら知っておきたいCoworkでぶっ壊れるClaude Code Pluginの罠（続編）。macOS/Windows版Claude DesktopのCoworkモードでの非対称な挙動を整理 — @kazukinagata（StoreHero） [Zenn](https://zenn.dev/storehero/articles/2bc58c12090f72)

> Anthropic公式プラグイン「security-guidance」でClaude Codeのセキュリティレビューを自動化する。インストールするだけで3つの層が連携してコード監視 — @しろちゃん [Zenn](https://zenn.dev/shirochan/articles/95c5c286beb5a3)

> ハーネスは進化する — Anthropic公式security-guidance pluginを、触る前に読んでみた。AIがコードを書く速度に人間のレビューが追いつかない現場の悩みへの公式回答 — @noah [Zenn](https://zenn.dev/noah33/articles/security-guidance-plugin-first-read)

### 品質管理・開発ガードレール

#### Tips

> 【TypeScript】雑に指示して品質を出す【Claude Code】。lint設定・コーディング規約・プロセス標準化の3層で品質を仕組みで担保 — @tara is ok（Rehab for JAPAN） [Zenn](https://zenn.dev/rehabforjapan/articles/development-guardrails)

> Claude Code Hooksで16個の安全装置を組んだ話。13 lifecycle eventに分散配置した実例 — @cnative_tkb [Zenn](https://zenn.dev/cnative_tkb/articles/4753b332bc536c)

> Claude CodeでAIチームを組んだのに「うまく回せない」——運用・品質管理・事故対応の実録 Vol.2。Playbook設計・三層品質ゲート・3つの事故の記録 — @saitoko [Zenn](https://zenn.dev/tottoko_hamu/articles/2026-05-25-155645)

### Claude Code vs Codex・ツール比較

#### Tips

> Claude CodeとCodexを2ヶ月使い比べて分かった選び方 — settings.jsonを育てた側が速い。Next.js 16+React 19プロジェクトでの体感比較 — @playpark [Zenn](https://zenn.dev/playpark/articles/claude-code-vs-codex-comparison)

### AGENTS.md互換性問題

#### ネガティブ

> AGENTS.mdとClaude Codeのinteropの運用の手引き — 5,196反応の集積。GitHubの単一issueで過去最大の反応数、1年以上未対応。Codex/Cursor/Amp/Aiderが収束しつつある業界標準にClaude Codeは未対応 — @ゆるくさ [Zenn](https://zenn.dev/yurukusa/books/agents-md-interop)

### Claude Managed Agents・Code with Claude London

#### Tips

> 新登場Claude Managed Agentsとは何か — CwC2026 Londonで考え方が一段アップデートされた話。Anthropic公式登壇の一次情報を整理 — @noah [Zenn](https://zenn.dev/noah33/articles/ship-your-first-managed-agent)

> GAしたClaude Platform on AWSでTerraform PR Botを作った話。Claude Managed Agents（beta）を活用 — @muramura（TOKIUM） [Zenn](https://zenn.dev/tokium_dev/articles/slack-bot-anthropic-managed-agents)

### Claude Code活用事例・ノーコード開発

#### Tips

> UI/UXデザイナーがコードを書かずに、Claudeと2週間で家計簿PWAをリリースした話。Pro プラン$20だけで完成 — @kitamuramitsuru [Zenn](https://zenn.dev/kitamuramitsuru/articles/ff6e7e96213ee5)

> 既存コードから仕様書を自動生成するcc-rsgを試した。ドキュメントのないレガシーシステムの解析にClaude Codeスキルを活用 — @daishir0 [Zenn](https://zenn.dev/daishiro/articles/cc-rsg-reverse-spec)

### コスト管理・利用枠

#### Tips

> Claude Codeの利用枠を最大限活用するためにやっていること。無駄なcontextを持たせず、重い作業のタイミングを調整する運用術 — @trknhr [Zenn](https://zenn.dev/trknhr/articles/ae45f1380f90b3)

> claude -pを122セッション回して84.68ユーロ消えた事例と、15分のpre-flight。OAuth認証での想定外課金の教訓 — @ゆるくさ [Zenn](https://zenn.dev/yurukusa/articles/34b7120e7f1bc9)

> LiteLLMでLLM利用を管理してみる：Claude Code・Claude・Amazon Bedrockを組織で使うための実践メモ — @ziffy [Qiita](https://qiita.com/ziffy/items/6406a85acf99c1c8329f)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
