# Chinese Practice

Education Hub 的语文互动练习模块。

当前第一版为 `index.html`：古诗词复习与默写。它从 `data/poems.json` 读取首批 12 篇已配套文本、默写题和理解提示的篇目；不把课程目录中尚未完成讲解和练习的篇目误标为可练习内容。

题库使用 JSON 是因为默写题需要标题、原文、提示、标准答案和解释等固定字段；学科讲解、篇目精讲和学习路径仍维护在 `docs/` 的 Markdown 中。

学习状态使用浏览器本地存储键 `education-hub:chinese:classical-poetry:progress`，不会上传。
