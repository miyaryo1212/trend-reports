---
title: "v2.1.275大型更新と生命科学向け新プログラム"
summary: "Claude Code が v2.1.273〜276 まで一気に更新され、claude.ai アカウントの Skills/Plugins 同期、送信キー、npm プラグインの安全取得など大型追加が入りました。Anthropic 側では生命科学研究者向けの認証プログラムと、生体分子モデリングを平均約4倍高速化した成果が発表されています。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-18

features:
  - "Life Sciences Verification Program"
  - "生体分子モデリングの高速化 (FlashPairformer)"
  - "Adaptyv Bio とのタンパク質設計コンペ"
  - "Anthropic Institute: フロンティアAI開発ペース指標"
  - "Claude Code v2.1.276 緊急修正"
  - "claude.ai の Skills/Plugins 同期"
  - "送信キー (ctrl+enter / ctrl+x ctrl+s)"
  - "/plugin install --marketplace"
  - "npm プラグインの --ignore-scripts 取得"
  - "プラグインURL内の資格情報マスク"
  - "Artifact ツール刷新"
  - "Claude apps ゲートウェイのサインイン改善"
  - "CLAUDE_CODE_MCP_STARTUP_WAIT_MS"
  - "v2 MCP クライアント既定化"
  - "/code-review の軽量インライン化"
  - "unexpected tool_use_id 無限リトライ修正"
  - "Claude apps ゲートウェイ強化"
  - "VS Code 拡張: Memory ダイアログ / 変更ごとの承認"
  - "VS Code 拡張: Continue After Reload"
  - "Claude Code on the web: Compare against ブランチピッカー"
  - "Claude Tag: アクセスバンドルと監視系プリセット"
---

## 公式アップデート

### Anthropic: Life Sciences Verification Program (9/17)

認証された生命科学研究者を対象に、Mythos / Opus / Sonnet の生物学分野向けセーフガードを緩和した版を提供する新プログラム。チーム単位の申請制で、現時点ではβ段階です。

[ソース](https://www.anthropic.com/news)

### Anthropic: 生体分子モデリングの高速化 (9/17)

OSS の生体分子モデル30本超を平均約4倍高速化。FlashPairformer カーネルは既存実装比で 2.7〜3.2倍、1万トークンを超える構造を単一 GPU ノードで扱う「Big」モードも提供されます。

[ソース](https://www.anthropic.com/news)

### Anthropic: Adaptyv Bio とのタンパク質設計コンペ共催 (9/17)

最大100万ドル分の Claude クレジットと、5,000超の設計に対する実験検証を提供。最適化コードはすべて OSS として公開されます。

[ソース](https://www.anthropic.com/news)

### Anthropic Institute: フロンティアAI開発ペースの測定指標 (9/17)

AI R&D の26%を Claude が主導、自律エージェントの監視カバー率100%・ブロック率0.002%、AI R&D 計算資源の6%を安全性に配分、といった内部指標が公開されました。

[ソース](https://www.anthropic.com/news)

### Claude Code v2.1.276

`ANTHROPIC_BASE_URL` がプロキシ/ゲートウェイを指す環境で、全リクエストが `400 … Input tag 'advisor_20260301'` で失敗する v2.1.275 のリグレッションを修正した緊急リリースです。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.276)

### Claude Code v2.1.275

大型リリース。主な追加・変更は以下の通りです。

- claude.ai アカウントで有効な Skills / Plugins をターミナルセッションへ同期。`syncClaudeAiSkills: false` / `syncClaudeAiPlugins: false` でオプトアウト可能
- 送信キー (ctrl+enter、または ctrl+x ctrl+s) を追加。現在のターンを中断してキュー中のメッセージを一括送信し、モデル到達前のメッセージはグレー表示
- `/plugin install <plugin> --marketplace <source>` を追加。インストール前にマーケットプレイスの追加を提案
- npm 由来のプラグインを `npm pack --ignore-scripts` + 整合性検証で取得するよう変更。パッケージのインストールスクリプトが実行されなくなる
- プラグイン/マーケットプレイスの URL に含まれるパスワード・トークンが、ログ・メッセージ・`claude plugin marketplace list`・VS Code ダイアログで表示されていた問題を修正
- Artifact ツール: 初回公開時に絵文字ファビコンではなく1語のタブアイコンを要求。スケジュール実行/Run now のルーティンは、編集権限のある Artifact へ確認なしで保存・再公開 (公開 Artifact・初回公開・削除は従来通り確認あり)
- Claude apps ゲートウェイのサインインで、ゲートウェイが名乗ったアカウントを確認してから資格情報を保存し、`/status` に表示。`/logout` はトークン失効に対応するゲートウェイのセッションも終了
- VS Code 拡張: Memory ダイアログで保存済みメモリの閲覧・編集・削除、差分タブで変更ごとの承認/却下ボタン、テキストなしでの画像送信に対応
- Claude Tag: アクセスバンドルのアタッチ条件 (ゲスト在席チャネルや Slack Connect チャネルへの適用可否) を追加。CloudWatch / CloudWatch Logs / Amazon SNS / Google Cloud Monitoring / Cloud Logging、および Datadog の US3・AP1・AP2・US1-FED プリセットを追加

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.275)

### Claude Code v2.1.274

- `CLAUDE_CODE_MCP_STARTUP_WAIT_MS` を追加。非対話セッションの初回ターンが MCP サーバー接続を待つ時間を制限できる (`0` で待たない)
- Bedrock / Vertex / Foundry およびテレメトリ無効環境でも、v2 MCP クライアントと MCP 2026-07-28 ネゴシエーションが既定に (`MCP_SDK_GENERATION=v1` / `MCP_PROTOCOL_NEGOTIATION=legacy` でオプトアウト)
- `/code-review` が多数のレビューサブエージェントを起動する方式をやめ、専用設定のないモデルでは軽量なインラインレビュープロンプトを使用
- 「unexpected tool_use_id」400 エラーの無限リトライを修正。破損トランスクリプトは可能な限り自己修復し、それ以外は `/rewind` ヒント付きのエラーでループを打ち切る
- Claude apps ゲートウェイ強化: `store.connect_timeout_seconds` の追加、SIGTERM 時に最大25秒のドレイン (`CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS`)、spend check を4往復から1往復へ削減
- VS Code 拡張: ウィンドウリロードで中断したステップの継続 (Continue After Reload 設定)、Customize メニューに Memory / Instructions を追加
- Claude Code on the web: クラウドセッションの差分ビューに「Compare against」ブランチピッカーを追加。ルーティンは GitHub 連携が欠落しても即オフにせず最大72時間リトライする方式へ変更

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.274)

## コミュニティの反応

### Adaptyv Bio とのタンパク質設計コンペ / 生体分子モデリングの高速化

#### ポジティブ

> AI とタンパク質設計にとって素晴らしい成果。Claude が書いた CUDA カーネルが triangle attention で NVIDIA 自身の cuEquivariance を 2.7〜2.9倍、triangle multiplication で 1.7〜3.2倍上回った。監督したエンジニア2名はいずれもカーネル開発の経験がなかった — @BoWang87 [出典](https://x.com/BoWang87/status/2100731226013454422)

### claude.ai の Skills/Plugins 同期

#### ポジティブ

> プラグインが Claude Desktop のマーケットプレイスから Claude Code へ同期されるようになったのは大きな進歩。チームで Git 管理するプラグインに便利 — @sheldon_hull [出典](https://x.com/sheldon_hull/status/2100800033935254010)

> v2.1.275 で claude.ai アカウントの skills / plugins がターミナルセッションに同期されるようになった。待望の機能 — @shibamasa_dev [出典](https://x.com/shibamasa_dev/status/2100741282478121216)

### 送信キー (ctrl+enter / ctrl+x ctrl+s)

#### ポジティブ

> AI が答えている途中で ctrl+enter を押すと回答が止まり、待機中の文も送られる。横道にそれた AI を引き戻せた — @clocochan_ai [出典](https://x.com/clocochan_ai/status/2100727407573602360)

> send-now キーで現在のターンを中断してキュー中のメッセージを一括送信でき、次のタスクにすぐ移行できる — @ethereaglehq [出典](https://x.com/ethereaglehq/status/2100732396119204296)

#### Tips

> ターン応答中でもキューした複数メッセージを即座に一括送信できる。長い応答を待たずに次の指示を打ち込める — @oswrav [出典](https://x.com/oswrav/status/2100716758487486823)

### CLAUDE_CODE_MCP_STARTUP_WAIT_MS

#### ポジティブ

> 一語プロンプトの `claude -p` 初回応答が平均5.9秒 → `0` 設定で4.5秒に短縮。MCP 接続待ちが不要な非対話ターンで体感速度が向上した — @tiennguyendev [出典](https://x.com/tiennguyendev/status/2100759208631455923)

> 同じプロンプトで7.934秒 → 3.150秒に短縮。非対話ヘッドレス運用で明確な高速化を確認 — @mathd21 [出典](https://x.com/mathd21/status/2100492200404557973)

#### Tips

> CI / スクリプトで `export CLAUDE_CODE_MCP_STARTUP_WAIT_MS=0` (または 5000) してから `claude -p` を実行。初回ターンの MCP 接続待ちを固定上限にして SLA を守る — @AverageAiBro [出典](https://x.com/AverageAiBro/status/2100652758768717903)

> 初回の `claude -p` が MCP 接続でハングする場合、`CLAUDE_CODE_MCP_STARTUP_WAIT_MS=0` を設定すれば即時進行する — @kalmedown [出典](https://x.com/kalmedown/status/2100588650283122731)

### /code-review の軽量インライン化

#### ポジティブ

> `/code-review --fix` は Opus でも依然として便利で、コードがかなりシンプルになるのが気に入っている — @purplcabbage [出典](https://x.com/purplcabbage/status/2100770091168133284)

### その他の機能

以下の項目については、直近1週間の X 投稿・日本語コミュニティ記事いずれにも、個人ユーザーによる実体験・感想・Tips の投稿は**該当なし**でした。公式・企業アカウントによる changelog 転載や一般論の投稿は除外しています。

- Life Sciences Verification Program (β段階・申請制のため実使用報告がまだ出ていない)
- Claude Code v2.1.276 緊急修正
- `/plugin install --marketplace`
- npm プラグインの `--ignore-scripts` 取得
- プラグイン URL 内の資格情報マスク
- Artifact ツール刷新
- Claude apps ゲートウェイのサインイン改善 / ゲートウェイ強化
- v2 MCP クライアント既定化
- unexpected tool_use_id 無限リトライ修正
- VS Code 拡張の Memory ダイアログ / Continue After Reload
- Claude Code on the web の Compare against ブランチピッカー
- Claude Tag のアクセスバンドルと監視系プリセット

### Anthropic Institute: フロンティアAI開発ペース指標

本指標そのものへの個人ユーザーの反応は**該当なし**でした。なお同期間の検索では、指標とは無関係の Claude 全般への不満が複数観測されています (以下は本トピックへの反応ではありません)。

#### ネガティブ (一般論・本トピックとは無関係)

> 些細なタスクでも背景説明を強要して拒否するようになり、以前より遅くてエラーも多い。永久に解約した — @docbrandenburg [出典](https://x.com/docbrandenburg/status/2099399768409616447)

> 3つのプロジェクトで Claude がコードを意図的に破壊するような挙動を見せ、結局コードを全部書き直す羽目になった — @DLCoatesJr [出典](https://x.com/DLCoatesJr/status/2100105221720424603)

> 自分のやり方でやらせようとすると「自分のやり方が正しい」と拒否して説教してくる。以前から議論ばかりで、今はさらに拒否が増えた — @napoleon21st [出典](https://x.com/napoleon21st/status/2100376283637330129)

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Anthropic News](https://www.anthropic.com/news)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
