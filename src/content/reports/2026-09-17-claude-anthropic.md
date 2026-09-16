---
title: "公式更新なし、MCP運用の落とし穴に関心"
summary: "本日の公式アップデートはありません (Claude Code の最新は前回報告済みの v2.1.273)。代わりに日本語コミュニティでは、MCPサーバーの孤児プロセスやtimeout指定、静かに死ぬフック、OpenTelemetryで測れる範囲といった「運用して初めて分かる落とし穴」の実測記事が目立ちました。"
importance: 1
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-17

features: []
codex_review: "派手な新機能より、MCPやフックが実運用でどう壊れるかに視線が集まっているのが面白い。業界全体への衝撃は小さいが、成熟局面の重要なサインだと思う。"
codex_importance: 2
---

## 公式アップデート

本日の公式アップデートはありません。

Claude Code Releases の最新は v2.1.273 (2026-09-15公開) で、v2.1.271〜273 の内容は前回レポート (2026-09-16) で報告済みです。以降の新規リリースはありません。

[ソース](https://github.com/anthropics/claude-code/releases)

## コミュニティの反応

本日は公式の新規情報がないため、Zenn / Qiita に本日公開された実運用レポートを中心にまとめます。X検索はStep 1で新機能が抽出されなかったためスキップされています。

### MCPサーバーの運用トラブル

#### ネガティブ

> PCが重くなったのでタスクマネージャーを見たら `node.exe` が230個、合計約2.7GB残っていた。Claude Code から使っている Apple Health 系 MCP サーバーが、セッションを閉じても終了せず残り続けていた。Windows では npx 経由で起動した孫プロセスが親と一緒に死なない — [Claude CodeのMCPサーバーが230個残ってPCが重かった](https://zenn.dev/kentaro_tak/articles/claude-code-mcp-orphan-processes-windows)

#### Tips

> たまに固まる MCP サーバーに `"timeout": 500` (0.5秒のつもり) を設定したら、実際には約28時間になっていた。1000未満の値は無視され、`MCP_TOOL_TIMEOUT` の既定値 (約28時間) にフォールバックする。v2.1.162 より前は1000未満が1秒に丸められていた — [timeout に 500 と書いたら、28時間になった](https://zenn.dev/quintetkit/articles/timeout-500-is-28-hours)

> 自作のRSS + ベクトル検索ツールを MCP サーバー化し、起動ごとの全記事再embedを ChromaDB の差分更新に変更。記事数の増加で起動時間が伸びる問題を解消した — [自作RAGニュース検索をMCPサーバー化し、全記事再embedをChromaDBの差分更新に直した](https://zenn.dev/satoru_o/articles/014317b053f0aa)

> KiCad 10 の回路図・基板を Claude Code から設計する MCP サーバーを自作し、設計理由を部品・ネット・ベタ自体に記録する方式を実装した — [シンプルな指示で基板ができた話](https://zenn.dev/icbs/articles/e38c72fb72493d)

### フック・可観測性・コストの計測

#### ネガティブ

> Claude Code のフックはエラーを出さずに動かなくなる。settings.json に書いてあり、ファイルも存在し `bash -n` も通るのに呼ばれていない。手元の117本を数えたら12本がどこからも呼ばれていなかった。6つの壊れ方と、毎回ゼロから数える監査スクリプトを公開 — [Claude Code のフックは、静かに死ぬ](https://zenn.dev/sactechnologies/articles/d990489b0e759d)

#### Tips

> OpenTelemetry の受け口を作って実際に流したところ、「誰がどのモデルをどれだけ使ったか」「どのツールが何回・何ミリ秒か」「編集提案の承認率」は取れたが、「どのリポジトリの作業か」は出なかった — [Claude CodeのOpenTelemetryで何が計測できるのか](https://zenn.dev/vesslabs/articles/36cc6d6ade0976)

> 自分のセッションログ9,906件のツール呼び出しのうち、失敗フラグは283件 (2.9%)。内訳は統治33.6% / 実失敗34.3% / 「出力はあるのに exit≠0」21.2% / 不明11.0%で、実際に壊れていたのは3分の1。フラグは両方向に誤るため「エラー率」を運用指標にすると直す価値のないものを直すことになる — [エージェントの「失敗」283件を分類したら、本当の失敗は3分の1しかなかった](https://zenn.dev/tsutomusaito/articles/agent-tool-failures-taxonomy-ja)

> Agent SDK は `query()` の結果メッセージにコスト情報を載せるが、請求データそのものではなく、二重計上・過小計上・ゼロ化といった落とし穴がある — [Agent SDK でエージェント実行コストを追跡する](https://qiita.com/akihidem/items/cbec65cf0dd3fcf6b364)

### プロンプト・指示書の設計

#### Tips

> 同一バグ・同一ファイルで依頼文の末尾だけを入れ替えて各5回試したところ、「全部作り直して」と頼んだ8回すべてで対象関数の外側は1文字も変わらなかった。変わったのは使われたツールと送信文字数で、1145文字 対 68文字 (約16.8倍) — [AIに「全部作り直して」と頼んだら、8回とも変わったのは1か所だけだった](https://zenn.dev/numarn/articles/prompt-full-rewrite-vs-partial-edit-handson)

> 6リポジトリを3人で回すため、指示書を CLAUDE.md (憲法) / .planning (実行計画) / .serena (決定の記録) の3層に分離。効くのは「やること」より「やらないこと」だが、CLAUDE.md は強制ではなく文脈なので、絶対に止めたいものは別の仕組みに置く — [Claude Codeに「指示書」を設計する](https://zenn.dev/junghun/articles/claude-code-instruction-design)

> AI に要約させると母数が落ちる。「0件でした」という報告から「何件のうちの0件か」が消える — [読まない技術 第10回：AIに要約しろと言わない技術](https://zenn.dev/garplab/articles/53eb86ab5df3ad)

> 「勝手にビルドするな」と指示してもすり抜けられたため、メモリに約束を書かせる方針をやめ、権限そのものを剥奪する方向に切り替えた — [AIに"誓わせる"のをやめて、権限を奪った話](https://zenn.dev/yskms/articles/cbba4a752a9f07)

### スキルと外部ツール連携

#### Tips

> 2026年9月15日リリースの Notion 3.7 が Agent Skills を中心に据え、作成したスキルを Claude Code / Cursor 側へ共有できるようになった — [NotionのAgent SkillsをClaude Code/Cursorに共有する新機能まとめ](https://qiita.com/picnic/items/1d21796d346cb9dfe799)

> 組み込みの artifact-design Skill で、Claude Code が出す素のHTMLを「人に見せられるデザイン」に整える — [artifact-design Skillで、Claude Codeの成果物を「見せられるデザイン」にする](https://qiita.com/inoyu-qiita/items/1c95a3c8397070e67dcb)

> Notion 3.6 (2026年7月) で追加されたHTMLブロックに、Claude Code で生成した設計ドキュメントHTMLをそのまま置けるようにするスキルを作った — [Notionに「生きたHTML」を貼れるって知ってました？](https://zenn.dev/zenn_kurara/articles/1abc5073a3a21c)

### 実践事例

#### ポジティブ

> QA専任が少人数のまま複数プロダクトを見る限界から、テスト設計のプロセスごとAIスキル化。金銭計算が絡む大規模施策をリリース後の不具合報告なしで通せた。ただし検証コストは消えず、属人化は「スキルを書ける人が限られる」に置き換わっただけだった — [AIに「テストを書かせる」のをやめた](https://zenn.dev/rb_engineering/articles/08da796df3d58d)

> 一人 + Claude Code のロールセッションだけで、7か月かけて家庭向けSaaSを商用リリース。SvelteKit + AWS CDK のフルサーバレス構成で月額1〜3ドルの実測 — [生成AIに実装を任せて商用サービスを作る](https://zenn.dev/takenori_kusaka/books/ganbari-quest-design)

> 市外局番だけで日本のどこかを当てるゲームを、実作業4時間・コードのほとんどを Claude Code に書かせて公開した — [「0774ってどこ？」](https://zenn.dev/blackmose/articles/c5eee066bc59e2)

#### Tips

> MacBook Pro (Apple M5 Pro) 上で Qwen3.8 27B を Ollama で動かし、Claude Code から使えるようにした — [Claude CodeをローカルLLMで動かす](https://zenn.dev/ell/articles/f0d5dd9ae3ef26)

> Claude Code に Kindle 本の原稿を2冊書かせ、docx変換・表紙生成・KDP登録まで自動化。原稿自体は問題なく書けたが、KDP の「目次がありません」警告は見た目に目次があっても消えない — [Claude Code に Kindle 本を2冊書かせて KDP に出すまでに踏んだ罠](https://zenn.dev/takuyaauto/articles/0415482c3aa61b)

> claude.ai / Claude Desktop / Claude Code / Claude API と用語が多く混乱しがちなため、料金プランとAPIの違いを含めて整理した入門記事 — [Claude関連ワード総まとめ](https://qiita.com/zzzzico/items/cd3098e503a1969f9b22)

#### ネガティブ

> 「AI があればプログラマーはいらない」という風潮は危険。アイデアを正しく伝えれば形にできるのは一面では真実だが、そこに留まるリスクがある — [「AI があればプログラマーはいらない」という風潮が危険な理由](https://qiita.com/tomokusaba/items/a63285193c854a3b19da)

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
