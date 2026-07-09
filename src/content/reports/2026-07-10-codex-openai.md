---
title: "Codex CLI 0.144.0、writes承認モードとクレジット選択を追加"
summary: "Codex CLIが0.144.0に更新。書き込み時のみ承認を求めるwrites承認モード、使用上限リセットクレジットの種類・有効期限表示と選択、MCPツールの対話的認証の既定化などを含む。writesモードとクレジット可視化には個人ユーザーからの好意的な反応が出ている。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-07-10

features:
  - "Codex CLI 0.144.0 リリース"
  - "Codex writes 承認モード"
  - "Codex 使用上限リセットクレジットの選択"
  - "Codex MCPツールの対話的認証を既定化"
  - "Codex app-serverのランタイム認証・ホスト型ログインリダイレクト"
  - "Codex pnpmグローバルインストール検出"
  - "Codex Ultra推論の高並列使用量警告"
codex_review: "派手さはないが、CLIが実運用の摩擦を潰す段階に入った感じがして好印象です。とくにwrites承認とクレジット可視化は地味に重要で、競合系ツールより現場感覚が一歩進んでいる。"
codex_importance: 3
---

## 公式アップデート

前回の 0.143.0 安定版に続き、rust-v0.144.0 が公開されました (執筆時点で 0.145.0-alpha.1 も出ています)。以下は 0.144.0 の新機能です。

### Codex writes 承認モード

宣言済みの読み取り専用アクションは許可しつつ、書き込み時のみ承認を求める新しい app-approval モード `writes` を追加。(#30482)

[ソース](https://github.com/openai/codex/pull/30482)

### Codex 使用上限リセットクレジットの選択

使用上限のリセットクレジットについて、種類と有効期限を表示し、どのクレジットを消化するかを選択できるようになりました。(#30488)

[ソース](https://github.com/openai/codex/pull/30488)

### Codex MCPツールの対話的認証を既定化

MCP ツールが、experimental オプトインなしで対話的に認証を要求できるようになりました。(#28772)

[ソース](https://github.com/openai/codex/pull/28772)

### Codex app-serverのランタイム認証・ホスト型ログインリダイレクト

App-server ホストが実行時に Codex 認証を提供し、ログイン成功をホスト型ページへリダイレクトできるようになりました。(#28745, #31274)

[ソース](https://github.com/openai/codex/pull/28745)

### Codex pnpmグローバルインストール検出

pnpm でグローバル管理されている Codex インストールを検出し、診断・更新が正しいパッケージマネージャを使うようになりました。(#31503)

[ソース](https://github.com/openai/codex/pull/31503)

### Codex Ultra推論の高並列使用量警告

Ultra 推論を選択した際に、マルチエージェントの高並列実行によって使用量が急増しうる旨を警告するようになりました。(#31621)

[ソース](https://github.com/openai/codex/pull/31621)

## コミュニティの反応

### Codex CLI 0.144.0 リリース

#### ポジティブ

> Codex CLI 0.144.0 に更新できて嬉しい。 — @LuisHerry1022 [出典](https://x.com/LuisHerry1022/status/2075279796398100616)

#### ネガティブ

> Codex CLI が 0.144.0 の更新可用性を表示しない。ダウンロードが遅いのか、結局 `npm i -g @openai/codex` で手動更新した。 — @ExtinctionBurst [出典](https://x.com/ExtinctionBurst/status/2075317033424576848)

> macOS では 5.6-sol、同一アカウント・同一 v0.144.0 の Linux では 5.5 になる。このロールアウトはどう動いているのか。 — @paulpitchford [出典](https://x.com/paulpitchford/status/2075290589592273250)

#### Tips

> この問題は Codex CLI を Homebrew 経由ではなく curl 経由でインストールし直したら直った。 — @thirdlf1 [出典](https://x.com/thirdlf1/status/2075332404546543663)

### Codex writes 承認モード

#### ポジティブ

> `/permissions` を「Approve for me」から「Ask for approval」に切り替えたら、トークン/レート消費が体感で大幅に減り、`/review` をより多く回せるようになった。 — @haruki_ai_k [出典](https://x.com/haruki_ai_k/status/2075196711342149954)

#### ネガティブ

> 「Approve for me」有効時でも sandbox 破壊コマンドを試行して「permission を求める」と言い、Codex が sandbox/permission を正しく認識できていない。 — @LukasDonkers [出典](https://x.com/LukasDonkers/status/2073830387554328969)

> 承認をバイパスする `--yolo` / `--dangerously-bypass-approvals-and-sandbox` が必要になる場面があり、動的に判断する auto モードのような柔軟性が欲しい。 — @patricedouge [出典](https://x.com/patricedouge/status/2074218658025664704)

#### Tips

> Codex と Claude で独立レビュー → 合議してから承認を求める流れが、プランモードの見落とし防止に有効。 — @suzuki_x777 [出典](https://x.com/suzuki_x777/status/2074086982050075027)

### Codex 使用上限リセットクレジットの選択

#### ポジティブ

> プロンプトを渡すだけでリセットクレジットの有効期限を簡単に確認でき、具体的な日付がすぐ分かって便利。 — @LukeberryPi [出典](https://x.com/LukeberryPi/status/2074150634886943109)

> Limit Reset Credits の残数と次回有効期限が表示されるようになり、デフォルト UI にない情報が得られて非常に有用。 — @AmoremWeb [出典](https://x.com/AmoremWeb/status/2073698272749797490)

> リセットクレジットの有効期限を Codex に聞くだけで把握でき、個人ごとの期限差も実感して管理しやすくなった。 — @ishinabegen [出典](https://x.com/ishinabegen/status/2072964209235620091)

#### Tips

> `~/.codex/auth.json` からトークンを読み、`/backend-api/wham/rate-limit-reset-credits` エンドポイントを叩いて `credits[]` の `expires_at`/`status` を取得するプロンプト例。 — @aienginerd [出典](https://x.com/aienginerd/status/2073087751621067129)

> Codex に「`~/.codex/auth.json` を読み、rate-limit-reset-credits エンドポイントで利用可能クレジットと有効期限をローカル時間で表示」と指示するだけで即確認可能。 — @ssbrouhard [出典](https://x.com/ssbrouhard/status/2072917478427004980)

### Codex MCPツールの対話的認証を既定化 / app-serverのランタイム認証 / pnpm検出 / Ultra推論の高並列使用量警告

該当なし (直近1週間で個人ユーザーの実体験投稿は確認できず)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
