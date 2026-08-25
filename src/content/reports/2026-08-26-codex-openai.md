---
title: "OpenAI自社チップJalapeño初実測、管理者プラグイン公開"
summary: "OpenAI初の自社推論チップ Jalapeño の実測値が公開され、ワット当たり1.5〜1.9倍・レイテンシ1.7〜3.6倍の改善が示された。ChatGPT Work / Codex 向け管理者プラグインも登場。Codex CLI は 0.150.0-alpha.11 まで進み、Bedrock マネージドアクセスキー対応やTUIのスレッドタイトル自動生成が入った。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-08-26

features:
  - "Jalapeño 初の実測結果"
  - "Admin plugin for ChatGPT Work and Codex"
  - "The full stack behind abundant intelligence"
  - "Codex CLI 0.150.0-alpha.11"
  - "Codex の Amazon Bedrock マネージドAWSアクセスキー対応"
  - "Codex TUI のスレッドタイトル自動生成"
  - "Codex のターン単位設定更新"
  - "Codex のページネーション版スレッド履歴が既定に"
  - "Codex Vim モードの dot-repeat 対応"
  - "Codex の worktree 設定パーサー追加"
codex_review: "Jalapeñoの実測は派手に見えるが、本当に効くのはチップ単体より運用まで含めた垂直統合の加速だと思う。むしろ管理者プラグイン公開のほうが、OpenAIが個人向け便利ツールから業務基盤へ寄せているサインとして地味に重い。"
codex_importance: 4
---

## 公式アップデート

### Jalapeño 初の実測結果

OpenAI 初の自社推論チップ Jalapeño の実測結果が公開された。InferenceX 上でワット当たり性能が 1.5〜1.9 倍、レイテンシが 1.7〜3.6 倍の改善を示している。年内に自社インフラへ投入予定とされている。

### Admin plugin for ChatGPT Work and Codex

管理者向けプラグインが公開された。ChatGPT Work / Codex 上の会話から、ワークスペース分析、メンバーおよび権限の管理、利用上限や支払い申請の承認までを実行できる。

### The full stack behind abundant intelligence

データセンター・チップからモデル・製品までを統合する自社コンピュート戦略が公開された。AWS / AMD / Broadcom / Cerebras などを含むポートフォリオ方針が示されている。

### Codex CLI 0.150.0-alpha.11

8月25日のアルファ更新。alpha.8 から 79 コミットを取り込んでおり、同日には alpha.9 / alpha.10 も公開されている。主な変更は以下。

- **Amazon Bedrock マネージドAWSアクセスキー対応**: Bedrock 用の管理下アクセスキーをサポート。TUI のオンボーディングにも Bedrock セットアップを追加
- **TUI のスレッドタイトル自動生成**: 会話内容から説明的なスレッドタイトルを生成。`/rename` でも候補を提案する
- **ターン単位の設定更新**: ターンスコープのサービスティア上書きとライブ設定更新を app-server に追加。モデルステップごとに解決済み設定をスナップショットする
- **ページネーション版スレッド履歴が既定に**: 永続スレッドで分割履歴 API を既定化し、全履歴ハイドレーションを非推奨化
- **Vim モードの dot-repeat 対応**: Vim モードで直前の編集操作を `.` で繰り返せるようになった
- **worktree 設定パーサーの追加**: git worktree 向け設定の解析処理を新規追加

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.11)

## コミュニティの反応

### Jalapeño 初の実測結果

#### ポジティブ・ネガティブ・Tips

該当なし。X 上ではニュースまとめやベンチマーク解説が中心で、個人ユーザーの実体験投稿は確認できなかった。チップ自体がまだ自社インフラ投入前で、利用可能な段階にないため。

### Admin plugin for ChatGPT Work and Codex

#### ポジティブ・ネガティブ・Tips

該当なし。発表直後のニュース共有のみで、個人ユーザーの実体験投稿は確認できなかった。

### The full stack behind abundant intelligence

#### ポジティブ

> Cerebras の 1,000 tokens/sec 推論で Codex のボトルネックが解消された。ハーネスの詳細 (Rust 製 Apache 2.0 ライセンス、コンテキスト管理、ツール遅延、サンドボックスなど) が実用的で、自前のエージェント構築に直結する。 — @CoreyGallon [出典](https://x.com/CoreyGallon/status/2090096395826929791)

> Codex を Cerebras チップ上で 14 倍速で動かせば OpenAI の精度・UI/UX に匹敵する。フルコンピュートコントローラーの実用性を実感した。 — @ElliotVaucher [出典](https://x.com/ElliotVaucher/status/2091842954415550713)

#### ネガティブ・Tips

該当なし

### Codex CLI 0.150.0-alpha.11

#### ポジティブ・ネガティブ・Tips

該当なし。X では 0.149.x 系以前のリリースに関する投稿は複数見つかったが、本バージョン (および同日の alpha.9 / alpha.10) に言及した個人投稿はゼロだった。

### Codex の Amazon Bedrock マネージドAWSアクセスキー対応

#### ポジティブ・ネガティブ・Tips

該当なし。X ではリリース告知が中心で、個人ユーザーの使用感・活用例は確認できなかった。

### Codex TUI のスレッドタイトル自動生成

#### ポジティブ

> Codex はスレッドタイトルのリネームをネイティブにサポートしている。スケジュールタスクを使えば、独自の自動更新動作も簡単に設定できた。 — @curious_queue [出典](https://x.com/curious_queue/status/2090522560631050715)

#### ネガティブ

> `/rename` 機能が欲しい。多数の Codex セッションを並行実行すると端末が区別しにくく、タイトル自動生成があればセッション管理が大幅に改善するはず。 — @udayan_w [出典](https://x.com/udayan_w/status/2091414503070277804)

#### Tips

該当なし

### Codex のターン単位設定更新

#### ポジティブ・ネガティブ・Tips

該当なし

### Codex のページネーション版スレッド履歴が既定に

#### ポジティブ・ネガティブ・Tips

該当なし

### Codex Vim モードの dot-repeat 対応

#### ポジティブ・ネガティブ・Tips

該当なし

### Codex の worktree 設定パーサー追加

#### ポジティブ・ネガティブ・Tips

該当なし

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [rust-v0.150.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.11)
- [rust-v0.150.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.10)
- [rust-v0.150.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.9)
- [@CoreyGallon の投稿 (X)](https://x.com/CoreyGallon/status/2090096395826929791)
- [@ElliotVaucher の投稿 (X)](https://x.com/ElliotVaucher/status/2091842954415550713)
- [@curious_queue の投稿 (X)](https://x.com/curious_queue/status/2090522560631050715)
- [@udayan_w の投稿 (X)](https://x.com/udayan_w/status/2091414503070277804)
