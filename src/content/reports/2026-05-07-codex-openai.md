---
title: "Codex CLI alpha.12まで連続公開、rusty-v8も更新"
summary: "Codex CLI rust-v0.129.0-alpha.12まで連続リリース。rusty-v8-v147.4.0も公開。新機能発表はなく、CLIの安定化フェーズが続く。コミュニティではCodex Automationsやプロンプトキャッシュの解説記事が注目。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-07
features:
  - "Codex CLI v0.129.0-alpha.12"
  - "rusty-v8-v147.4.0"
codex_review: "連続アルファ公開は派手さこそないが、機能追加より足回りを詰める局面に入ったサインとしては興味深い。とはいえ業界全体を動かす材料としてはまだ弱く、現時点では熱量先行に見える。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI rust-v0.129.0-alpha.12

5月6日公開。0.129.0系の最新アルファビルド。前回のalpha.8以降、alpha.9〜12が5月4〜6日にかけて連続リリースされた。リリースノートは各ビルドとも「Release 0.129.0-alpha.X」のみで詳細変更点は未記載。

- [v0.129.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.12)
- [v0.129.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.11)
- [v0.129.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.10)
- [v0.129.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.9)

### rusty-v8-v147.4.0

5月6日公開。V8 JavaScriptエンジンのRustバインディング更新。Codex CLIの内部依存コンポーネント。

- [rusty-v8-v147.4.0](https://github.com/openai/codex/releases/tag/rusty-v8-v147.4.0)

## コミュニティの反応

### Codex Automations

#### Tips

> Codex appのAutomationsを試す前に整理したこと。PCを閉じていても動くのか、ローカルファイルの扱いなど疑問点を整理 — Tadataka_Takahashi [Qiita](https://qiita.com/Tadataka_Takahashi/items/786c439453e51e90c671)

### Codexを使ったアプリ開発

#### Tips

> ChatGPTとCodexで5時枠×2回使って学校プリントTodo抽出アプリを作った話。動くものは作れたが公開にはセキュリティ面の不安が残る — KanshiKun [Qiita](https://qiita.com/KanshiKun/items/01ffc19ef70748a35a96)

### OpenAI・Anthropicエンタープライズ展開

#### Tips

> OpenAI・Anthropicがエンタープライズ向け合弁会社を相次いで発表、Sierraが9.5億ドル調達など2026年5月5日のAI動向まとめ — lavellehatcherjr [Qiita](https://qiita.com/lavellehatcherjr/items/4a573a96d43eda3ba3a0)

### LLMプロンプトキャッシュ

#### Tips

> なぜ「キャッシュヒット」で90%オフ？ LLMプロンプトキャッシュの仕組みを全部図解する。Transformer内部のKVキャッシュから経済ロジックまで解説 — lumichy [Zenn](https://zenn.dev/lumichy/articles/prompt-caching-guide-2026) / [Qiita](https://qiita.com/lumichy/items/a74c8178b27881b478a3)

### AI活用の使い分け

#### Tips

> AIを長く使うなら、「普段使いAI」と「検証用AI」を分けた方がいいかもしれない。メモリやカスタム指示の蓄積がバイアスになるリスクを指摘 — 愚者のグノスター [Zenn](https://zenn.dev/aimar/articles/a556a339e55e6d)

### LLMアプリのOAuth設計（前回から継続）

#### Tips

> LLMアプリにOAuthでモデル利用権限を委譲するのは現実的なのか。BYOC（Bring Your Own Credential）の考え方を解説 — さき(H.Saki) [Zenn](https://zenn.dev/hsaki/articles/llm-app-oauth)

### ChatGPT Proプラン（前回から継続）

#### Tips

> ChatGPT Pro $100プラン入門 — Codex 5倍枠と2層Pro体制の全容 — 甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/205-openai-chatgpt-pro-100-codex-pricing-guide)

> ChatGPT Proは学生に必要か？卒研・修論・個人開発目線で契約してみた — あまり [Zenn](https://zenn.dev/ryyy_my/articles/65a4f36981f169)

### Codex / Claude Code 併用ノウハウ（前回から継続）

#### Tips

> CodexとClaude Codeの併用で学んだこと（Issue運用＆.md編） — UKM [Zenn](https://zenn.dev/ukm/articles/cc22e39a0f6dd8)

> Claude CodeとCodexの併用で学んだこと（容量制限編） — UKM [Zenn](https://zenn.dev/ukm/articles/179d2f90ac8abd)

> Google Chrome CanaryでCodexのComputer Useの並行作業を可能にする — 古家大 [Zenn](https://zenn.dev/masarufuruya/articles/63b1edfae89c45)

### Claude Code → Codex App 移行（前回から継続）

#### Tips

> Claude CodeからCodex Appへ移行する実践ガイド — mine_take [Zenn](https://zenn.dev/minewo/articles/claude-code-to-codex-app-migration)

### OpenAI Symphony（前回から継続）

#### Tips

> （2026/5/4号）週刊AIニュース：OpenAI SymphonyはCodex向けのオーケストレーション仕様書 — ほりえ [Zenn](https://zenn.dev/my_vision/articles/e6ae2b9d2cd62c)

### ChatGPT Images 2.0（前回から継続）

#### Tips

> Claude Code × ChatGPT Image 2.0 — Chrome MCP経由でAPIキー不要で最新モデルを使う — Alba Luce [Zenn](https://zenn.dev/albaluce/articles/d9fcd30e984a3f)

> ChatGPT Images 2.0の画像生成が本気を出した。テキスト描画能力の飛躍的向上を検証 — satoshi yoshida [Zenn](https://zenn.dev/syoshida07/articles/ce43088859acc1)

### AIエージェントのメモリ設計（前回から継続）

#### Tips

> AIエージェントのメモリ設計アーキテクチャ：Markdownと規律の徹底 — Nao8 [Zenn](https://zenn.dev/dragon1208/articles/1abe47b3fa88a9)

### RAG技術（前回から継続）

#### Tips

> RAGで人間の脳を再現して必要な情報だけを取り出す手法「NeocorRAG」を紹介 — sasakuna [Zenn](https://zenn.dev/knowledgesense/articles/cb14d18ac43801)

### OpenAI Realtime API（前回から継続）

#### Tips

> Twilio + Patter + OpenAI Realtimeで日本語の営業電話AIエージェントを動かすまで — Na [Zenn](https://zenn.dev/yuche/articles/twilio-patter-openai-realtime-japanese-voice-agent)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
