---
title: "Claude Opus 5.5 公開、Claude Code の既定Opusに"
summary: "Anthropic が Claude Opus 5.5 を公開し、入力$4/出力$20 per Mtok へ値下げ。Claude Code v2.1.280 で `claude-opus-5-5` が既定のOpusモデル(1Mコンテキスト)となり、Pro / Team Standard の既定モデルも Sonnet から Opus に変更されました。X上では早速の実装デモが多数上がる一方、レート制限やeffort設定のリセットへの不満も出ています。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-23

features:
  - "Claude Opus 5.5 発表"
  - "Opus 5.5 価格改定 (入力$4/出力$20 per Mtok)"
  - "Opus 5.5 の蒸留対策セーフガード (preserved thinking)"
  - "Claude Code v2.1.280 リリース"
  - "Pro / Team Standard の既定モデルが Opus に変更"
  - "`CLAUDE_CODE_MAX_MCP_DESCRIPTION_LENGTH` 追加"
  - "シンボリックリンク経由の書き込み判定を修正"
  - "auto モードの安全チェック挙動を修正"
  - "`/effort` のモデル別扱いを変更"
  - "fullscreen モードのマウス操作拡張"
  - "プラグインマーケットプレイス名の詐称を拒否"
  - "VS Code 拡張にダイアログを大幅追加"
  - "Claude Tag の Slack ネイティブ連携強化"
codex_review: "最上位モデルの値下げと既定化は、エージェント利用の裾野を広げる現実的な一手で面白い。ただ、デモの熱気に比べて実利用の評価はまだ薄く、レート制限や effort の初期値が体験を左右しそうだ。 ※ このレビューは後日生成されました"
codex_importance: 4
---

## 公式アップデート

### Claude Opus 5.5 発表

9月22日、新しい最上位モデル **Claude Opus 5.5** (`claude-opus-5-5`) が公開されました。Fable 5.1 相当の性能でありながら、Opus 5 比で約40%低コスト・出力約30%高速とされています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.280)

### Opus 5.5 の価格改定

Opus 5.5 の料金は以下の通りで、Opus 5 (入力$5 / 出力$25 / キャッシュ読み取り$0.50) から引き下げられています。

- 入力: **$4 / Mtok**
- 出力: **$20 / Mtok**
- キャッシュ読み取り: **$0.20 / Mtok**

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.280)

### Opus 5.5 の蒸留対策セーフガード

Opus 5.5 には "preserved thinking" による anti-distillation (蒸留対策) が組み込まれ、約2,000シナリオの行動監査によるアラインメント改善が行われたと説明されています。

[ソース](https://www.anthropic.com/news)

### Claude Code v2.1.280 リリース

Opus 5.5 対応を含む大型リリースです。主な変更点は以下の通り。

**モデル・プラン関連**

- `claude-opus-5-5` を **既定の Opus モデル** として追加。**1M コンテキスト**に対応
- **Pro / Team Standard プランの既定モデルを Sonnet から Opus に変更**。Max・Team Premium・Enterprise と揃いました
- `/effort` がモデル別設定になる前に保存された effort レベルは、Opus 5.5 のような新規モデルには適用されず、各モデルの既定値から開始するよう変更
- Opus 4.7 / Opus 4.8 / Fable 5 が、`-p` や Agent SDK・プロジェクト設定・`--settings` の `effortLevel`・モデル別レベルよりも launch-default effort を優先してしまう挙動を停止

**設定・セキュリティ**

- `CLAUDE_CODE_MAX_MCP_DESCRIPTION_LENGTH` を追加。MCP ツール説明・サーバー指示の 2,048 文字上限を、セッション内の全 MCP サーバーに対して変更可能に
- シンボリックリンク経由の書き込みが、リンク先ではなくツリー内の見かけのパスで判定されていた問題を修正。`acceptEdits`・許可ルール・auto モードがツリー外への書き込みを誤って承認しなくなりました
- auto モードの安全チェック挙動を修正。判定が拒否された場合は再試行せず1回で拒否し、無応答の場合はバックオフして10回連続でターンを停止
- 予約済みマーケットプレイス名を模した名前のプラグインマーケットプレイスは追加を拒否し、既に追加済みのものも読み込みを停止するよう変更

**UI**

- fullscreen モードのマウス操作を拡張。`/skills` リストのホイールスクロール、`/plugin` 内のスキル状態のクリック操作に対応
- [VS Code] `/status`、`/sandbox`、`/chrome`、`/export`、`/skills`、`/plan` をタイプ入力でダイアログ起動できるように

**Claude Tag (Slack)**

- Slack ネイティブの Working インジケータ・Stop ボタン・スレッドタイトルをチャンネル内スレッドに追加。インジケータは Claude の処理完了まで表示され、Stop でタスクを中断可能

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.280)

## コミュニティの反応

### Claude Opus 5.5 発表

#### ポジティブ

> Claude Opus 5.5 でベイエリアから Sea Ranch の3Dミニマップを一発で生成できたのが衝撃的。 — @kyleturman [出典](https://x.com/kyleturman/status/2102502327668326621)

> Claude Opus 5.5 に JavaScript でアニメーションの全フレームをコーディングさせた結果がすごい。 — @0x0SojalSec [出典](https://x.com/0x0SojalSec/status/2102502197741408343)

> Claude Opus 5.5 に「居心地の良い養蜂ゲーム」を依頼したら、画像ファイル一切なしでコードだけで蜂や花、養蜂家まで動く完成形ができた。 — @Benerits [出典](https://x.com/Benerits/status/2102501942731694429)

#### ネガティブ

> Claude Code の5時間制限がネックで Opus 5.5 はスキップするかも。GPT-6 Sol が出たのでそっちを使う。 — @BLUECOW009 [出典](https://x.com/BLUECOW009/status/2102502062873534466)

#### Tips

> Opus 5.5 は「タスク全体を丸ごと渡し、完了条件とチェックインタイミングを指定」「思考指示は不要」「長時間実行後にモデル自身に次の必要情報を問い直す」のが効果的。 — @h_a_t_a_r_a_k_e [出典](https://x.com/h_a_t_a_r_a_k_e/status/2102500254558097418)

### Opus 5.5 価格改定

#### ポジティブ

> Opus 5.5 の価格引き下げがリーク通りで、Claude Code バイナリですでに使ってみたところ安くなった実感がある。 — @HarshithLucky3 [出典](https://x.com/HarshithLucky3/status/2102427942177689600)

> Claude Opus 5.5 で1プロンプトだけでブランドを作ってみた。実際に触って便利だった。 — @yahyavision [出典](https://x.com/yahyavision/status/2102503496977449018)

#### ネガティブ / Tips

該当なし。

### Opus 5.5 の蒸留対策セーフガード

X 検索 (直近7日間) では、個人ユーザーによる実体験・感想の投稿は**該当なし**でした。公式発表の引用は多数あるものの、実際に触った所感としての言及は確認できていません。

### Claude Code v2.1.280 リリース

#### ポジティブ

> Opus 5.5 が Claude Code v2.1.280 で1Mコンテキスト対応のデフォルト Opus モデルとして表示され、早速使ってみて性能に期待が持てる。 — @Adidotdev [出典](https://x.com/Adidotdev/status/2102430628407128258)

> Claude Code CLI で Opus 5.5 がおすすめデフォルトとして1Mコンテキストで表示され、更新を待っていたユーザーにとって嬉しい発見。 — @DevAdventur3s [出典](https://x.com/DevAdventur3s/status/2102429232705970356)

> Claude Code にリセット権が追加され、Opus 5.5 を早速使ってみたがかなり良い予感がする。 — @IHayato [出典](https://x.com/IHayato/status/2102502250145030503)

#### Tips

> Claude Code v2.1.280 へのアップデートで Opus 5.5 が利用可能になったので早めに更新を。 — @jawadmakes [出典](https://x.com/jawadmakes/status/2102449124360495368)

> Opus 5.5 (1M context) が Claude Code v2.1.280 でライブ確認できたので、1Mモードを試す価値あり。 — @AI_Screening [出典](https://x.com/AI_Screening/status/2102433375609082129)

### Pro / Team Standard の既定モデル変更

#### ポジティブ

> 実際に Opus 5.5 を日常ドライバーとして使い、自然なコミュニケーションとコンテキスト理解が向上した点が便利。 — @theoaibuilds [出典](https://x.com/theoaibuilds/status/2102482864734642286)

#### ネガティブ

> Pro / Team Standard で Sonnet から Opus に既定変更されたため、長時間セッション前に `/model` 確認が必要で予算オーバーのリスクあり。 — @ethereaglehq [出典](https://x.com/ethereaglehq/status/2102445371557572999)

#### Tips

> `/model opusplan` コマンドで計画時のみ Opus、以降 Sonnet に自動切替。設定は `.claude/settings.json` に保存可能。 — @maztak_ [出典](https://x.com/maztak_/status/2100098477879632015)

> 設計は Opus 5.5 high、日常は medium、単純作業は low で使い分け。Sonnet 5 low と Opus 5.5 low のコストがほぼ同額になった点を活用。 — @muscle_coding [出典](https://x.com/muscle_coding/status/2102469524998271482)

### auto モードの安全チェック挙動を修正

#### ネガティブ

> 昨日、Bash の安全判定がタイムアウトして auto mode が進まなくなった。「いま判定できないので、少し待ってからやり直して」が繰り返し出る状態。2.1.280 で、判定が返らないときは間隔を空けて再試行し、10回続いたらターンを止めるよう直った。同じ足止め、ありますか？ — @ai_hack_dx [出典](https://x.com/ai_hack_dx/status/2102457002308038802)

ポジティブ・Tips は**該当なし**。

### `/effort` のモデル別扱いを変更

#### ネガティブ

> Claude Code 更新で Opus 5.5 使用時に thinking effort が「high」から「medium」デフォルトにリセットされた。過去の保存設定が引き継がれず不便。 — @closetheloopdev [出典](https://x.com/closetheloopdev/status/2102495714840293461)

#### Tips

> Claude Code 2.1.280 で Opus 5.5 移行後、各ロールの effort 設定は 5.5 が無視するようになり、インストーラーが thinking settings を書かなくなった点に注意。 — @anilsoylu [出典](https://x.com/anilsoylu/status/2102497163603497301)

### その他の機能

以下のトピックについては、X 検索 (直近7日間) で個人ユーザーの実体験・感想投稿は**該当なし**でした。

- `CLAUDE_CODE_MAX_MCP_DESCRIPTION_LENGTH` 追加
- シンボリックリンク経由の書き込み判定の修正
- fullscreen モードのマウス操作拡張
- プラグインマーケットプレイス名の詐称を拒否
- VS Code 拡張のダイアログ大幅追加
- Claude Tag の Slack ネイティブ連携強化

### 日本語コミュニティ

Opus 5.5 リリース直後のため日本語記事はまだ出ていませんが、Claude Code の運用・ガードレール設計に関する記事が引き続き活発です。

- [【Claude Code】CLAUDE.md はソフトガード、Hooks はハードガード 〜push前チェックを hook と CI で二重化する〜](https://zenn.dev/m16_llc/articles/claude-code-hooks-hard-guardrails) (Zenn / まさぴょん🐱) — CLAUDE.md は context であって強制される設定ではないという公式記述を踏まえ、PreToolUse hook と CI で二重化する設計
- [Claude Code の PreToolUse フックで rm -rf を止める設定と、その限界](https://qiita.com/aicoding-guide/items/1bd51b5ff48a8ceff299) (Qiita / aicoding-guide) — 権限モードより先に発火する PreToolUse フックの強みと限界
- [Claude Code に Bash("rm*") を deny しても消される問題](https://zenn.dev/y_shinoda/articles/only-setting-claude-code-permissions-is-risky) (Zenn / 篠田 将彦) — `rm` を deny しても `find -delete` で回避されてしまう実例
- [無人の claude -p に書込を閉じたつもりが、3つの見落としで開いていた](https://qiita.com/masamitsu_sera/items/03030328d1fc889f4579) (Qiita / masamitsu_sera) — `--allowed-tools "Write(...)"` のパターン外への書込が通ってしまった実測。本日の symlink 書き込み判定修正とも関連する領域
- [ルールを文書に足しても違反は減らなかった。コードに落とした8件だけ再発0だった](https://qiita.com/untactit/items/59646dbed96975de6050) (Qiita / untactit) — 常駐指示ファイルを 90KB→147KB に増やしても違反が減らなかった48日間の記録
- [Claude の利用量上限を「寝かせずに」乗り越える：resume-queue パターンの設計と実装](https://zenn.dev/tarooo137/articles/claude-usage-limit-resume-queue) (Zenn / Tarooo) — 上限到達で Bot ごとフリーズする問題への対処。既定モデルが Opus になった今回の変更で関心が高まりそうな領域
- [主要コーディングエージェントCLI6種の仕様比較：フック・権限・サブエージェント・MCP設定](https://zenn.dev/yuuichie/articles/4908c9970033db) (Zenn / Yuuichi Eguchi) — Claude Code・Codex・OpenCode 等の設定ファイルとイベント機構の比較

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.280](https://github.com/anthropics/claude-code/releases/tag/v2.1.280)
- [Anthropic News](https://www.anthropic.com/news)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
