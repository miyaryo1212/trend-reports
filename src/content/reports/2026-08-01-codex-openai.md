---
title: "Codex CLI 0.146.0、セッション命名とプラグイン連携を追加"
summary: "Codex CLI 0.146.0が/new・/clearでのセッション命名、スレッドのピン留め・フォーク、Claude Code等へのAgent Plugins公開、リモートCode ModeへのWebSocket接続に対応。あわせてOpenAIが研究者10万人向け無償プログラムと科学計算エージェントの事例集を公開した。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-08-01

features:
  - "Codex CLI 0.146.0 セッション管理 (命名・ピン留め・サイド会話)"
  - "Codex Agent Pluginsマニフェスト対応 (Bedrock/Claude Code連携)"
  - "Codex スレッドのフォーク機能"
  - "Codex リモートCode ModeへのWebSocket接続"
  - "Codex カスタムプロバイダ向け単独Web検索"
  - "ChatGPT for Academic Researchers"
  - "科学計算×エージェントAIフィールドレポート"

codex_review: "今回の本丸は派手な性能向上より、作業文脈を分岐・保持する運用面の整備だと見た。地味だが重要で、プラグイン連携も含め業界が単体AIから“接続された作業環境”へ移る流れをよく示している。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI 0.146.0

7月23〜29日にかけて `rust-v0.146.0` が公開された。並行作業とプラグイン周りの拡充が中心。

- **セッション管理**: `/new`・`/clear` で新セッションに命名でき、重要スレッドのピン留め、サイド会話を閉じずに切り替え可能に。(#34605, #34840, #35011)
- **Agent Pluginsマニフェスト**: ワークスペースでのプラグイン公開に対応し、Amazon Bedrock / Claude Code 向けマーケットプレイスを追加。(#35105, #35254, #34931)
- **スレッドのフォーク**: ページ区切りの履歴付きフォークと、スレッド一覧に表示されない一時フォークをサポート。(#35220, #35251)
- **リモートCode ModeへのWebSocket接続**: app-server からリモートCode Modeホストへ接続可能に。(#35078, #35098)
- **カスタムプロバイダ向け単独Web検索**: 対応する独自モデルプロバイダで standalone web search を有効化。(#34846)

このほか、設定済みプロキシの全経路対応、MCP接続の再接続処理、中断・リプレイ・インポート・フォークをまたいだ状態保持など多数のバグ修正を含む。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.146.0)

### ChatGPT for Academic Researchers

OpenAIが、研究者10万人に最新の GPT-5.6 Sol Pro を無償提供する新プログラムを発表。今夏に1万人規模から開始し、〜2027年にかけて拡大する予定。

[ソース](https://openai.com)

### 科学計算×エージェントAIフィールドレポート

Codex等のコーディングエージェントが科学ソフトウェアの高速化・改善に寄与した8事例を「Scientific computing in the age of agentic AI」として公開。

[ソース](https://openai.com)

## コミュニティの反応

### Codex CLI 0.146.0 セッション管理 (命名・ピン留め・サイド会話)

#### ポジティブ

> デバッグ中に見失わないよう命名でき、実際に毎日使うのはピン留めのほう。 — @BlockInsight214 [出典](https://x.com/BlockInsight214/status/2082379484259324022)

> v0.146.0はmulti-agent V2以来もっとも構造的に重要な更新。命名セッション・ピン留め・サイド会話。 — @kkaminsk [出典](https://x.com/kkaminsk/status/2083238902811529286)

#### Tips

> リスクのある作業ブランチを始めるときにセッションを命名し、有用なスレッドをピン留め。クリーンな経路と実験を分けて管理できる。 — @HRLopes [出典](https://x.com/HRLopes/status/2082379484259324022)

### Codex Agent Pluginsマニフェスト対応 (Bedrock/Claude Code連携)

#### ポジティブ

> Claude Code内でCodexをプラグインとして呼び出し、レビュー・タスク委譲・バックグラウンド実行がシームレスにできた。 — @HeyAnjula [出典](https://x.com/HeyAnjula/status/2081291179141018110)

> Codex公式プラグインをClaude Codeにインストールし、2つのサブスクを使い分けられるようになった。 — @FaztTech [出典](https://x.com/FaztTech/status/2082977406487253008)

> yuichi氏のplugin/skillをClaude Code＋Codexで1-2週間使い、compact-plusやsemantic-generationが快適だった。 — @papunoko [出典](https://x.com/papunoko/status/2082834251062591987)

#### Tips

> Claude CodeとCodex両方でプラグインをインストールする方法: `/plugin marketplace add ...` と `codex plugin ...` コマンド。 — @mertcemri [出典](https://x.com/mertcemri/status/2082906636252074446)

### Codex スレッドのフォーク機能

#### ポジティブ

> 調査スレッドの要点を圧縮して投稿用スレッドへ引き継げ、全履歴を共有せず必要な文脈だけ渡せる。調査と執筆を分けられて地味に便利。 — @tomkenta [出典](https://x.com/tomkenta/status/2082615405680402519)

> 会話が進んでからでもチェックポイントに戻って分岐でき、実験用ブランチを残す/破棄する運用が柔軟にできる。 — @omederos [出典](https://x.com/omederos/status/2082880114396643385)

#### ネガティブ

> `/side` セッションがクラッシュや終了で消えてしまい、並行作業のため何度もフォークし直すのが面倒。 — @MeisterFlo007 [出典](https://x.com/MeisterFlo007/status/2083245330594766916)

### Codex リモートCode ModeへのWebSocket接続

#### ポジティブ

> CodexとClaude両方のリモートセッションが非常に便利。この構成で生産的な作業の80%以上をスマホやiPadでこなせる。 — @varderes_crypto [出典](https://x.com/varderes_crypto/status/2081790257901556135)

#### ネガティブ

> モバイルアプリからデスクトップのCodexへ接続する遠隔操作機能は、うまく繋がらず入力に反応しないことが多い。 — @IbraMuad110111 [出典](https://x.com/IbraMuad110111/status/2083268119490109714)

> リモートセッションはリアルタイムに同期されず、特にCLI操作時に顕著。 — @CodeAkram [出典](https://x.com/CodeAkram/status/2081799946857025923)

### Codex カスタムプロバイダ向け単独Web検索

該当なし（直近1週間のX投稿では、個人ユーザーによる実体験・感想投稿は確認できなかった）。

### ChatGPT for Academic Researchers

#### ポジティブ

> プログラムに昨日申請したところ、利用資格申請はすぐに通った。 — @resnant [出典](https://x.com/resnant/status/2083066246078324962)

### 科学計算×エージェントAIフィールドレポート

#### ポジティブ

> フィールドレポート（Codex中心の8事例）を読み、agent-assisted rewrite後の現実的な課題（edge case、stewardship）を考察。科学計算で使う視点で有用。 — @MarMarLabs [出典](https://x.com/MarMarLabs/status/2082472741362430310)

> 未解決のcombinatorics問題（7点ケース）をCodexだけで1年かけて解決し、検証済み証明ファイル作成まで個人で完遂、数学者レビュー待ち。 — @1O0001001101111 [出典](https://x.com/1O0001001101111/status/2082931399926100179)

> Zotero＋Obsidian連携でCodexをPhD研究ツールとして活用。論文クイズ・関連文献引き出し・ノート自動リンクが「supervisorみたい」と絶賛。 — @drrobcincotta [出典](https://x.com/drrobcincotta/status/2081197565723418816)

### 関連記事 (Zenn / Qiita)

> Codex 0.146.0まとめ: セッション命名、Security CLI公開、Claude Codeと設定同期 — Zenn @ainewsdaily [出典](https://zenn.dev/ainewsdaily/articles/20260730_codex_t1)

> Codexのcodex resumeで前回の続きから作業を再開する — 初回セッションから10分で試す — Qiita @akira_papa_AI [出典](https://qiita.com/akira_papa_AI/items/b19d1773729be3c0d42e)

> SASTの次は『AIセキュリティ研究者』？OpenAI Codex Securityを図解 — Zenn @jamesbob [出典](https://zenn.dev/jamesbob/articles/codex-security-zenn)

## ソース

- [Codex Releases (rust-v0.146.0)](https://github.com/openai/codex/releases/tag/rust-v0.146.0)
- [Codex 0.146.0まとめ（Zenn）](https://zenn.dev/ainewsdaily/articles/20260730_codex_t1)
- [codex resumeで作業を再開する（Qiita）](https://qiita.com/akira_papa_AI/items/b19d1773729be3c0d42e)
- [OpenAI Codex Securityを図解（Zenn）](https://zenn.dev/jamesbob/articles/codex-security-zenn)
- [OpenAI](https://openai.com)
