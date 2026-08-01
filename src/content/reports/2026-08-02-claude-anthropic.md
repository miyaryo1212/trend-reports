---
title: "公式更新なし、コミュニティはMCPステートレス化とSkill設計に注目"
summary: "本日のClaude Code公式リリースはなし（最新は既報のv2.1.220）。コミュニティでは7/28のMCPステートレス化アップデート解説、Agent Skillの書き方、Claude 5世代の『ルールを削る』コンテキスト設計をめぐる記事が目立った。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-08-02

features: []
codex_review: "公式更新がない日の空気としてはかなり健全で、MCPのステートレス化とSkill設計に関心が集まるのは業界の重心が“モデル性能”から“運用設計”へ移っている証拠だと思う。派手さはないが、後から効いてくるタイプの論点だ。"
codex_importance: 3
---

## 公式アップデート

**Claude Code の新規リリースは本日ありません。**

GitHub Releases 上の最新は既報の **Claude Code v2.1.220**（2026-07-25、バグ修正・安定性改善のみ）で、Opus 5 の追加（v2.1.219）とあわせて前回までに詳述済みのため再掲しません。Anthropic 公式ブログ・Changelog にも本日付の新規発表は確認できませんでした。

以下は本日（2026-08-02）時点で観測された、コミュニティ側の反応・話題に焦点を当てます。

## コミュニティの反応

### MCP 2026-07-28 アップデート（ステートレス化）

7/28 に Claude へ取り込まれた MCP 仕様アップデートの解説記事が上位に来ていました。リモートプロトコル登場以来もっとも大きな変更と位置づけ、目玉を「ステートレス化」と整理しています。

#### Tips

> Anthropic「Bringing MCP 2026-07-28 to Claude」と MCP 公式仕様をもとに、ステートレス化で何が変わり開発者が何をできるようになったかを整理。既存サーバーへの影響にも触れている。 — Zenn / JJ yamitake [MCP 2026-07-28アップデート徹底解説](https://zenn.dev/yamitake/articles/mcp-2026-07-28-stateless-core-update)

### Agent Skill / サブエージェント設計

Skill（SKILL.md）の書き方と、増えたスキルの運用に関する実践記事が複数出ています。

#### Tips

> Anthropic の Skill authoring best practices を土台に、「使ってほしい場面で呼ばれる／関係ない場面で暴発しない」ための経験則を前半＝公式・後半＝実践で整理。 — Zenn / Itsuki Inoue [Agent Skillのおすすめの作り方](https://zenn.dev/inoway/articles/b-agent-skill-authoring)

> スキルが増えたら Slack 起点の読み取り専用「受付AIチーム」で一次トリアージし、どのスキルに渡すか提案させる設計。テンプレートを全公開。 — Qiita / TakanobuSano [スキルが増えたら「入口」を作る](https://qiita.com/TakanobuSano/items/55001f7ae647fc7df232)

### Claude 5 世代のコンテキスト設計（「足す」より「削る」）

Anthropic のコンテキスト設計新ルールを受け、CLAUDE.md やルールの棚卸しを試す記事が続いています。

#### ポジティブ

> Anthropic が「システムプロンプトを8割以上消しても性能は落ちなかった」と公表した件を起点に、自作ルールを本体指示と照合して「残す・直す・退役」を判定する手順を提示。 — Zenn / Tatsuya Shimomoto [Opus 5 世代でルールの書き方は公式に変わった](https://zenn.dev/shimo4228/articles/claude5-rules-official-shift-audit)

#### ネガティブ / 問題提起

> 公式の「8割消えた」に食いつき、自分の ~/.claude（12ファイル・CLAUDE.md 84行）をダイエットしたが結局リバウンドした、という実測レポート。削減が一律には効かないことを示す。 — Zenn / ganko-c [Opus 5 時代の CLAUDE.md ダイエット、結果はリバウンド](https://zenn.dev/iroha_labs/articles/fdc172366f8f02)

### dynamic workflows / エージェント設計

#### Tips

> 「エージェントをチェーン（一直線）ではなくグラフとして設計する」という海外長文記事を、Claude Code の dynamic workflows を実装例に一次情報で裏取りしながら読み解く。 — Zenn / すみと黒（猫） [AIエージェントを「行列」で作るのをやめる](https://zenn.dev/akimitu_666/articles/agent-graph-not-chain)

### Claude Code 運用 Tips

#### Tips

> 公式ドキュメントのない Claude Code CLI の隠しテーマ機能を、`grep -a` とバイナリ解析だけで解明した記録。入力欄の背景色変更を出発点にしている。 — Qiita / devex12 [公式ドキュメントゼロ。Claude Codeの秘密テーマ機能を解明した話](https://qiita.com/devex12/items/6d5dab6ec0613afa0c43)

> v2.1.205 で守備範囲が広がった `/doctor` に、スキル・プラグインの使用実績と常駐トークンを突き合わせさせ、「残す・消す」を理由つきで棚卸しさせる活用法。 — Zenn / Masuyama（とまだ） [Claude Codeの/doctorにスキルとプラグインの棚卸しを任せる](https://zenn.dev/tmasuyama1114/articles/claude_code_doctor_checkup)

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Anthropic Research](https://www.anthropic.com/research)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
