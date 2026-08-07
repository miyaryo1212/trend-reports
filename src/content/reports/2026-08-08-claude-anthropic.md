---
title: "v2.1.224でセッション同士が会話を始めた"
summary: "Claude Code v2.1.224が公開。セルフホストランナー、別マシンをまたぐクロスセッションSendMessage/ListAgents、archiveプラグインソース、サブエージェント200体上限の撤廃が入った。Xでは「ローカルp2pエージェント」への好反応が中心で、Windows非対応が不満点。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-08-08

features:
  - "Claude Code v2.1.224"
  - "self-hosted-runner (セルフホスト環境)"
  - "クロスセッション SendMessage / ListAgents"
  - "crossSessionInbound / dialogExpiry 設定"
  - "archive プラグインソース"
  - "サンドボックス資格情報マスキング拡張"
  - "サブエージェント200体上限の撤廃"
  - "サンドボックスの末尾スラッシュ回避バグ修正"
  - "長いプロジェクトパスのセッション混線を修正"
  - "フィードバック調査の共有内容変更"
  - "Remote Control 改善"
  - "Claude Fable 5 バイオロジー安全装置の緩和"
codex_review: "いちばん面白いのは、派手な性能向上ではなくClaude Codeが“単体の補助”から協調する作業基盤へ一段進んだ点だ。反面、熱狂はやや先行気味で、真価は運用設計と権限制御が整ってからだと思う。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.224 (2026-08-07)

前回レポート時点の最新は v2.1.223 でした。本日、v2.1.224 が公開されています。

**追加された機能**

- **`claude self-hosted-runner`（セルフホスト環境）**: 自前のマシンやコンテナを、Claude Code の web・モバイル・デスクトップセッションの実行先にできる。Team / Enterprise プラン向け。
- **クロスセッション `SendMessage` / `ListAgents`**: Claude Code のセッション同士がメッセージを送り合えるようになった。自分の任意のマシン上のセッションが対象で、`ListAgents` で相手を探す。macOS / Linux のみ。
- **`crossSessionInbound` / `dialogExpiry` 設定**: 権限バイパス（bypassPermissions）で動作中のセッション宛のメッセージは承認待ちとして保留され、それ以外のセッション宛は自動配送される。
- **`archive` プラグインソース**: git や npm を介さず、HTTPS 越しの zip からプラグインを導入できる。SHA-256 でのピン留めが任意で指定可能。
- **サンドボックス資格情報マスキングの拡張**: 構造化された環境変数値向けの `extract` / `onExtractNoMatch`、JWT 対応の `decode: "jwt"` + `maskClaims`、AWS SigV4 の再署名 (`awsPairs` / `sigv4`)。いずれも `network.tlsTerminate` が必要で、user・managed・`--settings` 由来の設定からのみ有効。
- **`ANTHROPIC_BEDROCK_REGION_PREFIX`**: Bedrock で `AWS_REGION` 由来ではない特定のクロスリージョン推論プロファイルを優先させる環境変数。

**削除・変更**

- **サブエージェント200体/セッションの生成上限を撤廃**。長時間セッションで新規エージェントの生成が拒否されなくなった（同時実行数と入れ子深さの制限は残る）。
- **フィードバック調査のトランスクリプト共有**: 同意した場合、直近リクエストのモデル設定—システムプロンプト（`CLAUDE.md` の指示を含む）、ツール定義、モデルパラメータ—も併せて送信されるようになった。シークレットは従来どおり秘匿され、サイズ超過時はこれらのフィールドが最初に落とされる。
- **Remote Control**: 圧縮（compaction）の進捗と圧縮後の境界が web / モバイルの接続クライアントにも見えるようになり、`/clear` のリセットも伝播。接続失敗時は8秒のトーストではなく、詳細付きの常設インジケータと再接続ショートカットを表示。圧縮や `/resume` で新セッションが作られた際、古いサーバーセッションはアーカイブされる。

**主な修正**

- 200文字超のプロジェクトパスが、共通の正規化プレフィックス配下で別プロジェクトのセッションディレクトリに解決されていた問題。セッション一覧・リネーム・フォーク・削除・`/resume` がプロジェクトをまたがなくなった。
- サンドボックスのファイルシステム拒否設定を末尾スラッシュ付き（例 `denyRead: "~/.aws/"`）で書くと、Linux / macOS で黙って迂回できた問題。
- `SendMessage` が、同僚セッションの受信箱への書き込みに失敗していたにもかかわらず "Message sent" と報告していた問題。失敗はエラーとして報告される。
- サンドボックス違反の詳細が Bash ツールの結果に一切出ていなかった問題。どのファイル/ネットワークアクセスがなぜ拒否されたかが Claude から見えるようになった。
- 同一プラグインを複数プロジェクトにインストールするとインストール記録が黙って壊れる問題。

[Claude Code Releases v2.1.224](https://github.com/anthropics/claude-code/releases/tag/v2.1.224)

### Claude Fable 5 のバイオロジー安全装置の緩和

生物学分野の安全機能が調整され、誤検知による差し戻しが約85%削減されたと発表されました。内訳は Claude.ai 約67%、Cowork 55%、Claude Code 17%、Platform 7%。日常的な健康・学習系の質問に回答できる範囲が広がります。

（本項は 2026-08-07 付の告知を Step 1 で抽出したもので、一次ソースの URL は本日の取得データに含まれていません。）

## コミュニティの反応

### クロスセッション SendMessage / ListAgents

本日の X で最も反応が集まったのはこの機能でした。「ローカル p2p エージェント」という受け取られ方をしています。

#### ポジティブ

> クロスセッション SendMessage が自分の複数マシン間でも動作するようになり、ラップトップと別の Mac のエージェント同士を手軽に連携させられるのが便利。 — @Vendi7Antonella [X](https://x.com/Vendi7Antonella/status/2085757935099986142)

> Cross-session messaging in Claude Code is a game changer for agent workflows. マルチエージェントの協調がずっとスムーズになる。 — @bozzxyz [X](https://x.com/bozzxyz/status/2085825508726718931)

> v2.1.224 の最大の価値は、明らかにローカル p2p エージェント。 — @crestalblue_ [X](https://x.com/crestalblue_/status/2085729978444825036)

#### ネガティブ

> ネイティブ Windows ではクロスセッションメッセージングは提供されない。 — @EngageHub1 [X](https://x.com/EngageHub1/status/2085819594703352198)

#### Tips

> クロスセッションメッセージングでは TASK / CHANGED / CHECKED / NEXT / BLOCKED を使うとよい。次のセッションが検証可能な目標を受け取れる。 — @codeglitch [X](https://x.com/codeglitch/status/2085832418687393861)

> ListAgents で相手を探し、別マシンのセッションにも送れる。権限バイパス中のセッション宛はユーザー承認が必要。 — @engineer_num1 [X](https://x.com/engineer_num1/status/2085720366480322569)

### self-hosted-runner (セルフホスト環境)

#### ポジティブ

> 1つのコマンドでクラウド側の制約から解放され、自分のマシン/コンテナをそのまま実行環境にできる。環境構築で3時間溶かす類の絶望が終わった。 — @aria_ai_tools [X](https://x.com/aria_ai_tools/status/2085716211162370512)

> ソースコードが社外に出ず、社内 DB / サーバーにも直接アクセスできる。ファイアウォールに穴を開ける必要がない設計が特に良い。 — @shima0hide [X](https://x.com/shima0hide/status/2085620650736312342)

#### Tips

> `claude self-hosted-runner --help` でまず確認（v2.1.224 以降が必要）。`--capacity` は同時ユーザー数ではなく、1アカウント内のセッション上限を指す点に注意。 — @sardaratta [X](https://x.com/sardaratta/status/2085711530495267317)

### archive プラグインソース

#### Tips

> git / npm 不要で HTTPS 経由の zip から直接プラグインを導入でき、SHA-256 ピン留めも指定できる。社内配布や GitHub を使わない環境に向く。 — @engineer_num1 [X](https://x.com/engineer_num1/status/2085724038962598178)

（他に個人ユーザーの実体験投稿は見つかりませんでした。）

### サブエージェント200体上限の撤廃

#### ポジティブ

> 長時間セッションでのサブエージェント200体上限が撤廃され、自動タスクを止めずに走らせ続けられるようになったのが地味に便利。同時実行数と入れ子深さの制限は残るので注意。 — @kumitate_ai [X](https://x.com/kumitate_ai/status/2085625796300079479)

関連して、無制限に増やすことのリスク側を実測で整理した記事も本日出ています。

> 75体の並列ファンアウトで 5.25M トークンを消費し、429（レート制限）と利用枠超過で停止した。実測値付きの失敗5類型と対策をまとめた。 — @krbrr [75体の並列エージェントで5.25Mトークンを溶かした——マルチエージェント運用の失敗5類型](https://zenn.dev/zenn_content/articles/multi-agent-failure-patterns-measured)

### サンドボックス資格情報マスキング拡張

v2.1.221 で入った `mode: "mask"` の実運用報告が、拡張オプション追加のタイミングで出ています。

#### ポジティブ

> sandbox mask mode で `.env` を登録するとコマンド側は偽の値を読むようになり、実シークレットが漏れない。Linux / WSL2 限定だが任せられる範囲が広がった。 — @dani_avila7 [X](https://x.com/dani_avila7/status/2084451573728714815)

> 認証情報ファイルを実行時はダミー、送信時だけ本物に差し替えてくれる。launchd ジョブを20本以上常駐させている自動化環境で助かる。 — @JurisCode_AI [X](https://x.com/JurisCode_AI/status/2085493661836398903)

#### ネガティブ

> extract の regex オプションは刃物。一度でも credential span を取りこぼすと、サンドボックスが壊れるか、意図せず漏洩するリスクが高い。 — @__spekulator__ [X](https://x.com/__spekulator__/status/2084450079528874154)

### Remote Control 改善

本日の変更点（圧縮進捗の反映、`/clear` の伝播、常設インジケータ）そのものに言及した投稿は見つかりませんでした。以下は同時期の Remote Control 全般に対する反応です。

#### ポジティブ

> iPhone から Mac のセッションに繋いで軽快に使えている。リモートデスクトップよりデータ容量が節約できて快適。 — @u_ichi11 [X](https://x.com/u_ichi11/status/2085706774393586060)

> VSCode 拡張からリモート接続できるようになり、スマホ利用時にターミナルを起動する手間が省けた。 — @romly2023 [X](https://x.com/romly2023/status/2085663839799087213)

#### ネガティブ

> Mac アプリの `/remote-control` は依然として不安定。初回リクエスト後に iPhone 側の同期が止まり、セッションが Archived になる。 — @GrandeBlueRoast [X](https://x.com/GrandeBlueRoast/status/2085754614914113716)

> 接続が頻繁に切れて回復不能になるため、新しい Claude スレッドをリモート有効で立ち上げ直す必要がある。 — @hexwanderer [X](https://x.com/hexwanderer/status/2084871610604163130)

### Claude Fable 5 バイオロジー安全装置の緩和

#### ポジティブ

> 誤検知85%削減ということは、Claude は何ヶ月もの間、普通の生物学の質問を過剰にブロックしていたということ。Fable 5 でそれが直った。 — @itsmiroko [X](https://x.com/itsmiroko/status/2085588100701663453)

> 大きな前進。誤検知85%削減は、日常的な健康・学習系のクエリの UX が大きく改善することを意味する。 — @kanishkaansh [X](https://x.com/kanishkaansh/status/2085586976078708934)

> 生物学まわりで別モデルに回される挙動を約85%削減。過剰な拒否を数値で潰しに来たのが良い。 — @ai_hack_dx [X](https://x.com/ai_hack_dx/status/2085567364037529647)

### crossSessionInbound / dialogExpiry 設定 / 長いプロジェクトパスの修正 / 末尾スラッシュ回避の修正 / フィードバック調査の共有内容変更

該当なし。いずれも直近の X 投稿・Zenn / Qiita 記事に、個人ユーザーの実体験や言及は見つかりませんでした。

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
