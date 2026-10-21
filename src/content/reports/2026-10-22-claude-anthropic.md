---
title: "Claude Duet公開、破壊的変更含むAPI新版"
summary: "Anthropicが能動的に動くエージェントアプリClaude Duetのリサーチプレビューを米国Pro/Max向けに開始し、temperature等を廃止するAPIバージョン2026-10-21とSDK7種のメジャー更新を公開しました。Claude Securityは継続スキャンと修正追跡に対応し、APIにはUser profilesと組織Webhookが加わりました。コミュニティの反応はまだ少なく、QiitaにUser profilesの入門記事が1本出ています。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-10-22

features:
  - "Claude Duet"
  - "APIバージョン 2026-10-21"
  - "クライアントSDK 7種と ant CLI のメジャーバージョン更新"
  - "Claude Security 継続スキャンと修正追跡"
  - "User profiles"
  - "User profiles の enforcement_status / enforcement_actions"
  - "Organization webhooks (Admin APIベータ)"
  - "Claude Code v2.1.306"
  - "OSS Scanner 攻撃対象領域の削減スキル"
codex_review: "派手さではDuetに目が行くが、業界的に地味で重要なのはUser profilesと継続スキャンだ。顧客単位の執行と修正追跡は、AI運用を実験から本番の責任体制へ移す一歩。ただしAPI新版の破壊的変更は導入障壁にもなる。"
codex_importance: 4
---

## 公式アップデート

### Claude Duet

2026年10月21日に、Claudeが能動的なエージェントとして動く新アプリ「Claude Duet」のリサーチプレビューが公開されました。公式記事によると、注意が必要な事項を自分から持ってきて、頼まれたタスクを完了し、ユーザーが離れている間も作業を続け、代理で行動する前に確認を取る、という設計です。

- **提供形態**: iOSとAndroidのスタンドアロンアプリ、およびclaude.ai上で提供されます。
- **対象と料金**: リサーチプレビュー期間中はProとMaxプランに含まれ、使用量制限は他のClaudeと共通です。まず米国のPro/Maxユーザーから、ウェイトリスト制で開始します。
- **動作**: Claude Opus 5.5を中心に構築されており、朝のブリーフを送る、接続したアカウントを数時間おきに確認する、専用のVMとブラウザを持つ、といった記述があります。メッセージ送信・支払い・署名・削除の前には承認を求めます。

[ソース](https://claude.com/resources/articles/claude-duet)

### APIバージョン 2026-10-21

2026年10月21日に、新しいAPIバージョン `2026-10-21` が公開されました。従来の `2023-06-01` からの移行ガイドが同時に公開されています。移行ガイドに記載された破壊的変更は次のとおりです。

- **サンプリングパラメータの廃止**: `temperature`、`top_p`、`top_k` を送るリクエストは、既定値であっても400エラーになります。これらを送らない場合は既定値(temperature 1.0など)でサンプリングされます。既定値以外に依存するリクエストは、パラメータを送るのをやめるか、そのリクエストだけ `2023-06-01` に留める必要があります。
- **assistantメッセージ内の `document` ブロック**: assistantメッセージに直接 `document` ブロックを置くと400エラーになります。
- **userメッセージ内の `citations`**: userメッセージ内の `text` ブロックに空でない `citations` 配列があると400エラーになります。
- **Admin API / Claude Enterprise Analytics API**: 改名済みフィールドの旧名(`roles`、`group_id`、`name`、`group_type`、`workspace_id`、`actor.email`、`summaries` など)がレスポンスに含まれなくなります。
- **Amazon Bedrock上の制約**: Bedrockでは `2026-10-21` はClaude 4.7以降のモデルでのみ利用できます。

アップグレードは `anthropic-version: 2026-10-21` ヘッダーを指定するか、次項の新しいSDK/CLIを導入することで行います。

[ソース](https://platform.claude.com/docs/en/release-notes/api) / [移行ガイド](https://platform.claude.com/docs/en/api/migration-2026-10-21)

### クライアントSDK 7種と ant CLI のメジャーバージョン更新

2026年10月21日に、APIバージョン `2026-10-21` を既定で送信するクライアントSDKと `ant` CLIの新版が公開されました。

| 対象 | 新バージョン |
| --- | --- |
| Python SDK | 2.0.0 |
| TypeScript SDK | 1.0.0 |
| C# SDK | 13.0.0 |
| Go SDK | 2.0.0 |
| Java SDK | 3.0.0 |
| PHP SDK | 1.0.0 |
| Ruby SDK | 2.0.0 |
| ant CLI | 2.0.0 |

リリースノートには、これらのSDKとCLIにはAPIバージョンに依存しない破壊的変更も含まれること、およびライセンスがMITからApache 2.0に変更されたことが明記されています。移行ガイドのSDK変更の項では、`MessageParam` がuser/assistant/systemの各型のユニオンになること、ツールランナーのクライアント側 `compaction_control` が削除され `context_management` に置き換わること、レガシーのText Completions APIが一部SDKとCLIから削除されることなどが挙げられています。

[ソース](https://platform.claude.com/docs/en/release-notes/api)

### Claude Security 継続スキャンと修正追跡

2026年10月21日に、Claude Securityの更新がClaude Enterprise向けパブリックベータとして公開されました。

- **継続スキャン**: リポジトリ接続後に深いベースラインスキャンを実行し、その後はコードの変更をリスクと複雑さに応じて定期的にスキャンします。接続はClaude GitHubアプリ(GitHub Enterprise Serverを含む)またはGitLabなどのGitトークン経由です。
- **修正追跡**: 未解決の指摘を変更されたコードと照合し、修正が入った時点で解決済みにします。後で同じ問題が再び見つかった場合は自動で再オープンされます。
- **チームのコンテキスト**: プロジェクトごとのナレッジベースと編集可能な脅威モデルを持ち、各指摘に深刻度と攻撃経路の説明・図を付けます。
- **連携**: プロジェクトと指摘の一覧・取得、解決・再オープン、Webhookなどを扱うAPIと、Claude.aiおよびClaude CodeのMCPコネクタ、ロールベースのアクセス制御が追加されました。
- **モデルと料金**: Claude Mythosを含む全モデルを利用し、Cyber Verification Programへの参加は不要です。2026年12月31日まで、月25,000ドルの無料利用クレジットが2か月分提供されます。

公式記事によると、4月のパブリックベータ開始以降、数千の組織が100万件以上の脆弱性を発見したとしています。

[ソース](https://claude.com/resources/articles/claude-security-now-scans-continuously-and-tracks-fixes)

### User profiles

2026年10月20日に、APIリクエストごとにどのエンドカスタマー向けかをAnthropicに伝える「User profiles」が公開されました。プラットフォームやゲートウェイの運営者、API再販事業者が対象で、安全性に関する措置を組織全体ではなく該当するエンドカスタマー1人に限定できます。SDKと `ant` CLIは新しい `/v1/user_profiles` エンドポイントに対応しています。

[ソース](https://platform.claude.com/docs/en/release-notes/api)

### User profiles の enforcement_status / enforcement_actions

2026年10月21日に、User profilesへ `enforcement_status` と `enforcement_actions` フィールドが追加されました。Anthropicがそのエンドカスタマーを制限またはBANしているかを確認できます。制限中・BAN中のプロファイルを探すには、一覧取得に追加された `enforcement_status[]` フィルタを使います。

[ソース](https://platform.claude.com/docs/en/release-notes/api)

### Organization webhooks (Admin APIベータ)

2026年10月20日に、Admin APIへ組織Webhookがベータとして追加されました。`webhooks-2026-10-07` ベータヘッダーで利用します。`/v1/organizations/webhooks` エンドポイントでWebhook先を登録でき、イベント種別は「Anthropicが組織のUser profileを制限またはBANしたとき」と「その制限またはBANが終了したとき」の2種類です。利用にはAnthropicのアカウントチームへの申請が必要です。

[ソース](https://platform.claude.com/docs/en/release-notes/api)

### Claude Code v2.1.306

2026年10月21日に公開されました。前版v2.1.305の翌日の更新で、修正は2点です。

- クラウドセッション内で、セッションの環境変数なしに起動した `claude -p` が「Not logged in」と報告する問題を修正しました。
- MCPツールが多数あるセッションで、APIエラーが「prompt is too long」に置き換えられ、不要な圧縮が走っていた問題を修正しました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.306)

### OSS Scanner 攻撃対象領域の削減スキル

Step 1の抽出では、到達可能性や設定競合を解析する手法をClaudeスキルとして整備し、OSS Scannerに統合した(2026年10月20日)とされています。本日時点でanthropic.comのニュース、claude.comのブログ、エンジニアリングブログのいずれからも該当する公式記事を特定できなかったため、内容の詳細とソースURLは未確認です。

## コミュニティの反応

### Claude Duet

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

(X上で取得できた投稿は公式の引用、ニュース共有、EU対応への疑問などで、実際に使った個人の反応はまだありませんでした。米国限定のウェイトリスト制のため、公開初日の時点で実体験の投稿が出ていないのは自然な状況です)

#### Zenn・Qiita

該当なし

### APIバージョン 2026-10-21

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

#### Zenn・Qiita

新APIバージョンそのものを扱った記事はまだありませんが、リクエストが400で拒否される問題を扱った周辺記事が同日に出ています。

- [Claude Sonnet 5.5へ載せ替えると400になる4つの書き方：smokeテストで先に潰す](https://zenn.dev/yunisuta/articles/claude-sonnet-400-smoke-anthropic-tnzgdo): モデルIDをSonnet 5.5に変えただけで本番ジョブが400で落ちる事故を、最小リクエストのsmokeテストで先に再現して直す手順。仕様確認は2026年9月25日時点のキャッシュに基づくもので、今回のAPIバージョンの変更は扱っていません(Tips)
- [Claude API のエラー処理：再試行してよいエラーと、してはいけないエラー](https://zenn.dev/aishigoto/articles/cert-claude-api-error-retry): 公式ドキュメントをもとに、ステータスコードごとに再試行の可否を整理した記事。ドキュメントの確認日は2026年10月21日ですが、新APIバージョンには触れていません(中立)

### クライアントSDK 7種と ant CLI のメジャーバージョン更新

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

#### Zenn・Qiita

該当なし

### Claude Security 継続スキャンと修正追跡

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

(X上で取得できた投稿は公式アカウントや企業の宣伝が中心で、個人の実体験に基づく反応はありませんでした)

#### Zenn・Qiita

該当なし

### User profiles / enforcement_status / Organization webhooks

#### ポジティブ

> Anthropicの新機能でエンドカスタマーごとにAPIリクエストをタグ付けし、BANを組織全体ではなく個別顧客に限定できる点を紹介し、タグ付けとWebhookを組み合わせる運用のプレイブックを提案 — @JunoAgent [出典](https://x.com/JunoAgent/status/2112836111676633328)

#### ネガティブ

該当なし

#### Tips

該当なし

#### Zenn・Qiita

- [Claude User Profiles と組織Webhook(Admin API)入門:エンドカスタマー単位の安全性措置](https://qiita.com/picnic/items/a76a0164a1e2db4f994d): リリースノートで公開された `/v1/user_profiles` と組織Webhookを取り上げた入門記事。APIリクエストごとにどのエンドカスタマー向けかをAnthropicに伝え、安全性に関する措置をエンドカスタマー単位に限定できる仕組みとして整理しています(中立・解説)

### Claude Code v2.1.306

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

#### Zenn・Qiita

該当なし

### OSS Scanner 攻撃対象領域の削減スキル

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

#### Zenn・Qiita

該当なし

### 全体の温度感

公式側は1日に発表が集中しました。Claude Duetは「Claudeが自分から動く」という位置付けのアプリで、リサーチプレビューかつ米国限定のため、評価が出てくるのはこれからです。開発者にとって直近で影響が大きいのはAPIバージョン `2026-10-21` で、`temperature` などのサンプリングパラメータを送るだけで400になるため、新しいメジャー版SDKへ更新する際はリクエストの形を見直す必要があります。SDKのライセンスがApache 2.0に変わった点も企業利用では確認事項になります。

コミュニティの反応は、X・Zenn・Qiitaともに発表直後でまだ薄く、唯一まとまった反応があるのはUser profilesです。プラットフォーム運営者がエンドカスタマー単位でBANを扱えるようになった点を、Webhookと組み合わせた運用として捉える見方が出ています。Zennでは直接の反応はないものの、モデル載せ替え時の400エラーをsmokeテストで先に潰すという記事が同日に出ており、今回のAPIバージョン移行でも同じ発想が役立ちそうです。

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude API リリースノート](https://platform.claude.com/docs/en/release-notes/api)
- [Migrating to API version 2026-10-21](https://platform.claude.com/docs/en/api/migration-2026-10-21)
- [Introducing Claude Duet](https://claude.com/resources/articles/claude-duet)
- [Claude Security now scans continuously and tracks fixes](https://claude.com/resources/articles/claude-security-now-scans-continuously-and-tracks-fixes)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
