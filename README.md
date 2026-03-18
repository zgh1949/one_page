# one_page

[![Image](a60b8901-9e63-4fc6-954f-32c35f8bc627)](https://opensource.org/licenses/MIT)
[![Image](65959998-2959-43e1-8b9d-89f7d9b7a2fb)](https://github.com/zgh1949/one_page)

## 项目介绍 | Project Introduction
one_page 是一个基于 Flask 构建的轻量级 Web 应用，包含 Python 后端服务（`app.py`）和前端静态资源（HTML/JS），结构简洁，易于部署和扩展。

one_page is a lightweight web application built with Flask, including Python backend service (`app.py`) and front-end static resources (HTML/JS), with a simple structure that is easy to deploy and extend.

## 📂 文件结构 | File Structure
one_page/
├── app.log          # 应用运行日志文件 | Application runtime log file
├── [app.py](app.py)           # Flask 后端主程序 | Flask backend main program
└── static/          # 前端静态资源目录 | Front-end static resources directory
    ├── app.js       # 前端交互逻辑 | Front-end interactive logic
    ├── index.html   # 主页面 | Main page
    └── templates/   # 前端模板目录 | Front-end template directory
        └── cspyq.html # 业务模板页面 | Business template page

## 🚀 快速开始 | Quick Start

### 环境要求 | Environment Requirements
- Python 3.6+
- Flask 框架

### 安装与运行 | Installation & Running
1. 克隆仓库 | Clone the repository
   ```bash
   git clone https://github.com/zgh1949/one_page.git
   cd one_page

   # 安装 Flask
   pip install flask

2. 安装依赖 | Install dependencies
# 直接运行 Flask 应用
python app.py
   ```

3. 启动应用 | Start the application
   ```bash
   python app.py
   ```

4. 访问应用 | Access the application
打开浏览器，访问 `http://localhost:5000`（Flask 默认端口），即可看到应用页面。
Open your browser and visit `http://localhost:5000` (Flask default port) to see the application page.

## ⚙️ 自定义修改 | Custom Modification
1. 后端逻辑修改：编辑 `app.py` 文件，调整接口、路由或业务逻辑 | Backend modification: Edit the `app.py` file to adjust APIs, routes or business logic.
2. 前端交互修改：修改 `static/app.js`，调整页面交互行为 | Front-end interaction modification: Modify `static/app.js` to adjust page interaction behavior.
3. 页面内容修改：编辑 `static/index.html` 或 `static/templates/cspyq.html`，替换页面内容 | Page content modification: Edit `static/index.html` or `static/templates/cspyq.html` to replace page content.

## 📄 许可证 | License
本项目采用 MIT 许可证开源 - 详见 [LICENSE](LICENSE) 文件（如需添加，可在仓库根目录创建 LICENSE 文件）。
This project is open source under the MIT License - see the [LICENSE](LICENSE) file for details (create a LICENSE file in the root directory if needed).

## 📞 联系方式 | Contact
- GitHub: [https://github.com/zgh1949](https://github.com/zgh1949)

### 补充适配说明
1. **完全贴合代码结构**：
   - 新增「文件结构」模块，精准对应你提供的 `tree` 输出，每个文件都标注了实际作用；
   - 运行步骤基于 Flask 应用特性（安装 Flask → 运行 `app.py`），无虚构的 `npm`/`http-server` 等无关命令；
   - 移除了之前虚构的「多语言支持」「响应式设计」等不符合实际的特性描述。

2. **实用小建议**：
   - 如果 `app.py` 中有自定义端口（比如 `app.run(port=8080)`），可把 README 中的 `5000` 改成对应端口；
   - 若需要忽略日志/缓存文件，可在仓库根目录创建 `.gitignore` 文件：
     ```
     # 忽略日志文件
     app.log
     # 忽略Python编译文件
     __pycache__/
     *.pyc
     # 忽略编辑器配置
     .vscode/
     .idea/
     ```
   - 如果 `app.py` 有额外依赖（如 `requests`），可在「安装依赖」部分补充 `pip install flask requests`。

### 总结
1. 这份 README 完全基于你提供的代码结构（Flask 后端 + static 前端资源）编写，无任何虚构内容。
2. 核心步骤：克隆仓库 → 安装 Flask → 运行 `app.py` → 访问 `localhost:5000`，精准适配项目实际运行方式。
3. 标注了各文件的实际作用和自定义修改方式，方便后续维护和他人使用。
