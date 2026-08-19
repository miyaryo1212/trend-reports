---
title: "Codex CLI 0.148.0正式版に/exportとfork追加"
summary: "Codex CLI 0.148.0が正式リリースされ、TUI会話のMarkdownエクスポート、codex exec fork、Amazon Bedrock標準プロバイダ対応、Hooksの非同期実行/MCP呼び出し、/statusのコスト表示が入った。あわせてPrivate Safety ProcessingのプレビューとChatGPT Adsの欧州31カ国展開も公表された。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-08-20

features:
  - "Codex CLI 0.148.0"
  - "Codex /export コマンド"
  - "codex exec fork"
  - "Codex の Amazon Bedrock Runtime 標準プロバイダ対応"
  - "Codex Hooks の非同期実行・MCPツール呼び出し対応"
  - "Codex /status のスレッドクレジット・コスト表示"
  - "Private Safety Processing (Zero Data Retention)"
  - "ChatGPT Ads の欧州31カ国展開"
  - "ChatGPT for iOS の Codex Remote 起動設定・MCPフォーム対応"
codex_review: "Codex周りは派手さより“運用の摩擦を削る”更新が中心で、/exportやforkは地味だが定着に効く類いだと思う。一方でAds欧州拡大は収益化の本気度を示す反面、やや過剰に話題化されそうだ。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI 0.148.0

前回時点ではプレリリース (alpha) のみで変更内容の記載がありませんでしたが、0.148.0 が正式リリースされ、リリースノートに New Features / Bug Fixes / Documentation が明記されました。以降のバージョンは 0.149.0-alpha.1 / alpha.2 が進行中です。

バグ修正側では、モデル切り替え・設定更新が古い指示を残したり実行中のターンを書き換えたりしなくなった点、再開したセッションが作業ディレクトリと承認ポリシーを復元するようになった点、プロバイダの一時障害を跨いでターンが再接続し MCP サーバが OAuth 再認証後に Codex 再起動なしで復帰する点、サンドボックス制限が Linux / Windows で拒否・読み取り不能パスに対して fail closed になった点などが挙がっています。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.148.0)

### Codex /export コマンド

TUI の会話全体を Markdown として書き出すコマンドです。出力先はクリップボードまたは新規ファイルを選べます。

[ソース](https://github.com/openai/codex/pull/37358)

### codex exec fork

`codex exec fork` でセッションをフォークできるようになりました。あわせて TUI の resume ピッカーからセッションのアーカイブ / 復元が可能です。また、TUI 初期化中にプロンプトを下書きでき、起動時に resume / fork の進捗が表示されます。

[ソース](https://github.com/openai/codex/pull/37367)

### Codex の Amazon Bedrock Runtime 標準プロバイダ対応

Amazon Bedrock Runtime が組み込みプロバイダとして利用可能になりました。AWS プロファイル・リージョンの指定と、GPT-5.6 へのルーティングをサポートします。

[ソース](https://github.com/openai/codex/pull/38470)

### Codex Hooks の非同期実行・MCPツール呼び出し対応

Hooks からコマンドを非同期に実行できるようになり、MCP ツールの呼び出しにも対応しました。

[ソース](https://github.com/openai/codex/pull/37533)

### Codex /status のスレッドクレジット・コスト表示

対象ワークスペースにおいて、スレッドの推定クレジットまたはコストを `/status`、ステータス行、ターミナルタイトルに表示できるようになりました。

[ソース](https://github.com/openai/codex/pull/38281)

### Private Safety Processing (Zero Data Retention)

内容を復号せずに、複数の対話をまたいだリスク検知を行う新方式がプレビュー公開されました。展開開始は9月の予定です。

[ソース](https://openai.com/index/)

### ChatGPT Ads の欧州31カ国展開

ChatGPT Ads を来週からドイツ・フランス・スペインなど欧州31カ国に拡大すると発表されました。同機能としては過去最大規模の市場展開です。

[ソース](https://openai.com/index/)

### ChatGPT for iOS の Codex Remote 起動設定・MCPフォーム対応

起動時に直接 Codex Remote を開く設定が追加され、標準的な MCP フォームと編集可能な承認に対応しました。

[ソース](https://openai.com/index/)

## コミュニティの反応

### Codex CLI 0.148.0

#### ポジティブ

> Codex CLI + MCP 連携でポートフォリオ検定を一括化でき、毎日ワンアクションで確認できるのが快適。Codex の挙動が特に優秀。 — @pyun_investor [出典](https://x.com/pyun_investor/status/2089685304689238313)

> Codex CLI を習慣的に使うようになった。ChatGPT 無料版の全モデルが Codex デスクトップで使える点が他のツールより優位で便利。 — @mjjwiki [出典](https://x.com/mjjwiki/status/2089701378168152127)

#### ネガティブ

> Codex CLI の出力形式が論文のようで読みにくく、リスト記号が多すぎて見づらい。 — @0xhannibal42 [出典](https://x.com/0xhannibal42/status/2089959975934398694)

> 0.147.0 → 0.148.0 に更新しても Windows の pwsh 更新バグが残っている。root cause は特定済みで1コミットで修正可能。 — @snowy_smile_ [出典](https://x.com/snowy_smile_/status/2089946054070538420)

#### Tips

> ChatGPT App 未インストールの環境でも、Codex CLI 単体でリモートコントロールを有効化する方法。 — @keita_roboin [出典](https://x.com/keita_roboin/status/2089910229135692086)

リリース直後のため、0.148.0 に特化した個人の実体験投稿はまだ多くありません。

### Codex /export コマンド

#### ポジティブ

> Codex CLI で業務システムを構築中。会話全体を Markdown で保存できれば「なぜこの仕様にしたか」「失敗した判断」まで残せて引継ぎに使える。地味だが実務向き。 — @muuuuuu___uu [出典](https://x.com/muuuuuu___uu/status/2089911724032110709)

> 0.148.0 の /export で会話ログ保存と作業分岐が強化され、検証手順や記録を残しやすくなった。長期開発で便利そう。 — @nekopy_ai [出典](https://x.com/nekopy_ai/status/2089860048013127763)

> /export 追加で会話ログの保存と作業分岐が強化され、検証手順・記録が残しやすくなった。 — @karino_karichan [出典](https://x.com/karino_karichan/status/2089967094515560859)

#### ネガティブ

該当なし

#### Tips

該当なし

### codex exec fork

#### ポジティブ

> Codex CLI はデフォルトでセッショントランスクリプトを無期限に保持するので、古いセッションの grep・resume・監査が簡単にできる。 — @BoldingBuilds [出典](https://x.com/BoldingBuilds/status/2090182410969178220)

#### ネガティブ

該当なし

#### Tips

> 0.148.0 の fork は「worktree のようにコードを別ブランチに分けるのか、それともセッション分岐だけなのか」という疑問が上がっている。 — @hashMi_1210 [出典](https://x.com/hashMi_1210/status/2089912415882522859)

> 実験用に狭いスコープのスレッドを fork して比較し、ファイルを共有する場合は branch / worktree を併用するのが良い。 — @codeglitch [出典](https://x.com/codeglitch/status/2090184025189286181)

### Codex /status のスレッドクレジット・コスト表示

#### ポジティブ

該当なし

#### ネガティブ

> stale session の場合、/status の初回は古い usage しか表示されず、2回目でようやく最新の credit / usage が取れるバグがある。 — @valmianski [出典](https://x.com/valmianski/status/2090127010534498798)

#### Tips

該当なし

### Codex の Amazon Bedrock Runtime 標準プロバイダ対応

#### ポジティブ・ネガティブ・Tips

該当なし（リリース告知系の投稿のみで、個人ユーザーの実体験投稿は確認できていません）

### Codex Hooks の非同期実行・MCPツール呼び出し対応

#### ポジティブ・ネガティブ・Tips

該当なし

### Private Safety Processing (Zero Data Retention)

#### ポジティブ・ネガティブ・Tips

該当なし（9月展開予定のプレビュー機能のため、実使用に基づく投稿はまだありません）

### ChatGPT Ads の欧州31カ国展開

#### ポジティブ・ネガティブ・Tips

該当なし（展開開始が来週のため実体験投稿はなし。解説記事として [ChatGPT Ads、欧州31カ国へ拡大——OpenAI公式発表を3分で速報解説 (Qiita)](https://qiita.com/kinamocchi_tech/items/a17a621e502b3c2d577d) が公開されています）

### ChatGPT for iOS の Codex Remote 起動設定・MCPフォーム対応

#### ポジティブ・ネガティブ・Tips

該当なし（発表直後のため、個人ユーザーの実使用感想はまだほとんど投稿されていません）

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [rust-v0.148.0 リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.148.0)
- [ChatGPT Ads、欧州31カ国へ拡大——OpenAI公式発表を3分で速報解説 (Qiita)](https://qiita.com/kinamocchi_tech/items/a17a621e502b3c2d577d)
- [Codexを「Solが監督、Luna Maxがworker」の構成にする (Zenn)](https://zenn.dev/kimkiyong/articles/a853947d33876a)
- [GPT-5.6 Sol APIが50%オフ：AIHubMixとOpenRouterの実質コストを比較 (Qiita)](https://qiita.com/xiongyuanmeng1006/items/6bb698f274ce61247a16)
