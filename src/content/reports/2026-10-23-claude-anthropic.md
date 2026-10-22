---
title: "Agent Skills標準をAAIFへ寄贈"
summary: "AnthropicがAgent Skills標準の名称・ロゴ・GitHub組織・ドメインをLinux Foundation傘下のAgentic AI Foundationへ寄贈し、ベンダー中立の運営へ移行しました。Claude Code v2.1.307ではAPIバージョン移行スキル、安全性のOpenTelemetryイベント、Code Reviewの購読停止コマンドが追加され、v2.1.308はバグ修正のみです。Xでは安全性イベントの可視化を歓迎する声が1件出ています。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-10-23

features:
  - "Agent Skills の Agentic AI Foundation への寄贈"
  - "Claude Code v2.1.307 /claude-api api-version"
  - "Claude Code v2.1.307 claude_code.safety_event OpenTelemetryイベント"
  - "Claude Code v2.1.307 Code Review @claude review stop"
  - "Claude Code v2.1.308"
codex_review: "Agent SkillsをAAIFに移すのは、MCPに続く標準化の実績として業界に効く一手だ。ただ、普及数は自己申告の勢いを示す段階で、実装間の互換性や中立運営が続くかを見て初めて本当の重みが分かる。"
codex_importance: 4
---

## 公式アップデート

### Agent Skills の Agentic AI Foundation への寄贈

2026年10月22日に、Anthropicはエージェントに専門知識やワークフローを与えるオープン標準「Agent Skills」を、Linux Foundation傘下のAgentic AI Foundation(AAIF)へ寄贈すると発表しました。AAIFはAnthropicがBlock・OpenAIと共同設立した団体で、Model Context Protocol(MCP)もすでに寄贈済みです。

- **寄贈対象**: Agent Skillsの名称とロゴ、GitHub組織、agentskills.ioドメインです。
- **運営体制**: Anthropic・Google・OpenAIなどのエンジニアが個人として標準を保守します。Lead MaintainerはDavid Soria ParraとMahesh Muragです。
- **普及状況**: 2025年12月の公開以降、ChatGPT・Cursor・GitHub Copilot・VS Codeを含む70以上のエージェントプラットフォームが採用しています。公開されたスキルは100万件、インストールは約2億8,000万件です。
- **同時発表**: Linux Foundationの発表では、同日にOpenAIのOpen Responses、Hugging FaceのOpenEnv、AlibabaのOpenSandboxもAAIFのホストプロジェクトに加わり、設立1年目で10プロジェクトになったとしています。

[ソース](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation) / [Linux Foundation プレスリリース](https://www.linuxfoundation.org/press/agentic-ai-foundation-announces-four-new-projects-agent-skills-open-responses-openenv-and-opensandbox)

### Claude Code v2.1.307

2026年10月21日に公開されました。前版v2.1.306の同日の更新で、新機能3点を含む大きめの修正版です。

#### /claude-api api-version

`/claude-api api-version` が追加されました。Claude APIを使うコードを、前日に公開されたAPIバージョン `2026-10-21` へ移行するためのスキルコマンドです。

#### claude_code.safety_event OpenTelemetryイベント

OpenTelemetryイベント `claude_code.safety_event` が追加されました。権限ルール、autoモード、安全チェック、フック、サンドボックスのいずれかがツール呼び出しを停止・確認・差し戻しするたびに送出されます。

#### Code Review @claude review stop

Code Reviewに `@claude review stop` (`off`、`pause` も可)が追加されました。`@claude review always` で設定したプルリクエストの継続レビュー購読を、新しいレビューを開始せずに終了できます。

#### その他の主な変更

- 解析できないツール呼び出しからの回復を改善し、ターンをエラーで終える前に最大2回まで呼び出しを再試行するようになりました。
- 接続が途中で閉じた際にHTTP MCPツール呼び出しが二重送信される問題を修正し、再試行は読み取り専用または冪等なツールに限定されました。
- `CLAUDE_CODE_DISABLE_1M_CONTEXT` 設定時に `opus[1m]` のような別名でmodel-not-foundになる問題、macOSでキーチェーンがロック中にMCPサーバーが「needs authentication」と表示される問題などを修正しました。
- 同時に起動したforkサブエージェントが互いの作業を始めてしまわないよう、各自の起動を伝えるようになりました。
- セルフホストランナーのcheckoutフックは既定で30分後に停止するようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.307)

### Claude Code v2.1.308

2026年10月22日に公開されました。リリースノートの記載は「バグ修正と信頼性改善」のみで、個別の変更点は列挙されていません。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.308)

## コミュニティの反応

### Agent Skills の Agentic AI Foundation への寄贈

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

(X上では個人ユーザーの実体験や感想に該当する投稿を取得できませんでした。発表当日のため、反応はこれからと見られます)

#### Zenn・Qiita

該当なし

### Claude Code v2.1.307 /claude-api api-version

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

#### Zenn・Qiita

このスキルコマンドそのものを扱った記事はありませんが、移行先であるAPIバージョン `2026-10-21` を既定で送る新SDKを検証した記事が出ています。

- [anthropic SDK 2.0 で変わったのはキーの送り方と MessageParam](https://zenn.dev/sora_endo/articles/aether-anthropic-sdk-2-0-breaks): Python SDK 1.17.0と2.0.0をAPIキーなしのモックサーバーで比較し、リリースノートの「APIバージョン `2026-10-21` 対応」の1行の裏で、キーの送り方と `MessageParam` の型が変わっている点を確認した記事(中立・検証)

### Claude Code v2.1.307 claude_code.safety_event OpenTelemetryイベント

#### ポジティブ

> Claude Codeの権限ルールやautoモードでツール呼び出しが止まった・確認された記録をOpenTelemetryで可視化できるようになり、AIに任せる範囲を調整しやすくなった点が便利 — @kaz_ku0462 [出典](https://x.com/kaz_ku0462/status/2113051083786621212)

#### ネガティブ

該当なし

#### Tips

該当なし

#### Zenn・Qiita

該当なし

### Claude Code v2.1.307 Code Review @claude review stop

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

#### Zenn・Qiita

該当なし

### Claude Code v2.1.307 その他の変更に関する周辺記事

#### Zenn・Qiita

- [Claude Codeの「tool call could not be parsed」はなぜ連鎖するのか](https://zenn.dev/devlog/articles/96c6dd5af3bcd1): 長い作業中に「The model's tool call could not be parsed (retry also failed)」が一度出ると同じ場所で止まり続ける現象を、Gitフックの色付きログが大量に流れた直後の事例から分析した記事。モデルが出したツール呼び出しの形が崩れることが原因で、コードやプロンプトの問題ではないと結論づけています。v2.1.307では解析できないツール呼び出しを最大2回再試行する改善が入っており、同じ症状を扱った記事として参考になります(ネガティブ寄り・分析)

### Claude Code v2.1.308

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

#### Zenn・Qiita

該当なし

### 全体の温度感

公式側の最大の動きはAgent Skills標準の寄贈です。MCPに続いてAnthropic発の標準がベンダー中立の運営に移り、70以上のプラットフォームが採用済みという普及規模が公式数値として示されました。コミュニティの反応は発表当日のためまだ出ていません。

Claude Code v2.1.307は、APIバージョン移行の支援、安全性イベントの可観測性、Code Reviewの購読制御という運用寄りの追加が中心です。Xでは安全性イベントのOpenTelemetry出力について、AIに任せる範囲を調整しやすくなるという好意的な受け止めが1件ありました。Zennでは新SDKの破壊的変更を実測した記事と、解析不能なツール呼び出しの連鎖を分析した記事が出ており、いずれも今回の更新内容と重なる関心です。v2.1.308は変更点の記載がなく、反応もありません。

## ソース

- [Donating Agent Skills to the Agentic AI Foundation](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation)
- [Agentic AI Foundation Announces Four New Projects](https://www.linuxfoundation.org/press/agentic-ai-foundation-announces-four-new-projects-agent-skills-open-responses-openenv-and-opensandbox)
- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
