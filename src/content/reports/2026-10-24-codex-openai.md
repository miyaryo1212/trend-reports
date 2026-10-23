---
title: "Codex CLI 0.164.0 安定版、/presets 追加"
summary: "Codex CLI 0.164.0 安定版が公開され、/presets、/model・/permissions のインライン引数、端末内での画像プレビュー、資格情報マスキングが加わった。0.165 系の最初のプレリリースも出ている。OpenAI はフロンティアモデルの学習環境の封じ込め策、ポーランド NASK との提携、ChatGPT ストレージ基盤の解説も公開した。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-24

features:
  - "Codex CLI 0.164.0 安定版"
  - "Codex CLI 0.165.0-alpha.1"
  - "Securing our frontier model training environment"
  - "OpenAI と ポーランド NASK の提携"
  - "ChatGPT ストレージ基盤のスケール解説 (Part II)"
codex_review: "派手なモデル発表より、プリセットや権限切り替え、資格情報のマスキングのような日々の摩擦を潰す更新に好感が持てる。特に安全性の改善は地味だが重要で、AI業界全体への波及は限定的だろう。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI 0.164.0 安定版

10月23日 04:50 UTC に 0.164 系の安定版が公開されました。alpha.10〜12 で先に入っていた enterprise MCP 認証、Windows のプロキシ認証、Bedrock セットアップウィザードの既定有効化も、この安定版に含まれています。そのほかの主な変更は次のとおりです。

**新機能**

- `/presets` を追加。よく使うプロンプトやスラッシュコマンドを番号付きの 10 スロットに保存し、キーボードメニューから呼び出せる
- `/model` と `/permissions` に引数を直接付けて、モデル、推論の強さ(reasoning effort)、速度、権限プロファイルを指定できるようになった
- Kitty または Sixel グラフィックスに対応した端末では、フルスクリーンのトランスクリプト上で、閲覧した画像や生成した画像をプレビューできる
- 対応するリモート Bash コマンドと Zsh スナップショットセッションで、資格情報をマスクするようになった。カスタムプロバイダの資格情報もマスク対象に含まれる

**バグ修正**

- 会話の要約(compaction)に失敗しても、途中までの要約が履歴に残らなくなった。バックグラウンドでの要約に失敗した場合も、panic せずにフォールバックする
- セッション再開時に圧縮済みの履歴を見つけられるようになった。保存済みのスレッド設定も、グローバル既定値で上書きせずに復元する
- `-c` / `--config` を複数のサブコマンド階層で指定したときも、設定の上書きが保持されるようになった
- キューに入ったプロンプトは、保留中の権限選択が確定するまで待つようになった
- サンドボックスのチェックを強化。macOS で大文字・小文字だけが違うメタデータパスと、実行ファイルの場所を特定するのに使う置き換え可能なシンボリックリンクへの対策を加えた

**その他**

- 使っていないインストールの削除、放置されたマーケットプレイスのチェックアウトの掃除、デーモンログのサイズ上限によって、ディスク使用量を減らした
- 組み込み JavaScript ランタイムを更新し、最適化された `Array.sort` に安全チェックを追加した

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.164.0)

### Codex CLI 0.165.0-alpha.1

10月23日 14:18 UTC に、次の 0.165 系で最初のプレリリースタグが公開されました。リリースノートは「Release 0.165.0-alpha.1」の 1 行だけで、変更内容は書かれていません。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1)

### Securing our frontier model training environment

フロンティアモデルの学習・評価環境を外部から隔離し、封じ込めを強める取り組みを解説する記事が公開されました。オフライン環境の活用や大規模なレッドチーミングなどが紹介されています。

[ソース](https://openai.com/news/)

### OpenAI と ポーランド NASK の提携

OpenAI は、ポーランドの研究機関 NASK との提携を発表しました。AI の安全性・セキュリティと技術研究で協力します。

[ソース](https://openai.com/news/)

### ChatGPT ストレージ基盤のスケール解説 (Part II)

ChatGPT のストレージ基盤をどうスケールさせたかを解説する技術記事の第 2 弾が公開されました。マルチテナンシー、グローバルキャッシュ、Azure Cosmos DB の採用によって、Habitat の読み取りを 12 倍高速にしたと説明しています。

[ソース](https://openai.com/news/)

## コミュニティの反応

### Codex CLI 0.164.0 安定版

X では、アップデート直後の実際の使用感を伝える好意的な投稿が見られました。不具合や不満の投稿は確認できませんでした。

#### ポジティブ

> v0.164.0 でキャッシュがかなり改善され、動作が速くなったと感じた — @y_5k110 [出典](https://x.com/y_5k110/status/2113707623824621921)

> 新しい `/presets` に毎日使うレビュー用プロンプトを保存できる。`/model` と `/permissions` に引数を付けられるので、セッション中の切り替えも簡単になった — @AverageAiBro [出典](https://x.com/AverageAiBro/status/2113698470238568449)

#### ネガティブ

該当なし

#### Tips

該当なし

### Codex CLI 0.165.0-alpha.1

該当なし

### Securing our frontier model training environment

該当なし

### OpenAI と ポーランド NASK の提携

該当なし

### ChatGPT ストレージ基盤のスケール解説 (Part II)

該当なし

## ソース

- [GitHub: openai/codex Release 0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0)
- [GitHub: openai/codex Release 0.165.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1)
- [OpenAI News](https://openai.com/news/)
- [X: @y_5k110](https://x.com/y_5k110/status/2113707623824621921)
- [X: @AverageAiBro](https://x.com/AverageAiBro/status/2113698470238568449)
