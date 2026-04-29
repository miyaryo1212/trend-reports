---
title: "v2.1.122-123でBedrokティア選択・PR URL検索など多数改善"
summary: "Claude Code v2.1.122でBedrockサービスティア選択、/resume PR URL検索、画像リサイズ修正など多数の機能追加・修正。v2.1.123でOAuth認証の401リトライループを修正。コミュニティではSkill管理ライブラリ、Obsidian連携、サブエージェント出力上限問題の回避策が話題。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-30
features:
  - "[Claude Code v2.1.123] OAuth認証401リトライループ修正"
  - "[Claude Code v2.1.122] Bedrock サービスティア選択"
  - "[Claude Code v2.1.122] /resume PR URL検索"
  - "[Claude Code v2.1.122] /mcp 重複コネクタ検出"
  - "[Claude Code v2.1.122] OpenTelemetry claude_code.at_mentionログイベント追加"
  - "[Claude Code v2.1.122] OpenTelemetry数値属性修正"
  - "[Claude Code v2.1.122] 画像リサイズ修正"
  - "[Claude Code v2.1.122] メモリリーク関連修正"
codex_review: "機能の粒度は細かいが、Bedrockティア指定やOTel整備のように“運用で効く”改善が目立つ。派手さは薄い一方、Claude Codeが実験玩具から業務基盤へ寄っている感じはかなり面白い。"
codex_importance: 2
---

## 公式アップデート

### Claude Code v2.1.123

4月29日リリース。小規模な修正リリース。

- **OAuth認証401リトライループ修正**: `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` 設定時にOAuth認証が401リトライループに陥る問題を修正

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.123)

### Claude Code v2.1.122

4月29日リリース。Bedrock連携強化、/resume改善、多数のバグ修正を含む中規模リリース。

**主な新機能:**

- **Bedrock サービスティア選択**: `ANTHROPIC_BEDROCK_SERVICE_TIER` 環境変数で `default`/`flex`/`priority` ティアを指定可能に。`X-Amzn-Bedrock-Service-Tier` ヘッダーとして送信
- **/resume PR URL検索**: PR URLを `/resume` の検索ボックスに貼り付けると、そのPRを作成したセッションを検索可能に。GitHub、GitHub Enterprise、GitLab、Bitbucket対応
- **/mcp 重複コネクタ検出**: 手動追加サーバーと同一URLのclaude.aiコネクタを表示し、重複除去のヒントを提示
- **OpenTelemetry改善**: `claude_code.at_mention` ログイベントの新規追加、`api_request`/`api_error` の数値属性が文字列ではなく数値として出力されるように修正

**主なバグ修正:**

- 新モデルに送信する画像が正しい2000px上限ではなく2576pxにリサイズされていた問題を修正
- `/branch` のリワインドタイムライン問題を修正
- Bedrock推論プロファイルARNでのEffortオプション表示・`output_config` エラーを修正
- Vertex AI `count_tokens` エンドポイントのプロキシゲートウェイ環境での400エラーを修正
- ToolSearchが非ブロッキングモードで後から接続したMCPツールを検出できない問題を修正
- リモートコントロールセッションのアイドルステータス再描画が毎秒2回発生し `tmux -CC` を詰まらせる問題を修正
- `settings.json` の不正なhooksエントリでファイル全体が無効化される問題を修正

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.122)

## コミュニティの反応

### Claude Code v2.1.122-123 リリース

X/Twitterでの個人ユーザーによる言及は確認されなかった。

### Skill管理・プラグインエコシステム

#### Tips

> 大量のSkillを効率的に管理する特化型ライブラリ「sklock」を作った — Skill間の参照・組み合わせが増えるにつれlockfile/graph管理が必要になり、専用ツールを開発 — @artie [Zenn](https://zenn.dev/einperience/articles/340854da492ca1)

> superpowersを解析して学ぶplugin設計 — Claude Code Pluginの作り方を、既存プラグインのコード解析を通じて学ぶ記録 — @keisuke.shuto [Zenn](https://zenn.dev/keisuke_se/articles/f64a0e8cd5dd94)

> Claude Codeのskillとagentを分けてRAGを実装 — 「オーケストレーター」と「実装者」の2層に分ける設計でpgvector + Gemini RAGを構築 — @Yuma [Zenn](https://zenn.dev/yuma_learing/articles/claude-code-rag-skills-agent)

> OpenAI版とAnthropic版のskill-creatorをコードから読む — Skillを作って育てるならAnthropic版が向いている、OpenAI版はskill-init寄り — @y-matsuba [Zenn](https://zenn.dev/purple_matsu1/articles/20260424-anthropic-skill-creator)

### ツール呼び忘れ・エージェント監査

#### Tips

> Claudeのツール呼び忘れを別Claudeに監査させたら、デーモンが74個立った話 — Claudeは「分からないと自覚できない」ためツールを取りに行けない問題への対策 — @QuoLu [Zenn](https://zenn.dev/kitepon/articles/spotter-release)

> 同じ罠を二度踏まないための長期記憶レイヤ「Caveat」をnpmに公開 — AIが推測で動く問題を、一度書き留めた注意事項の自動注入で解決 — @QuoLu [Zenn](https://zenn.dev/kitepon/articles/caveat-release)

### Obsidian連携・自律エージェント

#### ポジティブ

> Claude Code × Obsidianで「自律AIエージェント20体」を動かす — SQLite共有脳とEloレーティングで自動改善ループ。1,100件のノート管理破綻を解決 — @ちゃつ [Zenn](https://zenn.dev/tyatu/articles/1c9a2bad8a33ae)

> Obsidian CLI × Claude Codeでプラグイン開発を自動化 — AIエージェントがプラグインを生成・ビルド・テストまで一貫実行 — @amu_lab [Zenn](https://zenn.dev/amu_lab/articles/obsidian-cli-claude-code-plugin-dev)

### サブエージェント出力上限問題

#### ネガティブ

> Claude Codeのサブエージェントが途中で止まる、32K/64K出力上限問題とワークアラウンド — Opus 4.7は32K、Sonnet 4.7は64Kの上限がハードコードされており、エラーも吐かずに停止する。公式の設定で回避する方法はない — @tyabu12 [Zenn](https://zenn.dev/tyabu12/articles/0009-claude-code-subagent-32k-64k-cap)

### コスト管理

#### Tips

> Claude Codeを寝てる間に動かしたい。でもコストが怖いのでproxy/routerを挟む話 — 使用量が見えない問題への対策としてproxy/routerアプローチを紹介 — @qzira [Zenn](https://zenn.dev/qzira/articles/3025a8b508b7ea)

> Claude Codeの使用状況をDatabricksで可視化 — OTLP送信機能でメトリクス・ログ・トレースをUnity Catalogに直書き — @akuwano [Zenn](https://zenn.dev/akuwano/articles/be0f33f66c790d)

### MCP活用

#### Tips

> Claude CodeのSlack MCPを複数ワークスペースに接続する — URL dedup回避のため意味のないquery paramを付けるハック — @edegp [Zenn](https://zenn.dev/edegp/articles/claude-code-slack-mcp-multi-workspace)

> Claude Code × 自作MCP開発で「ビルドしても反映されない」にハマった話 — stdio通信の仕組みから原因を解明 — @tmo-taka [Zenn](https://zenn.dev/tmo_taka/articles/3525421f19ece1)

> AIで作ったアプリにMCPサーバーを生やして"ツール化"した話 — アプリを外から使えるツールにするためMCPを組み込む — @Y U [Zenn](https://zenn.dev/winuim/articles/b9ec11bd60ce09)

### Context Engineering・知識ベース設計

#### Tips

> Context Rotを防ぐ知識ベース設計 — LLM WikiがAnthropicのContext Engineering技法群と一対一対応。1Mトークンでも「全部詰めれば賢くなる」にはならない — @biscuit [Zenn](https://zenn.dev/biscuit/articles/llm-wiki-context-rot-solution)

> CLAUDE.md・skills・agentsを整備して開発体験が劇的に変わった話 — GitHub Copilotから移行し、的外れな動作を改善 — @RyoyaOkuma [Zenn](https://zenn.dev/linkedge/articles/27c38cdd9bedc6)

### エージェント並列探索

#### ポジティブ

> Claude Codeを5体並列でポケモン赤に潜らせる — headless PyBoyを5並列で走らせる並列探索オーケストレーション。goal hackingへの構造的対策 — @たまご [Zenn](https://zenn.dev/tamgo_tech/articles/04b54481b10fd7)

### DESIGN.md OSS化

#### ポジティブ

> DESIGN.mdがOSSになって何ができるようになったか — Google LabsがStitchのDESIGN.mdをApache 2.0でOSS化。Claude Code・Cursor・Copilotなど他エージェントからも利用可能に — @k1t [Zenn](https://zenn.dev/tkou15/articles/design-md-oss-features)

### AI駆動テスト・PR管理

#### Tips

> AIにPRのmerge可否を判定させると本番が止まる — false positiveでTLが全disable、ルールエンジン先行+AI advisory方式を提案 — @zoetaka38 [Zenn](https://zenn.dev/zoetaka38/articles/7a4bc15221d1b5)

> AIにE2Eテスト書かせるとセレクタを幻覚するので、コード分析とブラウザ探索を両輪にした話 — @zoetaka38 [Zenn](https://zenn.dev/zoetaka38/articles/55bbc4ce96bce6)

> SentryエラーをClaude APIで自動修正してみたら、3-Retryが効いた話 — @zoetaka38 [Zenn](https://zenn.dev/zoetaka38/articles/82c630d860462f)

### 品質劣化ポストモーテム（前回から継続）

#### Tips

> Claude Codeが品質低下してた7週間、Anthropic公式ポストモーテムを噛み砕いて読む — 3つの独立バグの重複が原因 — @まさやん [Zenn](https://zenn.dev/masayan1126/articles/claude-code-april-2026-postmortem)

### サブエージェント・マルチエージェント（前回から継続）

#### Tips

> Claude Code Agentで4並列subagent運用を1ヶ月試して分かった現実 — 並列起動するだけでは速度効果がほぼ出ない — @playpark [Zenn](https://zenn.dev/playpark/articles/claude-code-agent-parallel-subagents-recruitment)

> 単体エージェントが息切れする現場へ — Anthropic 3エージェントハーネス実装ガイド — @dtakamiya [Zenn](https://zenn.dev/miyan/articles/anthropic-3-agent-harness-2026)

### ハーネスエンジニアリング（前回から継続）

#### Tips

> CLAUDE.mdを「3層構造」で書くとClaude Codeが一気に賢くなる話 — @Alba Luce [Zenn](https://zenn.dev/albaluce/articles/c6b1280ef58aee)

> Claude CodeにMCPを21個つないで「AI会社」を作った話 — @Alba Luce [Zenn](https://zenn.dev/albaluce/articles/55586a0ee449b2)

### Opus 4.7（前回から継続）

#### Tips

> Claude Opus 4.7リリース — xhigh新設とClaude Codeのデフォルト変更 — @chimao222 [Zenn](https://zenn.dev/chimao222/articles/ai-dev-opus-4-7-20260428)

### エンタープライズ・Google Cloud連携（前回から継続）

#### ポジティブ

> Google Cloud Next '26 ブースレポート — AnthropicのClaude Agent SDK and Vertex AIセッション — @Hiromu Ogawa（ソフトバンク） [Zenn](https://zenn.dev/softbank/articles/d815368cf4eb45)

> Claude Cowork on Vertex AIは何が嬉しいのか — Google Cloud Next '26現地メモ — @Kazumasa Iwao（MBK Digital） [Zenn](https://zenn.dev/mbk_digital/articles/db99a38e334462)

### コスト・課金（前回から継続）

#### Tips

> Claude Code サードパーティ制限の全容と移行ガイド — OpenClaw・OpenCodeユーザー必読 — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/200-claude-code-third-party-policy-guide)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
