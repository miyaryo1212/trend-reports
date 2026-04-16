---
title: "公式更新なし、コミュニティは隠れ機能・マルチエージェント運用に注目"
summary: "公式リリースは前回から変更なし。コミュニティではBoris Cherny氏の隠れ機能15選スレッドが90万PV超え、claude-peersによる10課マルチエージェント運用、Claude Mythosリーク情報が話題に。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-03-31
features: []
codex_review: "公式が静かなのに、周辺の運用知と“裏ワザ”がここまで厚く立ち上がるのは面白い。新モデルの噂より、マルチエージェント運用や記憶基盤の整備のほうが地味だが業界の実装速度を底上げする重要論点に見える。 ※ このレビューは後日生成されました"
codex_importance: 3
---

## 公式アップデート

本日の公式アップデートはありません。最新リリースは v2.1.87（2026-03-29）で前回レポートから変更なし。

## コミュニティの反応

### Boris Cherny氏の「隠れ機能15選」スレッド

#### ポジティブ

> Claude Code エンジニアの Boris Cherny（@bcherny）が X で隠れ機能・活用されていない機能をスレッド投稿。数時間で90万PV・1万いいねを記録。Zenn・Qiita 双方で日本語まとめ記事が複数投稿される注目度 — @Na [Zenn](https://zenn.dev/yuche/articles/668241718e24e4)

> 同スレッドの Qiita 版まとめ。15の機能を解説 — @dai_chi [Qiita](https://qiita.com/dai_chi/items/df0c48ea6a3dc67e9e58)

### Claude Mythos リーク

#### 中立

> 3月26日に Fortune がスクープした未発表モデル「Claude Mythos」のリーク情報を分析。Opus 4.6 を「劇的に」上回る性能、サイバーセキュリティで「あらゆる他のAIモデルを凌駕」との社内文書。既存ティアの上に「Capybara」という新ティアとして分類 — @kanase [Zenn](https://zenn.dev/kanase/articles/claude-mythos-agi)

> Anthropic の情報漏洩、Sora の白旗、Meta の方針転換を含む週間まとめ。Mythos/Capybara リークを「セキュリティ最強モデルが最弱のミスで世に出た」と表現 — @横井のAI日和 [Zenn](https://zenn.dev/yokoi_ai/articles/ai-general-daily-2026-03-30)

### claude-peers による10課マルチエージェント運用

#### Tips

> Claude Code Max（$200/月）で10個のインスタンスを「社員」として運用。コンダクター型アーキテクチャで1日最大32本の PR をマージ。設定ファイルを全公開。PR レビュー自動化のTier制度も実装 — @kimny [Zenn](https://zenn.dev/glasswerks/articles/claude-code-10-agents)

### /loop で自律パフォーマンスチューニング

#### Tips

> Karpathy 氏の autoresearch にインスパイアされ、Claude Code の `/loop` コマンドでサーバーサイドのパフォーマンスチューニング PDCA を自律的に回す仕組みを構築 — @たろう眼鏡 [Zenn](https://zenn.dev/dely_jp/articles/3117e590465e38)

### 完全自律コーディングパイプライン

#### Tips

> Ramp、Stripe、Uber が進める自律エージェント開発体制をローカルで再現。Claude Code、Codex 等を組み合わせて「生成→検証→ループ」の構造を実装 — @Akatsuki [Zenn](https://zenn.dev/theaktky/articles/5f9f18c34950c1)

### AI エージェントの S3 誤爆事故

#### ネガティブ

> AI エージェントがデプロイ先 S3 バケットを取り違え、重要データ42,700件に対して `aws s3 sync --delete` を実行。「AI は危ない」ではなく「人間でも同じ事故を起こしうる運用だった」と分析。事故後の AI の謝罪・反省が印象的だったとも — @毎週1万行実装するウサギ [Zenn](https://zenn.dev/x10k/articles/1d01295f65600c)

### Claude Code と「弱者の戦略」

#### 中立

> コーディングエージェントで「ロールモデルが消失した」エンジニアの向き合い方を論考。強者の戦略（コード作成代行）は確立されているが、弱者には別のアプローチが必要と主張 — @暁 [Zenn](https://zenn.dev/akatuki_me/articles/43eb4604d0675d)

### AI OS as Code — dotfiles の進化

#### Tips

> chezmoi × Claude Code で dotfiles を「AI OS as Code」に進化させた事例。約310ファイル、65スキル、約170音声ファイル（VOICEVOX）を管理するシステムに — @takish [Zenn](https://zenn.dev/takirus/articles/dotfiles-aios)

### スキル機能で業務自動化30連発

#### Tips

> 半年かけて開発した30のスキルを公開。商品企画の市場調査から議事録作成、ブラウザ自動操作まで。スキルは「入力・手順・出力・品質基準」を一体で定義する業務マニュアルとして機能 — @しゃる [Zenn](https://zenn.dev/sharu389no/articles/643d3403d06ede)

### Claude Code Skills で開発ワークフロー効率化

#### Tips

> 医療機器向け品質管理システム「QMSmart」の開発で実際に運用している12種類の Skills と設計思想を公開 — @浅沼 敬 [Zenn](https://zenn.dev/berry_blog/articles/8d1b2c9216b4e9)

### WezTerm でエージェント状態監視

#### Tips

> cmux にインスパイアされ、WezTerm 内でエージェントの実行/待機状態をまとめて確認できる仕組みを実装 — @fujitani sora [Zenn](https://zenn.dev/soramarjr/articles/7d9ea81fe643dd)

### MEMORY.md 完全ガイド

#### Tips

> Claude Code の永続メモリ機能 MEMORY.md の仕組みを解説。セッション間の記憶喪失を解決し、コーディング規約や過去のデバッグ内容を自動記録 — @k1t [Zenn](https://zenn.dev/tkou15/articles/dxw66g36mgxxmn6yb)

### MCP 記憶サーバー cpersona

#### Tips

> Claude Desktop / Claude Code に永続記憶を与える MCP Memory Server「cpersona」。ベクトル検索・全文検索・エピソード記憶を SQLite 一本で統合 — @Cloto-dev [Zenn](https://zenn.dev/cloto/books/claude-memory-mcp-server)

### Claude Code と Claude Desktop の記憶共有

#### Tips

> CLAUDE.md や MEMORY.md はローカルファイルで Claude Desktop からは見えない問題を、MCP Memory Server で解決。セッション横断の文脈維持を実現 — @Cloto-dev [Zenn](https://zenn.dev/cloto/articles/claude-memory-changed-dev-experience)

### LLM セキュリティリスク再考

#### 中立

> Anthropic の公開資料を基に、LLM のサイバーセキュリティリスクを「攻撃コード生成」だけでない観点から整理。ツールを使い長時間動くエージェントがシステム全体のどこを壊しうるかという問題を提起 — @shunxneuro [Zenn](https://zenn.dev/shunxneuro/articles/cbd6d45b52881e)

### Figma x Claude Code

#### Tips

> Figma MCP と Claude Code を組み合わせ、Figma デザインからコードを高速生成する手順を紹介 — @Atsushi hatakeyama [Zenn](https://zenn.dev/atusi/articles/f92b7864e1fec1)

### freee MCP サーバー再構築

#### Tips

> 個人事業主向けに freee MCP サーバーを作り直し。Claude Code から銀行口座同期・仕訳・請求書作成を自動化 — @くぼゆ [Zenn](https://zenn.dev/yuuki_okubo/articles/1eaf5fbf637564)

### Claude Code をあえてコードを書かせない Plugin

#### 中立

> 「書かなくなることで学習機会を失っていないか」という不安に対し、Claude Code にコードを書かせずヒントだけ出させる Plugin を開発 — @nasum [Zenn](https://zenn.dev/knowledgework/articles/8041bedc534caf)

### WebTerminal で iPhone/iPad から操作

#### Tips

> ブラウザからサーバーのターミナルに接続し、Claude Code を表示崩れなしで動かす WebTerminal を作成。iPhone/iPad から日本語音声入力で指示が出せる — @tosshan [Qiita](https://qiita.com/tosshan/items/309d860749b9c755fffa)

### Raspberry Pi で Discord ボット常駐

#### Tips

> Raspberry Pi 起動時に Claude Code を自動起動し、Discord チャンネルに常駐させる方法。ターミナルウィンドウで動作状況を目視確認可能 — @supertask [Qiita](https://qiita.com/supertask/items/ab017f78d75fb9a1f61b)

### レート制限問題（前回から継続）

#### ネガティブ

> ピーク時間帯のレート制限消費速度問題が引き続き話題。「ガソリン満タンで出発したのに高速乗ったら急にメーターが減り出す」と表現 — @横井のAI日和 [Zenn](https://zenn.dev/yokoi_ai/articles/cc-daily-2026-03-29)

### ハーネス設計（前回から継続）

#### Tips

> Anthropic 公式ブログ「Harness design for long-running application development」の「生成と評価の分離」パターンが引き続き話題。複数の実践記事が投稿 — @たきびラボ [Zenn](https://zenn.dev/takibilab/articles/anthropic-harness-design) / @Lovanaut [Zenn](https://zenn.dev/lova_man/articles/99777e473b3c2c)

### Anthropic 8万人調査（前回から継続）

#### 中立

> 80,508人・159カ国・70言語の調査レポートへの関心が継続 — @9mak [Zenn](https://zenn.dev/ap_com/articles/anthropic-81k-ai-survey-20260327)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
