---
title: "Claude Code v2.1.187、認証情報保護とマウス操作を強化"
summary: "Claude Code v2.1.187が公開され、sandbox.credentialsによる認証情報保護、組織モデル制限、フルスクリーンのマウスクリック対応などを追加。マウス操作改善は実ユーザーから高評価を集めた。Anthropic Instituteは再帰的自己改善レポート「When AI builds itself」を公開した。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-25

features:
  - "sandbox.credentials設定 (v2.1.187)"
  - "組織のモデル制限対応 (v2.1.187)"
  - "フルスクリーン選択メニューのマウスクリック対応 (v2.1.187)"
  - "/install-github-app改善 (v2.1.187)"
  - "Anthropic Institute レポート「When AI builds itself」"
codex_review: "派手なのはマウス改善だが、実は効くのは認証情報保護だと思う。CLI系AIツールは便利さ先行になりがちで、この種の地味な安全策を先に積む姿勢は業界全体にも波及しそうだ。"
codex_importance: 3
---

## 公式アップデート

前回レポート（v2.1.186時点）以降、Claude Code に新バージョン v2.1.187 および v2.1.190 が公開されました。v2.1.190 はバグ修正・信頼性改善のみのため、本日は v2.1.187 の主な追加点と Anthropic Institute のレポートを取り上げます。

### sandbox.credentials 設定 (v2.1.187)

サンドボックス実行されたコマンドが、認証情報ファイルや秘密の環境変数を読み取れないようブロックする `sandbox.credentials` 設定が追加されました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.187)

### 組織のモデル制限対応 (v2.1.187)

モデルピッカー、`--model`、`/model`、`ANTHROPIC_MODEL` に組織設定によるモデル制限が反映されるようになりました。制限対象のモデルを選択すると「組織の設定により制限されています」というメッセージが表示されます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.187)

### フルスクリーン選択メニューのマウスクリック対応 (v2.1.187)

フルスクリーンモードで、権限プロンプトや `/model`・`/config` などの選択メニューをマウスクリックで操作できるようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.187)

### /install-github-app 改善 (v2.1.187)

GitHub Actions ワークフロー設定が任意化され、GitHub App のみをインストールしてワークフロー/シークレットの設定をスキップできるようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.187)

### Anthropic Institute レポート「When AI builds itself」(再帰的自己改善)

AI が AI 開発自体を自動化しつつある現状を分析したレポートが公開されました。社内コードの80%超を Claude が記述し、コーディング成功率が76%に達したことなどが報告されています。

## コミュニティの反応

### sandbox.credentials 設定 (v2.1.187)

#### ポジティブ

> v2.1.187 の sandbox.credentials 追加を「本番環境で起きがちな2つの実問題を静かに解決する」と評価し、セキュリティ強化を高く評価 — @RoundtableSpace [X](https://x.com/RoundtableSpace/status/2069786370835710132)

### フルスクリーン選択メニューのマウスクリック対応 (v2.1.187)

#### ポジティブ

> フルスクリーンモードでマウスクリックによる Yes/No 選択や AskUserQuestion 回答ができるようになった — @apple_x_co [X](https://x.com/apple_x_co/status/2069798608401203702)

> マウスのスクロールに対応したおかげで tmux 下の挙動が改善されて助かる — @ginpei_jp [X](https://x.com/ginpei_jp/status/2069845638549000200)

> フルスクリーンレンダラーで文の途中にクリックできるようになり、最大の不満が解消された — @jankeesvw [X](https://x.com/jankeesvw/status/2069350812560531489)

> v2.1.187 のマウスサポート追加で通常通りのマウス操作とクリップボードコピーが可能になり巨大なアップデート — @LeeLeepenkman [X](https://x.com/LeeLeepenkman/status/2069321764950442184)

### Anthropic Institute レポート「When AI builds itself」(再帰的自己改善)

#### ポジティブ

> Claude の Managed Agents 機能で過去のやり取りを分析して自己改善し、チェック項目を教えるだけで自分で修正してくれるようになった。施工管理の現場で「そんな部下は見たことがない」と驚きながら活用 — @hidekun_hidez [X](https://x.com/hidekun_hidez/status/2069791458375455172)

> Anthropic のエンジニアが300以上の自己改善エージェントをループで走らせており、エンジニアの役割が変わりつつあると実感 — @kazuki_iwakura [X](https://x.com/kazuki_iwakura/status/2069765665364607234)

#### ネガティブ

> Claude Code がブラウザを自動で開いてテストするものの、依然として80%程度の精度しか出ない点に不満 — @JCWhite1102 [X](https://x.com/JCWhite1102/status/2069870904184574368)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
