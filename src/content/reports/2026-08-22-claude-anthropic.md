---
title: "v2.1.239公開 — Bedrock二重課金修正と多数の不具合修正"
summary: "Claude Code v2.1.239 が2026年8月21日に公開されました。Bedrockストリーミングの二重課金修正、データレジデンシー枠のコスト表示、/claude-api upgrade の追加、Windowsのセッション間メッセージング対応など、機能追加と修正が多数含まれます。Xでは keybindingFlavor readline と ListAgents/SendMessage の実運用報告が目立ちました。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-08-22

features:
  - "Claude Code v2.1.239"
  - "データレジデンシー枠のコスト表示"
  - "/claude-api upgrade"
  - "Bedrock/Vertex/Foundry のフルスクリーン提案"
  - "claude.ai同期プラグインの @synced 表示"
  - "Alpine/musl ビルドのアドオン対応"
  - "使用量上限メッセージの改善"
  - "Bedrockストリーミングの二重課金修正"
  - "WebFetchキャッシュ保持の修正"
  - "Esc競合の修正"
  - "/goal チェックインのバックオフ"
  - "/goal のセッション復帰対応"
  - "ListAgents の自セッション名表示"
  - "keybindingFlavor readline の単語キー拡張"
  - "Windows のセッション間メッセージング対応"
  - "Claude in Chrome の /clear 連携"
  - "Linuxサンドボックスのgit修正"
  - "永続リトライモードの即時失敗"
codex_review: "派手な新機能より、Bedrock二重課金やEsc競合、git破損の修正が前面に出ているのがむしろ健全だ。AI開発ツール市場ではこういう運用品質の積み上げが効く一方、業界全体を動かす決定打とまでは言いにくい。"
codex_importance: 2
---

## 公式アップデート

### Claude Code v2.1.239

2026年8月21日に公開されました。コスト表示、Bedrock 課金、クラウドセッション、セッション間メッセージングなど広範囲にわたる追加と修正が含まれます。

[Claude Code Releases - v2.1.239](https://github.com/anthropics/claude-code/releases/tag/v2.1.239)

### データレジデンシー枠のコスト表示

`/cost`、ステータスライン、`--max-budget-usd` のコスト見積もりが、データレジデンシー対応ワークスペースにおける米国限定推論の1.1倍プレミアムを反映するようになりました。

### /claude-api upgrade

`/claude-api upgrade` が追加されました。Python プロジェクトを `anthropic` 0.x から 1.x へ移行するコマンドです。あわせて同スキルの Python リファレンスが 1.x 向けに更新され、タイムアウトは `httpx.Timeout` ではなく `anthropic.Timeout` を使う旨が反映されています。

### Bedrock/Vertex/Foundry のフルスクリーン提案

これまで対象外だった Bedrock・Vertex・Foundry などの環境でも、初回起動時にフルスクリーンレンダラーの利用が提案されるようになりました。これらの環境での新規インストールはフルスクリーンで開始します。

### claude.ai同期プラグインの @synced 表示

クラウドセッションにおいて、claude.ai から同期されたプラグインが `name@synced` として表示されるようになりました。`claude plugin enable/disable <name>@synced` で操作でき、同名で自分がインストールしたプラグインを上書きすることはありません。

### Alpine/musl ビルドのアドオン対応

Alpine/musl ビルドで、画像ペースト・クリップボード・音声キャプチャのネイティブアドオンが読み込まれるようになりました。ランタイムに拒否される glibc 版ではなく musl でビルドされたバイナリが使われます。

### 使用量上限メッセージの改善

月間の支出上限を使い切った際に表示される使用量上限メッセージに、セッション上限および週次上限のリセット時刻もあわせて表示されるようになりました。

### Bedrockストリーミングの二重課金修正

レスポンスの Content-Type ヘッダーを除去するプロキシ経由で Bedrock のストリーミングが機能せず、毎ターン非ストリーミングで再実行されて課金対象の API 呼び出しが倍増する問題が修正されました。

### WebFetchキャッシュ保持の修正

WebFetch が期限切れのページ内容をセッション中ずっとメモリに保持していた問題が修正され、本来意図されていた15分の保持に戻りました。

### Esc競合の修正

プロンプトをキューに入れた状態で Esc を押すと次のターンが早期終了しうる競合が修正されました。従来は Claude が作業中にもかかわらずセッションが待機状態となり、後から再送すると操作が重複する場合がありました。

### /goal チェックインのバックオフ

長時間のバックグラウンド作業に対する `/goal` の再確認が、30分ごとの繰り返しではなく、30分 → 1時間 → 以降2時間ごとへとバックオフするようになりました。

### /goal のセッション復帰対応

`claude --resume` のピッカーからセッションを再開したとき、アクティブなゴールが復元されるようになりました。

### ListAgents の自セッション名表示

`ListAgents` が自セッション自身の名前（他セッションが宛先として使う名前）を通知するようになりました。自分の名前宛に `SendMessage` を送った場合も「no agent named …」ではなくその旨を返します。あわせて `ListAgents` と `/list-agents` が稼働中のチームメイトも一覧に表示するようになりました（従来はサブエージェントと他セッションのみで、到達可能なチームメイトが存在しないように見えていました）。

### keybindingFlavor readline の単語キー拡張

`keybindingFlavor: "readline"` が単語系キーでも Bash に準拠するようになりました。Alt+F と Ctrl/Option+→ は単語末尾で停止し、Alt+D はそこまで削除（Ctrl+Y で貼り戻し）、句読点が単語の区切りとして扱われます。

### Windows のセッション間メッセージング対応

Windows でもセッション間メッセージングが利用可能になりました。macOS・Linux と同様に、複数マシンにまたがる Claude Code セッション同士が `SendMessage` で連絡し、`ListAgents` で互いを発見できます。

### Claude in Chrome の /clear 連携

`/clear` がセッションの Chrome タブグループを閉じるようになりました。空になったグループは `/resume` 時および Claude Code の終了時に閉じられます。

### Linuxサンドボックスのgit修正

Linux サンドボックスが存在しない `.git/config.worktree` を読み取り不能にしていたため、`extensions.worktreeConfig` を設定したリポジトリでサンドボックス下の git コマンドがすべて壊れる問題が修正されました。

### 永続リトライモードの即時失敗

永続リトライモード（`CLAUDE_CODE_RETRY_WATCHDOG`）が、組織の支出上限およびクレジット切れのエラーに対してリセットを無期限に待たず即座に失敗するようになりました。

## コミュニティの反応

### keybindingFlavor readline の単語キー拡張

#### ポジティブ

> Claude Code 2.1.238 で `keybindingFlavor: "readline"` を設定したら、Ctrl+W が Bash 準拠の空白まで一気に削除になり、長いパス入力の打ち直しが1回で済んで便利 — @ai_hack_dx [出典](https://x.com/ai_hack_dx/status/2090695515063329223)

> プロンプトのキーバインドを readline 風に設定可能になり、Bash と同じ感覚で Ctrl+W が単語単位削除できて便利 — @CaCruDPwdGNhMf1 [出典](https://x.com/CaCruDPwdGNhMf1/status/2090586255302259116)

#### Tips

> settings.json に `"keybindingFlavor": "readline"` を追加する（既定は classic）。値の綴りを間違えると警告なしで classic のままになるので注意 — @ai_hack_dx [出典](https://x.com/ai_hack_dx/status/2090695515063329223)

### ListAgents の自セッション名表示

#### ポジティブ

> Claude Code の複数ターミナル運用で、ListAgents/SendMessage によりコピペ不要でセッション間メッセージングが自動化され、開発効率が大幅に向上した — @deemwarmonads [出典](https://x.com/deemwarmonads/status/2089402791823638876)

> Claude Code のサブエージェント同士が ListAgents/SendMessage で直接メッセージ可能になり、v2.1.224 以降で他マシン間も対応したことでチームワークが強化された — @kostyniuk00 [出典](https://x.com/kostyniuk00/status/2090843415315406862)

#### ネガティブ

> Windows 11 Pro で Claude Code 2.1.233 を試したところ、ListAgents がセッションに存在せずマルチセッション機能が使えない制限を確認した — @BugattiAlpha [出典](https://x.com/BugattiAlpha/status/2090418656694222927)

#### Tips

> ListAgents/SendMessage の内部動作は、ディスク上の JSON 登録と UDS ソケットによる同一マシン発見・メッセージ配送で構成されており、コンテナ跨ぎはできない点に注意 — @mylifcc [出典](https://x.com/mylifcc/status/2089718207867502644)

### 使用量上限メッセージの改善

#### ポジティブ

> Claude Code 2.1.234（8/17リリース）で usage limit リセット時にセッションが自動継続されるようになり、長いリファクタ作業がリセット待ちで止まらなくなった — @4Ndr3w10000 [出典](https://x.com/4Ndr3w10000/status/2090809146476220864)

> Claude Code が「Approaching your 5-hour usage limit — Claude will wrap up the current step.」と通知してくれるようになり、リミット直前で作業をきれいに終えられる — @den_spirin [出典](https://x.com/den_spirin/status/2090890025084842342)

#### ネガティブ

> セッション/週次上限の仕組みが最悪。セッション残量があっても週次で一気に吹き飛んで全セッションが無効になる — @spockybalboa [出典](https://x.com/spockybalboa/status/2089920125822763046)

> 今朝、わずかな使用で「You've hit your session limit · resets 11am」とすぐ上限表示が出た。昨日は一日中使っても1回しか当たらなかったのに急に厳しくなった — @dracan [出典](https://x.com/dracan/status/2088548573826683182)

> Claude の制限メッセージ「制限は14:10にリセットされます。」の日本語がおかしい — @ceisu1975 [出典](https://x.com/ceisu1975/status/2090309822327718093)

#### Tips

> Claude がすぐ制限で止まる人は、入力欄右下の「エフォート」設定を下げるだけで消費量が変わる（高→中など） — @kou_nakano [出典](https://x.com/kou_nakano/status/2089918132404314172)

> Claude の上限表示（5時間・週間・会話長さなど）を1枚の診断表にまとめた。待機・分割・課金の判断に使える — @Lontomanabu [出典](https://x.com/Lontomanabu/status/2090036003298050197)

### /claude-api upgrade

#### Tips

> Anthropic Python SDK 1.0 移行で `/claude-api upgrade` コマンドを使い、httpx 関連の変更や Python 3.10 要件、async parse 対応などの注意点を整理して紹介 — @MarMarLabs [出典](https://x.com/MarMarLabs/status/2090807414018679220)

### 永続リトライモードの即時失敗

#### Tips

> Claude Code で 529 overloaded エラーがパイプラインを止める問題を、`~/.claude/settings.json` に `"CLAUDE_CODE_RETRY_WATCHDOG": "1"` を追加して永続リトライを有効化することで解決した — @yann_shi_ [出典](https://x.com/yann_shi_/status/2089866417688707284)

### Esc競合の修正

#### ネガティブ

> 次の依頼をキューに入れた状態で Esc を押すと次のターンが早く終了扱いになり待機状態のままになり、再送で操作が重複する競合が修正されたと公式チェンジログに記載されている — @Claudecodepanda [出典](https://x.com/Claudecodepanda/status/2090898920327282990)

### その他の項目

Claude Code v2.1.239 全体、データレジデンシー枠のコスト表示、Bedrock/Vertex/Foundry のフルスクリーン提案、claude.ai 同期プラグインの `@synced` 表示、Alpine/musl ビルドのアドオン対応、Bedrock ストリーミングの二重課金修正、WebFetch キャッシュ保持の修正、`/goal` チェックインのバックオフ、`/goal` のセッション復帰対応、Windows のセッション間メッセージング対応、Claude in Chrome の `/clear` 連携、Linux サンドボックスの git 修正については、個人ユーザーの実体験にあたる X 投稿は**該当なし**でした。v2.1.239 の公開が8月21日であり、反応が出るまでの時間が経っていないことが主な要因です。

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.239](https://github.com/anthropics/claude-code/releases/tag/v2.1.239)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
