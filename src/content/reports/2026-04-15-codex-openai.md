---
title: "Codex App発表、チーム向け柔軟料金プランも登場"
summary: "OpenAIがCodexアプリケーションとチーム向け柔軟料金プランを新発表。ChatGPT for Teachersも公開。Codex CLI v0.121.0-alpha.9まで進行し、開発が加速している。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-15
features:
  - "Codex App"
  - "Codex チーム向け柔軟料金プラン"
  - "ChatGPT for Teachers"
  - "Codex CLI v0.120.0"
  - "Codex CLI v0.121.0-alpha"
---

## 公式アップデート

### Codex App発表（新規）

OpenAIがCodexの新たなアプリケーション「Codex App」を発表。サイトマップ上で「introducing-the-codex-app」として検出された。詳細な機能仕様は公式ブログ記事の公開待ち。

[ソース](https://openai.com/index/introducing-the-codex-app)

### Codexチーム向け柔軟料金プラン（新規）

Codexのチーム利用に向けた新しい価格体系「Codex Flexible Pricing for Teams」が発表された。サイトマップ上で検出。

[ソース](https://openai.com/index/codex-flexible-pricing-for-teams)

### ChatGPT for Teachers（新規）

教育者向けのChatGPT機能が新たに提供開始。サイトマップ上で「chatgpt-for-teachers」として検出された。

[ソース](https://openai.com/index/chatgpt-for-teachers)

### Codex CLI v0.121.0-alpha.9リリース（前回から継続・更新）

Codex CLIのRust実装がv0.121.0-alpha.9まで進行（4月14日）。前回報告のalpha.6からalpha.7〜alpha.9が4月13〜14日に連続リリース。詳細な変更内容は未公開だが、次期安定版に向けた高頻度リリースが継続している。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.121.0-alpha.9)

### Codex CLI v0.120.0 安定版（前回から継続）

Realtime V2バックグラウンドエージェントの進捗ストリーミング、フォローアップレスポンスのキューイング、Hook TUI表示の改善、MCP `outputSchema`サポート等を含む安定版。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.120.0)

## コミュニティの反応

### Codex App

#### ポジティブ

> Codexがスーパーアプリ化し、代理機能追加に興奮。ブラウザ統合や複数スレッド自動生成などUIの改善を提案 — @rileybrown [出典](https://x.com/i/status/2043461299049488414)

> ユーザー提案（スライドなどのドキュメントサイドビュー）がCodex Appに実装されたことを報告。OpenAIの迅速な改善を称賛 — @soumitrashukla9 [出典](https://x.com/i/status/2042961691156021270)

> CodexアプリのUX、速度、パフォーマンスがClaudeのラッパーより優れていると絶賛 — @Neesh774 [出典](https://x.com/i/status/2042071241981296920)

### Codexチーム向け柔軟料金プラン

#### ポジティブ

> Codexの$100プランが助かるので$200から変更した — @naoya_ito [出典](https://x.com/i/status/2042433467108192695)

> 新Pro￥16,800プランに心惹かれるが様子見 — @yousukezan [出典](https://x.com/i/status/2042618632979771475)

#### ネガティブ

> チームでPro/$200月額版が買えず使えない — @jclarke [出典](https://x.com/i/status/2041906777445343563)

> 個人向け補助金でチームは高コスト、将来的に安くならないとの指摘 — @zeeg [出典](https://x.com/i/status/2041907318447816799)

### ChatGPT for Teachers

該当なし。X上でエンゲージメント基準を満たす反応は確認されなかった。

### Codex CLI v0.120.0

#### ポジティブ/Tips

> Realtime V2バックグラウンドエージェントの進捗ストリーミング、Hook表示改善などを高く評価し、継続作業環境への進化をポジティブに解説 — @KoichiNishizuka [出典](https://x.com/i/status/2042823290486690257)

> HooksのTUI表示改善、SessionStartフックの区別機能、MCP outputSchema対応などを詳しくレビューし、実用的進歩をTips付きでポジティブ評価 — @akihiro_genai [出典](https://x.com/i/status/2042991680690008282)

#### Tips

> Codex CLI 最新アップデートガイド — Realtime V2・MCP強化・モデル移行（2026年4月）：v0.119.0とv0.120.0の2リリースの変更点を体系的に解説 — kai_kou [Qiita](https://qiita.com/kai_kou/items/e556692bf977e0aa9f55)

> oh-my-codex入門 — Codex CLIをチーム開発ワークフローに変える拡張レイヤー：タスク分割・セッション永続化・複数エージェント協調の仕組みを紹介 — backend-notes [Qiita](https://qiita.com/backend-notes/items/0fe78b60eb2d26079333)

> 【2026年4月】Codex CLI エコシステムの全体像 — GitHub Trendingから読む5つの注目リポジトリ — backend-notes [Qiita](https://qiita.com/backend-notes/items/0abff5ed02e15f347429)

### Codex CLI v0.121.0-alpha

該当なし。X上でエンゲージメント基準を満たす反応は確認されなかった。

### AgentKitとChatKit widgets（新規）

#### Tips

> [OpenAI API]ChatKit widgetsを使って生成ファイルをダウンロードしてみた：AgentKitのマルチエージェントワークフロー構築とChatKit widgets活用の実践記事 — moriko1845 [Qiita](https://qiita.com/moriko1845/items/32172870ab54887abf3e)

### gpt-realtime GA昇格とSIP/MCP対応（前回から継続）

#### Tips

> OpenAI gpt-realtime入門 — SIP・MCP対応の本番音声エージェントをPythonで実装する：Realtime APIのGA昇格に伴うSIP電話対応、リモートMCPサーバー対応、非同期関数呼び出しの3つの変化点を実装ガイドとして解説。プレビュー版は4月30日に非推奨化 — kai_kou [Zenn](https://zenn.dev/kai_kou/articles/191-gpt-realtime-sip-mcp-production-guide)

### GPT-5.4 Thinking活用（前回から継続）

#### Tips

> GPT-5.4 Thinking入門 — reasoning.effortとOSWorld-V 75%の推論AIをAPI活用：推論制御と1Mトークンコンテキストの実践ガイド — kai_kou [Zenn](https://zenn.dev/kai_kou/articles/189-gpt-54-thinking-reasoning-api-guide)

> GPT-5.4 に質問できる Chrome 拡張を作ってみて：ChatとAgentの違いが腑に落ちた体験記 — opvel [Zenn](https://zenn.dev/opvelll/articles/2e4028b6c16fe5)

### harness engineering（前回から継続）

#### Tips

> ハーネスエンジニアリング入門：AIエージェントの品質を構造で高める5つの要素 — zenchaine [Zenn](https://zenn.dev/zenchaine/articles/harness-engineering-intro)

> ハーネスエンジニアリング実例集：OpenAI・Vercel・LangChain・Manusは何をやったか — Junko [Zenn](https://zenn.dev/junko_ai/articles/5d02fb0692d866)

> AIコーディングの本質はプロンプトではない─OpenAI・Anthropicの公開事例から読み解く「harness engineering」 — slate-infra [Zenn](https://zenn.dev/slate_infra/articles/466e9f4561659d)

### OpenAI APIコスト最適化（前回から継続）

#### Tips

> OpenAI APIのコスト、Batch APIで半額にできるの知ってますか？：レシート解析処理をBatch APIに移行してコスト削減した実例 — secobaka [Zenn](https://zenn.dev/dely_jp/articles/e8f130cb1b93e9)

### Whisper API活用（前回から継続）

#### Tips

> Whisper APIはどこまでノイズに耐えられるか？ノイズ除去3手法＋VADで徹底検証した — Kojurin [Zenn](https://zenn.dev/kta805/articles/article_whisper_noise_erxperi)

> whisper-1のハルシネーション地獄をgpt-4o-transcribeで完全解消した話 — daishir0 [Zenn](https://zenn.dev/daishiro/articles/whisper-hallucination-gpt4o-transcribe)

### AIエージェント運用（前回から継続）

#### Tips

> AIエージェントにAPIゲートウェイを挟んでよかったこと11選：コスト暴走防止やログ管理の実践知見 — qzira [Zenn](https://zenn.dev/qzira/articles/d54866a48ebb60)

## ソース

- [OpenAI Blog](https://openai.com/news)
- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
