---
title: "v2.1.181で/config構文追加、ソウルオフィス開設"
summary: "Claude Code v2.1.181で/config key=value構文・プレゼンスファイル・auto-retry改善等を追加。Anthropicが韓国ソウルにオフィスを開設しNAVER等と提携。Project Fetch Phase TwoでOpus 4.7がロボット犬タスクで人間の20倍速を達成。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-19
features:
  - "/config key=value構文"
  - "CLAUDE_CLIENT_PRESENCE_FILE環境変数"
  - "sandbox.allowAppleEvents設定"
  - "バンドルBunランタイム1.4アップグレード"
  - "ストリーミング行単位表示"
  - "auto-retry改善（thinking中の接続断）"
  - "サブエージェントパネル改善"
  - "プロンプトキャッシュ修正"
  - "Write/Edit ネットワークドライブ修正"
  - "Anthropicソウルオフィス開設"
  - "Project Fetch Phase Two"
codex_review: "派手なのはソウル進出とロボット犬だが、私には`/config`とauto-retry改善のほうが効く。AI開発は結局こういう摩擦低減の積み上げで覇権が決まるので、地味だが重要だ。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.181（2026-06-17）

新機能・改善・バグ修正を多数含むリリース。

**新機能:**

- **`/config key=value`構文**: プロンプトから任意の設定を直接変更可能に。インタラクティブモード、`-p`モード、Remote Controlすべてで動作（例: `/config thinking=false`）
- **`CLAUDE_CLIENT_PRESENCE_FILE`環境変数**: マーカーファイルを指定すると、マシン在席中のモバイルプッシュ通知を抑制
- **`sandbox.allowAppleEvents`設定**: macOSサンドボックス内でApple Eventsの送信を許可するオプトイン設定

**改善:**

- バンドルBunランタイムを1.4にアップグレード
- ストリーミング改善: 長い段落がline breakを待たず行単位で表示されるように
- auto-retry改善: thinking中のAPI接続断が自動リトライに（「Connection closed while thinking」エラーの解消）
- サブエージェントパネル改善: アイドル状態のサブエージェントが30秒後に自動非表示、リスト上限5行＋スクロールヒント、キーボードヒントをフッターに表示
- MCP OAuth ブラウザページのビジュアルスタイル統一と成功時の自動クローズ
- フルスクリーンモードのURL開放がCmd+click / Ctrl+clickに変更（ネイティブターミナル準拠）

**バグ修正:**

- プロンプトキャッシュがカスタム`ANTHROPIC_BASE_URL`およびFoundryで効かない問題を解消（リクエストごとの認証トークン変更が原因）
- Write/Editがネットワークドライブやクラウド同期フォルダで0バイト/切り詰めファイルを生成する問題を解消
- macOSで`open`、`osascript`、ブラウザ認証がエラー-600で失敗する問題を修正（Apple Events entitlement追加）
- 起動時リグレッション修正（v2.1.169由来、MCPサーバー未設定時に~120msの遅延）
- ネットワーク劣化時に起動が最大15秒ブロックされる問題を修正
- `.claude.json`に破損したnullプロジェクトエントリがある場合の起動クラッシュを修正
- macOS TUIがSpotlight再インデックス中にフリーズする問題を修正
- フォアグラウンドサブエージェントの無制限ネストチェーンを修正（バックグラウンドと同じ5階層制限に）
- `/recap`とモデル切り替え後の会話フォークが前のモデルを使う問題を修正
- AWS `awsCredentialExport`の短寿命クレデンシャルで毎分リフレッシュが発生する問題を修正
- その他多数のUI・UXバグ修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.181)

### Anthropicソウルオフィス開設（2026-06-17）

AnthropicがNAVER、Samsung SDS、LG CNSと提携し、韓国ソウルにオフィスを開設。韓国科学技術情報通信部とAI安全研究での合意も発表。

### Project Fetch Phase Two（2026-06-18）

Anthropic Researchが「Project Fetch Phase Two」を公開。Claude Opus 4.7がロボット犬タスクにおいて、人間チーム最速記録の20倍の速度を達成したと報告。

## コミュニティの反応

### Claude Code v2.1.181の新機能

#### Tips

> Claude Code v2.1.181 の新機能・バグ修正まとめ ─ /config 構文と重大バグ修正。/config構文、プレゼンスファイル、プロンプトキャッシュ修正の3点を重点解説 — @picnic [Qiita](https://qiita.com/picnic/items/5dbedcdd25053ee70eb5)

### スキル設計とハーネスエンジニアリング

スキルの書き方・設計パターンに関する知見共有が活発。Matt Pocock Skills v1.0.0の体系分析、デザインシステム向けスキル精度向上、CLAUDE.mdの肥大化問題など多角的な議論が展開。

#### Tips

> AIスキル設計の6つの罠 — Matt Pocock Skills v1.0.0 が体系化した「予測可能なAIマニュアル」の書き方。GitHub 133kスターのスキルセットを分析し、「予測可能性」という1原則に集約 — @MAAAAAAAAAAA [Zenn](https://zenn.dev/417/articles/masakazu-matt-pocock-skills-design-20260618)

> デザインシステムのskillの精度が上がった8つの方法。デザイントークンを扱うスキルの改善手法をPKSHAデザイナーが実践報告 — @清水はるか [Zenn](https://zenn.dev/pksha/articles/7a7db5c105f396)

> ハーネスを盛りすぎてAIが動かなくなった日: 最小構成で見えた4つの本質。800行のCLAUDE.mdが無視された経験から最小構成の重要性を解説 — @井本 賢 [Zenn](https://zenn.dev/kenimo49/articles/harness-overengineering-minimal-4-essentials)

> AIコードレビューは「コードで返す」と速くなる。レビュー精度ではなく出力形式の変更で速度が改善した事例 — @Fukutaro Hori [Zenn](https://zenn.dev/uzero_fktrhori/articles/1cc1209ce61e53)

### マルチエージェント・サブエージェント運用

TeamCreate廃止への対応や、マルチエージェント構成の腐敗パターン、エージェントチームのパッケージマネージャ等の記事が登場。

#### Tips

> Claude CodeのTeamCreateが廃止され、Plan Modeが変わったのでワークフローを見直す。v2.1.178でTeamCreateが廃止された後の運用再構築 — @nishimura [Zenn](https://zenn.dev/n314/articles/6becd34ddbe6ad)

> Claude Codeのマルチエージェント組織は、何もしなくても腐っていく——2つの腐敗パターン。CLAUDE.md増殖と参照切れPlaybookの実例 — @saitoko [Zenn](https://zenn.dev/tottoko_hamu/articles/2026-06-08-090000)

> 1コマンドでClaude Codeが開発チームになる「ccteams」を作った。エージェントチームのパッケージマネージャとして再利用可能な構成を提供 — @yui [Zenn](https://zenn.dev/yui/articles/4f54a98ad94fe5)

> Claude Code サブエージェントのネスト機能で .claude/agents/ の定義が効いた話。v2.1.172のネスト機能と役割ベースルールの実践 — @okkun0524 [Zenn](https://zenn.dev/genda_jp/articles/16d35ffa464d65)

### Claude Code運用・トークン最適化

トークン消費の削減、ツール呼び出し漏れバグのフック対策、ステータスバーカスタマイズなど実用的なノウハウが共有されている。

#### Tips

> Claude Codeを安く使うコツは "LLMに探させない" こと。CLAUDE.mdに4つの設定を加えてGlob/Grepの無駄な探索を抑制 — @みどり [Zenn](https://zenn.dev/midori/articles/2d0caf37e6bdfb)

> Claude Code のツール呼び出し漏れバグをフックで検知・自動リカバリする。二層防御（予防＋リカバリ）のフック構成を解説 — @Seiji Kohara [Zenn](https://zenn.dev/seijikohara/articles/claude-code-leaked-toolcall-hook)

> Claude Codeのステータスバーを自分好みにカスタマイズした。statusLine設定で/usage不要の常時監視環境を構築 — @Takashi Makino [Zenn](https://zenn.dev/makkyemmanuel/articles/zenn-article-claude-code-statusline-powerline)

> [Claude Code] SkillとPluginが内部でどう読み込まれているのか、実際のファイルを覗いてみた。キャッシュディレクトリとPlugin配布リポの構造を直接確認 — @よっちゃん [Zenn](https://zenn.dev/ncdc/articles/d39bf5c31e0fe8)

### Opus 4.8品質議論・代替環境への移行

Fable/Mythos停止後のOpus 4.8品質劣化の考察や、OpenCode + Ollama Cloudへの移行ガイドなど、Anthropicプラットフォームへの依存リスクを意識した動きも見られる。

#### Tips

> Claude Opus 4.8は本当にnerfされたのか：Fable/Mythos停止後に品質が劣化した可能性を考察する。effortレベルの変更やモデル品質の変化を検証 — @ko [Zenn](https://zenn.dev/oqamura/articles/9925c88343cd3c)

> Claude Code を脱出する — OpenCode + Ollama Cloud への実践移行ガイド。Fable 5停止・Opus 4.8品質劣化・API障害を受けた移行体験記 — @狼煙 [Zenn](https://zenn.dev/vtf/books/opencode-ollama-cloud-henyo)

> マルチAIを1つのコードで切り替える — OpenAI / Claude / Gemini をフェイルオーバーさせる実装パターン。単一プロバイダ依存のリスクを回避する抽象設計 — @kairos [Zenn](https://zenn.dev/kairosai/articles/d32bb069e38eef)

### メタハーネスとAIワークフロー設計

Databricks Data + AI Summit 2026で紹介されたOmnigentをきっかけに、エージェントの上に乗る「メタハーネス」の概念整理が進んでいる。

#### Tips

> AIエージェントの「メタハーネス」とは何か？主要フレームワークを比較する。Omnigentを中心にメタハーネスの系譜を整理 — @Kento Nishio [Zenn](https://zenn.dev/genda_jp/articles/60af4b2aa074ce)

> 中断しても続きから動く — AIワークフローのチェックポイント設計。flowsmithの「セッションはいつ死んでもいい」前提の設計記録 — @KIKAIKAYA [Zenn](https://zenn.dev/kikaikaya/articles/flowsmith-checkpoint-resume)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
