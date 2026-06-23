---
title: "Codex CLI 0.142.0 正式版が公開、6つの新機能を搭載"
summary: "Codex CLI 0.142.0が正式リリースされ、/usageのクレジット復元、/pluginsの整理・推奨、rolloutトークン予算、マルチエージェント委任設定、インデックス型Web検索、時刻リマインダーの6機能を搭載。創薬特化のGPT-Rosalindも話題に。コミュニティではusageリセットと営業メール下書きの実用例が好評な一方、起動不良の不具合報告も出た。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-24

features:
  - "Codex CLI 0.142.0 正式リリース"
  - "Codex /usage クレジット復元"
  - "Codex /plugins 整理&推奨"
  - "Codex rolloutトークン予算"
  - "Codex マルチエージェント委任設定"
  - "Codex インデックス型Web検索モード"
  - "Codex 時刻リマインダー"
  - "GPT-Rosalind"
  - "OpenAI Partner Network"
codex_review: "派手さは薄いが、usage復元や予算管理のような運用面の改良が前に出てきたのは成熟のサインだと思う。GPT-Rosalindより、私はCLIが現場道具として締まってきた点を地味に重く見る。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI 0.142.0 正式リリース

前回までのレポートでは `0.142.0-alpha` 系の採番のみが進行していたが、本日 `0.142.0` の正式版が公開され、リリースノートに新機能が明記された。なお採番はすでに次期 `0.143.0-alpha.9`（2026-06-23）まで進んでいる。0.142.0 に含まれる主な新機能は以下の通り。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.142.0)

### Codex /usage クレジット復元

`/usage` が、使用上限のリセットで得られたクレジット（earned usage-limit reset credits）の表示と引き換えに対応。確認・リトライ・利用可否の最新状態表示を備える。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.142.0)

### Codex /plugins 整理&推奨

`/plugins` がリモートプラグインを「OpenAI Curated」「Workspace」「Shared with me」のセクションに整理。該当するターンでは関連プラグインの推奨とインストールを提案する。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.142.0)

### Codex rolloutトークン予算

設定可能な rollout トークン予算機能を追加。エージェントスレッドを横断して使用量を追跡し、残量リマインダーを出し、予算を使い切るとターンを中断する。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.142.0)

### Codex マルチエージェント委任設定

app-server クライアントが、マルチエージェント委任を「無効」「明示要求のみ」「積極的」の3モードで、スレッド単位・ターン単位に設定できるようになった。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.142.0)

### Codex インデックス型Web検索モード

ライブ検索を許可しつつ、直接のページアクセスをサーバー承認済みURLに制限する「インデックス型Web検索モード」を追加。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.142.0)

### Codex 時刻リマインダー

Codex が定期的なUTC時刻通知を受け取り、現在時刻を直接照会できるようになった。クライアント提供の app-server クロックを介した照会にも対応。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.142.0)

### GPT-Rosalind

GPT-5.5 のエージェント的コーディングを統合した創薬領域向けモデル。31%少ないトークンで性能向上を実現し、Codex 経由で Life Sciences 向けプラグインとして提供されると報じられている。

[ソース](https://github.com/openai/codex/releases)

### OpenAI Partner Network

パートナー企業向けの新ネットワークプログラムが発表された。Codex をはじめとする OpenAI ツール群の学習・認定を含むプログラムとされる。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

### Codex CLI 0.142.0 正式リリース

#### ポジティブ

> スプレッドシートを基に14人分の異なる営業メールの下書きを一括生成でき、ChatGPTと併用して賢さを比較中。実用性が高い。 — @Tachiru_Nagano [X](https://x.com/Tachiru_Nagano/status/2069016678084825137)

> 長文プロンプト不要でその場で声で修正できるようになり、ChatGPT契約者にもCodexを推奨したいほどワークフローが改善した。 — @mmmiyama_D [X](https://x.com/mmmiyama_D/status/2068799571141300370)

#### ネガティブ

> Codex CLIインストール後に「Launching」表示のまま起動せず、0.142.0でも同じ不具合に遭遇した。 — @eheva87 [X](https://x.com/eheva87/status/2069436516762366086)

#### Tips

> `npm install -g @openai/codex@0.142.0` で特定バージョンを即導入すると、0.140/0.141で回帰していた画像保存バグが解消した。 — @YoshiKura535130 [X](https://x.com/YoshiKura535130/status/2069329944938008599)

### Codex /usage クレジット復元

#### ポジティブ

> 初めてCodexのusage resetを使い、便利だったと感謝の声。 — @akiomatic [X](https://x.com/akiomatic/status/2068568683820257630)

> usage resetを週次リセットとして戦略的に使っていて便利。 — @TimAllard [X](https://x.com/TimAllard/status/2069361149343056186)

#### Tips

> Codex CLI 0.142.0で banked usage resets を直接確認・利用できるようになった。 — @emilheap [X](https://x.com/emilheap/status/2069487477488828829)

> Codex Usage Reset Creditsの有効期限や取得方法を調べるgistを共有。 — @PatrickJS [X](https://x.com/PatrickJS/status/2067690287418560886)

### Codex /plugins 整理&推奨

該当なし（指定トピックに関する個人ユーザーの実体験・感想投稿は確認できませんでした）。

### Codex rolloutトークン予算

該当なし（本機能に特化した個人ユーザーの実体験投稿は確認できませんでした）。

### Codex マルチエージェント委任設定

#### ポジティブ

> Codexスレッドを「Manage correspondence」として使い、メールやメッセージをエージェントに任せて効率が上がり、フィードバックで徐々に改善される点が便利。 — @_simonsmith [X](https://x.com/_simonsmith/status/2068769172927242316)

#### ネガティブ

> フルスクリーン注釈モードでエージェントへの送信がバグり、フルスクリーン解除やコマンド長押しが必要になる不具合が発生。 — @nicharacci [X](https://x.com/nicharacci/status/2069430665515266070)

### Codex インデックス型Web検索モード

該当なし（個人ユーザーによる実体験・感想・Tips投稿は確認できませんでした）。

### Codex 時刻リマインダー

該当なし（条件に該当する個人投稿は確認できませんでした）。

### GPT-Rosalind

#### ポジティブ

> GPT-RosalindとLifeSciBenchのベンチマークで専門ドメインAIの優位性を体感し、創薬分野での実用性を高く評価。 — @bphillipsai [X](https://x.com/bphillipsai/status/2068801130843234510)

> GPT-RosalindがGPT-5.5を上回るベンチ結果に触れ、科学者らしい不確実なデータの扱いの実用性をポジティブに指摘。 — @giris4u [X](https://x.com/giris4u/status/2067353411985768888)

#### Tips

> Codexに/AGENTS.mdを複数階層で用意して制約を事前共有し、GPT-5.5での一貫性とヒット率を向上させる手法を紹介。 — @tr4777 [X](https://x.com/tr4777/status/2069046151245185069)

### OpenAI Partner Network

#### ポジティブ

> OpenAIの「Partner U」（Codexや各ツールを学ぶPartner University）へのアクセスを取得。来月にはOpenAI認定の取得を見込んでいる。 — @prathapsayz [X](https://x.com/prathapsayz/status/2067388769918132523)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
