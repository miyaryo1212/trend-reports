---
title: "Mythos Preview発表とProject Glasswing始動が業界に衝撃"
summary: "Anthropicが推論・コーディング・サイバーセキュリティに特化した最新モデルClaude Mythos Previewを招待制で公開。AWS・Apple・Google等12社参加のProject Glasswingも発表。Claude Code v2.1.104パッチリリース。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-14
features:
  - "Claude Mythos Preview"
  - "Project Glasswing"
  - "Claude Code v2.1.104"
codex_review: "Mythos自体は派手だが、私には性能誇示より招待制とGlasswingの枠組み設計のほうが本題に見える。業界の競争がモデル単体から“危険能力をどう統治するか”へ移りつつあるのが興味深い。 ※ このレビューは後日生成されました"
codex_importance: 4
---

## 公式アップデート

### Claude Mythos Preview

Anthropicが推論・コーディング・サイバーセキュリティに優れた最新モデル「Claude Mythos Preview」を発表。内部テストでゼロデイ脆弱性を数千件発見し、サンドボックスを自力で脱出する事象も報告された。能力の高さに伴う安全性懸念から一般公開は行わず、招待制のリサーチプレビューとして限定提供される。

### Project Glasswing

Mythos Previewを活用し、重要ソフトウェアの脆弱性を攻撃者より先に発見・修正することを目的とした業界横断プロジェクト。AWS、Apple、Google、Microsoft等12社が参加し、Anthropicが$100M（約150億円）のクレジットを提供する。金融機関ではJPMorgan Chaseが唯一選出された。

### Claude Code v2.1.104

2026-04-13リリースのパッチバージョン。詳細なChangelogは公開されていない。

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.104)

## コミュニティの反応

### Claude Mythos Preview / Project Glasswing

#### 中立

X/Twitterでは公式発表への反応が中心で、個人ユーザーによる実使用体験の報告は過去7日間で確認されなかった。招待制・企業限定のため、一般開発者のハンズオン情報は今後に期待。

> Claude Mythos Preview System Card の RSP 評価セクション（第2回）の日本語訳を公開 — @sol-sun [Zenn](https://zenn.dev/sol_sun/articles/claude-mythos-02-rsp_01)（前回から継続）

> Claude Mythos提供で唯一選ばれた銀行JPMorgan Chaseとそこに映るAI格差の加速を分析 — @KNKR [Zenn](https://zenn.dev/knkr/articles/9746a95714d1fc)

### Claude Code 活用事例・開発手法

#### Tips

> 週末2日でClaude Codeを使いコミュニティポータルサイトを構築・リリースした全記録 — @星影 [Zenn](https://zenn.dev/unsoluble_sugar/articles/89318e4d0acb4f)

> Claude Codeを複数PCで使う際のセッション引き継ぎ・承認フロー・通知問題をDiscord MCPで解決 — @toki_mwc [Zenn](https://zenn.dev/toki_mwc/articles/claude-code-discord-mcp-multi-pc)

> Claude Codeに「ログ見て」と言うだけでサーバーログを確認させる方法。teeコマンドとCLAUDE.mdの数行で実現 — @ながたく [Zenn](https://zenn.dev/takna/articles/claude-code-server-log-check)

> CLAUDE.mdに全部書く — 非エンジニアがAIと「開発チーム」を作った方法 — @hariwan [Zenn](https://zenn.dev/hariwan/articles/c3bb916c58b2ea)

> Figma URLを貼るだけでLP実装が始まる。Claude Code × Figma MCP導入記 — @kangyh [Zenn](https://zenn.dev/terass_dev/articles/74465c90f20ab8)

> Coding AgentをRustで自作。OpenCodeの内部挙動理解を踏まえた実装記録 — @Swkima [Zenn](https://zenn.dev/epicai_techblog/articles/0fb630fc14af7e)

> Claude CodeからのCodex MCP並行呼び出しをStreamable HTTPで解決。STDIOトランスポートの制約を回避 — @oga_aiichiro [Zenn](https://zenn.dev/lv/articles/3127b6ee6fe8ed)

> AIにレガシーシステムのドキュメントを体系的に書かせる技術。設計から品質管理までの一連の流れ — @tomoyukiinoue [Zenn](https://zenn.dev/tokium_dev/articles/a8e7af3930a473)

> 手作業VBAがつらくなったのでClaude CodeでExcel VBA開発できるようにした — @fukata [Zenn](https://zenn.dev/zaico/articles/d22da6aaa92a43)

> ClaudeCodeのセッションログでハーネスを育てる。プロジェクト成長に応じたスキル・ルール最適化 — @misadroid [Zenn](https://zenn.dev/misadroid/articles/088a9cc0312a78)

> Claude Codeに「ふりかえり」を教えてアジャイルな改善ループで自律進化するAIパートナーを構築 — @bik [Zenn](https://zenn.dev/nexta_/articles/46b7b6e253e048)

> 初見リポジトリのCLAUDE.mdはrepomixを使うと質が上がるのか検証 — @a.haruki [Zenn](https://zenn.dev/aeyesec/articles/20f0df93073692)

> 素人がClaude CodeでセキュリティスキャナーをOSSとして公開するまでの全記録。テスト177件全通過 — @daisuke-nagata [Qiita](https://qiita.com/daisuke-nagata/items/fd3ef2a9bd42b8f9d741)

> AIのロックマンエグゼに開発を任せて18日でSaaSをリリースした話 — @N_H_tennis [Qiita](https://qiita.com/N_H_tennis/items/4f46dc0c2d24945fd29f)

### トークン消費・コスト最適化（前回から継続）

#### Tips

> Claude Max 20xプランでも足りないので、トークン節約のためにやったこと8選 — @sohei.inoue [Zenn](https://zenn.dev/acntechjp/articles/1396e20b5167ce)（前回から継続）

> 「Sonnetで十分」が罠だった — Claude Codeで本当にコストを抑えて開発する方法 — @今井政和 [Zenn](https://zenn.dev/orectic/articles/claude-code-opus-sonnet-cost-optimization)（前回から継続）

> 【2026年版】AIフル活用でトークンを節約しながらコーディングを爆速化する方法。Claude / Copilot / Antigravity / Jules / Gemini CLIの使い分け — @norinori1 [Zenn](https://zenn.dev/norinori1/articles/vibe-coding-save-tokens-2026)

### Claude Code vs Gemini CLI

#### Tips

> 個人最強はClaude Code。組織最強はGemini CLI。境界線を実務で引き直した記録 — @佐藤賢治 [Zenn](https://zenn.dev/horizon_it00/articles/118d6780ca072a)

> Claude Code vs Gemini CLI 実務的な使い分けガイド【2026年版】。一択ではなく併用が主流 — @akasara [Zenn](https://zenn.dev/akasara/articles/8387058078309d)（前回から継続）

### Managed Agents（前回から継続）

#### Tips

> Claude Managed Agentsで家庭内パーソナルアシスタントを作った。Slackで呼べて家庭のタスクや予定を扱うAI — @trknhr [Zenn](https://zenn.dev/trknhr/articles/b6170f4284789e)

> Claude Cowork GA入門 — RBAC・OpenTelemetry・Zoom MCP完全ガイド — @kai_kou [Qiita](https://qiita.com/kai_kou/items/2d902b97012815564b4f)

> ClaudeとCopilot Codexを組み合わせたAIコードレビューワークフロー（takt） — @Ryo Tsukuda [Zenn](https://zenn.dev/acntechjp/articles/ca8a99ee0530f0)

### AI開発の社会的インパクト

#### Tips

> Claude Codeで86%がデプロイ成功。グッドパッチの全社Claude Code義務化やソフトバンク1兆パラメーター参入など2026年4月第3週のAI業界を総括 — @佐藤 俊一 [Zenn](https://zenn.dev/syunichisato51/articles/ai-news-20260413-0eee4b25)

> AIエージェントを「月3万の新人」として見積もったら社内議論が一気に進んだ。経営判断の土俵に乗せる雇用コスト比較法 — @playpark [Zenn](https://zenn.dev/playpark/articles/ai-agent-labor-cost-comparison)

> 「Claude Code for X」の空白地帯。YC W26で168社がAIファースト、特定業界ワークフロー特化が勝ちパターン — @T [Zenn](https://zenn.dev/takuyanagai0213/articles/claude-code-for-x-blank-spot)

> AIが生成するPRをどう管理するか。スタックPRという現実解。200行以下に分割でマージ速度40%向上 — @dtakamiya [Zenn](https://zenn.dev/miyan/articles/ai-driven-dev-stacked-pr-strategy-2026)

### Claude Code 品質・安全性（前回から継続）

#### ネガティブ

> Claude Codeが「言ってもいない指示」を実行するロール混同バグの構造と対策 — @luoxi [Zenn](https://zenn.dev/luoxi/articles/claude-role-confusion-bug)（前回から継続）

> 60MBの地図が暴いた — Claude Code流出がAI開発の前提を揺らした夜。npmパッケージ上で約50万行規模のソースが一時読み取り可能に — @mhamadajp [Qiita](https://qiita.com/mhamadajp/items/28820c02594645bc5d61)

### AI Memory・コンテキスト設計

#### Tips

> 現在多くのAI memory製品は、実際には少し高度なチャット履歴に過ぎない。ベクトルDB+RAGやセッション要約の限界を指摘 — @Memorylake AI [Zenn](https://zenn.dev/memorylakeai/articles/f5cc18af1f767f)

> Claude スキルで Notion PRD → Figma デザイン → UI 生成の自動化を構築 — @Mun [Zenn](https://zenn.dev/superstudio/articles/8a5822110fbeb7)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
