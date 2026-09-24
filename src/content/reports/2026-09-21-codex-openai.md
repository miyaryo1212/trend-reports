---
title: "Codex CLI 0.155.1、TUI推論要約を既定オフに戻す"
summary: "Codex CLI の安定版 0.155.1 が出て、新規ローカル TUI セッションの reasoning summary が既定オフに戻された。非対応プロバイダでのリクエスト拒否を解消する修正。0.156.0 アルファは alpha.9 / alpha.10 と進行したが内容は非公開。X 上の反応は今日も確認できず、コミュニティは OpenAI の障害20件と Codex の実利用記事が中心。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-21

features:
  - "Codex CLI 0.155.1"
  - "Codex CLI 0.156.0-alpha.9 / alpha.10"
  - "OpenAI ステータスページ 20件のインシデント"
  - "Codex Astra によるゲーム制作の実地検証"
  - "Codex Computer Use 導入前の権限・安全設定"
codex_review: "目立つ新機能より、非対応プロバイダへの配慮を優先した修正に堅実さを感じる。障害の多さはエージェント基盤の信頼性を考える材料だが、この日のCLI更新自体が業界を動かす話ではない。 ※ このレビューは後日生成されました"
codex_importance: 2
---

## 公式アップデート

### Codex CLI 0.155.1

安定版のバグ修正リリース。新規のローカル TUI セッションで reasoning summary が既定で無効に戻り、reasoning summary に対応していないプロバイダがリクエストを拒否する問題が解消された。明示的に reasoning summary を設定している場合はその設定が引き続き尊重される (#46467)。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.155.1)

### Codex CLI 0.156.0-alpha.9 / alpha.10

0.156.0 のアルファ系列が alpha.9 (9/20) と alpha.10 (9/20) の 2 本進んだ。いずれもリリースノートは「Release 0.156.0-alpha.N」の自動生成表記のみで、変更内容は公開されていない。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

Step 2 の X 検索では、本日の公式アップデート 2 件のいずれについても、公式・リリース Bot 系を除いた個人ユーザーの実体験・感想投稿は確認できなかった。

### Codex CLI 0.155.1

該当なし。

### Codex CLI 0.156.0-alpha.9 / alpha.10

該当なし。0.156 アルファ系列への一般的な言及は散見されるが、今回の 2 バージョンやその内容に紐づく投稿ではないため除外している。

### OpenAI ステータスページ 20件のインシデント

#### ネガティブ

> 2026年9月20日時点で OpenAI の公式ステータスページに新規掲載された 20 件のインシデントを整理した記事。ChatGPT Work、Codex、SSO/SCIM、GPT-5.6 系モデル、Agent API の課金と、影響コンポーネントは広範に及ぶ。いずれもすでに解決済みだが、Agent API の過剰請求は金銭が絡むため利用者側での請求確認を促している — @picnic [OpenAI APIで20件の障害が発生、Agent API過剰請求は要確認](https://qiita.com/picnic/items/fd2261f9753de62ba324)

### Codex Astra によるゲーム制作の実地検証

#### Tips

> 「プログラミングの技術が一切ないユーザーが、指示だけでゲームを作れるか」という問いを受けて、Codex の Astra に自然言語の指示だけで Unity ゲームを作らせた検証記事 — @AllegroMoltoV [Codex の Astra に Unity ゲームを作ってもらった](https://qiita.com/AllegroMoltoV/items/d1534c2362e94b582473)

### Codex Computer Use 導入前の権限・安全設定

#### Tips

> AI エージェント専用 PC 上で Codex CLI / Claude Code を CLI 中心に使ってきた筆者が、GUI 操作を伴う Computer Use 系機能に進む前段として、Windows 版 ChatGPT を導入して権限・ブラウザ・Git・MCP・データ利用設定を一通り確認した作業メモ。いきなり PC を操作させず、先に境界を確認する手順を推している — Mai [Codex Computer Useを使う前に: Windows版ChatGPTの権限と安全設定を整理した](https://zenn.dev/imaginarygate/articles/ae81fcfc9ea62c)

## ソース

- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
