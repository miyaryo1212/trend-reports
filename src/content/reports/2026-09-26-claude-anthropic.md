---
title: "Claude が9ループ振幅計算とエボラ対応で成果"
summary: "Claude Science から2件の科学応用事例が公開されました。Claude Fable 5.1 を使った理論物理の9ループ散乱振幅計算を2手法で検証し、CPU96個×約1週間・総額1,000〜2,000ドルで到達。DRC のエボラ (Bundibugyo 株) 対応では WHO AFRO・CEPI・INRB と協力し、状況報告書の作成を1日から1時間未満へ短縮しました。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-26

features:
  - "[Claude Science] 9ループ振幅計算の達成"
  - "[Claude / Claude Science] エボラ対応 (DRC Bundibugyo株) での活用事例"
codex_review: "9ループ計算は「AIが物理を発見」と煽るより、既知の手法を長時間・低コストで回し、独立検証までつなげた工学的成果として評価したい。エボラ報告の時短は地味だが、現場の判断を支える用途としてこちらの方が実利を感じる。"
codex_importance: 3
---

## 公式アップデート

本日の Claude Code リリースはありません (v2.1.282 / v2.1.281 は前回レポートで詳述済み)。本日の新規情報は Claude Science 関連の2件です。

### [Claude Science] 9ループ振幅計算の達成

Claude Fable 5.1 を用いて、理論物理の未解決問題である9ループ散乱振幅の計算を達成したことが公開されました。

- 結果はブートストラップ法とフォームファクター法という **2つの独立した手法で検証**
- 計算資源は **CPU 96個 × 約1週間**
- 総額は **約1,000〜2,000ドル**

[ソース](https://www.anthropic.com/news)

### [Claude / Claude Science] エボラ対応 (DRC Bundibugyo 株) での活用事例

コンゴ民主共和国 (DRC) の Bundibugyo 株によるエボラ流行への対応で、WHO AFRO・CEPI・INRB と協力して Claude を活用した事例が公開されました。

- 状況報告書 (situation report) の作成時間を **1日 → 1時間未満** に短縮
- ゲノム組み立てと系統樹構築を **自然言語での指示** により実行

[ソース](https://www.anthropic.com/news)

## コミュニティの反応

### [Claude Science] 9ループ振幅計算の達成

#### ポジティブ

> Claude が9ループ振幅計算を自律的に実行し、2手法で検証した結果が独立検証された。コスト1,000〜2,000ドルで postdoc 並みの成果が出せる。 — @itsvlady [出典](https://x.com/itsvlady/status/2103587204706738241)

> Anthropic の Claude が9ループ散乱振幅問題をほぼ無人運用で解決したことは "major scientific breakthrough" であり、AI による自律的発見の時代を示している。 — @FrontieraTechIT [出典](https://x.com/FrontieraTechIT/status/2103585630806593866)

> 長年停滞していた9ループ物理問題を解決した点について "pace is genuinely head-spinning"。 — @zeng_xian40157 [出典](https://x.com/zeng_xian40157/status/2103584825818910853)

#### ネガティブ

> 今回の成果は既存の amplitudeology 手法を実行しただけで、新規の物理発見や手法開発ではない。endurance と engineering の勝負にすぎない。 — @ThreadedInsight [出典](https://x.com/ThreadedInsight/status/2103589490984149029)

> 簡易化された理論での記録更新に過ぎず、新しい法則の発見や物理学者の代替には至っていない。 — @Neeraj_Kumar222 [出典](https://x.com/Neeraj_Kumar222/status/2103583233128702119)

#### Tips

**該当なし**

### [Claude / Claude Science] エボラ対応 (DRC Bundibugyo 株) での活用事例

X 検索での個人ユーザーの反応は**該当なし**でした。

### 日本語コミュニティ

本日は Opus 5.5 への移行に伴うプロンプト・設定の棚卸し記事と、コンテキスト/コストの実測記事が目立ちます。Claude Science 関連では、生体分子モデル最適化キットを読み解く記事が出ています。

- [【備忘録】Claudeによる生体分子モデル最適化の36キットを読む ― exact / fast / big と再現条件を整理する](https://qiita.com/Tadataka_Takahashi/items/1716b92c1cb24d91d99a) (Qiita / Tadataka_Takahashi) — 9月17日公開の生体分子モデリング最適化成果と、公式 GitHub の36個の推論最適化キットの整理
- [公式が語る『Claude Opus 5.5』の変わった癖と使いこなし方。「よく考えて」は消して、止まる条件を書く](https://zenn.dev/eques_blog/articles/8d9912c413ee26) (Zenn / MotokiNakamura) — Opus 5.5 で不要になった「よく考えて」指示と、完了条件・停止条件を書くという推奨の解説
- [Claude Opus 5.5 は何が変わったのか。単価は下がったが、仕事あたりのコストは横ばい](https://zenn.dev/e8dev/articles/claude-opus-5-5-what-changed) (Zenn / e8dev) — 公式発表・移行ガイド・Artificial Analysis を突き合わせた乗り換え判断の観点
- [Opus 5.5 で使っているプロンプトやスキル、そのままで大丈夫ですか?](https://zenn.dev/irosona/articles/claude-api-prompt-audit-devlog-pipeline) (Zenn / irosona) — モデル更新時にプロンプトガイドの推奨がどう変わるかと、旧モデル向け指示の見直し
- [/claude-api prompt-audit で棚卸ししたら、Claude Opus 5.5 化で外れた設定がぞろぞろ出てきた](https://zenn.dev/nanora/articles/20260925-claude-prompt-audit-opus55) (Zenn / nanora) — effort 設定が効かず xhigh のままだった等、設定と実物のずれの検出
- [Claude Code で Opus 5.5 をメインにして Fable をアドバイザーに設定する](https://zenn.dev/yrd/articles/74a3b64f0d4233) (Zenn / J niwacis) — Opus 5.5 が実装し、判断が必要な場面だけ Fable 5.1 に相談させる構成 (2026-09-25 検証)
- [CLAUDE.mdが毎往復の77%を食っていた。132,180字→5,782字に縮めた記録](https://zenn.dev/yuu_inaka/articles/claude-md-token-diet) (Zenn / ゆう) — 1往復 128,003 → 34,973 トークン (73%減) までの削減手順と測定
- [ウェビナー字幕をCLAUDE.mdに全文で入れると？ Claude Codeで18回比べたら採点は同点・入力トークン約4割増](https://zenn.dev/kanta13jp1/articles/claude-md-webinar-transcript-ab-test) (Zenn / kanta13jp1) — 3種類の CLAUDE.md × 3課題 × 各2回の A/B 比較
- [Claude Code v2.1.282 の「設定ファイル経由の改ざん」対策を、旧版と並べて claude doctor で確かめた](https://zenn.dev/motani/articles/claude-code-v2-1-282-settings-security-fix) (Zenn / motani) — v2.1.281 と v2.1.282 に同じ設定ファイルを読ませた実機比較
- [Claude Codeの /loop と /goal 入門：「時間で繰り返す」と「終わるまで走らせる」を実機で使い分ける【2026年9月版】](https://zenn.dev/takuh/articles/3856bf08d728a9) (Zenn / takuh) — 2種類の繰り返しコマンドの使い分け
- [Claude CodeでOpus 5.5を使う前に：モデル選択・利用上限・会話初期化を分ける](https://qiita.com/OfoxAI/items/1ad251e6902be1fbf687) (Qiita / OfoxAI) — 切り替えで詰まったときにどの段階で止まっているかを切り分ける手順
- [2026-09-25 Claude Code 公式ドキュメント更新：プラグインマーケットプレイス作成手順とサーバーサイドレビュー仕様の文書化](https://qiita.com/akihidem/items/317212b4fbc15dc08624) (Qiita / akihidem) — auto モードのサーバーサイド分類器のバージョン要件とフォールバック動作の明文化

## ソース

- [Anthropic News](https://www.anthropic.com/news)
- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
