---
title: "Frontier Academy発表とv2.1.288"
summary: "Anthropic が1億ドル規模のエンタープライズAI人材育成プログラム Claude Frontier Academy を発表。2027年末までに1万人の Frontier Deployed Engineer 育成を掲げます。Claude Code は v2.1.288 を公開し、非対話セッションの応答途中タイムアウトからの復帰、バックグラウンドコマンド時間制限の適用範囲変更、`bash -c` 内の危険な rm 修正など、無人運用と安全側の修正が中心です。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-10-03

features:
  - "Claude Frontier Academy"
  - "Claude Code v2.1.288"
  - "/code-review --max-findings <n>|all"
  - "応答途中のAPIタイムアウト復帰"
  - "バックグラウンドコマンド時間制限の適用範囲変更"
  - "claude project purge → claude purge"
  - "CLAUDE_CODE_DISABLE_STRUCTURED_OUTPUTS"
  - "$.ui.selection() (Claude Mods)"
  - "Ctrl+C で消したプロンプトの復元"
  - "agents ビューの Ctrl+F / Alt+↑↓"
  - "auto モードの長い会話対応"
  - "bash -c 内の危険な rm 修正"
  - "LSP リクエストのタイムアウト"
  - "パススコープ .claude/rules と入れ子 CLAUDE.md の Write/Edit 時ロード"
  - "/autocompact のモデル別保存"
  - "MCP の再認証プロンプト"
  - "cloud セッションの組み込み gh api"
codex_review: "1万人の育成構想は、モデル競争から導入人材の供給競争へ軸足を移す動きとして興味深い。ただ、今回のコード更新は運用の穴を埋める地道な改善が主で、業界全体を揺らす新機能という印象は薄い。"
codex_importance: 3
---

## 公式アップデート

### Claude Frontier Academy

Anthropic が、エンタープライズ向けのAI人材育成プログラム **Claude Frontier Academy** を発表しました。医療研修医 (レジデント) 制度を模した育成モデルを採り、1億ドルを投資して2027年末までに1万人の **Frontier Deployed Engineer** を育成することを目標に掲げています。開催地はサンフランシスコ・ニューヨーク・ロンドン。

[ソース](https://www.anthropic.com/news)

### Claude Code v2.1.288

2026-10-02 公開。新機能より、無人・非対話運用の安定性と権限まわりの修正が中心のリリースです。

- **応答途中のAPIタイムアウト復帰**。応答の途中でAPIがタイムアウトするとターン全体が失敗していた問題を修正。非対話セッションとサブエージェントは部分応答から継続し、thinking のみの応答はリトライされる。
- **バックグラウンドコマンド時間制限の適用範囲変更**。制限は非対話セッション (`-p`、Agent SDK、CI、cloud) のみに適用されるようになり、ターミナル・デスクトップアプリ・VS Code のセッションは無制限になった。
- **`/code-review --max-findings <n>|all`** を追加。通常の上限より多く/少なく指摘を報告させるオプション。指定した値は `--max-findings default` を渡すまで引き継がれる。
- **`claude project purge` → `claude purge`** にコマンド名を変更。旧名も通知付きで引き続き動作する。
- **`CLAUDE_CODE_DISABLE_STRUCTURED_OUTPUTS`** を追加。Mantle や構造化出力を拒否するゲートウェイ経由でセッションタイトル・メモリ想起・プロンプトフックが失敗する問題を修正し、構造化出力を無効化する環境変数を用意した。
- **`$.ui.selection()`** を追加 (Claude Mods 向け)。フルスクリーンモードで最後に選択したテキストを返し、選択が transcript の1行に収まる場合はその行も返す。
- **Ctrl+C で消したプロンプトの復元**。空のプロンプトで↑を押すと、貼り付けたテキストや画像を含む下書きが戻る。
- **agents ビューの Ctrl+F / Alt+↑↓**。名前でセッションを検索し、グループ間をジャンプできる。リネームを含め `keybindings.json` で再割り当て可能。
- **auto モードの長い会話対応**。クライアント側の安全分類器がレビューできない長さまで会話が伸びた場合、ツール呼び出しごとに確認・失敗させる代わりに自動圧縮するよう改善。
- **`bash -c` 内の危険な rm 修正**。bypassPermissions モードやシェルの許可ルール下で、`bash -c`/`sh -c` スクリプト内の `/` やホームディレクトリ対象の `rm` が無確認で実行されていた問題を修正 ([#96300](https://github.com/anthropics/claude-code/issues/96300))。
- **LSP リクエストのタイムアウト**。動的 capability 登録を使う、あるいは無応答になった言語サーバーで LSP ツール呼び出しが無限に待機していた問題を修正し、60秒 (サーバーごとの `requestTimeout`) で打ち切るようにした。
- **パススコープ `.claude/rules` と入れ子 CLAUDE.md の Write/Edit 時ロード**。従来は Read のときだけ読み込まれていたものが、スコープ内のファイルを Write/Edit で作成・変更したときにも読み込まれる。
- **`/autocompact` のモデル別保存**。自動圧縮ウィンドウの設定をモデルごとに保持し、モデルを切り替えても各設定が維持される。
- **MCP の再認証プロンプト**。ツール呼び出し中に MCP サーバーが追加の OAuth スコープを要求した際、再認証を促すようになった。
- **cloud セッションの組み込み `gh api`**。GitHub CLI を含まないイメージの cloud セッションでも `gh api` が使える。ファイル名・jq フィルタ・GitHub のエラー由来の制御文字がターミナルへ送られる問題も修正。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.288)

## コミュニティの反応

### Claude Frontier Academy

該当なし

X 上で取得した投稿はいずれも発表そのものの共有・コメントで、実体験や評価に踏み込んだものはありませんでした。

### Claude Code v2.1.288

#### ポジティブ

> Claude Code の mods 機能がゲームチェンジャー級。Minecraft Bed Wars のデモ動画で Claude がプレイヤーを待機させる様子が印象的だった。 — @SameerGupt399 [出典](https://x.com/SameerGupt399/status/2106125729058472055)

> 新しい「You should know」プラグインがサイドエージェントとして Claude の出力を監視してくれるので、長時間セッションで重要な情報を逃さない。 — @XihuangHuang [出典](https://x.com/XihuangHuang/status/2106126674114805777)

#### ネガティブ

> mods 自体は素晴らしいが、仕様が非公開で Claude モデルにロックインされるため、本格的に投資しづらい。 — @merlindru [出典](https://x.com/merlindru/status/2106125490247614549)

### $.ui.selection() (Claude Mods)

#### 日本語コミュニティ

- [10/2 の公式ドキュメント更新：Claude Mods の追加とパーミッション管理の強化](https://qiita.com/akihidem/items/9f61fbe4f9772d1e7836) (Qiita / akihidem) — プラグインが JavaScript 関数としてフックを実装できる Mods と、auto モードのパーミッションルール精緻化という、拡張性と安全性の両面にまたがるドキュメント追加を整理したもの

### バックグラウンドコマンド時間制限の適用範囲変更

#### 日本語コミュニティ

非対話セッションの運用そのものを扱った記事が出ています。

- [Claude Codeの許可リストを整えたのに夜間バッチが止まった理由 ― 許可リスト・パーミッションモード・バイパスは「別のレイヤー」だった](https://qiita.com/devex12/items/4d29c55035d9d6b1f0a0) (Qiita / devex12) — 読み取り系コマンドを `permissions.allow` に登録した環境で、無人の夜間実行が `git push` で止まった経緯。許可リストとパーミッションモードが別レイヤーであることを切り分けている

### パススコープ .claude/rules と入れ子 CLAUDE.md の Write/Edit 時ロード

#### 日本語コミュニティ

- [CLAUDE.mdとauto memoryの違いと書き方](https://zenn.dev/tomsolog/articles/20260930-claude-code-claudemd-guide) (Zenn / トムソー) — 「書く記憶」である CLAUDE.md と「覚える記憶」である auto memory の役割分担、置き場所ごとの使い分けを整理したもの

### /code-review --max-findings <n>|all

該当なし

### 応答途中のAPIタイムアウト復帰

該当なし

### claude project purge → claude purge

該当なし

### CLAUDE_CODE_DISABLE_STRUCTURED_OUTPUTS

該当なし

### Ctrl+C で消したプロンプトの復元

該当なし

### agents ビューの Ctrl+F / Alt+↑↓

該当なし

### auto モードの長い会話対応

該当なし

### bash -c 内の危険な rm 修正

該当なし

### LSP リクエストのタイムアウト

該当なし

### /autocompact のモデル別保存

該当なし

### MCP の再認証プロンプト

該当なし

### cloud セッションの組み込み gh api

該当なし

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.288](https://github.com/anthropics/claude-code/releases/tag/v2.1.288)
- [Anthropic News](https://www.anthropic.com/news)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
