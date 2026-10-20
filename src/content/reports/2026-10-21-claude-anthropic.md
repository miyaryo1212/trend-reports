---
title: "Claude Code新版2本、再開時の使用量警告を追加"
summary: "Claude Code v2.1.304とv2.1.305が公開され、auto modeの環境学習ガイド、Code Reviewのレビューレベル、Pro/Max向け再開時の使用量警告などが追加されました。Claude APIではInference hooksがEnterprise向けに正式提供となりました。Xでは再開警告を歓迎する声がある一方、Zennでは自環境で警告が出なかったという検証記事が出ています。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-10-21

features:
  - "Claude Code v2.1.304"
  - "Claude Code v2.1.305"
  - "Code Review レビューレベル"
  - "Pro/Maxプラン向け再開時の使用量警告"
  - "Inference hooks 正式提供"
  - "/claude-api managed-agents-secure"
  - "Mods向け decider: person と e.isReadOnly"
  - "CLAUDE_CODE_RETRY_WATCHDOG_USAGE_LIMIT_RECHECK_MS"
  - "カスタム ANTHROPIC_BASE_URL 配下での tool search 既定有効化"
  - "claude --worktree の削除安全化"
  - "VS Code拡張の Mods 描画対応"
codex_review: "一見すると小粒な更新だが、再開時警告や人間限定の承認は、エージェントを日常運用する際の「予想外の消費」と権限管理に手を入れていて地味に重要。ただ、警告が実環境で再現しない報告もあり、機能の信頼性はこれから見極めたい。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.304

2026年10月19日に公開されました。前版v2.1.303(バグ修正のみ)から1日での更新で、新機能と設定項目の追加が多数含まれます。

- **`/auto-mode-setup` を追加**: プロジェクトと最近のセッションを読み取り、auto modeに利用環境を学習させるガイド付き設定です。Bedrock、Vertex、Foundry、Claude apps gateway、テレメトリ無効セッションでも利用できます。
- **Code Review レビューレベル**: OwnerがQuick / Standard(既定) / Deepの3段階を組織単位で選べるようになり、リポジトリごとに個別のレベルも設定できます。あわせて、GitHub組織内の全リポジトリ(後から追加されたものを含む)を個別選択なしでレビュー対象にする管理設定が追加されました。
- **Pro/Maxプラン向け再開時の使用量警告**: 非アクティブな会話の再開が5時間制限の目立つ割合を消費する場合に警告します。そのまま再開するか、新しい会話を始めて前の会話を参照させるかを選べます。
- **`/claude-api managed-agents-secure`**: Managed Agentsのエージェント設定をAnthropic公開のセキュリティガイドと照合し、差分を報告します。設定の変更は行いません。
- **Mods向け `decider: "person"` と `e.isReadOnly`**: `tool.check` の応答に `decider: "person"` を指定すると、許可ダイアログかホストのコールバックのみが承認でき、誰にも確認できない環境ではModの理由を添えて拒否されます。`e.isReadOnly` はツール呼び出しが読み取り専用のときにセットされます。
- **カスタム `ANTHROPIC_BASE_URL` 配下で tool search を既定で有効化**: ゲートウェイが400または422を返した場合は、tool searchなしで再送します。
- **`claude --worktree` の削除安全化**: HEADがdetachedまたは別ブランチにあるとき、終了時に無確認でworktreeとブランチを削除してコミットを失う可能性があった問題を修正しました。
- **VS Code拡張**: Amazon Bedrock、Google Vertex AI、Microsoft Foundry、LLMゲートウェイ経由、テレメトリ無効のセッションでもチャットパネルにModsを描画できるようになりました。バックグラウンドサブエージェントは、各ステップをチャットに流す代わりにAgentカード下の1行表示になり、全文は /tasks で確認できます。

このほか、`rm -r` でマウントドライブ直下を削除する際の安全プロンプト追加、PreToolUse hookの拒否理由がSDKコールバックのタイムアウトで上書きされる問題の修正、`CLAUDE_CODE_AUTO_COMPACT_WINDOW` の `k` / `M` サフィックス対応など、多数の修正が含まれます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.304)

### Claude Code v2.1.305

2026年10月20日に公開されました。前版v2.1.304の回帰修正が中心です。

- **tool search 拒否時の全リクエスト失敗を修正**: Vertex、Bedrockなどのプロバイダや、ToolSearchを許可しない(または `--tools` から除いた)ゲートウェイ配下で、エンドポイントがtool searchを拒否すると全リクエストが失敗する2.1.304の回帰を修正しました。tool searchなしで再試行するようになります。
- **`sandbox.allowNestedUserNamespaces` を追加**: Linuxのサンドボックス内コマンドがユーザー名前空間を作成できるようにする設定です(Chromium、rootless podman向け)。リリースノートには、この設定によりサンドボックスのファイル保護を回避できる旨が明記されています。
- **`CLAUDE_CODE_RETRY_WATCHDOG_USAGE_LIMIT_RECHECK_MS` を追加**: 無人リトライモード(`CLAUDE_CODE_RETRY_WATCHDOG`)が、リセット時刻より前に解除された使用量制限を検知できるようになります。
- **`/usage` の改善**: 各警告が発生源を名指しした1行の修正案になり、`f` キーで適用できます。同じ修正案はVS Codeと `/doctor` にも表示されます。

このほか、`/effort` と `/autocompact` の設定がモデル名の大文字小文字や `[1m]` タグの違いで適用されない問題、bareリポジトリでのworktree作成元の誤り、ディスク満杯時のBashエラー表示、Workflow再開時に完了済み `pipeline()` / `parallel()` エージェントが再実行される問題などが修正されています。Code Reviewでは、レビュー中に複数のpushが入った際に最新コミットがレビューされない問題の修正と、未解消のブロッキング指摘が残っている再レビューをLGTMで始めないという変更が入りました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.305)

### Claude API: Inference hooks 正式提供

2026年10月20日付のClaude APIリリースノートで、Inference hooksがClaude Enterprise組織向けにベータを終了したことが告知されました。Inference hooksは、組織のAIセキュリティサーバーにClaudeを向け、claude.ai、Cowork、Claude Codeを横断する対象プロンプトごとに、サーバーの許可・拒否判定を待ってから推論に進む仕組みです(2026年8月5日にベータ開始)。10月20日付のエントリは正式提供の告知1行のみで、それ以外の変更点は記載されていません。

[ソース](https://platform.claude.com/docs/en/release-notes/api)

## コミュニティの反応

### Claude Code v2.1.304 / v2.1.305 全般

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

#### Zenn・Qiita

該当なし(本日時点でv2.1.304またはv2.1.305そのものを扱った記事は確認できませんでした。再開時の使用量警告を扱った記事は次項に記載しています)

### Pro/Maxプラン向け再開時の使用量警告

#### ポジティブ

> 長く放置した会話を習慣的に再開すると、有用な入力をする前に使用量の大きな部分を消費してしまう。新しい警告のおかげで、より安い「新規開始」を選びやすくなった — @AverageAiBro [出典](https://x.com/AverageAiBro/status/2112623134251925585)

> 古い冷えた会話を再開するのはやめよう。新しい会話を始めて古い方を参照させればいい。警告が安い経路へ誘導してくれる — @Tuminha_dds [出典](https://x.com/Tuminha_dds/status/2112438741969023235)

#### ネガティブ

該当なし

#### Tips

> 2.1.304でProまたはMaxの古いチャットを再開すると、5時間制限の目立つ割合を使うと警告される。推奨される対処は新しいチャットを始めること — @arb5z [出典](https://x.com/arb5z/status/2112542186739019984)

> 再開が制限を食いつぶす前に警告してくれる。そのまま再開するか、新規に始めてClaudeに前の会話を調べさせるかを選べる — @The_Tradesman1 [出典](https://x.com/The_Tradesman1/status/2112460779962368035)

#### Zenn・Qiita

- [Claude Codeの「再開すると5時間枠を使う」警告は、Max 20xの42万トークンの会話でも出ませんでした](https://zenn.dev/ojisan_ai_lab/articles/claude-code-resume-warning-20261020): Max 20x環境で、22時間放置・3.7日放置・圧縮済みの3本の会話を開き直したところ、3本とも警告は出なかったという観測記録。再開後の1通目は368,141トークンと424,459トークンで、会話のほぼ全部を作り直していたとしています。数字は1台で1回ずつの観測で、公式の記述と自環境の結果を分けて整理しています(中立・検証。Xの好意的な反応とは対照的に、自環境では機能が発動しなかったという報告)

利用上限そのものを扱う周辺記事も同日に複数出ています。警告機能には直接触れていません。

- [Claude Code と Codex の利用上限をメニューバーに出す小さな無料アプリを作った](https://zenn.dev/dawon/articles/f2cb320dcab60e): 5時間枠の残りを見るために `/usage` を何度も打っていたため、Claude CodeとCodexそれぞれの5時間枠・週間枠のうち高い方をメニューバーに出すMITライセンスのアプリを公開(Tips)
- [Claude Code の上限が怖くて、払った分を使い残していませんか](https://zenn.dev/civras/articles/19e92c70c5a6d6): 著者1人の約5週間の記録をもとに、上限に当たっているのではなく上限を怖がって自分で使用を絞り、リセット直前に週の枠が2〜3割残っていたという考察(中立)
- [Claude Maxの利用枠を「実質4倍」にする計算と、先に確認したい条件](https://qiita.com/Xim2jp/items/a0c95bca0875f7fd5282): 5時間枠と週次枠の二重上限を「払う額」と「手に入る枠」に分けて考える計算の整理。有料noteの無料部分の内容(中立)

### Code Review レビューレベル

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

(X上で取得できた6件はいずれも公式・企業アカウント寄り、または機能紹介・GA告知レベルの内容で、実体験に基づく個人の反応はありませんでした)

#### Zenn・Qiita

該当なし(10月11日〜17日の[週間まとめ記事](https://zenn.dev/zundamon_tools/articles/claude-news-weekly-2026-10-18)はCode Reviewの正式版化を扱っていますが、レビューレベルの追加前の記事で、この機能には触れていません)

### Inference hooks 正式提供

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

#### Zenn・Qiita

該当なし

### /claude-api managed-agents-secure

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

#### Zenn・Qiita

該当なし

### Mods向け decider: "person" と e.isReadOnly

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

#### Zenn・Qiita

新しい `decider` や `isReadOnly` そのものを扱った記事はありませんが、Modsの活用例が1本出ています。

- [hooksでは無理だったZellijのClaude状態表示はmodsだったらできた話](https://zenn.dev/safie_inc/articles/7c3a6eb28299c5): ターミナルマルチプレクサZellijのタブごとにClaude Codeを起動している環境で、どのタブが許可待ちか・処理が終わったかを、hooksでは実現できずModsで実現したという記録。herdrへの乗り換えは見送り、Zellijで同じことをやる方針(好意的・Tips)

### CLAUDE_CODE_RETRY_WATCHDOG_USAGE_LIMIT_RECHECK_MS

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

#### Zenn・Qiita

環境変数そのものを扱った記事はありませんが、無人運転が止まる問題を扱った実体験記事が1本出ています。

- [寝ている間に AI に回してもらうはずが、朝起きたら止まっていた。それが1週間で3回あった](https://zenn.dev/claire_ai/articles/tsuushi-iriguchi): YouTubeチャンネルの動画制作から公開までをClaude Codeの仕組みで夜間に回しているが、朝見たら途中で止まっていたことが1週間で3回あったという報告。「止まったことは知らせてくれるのに、誰も動かない」ことを課題として挙げています。停止原因や無人リトライモードとの関係は本文の抜粋からは確認できません(中立・実体験)

### その他 (tool search 既定有効化、worktree 削除安全化、VS Code拡張の Mods 描画)

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

#### Zenn・Qiita

該当なし

### 全体の温度感

公式側は2日連続のリリースで、auto modeの環境学習ガイド、Code Reviewのレビューレベル、Managed Agentsのセキュリティ照合、Mods向けの人間限定承認など、運用管理寄りの機能追加が目立ちます。v2.1.305はv2.1.304でゲートウェイ配下の全リクエストが失敗する回帰を翌日に修正したもので、サードパーティプロバイダ経由の利用者は確認が必要です。

コミュニティでは、再開時の使用量警告にXの好意的な反応が集まる一方、Zennでは実際に試して警告が出なかったという観測が出ており、機能の発動条件はまだ共有されていません。利用上限については、メニューバーで残量を見る、上限を怖がって使い残していないかを問う、二重上限の計算を整理するなど、5時間枠と週次枠をどう使い切るかという関心が複数の記事に表れています。前回に続き、公式発表を自環境で測って確かめる姿勢が目立ちます。

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude API リリースノート](https://platform.claude.com/docs/en/release-notes/api)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
