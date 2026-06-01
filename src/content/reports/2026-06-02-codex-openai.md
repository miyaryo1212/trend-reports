---
title: "Codex CLI v0.136.0安定版リリース、多数の新機能"
summary: "Codex CLI v0.136.0が安定版として公開。TUIクリッカブルリンク、セッションアーカイブ、画像生成拡張、Python SDKベータなど多数の新機能を含む大型リリース。コミュニティではセッション管理の改善に好評の声。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-02
features:
  - "Codex CLI v0.136.0"
  - "TUI OSC 8クリッカブルリンク対応"
  - "セッションアーカイブ機能"
  - "App-server強化（stdioモード等）"
  - "CODEX_API_KEY リモート登録"
  - "Windows サンドボックスセットアップ (alpha)"
  - "スタンドアロン画像生成拡張"
  - "Python SDK ベータ公開"
codex_review: "派手に見えるのは画像生成やSDKだが、実は効くのはセッションアーカイブと安全性の底上げだと思う。CLIが実験道具から常用インフラへ寄ってきた、地味だが重要な節目です。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI v0.136.0

6月1日公開の安定版リリース。前日のalpha.2から正式版に昇格。v0.135.0から多数の新機能とバグ修正を含む。

#### 主な新機能

- **TUI Markdownクリッカブルリンク**: OSC 8メタデータでWebリンクをクリック可能に。狭いテーブルは読みやすいキー・バリュー形式に自動変換（[#24472](https://github.com/openai/codex/pull/24472)、[#24636](https://github.com/openai/codex/pull/24636)、[#24825](https://github.com/openai/codex/pull/24825)）
- **セッションアーカイブ**: TUIの`/archive`コマンドやCLIの`codex archive`/`codex unarchive`でセッションを保護・復元可能に（[#25027](https://github.com/openai/codex/pull/25027)、[#25021](https://github.com/openai/codex/pull/25021)）
- **App-server強化**: スレッド再開時の初期ターンページ取得、MCPサーバーステータス表示改善、`codex app-server --stdio`モード追加（[#23534](https://github.com/openai/codex/pull/23534)、[#24698](https://github.com/openai/codex/pull/24698)、[#24940](https://github.com/openai/codex/pull/24940)）
- **CODEX_API_KEYリモート登録**: リモート実行セットアップでAPIキー認証に対応。リモートコントロールWebSocketはサーバートークン方式に移行（[#24666](https://github.com/openai/codex/pull/24666)、[#24141](https://github.com/openai/codex/pull/24141)）
- **Windowsサンドボックスセットアップ（alpha）**: `codex sandbox setup --elevated`で管理者向けプロビジョニング対応（[#24831](https://github.com/openai/codex/pull/24831)、[#23766](https://github.com/openai/codex/pull/23766)）
- **スタンドアロン画像生成拡張**: フィーチャーゲート付きで、ネイティブCodex画像アーティファクト補完パイプラインによる画像生成が可能に（[#24723](https://github.com/openai/codex/pull/24723)、[#24972](https://github.com/openai/codex/pull/24972)）

#### 主なバグ修正

- ChatGPT認証のトークンリフレッシュ改善（5分前更新、再ログイン要求パスの明確化）
- コマンド安全性強化（`/diff`でのリポジトリ提供Gitフック実行防止、PowerShellパーサー制御、ブラウザ起点WebSocketハンドシェイク拒否）
- サンドボックスの中断後クリーンアップ改善、`deny`ルールの一貫適用
- Bedrock認証の`AWS_REGION`/`AWS_DEFAULT_REGION`フォールバック対応

[リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.136.0)

### Codex Python SDK ベータ公開

`pip install openai-codex`でインストール可能に。`CodexConfig`による設定、ドキュメント・クイックスタート・APIリファレンス・FAQ・サンプルコードが整備された。Python SDKは`python-v*`タグでランタイムとは独立してリリースされる体制に。

[リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.136.0)

## コミュニティの反応

### セッションアーカイブ機能

#### ポジティブ

> Codexのセッション管理（archive/unarchive含む）がワークフロー改善に役立つと絶賛。複数のコンテキストをオーケストレーション可能に — @koltregaskes

> Codexがスレッド/セッションの作成・整理・アーカイブを自ら扱えるようになり、QoLが大幅向上したと評価 — @reach_vb

### Codex CLI v0.136.0 その他の機能

X/Twitterでの個人ユーザーによる反応は確認されなかった。

### Codex利用体験

#### Tips

> Codex利用制限が「99%のまま変わらない」のは正常？利用制限の正しい読み方。残量表示の仕組みを解説（前回から継続） — dacek [Zenn](https://zenn.dev/dacek/articles/947860181cd640)

> CodexでFlutterアプリを3か月未満で公開したけど、今どきの個人開発はコード以外が大変すぎる。87日でGoogle Play公開までの体験記（前回から継続） — UH [Zenn](https://zenn.dev/mfactory_uh/articles/f793050a48813b)

> 初めてCodexを使う人向け：AIコーディングエージェントに安全に実装を頼むコツ（前回から継続） — uchida_data [Zenn](https://zenn.dev/uchida_data_lab/articles/df810bfc7d2101)

> GPT-5.5とClaude Opus 4.7で変わるプロンプト設計: 7要素構造とeffortの実務的な使い分け（前回から継続） — とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/gpt55-claude47-prompt-guide-skill)

### OpenAI全般

#### Tips

> AIエージェントに仕事を任せる前に「実行契約」を書く: ツール・権限・停止条件をコード化する実務入門 — akira_papa_AI [Qiita](https://qiita.com/akira_papa_AI/items/ad53373f77e274846d57)

> OpenAI Daybreakとは:3層の「権限つきAI」で脆弱性を狩る仕組み — Yushi88 [Qiita](https://qiita.com/Yushi88/items/987c41e3193c80f404b0)

> Claude Code と Codex の主要機能を比較する｜MCP・Skills・メモリ・Subagents・Hooks・Plugins リファレンス — nogataka [Qiita](https://qiita.com/nogataka/items/545148471e8f2b63c9a6)

> 乗り換え検討用：主要LLM API料金を9社・3階層で比較 2026年5月更新（前回から継続） — toyoshi [Zenn](https://zenn.dev/phpmyadmin/articles/125682833b8cff)

> AIエージェント、何を任せて、何を残すか — 2026年5月の判断軸（前回から継続） — AI解読部 [Zenn](https://zenn.dev/aidecodelabjp/articles/ai-agents-boundary-2026)

> AIがゴブリンに恋に落ちた理由（前回から継続） — イ・ギョンミン [Zenn](https://zenn.dev/qn_tech/articles/64883e6fdb831c)

> 【MindLab】Multi-Agent フレームワーク、結局どれがいいのか本番で試した（前回から継続） — 浅井めぐみ [Zenn](https://zenn.dev/asayi_megumi/articles/4835c1fc5b2b22)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
