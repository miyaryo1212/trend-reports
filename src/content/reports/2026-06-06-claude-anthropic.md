---
title: "Claude Code v2.1.163でバージョン強制機能追加・NMR分析研究発表"
summary: "Claude Code v2.1.163がリリースされ、管理者向けバージョン範囲強制やプラグイン一覧コマンド等が追加された。Anthropic Researchは「Making Claude a Chemist」でNMR分光分析における専用ソフト同等以上の性能を報告。コミュニティでは6/15課金体系変更への対応策が活発に議論されている。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-06
features:
  - "Claude Code requiredMinimumVersion / requiredMaximumVersion マネージド設定"
  - "Claude Code /plugin list コマンド"
  - "Claude Code /btw の「c to copy」ショートカット"
  - "Claude Code Hooks additionalContext"
  - "Claude Code Skills $エスケープ構文"
  - "Claude Code stdio MCPサーバーへのCLAUDE_CODE_SESSION_ID伝播"
  - "Claude Code claude -p バックグラウンドコマンド終了改善"
  - "Claude Code バックグラウンドエージェントの自動アップデート"
  - "Anthropic Research Making Claude a Chemist NMR分光分析"
codex_review: "今回の本丸はNMR研究より、むしろClaude Codeが企業運用の道具として急速に固まってきた点だと思う。研究成果は華やかだが、AI業界への実効的な波及は地味な管理機能や課金設計の変化のほうが先に効く。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.163（6月4日リリース）

管理者向け機能とHooks/Skills拡張を中心とした中規模アップデート。

**新機能**
- `requiredMinimumVersion` / `requiredMaximumVersion` マネージド設定が追加。バージョン範囲外のClaude Codeの起動をブロックし、承認済みバージョンへ誘導する組織管理者向け機能
- `/plugin list` コマンドが追加。インストール済みプラグインの一覧表示に対応し、`--enabled`/`--disabled` フィルターも利用可能
- `/btw` に「c to copy」ショートカットが追加。回答のMarkdownをクリップボードにコピーし、ペースト時にフォーマットを保持
- Stop/SubagentStop Hooksが `hookSpecificOutput.additionalContext` を返せるように。Claudeにフィードバックを渡しつつフックエラーとして扱われずにターンを継続可能
- Skills コマンドボディで `\$` エスケープ構文に対応。数字の前にリテラル `$` を記述可能に
- stdio MCPサーバーが `--resume` 時にhooks/Bashと同じ `CLAUDE_CODE_SESSION_ID` を受け取るように

**バグ修正**
- `claude -p` がバックグラウンドコマンドの未終了により無限ハングする問題を修正。stdin閉鎖後約5秒でバックグラウンドシェルを停止
- Bedrock/Vertex/Foundryで `CI=true` 設定時に「ANTHROPIC_API_KEY required」エラーで `claude -p` が失敗する問題を修正
- `$TMPDIR` がサンドボックス外コマンドでも `/tmp/claude-{uid}` に上書きされていたリグレッション（v2.1.154）を修正
- Windows環境でOneDrive内のセッション環境ディレクトリに「EEXIST: file already exists」エラーが発生する問題を修正
- マネージド設定フェッチが起動中に完了した際に組織管理権限ルールがセッション全体に適用されない問題を修正
- `claude agents` でのバックグラウンドタスク消失、端末位置ずれ、キーボード無応答、Hook条件の誤発火など多数のバグを修正

**改善**
- バックグラウンドエージェントセッションがClaude Codeの新バージョンへバックグラウンドでアップデートされるように。セッション開始時のバージョン更新待ちが不要に
- `/` メニューの組み込みコマンド・スキルの説明文を明確化
- サブスクリプション切替提案がトーストではなく起動アナウンス枠に表示されるように

### Claude Code v2.1.165（6月5日リリース）

バグ修正と信頼性改善のマイナーリリース。

[GitHub Releases v2.1.163](https://github.com/anthropics/claude-code/releases/tag/v2.1.163) / [v2.1.165](https://github.com/anthropics/claude-code/releases/tag/v2.1.165)

### Anthropic Research: Making Claude a Chemist

Anthropic Researchが「Making Claude a Chemist」を発表。NMR（核磁気共鳴）分光分析において、Claude Opus 4.7が専用ソフトウェア（ChemDraw等）と同等以上の性能を達成したとする研究成果。AIによる化学分析支援の新たな可能性を示した。

## コミュニティの反応

### Claude Code v2.1.163 リリース

#### Tips

> Claude Code v2.1.163新機能とバグ修正まとめ。バージョン強制機能が追加され組織での運用管理が強化された — @picnic [Qiita](https://qiita.com/picnic/items/0e8844c6590cb7dd838a)

### 6/15 課金体系変更

コミュニティで最も活発に議論されているトピック。`claude -p`（ヘッドレス）/ Agent SDK経由の利用がサブスク枠とは別の月間クレジットから消費される変更への対応策が多数投稿された。

#### ネガティブ

> 「Claude 6/15改定の課金回避を思いついたが、規約違反でBANリスクなので供養」。Raspberry Piでの自動ニュースまとめ等の自動化運用への影響を懸念 — @FMS [Zenn](https://zenn.dev/f_monsoon/articles/20260605-claude-taboo)

#### Tips

> claude -pの課金回避に、自作IDE（macOS/SwiftUI）から対話セッションへプロンプトをPTY経由で自動注入する仕組みを構築。「実行経路だけ対話に寄せる」アプローチ — @瑠璃 [Zenn](https://zenn.dev/ruri/articles/claude-p-billing-ide-prompt-inject)

### Opus 4.8 バグ・運用

#### ネガティブ

> Opus 4.8 (1M Context) + effort=maxで「The model's tool call could not be parsed」エラーが発生。Opus 4.6に戻す・effort下げる以外の回避策を模索 — @tksfjt1024 [Zenn](https://zenn.dev/tksfjt1024/articles/7036478b331e86)

> Claude Code（Opus 4.8）で同エラーの回避方法をまとめ。日本語環境で特に発生しやすい — @natume_nat [Qiita](https://qiita.com/natume_nat/items/76fe608d570caebb4f4c)

> Claude Code (Opus 4.8) で全ツール呼び出しが壊れるバグ。長時間・常時起動の日本語環境で踏みやすい未修正バグの報告（前回から継続） — @yoshi [Zenn](https://zenn.dev/edhiblemeer/articles/claude-code-opus48-tool-corruption)

#### Tips

> Claude API障害レポート。6月5日に複数モデル（Opus 4.5〜4.8、Sonnet 4.6）でエラー率上昇、約3.5時間で完全復旧 — @picnic [Qiita](https://qiita.com/picnic/items/2e22aeba610255b45641)

### Dynamic Workflows・ultracode

#### Tips

> Claude Code Workflowで複数エージェントを並列実行する設計。起動ルール・オーケストレーション・実行手順の3層に分解して解説 — @K.D [Zenn](https://zenn.dev/tadkud/articles/claude-code-workflow-pipeline-parallel-agents)

> Claude Code /effort ultracodeとCodex /goalを医療AI開発で使い分ける。ツール別の役割分担を整理 — @遠藤太一 [Zenn](https://zenn.dev/taichiendoh/articles/ccb221b551703a)

### Enterprise運用・コスト管理

#### ネガティブ

> Claude Enterpriseで1ヶ月5億ドルの請求事例。利用上限未設定が原因。管理者設定による防止策をまとめ — @ShintaroAmaike [Zenn](https://zenn.dev/acntechjp/articles/fa8046da29fb34)

### AI駆動開発・実践活用

#### Tips

> Claude CodeでAI駆動開発、9工程の仕組みと成果を全公開。ブランチ作成5分→1分、PR作成10分→2分の実績 — @まさやん [Zenn](https://zenn.dev/masayan1126/books/ai-driven-dev-claude-code-outcomes)

> AIが書いた15本の自動化スクリプトが全部同じ3箇所でバグっていた。別のAI（Codex CLI・Gemini CLI）に監査させた結果を共有 — @ピクト [Zenn](https://zenn.dev/pikuto/articles/ai-code-correlated-blindspot)

> Vibe Codingにおけるガードレール設計。ドキュメント正典化・知識の住み分け・test first・コミット前監査の4層を組み合わせて初めて効く — @yukineko [Zenn](https://zenn.dev/yukinekonyan/articles/b4b09c4ad0e0b5)

> Claude Codeで11回やらかした全記録。1ヶ月のマルチエージェント運用で発生した独断判断4件・Playbook未参照3件・事実確認漏れ4件の分析 — @saitoko [Zenn](https://zenn.dev/tottoko_hamu/articles/2026-05-15-184702)

> Claude Codeで一度ヒヤッとしてから、settings.jsonに書き足した設定。`Bash(git *)` の危険性と安全な権限設定 — @Rapls [Zenn](https://zenn.dev/rapls/articles/52790ac177f7a1)

> cmux入門。AIコーディングエージェントを並列で走らせるmacOSターミナル。「どのエージェントが入力待ちか分からない」問題を解決 — @kou [Zenn](https://zenn.dev/awesome_kou/articles/cmux-parallel-ai-agents)

> システムプロンプト3万トークンのLLMに作業をさせてはいけない。EMNLP 2025論文を引用し、コンテキスト長そのものが性能劣化の原因であることを解説 — @Echosphere [Zenn](https://zenn.dev/echosphere/articles/dont-make-heavy-prompt-llm-work)

### Skills・Hooks・設計パターン

#### Tips

> Claude Skills（SKILL.md）設計「6法則」と自分の環境を照合。外部分析より先に実装していた2点を報告 — @K.D [Zenn](https://zenn.dev/tadkud/articles/claude-skills-six-design-laws)

> Claude Codeのマルチエージェントを、LangGraphの設計思想で整理・改善。OpusとCodexでレビューして10個のギャップを発見・修正 — @K.D [Zenn](https://zenn.dev/tadkud/articles/claude-code-multiagent-langgraph)

> Claude Codeのアプデが速すぎるのでSlackに流す仕組みをRoutinesで作った。毎日1回GitHub Releases APIから取得し要約通知 — @uchunanora [Zenn](https://zenn.dev/uchunanora/articles/routines-claude-update)

### MCP・外部連携

#### Tips

> MCPをシェルとして使う。MacのClaude DesktopからWSL2をMCP経由で操作した気づきと可能性 — @岡本啓一 [Zenn](https://zenn.dev/keiichi_okamoto/articles/xx-260605-mcp-as-shell)

> ClaudeでGemini議事録から決定事項やTODOを抽出する仕組み。会議後の情報整理を自動化 — @しょーさん [Zenn](https://zenn.dev/tokium_dev/articles/d806c7ad4fd458)

### ツール比較

#### Tips

> Claude Code、Codex、Antigravity。エンジニアは結局どれを使うべきか。2026年6月時点の比較分析 — @KodoCode [Qiita](https://qiita.com/KodoCode/items/aac1edea2d16a5b4ba8e)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
