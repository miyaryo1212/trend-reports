---
title: "Codex CLI v0.121.0-alpha進行、v0.120.0へのコミュニティ反応が拡大"
summary: "Codex CLI v0.121.0-alpha.3まで進行。v0.120.0のRealtime V2バックグラウンドエージェントやHook UI改善に対するコミュニティの好意的な反応が出揃った。Axiosサプライチェーン攻撃対応は継続中。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-13
features:
  - "Codex CLI v0.121.0-alpha"
  - "Codex CLI v0.120.0"
  - "Codex CLI v0.120.0 Hook UI改善"
  - "Codex CLI v0.120.0 MCP outputSchema対応"
  - "OpenAI Axiosサプライチェーン攻撃への対応"
  - "OpenAI Academy一括公開"
---

## 公式アップデート

### Codex CLI v0.121.0-alpha.3リリース（新規）

Codex CLIのRust実装がv0.121.0-alpha.3まで進行（4月12日）。alpha.1〜alpha.3が4月11〜12日に連続リリースされているが、詳細な変更内容は未公開。安定版v0.120.0からの次期リリースに向けた開発が活発に進んでいる。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.121.0-alpha.3)

### Codex CLI v0.120.0 安定版（前回から継続）

Realtime V2バックグラウンドエージェントの進捗ストリーミング、フォローアップレスポンスのキューイング、Hook TUI表示の改善、MCP `outputSchema`サポート等を含む安定版。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.120.0)

### Axiosサプライチェーン攻撃への対応（前回から継続）

Axiosの開発者ツール侵害を受け、OpenAIがmacOSコード署名証明書をローテーション。ユーザーデータへの影響なし。5月8日以降、旧バージョンのmacOSアプリは動作停止。

[ソース](https://openai.com/index/axios-developer-tool-compromise)

### OpenAI Academy 教育コンテンツ一斉公開（前回から継続）

ChatGPTの使い方を体系的に学べる教育プラットフォーム。プロンプト基礎、データ分析、画像生成、業種別ガイド等20以上のコースを提供。

[ソース](https://openai.com/academy/getting-started)

### CyberAgentがChatGPT EnterpriseとCodexを採用（前回から継続）

広告・メディア・ゲーム事業全体でChatGPT EnterpriseとCodexを活用している事例。

[ソース](https://openai.com/index/cyberagent)

## コミュニティの反応

### Codex CLI v0.120.0

#### ポジティブ

> Codex CLI v0.120.0のRealtime V2バックグラウンドエージェント強化（進捗ストリーミング、フォローアップキュー）を高く評価し、継続作業環境への進化を詳述 — @KoichiNishizuka [出典](https://x.com/i/status/2042823290486690257)

> Hooks/TUI改善、MCP outputSchema、SessionStart拡張など新機能を詳細レビューし、活用Tipsを紹介 — @akihiro_genai [出典](https://x.com/i/status/2042991680690008282)

> Codex CLI 0.120.0でHooksが専用ライブエリアに表示され、出力がある場合のみ残るため読みやすさが大幅向上。Windows対応復活などQoL改善多数 — @LLMJunky [出典](https://x.com/i/status/2042844012592189619)

### Codex CLI v0.121.0-alpha

該当なし。X上でエンゲージメント基準を満たす反応は確認されなかった。

### Axiosサプライチェーン攻撃への対応

#### Tips

> OpenAIのmacOSアプリ署名でAxiosの侵害版が実行されたが、証明書窃取は防がれユーザーデータ影響なし。証明書ローテーション完了、5/8までにアプリ更新を — @MalwareBibleJP [出典](https://x.com/i/status/2042839652122660888)

> OpenAIのmacOS署名基盤が北朝鮮系ハッカーのAxios汚染を実行、ChatGPT Desktop等対象。証明書流出可能性低いが更新し5/8以降旧版動作停止リスク。Macユーザー即更新を — @joho_no_todai [出典](https://x.com/i/status/2042973614321078764)

> OpenAIの証明書作成でAxios汚染版使用もデータ/システム侵害なし。「鍵コピー未遂」に例えリスク解説、macOSアプリ即更新を推奨。サプライチェーン脆弱性指摘 — @russianblue2009 [出典](https://x.com/i/status/2042806884739223885)

#### ネガティブ

> Axiosサプライチェーン攻撃がOpenAI macOS署名に波及、証明書ローテーション。侵害証拠なしも依存リスク示唆 — @SocketSecurity [出典](https://x.com/i/status/2042814381226942907)

### OpenAI Academy

#### ポジティブ

> OpenAIが全職種向けに300以上のChatGPTプロンプト集を無料公開中と紹介 — @SuguruKun_ai [出典](https://x.com/i/status/2041056471862190404)

> OpenAIが251の無料AIプロンプトを公開、各職種向けリソースリンクをスレッドで共有 — @AndrewBolis [出典](https://x.com/i/status/2042924402279616775)

> AI無料コース10選としてOpenAI Academy（多数の無料チュートリアル）を紹介 — @shushant_l [出典](https://x.com/i/status/2042573484363256214)

> 無料AI学習サイト10選にOpenAI Academyを挙げ、ブックマーク推奨 — @L_go_mrk [出典](https://x.com/i/status/2043227115232137522)

> OpenAI Academyで財務・経理向けChatGPT活用ガイド（差異分析、予測等）を公開と紹介 — @kobatch_tk [出典](https://x.com/i/status/2042755764822118462)

### Codex CLI カスタムプロンプト廃止（新規）

#### Tips

> Codex CLIのCustom Promptsがdeprecatedになり、再利用プロンプトはskillsへ移行が案内されている。公式ドキュメントの手順でも動作しなかったとの報告 — t_tech [Zenn](https://zenn.dev/takagi_tech/articles/dev-codex-cli-custom-prompts-deprecated)

> OpenAIのskill-creatorを読んで「Skillの作り方」を学ぶ：Custom Promptsの後継機能の構造を解説 — oyamata [Qiita](https://qiita.com/oyamata/items/2cab1c1cd362d5e10de5)

### GPT-5.4 Thinking活用（前回から継続）

#### Tips

> GPT-5.4 Thinking入門 — reasoning.effortとOSWorld-V 75%の推論AIをAPI活用：推論制御と1Mトークンコンテキストの実践ガイド — kai_kou [Zenn](https://zenn.dev/kai_kou/articles/189-gpt-54-thinking-reasoning-api-guide)

> GPT-5.4 に質問できる Chrome 拡張を作ってみて：ChatとAgentの違いが腑に落ちた体験記 — opvel [Zenn](https://zenn.dev/opvel/articles/2e4028b6c16fe5)

### harness engineering（前回から継続）

#### Tips

> ハーネスエンジニアリング実例集：OpenAI・Vercel・LangChain・Manusは何をやったか — モデルの周りの仕組みを変えた各社事例を横断比較 — Junko [Zenn](https://zenn.dev/junko_ai/articles/5d02fb0692d866)

> AIコーディングの本質はプロンプトではない─OpenAI・Anthropicの公開事例から読み解く「harness engineering」 — slate-infra [Zenn](https://zenn.dev/slate_infra/articles/466e9f4561659d)

### AIコーディングエージェント比較（新規）

#### Tips

> AI コーディングエージェント比較 2026 — Claude Code・Codex・Copilot・Cursorの違いと選び方：アーキテクチャや思想の違いを横断的に整理 — 井ノ実 [Zenn](https://zenn.dev/ino_h/articles/2026-04-05-ai-coding-agent-comparison)

> Claude Code × OpenAI Codex プラグインで AI コードレビューを多角化する：codex-plugin-ccの導入メリットを紹介 — 井ノ実 [Zenn](https://zenn.dev/ino_h/articles/2026-04-05-claude-code-codex-plugin)

### OpenAI APIコスト最適化（前回から継続）

#### Tips

> OpenAI APIのコスト、Batch APIで半額にできるの知ってますか？：レシート解析処理をBatch APIに移行してコスト削減した実例 — secobaka [Zenn](https://zenn.dev/dely_jp/articles/e8f130cb1b93e9)

### Whisperハルシネーション対策（前回から継続）

#### Tips

> whisper-1のハルシネーション地獄をgpt-4o-transcribeで完全解消した話：27分の会議録音で同一フレーズ69回繰り返しが発生、モデル移行で解決 — daishir0 [Zenn](https://zenn.dev/daishiro/articles/whisper-hallucination-gpt4o-transcribe)

### AIエージェント運用（前回から継続）

#### Tips

> AIエージェントにAPIゲートウェイを挟んでよかったこと11選：コスト暴走防止やログ管理の実践知見 — qzira [Zenn](https://zenn.dev/qzira/articles/d54866a48ebb60)

### n8nとOpenAI RAGパイプライン（新規）

#### Tips

> n8nとOpenAIでRAGパイプラインを構築する方法：ノーコードでRAGを実装する手順を解説 — zivuch [Qiita](https://qiita.com/zivuch/items/5d2345ecf8c239caaa17)

## ソース

- [OpenAI Blog](https://openai.com/news)
- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
