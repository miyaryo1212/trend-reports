---
title: "Claude Code v2.1.302とMythos 5の量子回路設計"
summary: "Claude Code v2.1.302でautoモード分類器のモデル指定やfork subagentの既定有効化が入り、スタンドアロンClaude Designの2026年12月14日終了も通知されました。Anthropicは、Claude Mythos 5による量子回路設計の研究やNIST曲線シードの由来解明も公表しています。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-10-17

features:
  - "[Anthropic Research] Claude Mythos 5による量子回路設計"
  - "[Anthropic Frontier Red Team] NIST曲線シードの由来解明"
  - "[Claude Code] v2.1.302"
  - "[Claude Code] /design-sync・/design-loginの通知"
  - "[Claude Tag] 管理設定の4タブ再編"
  - "[Anthropic Institute] AI期待値ギャップ調査"
  - "[Anthropic Institute] Anthropic社内の雇用変化レポート"
  - "[Claude Code] autoモードのサーバー側分類器改善"
  - "[Claude Code] [Cloud sessions] ルーティンの未開始理由バナー"
codex_review: "量子回路の既存記録更新とNISTシードの由来解明は、AIが研究者の道具から未解決問題を掘る主体へ移る兆しとして興味深い。ただ、単発の成果を能力の一般化と見るのは早く、日々のClaude Code改善との温度差も大きい。"
codex_importance: 4
---

## 公式アップデート

### [Anthropic Research] Claude Mythos 5による量子回路設計

8種の量子回路設計タスクで、既発表の最良設計を上回りました。楕円曲線の点加算に使う可逆モジュラー逆元計算では、53時間の1回の実行で設計を発見したとされています。

[ソース](https://www.anthropic.com/research)

### [Anthropic Frontier Red Team] NIST曲線シードの由来解明

Claudeが、NISTの楕円曲線(P-192〜P-521)のシードは、Unixタイムスタンプでシードした `lrand48` に由来すると特定しました。暗号が破られたわけではありません。

[ソース](https://www.anthropic.com/news)

### [Anthropic Institute] AI期待値ギャップ調査

Anthropic社員と米国成人約11,000人を比較した調査です。2030年までにノーベル賞級の発見が起こるという予想は、社員で91%、米国成人で39%でした。

[ソース](https://www.anthropic.com/news)

### [Anthropic Institute] Anthropic社内の雇用変化レポート

技術職採用に占める若手の割合は27%から9%に低下しました。AIエージェントの稼働時間は、従業員の6倍に達しています。

[ソース](https://www.anthropic.com/news)

### [Claude Code] v2.1.302

2026年10月16日公開。主な変更は次のとおりです。

- `CLAUDE_CODE_AUTO_MODE_MODEL` を追加。クライアント側autoモード分類器のモデルを選べる(サーバー側autoモードには影響しない)。
- `/config` に「Idle compaction」行を追加。アイドル時のコンパクト化をオフ/オンにでき、実行後の通知にオフにする方法も表示される。
- fork subagent(`subagent_type: "fork"`)を、`claude -p`、Agent SDK、デスクトップアプリ、VS Codeでも既定で有効化。`CLAUDE_CODE_FORK_SUBAGENT=0` でオフにできる。
- デスクトップアプリとVS Codeでは、メイン会話のサブエージェントを常にバックグラウンドで実行する。
- プロンプト/エージェントフックは、同一イベントで同時実行を最大12件に制限。
- 修正: コンパクト中にターンを止めた際の「Prompt is too long」、VertexやBedrockへ途中切替後の「diagnostics: Extra inputs are not permitted」。
- 修正: Readツールが画像を無制限にメモリへ読み込む問題(128MB超は拒否)。
- 修正: ToolSearchやコンパクト後の再読込でプロンプトキャッシュが外れる問題。
- 修正: プロトコル版2026-07-28のMCPサーバーが `resultType` などを省略した場合に、ツールが表示されない、または呼び出しが失敗する問題。
- 修正: 使用クレジット課金のモデルで、プロンプト提案がクレジットを消費する問題。
- 修正: gitのreftable形式でのプラグインマーケットプレイスの再clone、worktreeの作成拒否などの問題。
- Windows: exFAT/FAT32ドライブで全ファイル書き込みが拒否される問題を修正。
- 改善: プラグインを多数有効にした環境の起動時間。
- `claude -p` とAgent SDKは、権限モード未指定でサードパーティプロバイダ、テレメトリオフ、新規インストールの場合に `default` モードで開始(`--permission-mode auto` ならautoのまま)。
- [VSCode] 閉じていないコードブロックの表示、MCPサーバーのサインイン、`@browser` バナーの誤表示を修正。
- [Remote Control] オフライン時にサブエージェントのペインが回り続ける問題を修正。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.302)

### [Claude Code] /design-sync・/design-loginの通知

`/design-sync` と `/design-login` に、スタンドアロンのClaude Design(claude.ai/design)が2026年12月14日に終了するという通知が追加されました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.302)

### [Claude Code] autoモードのサーバー側分類器改善

安全性チェックには長すぎる会話をコンパクト化するようになりました。従来は、チェック対象のツール呼び出しがすべて拒否されていました。OpenTelemetryの `tool_decision` イベントでは、ほとんどのautoモード分類器ブロックで `classifier_category` が欠けていた問題も修正されています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.302)

### [Claude Code] [Cloud sessions] ルーティンの未開始理由バナー

ルーティンのページに、前回の実行が開始しなかった理由を示すバナーが追加されました(例: 組織の同時クラウドセッション上限)。あわせて、失敗したルーティン実行が完了や取消と表示される問題、途中失敗した定期実行が1時間以上後に最初から再実行される問題も修正されています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.302)

### [Claude Tag] 管理設定の4タブ再編

Claude Tag管理設定の、Claudeのアクセス管理が4タブ(Bundles / Connectors / Skills and plugins / Channels)に整理されました。組織設定のRolesページでは、Claude Tagのチャンネル管理者向けロールが、組織独自のロールの下の折りたたみセクションにまとめられています。リポジトリ検索は最大100のGitHubアカウントに対応しました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.302)

## コミュニティの反応

### [Anthropic Frontier Red Team] NIST曲線シードの由来解明

#### ポジティブ

> 「今週読んだ中で一番クールなAIの成果」と絶賛。AIの暗号分野への貢献を高く評価 — @matobamiki [出典](https://x.com/matobamiki/status/2111200430105731547)

> 半時間でNIST ECDSAシードを1997年のタイムスタンプに結びつけた点を「25年の謎解決」と称賛 — @0x0SojalSec [出典](https://x.com/0x0SojalSec/status/2111200317866172887)

> 暗号自体は破られていない点を整理して共有 — @Web3Panda [出典](https://x.com/Web3Panda/status/2111200907509575696)

> 「29年のバックドアパニックの終わり」と呼び、AIが未解明の暗号定数を2028年までに解明する可能性を予測 — @MarsCarsStars [出典](https://x.com/MarsCarsStars/status/2111200556219777445)

### [Claude Code] v2.1.302

#### ネガティブ

> 新CLI 2.1.302で、プランモードがバイパス権限モードと併用すると正しく動作しない。この1年は問題なかった — @MarvinFS [出典](https://x.com/MarvinFS/status/2111169418210275519)

### Zenn・Qiitaの関連記事

- [Claude Code に「緊急停止」と「危険コマンドのブロック」を足すプラグインを作った(標準ライブラリのみ)](https://zenn.dev/neuralalpha/articles/claude-code-guardrails-plugin-ja): フックで書き込み系ツール呼び出しを制御するプラグインの紹介
- [Claude Code のモデルだけをモックにして、料金なしで動かす](https://zenn.dev/tanashun/articles/claude-code-mock-api-testing): モデル部分を差し替え、hooksやMCPのテストに使う方法
- [Claude Code だけで、寝てる間に働く AI 部下を作った話](https://zenn.dev/persimmoq/articles/claude-code-routines-docs-watch-agent): クラウドのroutineで公式ドキュメントの差分を毎朝Slackに流す事例
- [スキーマを変えるとプロンプトキャッシュが共有されなかったので、Bedrock の構造化出力をやめた話](https://qiita.com/ntaka329/items/9ddba124de03b15166c4): 出力スキーマ変更時のキャッシュ非共有に関する体験談
- [【Claude認定資格】CCAR-F, CCAR-Pに合格!](https://qiita.com/shihopower/items/5a7f1ad48b5d75da3e72): 英語で不合格後、日本語で両方合格した体験記

### 反応が見られなかったトピック

- Mythos 5による量子回路設計、/design-sync・/design-loginの通知、Claude Tag管理設定の再編、AI期待値ギャップ調査、社内雇用変化レポート、autoモード分類器、ルーティンのバナー: 該当なし(個人ユーザーの体験・感想を含む投稿は見つかりませんでした)

## ソース

- [Claude Code v2.1.302](https://github.com/anthropics/claude-code/releases/tag/v2.1.302)
- [Anthropic Research](https://www.anthropic.com/research)
- [Anthropic News](https://www.anthropic.com/news)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
