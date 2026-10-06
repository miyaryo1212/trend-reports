---
title: "Atlassian提携拡大とIroncladとのcomputer use研究"
summary: "OpenAI と Atlassian が提携を拡大し、GPT-6 系モデルが Rovo を含む Atlassian 全体のエージェントを駆動する。Jira/Confluence を ChatGPT・Codex に繋ぐプラグインも展開。Ironclad との computer use 研究では、GPT-6 Astra が契約業務タスクで GPT-5.6 Sol 比スコア32%向上・所要時間48%短縮を示した。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-07

features:
  - "Atlassian と OpenAI の提携拡大"
  - "Ironclad との computer use 研究提携"
codex_review: "Atlassian連携は企業向けAIの定番機能が揃いつつある印象で、目新しさは薄い。一方、Ironcladの評価は実務ソフトを操作する能力を測る地味だが重要な一歩。ただし11タスクの成績だけで、法務現場での信頼性まで語るのは早い。"
codex_importance: 3
---

## 公式アップデート

### Atlassian と OpenAI の提携拡大

- 新たな契約により、GPT-6 系のフロンティアモデルが Atlassian のプラットフォーム全体と Rovo のエージェントを駆動する。Rovo は OpenAI モデルと、人・プロジェクト・ドキュメント・意思決定を結ぶ Atlassian の「Teamwork Graph」を組み合わせる。
- Atlassian は GPT-6 Astra や GPT-5.6 シリーズを含む最新モデルへのアクセスを拡大。
- 2023 年から続く協業の拡大で、Atlassian 社内では 3,000 人以上の開発者がターミナル・IDE・コードレビューで Codex を利用している。
- ChatGPT / Codex 向けの Atlassian・Teamwork Graph CLI プラグインにより、権限の範囲内で Jira のワークアイテム、Confluence のコンテンツ、人の情報をプロンプトに取り込める。
- 今後は Jira で AI エージェントへの作業割り当て・進捗追跡・意思決定の記録・結果レビューを行う統合や、開発者生産性計測プラットフォーム DX と組み合わせた AI の効果測定を検討する。
- OpenAI 側も引き続き社内の重要ワークフロー管理に Jira を利用する。

[ソース](https://openai.com/index/atlassian-partnership/)

### Ironclad との computer use 研究提携

- 専門的な業務ソフトを使うエージェントの能力向上に向け、少数のソフトウェア企業と直接提携する研究の第1弾として、AI 契約管理の Ironclad と提携。
- Ironclad 社員らと、法務・商取引・調達領域の 11 タスク (NDA の設定、調達承認プロセスの作成、選択された法域に応じた再利用条項の更新など) を選定。経験者で 1 タスク平均 30〜40 分相当。各タスクを 8〜50 の基準で評価する。
- Ironclad がホストする製品環境で、合成トレーニングタスクを用いた強化学習を実施。GPT-6 Astra は Ironclad タスクで学習した初のフロンティアモデル。
- 11 タスクの平均スコアは GPT-6 Astra (Max reasoning) が 55.0%、GPT-5.6 Sol (High reasoning) が 41.6% (32% 向上)。1 回あたりの推定所要時間は 37.0 分から 19.2 分に短縮 (48% 減)。開発中の社内モデルは 63.7% を記録。
- 未解決の専門業務タスクを持つソフトウェア企業を対象に、追加の研究パートナーを募集している。

[ソース](https://openai.com/index/advancing-computer-use-with-ironclad/)

## コミュニティの反応

### Atlassian と OpenAI の提携拡大

#### 該当なし

X 上および Zenn / Qiita では、本件に関する個人の反応や解説記事は見つからなかった。

### Ironclad との computer use 研究提携

#### 該当なし

X 上および Zenn / Qiita では、本件に関する個人の反応や解説記事は見つからなかった。

## ソース

- [OpenAI: Atlassian and OpenAI expand partnership](https://openai.com/index/atlassian-partnership/)
- [OpenAI: Advancing computer use with Ironclad](https://openai.com/index/advancing-computer-use-with-ironclad/)
- [Atlassian Community: Bring your Atlassian work into ChatGPT and Codex](https://community.atlassian.com/forums/discussion/3288784/bring-your-atlassian-work-into-chatgpt-and-codex)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
