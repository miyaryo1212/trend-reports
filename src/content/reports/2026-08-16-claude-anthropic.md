---
title: "v2.1.233でTodoツールが既定廃止に"
summary: "Claude Code v2.1.233 が公開され、新しめのモデルでTodo/タスク追跡ツールが既定で提供されなくなりました。GitLab MR URL対応、Linux向けメモリcgroup、NTLM資格情報漏洩につながるWindowsのパス検証バイパス修正も含まれます。2.1.232で入ったBash権限変更は一部リバートされました。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-08-16

features:
  - "Claude Code v2.1.233"
  - "`--worktree` / `claude agents` のGitLab MR URL対応"
  - "`forward_user_identity` apps gatewayセッティング"
  - "`CLAUDE_CODE_TOOL_MEMORY_LIMIT`"
  - "`CLAUDE_CODE_WEBFETCH_CACHE_TTL_MS`"
  - "Todo/タスク追跡ツールの既定無効化"
  - "Windows NTデバイスプレフィックスのUNCパス検証バイパス修正"
  - "`claude self-hosted-runner` のセッション開始高速化"
  - "printモードの診断強化"
  - "スクリーンリーダーモード改善"
  - "2.1.232のBash権限変更のリバート"
  - "マルチエージェントシステムの failure mode 研究"
codex_review: "Todo既定廃止は『モデルが賢くなった』以上に、エージェントUXの再設計を示す動きとして面白い。派手さは薄いが、メモリ制限やWindows修正のような足回り改善の方が実運用では効く、という現実もよく出ている。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.233 (2026-08-14)

[Claude Code Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.233)

#### Todo/タスク追跡ツールの既定無効化

Opus 4.8 / Sonnet 5 / Fable 5 / Mythos 5 およびそれ以降のモデルでは、TaskCreate / TaskGet / TaskUpdate / TaskList と TodoWrite が提供されなくなりました。`CLAUDE_CODE_ENABLE_TODO_TOOLS=1` を設定すると従来どおり利用できます。

#### `--worktree` / `claude agents` のGitLab MR URL対応

`--worktree` フラグと `claude agents` ビューが GitLab のマージリクエスト URL に対応しました。`claude agents` 上では MR が `!N` 形式で表示されます。

#### `forward_user_identity` apps gatewayセッティング

Anthropic upstream 向けに、サインイン中のユーザー ID をヘッダーとして送出するオプトイン設定が追加されました。ゲートウェイの背後にあるプロキシが、ユーザー単位で利用額を按分できるようになります。

#### `CLAUDE_CODE_TOOL_MEMORY_LIMIT`

Linux 上の Bash ツール実行に対して、オプトインでメモリ cgroup を適用できるようになりました。暴走したビルドがセッション全体を止めてしまうことを防ぐ目的です。

#### `CLAUDE_CODE_WEBFETCH_CACHE_TTL_MS`

WebFetch のセッション内 URL キャッシュ TTL を環境変数で設定できるようになりました。既定値の 15 分は変更されていません。

#### Windows NTデバイスプレフィックスのUNCパス検証バイパス修正

Windows の NT デバイスプレフィックス (`\??\`) を用いた綴りのパスが UNC パス検証を回避できていた問題が修正されました。NTLM 資格情報の漏洩経路が塞がれています。

#### `claude self-hosted-runner` のセッション開始高速化

セッションブランチが作業ツリーを書き換えずに作成されるようになり、さらにサーバーへの往復 2 回がエージェント起動をブロックしなくなりました。

#### printモードの診断強化

Claude Code が認識できないモデル ID へリクエストが送られた際に、`[claude-code:unrecognized_model]` の行が stderr に出力されるようになりました。`modelOverrides` でマッピングすると抑制できます。

#### スクリーンリーダーモード改善

`/effort` セレクタが番号付きリストと番号入力方式で描画されるようになり、ヒントやダイアログのテキストが切れる問題も解消されました。

#### 2.1.232のBash権限変更のリバート

Windows で通常の `cd <dir> && <command> > file` 形式の Bash コマンドが繰り返し手動承認を求めていたリグレッション (2.1.232 で発生) が修正されました。あわせて、2.1.232 で入った Windows の Cygwin 形式シンボリックリンクおよび入力リダイレクト (`< file`) に関する Bash 権限変更が差し戻されています。より範囲を絞ったバージョンが後のリリースで再投入される予定です。

### マルチエージェントシステムの failure mode 研究 (2026-08-13)

Frontier Red Team が、マルチエージェントシステムにおける失敗モードを 4 類型 (協調の失敗、同調性 (low variance)、情報源への懐疑心の欠如、目標衝突時のエスカレーション) として報告しました。

[Anthropic Research](https://www.anthropic.com/research)

## コミュニティの反応

### `CLAUDE_CODE_TOOL_MEMORY_LIMIT`

#### ポジティブ

> 2.1.233 で opt-in の memory cgroup が追加され、エージェントが起動したビルドにメモリ上限・タイムアウト・終了理由の取得・ログ保持を設定できるようになった。自律性をスケールさせる前にプロセスを縛れるのが便利 — @ashutosh_270497 [出典](https://x.com/ashutosh_270497/status/2088495903728673258)

> 同じコードベースで複数の Claude Code インスタンスを並行して動かしていると、1 回の暴走 Bash 呼び出しでセッション全体が落ちる問題があった。memory cgroup フラグで opt-in で防げるようになり嬉しい — @Chad_Justice_AI [出典](https://x.com/Chad_Justice_AI/status/2088400082508861549)

> Linux で Bash ツールごとにカスタムメモリ制限を設定できるようになり、idle セッションの CPU 占有バグも修正された。複数セッションを同時に扱う際に便利 — @Bell_QuoLu [出典](https://x.com/Bell_QuoLu/status/2088536253516169366)

### 2.1.232のBash権限変更のリバート

#### ネガティブ

> 2.1.232 の Windows / Git Bash における Bash 権限変更で常時プロンプトが発生し、agentic な作業が実用的でない。false positive も多く、Cygwin symlink・入力リダイレクト関連の厳格化が原因 — @The_Kid_Icarus [出典](https://x.com/The_Kid_Icarus/status/2088157371591733492)

> 2.1.232 以降の複数バージョンで bypassPermissions が無効化されるバグが発生しており、以前のバージョン (2.1.227) に戻せない — @TheDavidTai [出典](https://x.com/TheDavidTai/status/2087674375260508528)

> 2.1.232 で nested repo や Bash の入力リダイレクト (`< file`) の権限チェックが強化され、sandbox override が必要になるケースが増えた — @ashutosh_270497 [出典](https://x.com/ashutosh_270497/status/2088133515791773809)

### Todo/タスク追跡ツールの既定無効化

#### ポジティブ

> モデルが賢くなったのでチェックリストは不要になり、コンテキストの節約にもなる。むしろオフのまま運用する方が良いと感じている — @MarMarLabs [出典](https://x.com/MarMarLabs/status/2088632052505624807)

#### ネガティブ

> 新しいモデルで Todo / タスクツールが既定オフになったことで、いずれ完全に使えなくなるのではと懸念している — @kojo_73 [出典](https://x.com/kojo_73/status/2088494360644264292)

### `--worktree` / `claude agents` のGitLab MR URL対応

#### ポジティブ

> 2.1.233 で `--worktree` が GitLab MR URL に対応し、`claude agents` 上で `!N` 形式で表示されるようになった。MR を隔離された worktree で開いて diff 確認やチェック実行ができ、メインの作業領域を汚さずにレビューできる流れが実践的で便利 — @ashutosh_270497 [出典](https://x.com/ashutosh_270497/status/2088620474591056051)

### その他の項目

`forward_user_identity`、`CLAUDE_CODE_WEBFETCH_CACHE_TTL_MS`、Windows NT デバイスプレフィックスの UNC パス検証バイパス修正、`claude self-hosted-runner` のセッション開始高速化、print モードの診断強化、スクリーンリーダーモード改善、およびマルチエージェントシステムの failure mode 研究については、直近 1 週間の X 投稿を検索しましたが、個人ユーザーによる実体験・感想の投稿は該当なしでした。changelog の転載・要約に留まる投稿は複数見られたものの、実使用に基づく反応は確認できていません。

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Anthropic Research](https://www.anthropic.com/research)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
