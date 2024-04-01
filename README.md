This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).    

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## axios.js - Lemon Squeezy API 客户端配置

功能：配置与Lemon Squeezy API的HTTP通信。

实现细节：

导入axios库，用于执行HTTP请求。

定义LEMON_SQUEEZY_ENDPOINT常量，设定Lemon Squeezy的API基础URL。

创建lemonSqueezyApiInstance实例，用于执行API调用，具体配置包括：

baseURL：设置为Lemon Squeezy API的地址。

headers：包含接收和发送数据的类型application/vnd.api+json和用于身份验证的Authorization，后者通过环境变量LEMON_SQUEEZY_API_KEY动态获取Bearer token。

## route.js（创建结账会话）

功能：实现创建结账会话的服务器端逻辑。

实现细节：

从@/utils/axios导入lemonSqueezyApiInstance。

定义异步POST函数处理创建结账会话的请求。

验证请求体中是否包含productId，若缺失则返回400状态码。

使用lemonSqueezyApiInstance调用Lemon Squeezy API的/checkouts端点，传递必要的数据以创建结账会话。

从API响应中提取checkoutUrl并返回，用于客户端重定向到结账页面。

## route.js（处理Webhook）

功能：处理Lemon Squeezy发送的Webhook事件。

实现细节：

导入crypto模块用于签名验证。

定义异步POST函数接收Webhook请求。

使用crypto.createHmac和环境变量中的秘钥验证请求签名。

分析Webhook事件类型并执行相应处理，如订单创建事件。

返回处理结果，成功时通知Webhook received，失败时返回错误。

## page.js - 前端定价页面

功能：展示可购买的产品及其价格计划，并允许用户操作购买。

实现细节：

使用React框架构建前端页面。

使用useState管理计费周期状态（年度或月度）。

定义函数toggleBilling用于切换计费周期。

定义函数buyProduct1处理产品购买逻辑，调用后端/api/purchaseProduct接口，并在成功时打开结账页面。

页面包含三种定价计划：Free、Plus、Business，每种计划下都有具体的产品特征和价格展示。

利用React的组件和状态管理来实现交互动态，如切换计费周期、选择购买的产品。



