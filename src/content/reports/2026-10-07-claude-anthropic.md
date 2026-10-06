---
title: "サイバー検証プログラム拡張とCC v2.1.292"
summary: "Anthropic が Cyber Verification Program を拡張し、Defense / Red Team / Specialized の3段階で、サイバー系ブロックを緩めたモデルを提供します。Claude Code は v2.1.290〜v2.1.292 を公開しました。サブエージェントの effort 指定、WebSearch 予算の時間回復制、権限まわりのセキュリティ修正が入っています。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-10-07

features:
  - "Anthropic Cyber Verification Program 拡張"
  - "Claude Code v2.1.292 Agent tool の effort パラメータ"
  - "Claude Code v2.1.292 権限・サンドボックスのセキュリティ修正"
  - "Claude Code v2.1.290 /claude-api managed-agents-onboard"
  - "Claude Code v2.1.290 WebSearch 予算の時間回復制"
  - "Claude Code v2.1.292 claude plugin install --marketplace"
  - "Claude Code v2.1.292 stdio MCP のプロトコル 2026-07-28 既定化"
  - "Claude Code v2.1.290 claude attach / claude logs のセッション名指定"
  - "Claude Tag Slack 連携の改善"
  - "Claude Code Code Review 分析の拡充"
codex_review: "安全審査を段階化して高能力モデルを防御側へ開くのは、能力を一律に封じる流れへの現実的な対案として興味深い。ただし脆弱性件数の大きさは検証条件が見えにくく、製品更新の細かな修正群まで含めると話題の重心はやや散漫に感じる。"
codex_importance: 4
---

## 公式アップデート

### Anthropic Cyber Verification Program 拡張

Anthropic が Cyber Verification Program (CVP) を拡張しました。審査を通ったセキュリティ専門家に、高度なサイバー能力を持ち、ブロック用分類器を緩めたモデルを提供するプログラムです。アクセスは次の3段階です。どの段階でも Claude Opus 5.5、Claude Sonnet 5.5、Claude Mythos 5.1 と、今後出るモデルを使えます。

- **Defense Access**: 防御目的のサイバー作業向け。一般提供モデルは、ほとんどのサイバー作業をブロックする保守的な安全策を持っており、それを緩めたアクセスを提供します
- **Red Team Access**: 防御用途に加えて、認可されたペネトレーションテストとレッドチーミングができます。対象は社内レッドチーム、政府のレッドチーム、セキュリティ・ペンテスト企業です。攻撃的なテストは、テストを認可されたシステムに限られます
- **Specialized Access**: ブロックが最も少ない段階で、限られた検証済み組織だけが対象です。航空機の運航システム、電力網、通信網、銀行間送金基盤、政府の行政ネットワークなど、人命や市場に影響しうる安全系システムのテストを認められた組織向けです

Anthropic によると、Project Glasswing のパートナーは Claude Mythos モデルを使い、2026年4月〜7月に少なくとも 129,000 件の検証済みソフトウェア脆弱性を見つけました。

[ソース](https://www.anthropic.com/news/cyber-verification-program)

### Claude Code v2.1.292 Agent tool の effort パラメータ

Agent tool に `effort` パラメータが追加されました。サブエージェントを、指定した effort レベルで動かせます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.292)

### Claude Code v2.1.292 権限・サンドボックスのセキュリティ修正

v2.1.292 では、権限まわりの以下の問題が修正されました。

- Security: ネットワーク (UNC) パスからのファイル読み取りで、PreToolUse フックの承認と auto mode が権限プロンプトを迂回していた問題
- サンドボックス内のコマンドが、`~/.claude/seed-admin` に置かれた `/ultrareview` アップロード用のファイルのコピーを読めた問題
- 管理対象のサンドボックス read-deny パスがセッション中に現れたり指し先を変えたりしても、その中のプロジェクト権限が外れず、そのパス内のファイルからの認証情報の注入も止まらなかった問題
- macOS / Windows で notebook や PDF を読む途中にリンクを差し替えられると、承認範囲外のファイルが返りうる問題
- サーバー管理設定の取得に失敗している間、改ざんされたディスク上のキャッシュによって、組み込みポリシープラグインを無効化・差し替えできた問題
- Windows でホームフォルダやドライブを 8.3 短縮名などの別表記で `rm -rf` したとき、それらの削除として扱われなかった問題
- auto mode / plan mode を途中で抜けると、スキルやスラッシュコマンドの `allowed-tools` ルールが後のターンで復活していた問題
- プラグインの `tool.check` フックが allow を返すと、ユーザーの回答が必要なツール (質問、プランの承認) がダイアログなしで実行されていた問題

また、フックの出力に書かれた `<system-reminder>` タグは、Claude に渡る前にエスケープされるようになりました。

前日の v2.1.290 でも、PreToolUse フックが入力を書き換えたツール呼び出しに一部の権限ルールが適用されない問題や、`rg` や `git grep` など一部の読み取り専用コマンドの自動承認の問題が修正されています。

[ソース (v2.1.292)](https://github.com/anthropics/claude-code/releases/tag/v2.1.292) / [ソース (v2.1.290)](https://github.com/anthropics/claude-code/releases/tag/v2.1.290)

### Claude Code v2.1.290 /claude-api managed-agents-onboard

`/claude-api managed-agents-onboard` が追加されました。

- `/claude-api managed-agents-onboard <url>`: ページで説明されている Managed Agents の構成を `ant apply` 用のファイルとして生成します
- `/claude-api managed-agents-onboard <quickstart-name>`: `deep-researcher` などの Console クイックスタートのテンプレートを `ant` CLI で組み立てます

あわせて `claude-api` スキルの Managed Agents の例が変わりました。必要なとき以外は Web ツールをオフにし、権限ポリシーには `auto` を使います。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.290)

### Claude Code v2.1.290 WebSearch 予算の時間回復制

対話セッションの WebSearch の上限が変わりました。これまでは200回で打ち切りでしたが、毎時100回ずつ回復する方式になります。回復のペースは `CLAUDE_CODE_WEB_SEARCH_REFILLS_PER_HOUR` で変えられ、0 にすると回復は止まります。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.290)

### Claude Code v2.1.292 claude plugin install --marketplace

`claude plugin install` に `--marketplace <source>` が追加されました。必要ならマーケットプレイスを追加し、そこからプラグインをインストールするまでを1コマンドで行います。マーケットプレイスの追加は、`claude plugin marketplace add` と同じポリシーチェックを通ります。

あわせて、初回実行時に組織の管理設定が読み込まれる前に `marketplace add` や `install` などの `claude plugin` コマンドが動いていた問題も修正されました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.292)

### Claude Code v2.1.292 stdio MCP のプロトコル 2026-07-28 既定化

ローカル (stdio) MCP サーバーとの接続で、プロトコルバージョン 2026-07-28 をネゴシエートするのが既定になりました。Bedrock、Vertex、Foundry を含むすべての環境が対象です。`MCP_PROTOCOL_NEGOTIATION=legacy` を設定すると従来の方式に戻せます。

新しいプロトコルの確認に応じない stdio MCP サーバーは、一度接続が遅れると7日間記憶されます。その間は待たずに旧方式で接続します。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.292)

### Claude Code v2.1.290 claude attach / claude logs のセッション名指定

`claude attach <name>` と `claude logs <name>` で、ID の代わりにセッション名の一部を指定できるようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.290)

### Claude Tag Slack 連携の改善

v2.1.292 に、Claude Tag (Slack 連携) の以下の変更が入りました。

- チャンネルの Configure ページにある Allowed domains カードに Edit ボタンを追加。Enterprise の管理者が、チャンネルのドメインを決めるアクセスバンドルを開けます
- `!fork` で続けた Slack スレッドの最初のメッセージを、元スレッドへのリンク、依頼内容、依頼者を示すカードに変更
- チャンネルで `@Claude !status` を送ると、Claude がタグなしメッセージの読み取りを止めているかどうかと、その理由、@メンションで再開できることを示すように改善
- 管理設定の spend limits ページで、組織全体とデフォルトの上限欄は、Save か Enter を押したときだけ保存されるように変更
- Claude が最初のリクエストを処理している間にスレッドへ送った返信が、保留されたり取りこぼされたりしていた問題を修正
- 組織の使用クレジットが尽きたことが原因なのに、spend limit の通知を出すことがあった問題を修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.292)

### Claude Code Code Review 分析の拡充

Code Review 分析の「PRs reviewed」チャートに、期間の合計、前の期間からの増減、リポジトリ別の内訳が追加されました。

あわせて、次の2点が修正されました。

- PR が新しいベースブランチに移り、元のブランチが削除されると、キュー済みのレビューが失敗していた問題。該当コミットはレビューのキューに入れ直されます
- PR が CLAUDE.md 自体を編集していると、レビューがそのルールを無視していた問題。今後はベースブランチ側の CLAUDE.md が使われます

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.292)

## コミュニティの反応

### Anthropic Cyber Verification Program 拡張

X 上で該当する個人投稿はありませんでした。

### Claude Code v2.1.292 Agent tool の effort パラメータ

#### ポジティブ

> サブエージェントを含む Claude Code の新機能 (effort など) を紹介する動画をシェアし、エージェントをチームのように動かせる点を高く評価 (好意的)。 — @kirillk_web3 [出典](https://x.com/kirillk_web3/status/2107564550963028235)

#### ネガティブ

> Claude Opus の effort を max / xhigh に上げたところ、thinking に時間を使いすぎて出力が返らず、かえって結果が悪くなったという報告 (批判的)。 — @saiitoshii [出典](https://x.com/saiitoshii/status/2107553607772250332)

#### Tips

> Claude Code で結果が物足りないときに、モデルを Opus に変えるか、Sonnet の effort を上げるかを整理した記事。日常の実装は Sonnet 5.5 の Medium から始め、判断の難しい仕事は Opus 5.5 に回す、という目安と、モデル変更と effort 変更を分けて考えるためのチェック表を載せている (中立・実践的)。 — Clopy「[Claude Codeのモデル選び最新版：Sonnet 5.5・Opus 5.5・Haiku・Fableの使い分け](https://zenn.dev/clopy/articles/claude-code-model-guide-202610)」

### Claude Code v2.1.292 権限・サンドボックスのセキュリティ修正

X 上で該当する個人投稿はありませんでした。

### Claude Code v2.1.290 /claude-api managed-agents-onboard

X 上で該当する個人投稿はありませんでした。

### Claude Code v2.1.290 WebSearch 予算の時間回復制

X 上で該当する個人投稿はありませんでした。

### Claude Code v2.1.292 claude plugin install --marketplace

#### Tips

> Claude Code の Mods (プラグイン) を入れる前に、CLAUDE.md でコンテキストをはっきりさせておくべきだという実践的なアドバイス (中立)。 — @BakaleAtharva [出典](https://x.com/BakaleAtharva/status/2107561531298685355)

> Anthropic の公式マーケットプレイスにあるプラグインのうち、Anthropic 自身が開発した 39 個を用途別に整理した記事。スキルとの違い、メリットとデメリット、インストール方法も紹介している (中立)。 — ふるた「[[Claude Code] Anthropic製の公式プラグイン全 39 個を用途別に紹介する](https://zenn.dev/aew2sbee/articles/claude-code-official-plugins)」

### Claude Code v2.1.292 stdio MCP のプロトコル 2026-07-28 既定化

該当なし

### Claude Code v2.1.290 claude attach / claude logs のセッション名指定

該当なし

### Claude Tag Slack 連携の改善

該当なし

### Claude Code Code Review 分析の拡充

該当なし

## ソース

- [Expanding the Cyber Verification Program - Anthropic](https://www.anthropic.com/news/cyber-verification-program)
- [Claude Code v2.1.292 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.292)
- [Claude Code v2.1.291 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.291)
- [Claude Code v2.1.290 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.290)
- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
