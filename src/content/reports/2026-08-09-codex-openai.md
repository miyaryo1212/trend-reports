---
title: "本日の公式アップデートなし、0.148.0-alphaが進行中"
summary: "Codex CLI は 0.148.0-alpha.4 / alpha.5 が公開されたものの、リリースノートは版数のみで変更内容は非公開。本日新規に判明した公式アップデートはない。コミュニティでは Codex の GPT-5.4 提供終了（8/31期限）や、Claude Code の制限到達時に Codex へ乗り換える運用といった実務寄りの話題が中心。"
importance: 1
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-08-09

features: []
codex_review: "新機能不在の日としては地味ですが、実際に目を引くのは製品進化より運用の知恵が前景化している点です。alphaの中身非公開はやや過剰に期待を煽りがちで、むしろ移行期限や代替導線の話のほうが現場には重要だと感じます。"
codex_importance: 2
pipeline_warnings:
  - "Step 1 (機能抽出) で claude -p がfeatures.txtを生成できずフォールバック発動 (max turns到達等)。features=なし扱いとなり、X検索 (Step 2) もスキップされたため、新規アップデートを取りこぼしている可能性があります。"
---

## 公式アップデート

本日の公式アップデートはありません。

Codex CLI の GitHub Releases には 0.148.0-alpha.4（2026-08-08）と 0.148.0-alpha.5（2026-08-08）が追加されましたが、リリースノートはいずれも "Release 0.148.0-alpha.N" のみで、変更内容は公開されていません。0.147.0 の内容および 0.148.0-alpha.1〜3 は前回レポートで既report済みのため再掲しません。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

本日は Step 1 で新規機能・トピックの抽出がなく、X 検索も実施していません（`features` が空のため機能別サブセクションは作成しません）。以下は日本語コミュニティ RSS から拾えた本日時点の記事です。

### 日本語記事

#### Tips

> 「【期限8/31】CodexのGPT-5.4が提供終了。影響範囲と5分でできる移行チェック」— ChatGPT アカウントログインで Codex を使う場合、2026-08-31 に gpt-5.4 / gpt-5.4-mini が選択不可になる。API キー認証の Codex セッションと OpenAI API 経由の利用は対象外。 — Zenn @ainows [出典](https://zenn.dev/ainows/articles/eb74606020fe00)

> 「ClaudeCodeの利用制限がきたらCodexにのりかえる仕組みを作った」— Claude Code のローリング枠・週次枠に到達した際、Codex CLI へ自動的に切り替える運用の構築記録。 — Zenn @ぴよ [出典](https://zenn.dev/uguisu_blog/articles/f184b67962ce7c)

> 「Codexを対話画面なしで動かす ― codex exec 非対話モードの最初の一歩」— TUI を開かず `codex exec "やってほしいこと"` の 1 コマンドで実行し、標準出力に最終回答だけを受け取る手順の入門記事。 — Zenn @あきらパパ [出典](https://zenn.dev/akira_papa/articles/00fa900d14d14e)

> 「OpenAIのWeb検索APIが画像も検索できるようになった」— `web_search` ツールに `search_content_types` と `image_settings` を追加するだけで、画像 URL・出典ページ URL・サムネイルが返るようになった検証記事。 — Zenn @CHEN CHEN（ソフトバンク） [出典](https://zenn.dev/softbank/articles/829ed719303f83)

#### ポジティブ

該当なし

#### ネガティブ

該当なし

## ソース

- [Codex CLI Releases 一覧（0.148.0-alpha.4 / alpha.5 を含む）](https://github.com/openai/codex/releases)
- [【期限8/31】CodexのGPT-5.4が提供終了（Zenn / ainows）](https://zenn.dev/ainows/articles/eb74606020fe00)
- [ClaudeCodeの利用制限がきたらCodexにのりかえる仕組みを作った（Zenn / ぴよ）](https://zenn.dev/uguisu_blog/articles/f184b67962ce7c)
- [Codexを対話画面なしで動かす ― codex exec 非対話モード（Zenn / あきらパパ）](https://zenn.dev/akira_papa/articles/00fa900d14d14e)
- [OpenAIのWeb検索APIが画像も検索できるようになった（Zenn / ソフトバンク）](https://zenn.dev/softbank/articles/829ed719303f83)
