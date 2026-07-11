---
title: "Claude Code v2.1.207公開、Auto mode／Opus 4.8既定化とシェルインジェクション修正"
summary: "Claude Code v2.1.207（2026-07-11）がリリース。Bedrock/Vertex AI/FoundryでのAuto modeがopt-in不要になり、Bedrock/Vertex/Claude Platform on AWSの既定がOpus 4.8に。プラグインのシェルインジェクション修正やclaude -p/SDKのセキュリティ同意不具合修正などセキュリティ寄りの更新が中心。あわせてAnthropicがClaude Corps・Project Deal・Recursive Self-Improvementレポートを公開した。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-12

features:
  - "Claude Code v2.1.207公開"
  - "Auto modeがBedrock/Vertex AI/Foundryでopt-in不要に"
  - "Bedrock/Vertex/Claude Platform on AWSが既定でOpus 4.8に"
  - "プラグインのシェルインジェクション修正"
  - "非対話実行のセキュリティ同意不具合を修正"
  - "/usage-credits金額入力の厳格化"
  - "Deep researchのFetchフェーズのエージェント表示を修正"
  - "Anthropic Claude Corps発表"
  - "Anthropic Project Deal公開"
  - "Anthropic Institute Recursive Self-Improvementレポート公開"
codex_review: "機能追加よりも既定値の変更と安全性の穴埋めが主役で、派手さは薄いが実務ではかなり重要な更新だと見ます。Auto mode常態化とOpus 4.8既定化は利便性の裏で運用の雑さも増幅しそうで、やや過剰に前のめりです。"
codex_importance: 4
---

## 公式アップデート

前回レポート時点の最新は **v2.1.206**（2026-07-10）でしたが、その後 **v2.1.207**（2026-07-11）がリリースされました。設定の既定挙動が変わる破壊的変更とセキュリティ修正が中心の更新です。以下は本日新規の差分です。

### Claude Code v2.1.207

設定・既定挙動の変更（破壊的変更を含む）:

- **Auto modeがBedrock/Vertex AI/Foundryでopt-in不要に**: `CLAUDE_CODE_ENABLE_AUTO_MODE` の設定なしでAuto modeが有効化されるようになった。無効化は設定の `disableAutoMode` で行う。
- **Auto modeが `settings.local.json` の `autoMode` を読まなくなった**: リポジトリ同梱の `.claude/settings.local.json` からは読み込まず、`~/.claude/settings.json` を使うよう変更した。
- **Bedrock/Vertex/Claude Platform on AWSが既定でClaude Opus 4.8に変更**: これらのプロバイダのデフォルトモデルをOpus 4.8にした。
- **プラグインの `pluginConfigs` をプロジェクト設定から読まなくなった**: `.claude/settings.json`（プロジェクトレベル）からは読まず、ユーザー設定・`--settings`・managed settingsのみを honor するようにした。

セキュリティ修正:

- **プラグインのシェルインジェクション修正**: hooks/monitors/headersHelper のシェル形式コマンドで `${user_config.*}` を拒否するようにした。hooksはexec形式（`args` 配列）または `$CLAUDE_PLUGIN_OPTION_<KEY>` を、monitors/headersHelperはスクリプト内での値読み取りを使う。
- **非対話実行のセキュリティ同意不具合を修正**: `claude -p`／SDKでのリモート管理設定が、セキュリティ同意ダイアログを一度も表示しないまま「同意済み」として恒久記録される問題を修正した。
- **`/usage-credits` 金額入力の厳格化**: 不正な金額（貼り付けたタイムスタンプ等）を桁だけ残して黙って処理する挙動を改め、不正な金額はエラーで拒否。$1,000超の金額は入力による確認を必須化した。

主な不具合修正:

- **Deep researchのFetchフェーズのエージェント表示を修正**: 全て "unknown" とラベルされていたFetchフェーズのエージェントが、ソースのホスト名を表示するようにした。
- **プロンプトインジェクション誤検知の修正**: 良性のシステム生成会話更新によって発生していた誤ったprompt-injection警告を修正した。
- **長い出力ストリーミング時のフリーズ修正**: 非常に長いリスト・表・段落・コードブロックを含む応答のストリーミング中に、端末がフリーズしキー入力が遅延する問題を修正した。
- **Bedrock**: SSO資格情報をAPIリクエストごとに繰り返し要求する問題、Windowsでの資格情報解決が停止した際の無期限ハングを修正した。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.207)

### Anthropicの発表・研究

Claude Code本体とは別に、本日以下のAnthropic関連の発表・研究が確認されました。

- **Claude Corps 発表**: CodePath／Social Financeと連携し、非営利団体にAI人材を1年間フル出向させるフェローシップ・プログラム。全額出資で19団体が参加予定（応募締切7/17、開始10月予定）。
- **Project Deal 公開**: Claudeエージェント同士に69名分の実取引を代行させ、186件・$4,000超を成立させた研究実験。上位モデル（Opus）がユーザーの非認識のまま有利な条件を獲得した事例が報告された。
- **Recursive Self-Improvement レポート公開（Anthropic Institute）**: AIが自身の開発を加速している現状を報告。Claudeが本番コードの80%超を執筆、最適化タスクで約52倍の高速化などの数値を示した。

## コミュニティの反応

> 本日抽出した機能のうち、X検索で個人ユーザーの実体験・感想がヒットしたのは「Auto modeのopt-in不要化」「Bedrock/Vertex等のOpus 4.8既定化（Claude Code全体のOpus 4.8体験を含む）」「Recursive Self-Improvementレポート（トークン削減ツール周辺）」に限られます。「v2.1.207全体」「プラグインのシェルインジェクション修正」「非対話実行のセキュリティ同意修正」「/usage-credits厳格化」「Deep researchのFetch表示修正」「Claude Corps」「Project Deal」は、直近1週間で個人の実体験投稿を確認できませんでした（リリースが7/11と非常に新しく、changelog転載が中心）。

### Claude Code v2.1.207 公開

Xの個人投稿は該当なし。一方、Qiitaでは破壊的変更をまとめた解説記事が公開されています。

#### Tips

> Claude Code v2.1.207の破壊的変更まとめ：Auto mode既定化とプラグインのシェル対策。Bedrock/Vertex AI環境で設定の挙動が変わる点を3点に整理。 — Qiita @picnic [記事](https://qiita.com/picnic/items/d1ac24b797423941d494)

### Auto modeがBedrock/Vertex AI/Foundryでopt-in不要に

#### ポジティブ

> Claude CodeのAuto modeを本格的に使い始め、permission promptの煩わしさから解放されてend-to-endで作業が進むようになった。 — @Chicky_Think [X](https://x.com/Chicky_Think/status/2075513026686644661)

> クラウド環境でClaude Codeを使う際の環境変数設定（`CLAUDE_CODE_ENABLE_AUTO_MODE`）が不要になり、手間が大幅に減った。 — @aria_ai_tools [X](https://x.com/aria_ai_tools/status/2075929861932372302)

#### Tips

> 小規模チームではAuto modeの標準化により運用が楽になる一方、`settings.local.json` から `autoMode` 設定が読めなくなった点に注意が必要。 — @ebisuke20260503 [X](https://x.com/ebisuke20260503/status/2075790600268345615)

### Bedrock/Vertex/Claude Platform on AWSが既定でOpus 4.8に

#### ポジティブ

> Opus 4.8 on Claude Code、いっときは異常なほど遅くてアホになってましたが、なんか大分戻ってますね。Fableに人が分散したせいかな？ — @minorun365 [X](https://x.com/minorun365/status/2075779633455517851)

#### ネガティブ

> The Claude Opus 4.8 experience: 300+ words to say, "This variable is misnamed."（一言で済む指摘に冗長すぎる） — @devinjameson [X](https://x.com/devinjameson/status/2073579743325159730)

> セキュリティ問題について尋ねた後にClaude CLIがOpus 4.8へ切り替わり、その後は修正を拒否した。 — @EgerDev [X](https://x.com/EgerDev/status/2074175749628829920)

### プラグインのシェルインジェクション修正

該当なし

### 非対話実行のセキュリティ同意不具合を修正

該当なし

### /usage-credits金額入力の厳格化

該当なし

### Deep researchのFetchフェーズのエージェント表示を修正

該当なし

### Anthropic Claude Corps発表

該当なし（発表・募集情報の共有や制度への意見は散見されるが、プログラムが開始前のため実体験投稿は確認できず）

### Anthropic Project Deal公開

該当なし（公式・企業宣伝・一般論を除くと、個人ユーザーの実体験投稿は確認できず）

### Anthropic Institute Recursive Self-Improvementレポート公開

レポート自体への直接言及は少なく、関連するトークン削減・自己改善ループの実践報告を拾いました。

#### ポジティブ

> Claude Codeで大規模リポジトリを扱う際のトークン消費問題をGraphifyで解決し、grepの無駄を大幅に減らして実用的に活用している。 — @nikskld [X](https://x.com/nikskld/status/2075926846969938029)

> Claude Codeのシェル出力圧縮ツールRTKを導入し、初日で14.2万トークン節約できた。 — @emilsystems [X](https://x.com/emilsystems/status/2075958992799445355)

#### Tips

> Claude Code向けに3つの無料OSSツール（omniroute, headroom, ponytail）を入れてトークン使用量を80%削減する手順を紹介。 — @CDGalpha [X](https://x.com/CDGalpha/status/2075938662622367783)

> `CLAUDE.md` にClaude Codeのミスを永続記憶させ、自己改善ループを構築する運用例。 — @NainsiDwiv50980 [X](https://x.com/NainsiDwiv50980/status/2074768300626575459)

### コミュニティ記事から（本日の周辺トピック）

本日の新機能に直接紐づかないものの、コミュニティで注目を集めた関連記事:

> 「攻撃を検出しました」報告の信頼性を検証。Opus 4.8セッションが存在しない脅威を9ヶ月で8件"検出"した作話疑いの事例を分析。 — Zenn @ryuka [記事](https://zenn.dev/ryuka_lucas/articles/claude-code-confabulation)

> `npm install` 1回で攻撃者プロキシがMCP通信に割り込む乗っ取り攻撃を、80行のPythonで検知する社内スキャナーを公開。 — Zenn @Shown [記事](https://zenn.dev/shown06/articles/d4f7529a351590)

## ソース

- [GitHub - Claude Code Releases (v2.1.207)](https://github.com/anthropics/claude-code/releases/tag/v2.1.207)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
