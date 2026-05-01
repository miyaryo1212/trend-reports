---
title: "Claude Code v2.1.126リリース、project purgeやOAuth改善など多数"
summary: "Claude Code v2.1.126がリリースされ、claude project purgeコマンド、/modelピッカーのゲートウェイ対応、OAuth手動入力対応など多数の新機能が追加。コミュニティではセキュリティ設計、スキル運用、Plan Mode活用など実践的な知見共有が活発。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-02
features:
  - "[Claude Code v2.1.126] claude project purge コマンド: プロジェクトのClaude Code状態（トランスクリプト、タスク、ファイル履歴、設定）を一括削除する新コマンド"
  - "[Claude Code v2.1.126] /model ピッカーのゲートウェイ対応: ANTHROPIC_BASE_URLが指すゲートウェイの/v1/modelsエンドポイントからモデル一覧を取得可能に"
  - "[Claude Code v2.1.126] --dangerously-skip-permissions の拡張: .claude/、.git/、.vscode/、シェル設定ファイル等への書き込みプロンプトもバイパス可能に"
  - "[Claude Code v2.1.126] claude auth login のOAuthコード手動入力対応: ブラウザコールバックがlocalhostに到達できない環境（WSL2、SSH、コンテナ）でターミナルにコード貼り付けでログイン可能に"
  - "[Claude Code v2.1.126] skill_activated OpenTelemetryイベント: ユーザーのスラッシュコマンドでもイベント発火、invocation_trigger属性を追加"
  - "[Claude Code v2.1.126] Auto modeスピナー改善: パーミッションチェック停滞時にスピナーが赤色に変化"
  - "[Claude Code v2.1.126] Windows PowerShell検出強化: Microsoft Store、MSI、.NET global tool経由のPowerShell 7を検出可能に"
  - "[Claude Code v2.1.126] Windows PowerShellプライマリシェル化: PowerShellツール有効時にBashではなくPowerShellをデフォルトシェルとして使用"
  - "[Claude Code v2.1.126] Read toolマルウェア評価リマインダー削除: レガシーモデルでの誤拒否や不要なコメントの原因だったリマインダーを除去"
  - "[Claude Code v2.1.126] セキュリティ修正: allowManagedDomainsOnly/allowManagedReadPathsOnlyがsandboxブロックなしの上位設定ソースで無視される問題を修正"
  - "[Claude Code v2.1.126] 画像貼り付け修正: 2000px超の画像でセッションが壊れる問題を修正、貼り付け時に自動ダウンスケール"
  - "[Anthropic Research] Claudeの個人的ガイダンスに関する研究: 100万件の会話分析により、約6%がガイダンスを求めていることを発見。Opus 4.7とMythos Previewで人間関係相談の過度な同意をほぼ半減"
codex_review: "派手さは薄いが、OAuth手動入力やproject purgeのような“詰まり”を潰す更新が多く、実務ツールとしての成熟を感じる。逆に権限スキップ拡張は利便性と引き換えに、運用の雑さを増幅しかねず少し過剰評価気味だ。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.126（2026-05-01）

多数の新機能追加とバグ修正を含むリリース。

**新機能:**

- **`claude project purge [path]`** — プロジェクトのClaude Code状態（トランスクリプト、タスク、ファイル履歴、設定エントリ）を一括削除。`--dry-run`、`-y/--yes`、`-i/--interactive`、`--all` オプション対応
- **`/model` ピッカーのゲートウェイ対応** — `ANTHROPIC_BASE_URL` が指すAnthropic互換ゲートウェイの `/v1/models` エンドポイントからモデル一覧を取得可能に
- **`--dangerously-skip-permissions` の拡張** — `.claude/`、`.git/`、`.vscode/`、シェル設定ファイル等への書き込みプロンプトもバイパス（壊滅的な削除コマンドにはセーフティネットを維持）
- **`claude auth login` のOAuthコード手動入力対応** — ブラウザコールバックがlocalhostに到達できない環境（WSL2、SSH、コンテナ）でOAuthコードをターミナルに貼り付けてログイン可能
- **`claude_code.skill_activated` OpenTelemetryイベント** — ユーザーのスラッシュコマンドでもイベント発火。`invocation_trigger` 属性（`"user-slash"`/`"claude-proactive"`/`"nested-skill"`）を追加
- **Auto modeスピナー改善** — パーミッションチェック停滞時にスピナーが赤色に変化し、ツール実行中と区別可能に
- **Windows PowerShell検出強化** — Microsoft Store、MSI（PATHなし）、.NET global tool経由のPowerShell 7を検出
- **Windows PowerShellプライマリシェル化** — PowerShellツール有効時にBashではなくPowerShellをデフォルトシェルとして使用

**改善:**

- ホスト管理デプロイメント（`CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST`）でBedrock/Vertex/Foundryの分析が自動無効化されなくなった
- Read toolのマルウェア評価リマインダーを削除（レガシーモデルでの誤拒否や不要なコメントの原因）

**バグ修正（主要なもの）:**

- **セキュリティ:** `allowManagedDomainsOnly` / `allowManagedReadPathsOnly` が上位設定ソースに `sandbox` ブロックがない場合に無視される問題を修正
- 2000px超の画像貼り付けでセッションが壊れる問題を修正（貼り付け時に自動ダウンスケール、履歴内のオーバーサイズ画像は自動除去・リトライ）
- OAuth関連: タイムアウト・IPv6-onlyコンテナ・localhostコールバック不達の修正、並行クレデンシャル書き込みによるリフレッシュトークン消失の修正
- Mac スリープ復帰後の「Stream idle timeout」エラー修正
- バックグラウンド・リモートセッションでの長いモデル思考中の誤タイムアウト修正
- 日本語/韓国語/中国語テキストのWindows no-flickerモードでの文字化け修正
- Agent SDKでの不正なツール名によるハング修正
- その他多数のUI・プラットフォーム固有の修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.126)

### Claude Code v2.1.123（2026-04-29）

`CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` 設定時にOAuth認証が401リトライループに陥る問題を修正。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.123)

## コミュニティの反応

### claude project purge コマンド

#### ポジティブ

> `claude project purge`コマンドはプロジェクトのトランスクリプト、タスク、ファイル履歴、設定を一括削除可能で、`--dry-run`/`-i`などのオプションが便利 — @oikon48 [X](https://x.com/i/status/2050049899350327309)

> リポジトリの衛生管理に「静かな勝利」。古いセッションをクリーンアップできる — @automate_archit [X](https://x.com/i/status/2050210534314877239)

> AIが過去の古いコードに引きずられないようリセット可能で、実務上極めて重要 — @Ren_Lifestyle_ [X](https://x.com/i/status/2050188290687721927)

> ディスクを食う古いリポジトリのローカル状態を`--dry-run`や`--all`で安全に削除できて便利 — @dmshirochenko [X](https://x.com/i/status/2050198449891483707)

### --dangerously-skip-permissions の拡張

#### Tips

> v2.1.126での拡張により以前保護されていたパスもバイパスされるため、サンドボックスかautoモード使用を強く推奨 — @dani_avila7 [X](https://x.com/i/status/2050044061344538844)

> Yes確認が面倒なので`--dangerously-skip-permissions`ですべてスキップして満足 — @potatobiz1 [X](https://x.com/i/status/2050117604929573122)

### OAuth手動入力対応

#### ポジティブ

> WSL2、SSHセッション、コンテナなどのヘッドレス環境でOAuthコードを貼り付けて認証可能に。長年の不便が解消された — @dmshirochenko [X](https://x.com/i/status/2050209078891135244)

> WSL2/SSH/コンテナ環境でOAuthログインが動作するようになった — @lukashanren1 [X](https://x.com/i/status/2050063201551708537)

### セキュリティ設計・ハーネス

#### Tips

> AIコーディングエージェントをセキュアに使うためのハーネス設計 — AI エージェントに何をさせて何をさせないかを設計するエンジニアリング規律 — @poyo [Zenn](https://zenn.dev/yuzzzn/articles/45626e1ab08e3c)

> セキュアなClaude Code開発環境を考えてみる — コンテナで動かすのが安心感あり、VSCode + devcontainerの組み合わせを解説 — @khaym [Zenn](https://zenn.dev/yamakh/articles/9dad9fd532b10a)

> Claude Codeのセキュリティは PreToolUse hook で決まる — 静的設定の限界とhookによる動的防御を整理 — @コロネ [Zenn](https://zenn.dev/corone/articles/4347bb66d4e9b5)

> 安全装置を盛りすぎたらAI agentが撤退バイアスを発症したので松岡修造で解決した話 — @hrmtz [Zenn](https://zenn.dev/hrmtz/articles/hook-prose-retreat-bias)

### Skills活用・設計パターン

#### Tips

> Matt PocockのClaude Codeスキル集 mattpocock/skills を全部読んだ — リリース後24時間でGitHubトレンド世界1位、スター数2万超 — @soma [Zenn](https://zenn.dev/aiandao/articles/mattpocock-claude-code-skills-zenn-20260501)

> Skillが10個を超えたら読む — JSON契約でAIエージェントの「なぜ壊れたか」を構造化する。95個のSkill運用経験から — @playpark [Zenn](https://zenn.dev/playpark/articles/claude-code-skills-design-patterns)

> Claude Skills（SKILL.md）設計「6法則」と自分の環境を照合したら、2点で先を行っていた話 — @Tadashi_Kudo [Qiita](https://qiita.com/Tadashi_Kudo/items/e0484a0f800b5dca4665)

> Claudeに「気をつけて」を書くのを諦めて、外側から3つ補強した話 — Throughline、Caveat、Spotterの3つのnpmツール — @QuoLu [Zenn](https://zenn.dev/kitepon/articles/claude-augment-trilogy)

### Plan Mode活用

#### Tips

> Plan Mode中心のClaude Code開発手法 — 計画→実装→検証の4フェーズでAIを味方につける。METRの研究でAIツール使用時の完了時間が19%増加していたデータを引用 — @井ノ実 [Zenn](https://zenn.dev/ino_h/articles/2026-05-01-claude-code-plan-mode-workflow)

### vibe codingからagentic engineeringへ

#### Tips

> Karpathyが語るvibe codingからagentic engineeringへの転換点 — Sequoia Capital AI Ascentでの30分対談をまとめ。vibe codingの命名者自身が「プログラマーとして史上最も後れを取っている気がする」と発言 — @soma [Zenn](https://zenn.dev/aiandao/articles/karpathy-vibe-coding-agentic-engineering-20260501)

> AIにコードを任せても壊れない人がやっていること — Matt Pocockの講演「It Ain't Broke」をもとに、ソフトウェアの基礎がAI時代にこそ重要な理由を解説 — @soma [Zenn](https://zenn.dev/aiandao/articles/software-fundamentals-with-ai-20260501)

### トークン消費最適化

#### Tips

> RTK (Rust Token Killer) — AIコーディングアシスタントのトークン消費を最大80%削減するCLIツール — @yamitake [Zenn](https://zenn.dev/yamitake/articles/rtk-token-killer-introduction)

> 自作MCPサーバーのトークン消費を9割削減するTips — MCPの退避パターン — @辻 亮佑（エアークローゼット） [Zenn](https://zenn.dev/aircloset/articles/4c5f49f89db19f)

> Claude Maxで毎月$8,833分使っていた。Pro/Max/APIの境目を実データで割り出した — @koji_麹 [Zenn](https://zenn.dev/kojihq/articles/42addb8f5acd4b)

### Claude Code × クラウド連携

#### Tips

> Claude Code × Amazon Bedrock連携ガイド — AWS上でClaudeを呼び出す実践実装 — @まさ [Zenn](https://zenn.dev/masa1990/articles/claude-code-amazon-bedrock)

> Claude Code MAXプランだけで情報収集エージェントを構築する — Claude Code Routines（スケジュール）を活用 — @taumu（SODA） [Zenn](https://zenn.dev/team_soda/articles/f7e333e502e408)

### エージェント設計・マルチエージェント

#### Tips

> AIエージェントをTeal型組織として動かす Decentralized Multi-Agent System — 命令系統ではなく自律と協調の設計 — @geeknees [Zenn](https://zenn.dev/geeknees/articles/dc49480af6b726)

> PRDを「タスクグラフ」に落とすときに、どこを順序エッジにしてどこを並列に開くかという話 — @zoetaka38 [Zenn](https://zenn.dev/zoetaka38/articles/5beb5aad3e0e34)

> NotionをcanonicalにしてAI開発パイプラインを組んだら踏み抜いた5つの落とし穴 — @zoetaka38 [Zenn](https://zenn.dev/zoetaka38/articles/84241a9e4d6c25)

### Claudeの監査ループ問題

#### ネガティブ

> Claudeに計画書を監査させたら、シーソーが止まらなかった話 — Opus 4.7になってから的外れな指摘や監査・修正の自動ループが収束しない問題が増えた — @QuoLu [Zenn](https://zenn.dev/kitepon/articles/claude-audit-seesaw)

### AI協業と認知負荷（前回から継続）

#### Tips

> ブレインフライを抜けた先の景色 — 見えてきた1000時間の壁。AIブレインフライとAIブレインロットの区別、AI協業の認知負荷管理 — @fixU [Zenn](https://zenn.dev/fixu/articles/ai-brain-fry-1000-hour-wall)

### 品質劣化ポストモーテム（前回から継続）

#### Tips

> 6週間、AIのほうが先に壊れとった — 4/23 postmortemの正体 — @横井のAI日和 [Zenn](https://zenn.dev/yokoi_ai/articles/cc-2026-04-30)

### 非エンジニアのClaude Code活用

#### ポジティブ

> 電気回路屋がコードを1行も書かずにWebアプリを公開した話 — Claude Codeがあれば非エンジニアでも副業アプリ開発できる — @Haneoka [Qiita](https://qiita.com/Haneoka/items/39224ba31e796b7b25f0)

> VibeCodingでClaude Codeで20分で実験管理用アプリを作った話 — 研究の条件管理をExcelからアプリに移行 — @otsukimi_tanuki [Zenn](https://zenn.dev/k_eclaire39/articles/c8bb1c5f503f0f)

> Claude Codeを「実装の右腕」に。開発の待ち時間を減らし、プロトタイプを爆速で共有した話 — デザイナーの視点から — @フウタ（ヘッドウォーターズ） [Zenn](https://zenn.dev/headwaters/articles/6f0646a34d76cb)

### プロンプトエンジニアリング

#### Tips

> Anthropicエンジニアが教えるPrompting 101 — Claude を使いこなすプロンプト設計の実践ガイド。自動車保険の事故報告フォームを題材にした段階的改善デモ — @ぼくのログ [Zenn](https://zenn.dev/bokuno_log/articles/anthropic-prompting-101)

### Microsoft APM

#### Tips

> Microsoft APMによる生成AIツールの設定共有 — GitHub CopilotやClaude Codeなどのエージェント設定を標準化・配布する仕組み — @Sho [Zenn](https://zenn.dev/caron14/articles/apm-introduction)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
