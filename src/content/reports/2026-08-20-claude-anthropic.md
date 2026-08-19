---
title: "Claude Code v2.1.236とタンパク質設計の実証"
summary: "Claude Code v2.1.236 が2026年8月19日に公開され、ANTHROPIC_DEFAULT_MODEL 環境変数や SendMessage の notify_when_idle が追加されました。auto mode は Monitor 権限の審査強化とマルチ基盤対応が入っています。Anthropic は Claude によるタンパク質バインダー設計で15標的中14成功という研究結果を公表し、X上で研究者の反応が集まっています。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-08-20

features:
  - "Claude Code v2.1.236"
  - "ANTHROPIC_DEFAULT_MODEL 環境変数"
  - "SendMessage の notify_when_idle"
  - "サンドボックスのワイルドカード読み取り拒否強化"
  - "auto mode の Monitor 権限見直し"
  - "auto mode の他基盤対応"
  - "auto mode の git status 判定修正"
  - "/goal の自動チェックイン"
  - "/usage のクレジット表示拡張"
  - "/model ピッカーの改善"
  - "セッションrecapの上限設定"
  - "スラッシュコマンドの誤入力挙動変更"
  - "SIGTERM時の挙動修正"
  - "Remote Control のオフライン即時反映"
  - "SendMessage の事前バースト拒否"
  - "[VSCode] トランスクリプトのスクリーンリーダー対応"
  - "Claudeによるタンパク質設計の加速"
  - "Claude Opus 5 の化学データ解析"
codex_review: "製品面では地味な運用改善の積み上げが効いていて、玄人受けする更新だと感じる。いっぽう本丸はタンパク質設計で、数字はまだ慎重に見たいが、AI創薬の期待を一段現実寄りにした。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.236

2026年8月19日に公開されました。環境変数と通知機能の追加、auto mode の判定強化、多数のバグ修正を含みます。

[Claude Code Releases - v2.1.236](https://github.com/anthropics/claude-code/releases/tag/v2.1.236)

### ANTHROPIC_DEFAULT_MODEL 環境変数

新規セッションが開始するモデルを指定する環境変数 `ANTHROPIC_DEFAULT_MODEL` が追加されました。`/model` での選択は引き続きこれを上書きし、その選択は再起動をまたいで保持されます（`ANTHROPIC_MODEL` とはこの点が異なります）。

### SendMessage の notify_when_idle

セッション間の `SendMessage` に `notify_when_idle` オプションが追加されました。同一マシン上の別 Claude Code セッションに対し、次にアイドル状態になった際に一度だけ通知を送るよう依頼できます。オプトイン・単発で、ポーリングは行いません。macOS と Linux が対象です。

### サンドボックスのワイルドカード読み取り拒否強化

macOS において、`**/.env` のようなワイルドカードの読み取り拒否ルールが、許可された読み取り領域の内側でも優先されるようになりました。マッチしたディレクトリの中身も対象に含まれ、拒否対象ファイルのリネームによる回避もできなくなりました。

### auto mode の Monitor 権限見直し

auto mode の実行中は `Monitor` の許可ルールが一旦脇に置かれるようになりました。これにより Monitor コマンドは Bash コマンドと同じ審査を通ります。

### auto mode の他基盤対応

Bedrock / Vertex AI / Foundry 上、およびテレメトリを無効化している環境でも、分類器が Claude API と同じ既定値（重大度スコア付き分類を含む）を使用するようになりました。

### auto mode の git status 判定修正

リポジトリの `status.showUntrackedFiles=no` 設定によって、作業ツリーがクリーンであると誤って報告される問題が修正されました。

### /goal の自動チェックイン

長時間のバックグラウンド処理の背後でゴールが待機状態になっているアイドルセッションについて、30分後（以降1時間、2時間の間隔）に自動でチェックインするようになりました。従来はユーザーが戻るまで待機し続けていました。

### /usage のクレジット表示拡張

`/usage` が Team および Enterprise メンバーに対しても使用クレジットの消費行を表示するようになりました。未消費の状態では上限行を0%で表示します。

### /model ピッカーの改善

`/model` のピッカーがターミナルの高さを超えて描画される問題が修正され、ウィンドウに収まる件数だけを表示し、残りはスクロールで到達できるようになりました。あわせて、ハイライトは最新モデル名のみに限定されました。

### セッションrecapの上限設定

自動生成される recap および `/recap` のテキストが、単語境界で400文字に制限されるようになりました。まれに発生していた recap の暴走が抑えられます。

### スラッシュコマンドの誤入力挙動変更

スラッシュコマンドのタイプミス、またはそのセッションで利用できないコマンドに対して Enter を押した場合、最も近い曖昧一致を実行するのをやめ、その旨を報告するようになりました。プレフィックスとエイリアスは従来どおり実行されます。

### SIGTERM時の挙動修正

print / SDK モードでの SIGTERM 受信時に、中断されたターンや擬似的なツール拒否を記録せずに終了するようになりました。実行中のコマンドは引き続き終了され、プロセスの終了コード143も維持されます。

### Remote Control のオフライン即時反映

CLI の終了やターミナルのクローズから数秒以内に、Remote Control がそのセッションをオフラインとして表示するようになりました。

### SendMessage の事前バースト拒否

`SendMessage` が、受信側セッションの inbox が受け付ける量を超える連続送信について、送信済みと報告しておいて実際には破棄するのではなく、事前に拒否するようになりました。

### [VSCode] トランスクリプトのスクリーンリーダー対応

VS Code 拡張のトランスクリプトにスクリーンリーダー対応が追加されました。返信・権限要求・エラー・状態変化のライブ読み上げと、ターン単位の見出しナビゲーションが利用できます。

### Claudeによるタンパク質設計の加速

2026年8月18日、Anthropic は Claude を用いたタンパク質バインダー設計の研究結果を公表しました。15の標的のうち14で設計に成功し、ヒット率は22〜35%（一般的には10〜15%とされる）と報告されています。

### Claude Opus 5 の化学データ解析

Claude Opus 5 が NMR / LC-MS の生データファイルを25分以内で解析し、実験室水準と一致する結果を出せることが実証されました。

## コミュニティの反応

### ANTHROPIC_DEFAULT_MODEL 環境変数

#### ポジティブ

> ANTHROPIC_DEFAULT_MODEL で新規セッションのモデルを固定できるのが地味に便利。`/model` で上書きもできるので柔軟性も保たれた良い設計だと思う — @hinata__moon [出典](https://x.com/hinata__moon/status/2090181633249087627)

> ANTHROPIC_DEFAULT_MODEL が今回の隠れた目玉。全員が毎セッション `/model` を打つのを覚えていなくても、チーム全体のデフォルトを設定できるようになった — @adar2378 [出典](https://x.com/adar2378/status/2090180976643322016)

### auto mode の Monitor 権限見直し

#### ポジティブ

> auto mode で毎回の許可確認がほぼなくなり作業が止まらなくなった。危険な操作だけ止めてくれる、地味に大きい変化 — @note_shirokuma [出典](https://x.com/note_shirokuma/status/2089484848440496458)

> 危険コマンドの検知率が人間の13.6%に対し auto mode は89%というデータに納得。常時 auto で使いつつ settings.json で安全の線引きを設定して快適 — @muscle_coding [出典](https://x.com/muscle_coding/status/2087871798591283507)

#### ネガティブ

> auto mode 実行中は `Bash(python:*)` のような広い allow ルールが一時停止され、classifier と同じ審査を通る仕様。設定ファイルと実際の動作にギャップが生じてメンタルモデルが崩れる — @qyromat0 [出典](https://x.com/qyromat0/status/2089699169866809669)

> auto mode を ON にしたのに、突然 Bash コマンドの確認が嵐のように再開して困っている — @hacci98753072 [出典](https://x.com/hacci98753072/status/2088307758378766478)

#### Tips

> `/auto-mode-setup` で信頼するリポジトリ・ドメインを設定し、Shift+Tab でいつでもモードを切り替える。`defaultMode` で固定も可能 — @engineer_num1 [出典](https://x.com/engineer_num1/status/2088441582429298892)

> `/status` で現在有効なルールを確認し、広い allow は狭い deny に置き換える（deny は auto mode でも常に有効） — @qyromat0 [出典](https://x.com/qyromat0/status/2089699493050458242)

### /usage のクレジット表示拡張

#### ポジティブ

> Claude Code / Cowork が勝手に起動するバグで16万円の誤請求が発生したが、Anthropic が全額返金に加えて16万円分のクレジットを付与する丁寧な対応をしてくれた — @usutaku_channel [出典](https://x.com/usutaku_channel/status/2089858810261495920)

#### ネガティブ

> Team プランで5時間枠を2時間10分でほぼ使い切った — @chenguangpan [出典](https://x.com/chenguangpan/status/2089830266324058490)

> Enterprise seat を含む50%ブーストでもまだ足りず、すぐに尽きる — @Ozdotdotdot [出典](https://x.com/Ozdotdotdot/status/2089747667773497634)

> 使用開始2分34秒で5時間枠の24%を消費した。トークンが少なくても消費が速い — @ThePandector [出典](https://x.com/ThePandector/status/2089699409097326760)

#### Tips

> `/usage` で現在の使用状況を確認し、50%ブーストが終了する前に大規模な作業を済ませておく — @billiramirezdev [出典](https://x.com/billiramirezdev/status/2089773021271630274)

### Claudeによるタンパク質設計の加速

#### ポジティブ

> Claude に対象タンパク質と受容体の結合3Dモデルを作らせ、遺伝子座の違いによる結合の差をシミュレーションさせたら、2分でほぼ論文品質の図とアニメーションが返ってきた。正しいかは分からないが、それでも印象的 — @oldethug [出典](https://x.com/oldethug/status/2090173330821157050)

> Anthropic が示したのは単なるタンパク質生成ではない。Claude が自律的にエピトープを選び、複数のタンパク質設計・構造予測モデルを操作し、候補を最適化・ランク付けして、15の評価可能な標的のうち14で確認済みバインダーを作り出した — @Tkaraletsos [出典](https://x.com/Tkaraletsos/status/2090177094353645686)

> Claude のバインダー設計キャンペーンについて簡易的な多様性分析をした。全体的に良好で、ハック的な挙動も少ない。スキル感としてはおおよそ若手の大学院生といったところ — @jboysen0 [出典](https://x.com/jboysen0/status/2090168485825417316)

### Claude Opus 5 の化学データ解析

#### ポジティブ

> Claude Opus 5 が raw NMR と LC-MS ファイルを19〜23分で解析し、実験室の水素カウントや純度（96.4% vs 96.33%）とほぼ一致する結果を出した — @Dr_Singularity [出典](https://x.com/Dr_Singularity/status/2089854839002185904)

> Opus 5 が NMR / LC-MS の生データを短いプロンプトだけで処理し、外部の受託ラボと一致する解析を23分・19分で完了した — @Marwan_3atef [出典](https://x.com/Marwan_3atef/status/2089970978868568277)

> Opus 5 の NMR / LC-MS 自動解析は化学ワークフロー自動化の実証例として説得力があり、科学の進展を加速すると評価できる — @TheSynapseX [出典](https://x.com/TheSynapseX/status/2090062409448763614)

### その他の項目

`SendMessage` の `notify_when_idle`、サンドボックスのワイルドカード読み取り拒否強化、auto mode の他基盤対応、auto mode の git status 判定修正、`/goal` の自動チェックイン、`/model` ピッカーの改善、セッション recap の上限設定、スラッシュコマンドの誤入力挙動変更、SIGTERM 時の挙動修正、Remote Control のオフライン即時反映、`SendMessage` の事前バースト拒否、VS Code のスクリーンリーダー対応については、個人ユーザーの実体験にあたる X 投稿は**該当なし**でした。v2.1.236 の公開が8月19日であり、反応が出るまでの時間が経っていないことが主な要因です。

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.236](https://github.com/anthropics/claude-code/releases/tag/v2.1.236)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
