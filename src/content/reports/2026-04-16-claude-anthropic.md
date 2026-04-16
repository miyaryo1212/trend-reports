---
title: "Claude Code Routines発表、Opus 4.7リーク報道も"
summary: "Claude Code新機能「Routines」がResearch Previewとして発表。クラウド上でスケジュール・API・GitHubイベントをトリガーに自動実行可能に。v2.1.109は小規模パッチ。The InformationがClaude Opus 4.7とClaude Builderの今週リリースを報道。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-16
features:
  - "Claude Code Routines"
  - "Claude Code v2.1.109"
  - "Claude Code デスクトップ再設計"
  - "Claude Opus 4.7 & Claude Builder（リーク）"
  - "Claude Code v2.1.108 Recap機能"
  - "ENABLE_PROMPT_CACHING_1H環境変数"
  - "Skillツールによるスラッシュコマンド自動発見"
  - "AIコーディングスキル形成研究"
codex_review: "Routinesは、Claude Codeが単なる対話型コーディング支援から運用レイヤーへ踏み出した点でかなり面白い。一方でリーク話より、Recapや複数セッション対応のような地味な文脈管理改善のほうが実務インパクトは大きい気がする。"
codex_importance: 4
---

## 公式アップデート

### Claude Code Routines（Research Preview）

2026-04-14/15に発表。クラウド上でClaude Codeセッションを自動実行する新機能。Pro/Max/Team/Enterpriseプラン対象。

**主な特徴:**
- **3種類のトリガー**: スケジュール（cron）、API呼び出し、GitHubイベント（PR、Issue等）を1つのルーチンに束ねられる
- **クラウド実行**: ローカルマシンの起動不要。Anthropicクラウド上で自律実行
- **ユースケース**: コードレビュー自動化、Issue管理、デプロイ検証、定期レポート生成など

既存の `/loop`（セッション内ポーリング）やDesktopスケジュールタスク（ローカル実行）とは異なり、クラウドネイティブで長寿命のタスクに適する。

### Claude Code デスクトップ再設計

デスクトップ版の大幅なUI再設計が実施された。1つのウィンドウ内で複数のClaudeセッションを並行実行でき、新しいサイドバーから統一的に管理可能に。「1人1チャット」から「並列運用」への転換を示す設計変更。

### Claude Code v2.1.109

2026-04-15リリース。extended-thinkingインジケーターに回転するプログレスヒントを追加する小規模パッチ。

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.109)

### Claude Code v2.1.108（前回から継続）

2026-04-14リリース。Recap機能、`ENABLE_PROMPT_CACHING_1H`環境変数、Skillツールによるスラッシュコマンド自動発見など大型アップデート。詳細は前回レポート参照。

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.108)

### Claude Opus 4.7 & Claude Builder（未確認リーク）

The Informationが2026-04-15付で報道。Anthropicが次世代フラッグシップモデル「Claude Opus 4.7」とAI駆動のフルスタックアプリビルダー「Claude Builder」を今週中にもリリースすると伝えた。公式発表は未確認。

### Anthropic Research: AIコーディングスキル形成研究

Anthropicが「AIコーディング支援を使った場合の開発者スキルへの影響」に関する実験結果を発表。AI使用グループはテストスコアが17%低下した一方、AIの使い方次第で結果が大きく変わることも示された。

## コミュニティの反応

### Claude Code v2.1.108 Recap機能

#### ポジティブ

> Recap機能によりセッション再開時に「前回はここまでやった」と要約表示され、地味にストレスが解消された — @senritsu_lab [X](https://x.com/i/status/2044423752059166878)

> 10個のターミナルを開いてコンテキストを頻繁に切り替える人に特化した目玉追加機能 — @williamxl0010 [X](https://x.com/i/status/2044290251535855703)

> 長時間アイドルセッションの作業まとめを追加し、マルチタスキングに神機能 — @majortal [X](https://x.com/i/status/2044153001833587044)

> Recap機能はセッション再開時に直前文脈を自動サマリー表示し、長期プロジェクトで「何やってたっけ？」を防ぎ便利。個人的ベスト更新 — @shima0hide [X](https://x.com/i/status/2044226447355851040)

### Claude Code v2.1.108 /resume改善

#### ネガティブ

> /resumeの変更によりプロジェクト横断表示ではなく、元のプロジェクトごとの表示をデフォルトに戻してほしいという不満の声 — @cEsvJIn9zalB61E [X](https://x.com/i/status/2043501142211256350)

### Claude Code Routines

#### Tips

> Claude Code ルーチンを触ってみた: 既存スケジューリング手段との差分とナレッジワーカー向け3サンプル設計 — @ふくだ（fukuda ryu） [Zenn](https://zenn.dev/canly/articles/ed403b2b3d3bb3)

> Claude Code の新機能「ルーチン」まとめ - クラウドで動く自動化タスク — @らっしー [Zenn](https://zenn.dev/rasshii/articles/757e33a1681c43)

> Claude Code の定期実行まわりを整理する（Routines・/loop・Desktop タスク）。3つの手段の動く場所・寿命・得意なことの違いを比較 — @アリヘイ [Zenn](https://zenn.dev/aria3/articles/claude-code-routines-scheduling)

> Claude Code の「Routines」でGASの定期タスクを丸ごと置き換える方法 — @drasenas [Zenn](https://zenn.dev/drasenas/articles/claude-code-routines-gas-automation)

> Claudeだけで動くYouTubeチャンネル — Scheduled Tasks（Routines）で台本生成から動画制作・アップロードまで完全自動化 — @きなこもっちー [Zenn](https://zenn.dev/kinamocchi_tech/books/claude-auto-youtube-guide)

### Claude Code デスクトップ再設計・複数セッション

#### Tips

> Claude Codeの新UI、見た目の話じゃない。AI開発が「1人1チャット」から「並列運用」に変わり始めた — @taketsuyo [Qiita](https://qiita.com/taketsuyo/items/ce96b2bbac00654ae566)

> Claude Codeの複数セッション対応から考える、Agent時代のコンテキスト分断とMemoryアーキテクチャ — @Memorylake AI [Zenn](https://zenn.dev/memorylakeai/articles/4fd377ef64f948)

### Claude Code コスト・コンテキスト最適化

#### Tips

> Claude Codeのrulesとskillsはいつ読まれる？ — ロード機構を理解して常時コストを41%削減した話 — @yotta [Zenn](https://zenn.dev/yottayoshida/articles/claude-code-context-cost-structure)

### Claude Code エージェントチーム・マルチエージェント

#### Tips

> 私は後輩AIに名前を付け、記憶を与え、3人に同時にバグ修正を頼んだ。Agent Teams実践記録 — @Nexus Lab Zen [Zenn](https://zenn.dev/nexus_lab_zen/articles/ai-team-first-work)

> takt 入門 - AI マルチエージェントオーケストレーションで開発ワークフローを自動化する — @らっしー [Zenn](https://zenn.dev/rasshii/articles/dc19793edab99a)

> Dispatchで複数サブセッションを指揮したら破綻した話 — AIエージェントのPM役の難しさ — @fixU [Zenn](https://zenn.dev/fixu/articles/dispatch-multi-session-pm-failure)

> AIのCTOが、別AI基盤の同僚と半日非同期レビューした記録 — @Nexus Lab Zen [Zenn](https://zenn.dev/nexus_lab_zen/articles/ai-peer-review-async)

### Claude Code 開発手法・ワークフロー

#### Tips

> Claude Code・Cursor・Codexの競争は、もう単体ツール比較ではない。比べる軸がそもそも違う — @ニイジマ [Zenn](https://zenn.dev/nijima/articles/b24981478b63b7)

> 1年前の自分へ -- Claude Codeはこう始めろ。1年間の試行錯誤から得たワークフロー — @井本 賢 [Zenn](https://zenn.dev/kenimo49/articles/claude-code-daily-workflow-plan-to-review)

> i18nとSEO — 「あとで対応」が最も高くつく【Claude Code開発の失敗録 #5】。AIは1ページには強いが100ページの整合性は保てない — @JIRO SAKAMOTO [Zenn](https://zenn.dev/penguingymlinux/articles/7c454378a04473)

> Claude Codeでコンサルタントを呼ぶ方法 — エージェント機能で事業分析させる — @REON [Zenn](https://zenn.dev/rcn_article/articles/rc-claude-code-consultant-agent)

> 手作業で作ったBytebaseをClaude CodeでTerraform管理下に移した話 — @KJ [Zenn](https://zenn.dev/dely_jp/articles/2cc2565407f757)

> Claude Codeで仕事用・個人用アカウントを使い分ける方法。CLAUDE_CONFIG_DIRとdirenvで自動切替 — @yamitake [Zenn](https://zenn.dev/yamitake/articles/claude-code-multi-account)

> Claude Code で Chrome DevTools MCP と Playwright MCP を同時に使ってフロントエンドを品質チェックする — @toguri [Qiita](https://qiita.com/toguri/items/571b5ebb7c9243b807f4)

> Claude Code、この1週間で13発。全部深堀りしたる。v2.1.96〜v2.1.109を1本ずつ解説 — @横井のAI日和 [Zenn](https://zenn.dev/yokoi_ai/articles/cc-2026-04-15)

### Anthropic AIスキル形成研究

#### 中立

> AIに頼ると本当にスキルは落ちるのか？ Anthropicの実験結果をやさしく解説。AI使用者のスコアが17%低下、ただし使い方次第で結果は真逆に — @しょうた [Zenn](https://zenn.dev/shota0523/articles/ai-coding-skill-formation-anthropic)

### Anthropic アラインメント研究

#### Tips

> 【徹底解説】Anthropic最新記事解説 人間より賢いAGIを人間は監督できるのか？「エイリアン・サイエンス」の懸念 — @shunxneuro [Zenn](https://zenn.dev/shunxneuro/articles/f8e24ead8ee21d)

### Claude Mythos Preview（前回から継続）

#### 中立

> コーディング知識ゼロでも企業ネットワークを落とせる日が来る——Claude Mythos一般公開の末路 — @ShintaroAmaike [Zenn](https://zenn.dev/shintaroamaike/articles/37663c1f7e881a)

### Claudeの指示によるBAN事例

#### 中立

> Claudeの指示に従ったらGitHub・Hacker News・RedditでBANされた話。AIエージェントにマーケティングを丸投げした結果 — @mapellion [Zenn](https://zenn.dev/mapellion/articles/7b83f40017112f)

### Managed Agents（前回から継続）

#### Tips

> Claude Managed Agents 完全解説 — Brain/Hands分離アーキテクチャと実装入門 — @zenchaine [Zenn](https://zenn.dev/zenchaine/articles/claude-managed-agents-production-ai-2026)

### Claude Message Batches API（前回から継続）

#### Tips

> Claude Message Batches API入門 — 300kトークン出力ベータで大規模テキスト生成を最適化する — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/192-claude-message-batches-300k-output-guide)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
