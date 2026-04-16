---
title: "Codex CLI v0.120.0リリース、Axiosサプライチェーン攻撃への対応"
summary: "Codex CLIがv0.120.0安定版に到達し、Realtime V2バックグラウンドエージェント等を追加。OpenAIがAxiosサプライチェーン攻撃を受けmacOS署名証明書をローテーション。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-12
features:
  - "OpenAI Academy"
  - "Axios サプライチェーン攻撃への対応"
  - "Codex CLI v0.120.0"
  - "Codex CLI v0.119.0"
  - "CyberAgent事例"
codex_review: "Codex CLIの進化自体は着実だが、今回いちばん重いのはAxios由来の署名ローテーションだと思う。機能追加は前進でも、AIツールが普通のソフトウェア供給網リスクを免れない現実のほうが地味に重要だ。 ※ このレビューは後日生成されました"
codex_importance: 4
---

## 公式アップデート

### Codex CLI v0.120.0 安定版リリース（新規）

Codex CLIのRust実装が安定版v0.120.0に到達（4月11日公開）。主な新機能として、Realtime V2でバックグラウンドエージェントの進捗をストリーミング表示する機能、フォローアップレスポンスのキューイング、フック表示の改善（実行中フックと完了済みフックの分離表示）、TUIステータスラインへのスレッドタイトル表示、MCP `outputSchema`サポートが追加された。バグ修正ではWindows elevated sandboxの分割ファイルシステムポリシー対応、シンボリックリンクされた書き込み可能ルートのサンドボックス権限修正、リモートWebSocket接続のRustlsプロバイダ修正などが含まれる。すでにv0.121.0-alpha.2まで進行している。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.120.0)

### Axiosサプライチェーン攻撃への対応（新規）

Axiosの開発者ツールが侵害されたサプライチェーン攻撃を受け、OpenAIがmacOSコード署名証明書のローテーションを実施。アプリの更新を配布し、ユーザーデータへの影響はなかったと確認した。5月8日以降、旧バージョンのmacOSアプリは動作しなくなる。

[ソース](https://openai.com/index/axios-developer-tool-compromise)

### OpenAI Academy 教育コンテンツ一斉公開（前回から継続）

ChatGPTの使い方を体系的に学べる教育プラットフォーム。プロンプト基礎、データ分析、画像生成、業種別ガイド等20以上のコースを提供。

[ソース](https://openai.com/academy/getting-started)

### CyberAgentがChatGPT EnterpriseとCodexを採用（前回から継続）

広告・メディア・ゲーム事業全体でChatGPT EnterpriseとCodexを活用している事例。

[ソース](https://openai.com/index/cyberagent)

### The next phase of enterprise AI（前回から継続）

Frontier、ChatGPT Enterprise、Codex、全社AIエージェントによるエンタープライズAIの次フェーズ。

[ソース](https://openai.com/index/next-phase-of-enterprise-ai)

### Codex 従量課金プラン提供開始（前回から継続）

ChatGPT BusinessおよびEnterprise向けにCodexの従量課金プランが提供開始。

[ソース](https://openai.com/index/codex-flexible-pricing-for-teams)

## コミュニティの反応

### OpenAI Academy

#### ポジティブ

> AI企業直々の無料コースリストでOpenAI Academyを挙げ、ブックマーク推奨（Likes:1939, Reposts:429） — @RoundtableSpace [出典](https://x.com/i/status/2042712977359737135)

> AI企業10社が無料コースを提供するリストの1位にOpenAI Academyを挙げ、有料コースより実質無料のものが優れていると強調（Likes:833, Reposts:266） — @shedntcare_ [出典](https://x.com/i/status/2041912916899983781)

> 2026年の完全無料AIコース10選にOpenAI Academyを含め紹介（Likes:187, Reposts:58） — @JOBCORNER247 [出典](https://x.com/i/status/2041573078287671640)

> AI学習無料リソースリストにOpenAI Academyを追加し、£0.00で入手可能と共有（Likes:320, Reposts:101） — @baba_Omoloro [出典](https://x.com/i/status/2041177096538468360)

### Axiosサプライチェーン攻撃への対応

#### Tips

> OpenAIがAxiosのサプライチェーン攻撃によりmacOSアプリの署名証明書をローテーション、ユーザーデータ影響なしを確認。アプリ更新を推奨（5月8日以降旧版動作せず） — @MalwareBibleJP [出典](https://x.com/i/status/2042839652122660888)

> OpenAIのmacOS署名基盤がAxios汚染、北朝鮮ハッカー関与の可能性。ChatGPT Desktop等更新を今日中に — @joho_no_todai [出典](https://x.com/i/status/2042973614321078764)

> axiosの件でOpenAIのmacOSアプリを念のため全部更新 — @h_okumura [出典](https://x.com/i/status/2042784996336050632)

#### ネガティブ

> OpenAIのCIで侵害Axios実行、証明書窃取可能性（未確認）、北朝鮮系による大規模攻撃との指摘 — @bioshok3 [出典](https://x.com/i/status/2042787369137639619)

### Codex CLI v0.120.0

該当なし。X上でエンゲージメント基準を満たす反応は確認されなかった。

### Codex CLI v0.119.0

#### ポジティブ

> 新機能（LISTENのYouTube文字起こし精度向上など）を早速試用し「かなりすごい」「手間解決」と高評価 — @hatamoto_s [出典](https://x.com/i/status/2042523839503221002)

> Codexの初印象として、IDE統合は劣るがコード理解良く、コンポーネント抽出完璧、pnpm使用が賢いなど好印象 — @kapxapot [出典](https://x.com/i/status/2042515367268905427)

> VoiceVOXプラグイン（日本語）でupdate試用、「amazing」「really good update」 — @ZeiisWelford [出典](https://x.com/i/status/2042552839399182484)

#### Tips

> Codex CLI v0.119.0リリースノート共有：Realtime voice v2 WebRTC、MCP Apps強化、リモートワークフロー改善など詳細 — @meetp_ai [出典](https://x.com/i/status/2042744800613728662)

#### ネガティブ

> ClaudeDesktop経由Codex操作でMCPタイムアウト問題が発生 — @araz32008658 [出典](https://x.com/i/status/2041138086017749501)

### ChatGPT Pro $100プラン（前回から継続）

#### Tips

> 月額$100の新Proで変わるのは、AIの賢さより「連続稼働時間」だ：$200 Proとの併存、Codex利用枠の違いを分析 — taketsuyo [Qiita](https://qiita.com/taketsuyo/items/6ee1fb54b6e6f4454aac)

> ChatGPT Pro $100プラン入門 — Codex 5倍枠と2層Pro体制の全容 — kai_kou [Qiita](https://qiita.com/kai_kou/items/9407ee914d80d5eb6c48)

### harness engineering（前回から継続）

#### Tips

> ハーネスエンジニアリング実例集：OpenAI・Vercel・LangChain・Manusは何をやったか — モデルの周りの仕組みを変えた各社事例を横断比較 — Junko [Zenn](https://zenn.dev/junko_ai/articles/5d02fb0692d866)

> AIコーディングの本質はプロンプトではない─OpenAI・Anthropicの公開事例から読み解く「harness engineering」 — slate-infra [Zenn](https://zenn.dev/slate_infra/articles/466e9f4561659d)

### GPT-5.4 Thinking活用（新規）

#### Tips

> GPT-5.4 Thinking入門 — reasoning.effortとOSWorld-V 75%の推論AIをAPI活用：推論制御と1Mトークンコンテキストの実践ガイド — kai_kou [Zenn](https://zenn.dev/kai_kou/articles/189-gpt-54-thinking-reasoning-api-guide)

> GPT-5.4 に質問できる Chrome 拡張を作ってみて：ChatとAgentの違いが腑に落ちた体験記 — opvel [Zenn](https://zenn.dev/opvel/articles/2e4028b6c16fe5)

### OpenAI APIコスト最適化（前回から継続）

#### Tips

> OpenAI APIのコスト、Batch APIで半額にできるの知ってますか？：レシート解析処理をBatch APIに移行してコスト削減した実例 — secobaka [Zenn](https://zenn.dev/dely_jp/articles/e8f130cb1b93e9)

### Whisperハルシネーション対策（新規）

#### Tips

> whisper-1のハルシネーション地獄をgpt-4o-transcribeで完全解消した話：27分の会議録音で同一フレーズ69回繰り返しが発生、モデル移行で解決 — daishir0 [Zenn](https://zenn.dev/daishiro/articles/whisper-hallucination-gpt4o-transcribe)

> イチロー×武豊の対談動画をAIで文字起こしたら話者分離の精度に驚いた：Whisper APIが話者名まで正しく出力 — daishir0 [Zenn](https://zenn.dev/daishiro/articles/whisper-gpt4o-speaker-diarization)

### AIエージェント運用（新規）

#### Tips

> AIエージェントにAPIゲートウェイを挟んでよかったこと11選：コスト暴走防止やログ管理の実践知見 — qzira [Zenn](https://zenn.dev/qzira/articles/d54866a48ebb60)

### gpt-image-1 運用（新規）

#### Tips

> 個人開発で gpt-image-1 の 502 を直した話 — タイムアウト3層設計で学んだこと：Pumaのworker_timeoutがデフォルト60秒で強制終了される問題を解決 — isekaisaru [Zenn](https://zenn.dev/isekaisaru/articles/656e5186401467)

## ソース

- [OpenAI Blog](https://openai.com/news)
- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
