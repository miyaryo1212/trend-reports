---
title: "OpenAIが新プロダクト・研究施策を相次ぎ公開 ― GPT LiveとARC-AGI-3ハーネス改善"
summary: "Codex CLIは0.147.0-alpha系のプレリリースのみで安定版の新機能追加はなし。一方OpenAI本体はリアルタイム音声のGPT Live、学術研究者向けChatGPT、ARC-AGI-3のハーネス改善などを相次いで公開し、コミュニティでは実践・検証の投稿が広がった。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-08-04

features:
  - "GPT Live"
  - "ChatGPT for Academic Researchers"
  - "Scientific Computing with Agentic AI"
  - "ARC-AGI-3スコア改善"
codex_review: "派手なのはGPT Liveだが、私にはARC-AGI-3のハーネス改善のほうがずっと示唆的に見える。モデル競争の陰で運用設定が性能を押し上げる現実は地味だが重要で、研究者向け無償提供はやや囲い込み色も強い。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI: 安定版の新機能追加なし

GitHub Releases の最新は `rust-v0.147.0-alpha.6`（2026-08-03）をはじめとする 0.147.0-alpha 系のプレリリースのみで、新機能を伴う安定版リリースはありません。直近の安定版 `0.146.0`（セッション命名・Codex Security CLI 公開・agents-sync など）は前回までに紹介済みのため再掲しません。

[ソース](https://github.com/openai/codex/releases)

### GPT Live

リアルタイムの連続音声対話に対応した新プロダクト「GPT Live」が発表されました（「聞きながら同時に話せる」全二重の会話体験）。API はウェイトリスト段階です。

[ソース](https://zenn.dev/tizawa/articles/gpt-live-diy-smart-display)

### ChatGPT for Academic Researchers

学術研究者向けに最適化した ChatGPT の提供が発表されました。世界の大学研究者を対象に GPT‑5.6 Sol Pro を含む最上位モデル群を提供し、文献調査・仮説生成・実験設計・データ解析・論文執筆までの研究スキルを備えるとされています。

[ソース](https://zenn.dev/syoshida07/articles/5ec4103cde9bd6)

### Scientific Computing with Agentic AI

科学計算領域向けのエージェント型 AI 活用の取り組みが公開されました。

### ARC-AGI-3スコア改善

2つの設定変更（retained reasoning と compaction）を有効化するだけで ARC-AGI-3 のスコアが 13.3%→38.3%（約3倍）に向上し、出力トークンも約6分の1になったとする手法が公開されました。モデル単体ではなくハーネス（実行時設定）の重要性を示す事例として紹介されています。

## コミュニティの反応

### GPT Live

X（直近7日）では個人ユーザーによる実利用体験の投稿は確認できず、公式発表への引用・要約が中心でした。一方、Zenn では実践記事が登場しています。

#### Tips

> モニタなしの Mac mini を自作スマートディスプレイ化し、呼びかけ一発で GPT-Live と会話できるようにした実験。API がウェイトリスト段階のため ChatGPT 音声モードを起動する方式で「実用レベルで動く」。※利用規約上のグレーゾーンに言及。 — Zenn @伊澤剛志（公認会計士） [出典](https://zenn.dev/tizawa/articles/gpt-live-diy-smart-display)

### ChatGPT for Academic Researchers

#### ポジティブ

> 提出論文を教授に却下された後、詳細プロンプトで全面修正し「Brilliant work」と評価され掲載に至った修士学生の事例。 — @kenkenlewu [出典](https://x.com/kenkenlewu/status/2082205430252486692)

> 高度数学の自習でカリキュラムを個人に最適化してくれ、抽象代数学の理解が飛躍的に進んだ。 — @amar_patel [出典](https://x.com/amar_patel/status/2083623307044421722)

> 研究アーキテクチャ開発で対話型の推論・統合ツールとして活用し、アイデア整理や論理検証に有効だった。 — @CarinaN818 [出典](https://x.com/CarinaN818/status/2083659196709339433)

#### 中立・論点提起

> 大学へ無料提供される施策が「OpenAI 依存」を招く未来と、日本独自 AI は生き残れるのかを論じる。研究者10万人へ最上位モデル群を12ヶ月無償提供する規模を整理。 — Zenn @satoshi yoshida [出典](https://zenn.dev/syoshida07/articles/5ec4103cde9bd6)

### Scientific Computing with Agentic AI

#### ポジティブ

> Codex の Live Chat 機能で、音声でエージェントをリアルタイムに起動・調整しながら複数プロジェクトを並行処理でき、生産性が劇的に向上した。 — @with_gene2626 [出典](https://x.com/with_gene2626/status/2082173469664461212)

> Codex アプリ最新版で、中央オーケストレーターとサブセッション間の透明な通信・制御が可能になり、超高速で作業が進むマルチエージェント環境が「魔法のよう」。 — @ValtteriValo [出典](https://x.com/ValtteriValo/status/2083157620454560246)

> Codex/ChatGPT をインシデント対応・OSINT・セキュリティ業務で実際に使い、ログ解析やツール連携まで問題なくこなせた。 — @TheCyberSecExp [出典](https://x.com/TheCyberSecExp/status/2082388631872852379)

### ARC-AGI-3スコア改善

#### ポジティブ

> retained reasoning と compaction の2設定でスコアが3倍・出力トークン6分の1になった点を、「モデルではなくハーネスの重要性を示す好例」として詳しく解説。 — @diamai_ [出典](https://x.com/diamai_/status/2084357955202523264)

> GPT-5.6 のハーネス改善で ARC-AGI-3 スコアを3倍にした実験を「ベンチマークはモデル単体ではなく全体の設定次第」と評価。 — @jipe_ia [出典](https://x.com/jipe_ia/status/2084233316283113630)

#### Tips

> 「2つの API 設定（retained reasoning と compaction）を有効化するだけでスコア3倍・トークン6分の1」と具体的な活用ポイントを指摘。 — @talwar_divyam [出典](https://x.com/talwar_divyam/status/2084360926392938836)

## ソース

- [Codex CLI Releases（GitHub）](https://github.com/openai/codex/releases)
- [モニタなしMac miniでGPT-Liveと会話（Zenn / 伊澤剛志）](https://zenn.dev/tizawa/articles/gpt-live-diy-smart-display)
- [大学へ無料提供されるOpenAI依存に陥る未来（Zenn / satoshi yoshida）](https://zenn.dev/syoshida07/articles/5ec4103cde9bd6)
- [ChatGPT活用の学術事例（X / @kenkenlewu）](https://x.com/kenkenlewu/status/2082205430252486692)
- [Codex Live Chatによるマルチエージェント体験（X / @ValtteriValo）](https://x.com/ValtteriValo/status/2083157620454560246)
- [ARC-AGI-3ハーネス改善の解説（X / @diamai_）](https://x.com/diamai_/status/2084357955202523264)
