---
title: "Claude Code v2.1.261 大型更新を補完"
summary: "前回未カバーだった Claude Code v2.1.261 を取り上げます。未使用スキルのコンテキスト消費を可視化する /skill-doctor、Bash・タスク出力を最大128K文字までインライン保持する設定、大きなサブエージェント用プロンプトをファイルから読む新オプションなどが追加されました。X では /skill-doctor と出力上限設定に実体験・Tips が集まっています。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-07

features:
  - "Claude Code v2.1.261 (大型リリース)"
  - "/skill-doctor (未使用スキルとコンテキストコストの可視化)"
  - "bashOutputMaxChars / taskOutputMaxChars 設定"
  - "--append-subagent-system-prompt-file"
  - "/status・claude doctor の Organization policy 行"
  - "プロンプトの単語編集キーを Bash 準拠に変更"
  - "/context のトークン計算をローカル推定に変更"
  - "auto モードの Containment 強化 (ダイアグラムレンダラURL)"
  - "forceLoginMethod: gateway の厳格化"
  - "/model ピッカーのモデル名表示"
  - "[VS Code] MCPサーバーダイアログに Add server / Remove"
  - "[VS Code] Output styles の Build a custom style ウォークスルー"
codex_review: "派手なモデル更新ではないが、/skill-doctorや出力上限の調整は実運用の摩擦を減らす良い改善だと思う。エージェント時代のIDE品質競争が細部に移ってきた印象です。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.261

2026-09-05 04:58 (JST) にリリースされた大型アップデートです。前回レポートの対象ウィンドウから漏れていたため、本日補完します。新規追加された主なものは以下のとおりです。

**新しいスラッシュコマンド・CLI オプション**

- `/skill-doctor`: ロード済みスキルのうち使われていないものと、それぞれがコンテキストをどれだけ消費しているかを表示する。不要なスキルの整理に使う
- `--append-subagent-system-prompt-file`: コマンドラインに収まらない大きなサブエージェント用システムプロンプトを、ファイルから読み込む

**新しい設定**

- `bashOutputMaxChars` / `taskOutputMaxChars`: Bash コマンドとバックグラウンドタスクの出力を、ファイルに退避する前にインラインで Claude に渡す上限。最大 128K 文字まで引き上げられる

**表示・診断の改善**

- `/status` と `claude doctor` に「Organization policy」行を追加。組織ポリシーが読み込めなかった理由 (プロキシがエンドポイントを通していない等) を表示する
- `/model` ピッカーと VS Code のモデルピルが、Bedrock / Vertex AI / LLM ゲートウェイの生モデル ID ではなく、Claude Code が認識できる場合はモデル名を表示する

**挙動の変更**

- プロンプトの単語編集キーを Bash 準拠に変更。Ctrl+W は空白まで削除、Alt+F / Alt+D は単語末で停止、句読点が単語区切りとして扱われる。`keybindingFlavor` は無効化された
- `/context` のトークン計算を、トークン計測 API が使えないときはローカル推定に切り替え。小型モデルへの追加リクエストを発生させない
- auto モードで、公開ダイアグラムレンダラの URL にコンテンツを詰め込むリンクを「そのサイトへのアップロード」とみなすようになった。明示的に依頼していない限り自動承認されない
- 管理設定で `forceLoginMethod: "gateway"` を固定したマシンは、残存する API キーや claude.ai ログインを無視し `/login` を要求する。Bedrock / Vertex AI / Foundry のセッションは影響を受けない

**VS Code 拡張**

- MCP サーバーダイアログに Add server フォームと Remove アクションを追加。IDE を離れずに MCP サーバーを追加・削除できる
- Output styles メニューに「Build a custom style」ウォークスルーを追加。カスタム出力スタイルファイルを生成し、その場で一覧に表示する

上記のほか、入力文字の順序入れ替わり、セッション再開時のフック出力欠落、Remote Control のパーミッションモード表示のずれなど、多数の修正が含まれています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.261)

## コミュニティの反応

### /skill-doctor (未使用スキルとコンテキストコストの可視化)

本日のトピックの中で、最も反応が集まった機能です。

#### ポジティブ

> `/skill-doctor` で未使用スキルのトークンコストを可視化でき、dead weight を特定してエージェントを軽量化できた — @a1exstone [X](https://x.com/a1exstone/status/2096565024093327847)

> 地味だが実用的な改善。毎日触る人ほど嬉しい足回りの強化 — @fujirab0819 [X](https://x.com/fujirab0819/status/2096588501571846426)

> 未使用スキル検出が地味に刺さる。チーム運用前提でもソロでも恩恵がある — @yuto_lab_note [X](https://x.com/yuto_lab_note/status/2096440223546871962)

> コンテキストコストを測定できるようになり、勘ではなくデータで prune できる — @does_it_code [X](https://x.com/does_it_code/status/2095968043361046947)

#### Tips

> `/skill-doctor` を週次で定期実行し、未使用スキルや高コストスキルをメンテナンス対象として洗い出す運用 — @cu30rry_ [X](https://x.com/cu30rry_/status/2096407282657431920)

> `claude --version` で 2.1.261 以上を確認したうえで、通常タスクを一通り走らせた後に `/skill-doctor` を実行し、レポートを見て長期未使用のスキルを削除する — @River_Twain [X](https://x.com/River_Twain/status/2096494430622544298)

### bashOutputMaxChars / taskOutputMaxChars 設定

ポジティブ・ネガティブの評価投稿はなく、設定方法と注意点の共有が中心でした。

#### Tips

> 長いテスト出力がファイルに退避されるのを防ぐため、両設定を 128K まで引き上げることを推奨 — @4Ndr3w10000 [X](https://x.com/4Ndr3w10000/status/2096493099723952215)

> `~/.claude/settings.json` (またはプロジェクト内) で `bashOutputMaxChars` と `taskOutputMaxChars` を 80000 以上に設定し、2.1.261 以降でインライン出力上限を拡張する手順 — @River_Twain [X](https://x.com/River_Twain/status/2096521042160243177)

> テスト失敗の末尾が切り捨てられる問題の解決策として、128K 文字までのインライン保持を紹介 — @does_it_code [X](https://x.com/does_it_code/status/2095982586120249520)

> 128K 文字のログを扱う場合でも、まずエージェントの挙動を確認してから上限を引き上げるべき — @Liam2307 [X](https://x.com/Liam2307/status/2096194023564210624)

> bash / タスク出力の上限が 128K 文字まで拡張されたことで、長いビルドログの扱いが変わると指摘 — @oswrav [X](https://x.com/oswrav/status/2096074041320972436)

### その他のトピック

以下については、直近1週間の X 投稿から個人ユーザーの実体験・感想・Tips は確認できませんでした (公式・企業アカウントによるリリース告知は除外)。

- Claude Code v2.1.261 (リリース全体としての言及)
- `--append-subagent-system-prompt-file`
- `/status`・`claude doctor` の Organization policy 行
- プロンプトの単語編集キーの Bash 準拠化
- `/context` のトークン計算のローカル推定化
- auto モードの Containment 強化 (ダイアグラムレンダラ URL)
- `forceLoginMethod: "gateway"` の厳格化
- `/model` ピッカーのモデル名表示
- [VS Code] MCP サーバーダイアログの Add server / Remove
- [VS Code] Output styles の「Build a custom style」ウォークスルー

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.261 リリースノート](https://github.com/anthropics/claude-code/releases/tag/v2.1.261)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
