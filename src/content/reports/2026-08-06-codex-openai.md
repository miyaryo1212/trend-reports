---
title: "Codex CLI 0.146.1と教育向けプラグイン3種"
summary: "Codex CLI の安定版 0.146.1 がリリースされ、サイバー能力モデル向けに自動レビューの既定値を安全側へ変更した。あわせて K-12教員・大学教員・大学生向けの教育プラグイン3種が追加された。X ではプラグインの導入手順や注意点の共有が先行し、実利用報告はまだ少ない。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-08-06

features:
  - "Codex CLI 0.146.1"
  - "ChatGPT Work / Codex 教育プラグイン"
codex_review: "CLIの安全側への微修正は地味だが、実運用ではこういう変更ほど効く。一方で教育プラグインは期待先行で、現時点では話題性に比べ実装の重みはまだ見えにくい。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI 0.146.1

安定版のバグ修正リリース（2026-08-05）。サイバー能力の高いモデルに対して自動レビューの既定値をより安全側に変更し、権限変更の内容をターミナルUI上で説明するようになりました（[#37057](https://github.com/openai/codex/pull/37057) のバックポート）。なお GitHub Releases 上の他のエントリは 0.147.0-alpha 系のプレリリースのみです。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.146.1)

### ChatGPT Work / Codex 教育プラグイン

K-12教員向け・大学教員向け・大学生向けの3種の教育プラグインが追加されました。各プラグインには対象アプリ、役割別のスキル、指示、定型ワークフローがまとめられています。

## コミュニティの反応

### Codex CLI 0.146.1

リリース直後のため 0.146.1 そのものへの言及は少なく、直近の Codex CLI 全般に関する実体験の投稿が中心です。

#### ポジティブ

> 朝活で Obsidian 用に Codex CLI をインストールし、PowerShell も怖くなくなってきた。 — @junhoso1 [出典](https://x.com/junhoso1/status/2085125072113844439)

> Linux 環境では T3 Code より codex cli のほうが快適で papercut が少ない。 — @Bento20205 [出典](https://x.com/Bento20205/status/2085212573725839796)

#### ネガティブ

> codex cli は Claude Code に比べて agent 切り替え UI が弱く、機能が隠れているのが不満。 — @Hormold [出典](https://x.com/Hormold/status/2085215863809126745)

> named session の TUI 版がヘッドレス環境で動かない問題を確認した。 — @k_aik_ou [出典](https://x.com/k_aik_ou/status/2085200807259984322)

> 「Codex CLIの名前付きセッション、ヘッドレスではTUI版が動かなかった」— CI やクラウド実行環境などヘッドレス環境での自動化を想定した検証記事。 — Qiita @kai_kou [出典](https://qiita.com/kai_kou/items/508f762dbb1644750f94)

> codex cli から oh-my-pi へ移行した。 — @denshibato [出典](https://x.com/denshibato/status/2085012053115433285)

#### Tips

> Codex CLI の許可プロンプトを AppleScript で自動 enter し、作業が止まらないようにした。 — @everywhere30 [出典](https://x.com/everywhere30/status/2085183234862981551)

> IDE 内のターミナルで codex cli を起動し、チャット代わりに使う。 — @corylanou [出典](https://x.com/corylanou/status/2085211371688615976)

> 「Codexを対話画面なしで動かす ― codex exec 非対話モードの最初の一歩」— TUI を開かず `codex exec "やってほしいこと"` の1コマンドで実行し、標準出力に最終回答だけを受け取る手順。 — Zenn @あきらパパ [出典](https://zenn.dev/akira_papa/articles/00fa900d14d14e)

### ChatGPT Work / Codex 教育プラグイン

#### ポジティブ

該当なし（発表直後で実利用報告が確認できず）

#### ネガティブ

該当なし

#### Tips

> Codex デスクトップアプリで教育プラグインをインストールすると、MCP サーバー設定と SKILL.md が自動でダウンロードされる。Figma の例のようにコマンドをスキル化してミスを防ぐ手順が用意されている。 — @codex_labo [出典](https://x.com/codex_labo/status/2085024134493561231)

> プラグイン導入時は複数アカウント対応を確認すべき。Gmail など1アカウントしか繋げられない場合にすぐトラブルが出るので、早めに実験しておくとよい。 — @codex_labo [出典](https://x.com/codex_labo/status/2084582596705755190)

> K-12教員視点で、ChatGPT から Kahoot! を直接作れるプラグインの活用例を紹介。授業準備が大きく変わる可能性を指摘。 — @morik7554 [出典](https://x.com/morik7554/status/2082789631175848233)

## ソース

- [Codex CLI 0.146.1（GitHub Releases）](https://github.com/openai/codex/releases/tag/rust-v0.146.1)
- [safer cyber-model auto-review defaults のバックポート PR #37057](https://github.com/openai/codex/pull/37057)
- [Codex CLIの名前付きセッション、ヘッドレスではTUI版が動かなかった（Qiita / kai_kou）](https://qiita.com/kai_kou/items/508f762dbb1644750f94)
- [Codexを対話画面なしで動かす ― codex exec 非対話モード（Zenn / あきらパパ）](https://zenn.dev/akira_papa/articles/00fa900d14d14e)
- [教育プラグインのインストール挙動（X / @codex_labo）](https://x.com/codex_labo/status/2085024134493561231)
- [Kahoot!を作れるプラグインの活用例（X / @morik7554）](https://x.com/morik7554/status/2082789631175848233)
