---
title: "OpenAI DevDay 2026、20超の発表を一挙公開"
summary: "9月29日の DevDay 2026 で、常時稼働エージェント dots、GPT-6 Astra 比1/5価格の GPT-6.1 Sol、Codex in the cloud / Security Cloud、Ultrafast ティアなど20を超える発表があった。Codex CLI も安定版 0.159.0 / 0.159.1 が出て、既定モデルが GPT-6.1 Sol に切り替わった。"
importance: 5
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-30

features:
  - "DevDay 2026"
  - "GPT-6.1 Sol"
  - "dots"
  - "Codex in the cloud"
  - "Codex CLI 刷新"
  - "Codex Security Cloud"
  - "Ultrafast"
  - "Code Review"
  - "Decisions API"
  - "Agents API の computer use"
  - "Codex CLI 0.159.0 / 0.159.1"
  - "Pro 500"
  - "Plugin extensions"
  - "Sign in with ChatGPT"
  - "OpenAI Marketplace"
  - "Bedrock Managed Agents"
  - "MCP events for plugin automations"
  - "Private Intelligence"
  - "ChatGPT Space / Pages / 共同編集スライド"
  - "Towards safety cases for frontier AI training"
codex_review: "個々の新機能より、モデル・実行環境・流通経路をまとめて押さえにきた点が面白い。特に低価格モデルとクラウド実行は開発現場を変えそうだが、発表の多さに比べ実利用の手応えはまだ薄く、重要度は期待込みで見るべきだ。"
codex_importance: 4
---

## 公式アップデート

### DevDay 2026 (9月29日開催)

ChatGPT・Codex・モデル・API にまたがる20を超える発表が一度に公開されました。以下、カテゴリ別に整理します。

[ソース](https://openai.com/news/)

### モデル

- **GPT-6.1 Sol** — GPT-6 Astra に迫る知能を、Astra の 1/5 の入出力トークン価格で提供。キャッシュ入力は100万トークンあたり $0.10。
- **Ultrafast** — 最大8倍速 (Codex で 300 トークン/秒) の高速ティア。GPT-6 Astra Ultrafast を API と Pro 500 / Enterprise で提供開始。

[ソース](https://openai.com/news/)

### エージェント

- **dots** — GPT-6 Astra 駆動の常時稼働エージェント。専用のクラウド PC を持ち、4,000 を超えるアプリと連携する。Pro / Business Premium から展開。
- **Agents API の computer use** — エージェントがソフトウェアを直接操作できるように。マルチエージェント、tool search、コンテキスト圧縮も API へ開放。
- **Decisions API** — GPT-6 Luna を選択肢固定の判定に特化させ、テキスト/画像からの分類・ルーティングを数百ミリ秒で返す (限定プレビュー)。
- **Bedrock Managed Agents** — Agents API の中核機能を AWS 内で完結して動かせる、Amazon との共同提供マネージドエージェント。

[ソース](https://openai.com/news/)

### Codex

- **Codex in the cloud** — PC・スマホ・クラウドのどこからでも Codex を実行でき、再利用可能な開発環境をチームで共有できる。
- **Codex CLI 刷新** — 音声でのタスク起動・操作、複数タスクを束ねる `/agents` ビュー、worktree 対応、セッション再開、TUI 改善。
- **Codex Security Cloud** — GitHub リポジトリを随時/定期スキャンし、重複排除と修正案作成までクラウドで実施。Daybreak Blue のモデルを追加申請なしで利用可能。
- **Code Review** — ChatGPT デスクトップで diff 閲覧・要約・質問ができ、GitHub PR / GitLab MR へフィードバックを返せる。クラウドでの自動レビューにも対応。

[ソース](https://openai.com/news/)

### ChatGPT / プラン / エコシステム

- **Pro 500** — ChatGPT Plus の25倍の利用枠を持つ新上位プラン。Ultrafast を同梱。
- **Plugin extensions** — ChatGPT のサイドバーにプラグイン専用パネルや独自ファイルビューアを実装できる開発者向け基盤を開放。
- **MCP events for plugin automations** — MCP Events 仕様案に対応し、連携アプリのイベントを起点にプラグインの自動実行を開始できる。
- **Sign in with ChatGPT** — Devin・Notion・Vercel・OpenClaw など16パートナーで、ChatGPT の利用枠とアカウントを流用可能に。
- **OpenAI Marketplace** — 既存の OpenAI 契約枠を Figma・Adobe・Harvey・CrowdStrike など32パートナーのソフトウェア購入に充当できる制度。
- **ChatGPT Space / Pages / 共同編集スライド** — チームとエージェントが同じ場でページ・スライドを共同編集し、PowerPoint / Google Slides へ書き出せる。
- **Private Intelligence** — Private Safety Processing 付きゼロデータ保持で社内データを守りつつ安全性審査を自動化。秋には Private Inference をプレビュー予定。

[ソース](https://openai.com/news/)

### Codex CLI 0.159.0 / 0.159.1

alpha ラインが続いていた Codex CLI に安定版 0.159.0 が到着し、翌日 0.159.1 が続きました。

0.159.0 の新機能:

- opt-in の `instant_interrupt` により、モデル応答中や長時間の code-mode 呼び出し中でも新しい入力で Codex を操作できる (#48135, #48141)
- 新規セッションにコンパクトなウェルカム画面と統一ヘッダーを導入。ターン中・ターン後にヒントを表示する (#48513, #48562, #48352)
- 警告ビューアを閉じると確認済み警告を破棄。`k` で個別に残せる (#48205, #48206)
- プラン実装の可否を判断する間もトランスクリプトをスクロールできる (#48805)
- ネイティブ Mermaid レンダリングがフローチャートのエッジ・ラベル・ノードグループをより広くサポート (#48814, #48895)
- app-server クライアントが特定アイテムを起点にスレッド履歴をページングできる (#48151)

バグ修正:

- Windows で MCP サーバー・code-mode ホスト・パイプ実行時の余計なコンソールウィンドウを抑止。制限の厳しいランチャーでは embedded モードへフォールバック (#48138, #48238, #48483, #48491)
- トランスクリプト選択のコピーが Markdown テーブル・書式・意味のある空白を保持。自動コピー対応ターミナルを拡大 (#48548, #48549, #48469)
- 空セッションのドラフト保持、初回ターン前スレッドのアーカイブ・一覧表示に対応 (#48628, #48828, #48199)
- ローカルの ChatGPT サインインでブラウザが確実に開くように。オンボーディングにログインリンクのコピー導線を追加 (#48502, #48544)
- 承認済みコマンドが明示的なファイルシステム拒否を保持。書き込み可能ルート配下の `.aws` ディレクトリを既定で保護 (#48155, #48176)
- ネットワーク有効サンドボックスおよびプロキシ必須のリモート環境での macOS TLS アクセスを修正 (#48565, #48198)

Chores として、自動フォローアッププロンプト提案と `tui.prompt_suggestions` 設定、バンドル済み `plugin-creator` スキルが削除されました (#48621, #48604)。

0.159.1 では、バンドルカタログと Amazon Bedrock Mantle / Runtime カタログの既定モデルが **GPT-6.1 Sol** に変更されました (#49323, #49342)。

prerelease ラインは 0.161.0-alpha.2 まで進んでいますが、リリースノート本文は「Release \<version\>」のみです。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.159.0) / [0.159.1](https://github.com/openai/codex/releases/tag/rust-v0.159.1)

### Towards safety cases for frontier AI training

フロンティアモデルの学習段階に対する安全性ケースの枠組みを示した研究記事が 9月28日に公開されました。

[ソース](https://openai.com/news/)

## コミュニティの反応

### DevDay 2026

#### 日本語記事

- [OpenAI DevDay 2026を開発者目線で整理：dots・Space・新モデル・Codex・Agents APIの使い分け](https://qiita.com/akira_papa_AI/items/f2c7b936ea27a5d66b59) — 発表群を「自分の仕事にAIを使う」「チームで使う」「自分のサービスに組み込む」の3軸に分けて整理。モデル単体の性能より、目標を渡し実行環境で作業させ結果を検証して受け取る流れに注目すべきだとまとめている。

#### トーン

発表数が多いため、まず用途別に棚卸しして使い分けを決めるという実務寄りの整理が先行しています。X 上では DevDay そのものを指した個人の実使用体験・不満の投稿は確認できませんでした。

### GPT-6.1 Sol

#### ポジティブ

> GPT-6.1 Sol は前世代から大きく飛躍しており、同時に非常に安価で、Sonnet 5.5 と競合している。OpenAI は評価されるべきだ — @kimmonismus [出典](https://x.com/kimmonismus/status/2105047957737525348)

> 午後のうちに Codex 向けの CAD プラグイン拡張を作り上げた。CAD + Astra + plugin extensions の組み合わせは異常なほど強力だ — @earthtojake [出典](https://x.com/earthtojake/status/2105048086766895491)

#### ネガティブ

> Opus 5.5 ほど良いモデルは期待していなかったが、本日出た GPT-6.1 はそれに匹敵すらしない。Claude の利用枠が尽きたので仕方なく Codex 側にいる — @LingoYapayZeka [出典](https://x.com/LingoYapayZeka/status/2105048212549652900)

#### 日本語記事

- [【技術ニュース】2026-09-29 OpenAI、GPT-6 SolとGPT-6 Lunaを発表](https://qiita.com/t161121t/items/7f5436834aeed0c73d7b) — 9月22日発表の GPT-6 Sol / GPT-6 Luna について、用途・仕様の違いと、旧 GPT-5.6 Sol / Luna からの価格変化を整理した記事。DevDay での GPT-6.1 Sol 発表の前提として参照できる。

#### トーン

価格対性能への評価は高い一方、Claude 系との比較では厳しい声もあり、評価は割れています。

### Codex CLI 刷新

#### ネガティブ

> 最近の Codex CLI アップデートで全く動作しない不具合が発生した — @shaedotwilde [出典](https://x.com/shaedotwilde/status/2104704066307932342)

#### Tips

> Codex CLI のネイティブ `/resume` タイルがユーザーターンごとに更新されるようになった — @lmtlssss [出典](https://x.com/lmtlssss/status/2104705642791580046)

> Codex CLI のローカルセッションログを読み取り、利用量トラッカーを作成して活用している — @ZaydBTech [出典](https://x.com/ZaydBTech/status/2104682139715281073)

#### 日本語記事

- [同じパソコン内で２つのCodexアカウントを使用する](https://zenn.dev/kasouzou/articles/use-two-codex-accounts-one-computer) — CLI 本体は共通のまま、認証・設定・履歴の保存先 (`CODEX_HOME` 等) をアカウントごとに分ける設計。片方でコードを書きながらもう片方で教材を更新する同時起動運用まで扱い、Claude Code など他のエージェントにも応用できると整理している。
- [【モダンWeb開発 シリーズ 第3回】Codex × AGENTS.mdで開発ルールをAIに適用してみる](https://qiita.com/aiota/items/78715217f32051924d83) — AGENTS.md によるプロジェクトルールの階層化から実装・テストまでを追った実践記事。

#### トーン

新機能そのものより、複数アカウントの分離やセッションログ活用といった運用回りの工夫に関心が寄っています。更新直後の動作不良報告も出ています。

### Codex in the cloud

#### ネガティブ

> Codex の Pro プランに変えたばかりなのに cloud の方がいいのかと疑問を持った。Codex がすごいと思っていたのに、さらに上があることに驚いている — @mongorianMM [出典](https://x.com/mongorianMM/status/2105048744354029989)

#### トーン

プラン選択がさらに複雑になったことへの戸惑いが見られます。

### dots

#### 該当なし

直近1週間の X 投稿・日本語記事に、個人ユーザーの実使用体験・不満・Tips は確認できませんでした。

### Codex Security Cloud

#### 該当なし

直近1週間に取得できた投稿はいずれも DevDay 発表の感想・要約で、個人ユーザーの実使用体験・不満・Tips は確認できませんでした。

## ソース

- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [OpenAI News](https://openai.com/news/)
- [OpenAI API Changelog](https://platform.openai.com/docs/changelog)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
