# 笔记


## 使用方法

### 1. 使用 HTTP 服务器运行

由于浏览器的安全限制，不能直接打开 HTML 文件。需要使用 HTTP 服务器运行：

#### 使用 Python（推荐）

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

然后访问：http://localhost:8000

#### 使用 Node.js

```bash
# 安装 http-server（如果未安装）
npm install -g http-server

# 运行
http-server -p 8000
```

然后访问：http://localhost:8000

#### 使用 PHP

```bash
php -S localhost:8000
```


## 注意事项

1. 必须使用 HTTP 服务器运行，不能直接打开 HTML 文件
2. 确保 `docs` 目录中的 Markdown 文件编码为 UTF-8
3. 使用 [marked.js](https://marked.js.org/) 进行 Markdown 渲染

## 自定义

### 修改目录结构

编辑 `script.js` 中的 `directoryStructure` 对象来修改目录结构。

### 修改样式

编辑 `style.css` 文件来自定义样式。

### 添加新功能

可以在 `script.js` 中添加新功能，如搜索、标签等。

## 许可证

MIT License

