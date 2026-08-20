---
title: "Codex CLI 0.149.0にagentsダッシュボード追加"
summary: "Codex CLI 0.149.0が正式リリースされ、タスクを一覧管理するcodex agentsダッシュボード、セッション間メッセージ送信のcodex queue、TUIの作業ディレクトリ操作コマンド、Vim編集モード拡張、codex doctorの診断強化、SDKのmax/ultra推論強度指定が入った。あわせてOpenAIがStrategic Futuresチームのブログを開設し、CodexがGartner Magic Quadrantでリーダーに選出された。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-08-21

features:
  - "Codex CLI 0.149.0"
  - "codex agents ダッシュボード"
  - "codex queue"
  - "Codex TUI の /cd・/pwd・/cwd コマンド"
  - "Codex Vim編集モードの拡張"
  - "codex doctor の診断強化"
  - "Codex SDK の設定オーバーライドと max/ultra reasoning effort 指定"
  - "OpenAI AI Futures"
  - "Codex が Gartner Magic Quadrant for Enterprise AI Coding Agents のリーダーに選出"
codex_review: "派手さは agents ダッシュボードに集まるが、実は queue と doctor 強化のほうが運用定着に効く類いで、地味だが重要だと見ます。Gartner 評価は追い風でも、現場の熱量はまだ機能先行で少し過剰評価気味です。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI 0.149.0

0.149.0 が正式リリースされました。New Features として下記の各項目が明記されています。バグ修正側では、キューされたメッセージがアイドル状態のセッションを確実に起こすようになった点、再開・フォークしたスレッドが現在のデフォルトに黙って戻らず自身の権限プロファイルを復元するようになった点、サブエージェントの重複アクティビティ表示の解消と TUI での通知・承認ルーティングの改善、Realtime WebRTC のサイドバンド接続が予期しない切断後に保留中の出力を落とさず再接続する点、Windows Terminal のスクロールバックでインライン TUI 履歴が保持される点、非アクティブな TUI スレッドの再生バッファに上限が設けられた点が挙がっています。

ドキュメント面では、外部からのコントリビューションはプルリクエストではなく issue と設計議論を通すべきである旨が明確化され、セキュア devcontainer における DNS エクスフィルトレーションのリスクと信頼上の制約が文書化されました。なお次バージョンとして 0.150.0-alpha.1 が進行中です。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.149.0)

### codex agents ダッシュボード

タスクの検索・開始・オープン・リネーム・停止を対話的に行える TUI ダッシュボードが追加されました。ショートカットは設定可能です。

[ソース](https://github.com/openai/codex/pull/39094)

### codex queue

既存のローカルまたはリモートのセッションに対してメッセージを送信するコマンドです。

[ソース](https://github.com/openai/codex/pull/39092)

### Codex TUI の /cd・/pwd・/cwd コマンド

TUI セッション中に作業ディレクトリを変更・確認するためのコマンドが追加されました。

[ソース](https://github.com/openai/codex/pull/38894)

### Codex Vim編集モードの拡張

文字置換に加え、`cw`・`c$`・`cc` といった change モーションに対応しました。

[ソース](https://github.com/openai/codex/pull/39661)

### codex doctor の診断強化

`codex doctor` が、エンドポイント保護、ネットワーク/プロキシ障害、デスクトップアプリの状態、アップデートの接続性を診断するようになりました。

[ソース](https://github.com/openai/codex/pull/38827)

### Codex SDK の設定オーバーライドと max/ultra reasoning effort 指定

SDK 利用者が CLI の設定を厳密に上書きできるようになり、推論強度として `max` または `ultra` を選択できるようになりました。

[ソース](https://github.com/openai/codex/pull/38817)

### OpenAI AI Futures

権力集中リスクを扱う新設の Strategic Futures チームによるブログが開設されました。

[ソース](https://openai.com/index/)

### Codex が Gartner Magic Quadrant for Enterprise AI Coding Agents のリーダーに選出

エンタープライズ AI コーディングエージェント部門で、OpenAI が Leader として評価されました。

[ソース](https://openai.com/index/)

## コミュニティの反応

### Codex CLI 0.149.0

#### ポジティブ・ネガティブ・Tips

該当なし（リリース告知系アカウント以外に、0.149.0 に特化した個人ユーザーの実体験投稿は確認できていません）

### codex agents ダッシュボード

#### ポジティブ

> Codex を使ってタスクダッシュボードを作成し、運用改善 Agent を壁打ちしながら作る様子が新しい標準だと実感した。 — @kichion [出典](https://x.com/kichion/status/2090206894162161782)

> Codex に依頼して、Web データ取得から Tableau ダッシュボード更新までの一連の流れを自動化してもらい、趣味のデータ運用が楽になった。 — @tesshin_tableau [出典](https://x.com/tesshin_tableau/status/2089720207816454427)

#### ネガティブ

> Codex の TUI が Windows で 1〜3 回のバージョン更新ごとに壊れ、最初の入力以降に入力ボックスが破損してエージェントとやり取りできなくなる。 — @AlemTuzlak [出典](https://x.com/AlemTuzlak/status/2088193541977592077)

#### Tips

該当なし

### codex queue

#### ポジティブ

> Codex CLI ではセッション同士がメッセージをやり取りできるようになった。文脈を再説明する代わりに、別の実行中セッションにメッセージを送るよう Codex に伝えるだけで、相手がタスクの途中で受け取ってくれる。 — @xhluca [出典](https://x.com/xhluca/status/2089413648045179142)

#### ネガティブ・Tips

該当なし

### Codex TUI の /cd・/pwd・/cwd コマンド

#### ポジティブ・ネガティブ・Tips

該当なし（リリース告知は複数見つかりましたが、個人ユーザーによる実体験・Tips 投稿は確認できていません）

### Codex Vim編集モードの拡張

#### ポジティブ・ネガティブ・Tips

該当なし

### codex doctor の診断強化

#### ポジティブ・ネガティブ・Tips

該当なし（リリース告知ボット以外に、診断機能そのものに関する実体験投稿は確認できていません）

### Codex SDK の設定オーバーライドと max/ultra reasoning effort 指定

#### ポジティブ・ネガティブ・Tips

該当なし（reasoning effort や config 設定の話題は散見されるものの、SDK オーバーライドへの具体的な言及は確認できていません）

なお関連する実践例として、親エージェントに gpt-5.6-sol、サブエージェントに推論強度 max の gpt-5.6-luna を割り当てる構成の解説記事 [Codexを「Solが監督、Luna Maxがworker」の構成にする (Zenn)](https://zenn.dev/kimkiyong/articles/a853947d33876a) が公開されています。

### OpenAI AI Futures

#### ポジティブ・ネガティブ・Tips

該当なし（公式寄り・企業寄りの告知や要約が大半で、個人ユーザーの感想投稿は確認できていません）

### Codex が Gartner Magic Quadrant for Enterprise AI Coding Agents のリーダーに選出

#### ポジティブ・ネガティブ・Tips

該当なし

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [rust-v0.149.0 リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.149.0)
- [Codexを「Solが監督、Luna Maxがworker」の構成にする (Zenn)](https://zenn.dev/kimkiyong/articles/a853947d33876a)
- [【Codex】同じ権限承認を毎回求められて作業が止まる時の対処法 (Zenn)](https://zenn.dev/idealive_kmon/articles/codex-approval-loop-prefix-rules)
- [GPT-5.6 Sol APIが50%オフ：AIHubMixとOpenRouterの実質コストを比較 (Qiita)](https://qiita.com/xiongyuanmeng1006/items/6bb698f274ce61247a16)
