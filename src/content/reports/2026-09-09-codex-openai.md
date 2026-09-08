---
title: "Images 2.5公開、Codexはmemory v2へ"
summary: "画像モデル ChatGPT Images 2.5 とAPI版 GPT-Image-2.5 が公開され、OpenAIは内部モデルによるNavier–Stokes問題の有限時間特異点の証明を発表した。Codex CLI は 0.154.0-alpha.7 で memory v2 と Guardian のコンテキスト共通化が進み、X では reasoning effort 変更によるキャッシュ破壊への不満が目立つ。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-09

features:
  - "ChatGPT Images 2.5 / GPT-Image-2.5 (Flare / Sunburst)"
  - "OpenAI 内部モデルによる Navier–Stokes 問題の解の提示"
  - "Codex CLI 0.154.0-alpha.7"
  - "Codex の memory v2"
  - "Codex Guardian のレビューコンテキスト共通化"
  - "macOS のユーザー検証 (Secure Enclave 署名)"
  - "reasoning effort の固定と保持"
  - "Codex TUI の細部改善"
  - "Codex 音声機能の追加整備"
codex_review: "画像2.5より、未検証ながらNavier–Stokes発表の破壊力が大きい。一方でCodexは派手さより、memoryと権限系の地味な基盤固めが効いている印象です。"
codex_importance: 4
---

## 公式アップデート

### ChatGPT Images 2.5 / GPT-Image-2.5 (Flare / Sunburst)

9/8、新しい画像モデル ChatGPT Images 2.5 が公開された。生成速度が従来比 50% 向上し、Sketch ツールとテンプレートが追加されている。API 版として GPT-Image-2.5 Flare / Sunburst の 2 系統も同時提供された。

[ソース](https://openai.com/index/)

### OpenAI 内部モデルによる Navier–Stokes 問題の解の提示

9/8、OpenAI は GPT-6 Astra を超える内部モデルを用いて Navier–Stokes 方程式の有限時間特異点の存在を証明したと発表した。約 1 万エージェントを並列実行し、130B トークン・88 時間を投入して導出、結果を Lean で形式化したとされる。

[ソース](https://openai.com/index/)

### Codex CLI 0.154.0-alpha.7

9/8 17:47 UTC に 0.154.0-alpha.7 がプレリリースとして公開された。前日の alpha.6 に続く連日のリリースで、安定版は 0.153.4 のまま据え置かれている。今回の alpha に入った主なマージは memory v2 と Guardian 周りに集中している。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.7)

### Codex の memory v2

バージョン指定が可能なメモリ形式と、v1 とは分離したストレージが導入された。記録は要約のみを抽出する方式に変わり、統合 (merge) と読み出しにそれぞれ専用プロンプトが用意されている。移行期間中は v1 との二重書き込みを行い、移行準備状況のレポートを出力する。

[ソース](https://github.com/openai/codex/releases)

### Codex Guardian のレビューコンテキスト共通化

権限設定、信頼済みツール / スキル、REPL の実行証跡などを共有コンテキストレジストリへ集約し、Guardian の各レビュアーが同じコンテキストを参照する構成に変更された。あわせて同期レビュアーがスレッドマネージャの管理下に移された。

[ソース](https://github.com/openai/codex/releases)

### macOS のユーザー検証 (Secure Enclave 署名)

前回取り上げた MCP ユーザー検証について、macOS 向けにネイティブ実装が入った。検証の署名を Secure Enclave で行い、TUI 側に検証プロンプトが追加されている。

[ソース](https://github.com/openai/codex/releases)

### reasoning effort の固定と保持

設定によるオーバーライドが有効な間、リクエストの reasoning effort を固定するようになった。固定値は compaction を越えても維持され、処理成功時にリセットされる。

[ソース](https://github.com/openai/codex/releases)

### Codex TUI の細部改善

ターン完了時刻の表示、computer action のグルーピング表示、接続先の Codex サービスが CLI より古いバージョンの場合の警告表示が追加された。

[ソース](https://github.com/openai/codex/releases)

### Codex 音声機能の追加整備

音声コントロール専用のコンポーザーストリップ、設定可能なミュートショートカット、split-flap アニメーションによるライブ字幕表示が追加された。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

### ChatGPT Images 2.5 / GPT-Image-2.5 (Flare / Sunburst)

X 上では、リリース前の憶測や A/B テストの報告は見られたものの、Sketch ツール・テンプレート・Flare / Sunburst・生成速度 50% 向上といった具体的な新機能を実際に使った個人ユーザーの投稿は確認できなかった。日本語コミュニティでは公式発表の速報解説記事が出ている。

#### Tips

> ChatGPT Images 2.5 とは？OpenAI公式発表を3分で速報解説 — @kinamocchi_tech [出典](https://qiita.com/kinamocchi_tech/items/486ee353294f09b38aa8)

#### ポジティブ / ネガティブ

該当なし。

### OpenAI 内部モデルによる Navier–Stokes 問題の解の提示

本日もっとも反応が集まったトピック。驚嘆と AI の数学能力の伸びに対する評価が中心で、批判的な投稿は確認できなかった。

#### ポジティブ

> OpenAI の新内部モデルが Navier–Stokes を 1 万エージェント・88 時間で解いたことに「Holy Cow!」と驚嘆。数学ベンチマークの急激な向上を指摘。 — @StatsWire [出典](https://x.com/StatsWire/status/2097379189842391106)

> 発見から Lean 形式化までを AI が連鎖的に実行した点を「Wild」と評価し、深層数学の検証プロセスが変わる可能性に期待。 — @scalevise [出典](https://x.com/scalevise/status/2097400831674872281)

> 約 90 年未解決の難問を AI エージェント群が突破したニュースに「とんでもない」「エグい」と反応。 — @lucky_note_lab [出典](https://x.com/lucky_note_lab/status/2097437828577972460)

> 10,000 エージェント・88 時間という数字を挙げ、「2028 年に備えていない」と加速への驚きを表明。 — @almmaasoglu [出典](https://x.com/almmaasoglu/status/2097437887092433252)

> GPT-6 Astra の性能向上を実感。週間枠の 9 割を使って 30 時間分の仕事量をこなせた。 — @nagakeiichi [出典](https://x.com/nagakeiichi/status/2097438086271746101)

#### ネガティブ / Tips

該当なし。

### reasoning effort の固定と保持

今回の Codex 側の変更点そのものではなく、reasoning effort を切り替えることのコスト面の副作用に不満が集中している。

#### ネガティブ

> Codex で reasoning effort (thinking level) を medium → high に変えるだけで cache hit 率が 92% → 66% に落ち、大量のトークン再処理が発生する。prefix が変わってキャッシュが壊れるので、気軽にトグルすべきではない。 — @theteknosaur [出典](https://x.com/theteknosaur/status/2097326087806308682)

> Codex の reasoning effort 設定でもサブエージェントが積極的に動いてトークン消費が激しく、Ultra より Max 推奨という挙動に不満。 — @koromogorov [出典](https://x.com/koromogorov/status/2097294862261624979)

#### ポジティブ

> Sesori アプリで Deepseek 統合時に、model selection と timestamps に加えて reasoning effort が保持されるようになった。 — @sesori_ai [出典](https://x.com/sesori_ai/status/2097398580873232816)

#### Tips (日本語コミュニティ)

> GPT-6 Astra「Low」と Ultra を同じ課題で比較したところ、修正コードは 1 文字も変わらず内部推論トークンだけが 5.85 倍になった、という実測レポート。 — やまと [出典](https://zenn.dev/yamato_snow/articles/gpt6-astra-low-vs-ultra-token-comparison)

> GPT-6 Astra を使いっぱなしにしないため、Codex のメインエージェント自身にモデルと effort を自律的に切り替えさせるローカル中継ツール「baton」を作った話。 — kai [出典](https://zenn.dev/toybox19/articles/13c0ca2afaa8e0)

### Codex 音声機能の追加整備

前回は「既存スレッド内で Voice が使える」点への熱狂が中心だったが、本日は実運用に踏み込んだ評価と、ミュート機能の不足を自作で埋める Tips が出ている。

#### ポジティブ

> Codex voice agent をライブで体験し、マウス操作までこなす実用性に感動。Claude Code に戻れないレベル。 — @mattworkman [出典](https://x.com/mattworkman/status/2095851509552488601)

> Codex の voice が全セッションで使えるようになった追加は HUGE。フォルダや個別セッションからも voice を起動できる。 — @ernielm [出典](https://x.com/ernielm/status/2095863677966508434)

#### ネガティブ

> Codex voice は魔法のように便利だが、スレッドの自動切り替えやマルチタスクが不安定で、Codex 本体へのアクセスも一貫しない。「緩い端っこ」が多く実用しにくい。 — @emollick [出典](https://x.com/emollick/status/2095340390731940317)

#### Tips

> Codex voice を活用したいがデスクトップ版に簡単なミュート機能がなく、Apple Watch / iPhone からリモートミュートできる「hushbridge」を自作して外出中も使えるようにした。 — @calebini [出典](https://x.com/calebini/status/2095604737970184466)

### Codex CLI 0.154.0-alpha.7 / memory v2 / Guardian のレビューコンテキスト共通化

該当なし。0.153.x 系への言及や Guardian v2・GuardianThreadContext に関する技術的な紹介投稿は散見されたが、alpha.7 の内容や memory v2 の仕様に触れた個人ユーザーの実体験・感想投稿は確認できなかった。

### macOS のユーザー検証 (Secure Enclave 署名)

該当なし。

### Codex TUI の細部改善

該当なし。ターン完了時刻の表示、computer action のグルーピング、バージョン警告のいずれについても、個人ユーザーの投稿は確認できなかった。

## ソース

- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [Codex CLI 0.154.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.7)
- [X: Navier–Stokes 突破への驚嘆 (@StatsWire)](https://x.com/StatsWire/status/2097379189842391106)
- [X: Lean 形式化までの AI チェーンを評価 (@scalevise)](https://x.com/scalevise/status/2097400831674872281)
- [X: reasoning effort 変更で cache hit 率が低下 (@theteknosaur)](https://x.com/theteknosaur/status/2097326087806308682)
- [X: Codex voice の不安定さへの指摘 (@emollick)](https://x.com/emollick/status/2095340390731940317)
- [X: voice 用リモートミュート「hushbridge」を自作 (@calebini)](https://x.com/calebini/status/2095604737970184466)
- [Qiita: ChatGPT Images 2.5 とは？OpenAI公式発表を3分で速報解説](https://qiita.com/kinamocchi_tech/items/486ee353294f09b38aa8)
- [Zenn: GPT-6 Astra「Low」と Ultra の推論トークン比較](https://zenn.dev/yamato_snow/articles/gpt6-astra-low-vs-ultra-token-comparison)
- [Zenn: Codex 自身にモデルを切り替えさせる (baton)](https://zenn.dev/toybox19/articles/13c0ca2afaa8e0)
