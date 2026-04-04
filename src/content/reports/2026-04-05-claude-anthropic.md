---
title: "v2.1.92でBedrock対話型セットアップとコスト内訳表示を追加"
summary: "Claude Code v2.1.92がリリースされ、Bedrockセットアップウィザードや/costのモデル別内訳表示など企業利用を意識した機能を追加。コミュニティではハーネスエンジニアリングの体系化、トークンコスト最適化、40〜50人月規模のAI駆動開発事例が話題に。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-05
features:
  - "forceRemoteSettingsRefresh ポリシー設定"
  - "Bedrock対話型セットアップウィザード"
  - "/cost のモデル別・キャッシュヒット内訳表示"
  - "/release-notes インタラクティブ版ピッカー"
  - "Remote Controlセッション名のホスト名プレフィックス"
  - "Proユーザー向けプロンプトキャッシュ期限切れ通知"
  - "Writeツール差分計算の高速化"
  - "Linuxサンドボックス apply-seccomp同梱"
---

## 公式アップデート

### Claude Code v2.1.92（2026-04-04）

前日のv2.1.91に続く連続リリース。エンタープライズ向けポリシー管理の強化とBedrock統合の簡素化が中心。

**新機能:**

- **`forceRemoteSettingsRefresh`ポリシー設定**: CLI起動時にリモート管理設定の強制再取得を行い、取得失敗時は起動を中止するfail-closed動作を追加。組織のセキュリティポリシー適用を確実にする
- **Bedrock対話型セットアップウィザード**: ログイン画面の「3rd-party platform」からAWS認証・リージョン設定・クレデンシャル検証・モデル固定をガイド付きで設定可能に
- **`/cost`のモデル別・キャッシュヒット内訳表示**: サブスクリプションユーザー向けにコスト詳細の可視化を追加
- **`/release-notes`インタラクティブ版ピッカー**: バージョンを選択してリリースノートを閲覧可能に変更
- **Remote Controlセッション名のホスト名プレフィックス**: デフォルトでホスト名が接頭辞に付与（例: `myhost-graceful-unicorn`）。`--remote-control-session-name-prefix`でオーバーライド可能
- **Proユーザー向けプロンプトキャッシュ期限切れ通知**: セッション復帰時に次のターンで送信される未キャッシュトークン数をフッターに表示

**パフォーマンス改善:**

- **Writeツール差分計算の高速化**: タブや`&`・`$`を含む大規模ファイルで60%高速化

**プラットフォーム対応:**

- **Linuxサンドボックスapply-seccomp同梱**: npm・ネイティブ両ビルドでunixソケットブロッキングを復元

**バグ修正:**

- tmuxウィンドウのkill/renumber後にサブエージェント生成が「Could not determine pane count」で恒久的に失敗する問題を修正
- prompt-type Stopフックで小さい高速モデルが`ok:false`を返した際に誤って失敗する問題を修正
- ストリーミングで配列/オブジェクトフィールドがJSON文字列として出力された際のツール入力バリデーション失敗を修正
- 拡張思考が空白のみのテキストブロックを生成した際のAPI 400エラーを修正
- オートパイロットのキー押下やフィードバックアンケートの誤送信を修正
- フルスクリーンモードでの「esc to interrupt」ヒント表示の競合を修正
- Homebrewインストールの更新プロンプトがリリースチャネルと一致しない問題を修正
- 複数行プロンプトでの`ctrl+e`動作の修正
- フルスクリーンモードでスクロールアップ時に同一メッセージが2箇所に表示される問題を修正（iTerm2、Ghostty等）
- アイドル復帰時の「/clear to save X tokens」がセッション累計トークンを表示していた問題を修正
- プラグインMCPサーバーが未認証のclaude.aiコネクタと重複した際に「connecting」のまま停止する問題を修正

**その他の変更:**

- `/tag`コマンドを削除
- `/vim`コマンドを削除（vimモードの切替は`/config` → Editor modeから）

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.92)

## コミュニティの反応

### Bedrock対話型セットアップウィザード

#### ポジティブ

> Claude Code v2.1.92でBedrockセットアップウィザードが追加され、認証からモデル選択まで対話形式でガイドするため企業導入のハードルが大幅に低下した — @shima0hide [X](https://x.com/i/status/2040264530895446088)

> AWS認証・リージョン設定・モデル固定をステップガイドで簡素化。Bedrock統合のセットアップが大幅に楽になった — @kei31ai [X](https://x.com/i/status/2040268664138866968)

> ログイン画面の「3rd-party platform」からガイド付きで設定可能に — @oikon48 [X](https://x.com/i/status/2040279571464171788)

### /cost のモデル別・キャッシュヒット内訳表示

#### ポジティブ

> /costコマンドでモデル別・キャッシュヒット内訳が表示されるようになり、APIコストの高い箇所を特定できて非エンジニア経営者にとって非常に助かる — @Tomoshibi1982 [X](https://x.com/i/status/2040310917544784227)

> コスト可視化の改善をポイントとしてリリースを解説 — @AIPlus_Findy [X](https://x.com/i/status/2040355555127296322)

### プロンプトキャッシュの問題と対策

#### ネガティブ

> Claude Codeのトークンが異常に速く減るのはprompt cacheのバグが原因で、セッション再開時に大量トークン消費が発生。Anthropicが最優先調査中 — @kawai_design [X](https://x.com/i/status/2038932649079918695)

> Claude Codeがすぐquota切れになるのはキャッシュバグのせいらしく、トークン返してほしい — @tkng [X](https://x.com/i/status/2039249552197451959)

#### Tips

> standaloneバイナリにキャッシュ無効化バグ2種があり、APIコスト20倍リスク。回避策はnpm経由（`npx @anthropic-ai/claude-code`）で実行。`--resume`もキャッシュを壊すので注意 — @OMOUMAMA_AI [X](https://x.com/i/status/2038848485592879433)

> `npx @anthropic-ai/claude-code`を使えばクリーンなnpmパッケージが動き、キャッシュ正常化でトークン使用が通常に戻る — @JeremyNguyenPhD [X](https://x.com/i/status/2039863570494808170)

### ハーネスエンジニアリングの体系化（前回から継続）

#### Tips

> CLAUDE.md・hooks・permissions・memory・subagentsの設定群を「ハーネス」として体系的に設計・監査するスキルを作成。何から手をつけるか迷う人向けの出発点 — @Kosk [Zenn](https://zenn.dev/kosk_t/articles/claude-code-harness-audit-skill)

> CLAUDE.mdを30行以内に収める分割パターン。プロジェクトルートには「方針とリンク」だけ置き、詳細は別ファイルに分離するTerraform事例 — @ojt [Zenn](https://zenn.dev/ojt/articles/claude-md-rule-design-terraform)

> Claude Codeが同じミスを繰り返す問題に対し、エラー発生時に自動でCLAUDE.mdを書き換えるフィードバックループを構築 — @playpark [Zenn](https://zenn.dev/playpark/articles/ai-agent-learn-from-failure)

### トークンコスト最適化（前回から継続）

#### Tips

> トークン節約とコンテキスト記憶のトレードオフを分析し、外部ファイルへの記憶の永続化戦略を提案。/clearの頻繁な実行がもたらす文脈喪失への対策 — @heki1224 [Zenn](https://zenn.dev/heki1224/articles/4fe703f186c5d7)

> フロントマターの有無でトークン消費がどれくらい変わるかを実測。意外な結果が得られた検証記事 — @cti1650 [Zenn](https://zenn.dev/cti1650/articles/claude-code-frontmatter-token-measurement)

### AI駆動開発の大規模事例

#### ポジティブ

> Claude Codeを使ってSalesforceの2GPパッケージ2本（勤怠管理・工数管理）を開発。40〜50人月規模を1人1ヶ月・1日数時間で実装からレビューまで完了。「コーディングエージェントとの開発で本当に必要だったもの」を整理 — @kei [Zenn](https://zenn.dev/kei1110/articles/f151f56242df33)

> 1行もコードを書かずにGo+React構成の道の駅管理ツールを開発。コーディングエージェントにどこまで任せられるかを実践検証 — @U Akihiro [Zenn](https://zenn.dev/u_akihiro/articles/9381d3c824070b)

> Claude Codeに弥生会計1年分の入力を実行させた事例。決算作業のAI活用可能性を示す — @だら [Zenn](https://zenn.dev/dala/articles/claude-code-kessan)

### Claude Code活用パターン

#### Tips

> Claude Code × Unity CLI Loopでチュートリアルの回帰テストを自動化。初回起動からボス戦までのE2Eテストを丸ごとAIに委託 — @星影 [Zenn](https://zenn.dev/unsoluble_sugar/articles/2a1f9e08ac9980)

> 個人開発のレビューをClaude Codeのスキル機能で厳格化。複数視点からのレビューとレビュー同士の比較・検証の仕組みを構築 — @malo [Zenn](https://zenn.dev/malo1313/articles/debae1dd501c08)

> GA4 MCPを活用し、開発→分析→改善のサイクルをClaude単体で回す試み — @niikun [Zenn](https://zenn.dev/niikun/articles/be21eb56f67b71)

> CC Hooksで品質ガードレールをコードで自動化する実践ガイド — @SeckeyJP [Qiita](https://qiita.com/SeckeyJP/items/b593f60a90a48a492c27)

> AIがAIのコードをレビューする時代。CC Code Review活用ガイド — @SeckeyJP [Qiita](https://qiita.com/SeckeyJP/items/b1ef8665ef53f7c229e0)

### AIハーネスOSSの比較

#### Tips

> superpowers・TAKT・ECC・oh-my-claudecodeの4つのAIハーネスOSSを比較検証し、TAKTを採用した経緯と実装したpieceを整理 — @purple [Zenn](https://zenn.dev/purple_matsu1/articles/20260402-takt-adoption)

### ローカルLLMのサブエージェント活用

#### Tips

> Gemma4-31BをQLoRAファインチューニングし、日本語エージェント型コーディングに特化したモデルを作成。Claude Codeのローカルサブエージェントとして活用し、APIトークン消費を抑制 — @tsunamayo [Zenn](https://zenn.dev/tsunamayo7/articles/gemma4-31b-ja-agent-coder-qlora-benchmark)

### Claude Codeの社会的インパクト

#### 中立

> フリーランスエンジニアがClaude Code導入後に感じた恐怖。「コードが書ける」ことが飯の種だった30歳エンジニアの3ヶ月後の変化 — @moumu [Zenn](https://zenn.dev/moumu_pure/articles/2026-04-04-claude-code-engineer-fear)

> 自律型AIの普及で人間の役割がどう変わったか。73%の開発者がAIコーディングツールを毎日使用しているデータをもとに考察 — @Thought analyzer [Zenn](https://zenn.dev/analysis/articles/thought-analyzer-autonomous-ai)

### Claude Desktop拡張

#### Tips

> Claude DesktopのCodeタブにリアルタイムのコンテキスト使用量とレートリミット状況を表示する拡張「CCDEX」を作成 — @Saqoosha [Zenn](https://zenn.dev/saqoosha/articles/ccdex-claude-desktop-context-indicator)

### Claude Codeソースコード流出事件（前回から継続）

#### 中立

> .npmignoreの`*.map`1行の記入漏れが51万2千行の流出を引き起こした教訓。安全構造は最初から設計すべき — @M-Tokuni [Zenn](https://zenn.dev/tokuni/articles/06b137f714f964)

### Claude Mythos / Capybaraリーク（前回から継続）

#### 中立

> Claude Mythosのリーク文書を分析し、AGIの始まりかを考察。Opus 4.6を「劇的に」上回る性能とされる — @kanase [Zenn](https://zenn.dev/kanase/articles/claude-mythos-agi)

### MCP連携

#### Tips

> Claude MCPサーバーをHono + Cloudflare Workersで実装。stdioとStreamable HTTP両対応 — @scrpgil [Zenn](https://zenn.dev/scrpgil/articles/a770cb68a63826)

> Claude Desktop・coworkのConnectorsの申請手順を日本語で初めて解説 — @ytakehir [Zenn](https://zenn.dev/ytakehir/articles/f08090e0adc326)

### DESIGN.mdによるAIデザイン指定

#### Tips

> GoogleがStitchプロジェクトで策定したDESIGN.mdをClaude Codeと組み合わせてデモサイトを作成。AIにデザインを指定する手法として紹介 — @miruky [Qiita](https://qiita.com/miruky/items/a6312c14e6352376ec00)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
