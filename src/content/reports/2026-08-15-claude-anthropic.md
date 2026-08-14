---
title: "v2.1.232、フォーク既定化とGitLab対応の大型更新"
summary: "Claude Code v2.1.232 が公開され、サブエージェントのフォーク既定有効化、`@` によるセッション間メンション、GitLabサポート強化に加え、PowerShell/Windowsの権限バイパスなど複数のセキュリティ修正が入りました。またClaudeモデルへのテキスト透かし導入がXで批判を集めています。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-08-15

features:
  - "Claude Code v2.1.232"
  - "サブエージェントのフォーク既定有効化"
  - "`@` によるセッション間メンション"
  - "セッション名の一意化"
  - "`/config` の Dialog expiry / Messages from your other sessions"
  - "GitLabサポート強化"
  - "`/advisor` でのFable 5復帰"
  - "`/code-review` の高負荷レベルもバックグラウンド実行"
  - "権限バイパス系のセキュリティ修正"
  - "テキスト透かし (Text Watermark)"
codex_review: "機能面では地味な運用改善と権限修正の積み上げがかなり重要で、実務寄りの良い大型更新だと思う。一方で話題の中心が透かし批判に吸われ、プロダクトの堅実な前進がやや過小評価されている印象もある。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.232 (2026-08-13)

新機能・修正を多数含む大型リリースです。

[Claude Code Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.232)

#### サブエージェントのフォーク既定有効化

`subagent_type: "fork"` のサブエージェントが会話全体とプロンプトキャッシュを継承するようになり、これが既定で有効になりました。あわせて、対話セッションにおけるチームメイト以外のエージェント起動は、既定でバックグラウンド実行となります。

#### `@` によるセッション間メンション

プロンプト内で `@` を入力すると、他の Claude セッションを名前で指定できるようになりました。指定すると Claude は `SendMessage` を使ってそのセッションへ直接メッセージを送ります。また `SendMessage` は、稼働中のセッション 1 つと完全一致する名前だけを渡した場合、ref による確認を求めずにそのまま配送するようになりました。

#### セッション名の一意化

同一マシン上の対話セッションは名前が一意に保たれるようになりました。既に稼働中のセッションと同じ名前で開始・リネームした場合、`name-word-word` 形式の別名が自動的に付与され、その旨が通知されます。

#### `/config` の Dialog expiry / Messages from your other sessions

`/config` に「Dialog expiry」と「Messages from your other sessions」の 2 行が追加されました。後者はセッション間の受信メッセージを承認 / 保留 / 拒否で制御するものです。

#### GitLabサポート強化

GitLab のトークン各種 (`glrt-`, `gloas-`, `glptt-`, `glagent-`, `glimt-`, `glsoat-`, `glcbt-`, `glft-`, `glffct-`) にシークレット墨消しが追加され、ルーティング可能な `glpat-` / `gldt-` トークンは完全に墨消しされます。`glab` CLI の設定ストアも `gh` と同等のサンドボックス・資格情報パス保護の対象になりました。あわせてプラグインマーケットプレイスが GitLab に対応し、素の `gitlab.com` リポジトリ URL (ネストしたサブグループを含む) が `github.com` の URL と同様にクローンされます。

#### `/advisor` でのFable 5復帰

Fable へのアクセスがある組織向けに、Fable 5 が `/advisor` のアドバイザーとして再び提供されるようになりました。利用クレジットの同意は `/model fable` 経由で行います。

#### `/code-review` の高負荷レベルもバックグラウンド実行

`/code-review` の high / xhigh / max の各エフォートレベルが、他のレベルと同様にバックグラウンドエージェントで実行されるようになりました。

#### 権限バイパス系のセキュリティ修正

以下の権限バイパスが修正されました。

- PowerShell で、変数に書き込むパラメータが `$PSDefaultParameterValues` を暗黙に上書きし、後続コマンドのファイルアクセスをリダイレクトできた問題
- Windows で、Git Bash が Cygwin 形式のシンボリックリンクを追跡する一方、パス検証側はそれを通常ファイルと見なしていた問題 (経由した書き込みには権限承認が必要になりました)
- ネストした git リポジトリが親ディレクトリの信頼を継承していた問題 (各リポジトリが個別に信頼確認を要求するようになりました)

### テキスト透かし (Text Watermark) (2026-08-14)

今後の Claude モデルの出力に、人間には知覚できない透かしを埋め込む方針が示されました。EU AI Act への準拠を目的としたもので、出力の品質や内容には影響しないと説明されています。

## コミュニティの反応

### テキスト透かし (Text Watermark)

#### ネガティブ

> これを理由に既に解約している人が出ている。EU は AI 生成コンテンツの識別可能性を求めているが、人間が書いた文章への単純な編集は適用除外のはず。校正にまで透かしが入るなら、それは「EU 準拠」ではなく Anthropic が法を超えて踏み込んでいるということだ — @MikelEcheve [出典](https://x.com/MikelEcheve/status/2087112109872062724)

> 新しい Claude モデルで生成したテキストには透かしが埋め込まれる。人を不利にするだけの無意味な法だ。AI と議論する内容はしばしば自分自身のアイデアなのに、これでは企業だけが権利を主張できることになる — @annagrad78 [出典](https://x.com/annagrad78/status/2087179492045320274)

> Anthropic は誰も頼んでいないことをやった。Claude が生成したものすべてに不可視の指紋を付けるというものだ。この機能はあまりにひどく、実際に人々は激怒した。X でも Reddit でもサブスク解約の報告が次々に出始めた — @ErickSky [出典](https://x.com/ErickSky/status/2088348551076274403)

ポジティブおよび Tips に該当する個人ユーザーの投稿は見つかりませんでした。発表直後のため実体験ベースの投稿は少なく、EU AI Act 準拠の透かし導入に対する懸念・批判が中心です。

### Claude Code v2.1.232 / 各新機能

該当なし。v2.1.232 の各項目 (サブエージェントのフォーク既定有効化、`@` によるセッション間メンション、セッション名の一意化、`/config` への追加、GitLabサポート強化、`/advisor` での Fable 5 復帰、`/code-review` のバックグラウンド実行、権限バイパス系の修正) について直近 7 日間の X 投稿を検索しましたが、個人ユーザーによる実使用体験・感想の投稿は確認できませんでした。リリースが 2026-08-13 と直近であることに加え、v2.1.232 に関する検索は X 側のレート制限 (429) により結果を取得できていません。

なお Qiita では v2.1.232 の変更点をまとめた記事が公開されています。

- [Claude Code v2.1.232まとめ：PowerShell権限バイパス等の重大修正と新機能](https://qiita.com/picnic/items/ec718a60bd314c5d8c90) — @picnic

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
