---
title: "Codex CLI 0.152.0 正式版、planningツールが既定オフに"
summary: "Codex CLI 0.152.0 が正式リリースされ、Vimモードの検索、レート制限バナーからの操作、MCPのパッケージ形式名とoutput_token_limit、1時間超のシェルタイムアウトが入った。planningツール (update_plan) がデフォルト無効化され、Xでは有効化手順のTipsが即座に共有されている。医療・広告・セキュリティ面でもOpenAIの発表が続いた。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-02

features:
  - "Codex CLI 0.152.0 正式リリース"
  - "Codex CLI: planningツールがデフォルト無効化"
  - "Codex CLI: MCPのパッケージ形式名と output_token_limit 対応"
  - "Codex CLI: thread/shellCommand のタイムアウト設定"
  - "Codex CLI 0.153.0-alpha 系列開始"
  - "ChatGPT for Healthcare の Epic EHR連携"
  - "Healthcare Public Data プラグイン"
  - "Path to Astra"
  - "ChatGPT Ads が年換算収益10億ドル到達"
  - "OpenAI Enterprise Signals 最新値"
codex_review: "Codex CLIの改善自体は堅実だが、planning既定オフが象徴的で、いまは機能追加より運用の癖をどう整えるかの段階に入った印象がある。医療・広告の話題は大きいが、この日はむしろ足回りの変化が地味に効く。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI 0.152.0 正式リリース

前日まで alpha 系列が積み上がっていた 0.152.0 が正式版として公開された。主な新機能は以下。

- Vim モードが下書き内の `/` `?` 検索、マッチのハイライト、`n` / `N` での繰り返し移動に対応 ([#41586](https://github.com/openai/codex/pull/41586))
- レート制限バナーから、使用量確認・クレジット管理・リセット・プラン管理のアクションを実行可能に ([#41742](https://github.com/openai/codex/pull/41742))
- ターミナル UI と `codex exec` が認証リフレッシュの進捗を表示。Amazon Bedrock の再認証も対象 ([#41239](https://github.com/openai/codex/pull/41239))

バグ修正では、Vim 有効時の新規下書きが Insert モードで始まるようになった点、自動承認レビューがコンパクション後もユーザー指示・回答・有効な承認を保持する点、再開したスレッドが保存済み作業ディレクトリを復元する点、Microsoft Store 版 PowerShell での Windows サンドボックス実行の修正などが含まれる。またクラウドタスクのリクエストが信頼されないバックエンド URL を拒否し、リダイレクトを無効化する変更も入った ([#41403](https://github.com/openai/codex/pull/41403))。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.152.0)

### Codex CLI: planningツールがデフォルト無効化

0.152.0 で `update_plan` (planning ツール) が既定で無効になった。従来通り使う場合は設定で `tools.update_plan.enabled = true` を明示する必要がある ([#41744](https://github.com/openai/codex/pull/41744))。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.152.0)

### Codex CLI: MCPのパッケージ形式名と output_token_limit 対応

MCP サーバー名に `:` `@` `/` `.` を使えるようになり、パッケージ形式の名前が CLI コマンドと認証まわりを通して扱えるようになった ([#41700](https://github.com/openai/codex/pull/41700))。あわせて MCP ツール単位で `output_token_limit` を設定でき、セッション再開時も一貫した切り詰めが行われる ([#41421](https://github.com/openai/codex/pull/41421))。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.152.0)

### Codex CLI: thread/shellCommand のタイムアウト設定

app-server クライアントが `thread/shellCommand` のタイムアウトを設定できるようになり、1 時間を超える実行期限も指定可能になった ([#41384](https://github.com/openai/codex/pull/41384))。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.152.0)

### Codex CLI 0.153.0-alpha 系列開始

9/1 に 0.153.0-alpha.1 〜 alpha.4 が連続で公開された。いずれもリリースノート本文は「Release 0.153.0-alpha.x」のみで、変更点の記載はない。

[ソース](https://github.com/openai/codex/releases)

### ChatGPT for Healthcare の Epic EHR連携

ChatGPT for Healthcare が Epic の EHR と連携し、認可済みの患者情報を ChatGPT に取り込めるようになった。EHR 画面内に組み込んだ AI 支援ワークフローにも対応する。医師による評価 4,363 件のうち 99.1% が安全と判定されたとしている。

### Healthcare Public Data プラグイン

PubMed / ClinicalTrials.gov / CMS Coverage / RxNorm / DailyMed など、公式 9 ソースへ構造化アクセスする専用コネクタ群が提供される。

### Path to Astra

Astra が Preparedness Framework のサイバー能力で初の「Critical」認定を受けた。緩和策を整備した上で、アルファテスター中心の限定提供が予定されている。

### ChatGPT Ads が年換算収益10億ドル到達

ChatGPT Ads の年換算収益が 10 億ドルに到達。8/31 よりインド・欧州・中東・北アフリカで Ads Manager のセルフサービス購入が開放された。

### OpenAI Enterprise Signals 最新値

フロンティア企業のユーザー当たり出力トークンが、平均的な企業の 8.3 倍に達した。1 月時点の 2.6 倍から拡大している。

## コミュニティの反応

### Codex CLI 0.152.0 正式リリース

#### ポジティブ

> Codex CLI 0.152.0 の Vim 検索とレート制限バナーの改善を毎日使い、「作業を止めずに次の一手を判断しやすくなる」と実感。 — @ikm_san [出典](https://x.com/ikm_san/status/2094742835765608922)

> 0.152 の draft 内検索と明確な rate-limit アクションは地味だが「ツールをより快適に暮らせる」リリースだと評価。 — @Liam2307 [出典](https://x.com/Liam2307/status/2094747224114618421)

> Claude Max の制限にぶつかって Codex CLI をインストールしたところ、remote device 追加の体験が excellent だった。 — @cederikdotcom [出典](https://x.com/cederikdotcom/status/2094723193931956678)

> レート制限が話題になる中、Codex CLI で月 $2,760 相当のトークン使用を $100 プランでこなせている実例を共有。 — @oyacaro [出典](https://x.com/oyacaro/status/2094871230423716214)

> Ampcode 停止時に Codex CLI へ切り替えた結果、トークン使用量は大幅に増えつつも「質・価値ともに向上」と実感。 — @priyashpatil [出典](https://x.com/priyashpatil/status/2094868408601043409)

#### ネガティブ

> Codex CLI が全体的に使いにくく、Claude の CLI と比べてハーネスが劣るため離脱を検討中。 — @Clear_up_KM [出典](https://x.com/Clear_up_KM/status/2094817304743743527)

### Codex CLI: planningツールがデフォルト無効化

#### Tips

> 0.152.0 で update_plan がデフォルトオフになったため、`~/.codex/config.toml` に `tools.update_plan.enabled = true` を追加して有効化。新セッションから反映される。 — @coinweight [出典](https://x.com/coinweight/status/2094863172343894172)

> 0.152.0 で planning tool がデフォルト無効化。従来通り使うには `tools.update_plan.enabled = true` を指定し直す必要がある。 — @oswrav [出典](https://x.com/oswrav/status/2094624649930023166)

### Codex CLI: thread/shellCommand のタイムアウト設定

#### ポジティブ

> 0.152.0 で shell コマンドが 1 時間超でも実行可能になり、エージェントらしい長時間動作が現実的になったと実感。 — @TurnFreshSleds [出典](https://x.com/TurnFreshSleds/status/2094703094969803163)

#### Tips

> 長時間コマンド実行時のポーリング問題を回避するため、wait ツールを指数バックオフで使い、write_stdin は避けるといったワークアラウンドを共有。 — @sdmat123 [出典](https://x.com/sdmat123/status/2094607734247436426)

### Path to Astra

#### ポジティブ

> Codex アプリが最近クリーンアップされて長い会話の読み込みが速くなり、使いやすくなったと実感。Astra の登場を待っている。 — @quentin_o26 [出典](https://x.com/quentin_o26/status/2094897827847471223)

> Claude の新版リリースと Astra の予告を比べて、AI 競争が面白すぎると興奮している。 — @yupamin31 [出典](https://x.com/yupamin31/status/2094901508232085508)

#### Tips

> Astra 関連の安全監視で ChatGPT / Codex の長時間エージェントが一時停止された場合、ユーザーは「続行」を選べるが API は停止するので注意が必要。 — @taisalless [出典](https://x.com/taisalless/status/2094896473028911509)

> Astra の Chain-of-thought 監視や Auto-review への対策として、エージェントに「elevated tool call 前の auto-review」「監視停止機能」「per-run credentials」を組み込む設計 Tips。 — @Adham__Khaled__ [出典](https://x.com/Adham__Khaled__/status/2094893349329367280)

> Astra の honeypot テスト結果から、誤検知による中断を減らすための実運用 Tips を抽出・共有。 — @Prathkum [出典](https://x.com/Prathkum/status/2094891628741972370)

### Codex CLI 0.153.0-alpha 系列開始

該当なし。9/1 公開直後かつリリースノートがないため、話題化はまだ限定的。

### ChatGPT for Healthcare の Epic EHR連携 / Healthcare Public Data プラグイン / ChatGPT Ads / OpenAI Enterprise Signals

いずれも該当なし。個人ユーザーによる実体験・感想の投稿は確認できなかった。

### 日本語コミュニティ (Zenn / Qiita)

本日新たに確認できた Codex / OpenAI 関連の日本語記事。

#### Tips

> [Codexに作業を任せて外出したい ― PCを閉じても続ける方法](https://zenn.dev/boku_yaji/articles/c1d58e24077274) — 手元 PC の Codex をスマホから操作する Remote、OpenAI のクラウド環境で実行する Codex Cloud、SSH 先で使う Codex CLI + tmux の 3 通りを用途別に使い分ける解説。 — @boku-yaji

#### ネガティブ

> [Codex CLIの/import、実は自動化パイプラインに組み込めなかった](https://qiita.com/kai_kou/items/bc809361db6e15178a94) — Claude Code の設定・スキル・チャット履歴を選択的に取り込める `/import` コマンドについて、複数記事が「数ステップで移行完了」としている一方、自動化パイプラインには組み込めなかったという検証。 — @kai_kou

#### 解説

> [OpenAIのTiboが語るCodexの次――Personal AGIへの収束](https://zenn.dev/piedaterre/articles/519b4355ed01c3) — 2026年8月24日に公開された、OpenAI で Codex を率いる Thibault "Tibo" Sottiaux への約44分のインタビューを整理。ChatGPT と Codex を統合する理由、Skills / Memory / サブエージェントの位置づけ、ローカル PC では足りなくなる理由などを扱う。 — @pied-à-terre@zenn

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Codex CLI 0.152.0 リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.152.0)
- [Zenn: Codexに作業を任せて外出したい ― PCを閉じても続ける方法](https://zenn.dev/boku_yaji/articles/c1d58e24077274)
- [Zenn: OpenAIのTiboが語るCodexの次――Personal AGIへの収束](https://zenn.dev/piedaterre/articles/519b4355ed01c3)
- [Qiita: Codex CLIの/import、実は自動化パイプラインに組み込めなかった](https://qiita.com/kai_kou/items/bc809361db6e15178a94)
