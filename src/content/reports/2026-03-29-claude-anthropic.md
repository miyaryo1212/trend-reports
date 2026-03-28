---
title: "v2.1.86リリースとSkill活用・自律運用の知見が拡大"
summary: "v2.1.86がリリースされSession IDヘッダー追加やトークン最適化が中心。コミュニティではSkill大量運用の実践記録、テックブログ自律運用の失敗談、Channels/Remote Control活用が話題に。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-03-29
features:
  - "X-Claude-Code-Session-Idヘッダー追加"
  - "Jujutsu/Sapling VCS対応"
  - "Readツール最適化"
  - "@メンションのトークン削減"
  - "Bedrock/Vertex/Foundryキャッシュ改善"
  - "メモリファイル名クリック対応"
  - "/skillsメニュー改善"
  - "macOSキーチェーンキャッシュ延長"
---

## 公式アップデート

### Claude Code v2.1.86（2026-03-27）

バグ修正とパフォーマンス最適化が中心のリリース。主な新機能・改善は以下の通り。

- **X-Claude-Code-Session-Id ヘッダー追加**: API リクエストにセッション ID ヘッダーを付与。プロキシがボディ解析なしでセッション単位の集計が可能に
- **Jujutsu/Sapling VCS 対応**: `.jj` と `.sl` ディレクトリを VCS 除外リストに追加し、Grep・ファイル補完で非表示に
- **Read ツール最適化**: コンパクトな行番号フォーマットと未変更再読み込みの重複排除でトークン使用量を削減
- **@メンションのトークン削減**: ファイル参照時の raw 文字列を JSON エスケープしないことでオーバーヘッドを低減
- **Bedrock/Vertex/Foundry キャッシュ改善**: ツール説明から動的コンテンツを除去しプロンプトキャッシュヒット率を向上
- **メモリファイル名クリック対応**: 「Saved N memories」通知内のファイル名がホバーでハイライト、クリックで開く
- **/skills メニュー改善**: スキル説明を 250 文字に制限しアルファベット順ソートに変更
- **macOS キーチェーンキャッシュ延長**: MCP コネクタ多数設定時のイベントループ停滞を軽減（5 秒→30 秒）

バグ修正では `--resume` の互換性修正、プロジェクトルート外ファイルへの Read/Write/Edit 修正、Windows での config 破損問題の修正、`--bare` モードの MCP ツール欠落修正など多数。

[ソース: GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.86)

## コミュニティの反応

### Session ID ヘッダー追加（v2.1.86）

#### ポジティブ

> v2.1.86 で Session ID ヘッダー追加により、プロキシやゲートウェイでボディ解析なしにセッション集計が可能に。監査・課金・解析が楽になる — @NANDS_AI [X](https://x.com/i/status/2037651479918530891)

#### 中立

> Session ID ヘッダーはチーム運用向けの新機能として位置づけ。一方でセッション ID のプライバシー管理を慎重にすべきという運用 Tips も — @NANDS_AI [X](https://x.com/i/status/2037759815066292385)

### メモリファイル名クリック対応（v2.1.86）

#### ポジティブ

> v2.1.86 からメモリファイル名がホバーでハイライトされてクリックで開けるようになり、CLAUDE.md などのプロジェクトルールを素早く確認できて地味に便利 — @yotsunbai_slot [X](https://x.com/i/status/2037848652627243021)

### Skill 大量運用の実践

#### ポジティブ

> Claude Code で 100 個の Skill を育てた 4 ヶ月の全記録。420 ファイル（Skills 100 + Rules 27 + Docs 284 + Agents 9）を構築し、PR は月 2 本→月 175 本（87.5 倍）に。Max Plan $200/月で実質 $4,900/月相当 — @takuyanagai0213 [Zenn](https://zenn.dev/takuyanagai0213/articles/claude-code-100-skills-full-record)

> skill-creator で Zenn 記事スキルを作ったら品質スコアが 51.9%→96.3%（+85.5% 改善）に — @JodyCraft [Zenn](https://zenn.dev/jodycraft/articles/skill-creator-zenn-article-craft)

### テックブログ自律運用の失敗談

#### 中立

> Claude Code にテックブログを自律運用させたら、嘘の記事が品質チェックを全部パスした。5 日間の修正ログから AI の壊れ方が人間と全然違うことが判明。自前の品質チェックが一切機能していなかった — @ぷらずもん [Zenn](https://zenn.dev/plasmon/articles/20260326-meta-claudecode-8b4de7)

### Channels / Discord 連携

#### Tips

> Claude Code Channels で技術記事のキャッチアップが爆速になった。Discord の DM に記事を投げるだけで日本語で説明してくれる — @Sho [Zenn](https://zenn.dev/shochann00/articles/claude-code-discord-tech-catchup)

> 【Claude Code】Discord から Claude Code を使う「Channels」。v2.1.80 以降で使えるリサーチプレビュー機能の設定手順 — @ユウキ [Zenn](https://zenn.dev/nylon66/articles/d37f97dd9734d1)

### Remote Control / サーバー活用

#### Tips

> Google Cloud Compute Engine の無料枠で Claude Code Remote Control を動かす。自宅 PC を立ち上げっぱなしにせずスマホから開発 — @osei [Zenn](https://zenn.dev/osei/articles/f3a8b3c0b3365b)

### hooks タイミング制御

#### Tips

> Claude Code の hooks のタイミングをいい感じにする。Write/Edit 前に 10 回に 1 回だけ通知を送る hook で通知疲れを防止 — @nishimura [Zenn](https://zenn.dev/n314/articles/fd4995486ba622)

### AIハーネス設計比較

#### Tips

> AI エージェントを本番で動かすためのハーネス設計：everything-claude-code vs superpowers を徹底比較。hooks/skills/rules の 3 軸で制御するアーキテクチャ — @heki1224 [Zenn](https://zenn.dev/heki1224/articles/aba4a75058f23f)

### 長期記憶システム

#### ポジティブ

> Engram — Claude Code の会話を自動記録し、過去の記憶を検索・注入するローカル長期記憶システム。hook による自動注入で明示的検索不要 — @okamyuji [Zenn](https://zenn.dev/okamyuji/articles/engram-claude-code-local-memory)

### コンテキスト管理

#### Tips

> Claude Code のコンテキスト管理、雑にやってたら出力がガタ落ちした話。20 ファイル読み込ませて仕上げ段階で精度低下、原因はコンテキストウィンドウ圧迫 — @にゃん太郎 [Zenn](https://zenn.dev/nh808/articles/20260326_claude_code_context_mgmt)

### ステータスライン・使用量可視化

#### ポジティブ

> Claude Code のステータスラインを $PS1 みたいに書けるツール Claude Nano Line を作った。API 使用率・Git ブランチなどをリアルタイム表示 — @HappyOnigiri [Zenn](https://zenn.dev/happy_onigiri/articles/4813304a09b575)

> ccreport を作った。Claude Code と Codex の使用量をクラウドに蓄積し時系列で振り返れるツール — @1ppe1 [Zenn](https://zenn.dev/1ppe1/articles/f3773f95e55e7c)

### AI レビュー疲れ対策

#### Tips

> AI レビューの「仕分け疲れ」を解消する Claude Code skill を作った話。AI レビュー結果を人間がレビューする二重負荷を skill で軽減 — @nishiken1118 [Qiita](https://qiita.com/nishiken1118/items/bac44a98ce05b09b78f6)

### Windows / WSL2 環境

#### Tips

> Claude Code on Windows：日本語の文字化けを PYTHONUTF8 と encoding 設定で解決した — @Junko [Zenn](https://zenn.dev/junko_ai/articles/9d5b2d4da8a353)

> Claude Code のパーミッションが Windows で効かなかった原因と解決策。パスの書き方（POSIX 形式）が原因 — @Junko [Zenn](https://zenn.dev/junko_ai/articles/4e7ae95a7f4e0b)

> WSL2 × Claude Code × Unity MCP で AI に Unity を操作させるハマり全記録 — @アクロパパ [Zenn](https://zenn.dev/acropapa330/articles/unity_mcp_wsl_claude)

### 個人開発事例

#### ポジティブ

> ObsidianとClaude Codeでタスク管理を改善。日誌に散らばったタスクをプロジェクト単位ノートに分離し Dataview で自動集約 — @kiitosu [Zenn](https://zenn.dev/kiitosu/articles/20260328-f685be90)

> 「あとで読む（読まない）」を仕組みで解決。Raindrop.io の記事を AI で要約し優先度付きダッシュボード表示 — @星影 [Zenn](https://zenn.dev/unsoluble_sugar/articles/beaac7bbf9ee7a)

> Claude Code と一緒にブラウザで動く都市シミュレーションを個人開発している話 — @きょん [Zenn](https://zenn.dev/oclaocla/articles/5cd545316ace95)

> OSS のサービス展開を 0 から Claude Code で全自動化。開発・デプロイ・SNS 投稿・記事執筆まで — @しゃる [Zenn](https://zenn.dev/sharu389no/articles/ed98efe89e7f1e)

### 非エンジニアの活用（前回から継続）

#### ポジティブ

> 非エンジニアが Claude Code を使うために課金するまでの経緯。Everything-Claude-Code のディレクトリ構成に既視感を覚えたのがきっかけ — @Tetsuro [Zenn](https://zenn.dev/tetsuro_works/articles/ai-agent-frontier-log-02)

### レート制限バグ（前回から継続）

#### ネガティブ

> 1 プロンプトで全部溶けた日。Max 20x プランで使用量が 1 プロンプトで 100% に跳ね上がる報告が継続中（前回から継続） — @横井のAI日和 [Zenn](https://zenn.dev/yokoi_ai/articles/cc-daily-2026-03-27)

### Anthropic「ハーネス設計」ブログへの反応（前回から継続）

#### ポジティブ

> AI エージェントのハーネス設計｜Anthropic が公開した「生成と評価の分離」パターンを読み解く（前回から継続） — @たきびラボ [Zenn](https://zenn.dev/takibilab/articles/anthropic-harness-design)

### /dream コマンドと長期記憶（前回から継続）

#### ポジティブ

> Claude が眠るようになった。/dream コマンドと自作 2 層メモリの住み分けを検証（前回から継続） — @K.Hirano [Zenn](https://zenn.dev/metamark/articles/eb7ab6fa9bc759)

### 複利的エンジニアリング（前回から継続）

#### Tips

> Claude Code で実践する複利的エンジニアリング。コンテキストエンジニアリングへのパラダイムシフト（前回から継続） — @ko.+ (Happy Elements) [Zenn](https://zenn.dev/happy_elements/articles/c675ace8e7307b)

### AIコーディング週間（前回から継続）

#### ポジティブ

> 今からでも遅くない。AI コーディング週間をやってみよう（minimo Web チームの実践）（前回から継続） — @たくのこ (MIXI) [Zenn](https://zenn.dev/mixi/articles/8c9e3923d45b41)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
