---
title: "Codex CLI v0.128.0メジャーリリース、/goalワークフローやプラグインマーケットプレイス追加"
summary: "Codex CLI v0.128.0で/goalワークフロー永続化、プラグインマーケットプレイス、パーミッションプロファイル拡張、MultiAgentV2強化など多数の新機能が追加。--full-autoが非推奨化され明示的権限管理へ移行。v0.129.0-alpha.1も公開。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-01
features:
  - "Codex CLI v0.128.0"
  - "Codex CLI パーミッションプロファイル拡張"
  - "Codex CLI プラグインマーケットプレイス"
  - "Codex CLI MultiAgentV2設定強化"
  - "Codex CLI 外部エージェントセッションインポート"
  - "Codex CLI --full-auto非推奨化"
  - "Codex CLI v0.129.0-alpha.1"
  - "OpenAI Docsスキル更新"
  - "Bedrock GPT-5.4対応修正"
  - "codex-app-serverリリースアーティファクト公開"
codex_review: "派手なのはマーケットプレイスだが、私には`--full-auto`後退より権限設計を前面化した判断のほうがずっと重要に見える。CLIが実験玩具から運用系ツールへ一段進んだ節目だ。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI v0.128.0

v0.125.0からv0.128.0へのメジャーリリース。多数の新機能・バグ修正・ドキュメント更新を含む。

**新機能:**

- **/goalワークフロー永続化**: app-server APIとモデルツールによる永続的な`/goal`ワークフローを追加。TUIからcreate/pause/resume/clearが可能に（[#18073](https://github.com/openai/codex/pull/18073)他）
- **codex updateコマンド・TUIカスタマイズ**: `codex update`コマンド、設定可能なTUIキーマップ、プランモードナッジ、アクション要求時のターミナルタイトル変更、アクティブターン中の`/statusline`・`/title`編集を追加（[#19933](https://github.com/openai/codex/pull/19933)他）
- **パーミッションプロファイル拡張**: ビルトインデフォルト、サンドボックスCLIプロファイル選択、cwd制御、アクティブプロファイルメタデータをクライアントに公開（[#19900](https://github.com/openai/codex/pull/19900)他）
- **プラグインマーケットプレイス**: マーケットプレイスからのインストール、リモートバンドルキャッシュ、リモートアンインストール、プラグインバンドルフック、フック有効化状態管理、外部エージェント設定インポートに対応（[#18704](https://github.com/openai/codex/pull/18704)他）
- **外部エージェントセッションインポート**: バックグラウンドインポートとインポートセッションのタイトル処理（[#19895](https://github.com/openai/codex/pull/19895)他）
- **MultiAgentV2設定強化**: スレッド上限、待機時間制御、ルート/サブエージェントヒント、v2固有の深度ハンドリング（[#19360](https://github.com/openai/codex/pull/19360)他）

**バグ修正:**

- レジューム・割り込み関連のハング修正、プロバイダ復元、大容量リモートレジュームレスポンス対応
- TUI信頼性向上（ターミナルリサイズ、Markdownリスト間隔、スラッシュコマンドポップアップ等）
- マネージドネットワーク動作の強化（遅延拒否、プロキシバイパス、IPv6対応等）
- Windowsサンドボックス・PTYのエッジケース修正
- Bedrock `apply_patch`修正、GPT-5.4推論レベル・エンドポイント修正
- MCP/プラグインのstdioサーバクリーンアップ、承認永続化修正

**ドキュメント:**

- OpenAI DocsスキルをGPT-5.5・`gpt-image-2`対応に更新
- `codex-core`パブリックAPI一覧とThreadManagerサンプルクレートを追加

**その他:**

- `--full-auto`を非推奨化。明示的パーミッションプロファイルとトラストフローへの移行を推奨（[#20133](https://github.com/openai/codex/pull/20133)）
- `codex-app-server`リリースアーティファクト公開、Python app-server SDKのCodexピンバージョニング追加
- GNU Linuxバイナリの公開を停止

[Changelog: rust-v0.125.0...rust-v0.128.0](https://github.com/openai/codex/compare/rust-v0.125.0...rust-v0.128.0) / [リリースページ](https://github.com/openai/codex/releases/tag/rust-v0.128.0)

### Codex CLI v0.129.0-alpha.1

4月30日にv0.129.0-alpha.1が公開。リリースノートは「Release 0.129.0-alpha.1」のみで詳細は未公開。

[v0.129.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.1)

## コミュニティの反応

### プラグインマーケットプレイス・Hooks

#### ポジティブ

> Codex HooksがGA、Marketplaceに50以上のhooks追加。ファイル編集時にスクリプト実行可能で大解禁 — @LLMJunky [X](https://x.com/i/status/2047539774706061543)

> Codex plugins（Linear, Slack, GitHub, Google Drive, Gmail）でコーディングエージェントがdev team OS化 — @zaimiri [X](https://x.com/i/status/2048673610450321915)

> EvoSkill V1でCodex CLI使用、ベンチマーク性能向上（OfficeQA 60.6%→68.1%など） — @PreyWebthree [X](https://x.com/i/status/2049590788150149340)

#### Tips

> Obsidian skillsをCodex CLIで使用可能。マーケットプレイスからnpx skills addでインストール、Obsidian Flavored Markdownなど5 skills搭載 — @bigaiguy [X](https://x.com/i/status/2049452001592025415)

> Claude Code/Codex CLIのPermission RequestをHookで自動化ツール作成、97%自動allow/denyで最高効率 — @tak848_ [X](https://x.com/i/status/2049058280555884914)

### パーミッションプロファイル・--full-auto非推奨化

#### ポジティブ

> Codex 0.125.0アップデートでpermission profilesがTUIセッション、MCP sandbox、shell escalationなどで一貫して扱われ、権限管理が安定化。長時間作業時の許可制御が改善 — @KoichiNishizuka [X](https://x.com/i/status/2047837130500768254)

> Codexの4段階承認モードなど自律実装装備を絶賛、自走実装に最適 — @nobel_824 [X](https://x.com/i/status/2048567730371256427)

> CLI版にFull Access機能追加で助かるが、面倒でつい使ってしまう — @hajime2ai [X](https://x.com/i/status/2049525061615513954)

#### Tips

> config.tomlでsandbox/approval profilesを定義し、zsh wrapperでセッション起動前にtrust levelを選択するQoL改善 — @JessePeplinski [X](https://x.com/i/status/2047660570740978013)

> codex --yoloやClaudeの--dangerously-skip-permissionsで幸せに — @cajkstudie [X](https://x.com/i/status/2048466822207344779)

> Codex exec --full-autoをcronで制御して擬似運用を検討中だが、appで十分との結論 — @yamk_fuu_k [X](https://x.com/i/status/2049180335372394557)

### 外部エージェントセッションインポート

#### Tips

> Claude CodeからのセッションをCodex CLIでスムーズに継続するための詳細なプロンプトを共有。セッショントランスクリプトを読み込みコンテキスト再構築を自動化 — @coder_blvck [X](https://x.com/i/status/2047986829954064549)

### codex-app-server

#### ポジティブ

> Codex App ServerをChrome拡張に埋め込み、画像編集・ページ分析・ブラウザ自動化を実現。100% OSSで即利用可能 — @arrakis_ai [X](https://x.com/i/status/2049077304757002736)

> Codex App Serverは過小評価されている。ChatGPTアカウントで任意プラットフォームにCodexレベルの知能注入可能 — @arrakis_ai [X](https://x.com/i/status/2049484893877637359)

> Codex App Serverが強力AI開発ツール化。ChatGPTアカウントでアプリ・ブラウザにCodex知能注入、OSS — @RoundtableSpace [X](https://x.com/i/status/2049598346869027154)

### Codex CLI 入門・活用

#### Tips

> コーディングエージェントにおけるプロンプトキャッシュの仕組み — なぜ最初のターンはトークン使用量が多く見えるのか。Codex含む各エージェントの比較 — tsho [Zenn](https://zenn.dev/snowflakejp/articles/4def632fe30a9b)

> OpenAI Codex CLI 入門：ターミナルで完結する次世代AIコーディングエージェント — AInohogosya [Zenn](https://zenn.dev/ainohogosya/articles/386a02f7d7a32a)

> AIと相談しながら研究案を広げるローカルマインドマップ assisted-mindmapを作った。Codexタブで相談も可能 — Ayato Kaku [Zenn](https://zenn.dev/ayarnte/articles/6a8fc50e6380e3)

> OpenAI版とAnthropic版のskill-creatorをコードから比較。OpenAI版はskill-initに近く、評価・改善まで見るとAnthropic版が一段深い（前回から継続） — y-matsuba [Zenn](https://zenn.dev/purple_matsu1/articles/20260424-anthropic-skill-creator)

> OpenAI Codex デスクトップ完全ガイド — Skills・Plugins・Automationsを使いこなす（前回から継続） — ぼくのログ [Zenn](https://zenn.dev/bokuno_log/articles/openai-codex-complete-guide)

> Codex CLI loginがCloudflare判定で詰まったときの切り分けメモ（前回から継続） — kiwsdiv [Qiita](https://qiita.com/kiwsdiv/items/12be8bfea02fa862116c)

### OpenAI Agents SDK

#### Tips

> OpenAI Agents SDKを使ってマルチエージェントシステムを作ってみた。シンプルなエージェントからカスタムツール、マルチエージェントのハンドオフまで実装 — ちとせみ [Zenn](https://zenn.dev/titosemi/articles/f6b906d40bee8a)

### GPT-5.5 / OpenAI業界動向

#### Tips

> GPT-5.5徹底比較：Claude Opus 4.7・Gemini 3.1 Pro・DeepSeek V4との性能差を検証（前回から継続） — ohno [Zenn](https://zenn.dev/0h_n0/articles/b18fe46f73041d)

> OpenAIがAzure独占を終了、GPT-5.5がAWS Bedrockに来た衝撃 — emi_ndk [Qiita](https://qiita.com/emi_ndk/items/5a7174269d870b694aa0)

> OpenAI Codex Hackathonで優勝。開発プロセスがどう変わったかの振り返り（前回から継続） — Su Yan [Zenn](https://zenn.dev/sboai_tech/articles/655e2e86cba4ae)

> Mastra公式動画解説。OpenAIはなぜ「1行も手書きしない開発」を目指すのか（前回から継続） — jun shiromizu [Zenn](https://zenn.dev/shiromizuj/articles/ef991cdc0f844e)

### GPT Image 2

#### Tips

> GPT image 2でレポートを作るプロンプト設計（前回から継続） — you [Zenn](https://zenn.dev/you_dev_zenn/articles/gpt-image-2-report-prompts)

> GPT Image 2プロンプト500件をGitHubで公開（前回から継続） — monkeyapp [Zenn](https://zenn.dev/monkeyapp/articles/7f1487217ba843)

> GPT Image 2をAnifunで試してみたら、漫画制作が一気に変わった話（前回から継続） — Mio [Zenn](https://zenn.dev/anifun_ai/articles/793c706d1df5d9)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
