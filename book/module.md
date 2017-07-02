## 模块分类
-文件模块 自己写的模块
- 第三方模块 别人写的 需要下载

  - 全局安装（ 只能在命令行下使用，会提供给你一个全局命令 ） nrm node切换源的工具
        npm install nrm -g
        nrm test
        nrm use cnpm

  - 本地安装（在当前项目下使用）
    npm init 记录所有依赖 生产一个package.json 可能会导致安装到上级目录
    npm init -y (一步到位 全部yes)
    名字不能有中文 不能有大写 不能有特殊字符
    - 开发依赖 只在开发时应用 例如 less 压缩工具 --save-dev（-D 简写）
    - 项目依赖 开发上线都需要 例如 jquery --save（-S 简写）
    如果不小心把安装的依赖文件夹删掉了（node_module）可以直接执行 npm install 就把所有相关依赖都找回了
- 内置模块、核心模块 node自带的


>npm node package manager 管理node模块的 包（很多js文件）；
>装node自带npm
