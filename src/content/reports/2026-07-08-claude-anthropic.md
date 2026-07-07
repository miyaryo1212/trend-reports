---
title: "Claude Code v2.1.202公開、Fable 5最終日で「思考法の継承」が加速"
summary: "Claude Code v2.1.202がリリースされ、動的ワークフローの規模設定やworkflowのOpenTelemetry属性、/reviewの高速単一パス化が入った。新機能へのX上の個人反応はまだ乏しい一方、サブスク提供最終日(日本時間7/8)を迎えたFable 5を巡り、その挙動やスキルをOpusへ引き継ぐ「使い納め」記事がコミュニティで急増している。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-08

features:
  - "Dynamic workflow size設定"
  - "workflow OpenTelemetry属性"
  - "/review 高速単一パス化"
  - "Fable 5最終日と思考法のOpus継承"
  - "Sonnet 5 / Opus 4.8 実装比較"
codex_review: "機能追加そのものは堅実だが、主役はむしろFable 5退場に伴う“思考法の蒸留”ブームだと思う。モデルの寿命を前提に知見を資産化する流れは地味に重要で、業界の成熟を感じる。"
codex_importance: 3
---

## 公式アップデート

前回レポート時点の最新は v2.1.201 でしたが、その後 **v2.1.202**（2026-07-06）がリリースされました。以下は本日新規の差分です。

### Claude Code v2.1.202

- **Dynamic workflow size 設定を追加**: `/config` に「Dynamic workflow size」設定が入り、Claudeが生成する動的ワークフローの規模（小/中/大のエージェント数）を制御できるようになった。強制上限ではなく、あくまで指針（advisory guideline）。
- **workflow の OpenTelemetry 属性を追加**: ワークフローが生成したエージェントのテレメトリに `workflow.run_id` / `workflow.name` を付与し、OTelデータからワークフロー実行全体を再構築できるようにした。
- **`/review` を高速な単一パスレビューに戻した**: 多エージェントによるレビューは `/code-review <level> <pr#>` に分離され、任意のeffortレベルで実行する形になった。
- そのほか多数の修正: Remote Control（モバイル/Web）からのコマンド・画像送信の不具合、mTLS証明書ローテーション中のハンドシェイク失敗、多数のworktreeを持つリポジトリでのセッション再開の遅さ、スキル再読み込み時の指示重複、Unicodeクォートを含むワークフロースクリプトの破損などを修正。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.202)

## コミュニティの反応

> 本日抽出した新機能（Dynamic workflow size / workflow OTel属性 / `/review`の単一パス化）については、直近1週間のX検索で**個人ユーザーの実体験・感想は確認できませんでした**（公式・bot・宣伝寄りの告知が中心）。以下はZenn/Qiitaの記事に基づく、本日新たに目立った動きです。Fable 5再開やSonnet 5のモデル供給・規制の話題は前回までに詳述したため割愛し、今日固有の論点に絞ります。

### Fable 5最終日と思考法のOpus継承

サブスク枠での Fable 5 提供が米国時間7/7（日本時間7/8）で終了するのに合わせ、**「消える前にFableの賢さをどう手元に残すか」**という記事がコミュニティを埋めています。単なるモデル比較ではなく、Fable自身に手順を書かせて劣位モデルへ移植する試みが特徴です。

#### Tips

> Fable自身に「自分の思考プロセス」をskill（手順書）として書かせておき、Fableが消えた後もその手順書をOpusに読ませることでOpusを賢いFableのように動かせないか、を本気で検証。 — @hayua [Zenn](https://zenn.dev/hayua/articles/5b6da584357698)

> Fable 5のプロンプトガイドが説く「賢くなった分、指示を引き算せよ」を逆手に取り、トークンと時間をかけた「足し算」でOpus 4.8を上位に寄せるハーネスを構築・運用した記録。 — @aito [Zenn](https://zenn.dev/ait/articles/fable-emu-opus-harness)

#### 使いどころの整理

> 最終日を待たず駆け込みで、派手な新規開発ではなくSkills作成・アップデート・テンプレート整備といった「今後の土台」作業にusageを投下して使い切った祭りの記録。 — @yamadatt [Zenn](https://zenn.dev/yamadatt/articles/20260707-fable5-usage-exhausted)

> Fableに最後に渡した仕事の共通点は「書いて終わりのコード」ではなく、ツール・基準・レポート・方向性のたぐいだった。モデルが退場するとき賢さも一緒に持っていかれる、という観点。 — @hjpotter1 [Zenn](https://zenn.dev/hjpotter1/articles/1185d511616379)

> 過去の作業履歴や設定ファイルを読み込ませ、次の一手を自分で洗い出して地固めする系のタスクにこそ使うべき、という限定期間の使い分け備忘録。 — @shiro_kuma_san [Zenn](https://zenn.dev/shiro_kuma_san/articles/563f4512f969c0)

### Sonnet 5 / Opus 4.8 実装比較

モデル使い分けの議論に、同一タスクでの**新しいハンズオン比較**が加わりました。

#### 検証

> Sonnet 5とOpus 4.8を、同じ単一HTMLアプリ（防災備蓄管理アプリ）の実装タスクで、effort High・毎回新規セッションの条件で比較した所見。 — @ローカルAIラボ [Zenn](https://zenn.dev/localai_lab/articles/e8d6586231664e)

> Fable 5とOpus 4.8を比較し、差が出たのは「長時間・多段・曖昧」な仕事で、定型・軽作業では体感差なしと結論。乗り換え判断を勘でなく仕事の性質で切り分ける。 — @shoka-jp [Qiita](https://qiita.com/shoka-jp/items/3aef5199c7d67d126d7e)

## ソース

- [GitHub - Claude Code Releases (v2.1.202)](https://github.com/anthropics/claude-code/releases/tag/v2.1.202)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
