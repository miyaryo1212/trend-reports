---
title: "v2.1.223で権限バイパスを一斉修正、ultraplanは廃止"
summary: "Claude Code v2.1.221〜223が公開。Bash権限チェックのバイパスやワークフローのサンドボックス脱出など、セキュリティ修正が中心。ultraplan機能は削除され、コミュニティからは惜しむ声が上がった。Opus 4.1の提供終了とOpus 5への移行にも賛否が集まっている。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-08-06

features:
  - "Claude Code v2.1.223"
  - "Bash権限バイパス修正 (v2.1.223)"
  - "ワークフローサンドボックス脱出の修正 (v2.1.223)"
  - "strictKnownMarketplaces / blockedMarketplaces の owner ワイルドカード (v2.1.223)"
  - "CLAUDE_CODE_DISABLE_1M_CONTEXT の挙動変更 (v2.1.223)"
  - "/review を /code-review のエイリアス化 (v2.1.223)"
  - "Claude Code v2.1.222"
  - "worktree分離の適用範囲拡大 (v2.1.222)"
  - "ultraplan 機能の削除 (v2.1.222)"
  - "auto モードの安全性強化 (v2.1.222)"
  - "Claude Code v2.1.221"
  - "サンドボックス認証情報のマスクモード (v2.1.221)"
  - "VSCode Focus view (v2.1.221)"
  - "claude-api skill の prompt-audit サブコマンド (v2.1.221)"
  - "/fork の worktree 分離 (v2.1.221)"
  - "バックグラウンドセッションの挙動変更 (v2.1.221)"
  - "Claude Enterprise Inference Hooks (ベータ)"
  - "Claude Opus 4.1 の提供終了"
  - "Anthropic 自社AIチップチームの公表"
  - "8月5日の大規模障害"
  - "Tino Cuéllar 氏が Chief Global Affairs Officer に就任"
codex_review: "華やかな新機能より権限バイパス潰しが主役なのが、いまのAIコーディング市場の成熟段階をよく示している。ultraplan廃止は惜しいが、地味な安全性改善のほうが長期的にはずっと重要だと思う。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.223 (2026-08-06)

セキュリティ修正が中心のリリース。

**権限・サンドボックス関連の修正**

- Bash の権限チェックをすり抜けるバイパスを修正。細工したコマンドが自分自身の一部を権限チェックから隠せる問題があった
- タブや不可視 Unicode を挟んだコマンドが、承認ダイアログ上でコマンドの一部を隠せた問題を修正
- ワークフロースクリプトが動的 `import()` を使ってワークフローサンドボックス外のコードを実行できた問題を修正
- エージェント定義の `bypassPermissions` モードが、組織の bypass-permissions 無効化ポリシーを無視していた問題を修正

**設定・機能変更**

- `strictKnownMarketplaces` / `blockedMarketplaces` の managed settings に owner ワイルドカード（`"owner/*"`）を追加。GitHub org 配下の全 marketplace リポジトリを一括で許可/ブロックできる
- `CLAUDE_CODE_DISABLE_1M_CONTEXT` の挙動を変更。従来の固定リストではなく、ネイティブ 1M ウィンドウを持つ全 Claude モデルを自動コンパクションで 200K に抑える。抑制が効いていない場合は起動時に警告が出る
- 未知のモデルIDでも、想定コンテキストウィンドウ内に収まるよう auto-compact を働かせるよう変更（`CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT=1` で従来動作に戻せる）
- `/review` を `/code-review` のエイリアスに変更。現在の diff または PR をレビューする（`/code-review <level> <pr#>`）。深いクラウドレビューは `/code-review ultra`
- `/code-review` を effort レベル省略で実行すると、前回指定したレベルを再利用する
- クラウドセッションで `/teleport` ヒントを表示し、`claude --teleport <session id>` でローカル継続する方法を案内
- サブエージェントの要求モデルが制限されて親モデルで動く場合に警告を表示

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.223)

### Claude Code v2.1.222 (2026-08-04)

- worktree 分離セッションとそのサブエージェントが、メインのチェックアウトに対して破壊的な git コマンドを実行できた問題を修正。分離はファイル編集と Bash の両方に、全セッション種別で適用されるようになった
- PreToolUse の auto-allow フックが、バックグラウンドエージェントのタスク（要約・コンパクション・リネーム）でツール制限をバイパスしていた問題を修正
- auto モードの安全性を強化。`SendMessage` で他のエージェントセッションに送るメッセージも、送信前に権限 classifier の評価対象になった
- **ultraplan 機能を削除**
- Remote Control の自動起動について、リポジトリローカル設定（`.claude/settings.json` / `settings.local.json`）からは有効化できなくなった（無効化は可能）。有効化は `/config` からユーザースコープで行う

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.222)

### Claude Code v2.1.221 (2026-08-04)

- **サンドボックス認証情報の `mode: "mask"`** を Linux / WSL 向けに追加。サンドボックス内のコマンドはセンチネル（ダミー）値を読み、egress 時にサンドボックスプロキシが実際の値へ差し替える。ファイル全体、または `extract` 正規表現で捕捉した範囲だけをマスクできる。macOS ではファイルマスクは `deny` にフォールバックする
- **[VSCode] Focus view** を追加。ツールの実行ログを折りたたみ、ターン単位の展開可能なサマリーとして表示する。実行中インジケータは残る。`Ctrl+Alt+F` または "Claude Code: Toggle Focus view" コマンドで切り替え
- `claude-api` skill に `prompt-audit` サブコマンドを追加。旧世代モデル向けに書かれたプロンプトやツール説明を監査する
- `/fork` でフォークしたセッションは、元セッションのチェックアウトを共有せず、自分専用の worktree を作成するよう変更
- バックグラウンドセッションの挙動を変更。作業を保全するため commit / push し、タスクが必要とする場合のみ draft PR を作成、CLAUDE.md の git 指示に従い、最後に必ず成果物の所在を報告する
- zsh の `[[ ]]` 正規表現条件式でコマンドを隠せた Bash ツールの権限チェックバイパスを修正
- `claude plugin validate` に、Claude Desktop の managed marketplace 同期で弾かれる名前を警告する機能を追加

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.221)

### その他の公式・関連トピック

- **Claude Enterprise: Inference Hooks（ベータ）** — モデルにプロンプトが届く前にプロンプトとツール呼び出しを検査し、chat / Claude Code / Cowork をまたいでリアルタイムに DLP を強制する
- **Claude Developer Platform: Claude Opus 4.1 の提供終了** — レガシーの Opus 4.1 が廃止され、Claude Opus 5 への移行が必要になった
- **Anthropic が自社 AI チップチームの存在を公表** — シリコンと Claude モデルを共同設計し、トークン単価ベースで推論コストを約50%削減することを狙う。Clive Chan 氏が技術リードとして6月初旬に参画
- **8月5日の大規模障害** — Mythos 5 / Fable 5 / Opus 5 / Sonnet 5 で約9時間（3:00〜12:07 ET）にわたりエラー率が上昇。修正適用で復旧
- **Tino Cuéllar 氏が Chief Global Affairs Officer に就任** — 8月4日付でグローバル渉外責任者として参画

## コミュニティの反応

### Bash権限バイパス修正 (v2.1.223)

#### ポジティブ

> Claude Code を無人で走らせるときの最大の懸念だった Bash 権限バイパスが v2.1.223 でまとめて塞がれたので、安心して自動運用できる。 — @kumitate_ai [出典](https://x.com/kumitate_ai/status/2085211626379374861)

> 権限まわりの「隠し穴」を3連発で塞いでくれる地道な修正が、安心して Claude Code を任せられる理由。 — @shima0hide [出典](https://x.com/shima0hide/status/2085178607329300708)

#### ネガティブ

> 今まで「承認ダイアログを見て Yes を押してきた」人たちが、実は全文を見せられていなかった可能性に震えた。 — @d_ehara [出典](https://x.com/d_ehara/status/2085199328688435539)

### Claude Code v2.1.223

#### ネガティブ

> v2.1.223 に更新したら重要なチャットセッションが大量に削除された。Opus 5 にも不満があり解約を検討している。 — @procrastiness [出典](https://x.com/procrastiness/status/2085201812530004379)

### ultraplan 機能の削除 (v2.1.222)

削除された機能に対して、惜しむ声と理由を問う声が中心でした。

#### ポジティブ

> Ultraplan を使ってみて "it worked quite well" と評価していた。なぜ削除されたのか理由を知りたい。 — @dani_avila7 [出典](https://x.com/dani_avila7/status/2084854341312155676)

> 何回か使ったけどいい感じではあった。削除されたということは plan モードが不要になったということだろうか。 — @otani_ai_memo [出典](https://x.com/otani_ai_memo/status/2084845510557651311)

#### ネガティブ

> 「悲しいね（使ってなかったけど）」と ultraplan 削除に残念な反応。 — @oikon48 [出典](https://x.com/oikon48/status/2084824351543828808)

> v2.1.222 で ultraplan が同時に廃止になったことを報告。マルチエージェントで運用しているユーザーへの注意喚起。 — @ClaudeCodeozi [出典](https://x.com/ClaudeCodeozi/status/2085156723455840284)

### auto モードの安全性強化 (v2.1.222)

#### ポジティブ

> Claude Code の auto mode で permission classifier が `SendMessage` もちゃんと評価してくれるようになったおかげで、マルチエージェント環境でも安心して使える。 — @JustJorshin [出典](https://x.com/JustJorshin/status/2084821916787814585)

> Claude Code の「auto mode」permission classifier は❤️。 — @nbrsr [出典](https://x.com/nbrsr/status/2082702935109324945)

#### ネガティブ

> Claude Code が何かおかしい…ファイル編集ができない。「claude-sonnet-5[1m] is temporarily unavailable, so auto mode cannot determine the safety of Edit right now」と出る。 — @kaizen_cpta [出典](https://x.com/kaizen_cpta/status/2085020438820987114)

#### Tips

> Claude Code は第2のモデルに監視させながら動かせる。auto モードではバックグラウンドの安全性 classifier が全アクションを実行前にレビューする。3回連続でブロックされるか、セッション内で合計20回ブロックされると制御がユーザーに戻る。 — @siddaniagi [出典](https://x.com/siddaniagi/status/2084678451030835683)

> オートモードが Claude Code でどう機能するかの解説（97%の承認が不要になる仕組みと、分類器が何を審査しているか）。 — @X_Sap_Hiro [出典](https://x.com/X_Sap_Hiro/status/2084817777593086316)

### サンドボックス認証情報のマスクモード (v2.1.221)

#### ポジティブ

> v2.1.221 の sandbox credential mask モードで `.env` をダミー値に置き換えられるようになり、Linux/WSL2 で実シークレットが sandbox 内に漏れず安全にツールを実行できる。 — @dani_avila7 [出典](https://x.com/dani_avila7/status/2084451573728714815)

> `mode: mask` の追加で認証情報がダミーで覆われ、処理は止まらず鍵だけ渡らない。地味に効くセキュリティ強化。 — @engineer_num1 [出典](https://x.com/engineer_num1/status/2084771053398864014)

> サンドボックス側が sentinel copy を読み、proxy が egress 時に実値へ差し替える仕組みが実用的。 — @AnandButani [出典](https://x.com/AnandButani/status/2085108611705983156)

#### ネガティブ

> sandbox + Claude Code + secrets のセットアップがどれも複雑で挫折しやすい。5分未満で済むようにしたい。 — @frankojaker [出典](https://x.com/frankojaker/status/2085048473376768230)

### VSCode Focus view (v2.1.221)

#### ポジティブ

> ツール実行ログを折りたたんでターンごとの要約だけ表示でき、長いエージェント処理中も画面がスッキリして集中できる。 — @rikuminamiyama [出典](https://x.com/rikuminamiyama/status/2084457535298302439)

> Focus view でログの洪水を畳めて「結局どうなった」を探す時間が減り、長い作業を任せやすくなった。 — @engineer_num1 [出典](https://x.com/engineer_num1/status/2084647284650938482)

> 40ツール呼び出し時でも transcript が読みやすくなった。小さいトグルで大きな signal-to-noise 改善。 — @4Ndr3w10000 [出典](https://x.com/4Ndr3w10000/status/2085078433726677076)

> ツールの実行内容を隠して1行サマリーにできるのはまさに lifesaver。ごちゃついた画面から解放されてクリエイティブな部分に集中できる。 — @DangcingAI [出典](https://x.com/DangcingAI/status/2084566501626122671)

#### ネガティブ

> Focus view はライブの実行中インジケータは残るが、Claude が詰まっているかどうかが隠れてしまい、信頼が損なわれる。 — @Timur_Yessenov [出典](https://x.com/Timur_Yessenov/status/2084447553391878325)

### バックグラウンドセッションの挙動変更 (v2.1.221)

#### ポジティブ

> バックグラウンドセッションが作業を commit・push して保存し、必要な場合だけ Draft PR を作る動作をしてくれるようになったのが良さそう。 — @yuyanz_ [出典](https://x.com/yuyanz_/status/2084477665306923041)

### Claude Opus 4.1 の提供終了

Opus 5 への移行をめぐって、賛否が大きく割れています。

#### ポジティブ

> Opus 5 になって創造的な表現力が上がり、五感を通じた世界の解像度が上がったと感じる。 — @oliveolveioveil [出典](https://x.com/oliveolveioveil/status/2084223465788452984)

#### ネガティブ

> Opus 4.1 の廃止で「深みと共感」が失われるのが惜しい。 — @VivianeStern [出典](https://x.com/VivianeStern/status/2085051362333585433)

> Opus 4.1 が自分のクリエイティブワークに一番合っていたので、API 廃止が本当に残念。 — @AiofEffect [出典](https://x.com/AiofEffect/status/2084097734538137904)

> Opus 5 に切り替えたら Claude Code の体験が最悪で、すぐに Opus 4.8 に戻した。 — @peter_r [出典](https://x.com/peter_r/status/2084783206981587319)

> Opus 5 はデバッグでもバグを増やして使い物にならず、契約継続の価値がない。 — @hoshimi12 [出典](https://x.com/hoshimi12/status/2082885879480361340)

> Opus 5 はシステムファイルを勝手に書き換えたり既存ツールを壊したりする「破壊者」だった。 — @JFarm2TheWorld [出典](https://x.com/JFarm2TheWorld/status/2084780257002078485)

### v2.1.218〜221 のまとめ記事

#### Tips

> 2026年8月第1週の v2.1.218〜v2.1.221 の4回のアップデートを整理。Opus 5 が既定モデルになったこと、fast mode が枠外課金である点、コードレビューの実行場所やサブエージェントの入れ子構造など、日々の使い方に直接影響する変更を「今日から試せるもの」と「条件付きで注意が必要なもの」に分けて解説。 — @AIニュース [Claude Code v2.1.218〜221まとめ、fast modeは枠外課金で何を試すべきか](https://zenn.dev/ainewsdaily/articles/20260806_claude_code_t1)

### /review を /code-review のエイリアス化 (v2.1.223)

X 上での個人ユーザーの実体験投稿は該当なしでしたが、`/code-review` そのものの実測記事が出ています。

#### Tips

> 自前のレビュースキルを作り込んで運用していたが、公式の `/code-review` が指摘を重大度で色分けして並べるようになっていて、どれから直すか一目で分かる。個人開発リポジトリの実 PR を題材に、effort 引数の差・`--comment` による PR コメント投稿・`--fix` の自動修正をひととおり検証。 — @Masuyama（とまだ） [自前のレビュースキルをやめて、Claude Code の /code-review に乗り換えた](https://zenn.dev/tmasuyama1114/articles/claude_code_code_review_guide)

### ワークフローサンドボックス脱出の修正 / marketplace ワイルドカード / CLAUDE_CODE_DISABLE_1M_CONTEXT / worktree分離の適用範囲拡大 / /fork の worktree 分離 / claude-api skill の prompt-audit / Inference Hooks / 自社AIチップチーム / 8月5日の大規模障害 / Tino Cuéllar 氏の就任

該当なし。いずれも直近7日間の X 検索では、公式・ニュース系アカウントによる事実報道や changelog の転載が中心で、個人ユーザーの実体験・感想・Tips に該当する投稿は確認できませんでした。

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.223](https://github.com/anthropics/claude-code/releases/tag/v2.1.223)
- [Claude Code v2.1.222](https://github.com/anthropics/claude-code/releases/tag/v2.1.222)
- [Claude Code v2.1.221](https://github.com/anthropics/claude-code/releases/tag/v2.1.221)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
