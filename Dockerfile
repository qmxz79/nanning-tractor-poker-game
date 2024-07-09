# 使用 node 作为基础镜像
FROM node:14-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
运行 npm install

# 复制项目文件
COPY . .

# 暴露小程序开发工具的默认端口（可根据实际情况调整）
EXPOSE 80

# 启动微信小程序开发服务器（假设使用 serve 或其他静态文件服务器）
CMD ["npx", "serve", "-s", "."]
