---
title: "auto modeが8/14に既定化、ゼータ関数の下界も更新"
summary: "Claude Code の auto mode が 8/14 以降 Pro/Max/Team の新規セッションで既定となり、分類器のトークン超過分は課金対象外になります。またリーマンゼータ関数の臨界線上の零点割合の下界が、Claude Code 上の約60サブエージェント・31Mトークンの探索と Lean による形式証明で 41.6% から 67.2% に改善されました。GitHub のリリースフィードは v2.1.226 のままで新規リリースはありません。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-08-11

features:
  - "auto mode のデフォルト化 (8/14〜)"
  - "リーマンゼータ関数の既知境界の更新"
codex_review: "auto mode既定化は派手さはないが、AIコーディングを“付き添い前提”から外す地味に大きい転換だと思う。一方、ゼータ関数の件は話題性以上に、生成AIが探索と形式証明の橋渡しに入り始めた点が効いている。"
codex_importance: 4
---

## 公式アップデート

Claude Code の GitHub リリースフィードに新規リリースはありません。最新は 2026-08-08 公開の v2.1.226 のままです。

[Claude Code Releases](https://github.com/anthropics/claude-code/releases)

### auto mode のデフォルト化 (2026-08-14〜)

2026-08-14 以降、Pro / Max / Team プランの新規セッションは auto mode で起動するようになります。auto mode では権限判断を分類器が担い、その分類器が消費したトークンの超過分は課金対象外として扱われます。

auto mode 自体は既存の機能で、今回の変更は「既定値が変わる」点にあります。既に auto mode を常用しているユーザーの挙動は変わりません。

### リーマンゼータ関数の既知境界の更新

リーマンゼータ関数の臨界線上にある零点の割合について、既知の下界が 41.6% から 67.2% に改善されました。探索は Claude Code 上で約60個のサブエージェント・約31Mトークンを使って行われ、得られた結果は Lean で形式証明されています。

## コミュニティの反応

### auto mode のデフォルト化 (8/14〜)

#### ポジティブ

> auto mode の変更は Claude Code を長く使っているほど価値が分かるタイプの変更。以前は長時間セッション中ずっと承認のために席を離れられなかったが、分類器がレビューを担う (危険なコマンドの89%を検知) ことで数時間走り続ける Opus 実行が現実的になった。Nuro のエンジニアが朝までに3本の PR を得た例もある。 — @kimiatehrani [https://x.com/kimiatehrani/status/2086085078145237175](https://x.com/kimiatehrani/status/2086085078145237175)

#### ネガティブ

> 89%の検知率は立派だが、auto mode はチェックインの合間に Claude がより多くのアクションを実行するということでもある。タスクあたりのトークン消費はかなり増える。安全面の利得が請求額に見合うかは分からない。 — @jyothiwrites [https://x.com/jyothiwrites/status/2086241901586592201](https://x.com/jyothiwrites/status/2086241901586592201)

#### Tips

> 8/14 の既定化より前から数ヶ月 auto mode を既定にしている。先週は、既に自分が編集済みのファイルを Claude が「復元」しようとしたのを2件ブロックし、その上で変更を保ったまま通る修正を見つけてくれた。何がブロックされ何が通るのか、低リスクな試し方を記事にまとめた。 — @KKoppenhaver [https://x.com/KKoppenhaver/status/2086891081145450963](https://x.com/KKoppenhaver/status/2086891081145450963)

なお、上記以外に個人ユーザーの実体験投稿は見つかりませんでした。

### リーマンゼータ関数の既知境界の更新

該当なし。直近7日間 (2026-08-03〜08-10) の X 投稿を対象に検索しましたが、このトピックに関する個人ユーザーの投稿は見つかりませんでした。

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
