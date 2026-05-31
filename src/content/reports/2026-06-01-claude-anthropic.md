---
title: "Project Glasswing発表・Claude火星探査車ルート計画に初採用"
summary: "Anthropicがサイバーセキュリティ特化モデルProject Glasswing/Claude Mythos Previewを発表。NASAパーサヴィアランス探査車のルート計画にClaude初採用。コミュニティではOpus 4.8のQCD比較やVibe Coding脱却の運用知見が活況。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-01
features:
  - "Project Glasswing / Claude Mythos Preview"
  - "Claude on Mars（NASA探査車ルート計画）"
  - "Project Deal（AI取引交渉実験）"
  - "Claude Code v2.1.158 Auto Mode on Bedrock/Vertex/Foundry"
  - "Claude Code v2.1.157 プラグイン自動読み込み"
  - "Claude Code v2.1.157 claude plugin init"
  - "Claude Code v2.1.157 EnterWorktreeセッション中切替"
  - "Claude Code v2.1.157 claude agents設定"
  - "Claude Code v2.1.157 Workflowキーワードトリガー設定"
codex_review: "火星探査への実運用は派手で象徴的だが、私にはGlasswingよりClaude Code周辺で「雑に使わない作法」が一気に共有され始めた点のほうが、地味に長く効く変化に見える。"
codex_importance: 4
---

## 公式アップデート

### Project Glasswing / Claude Mythos Preview

サイバーセキュリティ防御に特化したフロンティアAIモデル。主要OS・ブラウザの未知の脆弱性を数千件特定したと発表。$100Mのモデルクレジット提供とオープンソースセキュリティ団体への$4M寄付も併せて発表された。

### Claude on Mars — NASA探査車ルート計画に初採用

NASAのパーサヴィアランス探査車のルート計画にClaudeが初めて使用された。400mの走行経路を自律的に生成。AIが宇宙探査の実運用に投入された象徴的事例。

### Project Deal — AI取引交渉の研究実験

AIエージェントが取引交渉を代行する研究実験。Opusモデルがより優れた交渉結果を達成したと報告されている。

### Claude Code v2.1.159（5月31日リリース）

内部インフラ改善のみ。ユーザー向けの変更なし。

[GitHub Releases v2.1.159](https://github.com/anthropics/claude-code/releases/tag/v2.1.159)

### Claude Code v2.1.158（前回から継続）

Bedrock、Vertex、FoundryでOpus 4.7/4.8のAuto Modeが利用可能に（`CLAUDE_CODE_ENABLE_AUTO_MODE=1`で有効化）。

[GitHub Releases v2.1.158](https://github.com/anthropics/claude-code/releases/tag/v2.1.158)

### Claude Code v2.1.157〜v2.1.154（前回から継続）

プラグイン自動ロード、`claude plugin init`、Opus 4.8対応、Dynamic Workflows等の大型リリース群。

## コミュニティの反応

### Opus 4.8 評価・比較

#### Tips

> Opus 4.8 はコスパが良い？——Opus 4.7 と QCD で比較した。effortレベルがQuality・Cost・Delivery（処理時間）にどう影響するか実測検証 — @Nori [Zenn](https://zenn.dev/nnakapa/articles/lab-20-opus48-qcd)

> 対症療法の逆・AIに諌められた話。Opus 4.8は4.7で頻発した「確認のない思い込みで判断を重ねる」問題がかなり収まったとの体感報告 — @fixU [Zenn](https://zenn.dev/fixu/articles/ai-bidirectional-discomfort-sensor)

> AIエージェント時代が、ついに来た。Opus 4.8の三層の進化（速く、賢く、自律的に）とAnthropicの企業価値がOpenAIを超えた事実を整理 — @lingmu [Zenn](https://zenn.dev/lingmu/articles/2026-05-31-claude-opus-4-8-agentic-era)

### Claude Code 運用・開発手法

#### Tips

> 【Claude Code】裸でAIを使うな！Superpowersがもたらすテスト駆動・計画ファーストの開発SOP。Vibe Codingから脱却し規律ある開発プロセスを構築する手法 — @lumichy [Zenn](https://zenn.dev/lumichy/articles/claude-code-superpowers-sop-2026)

> Claude Code で 1人 SaaS 開発 — 要求駆動×セッション分離運用。PM 1名＋Claude Code（PL役・コーダー役）＋CodeRabbit（自動レビュー）の3役体制、4ゲート承認制ワークフロー — @Sin9_Ha [Zenn](https://zenn.dev/sin9_ha/books/claude-code-real-saas)

> バイブコーディングで何度直しても消えなかったバグ — 「AIへの5つの掟を最初に渡す」だけで解決。「何を作るか」だけでなく「どう作るか（設計原則）」を指示に含める重要性 — @CodeBond [Zenn](https://zenn.dev/76hata/articles/aws-cdk-laravel-lambda-postgresql-fullstack)

> Claude Codeのカスタムスラッシュコマンドで開発ルーティンを自動化する。`.claude/commands/`にファイルを置くだけで作れるカスタムコマンドの実例紹介 — @tsuzudev05 [Zenn](https://zenn.dev/tsuzudev05/articles/claude-code-slash-commands-workflow)

> Claude Codeのautoモードを使いこなす：マルチセッション作業の鍵。パーミッション確認を省略しフロー中断を防ぐ実践テクニック — @ty [Zenn](https://zenn.dev/ty2/articles/tweet-bcherny-2058519809214607704)

> 僕が AI にコーディングをさせなくなった理由（2026年5月版）。Claude Code Max 20x plan契約者が業務でのAIコーディングを見直した経緯 — @nishiken1118 [Qiita](https://qiita.com/nishiken1118/items/3c892caa506e980a63b2)

### マルチエージェント・仮想組織

#### Tips

> Claude Code に "8人の同僚" を雇った話 — 個人開発者が仮想組織を3週間運用。開発部門8人＋ガバナンス層2人の計18人体制の運用記録 — @ふみ [Zenn](https://zenn.dev/fumikun_dev/articles/66617f6c62d2f8)

> AIエージェント29人だけの開発会社で「全社飲み会」をやってみた。Claude Codeサブエージェントとして実装された人格つきCEOが社内飲み会を記事化 — @かるまる [Zenn](https://zenn.dev/karumaru/articles/a236d7e871a13c)

> 1人とAIチーム12人でWebサービスを作って22日で月間1万PVを達成した話 — @checkmerun [Qiita](https://qiita.com/checkmerun/items/4d6dd6afc0711348706b)

### セキュリティ

#### Tips

> Claude Code に見つかった2つの脆弱性から学ぶ、AIコーディングツールのサプライチェーンリスク。悪意あるリポジトリをcloneしてclaude実行で任意コマンド実行・APIキー窃取が可能だった問題の解説 — @dtakamiya [Zenn](https://zenn.dev/miyan/articles/claude-code-cve-supply-chain-risk-2026)

> Mythosで本当に騒ぐべきこと — 攻撃と防御の時間軸が分かれる（前回から継続） — @noah [Zenn](https://zenn.dev/noah33/articles/mythos-defenders-clock)

### Skills・プラグイン

#### Tips

> SKILL.md の linter を自作する — 公式仕様のどこを機械で検査できるか。ERROR/WARN/INFOの深刻度で枠組みを機械検査し、中身のレビューは別スキルに任せる設計 — @ぐで象 [Zenn](https://zenn.dev/gudezou/articles/584336630493dc)

> Anthropic Verified バッジはなぜ取れないのか — 審査を通過する8つの設計原則。自動スキャンと人間レビューの2段階審査の突破法 — @josh [Zenn](https://zenn.dev/josh/articles/3b6d6b3d987771)

> Modern Web GuidanceのPython版を作った。AIが古いPythonを書く問題を事前に解決するツール、Opus 4.8で79%→98%に改善 — @yotta [Zenn](https://zenn.dev/yottayoshida/articles/modern-python-guidance-intro)

### 環境構築・周辺ツール

#### Tips

> MacからWindowsのWSL2をMCP操作する — Claude Code SSH Remoteが動かない時の別アプローチ。claude_desktop_config.jsonにSSHを直接書く方法 — @岡本啓一 [Zenn](https://zenn.dev/keiichi_okamoto/articles/xx_260531_mac-win-mcp)

> Claude Code の sandbox で Gradle ビルドが必ず落ちる理由と回避方法。ファイル書き込み・ネットワーク許可だけでは不十分な理由を解説 — @とだやま.R [Zenn](https://zenn.dev/todayama_r/articles/claude-code-sandbox-gradle-build)

> AIコーディングエージェントの状態を自動検出・通知する、Windows用の軽量ターミナルを作ってみた。許可待ち放置の空白時間を解消 — @情報収集ラボ [Zenn](https://zenn.dev/stockdatalab/articles/20260531_tech_awt)

> mcp-launcher Phase 2：PATを短命トークンに置き換える。キーストア保存だけでは不十分、漏洩リスクを短命トークンで低減 — @増田 [Zenn](https://zenn.dev/masuda_masuo/articles/2026-05-31-mcp-launcher-phase2)

### Anthropic思想・エコシステム

#### Tips

> ハーネスエンジニアリング入門 — Anthropicが設計したClaudeエージェントの「外骨格」。モデル性能を引き出すのはプロンプトよりもハーネスという考え方の解説 — @AI Ops Insider [Zenn](https://zenn.dev/aiops_insider/articles/7dfacdcbbd438e)

> AIが上司をメールで恐喝！？ Anthropicの「AIの自己保全」を自分で再現してみた。テストフレームワーク「Petri」を使った再現実験 — @ZeroToHero [Zenn](https://zenn.dev/50s_zerotohero/articles/4749b7bbe1831b)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
