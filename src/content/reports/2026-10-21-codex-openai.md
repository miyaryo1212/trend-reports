---
title: "12時間キャッシュとCOBOL性能、alpha.8まで到達"
summary: "OpenAI は Responses API に12時間プロンプトキャッシュを追加し、COBOL など低リソース言語のコーディング性能向上と Orchestra Bio の買収を発表した。Codex CLI は 0.164.0-alpha.7 / alpha.8 が公開されたが安定版は未着。X では12時間キャッシュの使いどころを整理する投稿が目立つ。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-21

features:
  - "低リソース言語(COBOL/Fortran/VB)のコーディング性能向上を発表"
  - "API の 12時間プロンプトキャッシュ(28日間企画 Day 16)"
  - "Codex CLI 0.164.0-alpha.7 / alpha.8 公開"
  - "Codex 28日間企画 Day 15 で全ユーザーの利用枠リセット"
  - "OpenAI が Orchestra Bio を買収"
codex_review: "地味に重要なのは12時間キャッシュで、長時間動くエージェントの費用設計を変え得る。ただし書き込み割増を含めた実運用の採算はまだ見えず、COBOLの大幅改善もベンチマークだけで現場移行まで語るのは早い。買収やα版の細部は、今のところ業界全体への波及が限定的だ。"
codex_importance: 3
---

## 公式アップデート

### 低リソース言語(COBOL/Fortran/VB)のコーディング性能向上を発表

10月19日、OpenAI は COBOL・Fortran・VB などの低リソース言語におけるコーディング性能の向上を発表しました。GPT-6 Astra は20言語ベンチマークで 87.4%(従来 26.8%)、COBOL 移行テストで 97.9% を達成したとしています。あわせて、レガシー移行向けの新しい評価セット(SWE / SQLite / COBOL 移行)も公開されました。

[ソース](https://openai.com/news/)

### API の 12時間プロンプトキャッシュ(28日間企画 Day 16)

10月20日、Codex 28日間企画の Day 16 として、Responses API のプロンプトキャッシュ保持時間に12時間を選択できるようになりました。キャッシュ書き込みの単価は入力トークン単価の 2.5倍です。

[ソース](https://openai.com/news/)

### Codex CLI 0.164.0-alpha.7 / alpha.8 公開

10月20日に 0.164.0 系のプレリリースが2本追加されました。alpha.7(13:52 UTC)は GitHub Actions による自動タグ、alpha.8(20:30 UTC)は OpenAI スタッフ(celia-oai)による手動タグです。いずれもリリースノートは1行のみで、変更点の記載はありません。

コミットから確認できる主な変更は次のとおりです。

- Academic Researchers プラン(sci / sci_plus)への対応
- ランタイムエージェント登録の署名付きアサーション
- フルエージェントフォークで親履歴を既定で保持
- クラウドスキルのスナップショット読み込み
- プロンプトキャッシュキーの外部制御

安定版 0.164.0 は本日時点で未公開です。直近の安定版は 10月15日公開の 0.163.0 のままです。

[ソース](https://github.com/openai/codex/releases)

### Codex 28日間企画 Day 15 で全ユーザーの利用枠リセット

10月19日、28日間企画の Day 15 として、Codex の全ユーザーを対象に使用量(usage)のフルリセットが実施されました。Tibo による配信「Cooking with Codex Ep.1」とあわせて告知されています。

[ソース](https://x.com/thsottiaux)

### OpenAI が Orchestra Bio を買収

10月20日、OpenAI は創薬開発の進行管理を行う AI エージェント企業 Orchestra Bio の買収を発表しました。同社の技術はライフサイエンス基盤 Rosalind に統合されます。買収金額は非公開です。

[ソース](https://openai.com/news/)

## コミュニティの反応

### 低リソース言語(COBOL/Fortran/VB)のコーディング性能向上を発表

X では公式数値を驚きとともに共有する投稿が見られました。トーンは好意的です。

#### ポジティブ

> COBOL 移行テストの伸び幅が大きい。GPT-5.6 Sol が 5.4% だったところ、GPT-6.1 Sol は 86.6% まで到達している — @nicolaycz [出典](https://x.com/nicolaycz/status/2112657718435577923)

#### ネガティブ

該当なし

#### Tips

> Codex で GPT-6 Astra を選ぶ判断軸は、コードの難しさだけでなく作業範囲の広さと途中で必要になる判断の回数。GPT-5.6 Sol との使い分け、推論強度、AGENTS.md に書く境界、API 移行時の注意点を整理 — kas's blog [出典](https://zenn.dev/kas_blog/articles/20260908-gpt-6-astra-codex)

### API の 12時間プロンプトキャッシュ(28日間企画 Day 16)

X では TTL(保持時間)そのものより、プロンプトの構成とコスト構造に着目した実務寄りの投稿が中心でした。トーンは中立〜好意的です。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> TTL より prefix の配置が重要。instructions と tool schema を breakpoint で分け、変わらない部分をキャッシュ対象にする。GPT-5.6 以降は 1024 トークン以上が必要で、usage の cached_tokens を確認すべき — @jayzhoupro [出典](https://x.com/jayzhoupro/status/2112619021120225641)

> prompt_cache_options.ttl で12時間を指定すると idle 時間を挟んでも再課金されず、エージェント運用に有効。書き込み 2.5倍・読み取り 0.1倍のコスト構造 — @TSC [出典](https://x.com/TSC/status/2112618244565537031)

### Codex CLI 0.164.0-alpha.7 / alpha.8 公開

alpha.7 / alpha.8 とその新機能(Academic Researchers プラン対応、署名付きアサーション、親履歴保持など)に関する個人ユーザーの投稿は、X / Zenn / Qiita のいずれでも確認できませんでした(該当なし)。

安定版 Codex CLI の設定・サンドボックスに関する記事は国内で公開されています。

#### Tips

> 最近の Codex CLI は古い config.toml の一部を受け付けなくなっている。カスタムプロバイダー設定の書き方と起動エラーの対処法を 0.162.1 で確認 — xiongyuanmeng1006 [出典](https://qiita.com/xiongyuanmeng1006/items/7992d5a79e1d19354db5)

> workspace-write が実際にどこまで止めるかを codex sandbox で検証。/tmp には書けるが、ホーム配下と .git への書き込みと通信は止まるため、サンドボックス内では git commit もできない(0.163.0、bubblewrap 環境) — エージェント規約工房 [出典](https://zenn.dev/agentkiyaku/articles/9a93fbb6076fa8)

### Codex 28日間企画 Day 15 で全ユーザーの利用枠リセット

X では利用制限・リセットに関する一般的な言及はあるものの、Day 15 のフルリセットや「Cooking with Codex Ep.1」に直接ふれた個人ユーザーの実体験・感想は確認できませんでした(該当なし)。

### OpenAI が Orchestra Bio を買収

X の投稿は買収ニュースを事実ベースで共有するものにとどまり、感想や Tips に該当する投稿は確認できませんでした(該当なし)。

## ソース

- [GitHub: openai/codex Releases](https://github.com/openai/codex/releases)
- [OpenAI News](https://openai.com/news/)
- [X: @nicolaycz(COBOL 移行テストの伸び幅)](https://x.com/nicolaycz/status/2112657718435577923)
- [X: @jayzhoupro(12時間キャッシュと prefix 配置)](https://x.com/jayzhoupro/status/2112619021120225641)
- [X: @TSC(12時間 TTL のコスト構造)](https://x.com/TSC/status/2112618244565537031)
- [Zenn: CodexでGPT-6 Astraを選ぶ判断軸とAPI移行チェック](https://zenn.dev/kas_blog/articles/20260908-gpt-6-astra-codex)
- [Qiita: Codex config.toml の書き方：カスタムプロバイダー設定と起動エラーの対処法](https://qiita.com/xiongyuanmeng1006/items/7992d5a79e1d19354db5)
- [Zenn: Codex CLI の workspace-write を codex sandbox で検証](https://zenn.dev/agentkiyaku/articles/9a93fbb6076fa8)
- [Zenn: OpenAI トピック](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
