---
title: "Claude Code v2.1.205公開、/doctorが自動修正機能に進化・安全性強化"
summary: "Claude Code v2.1.205（約20件の変更）がリリース。/doctor がフルセットアップ点検＋自動修正ツールに刷新され /checkup エイリアスを追加、セッションtranscript改ざんブロックや承認偽装防止など安全性を強化、agent view の状態表示も改善。X上では /doctor 刷新への好意的な声とマウス操作の不具合報告、agent view 可視化への高評価が目立った。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-10

features:
  - "Claude Code v2.1.205公開"
  - "/doctor をフルセットアップ点検化（/checkup エイリアス）"
  - "セッション記録改ざんブロック"
  - "auto mode の rm -rf 確認"
  - "自動更新のメモリ削減"
  - "バックグラウンド通知の承認偽装防止"
  - "agent view 改善"
  - "agent view のPRリンク拡張"
  - "Claude Browser MCP名を予約"
  - "--json-schema 不具合修正"
  - "Cowork VMモード起動不具合修正"
codex_review: "派手さは薄いが、CLIエージェントが実務に入る段階ではこういう安全性と運用UXの磨き込みこそ効く。/doctorの自動修正は面白い一方、業界全体を揺らすというより導入障壁を着実に下げる堅実な更新だ。"
codex_importance: 3
---

## 公式アップデート

前回レポート時点の最新は v2.1.204 でしたが、その後 **v2.1.205**（2026-07-08）がリリースされました。新機能追加よりも安全性強化とバグ修正に重点が置かれた更新で、約20件の変更を含みます。以下は本日新規の差分です。

### Claude Code v2.1.205

安全性・整合性の強化:

- **セッション記録改ざんブロック**: auto mode に、セッションの transcript ファイルへの改ざんをブロックするルールを追加した。
- **バックグラウンド通知の承認偽装防止**: バックグラウンドタスクの通知に「人間の入力は行われていない」と明示し、transcript 内に捏造された承認が実行されるのを防ぐようにした。
- **auto mode の `rm -rf` 確認**: 文脈から解決できない変数に対して `rm -rf` を実行する前に、確認を求めるよう改善した。

コマンド・UI:

- **`/doctor` をフルセットアップ点検化**: 従来の「診断するだけ」から、問題を診断してその場で修正までできる完全なセットアップチェックアップに刷新。`/checkup` をエイリアスとして追加した。
- **agent view 改善**: 各行に生のツール呼び出しテキストではなく、色付きの状態語と分類器が生成した見出しを表示。ブロック中セッションは peek で要求内容（正確な問い合わせ）まで開くようにした。
- **agent view の PR リンク拡張**: 既存 PR を編集・マージ・コメント・push したセッションも、`claude agents` 上で当該 PR をリンク表示するようにした。

その他:

- **自動更新のメモリ削減**: 自動更新バイナリのダウンロードをメモリ保持からディスクへストリーム化し、更新時のピークメモリ使用量を約400MB削減した。
- **Claude Browser MCP名を予約**: Claude Desktop のペイン改名に備え、「Claude Browser」MCP サーバー名を（「Claude Preview」と並んで）予約。ユーザー設定の MCP サーバーはこの名前で登録できなくなった。
- **`--json-schema` 不具合修正**: 無効なスキーマ指定時に無言で非構造化出力になる問題と、`format` キーワードを使うスキーマが拒否される問題を修正した。
- **Cowork VMモード起動不具合修正**: CLI 2.1.203+ で Cowork VM-mode のローカルエージェントが「Not logged in · Please run /login」で起動失敗する不具合を修正した。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.205)

## コミュニティの反応

> 本日抽出した新機能のうち、X検索で個人ユーザーの実体験・感想がヒットしたのは「v2.1.205 全体／`/doctor` 刷新」と「agent view 改善」に限られます。セッション記録改ざんブロック・`rm -rf` 確認・自動更新メモリ削減・承認偽装防止・PRリンク拡張・Claude Browser MCP名予約・`--json-schema` 修正・Cowork VMモード修正は、直近1週間で個人の実体験投稿を確認できませんでした（公式リリースノートの転載・bot・企業寄りアカウントが中心）。

### v2.1.205 公開 / `/doctor` のフルセットアップ点検化

#### ポジティブ

> v2.1.205で `/doctor` が本格的なセットアップ診断ツールに進化し、環境の不具合を自動で見つけて直せるようになった。調子が悪いときはまず叩くのが良さそう。 — @FUK_useful_info [X](https://x.com/FUK_useful_info/status/2075184701623660578)

> `/doctor` がパッシブな診断表示から、包括的な8チェックのセットアップ修復ツールに大改造された。 — @AnExiledDev [X](https://x.com/AnExiledDev/status/2074944267693253074)

#### ネガティブ

> v2.1.205で、Claudeが質問を促すプロンプトをマウスクリックすると選択肢が消えてしまう不具合に気づいた。 — @Orbisius [X](https://x.com/Orbisius/status/2075248795927855519)

#### 解説記事

> `/checkup`（旧 `/doctor`）で環境を診断・自動修正する手順を、公式 changelog をベースに解説。v2.1.205 で「診断するだけ」から「その場で修正までできる」に変わった点を整理している。 — しろちゃん [Zenn](https://zenn.dev/shirochan/articles/a24092cfebefa0)

> v2.1.205 全体のまとめ記事。MCP 名予約という破壊的変更と、安全性強化・バグ修正に重点が置かれたリリースであることを解説している。 — picnic [Qiita](https://qiita.com/picnic/items/e6d330b7723ee647fdcd)

### agent view 改善

#### ポジティブ

> Claude Code の複数エージェントを「ピクセルオフィス」風に視覚化して管理でき、色付きステータスやリアルタイムのコマンド表示で「どのエージェントが何をしているか一目でわかる」ようになったのが最高。ターミナルログを眺める必要がなく、チーム管理のように扱える。 — @de1lymoon [X](https://x.com/de1lymoon/status/2073479416823562491)

> エージェントがバックグラウンドでタスク完了→コミット→PR作成まで自動でやってくれ、色付きステータスで進捗が一目瞭然。作業中に別タスクを進めつつ、必要な時だけ確認できるのが便利すぎる。 — @dr_cintas [X](https://x.com/dr_cintas/status/2073791486236270596)

#### Tips

> セッションを色付きステータス（緑=実行中、赤=許可待ち、黄=完了）でmacOSメニューバーに表示する「CC Status Bar」アプリを使えば、ターミナルを覗かずに peek でき、ホットキーで該当セッションへ即ジャンプできる。 — @DanKornas [X](https://x.com/DanKornas/status/2074268139366314204)

> 各ターミナルタブの状態をキーボードLED（緑=待機待ち、赤=動作中、黄=アイドル）で即視認できる自作フックを設定。ブロック中セッションの内容まで色で peek できるので、タブをいちいち確認せずに済む。 — @ayushrout2012 [X](https://x.com/ayushrout2012/status/2075272369644675546)

> エージェントがツール呼び出し前に何を検討していたかを覗く「J-lens」的な手法で、「出力だけ見る」から「前段階まで確認」へ運用を移行した実感。 — @nume0615 [X](https://x.com/nume0615/status/2074687782006739069)

### セッション記録改ざんブロック

該当なし

### auto mode の rm -rf 確認

該当なし

### 自動更新のメモリ削減

該当なし

### バックグラウンド通知の承認偽装防止

該当なし

### agent view のPRリンク拡張

該当なし

### Claude Browser MCP名を予約

該当なし

### --json-schema 不具合修正

該当なし

### Cowork VMモード起動不具合修正

該当なし

## ソース

- [GitHub - Claude Code Releases (v2.1.205)](https://github.com/anthropics/claude-code/releases/tag/v2.1.205)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
