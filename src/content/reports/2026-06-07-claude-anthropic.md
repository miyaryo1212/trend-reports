---
title: "Claude Code v2.1.166でfallbackModel追加・Project Glasswing発表"
summary: "Claude Code v2.1.166がリリースされ、フォールバックモデル設定やdeny ruleのglobパターン対応等が追加された。AnthropicはProject Glasswing（Claude Mythos Previewによるサイバーセキュリティ共同プログラム）を発表。コミュニティでは6/15課金変更対応やDynamic Workflows活用が引き続き活発。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-07
features:
  - "Project Glasswing / Claude Mythos Preview"
  - "Claude Code v2.1.166 fallbackModel設定"
  - "Claude Code v2.1.166 deny ruleでのglobパターンサポート"
  - "Claude Code v2.1.166 クロスセッションメッセージングの強化"
  - "Claude Code v2.1.166 thinking無効化サポート"
  - "Claude Code v2.1.166 フォールバックモデルでの自動リトライ"
  - "Claude Code v2.1.166 claude updateのバージョン表示改善"
  - "Anthropic Research 81K Interviews"
  - "Anthropic Research Project Deal"
codex_review: "Glasswingは派手だが、私にはv2.1.166のfallbackModelと権限まわりの詰めのほうが効いて見える。障害と課金変更が続く局面では、華やかな研究発表より運用の粘り強さが競争力になる。"
codex_importance: 4
---

## 公式アップデート

### Project Glasswing / Claude Mythos Preview

Anthropicがセキュリティ特化の未公開フロンティアモデル「Claude Mythos Preview」を活用した共同サイバーセキュリティプログラム「Project Glasswing」を発表。主要OS・ブラウザ等の重大な脆弱性を自律的に発見・修正することを目的とし、AWS、Apple、Google、Microsoft等12社が参加する防衛的コンソーシアムとして構成されている。Claude Mythos Previewは数千件のゼロデイ脆弱性を数週間で発見できる能力を持つが、悪用リスクから一般公開はされていない。

### Claude Code v2.1.166（6月6日リリース）

可用性向上とセキュリティ強化を中心とした中規模アップデート。

**新機能**
- `fallbackModel` 設定が追加。プライマリモデルが過負荷・利用不可の場合に最大3つのフォールバックモデルを順に試行する。`--fallback-model` が対話セッションにも適用されるように
- deny ruleのツール名位置でglobパターンをサポート。`"*"` で全ツールを拒否可能に。allow ruleは非MCPのglobを拒否し、deny ruleの不明ツール名は起動時に警告
- クロスセッションメッセージングを強化。`SendMessage` で中継されるメッセージがユーザー権限を持たなくなり、権限要求の中継をブロック。autoモードでも中継された権限要求をブロック
- `MAX_THINKING_TOKENS=0`、`--thinking disabled`、モデル別トグルでデフォルトthinkingモデルの思考を無効化可能に（サードパーティプロバイダーは変更なし）
- APIが予期しない非リトライエラーを返した場合、フォールバックモデルで1回自動リトライ。認証・レート制限・リクエストサイズ・通信エラーは即時表示
- `claude update` がダウンロード前にターゲットバージョンを表示するように変更
- `claude agents` でURLを入力するとそのURLを含むセッションにフィルター可能に

**バグ修正**
- 処理不能な画像送信時の「image could not be processed」エラーの繰り返しと余分なトークン使用を修正
- リモートセッションがワーカー登録中の一時的なバックエンド障害で永続的にスタックする問題を修正
- JetBrains IDE（IntelliJ、PyCharm、WebStorm等）2026.1以降でのフリッカーを同期出力有効化により修正
- Kittyキーボードプロトコル（WezTerm、Ghostty、kitty）でShift+非ASCII文字が無視される問題を修正
- Windows PowerShellコマンド検証がタイムアウトを超過してハングする問題を修正
- macOSでデーモン終了後に `claude --bg-pty-host` プロセスがCPU 100%で回る問題を修正
- ボイスモード、マネージド設定、`claude agents` 関連の複数のバグを修正

### Claude Code v2.1.167（6月6日リリース）

バグ修正と信頼性改善のマイナーリリース。

[GitHub Releases v2.1.166](https://github.com/anthropics/claude-code/releases/tag/v2.1.166) / [v2.1.167](https://github.com/anthropics/claude-code/releases/tag/v2.1.167)

### Anthropic Research: 81K Interviews

Anthropic Researchが「81K Interviews」を公開。159カ国・70言語の80,508人のClaudeユーザーに対する大規模インタビュー調査レポート。

### Anthropic Research: Project Deal

AIエージェントがマーケットプレイス取引を代行する実験の研究論文を公開。

## コミュニティの反応

### Claude Code v2.1.166 リリース

#### Tips

> Claude Code v2.1.166: fallbackModel設定・セキュリティ強化・バグ修正まとめ — @picnic [Qiita](https://qiita.com/picnic/items/d13c32b470c1f5bd3361)

### Project Glasswing / Claude Mythos Preview

#### Tips

> Claude Mythos Preview入門 — AIがゼロデイ脆弱性を自律発見するProject Glasswingの仕組みを解説 — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/227-claude-mythos-glasswing-guide)

### 6/15 課金体系変更（前回から継続）

コミュニティで引き続き最も注目されているトピック。`claude -p`（ヘッドレス）/ Agent SDK経由の利用がサブスク枠とは別のPool 2に分離される6月15日の変更まで残り8日。

#### ネガティブ

> 6月15日、Claude Code の claude -p・cron・CI が別枠に——残り12日でやる5分の棚卸し。約4,039件の反応を分析し影響の構造を整理 — @ゆるくさ [Zenn](https://zenn.dev/yurukusa/articles/june-15-pool2-cliff-13days-2026)

#### Tips

> 「Claude 6/15改定の課金回避を思いついたが、規約違反でBANリスクなので供養」（前回から継続） — @FMS [Zenn](https://zenn.dev/f_monsoon/articles/20260605-claude-taboo)

> claude -pの課金回避に、自作IDEから対話セッションへプロンプトをPTY経由で自動注入する仕組みを構築（前回から継続） — @瑠璃 [Zenn](https://zenn.dev/ruri/articles/claude-p-billing-ide-prompt-inject)

### Claude API障害

#### ネガティブ

> Claude API障害多発期間（5/25〜6/6）の全インシデント解説と開発者向け対策。約2週間で20件以上のインシデントが記録 — @picnic [Qiita](https://qiita.com/picnic/items/e4657d2c355f5db0d062)

### Dynamic Workflows・ultracode（前回から継続）

#### Tips

> Claude Code 動的ワークフロー完全ガイド。仕組み・起動3方法・ユースケース6領域・設計パターン6種を網羅的に解説 — @まさやん [Zenn](https://zenn.dev/masayan1126/articles/claude-code-dynamic-workflows-complete-guide)

> ultracodeでアイデア出しを安く回す。workflowコストを実測で約7割削減する手法。単価・数・キャッシュの3レバーを切り分け — @Tom [Zenn](https://zenn.dev/marvelousu/articles/claude-dynamic-workflows-cost)

> Claude Opus 4.8のDynamic Workflowsで、副業ブログの「ネタ切れ＋多媒体展開」を1プロンプトに統合する設計案 — @じゅん [Zenn](https://zenn.dev/jun_eng/articles/4cf7f715f1dc3f)

### Enterprise運用・コスト管理

#### ネガティブ

> Claude Enterpriseで1ヶ月5億ドルの請求事例。利用上限未設定が原因（前回から継続） — @ShintaroAmaike [Zenn](https://zenn.dev/acntechjp/articles/fa8046da29fb34)

#### Tips

> Claude Codeのトークン消費を可視化。キャッシュの仕組みと無駄な消費パターンを分析 — @yosuke.yasuda [Zenn](https://zenn.dev/acntechjp/articles/claude-code-cost-history-bloat)

### AI駆動開発・実践活用

#### Tips

> Claude Codeでエージェント編集部を作ったら、この春Zenn Book 3冊書けた。CLAUDE.mdにwriter/reviewer/readerを定義し2,185コミット・132本の記事を生産 — @saitoko [Zenn](https://zenn.dev/tottoko_hamu/articles/2026-06-06-232700)

> Claude Codeで本格開発してわかった、エンジニアに残る仕事。2ヶ月で日本株自動売買システムを構築した実録 — @ゆーいち [Zenn](https://zenn.dev/yuichi1996/articles/b32b36a9ccaedd)

> Claude Code と Codex を使い比べて見えた設計思想の違い。Opus 4.7とGPT-5.5の振る舞いの差を公式情報と実観測から考察 — @ターク [Zenn](https://zenn.dev/tark_ann/articles/e8b09c6db73bfb)

> プロトタイプのClaude Code、磨き上げのCodex。2026年6月断面での本質的なリレー術 — @Hiromitsu Jin [Zenn](https://zenn.dev/jinsights/articles/b85f8eb07ae3d2)

> Claude CodeでAI駆動開発、9工程の仕組みと成果を全公開（前回から継続） — @まさやん [Zenn](https://zenn.dev/masayan1126/books/ai-driven-dev-claude-code-outcomes)

### Skills・Hooks・設計パターン

#### Tips

> はじめよう。ハーネスエンジニアリング。Claude Code用の.claude/配下に汎用的なドキュメントを整備する手法 — @ほさざえもん [Zenn](https://zenn.dev/hosazaemoooon/articles/3cd18d89ade8c3)

> Claude Codeの全機能を「飲食店の厨房」で完全理解する。6つのレイヤーに分類して比喩で整理 — @Shuhei Fukami [Zenn](https://zenn.dev/blacook/articles/claude-code-kitchen-analogy)

> permissions.deny を書いたのに効いていなかった。Claude Codeで安全床を作る3つの落とし穴 — @たけだ [Zenn](https://zenn.dev/taketakekaho/articles/2e35f53184f336)

> AIエージェントに仕事を任せるために、AGENTS.mdを「就業規則」にした。建設現場20年の経験から6つの型を提示 — @takayoshi [Zenn](https://zenn.dev/takayoshioyama/articles/d386faa8bbb57f)

> Claude Codeを自律エージェント基盤として運用する — context rotから逆算する設計。コンテキストウィンドウの有限性を軸にベストプラクティスを体系化 — @Darman [Zenn](https://zenn.dev/yutabeee/articles/claude-code-autonomous-agent-platform)

### 認定試験・教育

#### Tips

> Claude Certified Architect – Foundations（CCAF）に757点で合格。勉強法・試験傾向・判断基準をまとめ — @Shuhei Fukami [Zenn](https://zenn.dev/blacook/articles/ccaf-exam-report)

> Anthropic Partner Bootcampに参加した件。AIエージェント設計の6原則を実機ハンズオンで習得 — @Shuhei Fukami [Zenn](https://zenn.dev/blacook/articles/agent-engineering-principles)

> Claude Code に隠れた公式の対話型レッスン /powerup。全10レッスンを試した本音レビュー — @ぐで象 [Zenn](https://zenn.dev/gudezou/articles/d5c136ba2b52dc)

### ツール・エコシステム

#### Tips

> 「Herdr」を使い始めたら、もう他のターミナルには戻れなくなった。Rustで構築されたエージェントマルチプレクサの紹介 — @Nao8 [Zenn](https://zenn.dev/dragon1208/articles/45708cc45a7a7c)

> cmux で AI エージェントの待機時間を眺める「Pixel Office」を作った。VS Code拡張Pixel AgentsのcmuxターミナルCLI版 — @あたに [Zenn](https://zenn.dev/atani/articles/cmux-pixel-office)

> GitHub Copilot の従量課金を実測。Claude Code・Codexと同一モデルで比較。Opus 4.8はCopilot経由で1.5〜2.0倍コスト高 — @Nori [Zenn](https://zenn.dev/nnakapa/articles/lab-22-github-copilot-ai-credits)

> VPC閉域（エアギャップ）環境のcode-serverでClaude CodeをBedrock経由で使う手順解説 — @Shuhei Fukami [Zenn](https://zenn.dev/blacook/articles/claude-code-bedrock-airgap-vpc)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
