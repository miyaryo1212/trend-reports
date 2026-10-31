---
title: "Codex CLI 0.166.0、GPT-6.1 Terra対応と診断強化"
summary: "Codex CLI 0.166.0 がリリースされた。GPT-6.1 Terra をモデルカタログに追加し、キーボードでのトランスクリプト選択、`codex queue --resume`、安全ブロックの説明改善、`codex doctor --network-only` が加わった。X では、診断コマンドと TUI の操作性向上を評価する声が目立つ。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-11-01

features:
  - "Codex CLI 0.166.0 GPT-6.1 Terra対応"
  - "Codex CLI 0.166.0 キーボードでのトランスクリプト選択"
  - "Codex CLI 0.166.0 `codex queue --resume`"
  - "Codex CLI 0.166.0 安全ブロックの説明改善"
  - "Codex CLI 0.166.0 `codex doctor --network-only`"
codex_review: "派手な推論性能の更新より、詰まったときの診断や長い履歴の操作に手を入れた点が、日々使う開発者には効きそうだ。個々は小粒だが、エージェントを実験から常用へ移すには、こうした摩擦の解消が案外重要である。"
codex_importance: 3
---

## 公式アップデート

2026-10-29 に Codex CLI 0.166.0 がリリースされました。主な新機能は以下のとおりです。

### GPT-6.1 Terra対応

同梱のモデルカタログと、Vertex AI・Amazon Bedrock のモデルカタログに GPT-6.1 Terra が追加されました (#57293)。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.166.0)

### キーボードでのトランスクリプト選択

トランスクリプトをキーボードで選択できるようになりました。単語・行・ページ単位で移動でき、検索も組み込まれています。ショートカットは設定で変更できます (#57221, #57222, #57223, #57224)。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.166.0)

### `codex queue --resume`

`codex queue --resume` が追加されました。メッセージをキューに入れたあと、まだ読み込まれていないスレッドを再開できます (#57232)。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.166.0)

### 安全ブロックの説明改善

TUI で、安全ブロックがかかった理由をより分かりやすく表示するようになりました。あわせて、より安全な続きのプロンプトを選択肢から選べるようになっています (#57363, #57365)。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.166.0)

### `codex doctor --network-only`

`codex doctor --network-only` が追加されました。設定・接続・WebSocket に絞って診断します (#57606)。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.166.0)

## コミュニティの反応

### GPT-6.1 Terra対応

#### ポジティブ

> v0.166.0 のキーボード操作の強化、キューからの再開、GPT-6.1 Terra の Vertex AI / Bedrock 対応によって、コマンド検索や長時間タスクが「劇的に楽になった」と評価している。トーンは好意的 — @chenYijl [出典](https://x.com/chenYijl/status/2116533725315969043)

> GPT-6.1 Terra のリリースと Codex CLI の更新を含む最近の改善を振り返り、速度・コンテキストの拡大・安定性の向上を実感していると述べている。トーンは好意的 — @hajimetwi3 [出典](https://x.com/hajimetwi3/status/2116461142285668751)

#### ネガティブ

該当なし

#### Tips

該当なし

### キーボードでのトランスクリプト選択

#### ポジティブ

> トランスクリプトのキーボード選択 (単語・行・ページ単位の移動、検索、ショートカット設定) が加わり、TUI が使いやすくなったと評価している。トーンは好意的 — @AverageAiBro [出典](https://x.com/AverageAiBro/status/2116604618918793472)

> キーボードでの検索・選択に加え、resume / fork 時のトークン管理も改善されたため、長時間のセッションが快適になるとしている。トーンは好意的 — @muratnakmuay [出典](https://x.com/muratnakmuay/status/2116153363075100977)

#### ネガティブ

該当なし

#### Tips

該当なし

### `codex queue --resume`

該当なし

### 安全ブロックの説明改善

#### ポジティブ

> 安全ブロックで止まるだけのエージェントでは、どう言い換えればよいか推測するしかない。新しいリリースでは TUI でブロック理由がはっきり示され、より安全な続きのプロンプトも選べるので、ブロックされても先に進む手段があると評価している。トーンは好意的 — @AverageAiBro [出典](https://x.com/AverageAiBro/status/2116604618918793472)

#### ネガティブ

該当なし

#### Tips

該当なし

### `codex doctor --network-only`

#### ポジティブ

> `codex doctor --network-only` で接続診断が手軽にでき、止まった原因が分かるので助かるとしている。トーンは好意的 — @tomoking_ai [出典](https://x.com/tomoking_ai/status/2116115631900590539)

> ネットワーク診断コマンドが加わったことで、通信まわりのトラブルを先に切り分けられるようになったと評価している。トーンは好意的 — @st_dev0 [出典](https://x.com/st_dev0/status/2115957041059762562)

#### ネガティブ

該当なし

#### Tips

> エージェントの様子がおかしいときは、まず `codex doctor --network-only` で設定・接続・WebSocket を確認するとよい、と勧めている — @Javimbuilds [出典](https://x.com/Javimbuilds/status/2116188166960865293)

> 0.166.0 で追加された `codex doctor --network-only` は、設定・接続・WebSocket の診断に特化したコマンドだと紹介している。トーンは中立 — @superdoccimo [出典](https://x.com/superdoccimo/status/2115956130794865030)

## ソース

- [Codex CLI 0.166.0 リリースノート (GitHub)](https://github.com/openai/codex/releases/tag/rust-v0.166.0)
- [X: @chenYijl の投稿](https://x.com/chenYijl/status/2116533725315969043)
- [X: @hajimetwi3 の投稿](https://x.com/hajimetwi3/status/2116461142285668751)
- [X: @AverageAiBro の投稿](https://x.com/AverageAiBro/status/2116604618918793472)
- [X: @muratnakmuay の投稿](https://x.com/muratnakmuay/status/2116153363075100977)
- [X: @tomoking_ai の投稿](https://x.com/tomoking_ai/status/2116115631900590539)
- [X: @st_dev0 の投稿](https://x.com/st_dev0/status/2115957041059762562)
- [X: @Javimbuilds の投稿](https://x.com/Javimbuilds/status/2116188166960865293)
- [X: @superdoccimo の投稿](https://x.com/superdoccimo/status/2115956130794865030)
