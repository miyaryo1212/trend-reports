---
title: "Codex CLI alpha.22到達、Study Mode削除論争が過熱"
summary: "Codex CLI Rust版がalpha.22に到達し開発ペース維持。ChatGPT Study Modeのサイレント削除が教育界から批判を浴び、パーソナルファイナンス機能やCodexモバイル対応へのコミュニティ反応も活発。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-17
features:
  - "Codex CLI v0.131.0-alpha.22"
  - "ChatGPT Study Mode"
  - "Codex モバイル/マルチプラットフォーム対応"
  - "ChatGPT パーソナルファイナンス機能"
  - "ChatGPT最適化アップデート"
codex_review: "CLIの高速反復より、Study Modeを黙って引っ込めた件のほうがはるかに重い。開発の勢いは面白いが、教育用途での信頼を削る判断はOpenAIらしい拙速さにも見える。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI v0.131.0-alpha.22

Rust版Codex CLIが5月16日にalpha.22へ到達。前日のalpha.21から1バージョン進行。リリースノートは「Release 0.131.0-alpha.22」のみで具体的な変更内容の記載なし。alpha.13以降、48時間で5リリース以上の活発な開発ペースが継続中。

- [v0.131.0-alpha.22](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.22)（5月16日 00:21 UTC）

### ChatGPT Study Mode

ChatGPTに学習支援モード機能を追加（前回から継続）。ただしUIメニューからサイレント削除されたとの報告あり。

[ソース](https://openai.com/index/chatgpt-study-mode/)

### Codex モバイル/マルチプラットフォーム対応

どこからでもCodexを利用可能にするモバイル・リモート対応（前回から継続）。ChatGPTモバイルアプリからPC上のCodexセッションをリモート操作可能。

[ソース](https://openai.com/index/work-with-codex-from-anywhere/)

### ChatGPT パーソナルファイナンス機能

ChatGPTに個人財務管理機能を追加（前回から継続）。銀行口座接続・支出追跡が可能。

[ソース](https://openai.com/index/personal-finance-chatgpt/)

### ChatGPT最適化アップデート

ChatGPTのパフォーマンス最適化に関する公式記事を公開。

[ソース](https://openai.com/index/optimizing-chatgpt/)

## コミュニティの反応

### ChatGPT Study Mode

#### ネガティブ

> ChatGPTのStudy Modeがメニューから密かに削除されたことを大きなミスと批判。ClaudeやGeminiは残しているのにOpenAIだけ消した点や、学習効果低下リスクを指摘し、親や教師が推奨しにくくなったと強調 — @excel_niisan

> ChatGPT Study Modeのサイレント削除を「大きなミス」と指摘。AIが答えをそのまま与えると学習が阻害される証拠があるため、簡単に使えるStudy Modeは重要だったと主張 — @emollick

> Study Modeは「AIへの依存を減らす唯一の機能」だったのにOpenAIが削除したことを批判。Claude/Geminiは維持しており、学習最適化を後退させた選択だと指摘 — @MercFromNibel

#### Tips

> Study Modeはまだ生きており、/study や /learn コマンドで利用可能（メニューからは消えたがショートカットで残存） — @emergencias_tes

> Study Modeはまだ /study コマンドで動作すると確認。OpenAIが非公式に残している — @thedoomguy_ai

### Codex モバイル/マルチプラットフォーム対応

#### ポジティブ

> Woohoo! Codex mobile is here, update your ChatGPT app and Codex macOS apps, and you can now remote control your Codex on the go! It's really well executed, I've connected both my laptop and my mac mini and I can control them separately! 🔥 — @altryne

#### Tips

> CodexモバイルからUbuntuのCodex Appを操作する方法を備忘録的にまとめ。MFA設定からペアリングまで手順を解説 — 金のニワトリ [Zenn](https://zenn.dev/robustonian/articles/codex_mobile_connect_to_ubuntu)

> WindowsでもCodexのMobileからCodex Appに接続する方法。公式はMac向け案内だが、Windows上でも動作確認 — kyohei.DoAI [Zenn](https://zenn.dev/acntechjp/articles/4b2af76beb46b3)

> 【実機検証】Codex mobileを試した：ChatGPTアプリからCodexをスマホ遠隔操作する方法（前回から継続） — とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/codex-mobile-remote)

> Codex Mobile入門 — iPhoneからAIコーディングエージェントをリモート操作する（前回から継続） — kai_kou [Qiita](https://qiita.com/kai_kou/items/e511ed738e2a2e0c7b22)

### ChatGPT パーソナルファイナンス機能

#### ネガティブ

> OpenAIのpersonal finance機能は最悪で、低金融リテラシー者に危険と指摘 — @khushkhushkhush

#### ポジティブ

> 銀行口座接続で支出追跡・投資分析が可能になったと報告 — @MartiniGuyYT

#### Tips

> 支出表示は可能だが送金実行不可（米国の規制による） — @funkii

> 分類ミスは直接指摘すれば記憶して学習するとアドバイス — @ryanbrewer

### ChatGPT最適化アップデート

#### ネガティブ

> これらの最適化アップデートは逆にユーザー体験を悪化させている。メモリやコンテキスト理解を削っているだけで「最適化」の名の下に機能ダウングレードをやめてほしい — @Amliy_12

#### Tips

> ChatGPTの隠し機能（カスタム指示・一時チャット・自己ループプロンプト）を使えば大幅時短可能。カスタム指示の設定が一番おすすめで月2.5時間節約 — @shun_ai_28

> 「褒めなくていい」「問題点・改善案だけ返して」などの指示を最初に叩き込むだけで「いいですね地獄」から脱出。出力型を固定して精度を上げる具体策 — @usagi_ai123

### Codex CLI・Codex App

#### Tips

> Claude Code派だった僕がCodexに移る前に知りたかったこと。Claude Codeの感覚のままCodexを触ると地味にハマるポイントを解説（前回から継続） — MJ [Zenn](https://zenn.dev/gemcook/articles/e56eabc7ba2961)

> Claude Code/Cursor/Codex/Geminiの5LLMを横断して記憶を共有する方法（前回から継続） — Michie@Linksee_Memory [Zenn](https://zenn.dev/kanseilink/articles/linksee-memory-claude-cross-llm-20260511)

> Codex CLI の Vim mode と日本語 IME を共存させるための常駐ツール codex-ime-guard（前回から継続） — nek0 [Zenn](https://zenn.dev/cat_ginuta/articles/5d9cb2c3de9917)

### その他

#### 分析

> 今週の海外AIニュース：エージェント時代の本格化 — Anthropic・Google・OpenAIの動き（前回から継続） — AI解読部 [Zenn](https://zenn.dev/aidecodelabjp/articles/weekly-ai-2026-05-14)

> OpenAI Reasoning Modelでmax_tokensを指定したら回答が空になる罠（前回から継続） — yamashita_aidev [Qiita](https://qiita.com/yamashita_aidev/items/8b52b9b111571e161763)

> OpenAIのTomoro買収によるDeployCo設立がAIコンサルティング業界に与える影響を考察（前回から継続） — こばやし うきょう [Zenn](https://zenn.dev/headwaters/articles/openai-deployco-consulting)

> 再帰的自己改善（RSI）の現実化について、OpenAIとAnthropicの研究者の警告を整理（前回から継続） — satoshi yoshida [Zenn](https://zenn.dev/syoshida07/articles/7dbfe718b95aa1)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
