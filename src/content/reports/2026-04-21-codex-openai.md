---
title: "Codex CLI 0.123.0-alpha.1開始、0.122.0の全容が明らかに"
summary: "Codex CLI v0.123.0-alpha.1がリリースされ次期バージョンの開発サイクルが始動。v0.122.0の詳細リリースノートが公開され、/side会話・Plan Mode・プラグインマーケットプレイス強化など大型機能群の全容が判明。GPT Rosalindへの反響は継続。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-21
features:
  - "Codex CLI v0.122.0"
  - "Codex CLI v0.123.0-alpha.1"
  - "GPT Rosalind"
  - "ChatGPT Lockdown Mode"
codex_review: "Codex CLIは派手な新モデル競争より、実運用の詰めを前に進めている点が面白い。とくに権限管理とPlan Mode周りは地味だが重要で、過熱気味のエージェント市場ではこういう改善のほうが長く効く。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI v0.123.0-alpha.1

v0.123.0系の最初のアルファリリースが4月20日に公開された。Rust実装の次期バージョン開発サイクルが始動。詳細なリリースノートは未公開で「Release 0.123.0-alpha.1」とのみ記載。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.123.0-alpha.1)

### Codex CLI v0.122.0 正式リリースノート公開（前回から継続・詳細追加）

4月20日付でv0.122.0の詳細なリリースノートが公開された。前回報告時点では個別alpha差分のみだったが、今回まとまった変更履歴が確認できた。主な新機能は以下の通り:

- **`/side`会話**: TUIから作業中にサイドの質問を開ける。キューイング入力でスラッシュコマンドや`!`シェルプロンプトも対応
- **Plan Mode強化**: 計画後に新しいコンテキストで実装を開始可能。コンテキスト使用量を確認してからスレッド継続を判断できる
- **プラグインマーケットプレイス**: タブブラウジング、インラインの有効/無効切り替え、マーケットプレイス削除、リモート・クロスリポ・ローカルのマーケットプレイスソースに対応
- **ファイルシステム権限**: deny-read globポリシー、マネージドdeny-read要件、プラットフォームサンドボックス強制、`codex exec`のユーザー設定無視モード
- **画像生成・ツール探索**: デフォルトで有効化。MCPおよび`js_repl`画像出力のoriginal-detailメタデータ対応
- **スタンドアロンインストーラー改善**: より自己完結的に。`codex app`がWindows・Intel Macで正しくDesktopを開く/インストールする

バグ修正では、app-server承認の古いプロンプト残留問題の解消、セキュリティフロー強化（ログアウト時のChatGPTトークン失効、信頼ワークスペース要件）、TUIの各種修正（スキルリスト障害、重複ステータスライン、`/model`メニューループ等）が含まれる。

内部構造面では、プラグイン/マーケットプレイスコードを`codex-core-plugins`に分離、config読み込みと`AGENTS.md`探索のリファクタリング、Bazel/CIの安定化が実施された。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.122.0)

### GPT Rosalind（前回から継続）

OpenAIが発表した生命科学・創薬・翻訳医学向けフロンティア推論モデル。本日の新たな公式発表はなし。

[ソース](https://openai.com/index/introducing-gpt-rosalind/)

### ChatGPT Lockdown Mode

ChatGPTにロックダウンモードと高リスクラベル機能が導入された。Step 1で抽出されたトピックだが、公式の詳細情報は限定的。

## コミュニティの反応

### Codex CLI v0.122.0

#### ポジティブ

> Codex CLIを使って画像生成によるキャラシート生成エージェントを実装、なかなか良い結果 — @old_pgmrs_will [X](https://x.com/i/status/2045897925226909806)

> 複数VPSサーバーにCodex CLIをインストールしてiPhoneから管理、lock in必須 — @DavidOndrej1 [X](https://x.com/i/status/2045861325704765841)

> Codex大型アップデートTLDR: background computer use、90+ plugins、image gen、Plan Modeなど — @realsigridjin [X](https://x.com/i/status/2044829511439847492)

#### Tips

> Codex CLIに「Xを教えて」と指示すればshell最適化や自作スキル作成などalpha満載 — @TheAhmadOsman [X](https://x.com/i/status/2046008595116962106)

#### ネガティブ

> Codex CLIで画像生成記録をGithub共有しようとしたら想像以上に重労働 — @TK2Works [X](https://x.com/i/status/2045977169588109779)

### Codex CLI v0.123.0-alpha.1

該当なし。過去7日間でこのバージョンに関する個人ユーザーの反応は見つからなかった。

### GPT Rosalind（前回から継続）

#### ポジティブ

> OpenAIの新モデルGPT-Rosalindを生物学研究、創薬、翻訳医学向けとして紹介し、高いエンゲージメント — @AndrewCurran_ [X](https://x.com/i/status/2044860779820990936)

> GPT-Rosalindを生物学向けとして「これはエキサイティング!!」と興奮の声 — @NeuroAI_Nexus [X](https://x.com/i/status/2044952721891946885)

> 製薬特化AI競争の加速と位置づけ、創薬プロセス変革をポジティブに評価 — @keita_masui [X](https://x.com/i/status/2045072307408773384)

> GPT-Rosalindが薬開発の初期研究段階を加速し、長期的な影響大と分析 — @juliussland [X](https://x.com/i/status/2045028676677537855)

#### Tips

> GPT-Rosalindが創薬パイプライン（10-15年）を短縮、蛋白質・化学推論・ゲノム解析に特化 — @WesRoth [X](https://x.com/i/status/2044898630084309386)

### ChatGPT Lockdown Mode

該当なし。過去7日間で条件を満たす個人ユーザーの投稿は見つからなかった。

### Codex CLIのstatusline設定（前回から継続）

#### Tips

> codex-cliを0.121.0に上げた後、Context使用率パーセントが非表示になった問題に対し、`/statusline`コマンドで復元する方法を解説 — hjpotter1 [Zenn](https://zenn.dev/hjpotter1/articles/4092620fa7b21d)

### AGENTS.md（前回から継続）

#### ポジティブ

> AGENTS.mdを「機械向けの就業規則」と位置づけ、Codex・Cursor 3・Claude Codeが対応する流れを整理 — 横井のAI日和 [Zenn](https://zenn.dev/yokoi_ai/articles/ai-2026-04-17)

### Codex × Claude Code 連携プラグイン（前回から継続）

#### Tips

> OpenAI公式のcodex-plugin-ccの使い方と競合共存の読み解き — zenchaine [Zenn](https://zenn.dev/zenchaine/articles/codex-plugin-for-claude-code)

> Claude CodeからCodexを呼び出す3つの方法（CLIモード vs ASPモード）を整理 — ぼくのログ [Zenn](https://zenn.dev/bokuno_log/articles/claude-code-codex-call-methods)

### Codex 日本語出力の改善（前回から継続）

#### Tips

> AGENTS.mdに「日本語で返してくれ」と書いても直訳調が戻る問題に対し、「ずんだもん」キャラ設定でトーン制御に成功した事例を共有 — そら [Zenn](https://zenn.dev/sora_biz/articles/codex-jp-harness-milestone)

### Claude Code不安定時の代替としてのCodex CLI

#### Tips

> Claude Codeが不安定な場合の現実的な代替手段としてCodex CLIのWindows完全ガイドを公開 — xujfcn [Qiita](https://qiita.com/xujfcn/items/a23351d56ce276030628)

### OpenAI Agents SDK

#### Tips

> OpenAI Agents SDKの完全入門ガイド。Agent・Tool・Handoff・Guardrailの基本概念からコード例まで解説 — agdexai [Qiita](https://qiita.com/agdexai/items/67f2c1f06b28410ab8b9)

### AIコーディングツールの変遷

#### ポジティブ

> AIコーディングツールを1年半乗り換えまくった結果、「補完」から「自律エージェント」への変遷を俯瞰。エージェント経済の入口にいると実感 — 小原 [Zenn](https://zenn.dev/komlock_lab/articles/ai-agent-economy-history-2026)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
