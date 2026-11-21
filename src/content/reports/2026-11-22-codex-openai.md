---
title: "Codexサンドボックスの解説記事と性能調査の自動化"
summary: "OpenAIが、Codexサンドボックスの仕組みを解説する技術記事と、Codexエージェントで性能劣化の原因を調べる社内システム「Performance Factory」の紹介記事を公開した。CLIは0.173.0-alpha.4が出たが、変更内容は書かれていない。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-11-22

features:
  - "Inside the Codex sandbox"
  - "Performance Factory"
  - "Codex CLI 0.173.0-alpha.4"
codex_review: "サンドボックスの権限設計を表に出すのは、エージェント導入の不安を減らす地味だが重要な仕事だ。一方、Performance Factoryの1700件は運用規模の大きさを示すものの、調査の精度や人手削減効果が見えず、現時点では成功譚として少し割り引いて読みたい。"
codex_importance: 3
---

## 公式アップデート

### Inside the Codex sandbox

OpenAI が 2026-11-18 に、Codex のサンドボックスの内部構造を解説する技術記事「Inside the Codex sandbox」を公開した。権限プロファイル、ネットワーク制御、`codex sandbox --permission-profile` コマンドについて説明している。

※ 入力データに公式記事の URL がないため、ソースリンクは付けていない。

### Performance Factory

OpenAI が 2026-11-19 に、社内システム「Performance Factory」を紹介する記事「How OpenAI's Performance Factory keeps ChatGPT fast」を公開した。Codex エージェントを使い、性能が落ちた原因を自動で調べる仕組みで、3 か月で 1,700 件を超える調査を行ったという。

※ 入力データに公式記事の URL がないため、ソースリンクは付けていない。

### Codex CLI 0.173.0-alpha.4

アルファ版 0.173.0-alpha.4 が 2026-11-21 00:40 (UTC) に公開された。リリースノートは「Release 0.173.0-alpha.4」の一文だけで、変更内容は書かれていない。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.4)

## コミュニティの反応

### Inside the Codex sandbox

X では反応の数が少なく、公式記事そのものへの感想は見つからなかった。見つかったのは、コーディングエージェントを隔離環境で動かすことへの賛成意見と、サンドボックスで MCP サーバーが読み込まれない問題の回避策だけだった。Zenn には、公式記事を図で解説する記事が出ている。全体のトーンは好意的〜中立。

#### ポジティブ

> Codex などのコーディングエージェントを、ポリシーで制御された隔離コンテナで安全に動かせる「Enclave 1.0」サンドボックスを高く評価。チームで導入する前に、プラットフォームの標準にすべきだと実務者の立場から勧めている（好意的）。Codex 公式のサンドボックスではなく、別製品についての投稿 — @Christian_Tichy [出典](https://x.com/Christian_Tichy/status/2124218357666742307)

#### ネガティブ

該当なし

#### Tips

> Codex 0.169.0 以降、`--sandbox workspace-write` で動かすと MCP サーバーが読み込まれない問題を指摘。`--trust` でプロジェクトを信頼済みにすれば回避できると共有している（実践的） — @testedmcp [出典](https://x.com/testedmcp/status/2124220725410050107)

> 公式記事「Inside the Codex sandbox」を、サンドボックスとは何かという基本から図で解説している。AI が重要なファイルを書き換えたり、機密情報を外に送ったりするリスクを抑える仕組みとして紹介している（中立・解説） — [Codexのサンドボックス内部構造を図で読み解く (Zenn)](https://zenn.dev/mspal/articles/9c5914ca8108da)

### Performance Factory

X では、個人の感想や体験の投稿は見つからなかった。Zenn では、ニュースまとめ記事の 1 本として取り上げられている。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> Performance Factory の流れを、性能低下の通知、調査、修正案、人による確認、配備後の再検証まで、状態を持って進める仕組みとしてまとめている。修正後に本当に元へ戻ったかを別の実行で確かめるところまで含めると、もう単発の対話ではない、として、人が途中で入る仕組みをどう設計するかを問いかけている（中立・考察）。AI が書き、AI がレビューした記事だと明記されている — [Tech Watch 2026-11-20: エージェント運用の境界 (Zenn)](https://zenn.dev/laiken/articles/20261120-tech-watch)

### Codex CLI 0.173.0-alpha.4

該当なし

## ソース

- [Codex Releases](https://github.com/openai/codex/releases)
- [rust-v0.173.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.4)
- [Codexのサンドボックス内部構造を図で読み解く (Zenn)](https://zenn.dev/mspal/articles/9c5914ca8108da)
- [Tech Watch 2026-11-20: エージェント運用の境界 (Zenn)](https://zenn.dev/laiken/articles/20261120-tech-watch)
