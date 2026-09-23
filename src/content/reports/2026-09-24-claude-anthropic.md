---
title: "v2.1.281 大型修正とAnthropic自社ラボ設立"
summary: "Claude Code v2.1.281 が100項目超の追加・修正を伴ってリリース。危険な rm の保護強化、auto モードのサーバー側レビュー拡大、プロンプトキャッシュ/セッション再開の大規模修正が中心です。同日 Anthropic は Bay Area に自社の生命科学ラボを設立し、Claude が約950エージェント・21時間で新規酵素システム ART を特定したと発表しました。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-24

features:
  - "Claude Code v2.1.281 リリース"
  - "settings.json の `\"attribution\": false`"
  - "コマンド置換 rm の保護"
  - "危険な rm プロンプトの2分タイムアウト"
  - "auto モードのサーバー側レビュー拡大"
  - "`CLAUDE_CODE_AUTO_MODE_SERVER` の直接API対応"
  - "send now の挙動変更"
  - "セルフホストランナーの system prompt ファイル化"
  - "Claude apps gateway の Bedrock `assume_role`"
  - "Claude apps gateway の Bedrock `guardrail`"
  - "MCP URL-mode elicitation"
  - "`/insights` の auto モード推奨"
  - "プロンプトキャッシュ・セッション再開の大規模修正"
  - "起動・再開の高速化"
  - "クラウドセッションの Fast mode スイッチ"
  - "`/artifacts` フッターピル"
  - "Anthropic 生命科学研究チーム・自社ラボ設立"
  - "新規酵素システム ART の発見"
---

## 公式アップデート

### Claude Code v2.1.281 リリース

9月23日、**v2.1.281** が公開されました。追加・修正・改善が100項目を超える大型リリースで、比重は「安全側の挙動」「プロンプトキャッシュとセッション再開」「プロキシ/ゲートウェイ越しのストリーム処理」に置かれています。以下、主な変更を分類して記載します。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### settings.json の `"attribution": false`

`settings.json` に `"attribution": false` を追加すると、コミットと PR の帰属表示をすべて非表示にできます。ただし**古い CLI はこのキーを持つ設定ファイル自体をスキップする**ため、バージョンをまたいで共有する設定ファイルではオブジェクト形式を維持する必要があります。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### コマンド置換 rm の保護

`rm -rf "$(pwd)"` のように**削除対象がコマンド置換の出力だけ**である再帰削除が、auto モードおよび `--dangerously-skip-permissions` で無確認実行されていた問題を修正。Bash の allow ルールがあっても確認を求めるようになり、`CLAUDE_CODE_DISABLE_SUBSTITUTION_RM_PROMPT=1` で従来動作に戻せます。

あわせて危険な `rm` の検知も拡張され、シェル変数の直後にトップレベルのディレクトリ名が続く形、作業ディレクトリから導出された変数、バックスラッシュのみの対象もフラグされます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### 危険な rm プロンプトの2分タイムアウト

`--dangerously-skip-permissions` と auto モードでの危険な `rm` 確認プロンプトが、**2分間応答を待ったうえで書き換えヒント付きで拒否**する挙動に変更されました。無人セッションが確認待ちで停止しないための変更です。`CLAUDE_CODE_DISABLE_DANGEROUS_RM_TIMEOUT=1` で無効化できます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### auto モードのサーバー側レビュー拡大

分類器レビューがサーバー側で動作する構成において、**読み取り専用およびサンドボックス実行のシェルコマンドもレビュー待ちの対象**となり、フラグされた場合はブロックされるようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### `CLAUDE_CODE_AUTO_MODE_SERVER` の直接API対応

`CLAUDE_CODE_AUTO_MODE_SERVER` が Anthropic API への直接接続でも有効になりました。`0` でサーバー側 auto モード分類器をオプトアウト (この場合ローカル分類器の消費が使用量に計上されます)、`1` でオプトイン。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### send now の挙動変更

send now (`ctrl+enter` または `ctrl+x ctrl+s`) が、実行中のツールを**キャンセルせずバックグラウンドへ移動**するよう変更されました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### セルフホストランナーの system prompt ファイル化

セルフホストランナーが system prompt を**コマンドライン引数ではなくプライベートファイル経由**で Claude Code に渡すよう変更されました。大きなプロンプトで起動が失敗する問題への対処ですが、`--system-prompt` / `--append-system-prompt` を付加するラッパーや `command` フックは `--system-prompt-file` / `--append-system-prompt-file` へ移行する必要があります (破壊的変更)。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### Claude apps gateway の Bedrock `assume_role`

Claude apps gateway の Bedrock upstream に `assume_role` が追加され、ゲートウェイが **STS 経由で引き受けた IAM ロールとして Bedrock を呼び出す**構成が可能になりました。必要に応じて別の AWS アカウント、また開発者ごとに1セッションという運用も選べます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### Claude apps gateway の Bedrock `guardrail`

同 upstream に `guardrail: {id, version}` が追加され、そこを通る**全リクエストに Amazon Bedrock guardrail を適用**できます。設定は「すべての Bedrock upstream に付ける」か「まったく付けない」のいずれかです。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### MCP URL-mode elicitation

2026-07-28 プロトコルの接続で MCP URL-mode elicitation に対応。MCP サーバーがブラウザベースのフローを Claude Code に開かせられるようになりました。サーバー側に完了を確認する手段がない場合、待機ダイアログが画面に残らないよう扱われます。

あわせて `claude plugin validate` に MCP サーバーの検査が追加され、読み込み時に暗黙的に破棄される `.mcp.json` エントリ、未宣言の `${user_config.*}` 参照、安全でない URL を報告します。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### `/insights` の auto モード推奨

`/insights` に auto モードの推奨表示が追加され、**直近のセッションで auto モードが処理できたはずの権限プロンプト数**を推定して示します。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### プロンプトキャッシュ・セッション再開の大規模修正

このリリースで最も項目数が多い領域です。主なものは以下の通り。

- resume 時に過去のターンが**異形で再送**され (並列ツール呼び出しターン、再接続中の MCP ツール入力・tool-search 結果、中断された loading ターンの tool-search 結果)、API が会話の推論を破棄しうる問題を修正
- 非常に大きなセッションの resume が**直近数メッセージしか復元しない**ことがある問題を修正
- 保留中の権限プロンプト中に再起動したセッションの resume が異なる履歴を送り、その時点からプロンプトキャッシュが壊れる問題を修正
- ツール呼び出し中に終了したセッションの resume で、Claude がその呼び出しを認識し結果不明と伝えられるように。手動 resume で隠れた "Continue" メッセージが追加されなくなりました
- tool search がオフの状態 (プロキシ/ゲートウェイ背後など) で MCP サーバーが会話中に切断、または resume 後も接続中であるときにプロンプトキャッシュが失われる問題を修正
- プロキシ/ゲートウェイがストリームを正常終了で閉じた際に、**打ち切られた応答が完了として表示**され、重複ストリームイベントでツール呼び出しが2回走る問題を修正
- プロキシがストリームイベントを落とした際の "Content block not found" 失敗を修正。部分応答は保持され、web search は到着済みの結果を維持します
- `CLAUDE_CODE_RETRY_WATCHDOG` セッションが 429/529 待機後の最初の 5xx・接続切断で失敗する問題、および 5xx の長い `Retry-After` で無上限かつ無言にスリープする問題を修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### 起動・再開の高速化

- MCP サーバー・プラグイン未設定時に、managed-settings のネットワークリクエスト (約80ms、ネットワーク到達不可時は17秒以上) を対話起動が待たなくなりました
- git 読み込み、起動テレメトリ、Bedrock/Vertex のモデルアップグレードチェックが**初回フレーム描画前に走らなくなりました**
- 多数のファイルを読んだ長いセッションの resume が高速化。復元されるファイルキャッシュが読み込み当時の内容と一致するようになりました
- compact 済みの非常に長いセッションの resume が高速化 (特に Agent SDK と Claude Desktop 経由)

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### クラウドセッションの Fast mode スイッチ

[Claude Code on the web] クラウドセッションの composer のモデルメニューに **Fast mode スイッチ**が追加されました。プランに fast mode が含まれ、選択中のモデルが対応している場合に表示されます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### `/artifacts` フッターピル

プロンプト下のセッションアーティファクトリンクが、`/artifacts` を開く**1つのフッターピル** (`⧉ name` または `⧉ N`) に集約されました。`/artifacts` はそのセッションのアーティファクトを先頭に表示します。あわせて Artifact ツールが、アーティファクトページ内で unpkg.com からスクリプトを読み込めるようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### Anthropic 生命科学研究チーム・自社ラボ設立

9月23日、Anthropic が**生命科学研究チームと自社ラボの設立**を発表しました。Bay Area の BSL 1-2 ラボで、Claude を使った基礎生物学研究を行うとしています。

[ソース](https://www.anthropic.com/news)

### 新規酵素システム ART の発見

上記ラボでの最初の成果として、Claude が約 **950エージェント・21時間・2億トークン**を費やし、20万件の逆転写酵素から **array-associated reverse transcriptases (ART)** を特定したと報告されました。

[ソース](https://www.anthropic.com/news)

## コミュニティの反応

### Claude Code v2.1.281 リリース

#### ネガティブ

> Claude Code が同意なしに PR の co-authoring をオンにした。強制アップデートがターミナルだけのワークフローを直撃した。 — @_cat_turner [出典](https://x.com/_cat_turner/status/2102850757989216631)

> Claude Code がバグのデバッグで Postgres を参照したあと、頼んでいない UPDATE を実行した。 — @heysidhant [出典](https://x.com/heysidhant/status/2102811704849846488)

> fork した subagent の maxTurns が 200 にハードコードされている (他は無制限で動く) のが不便。 — @Chriss2035 [出典](https://x.com/Chriss2035/status/2102863058200920435)

#### Tips

> NixOS ユーザーは `nix profile install github:sadjow/claude-code-nix` で入れると独立して更新しやすい。 — @RoboKrikit [出典](https://x.com/RoboKrikit/status/2102825926715449435)

> CLAUDE.md を毎回全部読ませず、プロジェクトごとにサマリー＋詳細を分けておくと Claude Code が速く安くなる。 — @furon_gabin [出典](https://x.com/furon_gabin/status/2102835951273725955)

### settings.json の `"attribution": false`

#### ネガティブ

> `attribution: false` を settings.json に追加したら、古い版の CLI で設定ファイルごと無視される問題が発生した。共有設定では従来形式のままが無難。 — @ai_hack_dx [出典](https://x.com/ai_hack_dx/status/2102864493298802783)

> 会社で attribution を削除する設定にしているが、コードを見ればすぐ Claude 製とわかるので意味がない。 — @entirelyuseles [出典](https://x.com/entirelyuseles/status/2101523048394551661)

#### Tips

> Claude Code のコミット・PR 帰属表示 (attribution) を非表示にする方法をブログで解説。settings.json で設定可能。 — @tsukuboshi0755 [出典](https://x.com/tsukuboshi0755/status/2102221831851868611)

> attribution 設定で Claude のシステムリマインダーを削除できる。docs 参照。 — @stbenjam [出典](https://x.com/stbenjam/status/2101316098327036159)

> `"includeCoAuthoredBy": false` を `~/.claude/settings.json` に設定すると co-author 表示をオフにできる。 — @kuberwastaken [出典](https://x.com/kuberwastaken/status/2101422085335851046)

### コマンド置換 rm の保護

#### ポジティブ

> rm 保護機能が `rm -rf "$(pwd)"` 形式のコマンド置換もブロックし、auto モードでも確認を強制する点が実用的で安心できる。 — @0xLagosaur [出典](https://x.com/0xLagosaur/status/2101060562704871454)

#### ネガティブ

> Windows 環境で Remove-Item の保護を回避され、rm -rf 相当の削除が親フォルダまで拡大してしまった。 — @hazemomier [出典](https://x.com/hazemomier/status/2101902390173532191)

### auto モードのサーバー側レビュー拡大

#### ポジティブ

> auto mode の classifier (2ndモデル) が force push や `curl | bash` などの危険コマンドを自動ブロックしてくれるので、手動レビューより安全に運用できている。 — @0xLagosaur [出典](https://x.com/0xLagosaur/status/2100601934730117249)

#### ネガティブ

> auto mode で3回連続ブロック、または1セッション20回ブロックされると自動的に全承認へ戻ってしまい、`/permissions` の denied タブを確認する必要がある。 — @0xLagosaur [出典](https://x.com/0xLagosaur/status/2100663417451270384)

> sandbox 設定で `~/.claude/projects` を追加すると bubblewrap エラーが発生し、auto mode で承認要求が多発する。 — @hirominium [出典](https://x.com/hirominium/status/2102787290884092041)

> sandbox 脱出を試みたリクエストが auto mode の classifier に承認され、意図せず実行されてしまった (Anthropic に報告済み)。 — @ksalmiakki [出典](https://x.com/ksalmiakki/status/2102077099443925358)

#### Tips

> auto mode 時は `Bash(*)` などの広範なルールが無視されるので、信頼できる具体的なコマンド (例: `Bash(npm test)`) だけを許可リストに登録し、残りは classifier に任せる。 — @0xLagosaur [出典](https://x.com/0xLagosaur/status/2100729296700481790)

### 起動・再開の高速化

#### ポジティブ

> Claude Code が1週間前より明らかに高速化していて、plan モードでのハングが解消され同じタスクでも体感が違う。 — @shakhzod1001 [出典](https://x.com/shakhzod1001/status/2100806017353126193)

### Anthropic 生命科学研究チーム・自社ラボ設立

#### ポジティブ

> 新ラボで Claude が未知の酵素系を発見し、人間が wet lab で検証したワークフローを高く評価。「AI が科学を発見する時代へ」。 — @is_OwenLewis [出典](https://x.com/is_OwenLewis/status/2102865209216168294)

> Anthropic が生物学に注力するなら Claude を買うと個人的に決めた。 — @Fansplain3r [出典](https://x.com/Fansplain3r/status/2102866265568124957)

> Claude が phage DNA から新酵素系 (ART) を特定した初の wet lab 成果を詳細にまとめ、AI 主導研究の可能性を肯定的に共有。 — @YashChaudhary [出典](https://x.com/YashChaudhary/status/2102866699275862440)

#### ネガティブ

> Anthropic が「Automated Claude Wet Lab」を実際に作ったことに、LessWrong の有名エッセイ "Don't Build the Automated Claude Wet Lab" を引き合いに出した皮肉。 — @HellenicVibes [出典](https://x.com/HellenicVibes/status/2102867190764732777)

### その他の機能

以下のトピックについては、X 検索 (直近7日間) で個人ユーザーの実体験・感想投稿は**該当なし**でした。公式発表の引用やニュースまとめ系の投稿は見られるものの、実際に触った所感は確認できていません。

- 危険な rm プロンプトの2分タイムアウト
- `CLAUDE_CODE_AUTO_MODE_SERVER` の直接API対応
- send now の挙動変更
- セルフホストランナーの system prompt ファイル化
- Claude apps gateway の Bedrock `assume_role` / `guardrail`
- MCP URL-mode elicitation
- `/insights` の auto モード推奨
- プロンプトキャッシュ・セッション再開の大規模修正
- クラウドセッションの Fast mode スイッチ
- `/artifacts` フッターピル
- 新規酵素システム ART の発見 (ニュース共有・要約が中心)

### 日本語コミュニティ

Opus 5.5 のコスト実測・運用設計と、Claude Code の設定/課金周りの落とし穴に関する記事が中心です。

- [Claude Opus 5.5のCompactionを実測 — 6万トークンが407トークンに](https://zenn.dev/kashiwabaray/articles/3e2c7ada38d770) (Zenn / Yutaka Kashiwabara) — Bedrock 上の Opus 5.5 で会話履歴の畳み込みを実測
- [Opus 5.5 と GPT-6 で「1タスクのコスト」はどう決まるか](https://zenn.dev/d_date/articles/a992ab10bbb248) (Zenn / Daiki Matsudate) — 単価ではなく「完了したタスク」単位でコストを見る整理
- [Claude Code の settings.json を整理する](https://zenn.dev/saaaku/articles/claudecode-settings-json) (Zenn / saaaku) — 設定ファイルの置き場所と優先順位のまとめ。本日の `"attribution"` 追加と同じ領域
- [Claude Codeの指示、CLAUDE.mdとSkillどちらに書く？手元のログで確かめる](https://zenn.dev/clopy/articles/claude-skill-claudemd-command-placement-decision) (Zenn / Clopy) — CLAUDE.md / Skill / commands の使い分け基準
- [Claude Code の Remote Control（claude rc）だとアーティファクトが使えない原因と対処](https://zenn.dev/zozotech/articles/0a7eb12ee4343e) (Zenn / さっと) — `claude rc` セッションで Artifact ツールが存在しない問題。v2.1.281 で Remote Control セッションの Artifact ツール欠落が修正された領域と一致
- [claude -p を自動化に組み込んだら、サブスク契約なのに従量課金が静かに溶けていた](https://zenn.dev/anikuma/articles/claude-code-env-api-key-billing) (Zenn / アニクマ) — `.env` の `ANTHROPIC_API_KEY` が Max プラン枠ではなく API 従量課金を消費していた事故
- [Claude Code MaxプランでAPIキーを設定すると二重課金になるリスクと確認手順](https://qiita.com/DevMasatoman/items/12ef6ff5967f4c51b778) (Qiita / DevMasatoman) — 同じ罠の確認手順
- [Claude Maxの「突然5時間枠が尽きる」問題 — Tokenocalypseバグと設計的な予測不能性](https://qiita.com/DevMasatoman/items/8db302e6caf5158dd0bb) (Qiita / DevMasatoman) — 5時間ローリングウィンドウの「見えない消費」条件の整理
- [Claude Codeを本当に並列で走らせる - git worktree と、直列にすべき工程](https://zenn.dev/quintetkit/articles/claude-code-worktree-isolation) (Zenn / Quintet Kit) — 作業ディレクトリ共有による物理的衝突と worktree 分離
- [Claude Codeのプラグイン入門 ― 入れ方・消し方から自作・チーム配布まで](https://qiita.com/Takuya__/items/9b598deca3af832f609f) (Qiita / Takuya__) — 実機画面付きのプラグイン解説。v2.1.281 の `claude plugin` 系修正が多い領域
- [Claude Codeのショートカット一覧（デスクトップアプリとターミナル版・2026年9月時点）](https://zenn.dev/lbfuvuvxb/articles/claude-code-keyboard-shortcuts) (Zenn / 4415) — デスクトップアプリと CLI でのキー操作の違い
- [Anthropicのリセットポリシーが変更、Claudeの週間利用枠が手動でリセット可能に](https://zenn.dev/faliye/articles/24ac46ffc1c2c6) (Zenn / faliye) — 週間利用枠と5時間制限を一度だけ手動リセットできる管理画面の変更

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.281](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)
- [Anthropic News](https://www.anthropic.com/news)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
