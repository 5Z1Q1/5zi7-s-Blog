# Redis 入门

准备面试八股的时候，发现 Redis 的内容太多了，所以单独写一篇。

> Redis（Remote Dictionary Server）是一个开源的、基于内存的数据结构存储系统，可以用作数据库、缓存和消息代理。

## 什么是 Redis？

Redis 是一个高性能的 key-value 存储系统，支持多种数据结构，包括：

- **🔤 字符串（String）** - 最基本的数据类型
- **📋 哈希（Hash）** - 键值对集合
- **📝 列表（List）** - 有序的字符串列表
- **🔗 集合（Set）** - 无序的字符串集合
- **⭐ 有序集合（Sorted Set）** - 按分数排序的字符串集合

## Redis 的主要特点

### ⚡ 高性能

- 基于内存存储，读写速度极快
- 支持持久化，数据不会因重启而丢失

### 🗃️ 丰富的数据类型

- 不仅仅是简单的 key-value 存储
- 支持复杂的数据结构操作

### ⚛️ 原子性操作

- 所有操作都是原子性的
- 支持事务处理

### 🛡️ 高可用性

- 支持主从复制
- 支持哨兵模式和集群模式

## 基本使用示例

### 字符串操作

```bash
# 设置键值对
SET mykey "Hello Redis"

# 获取值
GET mykey

# 设置过期时间（秒）
EXPIRE mykey 3600
```

### 列表操作

```bash
# 向列表左侧添加元素
LPUSH mylist "item1"
LPUSH mylist "item2"

# 获取列表所有元素
LRANGE mylist 0 -1
```

### 哈希操作

```bash
# 设置哈希字段
HSET user:1001 name "张三"
HSET user:1001 age "25"

# 获取哈希字段
HGET user:1001 name

# 获取所有字段
HGETALL user:1001
```

## Redis 的应用场景

### 1. 缓存

最常见的使用场景，提高应用程序的响应速度：

```python
import redis

# 连接 Redis
r = redis.Redis(host='localhost', port=6379, db=0)

# 缓存数据
r.set('user:profile:123', json.dumps(user_data), ex=3600)

# 获取缓存
cached_data = r.get('user:profile:123')
```

### 2. 会话存储

存储用户会话信息：

```python
# 存储会话
r.setex(f'session:{session_id}', 1800, json.dumps(session_data))

# 获取会话
session_data = r.get(f'session:{session_id}')
```

### 3. 消息队列

使用 Redis 的列表实现简单的消息队列：

```python
# 生产者
r.lpush('task_queue', json.dumps(task_data))

# 消费者
while True:
    task = r.brpop('task_queue', timeout=0)
    if task:
        process_task(json.loads(task[1]))
```

### 4. 实时排行榜

使用有序集合实现排行榜：

```python
# 更新分数
r.zadd('leaderboard', {'player1': 100, 'player2': 150})

# 获取排行榜前10名
top_players = r.zrevrange('leaderboard', 0, 9, withscores=True)
```

## 安装和配置

### Windows 安装

1. 下载 Redis for Windows
2. 解压到指定目录
3. 运行 `redis-server.exe`

### Linux 安装

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install redis-server

# CentOS/RHEL
sudo yum install redis
# 或
sudo dnf install redis

# 启动服务
sudo systemctl start redis
sudo systemctl enable redis
```

### Docker 安装

```bash
# 拉取镜像
docker pull redis:latest

# 运行容器
docker run -d --name redis-server -p 6379:6379 redis:latest

# 连接到 Redis
docker exec -it redis-server redis-cli
```

## 性能优化建议

### 1. 内存优化

- 合理设置过期时间
- 使用适当的数据结构
- 定期清理无用数据

### 2. 持久化配置

```conf
# redis.conf 配置示例
save 900 1      # 900秒内至少1个key发生变化时保存
save 300 10     # 300秒内至少10个key发生变化时保存
save 60 10000   # 60秒内至少10000个key发生变化时保存

# AOF 持久化
appendonly yes
appendfsync everysec
```

### 3. 连接池配置

```python
import redis

# 使用连接池
pool = redis.ConnectionPool(
    host='localhost',
    port=6379,
    max_connections=20,
    retry_on_timeout=True
)

r = redis.Redis(connection_pool=pool)
```

## 监控和调试

### 常用命令

```bash
# 查看服务器信息
INFO

# 查看当前连接的客户端
CLIENT LIST

# 监控实时命令
MONITOR

# 查看慢查询日志
SLOWLOG GET 10

# 查看内存使用情况
MEMORY USAGE mykey
```

## 总结

Redis 是一个功能强大、性能优异的内存数据库，在现代 Web 应用中扮演着重要角色。通过合理使用 Redis 的各种数据结构和功能，可以显著提升应用程序的性能和用户体验。

无论是作为缓存、会话存储、消息队列还是实时计算，Redis 都能提供可靠和高效的解决方案。掌握 Redis 的基本使用方法和最佳实践，对于现代开发者来说是必不可少的技能。

---

*发布时间：2025年8月28日*  
*作者：五子棋*
