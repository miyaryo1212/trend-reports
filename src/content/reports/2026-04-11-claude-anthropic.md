---
title: "v2.1.101リリース、Managed Agents・ant CLIへの反応拡大"
summary: "Claude Code v2.1.101で/team-onboardingコマンド、OS CA証明書ストア信頼デフォルト化、/ultraplan自動クラウド環境作成を追加。セキュリティ修正・メモリリーク修正も含む。Managed Agentsとant CLIへのコミュニティ反応が本格化し、Monitorツールの活用報告も増加。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-11
features:
  - "/team-onboarding コマンド"
  - "OS CA 証明書ストア信頼のデフォルト化"
  - "/ultraplan 自動クラウド環境作成"
  - "LSP バイナリ検出のコマンドインジェクション脆弱性修正"
  - "仮想スクローラーのメモリリーク修正"
  - "Claude Managed Agents 公開ベータ"
  - "ant CLI"
  - "Claude Haiku 3 非推奨化（4/19廃止）"
codex_review: "Managed Agentsとant CLIの熱気は本物だが、私には機能追加そのものよりも、証明書ストア既定化や脆弱性修正のほうが重要に映る。派手さより運用の摩擦を潰す段階に入ったのが、むしろ成熟のサインだ。 ※ このレビューは後日生成されました"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.101（2026-04-10）

新機能追加とバグ修正を含むリリース。主要な変更点:

- **`/team-onboarding` コマンド**: ローカルの Claude Code 使用状況からチームメイト向けオンボーディングガイドを自動生成
- **OS CA 証明書ストア信頼のデフォルト化**: エンタープライズ TLS プロキシが追加設定なしで動作するように変更（`CLAUDE_CODE_CERT_STORE=bundled` でバンドル CA のみに切替可能）
- **`/ultraplan` 自動クラウド環境作成**: Web 設定なしでデフォルトのクラウド環境を自動作成
- **セキュリティ修正**: LSP バイナリ検出の POSIX `which` フォールバックにおけるコマンドインジェクション脆弱性を修正
- **メモリリーク修正**: 長時間セッションで仮想スクローラーにメッセージリストの履歴コピーが蓄積される問題を修正
- brief モードでプレーンテキスト応答時のリトライ改善
- focus モードの自己完結型サマリー改善
- レート制限リトライメッセージにどの制限に到達したかと復旧時刻を表示
- `claude -p --resume <name>` で `/rename` や `--name` で設定したセッションタイトルを受付可能に
- `settings.json` の未認識フック名で設定ファイル全体が無視される問題を修正
- `--resume`/`--continue` の大規模セッションでのコンテキスト消失修正
- ハードコードされた5分リクエストタイムアウトの修正（`API_TIMEOUT_MS` を正しく参照）
- `permissions.deny` ルールが PreToolUse フックの `permissionDecision: "ask"` を上書きしない問題を修正
- Bedrock SigV4 認証の Authorization ヘッダー競合修正
- サブエージェントの MCP ツール継承修正
- ワーカツリー内サブエージェントの Read/Edit アクセス拒否修正
- Grep ツールの組み込み ripgrep バイナリパス陳腐化時のフォールバック修正
- `/btw` がセッション全体をディスクに書き込んでいた問題を修正
- 複数の `/resume` ピッカー改善
- 複数のプラグイン問題修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.101)

### Claude Code v2.1.100（2026-04-10）

内容なしのリリース。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.100)

### Claude Code v2.1.98（2026-04-09）（前回から継続）

前回レポートで詳述済み。Google Vertex AI セットアップウィザード、Monitor ツール、Perforce モード、サブプロセスサンドボックス強化、Bash tool の複数セキュリティ修正など。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.98)

### その他の公式アナウンス

- **Claude Managed Agents 公開ベータ**: 安全なサンドボックス・組み込みツール・SSE ストリーミング付きの完全マネージドエージェント基盤。API 経由でエージェントの構築・実行・管理が可能
- **ant CLI**: Claude API とのインタラクション用コマンドラインクライアント。Claude Code とのネイティブ統合に対応
- **Claude Haiku 3 非推奨化**: 2026年4月19日に廃止予定。Haiku 4.5 への移行を推奨

## コミュニティの反応

### Claude Managed Agents

#### ポジティブ

> Managed Agents を実際に触って利用レポートを作成。エンタープライズ向けながらデザイナー視点で活用の可能性を実感 — @kgsi [X](https://x.com/i/status/2042085712686928037)

> エージェントの実行環境・状態管理・ツール実行を Anthropic が肩代わりし、本番運用が容易になる点を高く評価。AI 活用の勝負がモデル試用から安全運用に移行する流れ — @kawai_design [X](https://x.com/i/status/2042012337310462054)

> セールスエージェントを構築し、一度起動すれば止まらず長時間働き続ける点を絶賛。営業がトークン課金で代替可能に — @lovejesusYT [X](https://x.com/i/status/2042166126176866315)

#### ネガティブ

> 触ってみたが、プロンプト設計やツール選択、トークン管理などの泥臭い作業が多く、「作れる」と「使いこなせる」の間に距離を感じる — @03Imanyu [X](https://x.com/i/status/2042162269384233151)

#### Tips

> Claude Code（手元で対話型）と Managed Agents（クラウドで自律型）の違いを明確化。後者は業務仕組み組み込みに最適で API 直接利用がシンプル — @tetumemo [X](https://x.com/i/status/2042228742005874992)

> Claude Managed Agents 入門。クラウド上で AI エージェントを構築・運用する API スイートの概要と使い方を解説 — @ますみ [Zenn](https://zenn.dev/galirage/articles/claude-managed-agents-quickstart)

> Anthropic Managed Agents をさくっと触ってみた。「頭脳」「手」「記録」分離アーキテクチャの実検証 — @いけ [Zenn](https://zenn.dev/sprix_it/articles/3211f5068cec29)

> エージェント基盤をフルマネージドで運用する新 API として解説。ハーネス部分の構築コストを解消 — @k1t [Zenn](https://zenn.dev/tkou15/articles/claude-managed-agents)

> AI エージェントの自律性は「安全な箱」が決める。Managed Agents が埋めるランタイム層を分析 — @slate-infra [Zenn](https://zenn.dev/slate_infra/articles/2f4831bf38b740)

> Claude がマネージドになった！他社サービスと何が違うのか調べてみた — @o0-sheeefk-0o [Qiita](https://qiita.com/o0-sheeefk-0o/items/6a4d718f092187bf6652)

> Claude Managed Agents って何？GeminiAPI と何が違うの？Claude に聞きながら理解した — @t_mando_ [Qiita](https://qiita.com/t_mando_/items/933ed7fa7b2d52b641f9)

### ant CLI

#### ポジティブ

> ant CLI を使って Managed Agent を構築。技術者には格段に速いと実感 — @NickSpisak_ [X](https://x.com/i/status/2042107497092174183)

> ant CLI は技術者にとって速すぎて驚くほど便利。数秒で構築可能 — @sora19ai [X](https://x.com/i/status/2042282735449096640)

#### Tips

> ant CLI は Claude Code ユーザー（技術者）向け、Platform UI はチャットユーザー向け、Agent SDK はエージェント製品向けと使い分け — @NickSpisak_ [X](https://x.com/i/status/2042322283197297031)

### Monitor ツール（v2.1.98）

#### ポジティブ

> Monitor ツールでログ監視や長いタスクの完了待ちに活用可能でトークン節約に繋がる。ただし都度指示が必要 — @yoppy0123 [X](https://x.com/i/status/2042384428488671318)

> Monitor 機能により Claude Code がログを常時監視し、エラー即報告・PR コメント・デプロイをリアルタイム追跡可能。AI の操作モデルが根本的に変わる — @kawai_design [X](https://x.com/i/status/2042588659069911060)

> Monitor ツール追加でイベント駆動型のトークン消費大幅削減。エージェントループに組み込む — @masahirochaen [X](https://x.com/i/status/2042487770942488779)

> リアルタイムログ監視が可能になり、ポーリング不要でトークン削減・安定性向上、デバッグ自動化が加速 — @ai_hakase_ [X](https://x.com/i/status/2042501334956405234)

### Claude Code Hooks とルール設計

#### Tips

> ルールだけでは守れない。Claude Code Hooks で決定論的なガードレールを作る。サブエージェントに自律性を与えられるようになった — @kiyokuro [Zenn](https://zenn.dev/dely_jp/articles/31bd95c8135d54)

> CLAUDE.md のルールを5回書き直しても無視された。GitHub 30件超の報告に共通する原因と hook で止めた方法 — @yurukusa [Qiita](https://qiita.com/yurukusa/items/f0f1ffd024a1b9394df4)

> Claude Code に開発フローを守らせる superpowers を使った Skills 設計パターン — @DK [Zenn](https://zenn.dev/dk_/articles/1f3fbc506827ac)

> Claude Code の rules を検証した。paths 条件の実際の動作と branch-rules-auto-loader の仕組み — @metalels86 [Zenn](https://zenn.dev/metalels86/articles/2418a39f6057bb)

### Claude Code 活用事例

#### Tips

> AI キャラクターに MCP サーバーを作ったら、ユーザーのことを覚えるフクロウになった。Cloudflare Workers + Neon PostgreSQL での実装パターン — @kimny [Zenn](https://zenn.dev/glasswerks/articles/claude-code-hoo-mcp-server)

> Claude Code で 3D CAD を操作する MCP サーバとスキルを作った。自然言語で 3D モデリング — @hal [Zenn](https://zenn.dev/fabrica/articles/2026-04-10_cadquery-claude-tools-tutorial)

> Claude Code + Obsidian で Daily Note の下書きを自動生成し、週次・月次レビューまで積み上げる仕組み — @s_hamabata [Zenn](https://zenn.dev/dely_jp/articles/b8da42a57bbc39)

> タニタの体重・体脂肪データを Claude から呼べるようにした話。MCP サーバー実装 — @Kapi.Oki [Zenn](https://zenn.dev/hittskapi/articles/e215e34c04143e)

> E2E テスト（CI 失敗→自動修復/UI 変更→テスト事前追従）を自動追従する GitHub Actions の仕組み — @M2 [Zenn](https://zenn.dev/m2/articles/49261d386f1985)

> Claude Code で「新機能のシステムテスト自動実行」を実現。新人テスターを育てるように AI にナレッジを蓄積 — @とみしゅう [Zenn](https://zenn.dev/tokium_dev/articles/8afaebc087440a)

> Claude Code Schedule でサポート対応を自動化する具体的な手順 — @kanta13jp1 [Qiita](https://qiita.com/kanta13jp1/items/38f0383e0ea01b787900)

> コード経験ゼロの非エンジニアが、夜1〜2時間×休日の朝だけでお酒 SNS アプリを App Store に公開 — @hariwan [Zenn](https://zenn.dev/hariwan/articles/fedbd5e17ec9a9)

### Claude Code ロール混同バグ

#### ネガティブ

> Claude Code が「言ってもいない指示」を実行する。ロール混同バグの4つの発生パターンと対策。CLAUDE.md に書いても効かないことを実証 — @luoxi [Zenn](https://zenn.dev/luoxi/articles/claude-role-confusion-bug)

### AI 開発組織論

#### 中立

> PR が3倍になったのにリリースが増えない。AI 時代のボトルネック移動と処方箋。コード生成速度の向上≠デリバリー速度の向上 — @dtakamiya [Zenn](https://zenn.dev/miyan/articles/ai-driven-dev-org-speed-illusion-2026)

> AI コーディングの本質はプロンプトではない。OpenAI・Anthropic の公開事例から読み解く harness engineering — @slate-infra [Zenn](https://zenn.dev/slate_infra/articles/466e9f4561659d)

> エージェントハーネスが整っても、指示する人間が変わらなければ AI は最高性能を出せない — @Thought analyzer [Zenn](https://zenn.dev/analysis/articles/thought-analyzer-cognitive-infrastructure)

### Claude Mythos Preview（前回から継続）

#### 中立

> Anthropic が「強すぎて公開できない」と判断した新モデル。CMS 設定ミスで存在が発覚 — @ぴーなっつ [Zenn](https://zenn.dev/aiforall/articles/b14c5956f9542e)

> 「SaaS 死す」再燃。Mythos が照らし出すソフトウェア業界の断層線 — @hmy8727 [Qiita](https://qiita.com/hmy8727/items/144711c4edf5a7ee19f1)

### Claude API 1M コンテキストベータ廃止（前回から継続）

#### Tips

> Claude API 1M コンテキストベータ廃止ガイド。4/30 期限の移行チェックリスト — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/187-claude-api-1m-context-migration-guide)

### Claude Code worktree

#### Tips

> Claude Code の worktree オプションは使えるのか？業務で試した所感とおすすめ設定。使いどころを選ぶ機能 — @kenshin [Zenn](https://zenn.dev/dely_jp/articles/52db2789787bff)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
