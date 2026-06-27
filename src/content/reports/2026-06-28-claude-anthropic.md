---
title: "Claude Code v2.1.195、日本語音声入力の自動送信を修正"
summary: "Claude Code v2.1.195が公開され、フルスクリーン時のマウス操作を無効化する CLAUDE_CODE_DISABLE_MOUSE_CLICKS、分かち書きしない言語（日本語・中国語・タイ語）での音声自動送信、ハイフン入りhookマッチャーの完全一致化、Remoteセッション起動時のチェックリスト表示などを追加。あわせてAnthropicが約1万人規模の利用動向調査「Economic Index: Cadences」を公開した。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-28

features:
  - "[Claude Code] v2.1.195公開"
  - "CLAUDE_CODE_DISABLE_MOUSE_CLICKS設定 (v2.1.195)"
  - "音声入力の自動送信修正 (v2.1.195)"
  - "ハイフン入りhookマッチャー修正 (v2.1.195)"
  - "Remoteセッション起動改善 (v2.1.195)"
  - "[Anthropic] Economic Index「Cadences」 (6/26)"
codex_review: "日本語音声入力とhook完全一致の修正は派手さはないが、日常運用のストレスと事故を減らす類いで実は効く。逆にEconomic Indexは話題性先行で、業界全体を動かす材料としてはまだ弱い。"
codex_importance: 2
---

## 公式アップデート

前回レポート（v2.1.193時点）以降、Claude Code に v2.1.195 が公開されました。本日はその主な追加点と、Anthropic が公開した利用動向調査「Economic Index: Cadences」を取り上げます。

### CLAUDE_CODE_DISABLE_MOUSE_CLICKS設定 (v2.1.195)

フルスクリーンモードでマウスのクリック・ドラッグ・ホバーを無効化しつつ、ホイールスクロールは維持する `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` 設定が追加されました。ターミナル操作中の誤クリックを抑える用途を想定しています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.195)

### 音声入力の自動送信修正 (v2.1.195)

日本語・中国語・タイ語など、単語を空白で区切らない言語で音声入力の自動送信が発火しなかった不具合が修正されました。あわせて、macOS でデフォルト入力デバイス変更後に長時間セッションで無音をキャプチャしてしまう問題、Linux で「マイクなし」と「SoX 未インストール」を区別できるようにする改善も入っています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.195)

### ハイフン入りhookマッチャー修正 (v2.1.195)

`code-reviewer` や `mcp__brave-search` のようなハイフンを含む識別子の hook マッチャーが、意図せず部分一致していた問題が完全一致に修正されました。ハイフン入り MCP サーバーの全ツールに一致させるには `mcp__brave-search__.*` を使います。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.195)

### Remoteセッション起動改善 (v2.1.195)

Remote セッションの起動時に、コンテナ起動中のプロビジョニング状況をチェックリストとして表示するようになりました。このほか v2.1.195 では、バックグラウンドジョブが新しいバージョンで書き込まれた際に `claude agents` から消失・データ欠落する不具合の修正や、クラッシュしたバックグラウンドタスク再開時の空白画面（最大5秒）の修正など、信頼性改善が含まれます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.195)

### Economic Index「Cadences」 (6/26)

Anthropic が、約1万人を対象とした利用動向調査レポート「Economic Index: Cadences」を公開しました。個人的な会話が週末に35%→50%へ増加すること、4月15日前後に税関連の利用が約8倍に増えること、回答者の3分の1超が「12カ月以内にAIが自分の業務の大半を担う」と予想していることなどが報告されています。

[ソース](https://www.anthropic.com/economic-index)

## コミュニティの反応

### v2.1.195公開

#### ポジティブ

> `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` でターミナル操作中の誤クリック問題が解消され、嬉しい対処になった — @rikuminamiyama [X](https://x.com/rikuminamiyama/status/2070702613071585506)

> フック識別子の完全一致修正と新env変数で、複雑なMCP/Agent構成でも動作が予測しやすくなり実用的 — @Xudong07452910 [X](https://x.com/Xudong07452910/status/2070910673731649939)

> Writeツールの安全なファイル書き込みと日本語音声入力対応で、AIへの作業委託のハードルが下がった — @AI_EC_Hacker [X](https://x.com/AI_EC_Hacker/status/2070825033627500723)

#### ネガティブ

> `CLAUDE_CODE_DISABLE_MOUSE_CLICKS=1` を設定してもマウス操作が完全に無効化されず、期待通りに動かない — @ginpei_jp [X](https://x.com/ginpei_jp/status/2070944215761326291)

### 音声入力の自動送信修正 (v2.1.195)

#### ポジティブ

> ついに直った。日本語で音声入力すると話し終わっても自動送信されず毎回エンターを押していたが、v2.1.195 で空白のない言語でも自動送信が効くようになった。毎日触る人ほど効く修正 — @haruai_kyoto [X](https://x.com/haruai_kyoto/status/2070663253362102486)

> Claude Code は音声入力で指示が打てる。日本語は喋り終わっても自動送信されず手で確定が要ったが、v2.1.195 で改善。手がふさがっているとき声で投げて任せられるのは楽 — @kumitate_ai [X](https://x.com/kumitate_ai/status/2070673854469648684)

> 日本語ユーザーにとってはボイス入力修正が地味に大きいのでは — @rikuminamiyama [X](https://x.com/rikuminamiyama/status/2070634096607576318)

### ハイフン入りhookマッチャー修正 (v2.1.195)

#### ポジティブ

> hook matcher の完全一致修正は「sleeper change（隠れた重要変更）」。ハイフン入りMCPツールが意図せず他ツールにマッチする「幽霊のようなバグ」が解消された — @Timur_Yessenov [X](https://x.com/Timur_Yessenov/status/2070646887162802319)

> hook識別子マッチングが部分一致から完全一致へ修正されたのは「正しい方向」。複雑なMCPツール・agent構成時の予期せぬ動作が改善された — @Xudong07452910 [X](https://x.com/Xudong07452910/status/2070910673731649939)

### CLAUDE_CODE_DISABLE_MOUSE_CLICKS設定 (v2.1.195)

該当なし（リリースが6月26日と直近のため、設定単体の実体験投稿は確認できず、主にChangelog共有のみ）

### Remoteセッション起動改善 (v2.1.195)

該当なし（直近7日間で本トピックに紐づく個人ユーザーの実体験・Tips投稿は確認できませんでした）

### Economic Index「Cadences」 (6/26)

該当なし（直近1週間ではレポートの共有・要約・公式リンク拡散が中心で、実利用に基づく感想投稿は確認できませんでした）

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Anthropic - Economic Index](https://www.anthropic.com/economic-index)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
