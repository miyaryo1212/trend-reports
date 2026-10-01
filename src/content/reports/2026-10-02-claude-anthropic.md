---
title: "Claude Mods 登場、1M コンテキストが既定化"
summary: "Claude Code v2.1.287 が公開。プラグインがより深い挙動を変更できる Claude Mods と、見落としを監視する組み込み mod「You should know」が追加されました。Opus 4.7+ と Fable は Bedrock・Vertex・Foundry・Claude apps gateway で1M コンテキストが既定に変更。危険な rm のガード修復やシンボリックリンク経由の書き込み確認など、安全側の修正も入っています。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-10-02

features:
  - "Claude Code v2.1.287"
  - "Claude Mods"
  - "You should know (組み込み mod)"
  - "1M コンテキストの既定化"
  - "MCP alwaysLoad: false の挙動変更"
  - "危険な rm のガード修復"
  - "シンボリックリンク経由の書き込み確認"
  - "agents ビューの n: フィルタ"
  - "MCP サーバーからの URL プロンプト"
  - "OpenTelemetry user_prompt への prompt_text 追加"
  - "セルフホストランナーの組み込み gh api"
  - "/advisor のペアリング修正"
  - "claude agents の返信をキュー投入に変更"
  - "Run in background (VS Code)"
  - "Claude-Shaped Science / BootLoops (Anthropic Research)"
  - "Barclays の Claude 拡大導入"
codex_review: "Claude Modsは拡張性を広げる一方、プラグインが挙動を深く変えるほど信頼境界の設計が問われる。1M既定化も派手だが、実利用の費用や遅延が見えない段階では、開発者体験を変える本命は安全修正とバックグラウンド実行だと思う。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.287

2026-10-01 公開。プラグインの拡張機構が一段深くなり、既定のコンテキスト長が変わる、比較的影響の大きいリリースです。

- **Claude Mods** を追加。プラグインが Claude Code のより深い挙動を変更できる新しい拡張機構。
- **You should know** を追加。脇に立つサイドエージェントが、ユーザーや Claude が見落としていそうな点を監視して指摘する組み込み mod。`/plugin enable cc-plugin-you-should-know@builtin` で有効化する (テレメトリを有効にしたファーストパーティのセッション向け)。
- **1M コンテキストの既定化**。Opus 4.7+ と Fable が Bedrock・Vertex・Foundry・Claude apps gateway で既定1M コンテキストになり、`[1m]` 接尾辞は付かなくなった。`CLAUDE_CODE_DISABLE_1M_CONTEXT=1` で従来の200K を維持できる。
- **MCP `alwaysLoad: false` の挙動変更**。該当サーバーのすべてのツールを、ツール検索の背後に遅延ロードするようになった。
- **危険な rm のガード修復**。`/` やホームディレクトリを対象とする `rm` が、同じコマンドで `~` やワイルドカードを含むパスへ出力をリダイレクトしていると常時確認の安全装置を失っていた問題を修正。
- **シンボリックリンク経由の書き込み確認**。リポジトリにコミットされたシンボリックリンク越しに機微ファイルや作業ツリー外へ書き込むシェル操作を、着地先を明示したうえで人の確認に回すよう変更。`~` を対象とする行も含む。
- **agents ビューの `n:<text>` フィルタ**を追加。セッション名とタスクに一致し、折りたたまれたセクション内の一致も表示され、Enter で先頭の一致を開く。
- **MCP サーバーからの URL プロンプト**に対応。2025-11-25 プロトコルのサーバーが、サインインなどの URL を提示できる。更新後に接続できなくなったサーバーには、MCP 設定エントリに `"bareElicitationCapability": true` を追加する。
- **OpenTelemetry `user_prompt` への `prompt_text` 追加**。ドット付きキーをネストするバックエンド向けの `prompt` の複製。`prompt` を破棄・マスクしている箇所では `prompt_text` も同様に扱う必要がある。
- **セルフホストランナーの組み込み `gh api`**。Anthropic 管理の git を使うセッションで、GitHub CLI が未インストールの macOS/Linux マシンでも REST のみ利用できる。
- **`/advisor` のペアリング修正**。Sonnet 5.5 が Opus 4.7 と 4.8 に助言できるようになり、API が拒否する組み合わせは黙って落とされる代わりに事前に警告される。
- **`claude agents` の返信をキュー投入に変更**。`/stop` 以外のスラッシュコマンドを実行中ターンの最中に送った場合、ターン終了後に実行される。
- **[VS Code] Run in background** を追加。実行中のコマンドやサブエージェントをバックグラウンドへ移して作業を続けられる。バックグラウンドシェルと Monitor の出力が、エージェントマップのカードに表示されるようになった。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.287)

### Claude-Shaped Science / BootLoops (Anthropic Research)

Schwartz 教授が3か月で18分野36本の原稿を作成したという、エージェント活用ハーネスの研究報告が公開されています。

[ソース](https://www.anthropic.com/research)

### Barclays の Claude 拡大導入

16,000人が利用し、Global Markets では日次約12万件のメールを処理。2026年末までに開発者の50%が Claude Code を利用することを目標に掲げているとされています。

[ソース](https://www.anthropic.com/customers)

## コミュニティの反応

### Claude Code v2.1.287

#### ポジティブ

> Claude Code のペット mod を作った。導入用の `/plugin` コマンドもそのまま共有している。 — @klyap_ [出典](https://x.com/klyap_/status/2105763239888044292)

#### Tips

> 2.1.287 でプラグインの eval フォーマットが変わった。カナリアで当日中に全ての破損を検知でき、config-drift-checker v1.2.1 で対応済み。 — @santhosh_patell [出典](https://x.com/santhosh_patell/status/2105761963678777347)

### Claude Mods

#### ポジティブ

> Claude Code を daily driver として使っており、社内ツールを Claude Mods で統合して Codex 呼び出しを実現できたのが便利だった。今後動画でも紹介予定。 — @alex2481kobe [出典](https://x.com/alex2481kobe/status/2105750757421314154)

#### Tips

> Claude Code Mods で tool イベントをラップし、元の結果を保ったままカスタムのステータスメッセージを追加する方法を、ローカルのシミュレーションで解説。 — @codeglitch [出典](https://x.com/codeglitch/status/2105748931338752313)

### You should know (組み込み mod)

該当なし

### 1M コンテキストの既定化

#### 日本語コミュニティ

既定の1M 化とは別に、モデルを切り替えただけでは1M が付いてこないケースを実測した記事が出ています。

- [Fable 5.1で1Mが200Kのまま動く落とし穴とClaude Codeのキャッシュ40倍差](https://zenn.dev/ainewsdaily/articles/20260921_claude_code_t1) (Zenn / AIニュース) — v2.1.257〜v2.1.275 の変更まとめ。既定モデルが Fable 5.1 になっても、切り替えるだけでは1M コンテキストが付いてこないことがある点を扱っている

- [Claude Code の使用量はどう数えられているのか ── Max 20x で実測した重みは API 料金表と違った](https://zenn.dev/tksfjt1024/articles/25c0ab111c277c) (Zenn / tksfjt1024) — 5時間枠と週間枠の消費を条件を揃えて実測し、cache read の重みが input の1/40 であることなどを計算式として整理したもの。コンテキスト長が枠の消費に関わるため関連する

### MCP alwaysLoad: false の挙動変更

該当なし

### 危険な rm のガード修復

該当なし

### シンボリックリンク経由の書き込み確認

該当なし

### agents ビューの n: フィルタ

該当なし

### MCP サーバーからの URL プロンプト

該当なし

### OpenTelemetry user_prompt への prompt_text 追加

該当なし

### セルフホストランナーの組み込み gh api

該当なし

### /advisor のペアリング修正

該当なし

### claude agents の返信をキュー投入に変更

該当なし

### Run in background (VS Code)

該当なし

### Claude-Shaped Science / BootLoops (Anthropic Research)

該当なし

### Barclays の Claude 拡大導入

該当なし

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.287](https://github.com/anthropics/claude-code/releases/tag/v2.1.287)
- [Anthropic Research](https://www.anthropic.com/research)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
