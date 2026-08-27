---
title: "v2.1.247でSendFeedbackツール追加、科学者支援も拡大"
summary: "Claude Code v2.1.247 が公開され、セッション内の不具合を Claude が下書きする SendFeedback ツール、API コスト最適化スキル /claude-api cost-optimize、Sonnet 5 の自動コンパクト閾値変更などが入りました。Anthropic は実機を並列操作するための Model Hardware Standard のリサーチプレビューと、科学者向けサブスクリプション・クレジット支援の拡大も発表しています。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-08-28

features:
  - "Claude Code v2.1.247"
  - "SendFeedback ツール"
  - "/claude-api cost-optimize"
  - "/claude-api スキルの Admin API 対応"
  - "spinnerTipsOverride の拡張"
  - "Sonnet 5 の自動コンパクト閾値変更"
  - "セッション間ピアメッセージの折りたたみ表示"
  - "Model Hardware Standard (MHS) リサーチプレビュー"
  - "科学者向けサポート拡大"
codex_review: "SendFeedbackは少し過剰設計に見える一方、コスト最適化スキルとMHSの並びにはAnthropicの本気が出ている。派手さより運用と実装基盤を固める局面としてはかなり重要だ。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.247

2026-08-26 公開。新ツール・スキル拡充と多数の修正を含むリリースです。

**追加**

- **SendFeedback ツール**: セッションで問題が起きたとき、Claude がフィードバック報告を下書きし、ユーザーが確認して `/feedback` から送信できます。`feedbackDrafts` 設定でオフにできます。
- **`/claude-api cost-optimize`**: 既存プロジェクトの Claude API 支出をプロファイルし、キャッシュ・トークン衛生・バッチ・effort・モデル選択といったコスト要因を、一度に1つずつ計測しながら潰していくスキルです。
- **`/claude-api` スキルの Admin API 対応**: 組織メンバー、招待、ワークスペース、API キー、レート制限レポート、ワークロード ID フェデレーション、CMEK をカバーするよう更新されました。
- **`spinnerTipsOverride` の拡張**: `{id, text, cooldownSessions, priority}` 形式のエントリと `tipsFile` / `label` に対応し、組織が独自の Tips を組み込みの Tips と併用してローテーションできます。
- Bash の権限プロンプトに auto mode を案内する Tip を追加。ワンキーで「Yes, and switch to auto mode」を選べます。

**挙動の変更**

- **Sonnet 5 の自動コンパクト閾値変更**: 既定のオートコンパクト対象が 1M コンテキスト全体になり、1M ウィンドウのセッションでは約934Kトークンではなく**約967Kトークン**で発火するようになりました。
- **セッション間ピアメッセージの折りたたみ表示**: 既定で `Message from @<sender>: <first line>` の1行プレビューに折りたたまれ、Ctrl+O で全文を展開します。
- レンダリング済み Markdown 中のターミナルハイパーリンクについて、ネットワーク/オートマウンタパス・制御文字を含む・不可視文字で始まるリンク先はプレーンテキストとして表示するよう変更。

**主な修正**

- サブエージェントが初回呼び出しのモデル 404 で落ちる問題を修正。セッションのフォールバックモデル連鎖を使い、親に返るエラーにエラー種別・ステータス・リクエストID・モデルが含まれるようになりました。
- hook やバックグラウンドエージェントが数MBのエラー出力を吐いた際に会話があふれ、「Prompt is too long」でセッションが動かなくなる問題を修正。
- Bash サンドボックスのコマンド後クリーンアップが、dotfile 管理 (nix/home-manager, stow) の `~/.claude/settings.json` シンボリックリンクを削除してしまう問題を修正。
- クラウドセッションでコンテナがターン間に再起動した際、バックグラウンドエージェント・シェル・モニターが動いていると無応答になる問題を修正。再開後のセッションが失われた作業を報告します。
- プラグインマーケットプレイスのハードニング: 制御文字・不可視文字を含む名前を拒否し、`/plugin` と `claude plugin` の出力でマーケットプレイス由来のテキストをエスケープ安全に扱います。

[Claude Code Releases — v2.1.247](https://github.com/anthropics/claude-code/releases/tag/v2.1.247)

### Model Hardware Standard (MHS) リサーチプレビュー

2026-08-27 発表。AI エージェントが顕微鏡やロボットアームなど複数の実機を安全に並列操作するための共通仕様のリサーチプレビューです。

### 科学者向けサポート拡大

2026-08-27 発表。Claude team プランの無償・割引サブスクリプションを1万件提供し、AI for Science プログラムを1プロジェクトあたり最大5万ドルのクレジットへ拡張するとしています。

## コミュニティの反応

X/Twitter 検索は Step 1 で抽出した全9トピックについて実施しました。反応が見つかったのは **SendFeedback ツール**、**`/claude-api cost-optimize`**、**Sonnet 5 の自動コンパクト閾値変更**の3件で、残りは該当なしです。とくに MHS と科学者向けサポートは発表当日のため、個人ユーザーの実体験投稿は0件でした。

### SendFeedback ツール

反応はいずれもネガティブ寄りで、「Claude が自分の失敗を自分で報告しようとする」構図への戸惑いが目立ちます。ポジティブ・Tips に該当する投稿はありませんでした。

#### ネガティブ

> 失敗したとき、ミスに気づいたとき、あるいは「うまくいかなかった」と伝えたときに、Claude がセッション内で `/feedback` レポートを下書きしてくる。承認するのは自分。失敗を説明するための追加トークンだが、失敗の分はもう払っている — @Vortlyn [https://x.com/Vortlyn/status/2093030723347202282]

> Claude Code の新しい自動 SendFeedback ツールが、自前のローカルインフラのバグを Anthropic に報告しようとし続ける。20分前に別セッションで*自分が書いた* CLI のパース処理の不具合を、@trq212 が直しに来てくれると期待しているみたいだ — @tenobrus [https://x.com/tenobrus/status/2093006890280292854]

> Claude Code の新しい自動 SendFeedback ツールが、ローカルインフラのバグを Anthropic に報告しようとした — @tloncorpbot [https://x.com/tloncorpbot/status/2093013452260536495]

> 「Anthropic が気にしないなら、パワーユーザーは Codex に移るのでは？」と言ったら、Claude 自身がほぼ即座に SendFeedback を発動した — @vivekkmkpinn [https://x.com/vivekkmkpinn/status/2092876852935250160]

### /claude-api cost-optimize

新スキルそのものへの言及は少なく、周辺の「Claude Code のコストが重い」という実感と、各自のキャッシュ最適化の実践が集まっています。

#### ポジティブ

> Token Router を自作して、API 支出を70%削減しつつ Claude Code を1日10時間以上回せるようになった — @DeRonin_ [https://x.com/DeRonin_/status/2091490832192774234]

#### ネガティブ

> Claude Code をガンガン回したら API 換算で月間70万円超え。利用上限が近づくと息苦しい (Opus 5 多用による高額請求の実体験) — @YUPPE1 [https://x.com/YUPPE1/status/2092795450583843231]

> 8月に入って cache-write トークンが2.4倍に跳ね上がり、制限が厳しくなった (自前のログ解析で発見) — @CtrlAlt8080 [https://x.com/CtrlAlt8080/status/2091955215008256402]

#### Tips

> Claude Code v2.1.247 で追加された `/claude-api cost-optimize` コマンドが実用的だとして、コスト最適化のヒントとともに紹介 — @aria_ai_tools [https://x.com/aria_ai_tools/status/2092778701012517044]

> `CLAUDE.md` の先頭に `cache:boundary` を入れてプロジェクトルールをキャッシュさせ、60〜70%のトークン削減 — @cryptojezuz [https://x.com/cryptojezuz/status/2091767257584324708]

日本語コミュニティでも、コスト計測・キャッシュ設計を扱う記事がこの日に複数出ています。

> `codex exec --json` のストリーム最終イベント `turn.completed` から usage を取り出し、「未キャッシュ入力・キャッシュ済み入力・出力」の3要素に分解して自前でドル建てコストを算出する手法。単価表はバージョン・日付付きで管理する — @sh39 [コーディングエージェントCLIのトークンコスト計上：自動化パイプラインへの組み込み手法](https://zenn.dev/sh39works/articles/786534f4176566)

> 食品ラベル読み取りの iOS アプリで、Claude API の自動キャッシュを使ったところキャッシュなしより入力料金が25%高くなったという実測。高かったのは画像や成分数ではなく、毎回同じシステムプロンプトを送り直している部分だった — @noriyuk [Claude API の自動キャッシュを使ったら、キャッシュなしより入力の料金が25%高くなりました](https://zenn.dev/noriyuk/articles/990efa7e0261cd)

> Claude Code のセッションログ2,921セッション / 47,243ターンを実測し、ツール結果が文脈に足しているトークン量を測定。バイト数で測った順位は誤りで、実トークンで測ると順位が入れ替わるとして、1回の呼び出しが残りのターン全部に乗り続ける「複利」を数値化している — @saito [文脈の複利 ── ツール結果1回のコストは、その1回では終わらない](https://zenn.dev/tsutomusaito/books/claude-code-context-cost)

### Sonnet 5 の自動コンパクト閾値変更

ポジティブ・ネガティブの投稿は確認できず、変更内容の共有と回避策のみでした。

#### Tips

> Claude Code 2.1.247 で Sonnet 5 の 1M コンテキスト使用時の自動 compact 発火点が約934K→約967Kトークンに変わったことを報告し、従来の 200K 制限に戻す方法として環境変数 `CLAUDE_CODE_DISABLE_1M_CONTEXT=1` を提案 — @ai_hack_dx [https://x.com/ai_hack_dx/status/2092909623800127919]

### Claude Code v2.1.247

X 上ではリリース全体への個人ユーザーの実体験投稿は確認できませんでしたが、日本語コミュニティではリリースノートの解説記事が出ています。

#### 中立

> v2.1.234〜v2.1.247 の全14リリースの CHANGELOG をまとめ。フィードバック送信ツールの新設、auto モードの設定 UI 化、ネイティブバイナリの軽量化 (ダウンロード 340MB → 75MB) を今回の柱として挙げている — @NaokiIshimura [Claude Code v2.1.234 - v2.1.247 リリースノートまとめ](https://qiita.com/NaokiIshimura/items/fd6ce4f03f1b9d8b7844)

> セッションで起きた不具合の報告を、その場にいた Claude 自身が下書きする SendFeedback が v2.1.247 で入ったとして、人間に残るのは `/feedback` での確認だけになると整理 — @moha0918_ [Claude Code v2.1.247｜不具合報告を Claude が下書きする SendFeedback｜毎日Changelog解説](https://qiita.com/moha0918_/items/919bc7da12ffc40764e5)

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
