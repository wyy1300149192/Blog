
# 确保脚本抛出遇到的错误
set -e

# 打包生成静态文件
npm run docs:build

# 进入 dist 目录
cd docs/.vitepress/dist

# 提交
git init
git add .
git commit -m 'deploy'

# 部署网站
git push -f https://github.com/wyy1300149192/blog.git master

# 提交所有代码到github
cd ../../../
git add .
git commit -m 'update'
git push