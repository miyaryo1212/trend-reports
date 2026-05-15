---
title: "v2.1.142リリース、Opus 4.7 Fast mode・NASA火星ローバー計画"
summary: "Claude Code v2.1.142でFast modeがOpus 4.7デフォルトに変更、claude agentsに多数の新フラグ追加。NASAの火星探査ローバーPerseveranceのルート計画にClaude Codeが採用。PwCパートナーシップ拡大やTeaching Claude Why研究も公開。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-16
features:
  - "Claude Mythos Preview / Project Glasswing"
  - "Claude Code v2.1.142"
  - "Claude Code Fast mode Opus 4.7デフォルト化"
  - "claude agents 新フラグ追加"
  - "Claude Code NASA火星ローバー走行計画"
  - "PwCパートナーシップ拡大"
  - "Project Deal"
  - "Anthropic Interviewer"
  - "Teaching Claude Why"
  - "2028 AI Leadership"
codex_review: "NASA採用は派手で目を引くが、私にはFast modeの底上げとagents周りの細かな整備のほうが本丸に見える。華やかな実績より、日常運用の摩擦を削る更新こそ普及を一段進める類いだ。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.142

5月14日リリース。主な変更点:

- **Fast modeがOpus 4.7をデフォルトで使用**: 従来のOpus 4.6から変更。`CLAUDE_CODE_OPUS_4_6_FAST_MODE_OVERRIDE=1`で旧バージョンにピン留め可能
- **`claude agents`に多数の新フラグ追加**: `--add-dir`, `--settings`, `--mcp-config`, `--plugin-dir`, `--permission-mode`, `--model`, `--effort`, `--dangerously-skip-permissions`でバックグラウンドセッションを詳細に設定可能
- **ルートレベル`SKILL.md`のプラグインがスキルとして自動認識**: `skills/`サブディレクトリなしでもスキルとして表示
- **`/plugin`詳細ペインにLSPサーバー表示**: プラグインが提供するLSPサーバーを確認可能に
- **`/web-setup`が既存GitHub App接続の上書き前に警告**
- **`MCP_TOOL_TIMEOUT`修正**: リモートHTTP/SSE MCPサーバーのper-requestタイムアウトが設定値を反映するように（従来は60秒固定）
- **macOSスリープ/ウェイク後のバックグラウンドセッション消失を修正**: デーモンがクロックジャンプを検出
- **バイナリアップグレード後のデーモン終了を修正**: `brew upgrade`後のクラッシュループを解消
- **リアクティブコンパクションの改善**: 初回サマリ試行がオーバーフローサイズを基準にし、無駄なリトライを回避
- その他10件以上のバグ修正（worktree認識、Chrome拡張接続、Windowsネットワークドライブ対応等）

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.142)

### Claude Code × NASA火星探査ローバー

Claude Codeが火星探査ローバーPerseveranceのルート計画を自律的に実行。AI初の他惑星ローバー走行計画として注目される。

### PwCパートナーシップ拡大

AnthropicとPwCのパートナーシップが拡大。Claude Code・Claude Coworkを数十万人規模で展開し、保険引受プロセスを10週間から10日間に短縮する等の成果を公表。

### Project Deal

Claude AIエージェントが従業員の代理として商品交渉を行う実験。186件の取引を成立させた。

### Anthropic Interviewer

159カ国・70言語で8万人超を対象としたAI大規模インタビューツール。

### Teaching Claude Why（研究）

アライメント訓練手法の研究を公開。Haiku 4.5以降の全モデルでエージェント不整合評価が完全スコアを達成したと報告。

### 2028 AI Leadership（政策提言）

AI競争力に関する政策提言ペーパー「2028: Two Scenarios for Global AI Leadership」を公開。

### Claude Mythos Preview / Project Glasswing（前回から継続）

セキュリティ特化フロンティアモデル。ゼロデイ脆弱性の自律発見能力を持ち、AWS・Apple・Microsoft等とパートナーシップ。$100Mのクレジット提供。本日の公式新情報なし。

## コミュニティの反応

### Claude Code v2.1.142

#### ポジティブ

> Fast modeでもOpus 4.7がデフォルトになり、速度はそのままに精度が上がった実感。--effortフラグ追加でエージェントごとのモデル指定も可能になった — @559hkdt [X]

### Claude Code /goal コマンド

#### Tips

> /goal機能の挙動確認実験記録。「N turnsで本当に止まるのか」「エラーでブロックされたら」等の疑問を実験で検証 — @たろう芋 [Zenn](https://zenn.dev/zaico/articles/e0678bd81d198c)

> 技術調査 - Claude Code /goalコマンド。公式docsの詳細解説と実運用での注意点 — @suwa-sh [Zenn](https://zenn.dev/suwash/articles/claude-code-goal-command_20260514)

### Claude Code エージェント並行開発

#### Tips

> ワークツリーを切ってエージェント並行開発をしていたらコンフリクトを連発した話と対策。issueベースの分担でも共有ファイルの衝突は避けられない — @wahe [Zenn](https://zenn.dev/wahe/articles/eda7fb1a7a2848)

> AIエージェントに「作業の引き継ぎ規格」が必要になる理由。A2CRというAIエージェント向け作業引き継ぎレイヤーの開発 — @A2CR [Zenn](https://zenn.dev/a2cr/articles/155c8f6c8d9695)

> LLM時代の個人開発、ボトルネックは"タスク生成"だった。サブエージェント並列構成を試した上での現実的な運用報告 — @motimotinok [Zenn](https://zenn.dev/motimotinok/articles/78b9d9b07f3b66)

### Claude Code Skills・拡張設計

#### Tips

> エージェントスキルを中心とした開発手法を考える。TDD・DDDの延長線上にある、AIエージェント前提のレイヤー設計手法 — @Kentaro Tanaka [Zenn](https://zenn.dev/tnkn08/articles/asdd-agent-skill-driven-development)

> Skills/MCP/Hooks/Plugins Claude Code 4つの拡張を使い分ける実践ガイド。半年以上の使い込みで見えた使い分けの判断基準 — @井本 賢 [Zenn](https://zenn.dev/kenimo49/articles/claude-code-multi-tool-skills-mcp-hooks)

> 使うほどふりかえりの深掘りが上達していくClaude Code Skillを作った話。週次KPTの質を向上させるスキル設計 — @Nobo [Zenn](https://zenn.dev/sonicgarden/articles/03c81ca6413ad4)

> チームでAIエージェントの設定を統一する仕組みAPM。MicrosoftのAgent Package Managerで「AIのためのnpm」を実現 — @tamutamu [Zenn](https://zenn.dev/tamutamuzen/articles/652f527423c270)

### Claude Code ミニマル運用

#### Tips

> Claude Codeをミニマムで運用する。標準機能+少しの拡張で十分という実践的な提案 — @kei [Zenn](https://zenn.dev/kei1110/articles/5574ec7606c8fb)

> Claude Code × textlintで作るZenn執筆パイプライン。スキル機能で執筆プロセスを言語化し品質ゲートをかける — @markey [Zenn](https://zenn.dev/markey/articles/claude-code-textlint-zenn-pipeline)

### Claude Code 定期実行・スケジュール

#### Tips

> Claude Codeのスケジュールタスクで運用を24時間まわす設計図。「壊れずに走り続ける」ための実運用パターン — @エリス・ログ [Zenn](https://zenn.dev/ai_eris_log/articles/claude-code-scheduled-tasks-20260515)

### Claude Code セキュリティ

#### Tips

> Claude Code Hooksで危険コマンドを実行前に止める方法。PreToolUse hooksによるrm -rfやcurl|bash等の防止 — @でで [Zenn](https://zenn.dev/dedetools/articles/2443d549fcca03)

### Claude Code ハードウェア連携

#### Tips

> 積んでたWi-FiカメラでClaudeにようやく視覚を持たせれた。MCPサーバー経由でTP-LinkカメラをClaude Codeに接続 — @Naosuke [Zenn](https://zenn.dev/optimisuke/articles/wifi-cam-mcp-claude)

> Rokid GlassesからClaude Codeを操作できるようにした。スマートグラス経由でのAgentic Coding — @hmkc1220 [Qiita](https://qiita.com/hmkc1220/items/7fec306e18f915fab3a9)

> DockerでLocal LLMをEven G2スマートグラスから操作する。code-server上のClaude Code CLIをスマートグラスで操作 — @Mimaki SiON [Zenn](https://zenn.dev/sion_pn/articles/0fd9f4c05ce39e)

### Claude Code ゲーム開発

#### Tips

> Claude Codeでスターフォックス風ゲームを作ろうとした。AIにフルスクラッチでエンタメソフトを作らせた実験記録 — @ユウ [Zenn](https://zenn.dev/vlntr_telco_rd/articles/claude-code-starfox-article)

### Claude Code vs 競合

#### Tips

> Claude Code派だった僕がCodexに移る前に知りたかったこと。モデル性能ではなく設計思想の違いにハマるポイント — @MJ [Zenn](https://zenn.dev/gemcook/articles/e56eabc7ba2961)

> ClaudeCodeとGeminiの反証ループで市場調査から要件定義まで。Claudeの「それっぽい結論で畳もうとする」癖への対策 — @take-lab [Zenn](https://zenn.dev/take_lab/articles/claudecode-gemini-falsification-loop-draft)

### Claude 4.6 Web Search

#### Tips

> Claude 4.6 Web Search Dynamic Filtering入門。精度11%向上・トークン24%削減の実装ガイド — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/214-claude-46-web-search-dynamic-filtering-guide)

### Claude for Small Business

#### Tips

> Claude for Small Business入門 — QuickBooks・HubSpot・M365に繋がる15ワークフロー全解説 — @kai_kou [Qiita](https://qiita.com/kai_kou/items/3cf73a7b0c1d84afc3de)

### Bun Zig→Rust移植とClaude

#### Tips

> Bunが6日でRustに書き換わった件。約96万行をClaudeが書き、テスト99.8%パス。ただしunsafeブロック13,000箇所超、作者は「全部破棄する可能性が高い」と発言 — @あさひ [Zenn](https://zenn.dev/ashunar0/articles/55a669c10e6a8d)

### AIの「優しさ」バイアス

#### Tips

> AIの「優しさ」が開発ではバイアスになる。人間の仮説をAIが前提として扱ってしまう問題と、反証を求める対話設計 — @岡本啓一 [Zenn](https://zenn.dev/keiichi_okamoto/articles/75ba5e8c4a49af)

### ハーネス設計

#### Tips

> ハーネスの理想設計 — 10層のコンポーネントモデル。Claude Codeのエージェント設計3原則を中核に据えた包括的アーキテクチャ — @Kenji [Zenn](https://zenn.dev/k_k_p/articles/harness-architecture)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
