---
title: "Codex CLI 0.157.0 正式版リリース"
summary: "Codex CLI 0.157.0 が正式リリースされ、GPT-6 Sol / Luna と Amazon Bedrock 経由の利用に対応した。フルスクリーントランスクリプトの既定有効化、バックグラウンドサーバーの自動起動、会話をフォークする f ショートカットなどセッション周りの変更も多い。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-26

features:
  - "Codex CLI 0.157.0 (正式版)"
  - "ChatGPT セキュリティ履歴"
  - "Codex CLI フルスクリーントランスクリプトの既定有効化"
  - "Codex CLI バックグラウンドサーバーの自動起動"
  - "Codex CLI の f ショートカット"
  - "Codex CLI のネットワーク制限強化"
codex_review: "目玉は新モデル対応だが、業界を揺らすというより日々の作業を滑らかにする堅実な更新だ。特に通信中にも失効ルールを反映する強化は地味ながら、エージェントを安心して任せるための土台として評価したい。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI 0.157.0 (正式版)

GPT-6 Sol と GPT-6 Luna をモデルカタログに追加し、Amazon Bedrock 経由での利用と、旧モデル利用時の移行プロンプト表示に対応した。あわせて `/import` がリモートセッションとローカルのバックグラウンドサーバーセッションでも使えるようになり、ターミナル描画も Unicode の箇条書き記号・チェックボックス・数式の整列・最適化記法に対応した。

[rust-v0.157.0 (GitHub Releases)](https://github.com/openai/codex/releases/tag/rust-v0.157.0)

なお 0.157.0 の後、同日中に 0.158.0-alpha.13 〜 alpha.15、0.159.0-alpha.1 〜 alpha.3 のアルファタグが公開されている。いずれもリリースノートは自動生成表記のみで、変更内容は公開されていない。

[Codex CLI Releases](https://github.com/openai/codex/releases)

### Codex CLI フルスクリーントランスクリプトの既定有効化

フルスクリーンのトランスクリプト表示が既定で有効になった。あわせて Shift+クリックで選択範囲を拡張できるようになっている。

[#47178](https://github.com/openai/codex/pull/47178) / [#47414](https://github.com/openai/codex/pull/47414)

### Codex CLI バックグラウンドサーバーの自動起動

対象となる対話セッションで、バックグラウンドサーバーが自動的に起動するようになった。サーバー設定が非互換の場合は復旧の選択肢が提示される。

[#47179](https://github.com/openai/codex/pull/47179) / [#47318](https://github.com/openai/codex/pull/47318)

### Codex CLI の f ショートカット

別アプリで開いている会話を `f` キーでフォークできるようになった。下書きとキュー済みのプロンプトは保持される。

[#47185](https://github.com/openai/codex/pull/47185)

### Codex CLI のネットワーク制限強化

ネットワーク制限がリダイレクト先と、継続中の HTTP / WebSocket 通信にも適用されるようになった。ポリシー変更でアクセス権が取り消された場合は接続がキャンセルされる。

[#47389](https://github.com/openai/codex/pull/47389) / [#47407](https://github.com/openai/codex/pull/47407)

### ChatGPT セキュリティ履歴

サインイン・サインアウト、MFA / パスキーの変更を、時刻・場所・デバイス付きで確認できるセキュリティ履歴が追加された。

[ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

## コミュニティの反応

### Codex CLI 0.157.0 (正式版)

該当なし。取得した投稿は公式・ニュースアカウントやボットによるリリース告知のみで、個人ユーザーの実体験は見つからなかった。

### Codex CLI バックグラウンドサーバーの自動起動

#### ポジティブ

> Codex 0.157 でバックグラウンドサーバーが自動起動するようになり、別セッションから会話をフォークしても下書きが失われず、継続性が大幅に向上した — @kalmedown [出典](https://x.com/kalmedown/status/2103492690675437894)

> Codex CLI のデフォルト変更で、該当セッション時にバックグラウンドサーバーが自動起動するようになった — @AverageAiBro [出典](https://x.com/AverageAiBro/status/2103498509341319301)

#### ネガティブ

> Windows では Codex のバックグラウンドサーバー (daemon) が権限エラーや detach 失敗を引き起こし、毎回 `--no-daemon` の指定が必要になった — @AzamIntikhab [出典](https://x.com/AzamIntikhab/status/2103521582392250474)

#### Tips

> Windows PowerShell プロファイルに codex エイリアスを追加して `--no-daemon` を既定化すると、background server の問題を回避できる — @AzamIntikhab [出典](https://x.com/AzamIntikhab/status/2103521582392250474)

> Codex の background daemon 起動ルーチンは codex remote-control と共通のため、Windows の daemon アーキテクチャ変更で粗が解消される可能性がある — @pirafrank [出典](https://x.com/pirafrank/status/2103494814326980959)

### Codex CLI の f ショートカット

#### ポジティブ

> 他アプリで開いている会話を下書き・キューを保持したままフォークできる点を、端末操作の改善点として紹介 — @AverageAiBro [出典](https://x.com/AverageAiBro/status/2103498509341319301)

### Codex CLI のネットワーク制限強化

#### ネガティブ

> エージェントのリクエストが生きている間にネットワークルールが変わりうる。Codex はリダイレクト・レスポンスストリーム・WebSocket をまたいで失効チェックを適用し、通信中の拒否もテストするようになった — @hikariraina [出典](https://x.com/hikariraina/status/2102683142247079958)

### Codex CLI フルスクリーントランスクリプトの既定有効化

該当なし。取得した投稿は機能告知・ニュース寄りのもののみだった。

### ChatGPT セキュリティ履歴

該当なし。passkey / MFA 一般の話題は見つかったが、ChatGPT のセキュリティ履歴そのものに触れた個人ユーザーの投稿はなかった。

## ソース

- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [rust-v0.157.0 リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.157.0)
- [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
