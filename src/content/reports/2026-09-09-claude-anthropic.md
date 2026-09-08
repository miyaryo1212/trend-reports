---
title: "Claude Code v2.1.265 が大型修正リリース"
summary: "Claude Code v2.1.265 が公開され、--plugin-dir のフォルダ指定、ツール結果1GB上限、symlink 封じ込めの修正、非対話セッションでの cd 永続化など50件超の変更が入りました。Claude apps gateway 側では OTLP の直接エクスポートと forceLoginGatewayUrl の挙動変更が入っています。X 上ではリリース当日のため個別機能への実体験投稿はほぼ確認できませんでした。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-09

features:
  - "Claude Code v2.1.265 リリース"
  - "--plugin-dir のフォルダ指定対応"
  - "ツール結果のディスク保存に1GB上限"
  - "プラグインパスの symlink 封じ込めチェック修正"
  - "非対話セッションの cd 永続化"
  - "プロンプトキャッシュ再利用の修正群"
  - "レガシー HTTP+SSE な MCP サーバーへの SSE フォールバック"
  - "/workflows のエージェント詳細強化"
  - "プロンプト途中のスラッシュコマンド補完改善"
  - "--worktree 起動高速化"
  - "Artifact ツールの他者作成アーティファクト読み取り強化"
  - "Claude apps gateway: OTLP テレメトリの直接エクスポート"
  - "Claude apps gateway: forceLoginGatewayUrl の挙動変更"
  - "VS Code 拡張: 非アクティブセッションの自動アーカイブ"
codex_review: "派手な新機能というより、実運用で溜まっていた痛点を潰す堅実なリリースだと思う。特にcd永続化とsymlink修正は地味だが、エージェント基盤としての成熟度に効く。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.265

2026-09-09 05:37 (JST) に公開されました。50件を超える変更が含まれる大型リリースで、プラグイン管理・プロンプトキャッシュ・非対話セッション周りが中心です。主な内容は以下のとおりです。

**プラグイン管理**

- `--plugin-dir` にプラグインのフォルダを指定できるようになりました。マニフェストを持つ子フォルダがそれぞれロードされ、実行中に子フォルダが追加・削除された場合も反映されます。
- バックスラッシュを含むプラグインパスが macOS / Linux で symlink 封じ込めチェックを回避できた問題を修正しました。
- 名前がドット2つで始まるプラグインディレクトリが、プラグインルート外として誤って拒否されていた問題を修正しました。
- OS が状態を確認できないデフォルトコンポーネントフォルダ (symlink ループなど) が黙ってスキップされていた問題を修正し、`/plugin` にエラーコード付きで表示されるようになりました。
- `/plugin` の Discover / Browse と `claude plugin list --json --available` で、メタデータが `plugin.json` にしか無いマーケットプレイスプラグインの説明・表示名が出なかった問題を修正しました。

**ツール実行・セッション**

- ディスクに保存されるツール結果に 1 GB の上限が設けられました。保存ファイルが切り詰められた場合は会話内のプレビューにその旨が表示されます。
- 非対話セッション (`-p` の stream-json 入力、Agent SDK、クラウドセッション) で、ユーザーメッセージのたびにシェルの作業ディレクトリがリセットされていた問題を修正しました。`cd` がターンをまたいで保持されます。
- 前のプロセスがツール実行中に落ちた後の再開時に、最後のプロンプトが書き換えられず、中断されたツール呼び出しが「中断」として保持されるようになりました。

**プロンプトキャッシュ**

- フォアグラウンドで起動したサブエージェントを再開するとツール一覧とシステムプロンプト接頭辞が変わり、そのエージェントのプロンプトキャッシュ再利用が壊れていた問題を修正しました。
- エージェントチームのメンバーや再開したサブエージェントで、SubagentStart フックのコンテキストとプリロード済みスキルが2ターン目以降にプロンプト接頭辞から外れ、キャッシュ再利用が壊れていた問題を修正しました。

**MCP・接続まわり**

- `http` として設定された MCP サーバーのうち、レガシーな HTTP+SSE トランスポートしか話さないものが接続できなかった問題を修正しました。MCP 仕様どおり SSE にフォールバックします。
- クラウドセッションで、claude.ai 側では接続済みの一部コネクタが「認証が必要」と表示されていた問題 (非対応リクエストに HTTP 401 を返すサーバー) を修正しました。

**UI・その他の改善**

- `/workflows` のエージェント詳細で、ツール呼び出しが running / failed / done として表示され、サブエージェントがタスクリストを持つ場合はそれも表示、Enter で各呼び出しの入力と結果を展開できるようになりました。
- プロンプト途中で打ったスラッシュコマンドが、単一候補ではなく候補リストで表示されるようになりました (フルスクリーン外では Tab で展開)。プラグインのスキルを素の名前で検索できます。
- 大規模リポジトリでの `--worktree` 起動が高速化しました。新しい worktree を並列チェックアウトします (git 2.32+)。
- Artifact ツールが他者の書いたアーティファクトを読む際、そのページを非信頼コンテンツとして扱い、埋め込まれた指示を中継せず警告するようになりました。
- 2キーのキーボードショートカットが、2つ目のキーが1秒以上遅れると黙ってキャンセルされていた問題 (tmux 内などで発生) を修正し、3秒待ってタイムアウト時に通知を出すようになりました。
- Windows で AppContainer や制限トークンのサンドボックス内で実行すると Read / Write / Edit が全ファイルを拒否していた問題を修正しました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.265)

### Claude apps gateway の変更 (v2.1.265 に同梱)

- Claude apps gateway のセッションが、managed settings の `OTEL_EXPORTER_OTLP_ENDPOINT` で指定されたコレクタへ、gateway のリレーを介さず直接 OpenTelemetry をエクスポートするようになりました。コレクタが指定されていないセッションは従来どおりリレー経由です。
- あわせて、gateway の OTLP テレメトリリレーが、不正または大きすぎるペイロードを数回拒否した後に該当コレクタへの転送を30秒間すべて停止していた問題が修正されています。
- managed settings に `forceLoginGatewayUrl` を持つマシンが、`forceLoginMethod: "gateway"` と同様に起動時から Claude apps gateway セッションとして扱われるようになりました。残存する claude.ai ログインや API キーは使用されません。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.265)

### VS Code 拡張: 非アクティブセッションの自動アーカイブ

一定期間操作のなかったセッションを自動でアーカイブする機能が追加されました。新設定「Archive inactive sessions」で制御し、デフォルトは14日です。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.265)

## コミュニティの反応

### Claude Code v2.1.265 リリース

**該当なし**

リリース当日 (2026-09-08) 時点で、X 上に個人ユーザーの実体験・感想の投稿は確認できませんでした。確認できたのは公式寄り・チェンジログ系アカウントによる告知のみです。

### --plugin-dir のフォルダ指定対応

**該当なし**

### ツール結果のディスク保存に1GB上限

**該当なし**

### プラグインパスの symlink 封じ込めチェック修正

**該当なし**

### 非対話セッションの cd 永続化

**該当なし**

### プロンプトキャッシュ再利用の修正群

**該当なし**

### レガシー HTTP+SSE な MCP サーバーへの SSE フォールバック

**該当なし**

### /workflows のエージェント詳細強化

機能自体への直接の言及は確認できませんでしたが、ワークフロー / サブエージェント運用そのものへの反応は複数ありました。

#### ポジティブ

> Claude Code のハーネスはワークフローで優位で、orchestrator + Advisor (Fable) と実装用サブエージェント (Opus) の組み合わせは置き換えにくい — @murtaza_md [X](https://x.com/murtaza_md/status/2097427572124762595)

> Claude Code にデザインをデプロイさせ、CSV をドラッグしてプレースホルダー置き換えまで一気に完了。エージェントを足してコンテンツ更新も楽になった — @thepixelgeek [X](https://x.com/thepixelgeek/status/2097427032091017401)

> Claude Code CLI はコードベース全体を理解し、50ファイル超のマルチステップリファクタを正確にこなす。9/10 の評価 — @GarvSanwariya [X](https://x.com/GarvSanwariya/status/2097362367612883127)

#### ネガティブ

> サブエージェントにタスクを委譲したところ、親コンテキストもタイムアウトも無いまま12時間以上暴走した — @tayyibofweb3 [X](https://x.com/tayyibofweb3/status/2095046473893257333)

> 1インスタンスでも worktree を作り忘れて更新漏れが起き、管理が煩雑 — @afilini [X](https://x.com/afilini/status/2095134497616359897)

> サブエージェント群に master plan を任せた結果コードが大混乱になり、後で詳細レビューに追われた — @dom60808 [X](https://x.com/dom60808/status/2095225021455044660)

### プロンプト途中のスラッシュコマンド補完改善

**該当なし**

### --worktree 起動高速化

**該当なし**

### Artifact ツールの他者作成アーティファクト読み取り強化

#### Tips

> Claude Code 2.1.260 の更新内容として、Artifact のページを非信頼コンテンツとして扱う警告と trust boundary 強化 (ページ検査を expected content に一般化し、非信頼データ境界を緩めない) が明記されたシステムリマインダーを抜粋・共有 — @PiebaldAI [X](https://x.com/PiebaldAI/status/2095966578273812595)

### Claude apps gateway: OTLP テレメトリの直接エクスポート

#### Tips

> Claude Agent SDK / Claude Code で `CLAUDE_CODE_ENABLE_TELEMETRY=1` と `OTEL_EXPORTER_OTLP_ENDPOINT` を設定し、OTLP で Datadog / Grafana / Langfuse などへ直接エクスポートする方法を解説 — @cv_usk [X](https://x.com/cv_usk/status/2096515999281582365)

### Claude apps gateway: forceLoginGatewayUrl の挙動変更

**該当なし**

### VS Code 拡張: 非アクティブセッションの自動アーカイブ

今回追加された VS Code 拡張の設定そのものへの言及ではありませんが、セッションの自動アーカイブ全般について不満と運用 Tips が投稿されています。

#### ネガティブ

> 自動アーカイブが PR マージ後に勝手に発動し、作業中のセッションや worktree・ブランチまで削除された — @oks_ios [X](https://x.com/oks_ios/status/2096625867682111998)

> マージ後にセッションがアーカイブされ、他の作業まで失われた。体験として最悪 — @Seb28_7 [X](https://x.com/Seb28_7/status/2096572841898471875)

> Remote Control のセッションが勝手にアーカイブされてしまう。スマホからの再接続方法が欲しい — @lovelessx0911 [X](https://x.com/lovelessx0911/status/2095337646134600157)

#### Tips

> 同じプロジェクトで複数セッションができた場合、コミット済みの作業は AI に何も言わずアーカイブしてよい。引き継ぎメモは残る — @streamerfunch [X](https://x.com/streamerfunch/status/2096669137372377120)

> アーカイブ前に `/handoff` で引き継ぎを書いておくと、残す側のセッションが未コミット作業を確認してから閉じてくれる — @streamerfunch [X](https://x.com/streamerfunch/status/2096669137372377120)

### コミュニティ記事の動向 (Zenn / Qiita)

本日新着だった主な日本語記事です。コスト計測とセキュリティ設計の話題が目立ちます。

#### Tips

> 48時間・12,898ターン・40億トークンを集計したところ、77.5% が「過去の会話の読み直し」で、実際の出力は 9.3%。重複作業は 0〜1% で、効くのは「セッションを短く切る」ことだけだった — hitokraft [Zenn](https://zenn.dev/hitokraft/articles/claude-code-cost-is-conversation-length)

> Bash / hook / stdio MCP サーバーは Claude Code の子プロセスとして親の環境変数を継承する。認証情報を継承させない環境スクラブを実装して検証した — akihidem [Qiita](https://qiita.com/akihidem/items/8fba54e72f69fd1828a9)

> PR を8観点で並列レビューする仕組みでトークン枠が逼迫したため、軽い4観点をローカル LLM (Ollama) にオフロードし、コストを自作コマンドで可視化した — あたに [Zenn](https://zenn.dev/pepabo/articles/claude-ollama-hybrid-review-usage)

> Claude Code Action の API 接続先を差し替え、ロリポップ！AI ゲートウェイ経由で PR レビューを実行する設定手順 — yukyu [Zenn](https://zenn.dev/pepabo/articles/claude-code-action-lolipop-ai-gateway)

> VSCode で Shift+Enter が改行にならず送信されてしまう問題と、Ctrl+J が VSCode のショートカットに吸われる問題への対処 — sion_neko [Qiita](https://qiita.com/sion_neko/items/19dd86d357f3b545982d)

#### ネガティブ

> 2026年8月に発表された Claude 生成コンテンツの電子透かしについて、公式文書と自社の運用ログ (144本公開) を照合したが、確定できたのは「対象条件に一致すること」だけだった — Umamon [Zenn](https://zenn.dev/umamon/articles/claude-watermark-ai-blog-factory)

> 「Claude Code がコミットメッセージにセッションリンクを既定で付ける」という話が Hacker News で 135pt を集めたが、自社の実運用リポジトリ2本・計412コミットを grep したら該当は0本だった — Umamon [Zenn](https://zenn.dev/umamon/articles/claude-commit-session-url-310commits)

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.265 リリースノート](https://github.com/anthropics/claude-code/releases/tag/v2.1.265)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
