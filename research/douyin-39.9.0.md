# 抖音 iOS 39.9.0 静态分析报告

**一个 975 MB 的二进制里，藏着一本采集账本、八条上报链路，和一只过于灵敏的摇一摇。**

| | |
|---|---|
| 样本 | `抖音(39.9.0)_静态脱壳.ipa`（727 MB，解密版） |
| 方法 | Mach-O 静态分析 · 字符串提取 · 资源解包 |
| 是否抓包 | 否（结论均为静态证据） |
| 日期 / 版本 | 2026-11-20 · v1.1 |
| 结论边界 | 只能证明「有这个能力 / 有这个配置项」，不能证明「此刻正在执行」 |

---

## 摘要

抖音不是「偷偷采集」，而是**采集到极致，并且自己登记了一本账**。

二进制里有一张把「系统 API」直接映射到「数据类型」的规则表，共 34 个采集标签；
配套 1538 个隐私检查点、23 类 Apple 数据申报、一套 C2PA + TC260 的 AI 内容水印。
这部分做得比大多数同类 App 完整，是可验证的，不是公关话术。

但把账本摊开数一遍，会看到另一个结构：

- **33 类数据里，用户自己能决定的只有 3 类**（通讯录、经纬度、剪贴板读取）；
  12 类只能去系统设置关权限；剩下 18 类没有任何开关——包括全部 8 类传感器，
  因为 iOS 对加速度计、陀螺仪本身就不弹授权框。
- **三条关不掉的链路**：设备指纹 `dtrait`（重置 IDFA、卸载重装也能绑回同一设备）、
  相册 EXIF 位置（连「已经上传的」历史图片都算）、以及一条发往阿里 `wgo.mmstat.com`
  的第三方统计链路（读 IDFA）。
- **摇一摇的「灵」是产品设计**：6 处独立实现，阈值 `shake_effect.ios_threshold` 由服务端下发，
  连麦场景默认 0.1 秒采一次样。改松紧不需要发版。

所以准确的描述不是「暗中收集」，而是：**默认全开 + 开关隐藏 + 参数不可观测**。

一句话：**它把「告知」做到了极致，于是「克制」就成了可选项。**

> 只想看结论：直接跳 [0. 一句话结论](#s0) / [9.6 判断](#s96)。
> 想看怎么证明的：从 [2. 采集清单](#s2) 开始。

---

## 关键数字

| 数字 | 含义 |
|---|---|
| **975 MB** | 主二进制 `AwemeCore` 体积（主程序本身仅 298 KB） |
| **152,000** | ObjC 类名数量 |
| **34 / 33** | 自报采集标签数 / 实际数据类别数 |
| **3 · 12 · 18** | 可自决 / 仅系统权限 / 完全无开关 |
| **1538** | 隐私检查点（`bpea-` 门禁） |
| **8** | 日志上报域名 |
| **122** | AI 接口数量（`aweme/v1/ai/*`） |
| **19** | 端侧模型数量（合计 3.6 MB） |
| **125** | 已安装 App 探测用的 URL Scheme |
| **5** | SKAdNetwork 声明数（同行普遍几十个） |

---

## 目录

**第一部分 · 事实**

- [0. 一句话结论](#s0)
- [1. 体量](#s1)
- [2. 它自己登记的采集清单（34 个标签 / 33 类数据）](#s2)
- [3. 三条「你关不掉」的链路](#s3)
- [4. 启动时会打的上报端点](#s4)
- [5. 摇一摇：6 处实现](#s5)
- [6. AI 部分](#s6)
- [7. 其他值得记一笔的](#s7)
- [8. 结论（事实层）](#s8)

**第二部分 · 判断**

- [9. 评价与反思（判断层）](#s9)
  - [9.1 先修正一个说法](#s91)
  - [9.2 「合法到极致」的三层结构](#s92)
  - [9.3 行为证据汇总（观点 ↔ 代码事实）](#s93)
  - [9.4 为什么「比同行好」反而更讽刺](#s94)
  - [9.5 值得肯定的三处（保持平衡）](#s95)
  - [9.6 判断](#s96)

**附录**

- [分析产物与复现方法](#appendix)

---

## 0. 一句话结论 <a id="s0"></a>

抖音不是「偷偷采集」，而是「**采集到极致并且自己登记了清单**」。
真正的信息不对称不在「有没有告诉你」，而在三处「**你关不掉、也看不见**」：
设备指纹（dtrait）、相册 EXIF 位置、第三方统计链路（阿里 mmstat）。

- 事实：第 1–8 章
- 判断：第 9 章（含「合法到极致」的三层结构与行为证据表）

---

## 1. 体量 <a id="s1"></a>

| 项 | 数值 |
|---|---|
| IPA | 727 MB |
| 解包后 | 1.3 GB |
| 主程序 `Aweme` | 298 KB（仅调度） |
| 真实代码 `AwemeCore.framework/AwemeCore` | **975 MB**（单 arm64 切片） |
| ObjC 类名 | 约 152,000 |
| 方法名 | 约 1,396,000 |
| 可执行文件 | 1,120 |
| Bundle | 247 |
| 扩展 Appex | 8（Widget / 通知 / 分享 / Siri / 直播录屏 ×2） |

---

## 2. 它自己登记的采集清单（34 个标签 / 33 类数据） <a id="s2"></a>

二进制里有一张规则表，把「调用了哪个系统 API」直接映射到「采了哪类数据」。
格式为 `(api in [...]) && (条件) → XXX_Collection`。

### 2.1 完整清单与可关闭性

分级说明：
- **A：App 内有独立开关**（你可以自己决定）
- **B：只能去 iOS 设置关权限**
- **C：没有任何开关**（系统本身不提供授权）

| # | 采集项 | 触发 API | 级别 | 开关位置 / 备注 |
|---|---|---|---|---|
| 1 | 相册读取 ALBUM | `PHAsset_fetchAssetsWithOptions` `PHPickerViewController` | B | 设置→照片 |
| 2 | 相册变更监听 ALBUM_ACTION | `PHPhotoLibrary_registerChangeObserver` | B | 随相册权限 |
| 3 | 音频/录音 AUDIO | `AVAudioRecorder_record` `AVAudioSession_requestRecordPermission` | B | 设置→麦克风 |
| 4 | WiFi BSSID | `NEHotspotNetwork_BSSID` `CNCopyCurrentNetworkInfo` | B | **需定位权限**，否则拿不到 |
| 5 | 日历 CALENDAR | `EKEventStore_calendarsForEntityType` | B | 设置→日历 |
| 6 | 当前通话 CALL_LOG | `CTCallCenter_currentCalls` | **C** | 只能拿「当前通话中」，非历史记录 |
| 7 | 通讯录 CONTACT | `CNContactStore_enumerateContacts` `ABAddressBookCopyArrayOfAllPeople` | **A** | 隐私设置→通讯录 |
| 8 | Face ID | `LAContext_evaluatePolicy` | B | 每次弹系统框 |
| 9 | IDFA | `ASIdentifierManager_advertisingIdentifier` | B | 设置→隐私→跟踪（ATT） |
| 10 | IDFV | `UIDevice_identifierForVendor` | **C** | 无授权概念 |
| 11 | IP | `getifaddrs` | **C** | 日志里另有 `client_ipv4`/`client_ipv6` 字段 |
| 12 | 经纬度 | `CLLocationManager_startUpdatingLocation` 等 7 个 | **A** | 隐私设置→位置 + 系统定位 |
| 13 | MAC | `BTDNetworkUtilities_btd_MPerformanceAddr` | **C** | iOS 已无法直读，属推断/缓存值 |
| 14 | 拨打电话 | `CTCallCenter_setCallEventHandler` | **C** | |
| 15 | MCC 国家码 | `CTCarrier_mobileCountryCode` | **C** | |
| 16 | MNC 网络码 | `CTCarrier_mobileNetworkCode` | **C** | |
| 17 | 音乐库 MUSIC_LIB | `MPMediaQuery` `MPMediaLibrary_requestAuthorization` | B | 设置→媒体与 Apple Music |
| 18 | OpenUDID | `OpenUDID_valueWithError` | **C** | 老牌第三方设备 ID |
| 19 | 剪贴板读取 | `UIPasteboard_string/URL/images/items` 等 12 个接口 | **A** | `clipboard_read_switch_default_value` `kAWEPasteboardAutoreadKey` |
| 20 | 剪贴板写入 | `UIPasteboard_setString/setItems` | **C** | 你主动复制时才有 |
| 21 | 权限请求汇总 | 13 个 request* API | — | 汇总项，不单独计 |
| 22 | 屏幕录制 | `RPScreenRecorder_startRecording` `RPSystemBroadcastPickerView` | **C** | 只在开播/录屏时 |
| 23 | 加速度计 | `CMMotionManager_startAccelerometerUpdates` | **C** | **无需任何授权** |
| 24 | 朝向 | `CLLocationManager_startUpdatingHeading` | **C** | 无需授权 |
| 25 | 重力/活动 | `CMMotionActivityManager_startActivityUpdates` | B | 设置→运动与健身 |
| 26 | 陀螺仪 | `CMMotionManager_startGyroUpdates` | **C** | **无需任何授权** |
| 27 | 气压高度 | `CMAltimeter_startRelativeAltitudeUpdates` | **C** | 无需授权 |
| 28 | 磁力计 | `CMMotionManager_startMagnetometerUpdates` | **C** | 无需授权 |
| 29 | 设备运动 | `CMMotionManager_startDeviceMotionUpdates` | **C** | **无需任何授权** |
| 30 | 计步 | `CMPedometer_startPedometerUpdates` | B | 设置→运动与健身 |
| 31 | 距离感应 | `UIDevice_proximityState` | **C** | 无需授权（贴脸熄屏用） |
| 32 | 短信 | `MFMessageComposeViewController_init` | **C** | 只是拉起发短信界面 |
| 33 | WiFi SSID | `NEHotspotNetwork_SSID` `CNCopyCurrentNetworkInfo` | B | **需定位权限** |
| 34 | 摄像头 | `AVCaptureSession_startRunning` | B | 设置→相机 |

### 2.2 统计

```
A 你能自己决定的     3 项（通讯录、经纬度、剪贴板读取）
B 只能去系统设置关   12 项
C 没有任何开关       18 项
─────────────────────────────
合计                 33 项
```

### 2.3 三个额外的全局开关（不在 33 项里，但影响面最大）

| 开关 | 配置键 | 影响 |
|---|---|---|
| 个性化推荐 | `personalized_recommendation_entrance_v2`、`personalized_recommendation_switch_desc` | 关掉后推荐不再基于你的行为画像 |
| 广告个性化 | `ad_recommendation_entrance`、`remove_ad_recommendation_entrance` | 关掉后广告仍推，但不按你画像 |
| 附近/雷达 | `nearby_privacy_switch_setting`、`nearby_shake_switch_setting` | 关掉后不再用位置匹配附近的人 |

数据管理总入口（WebView）：
`https://api.amemv.com/ucenter_web/app/aweme/data_management/v2?enter_from=settings_page`

### 2.4 唯一被我判定为「有独立弹窗开关」的隐藏项：相册 EXIF 位置

- 文案：「是否允许使用相册内容的位置信息？」
- 关闭后：「将不使用**本地相册和已经上传的相册内容**中的位置信息」
- 配置键：`asset_location`、`uploaded_assets_location`、`studio_publish_fetch_asset_location`、`aigc_album_disable_access_exif_location`

注意「**已经上传的**」这句：即使你之后关了，服务器侧历史图片的位置信息仍在被使用。

---

## 3. 三条「你关不掉」的链路 <a id="s3"></a>

### 3.1 dtrait：一次授权，终身可认

`TTInstallIDManager+Dtrait` 是设备特征的绑定机制：

```
请求：https://log.snssdk.com/service/2/dtrait/
请求头：x-tt-device-dtrait / x-tt-device-signal / x-tt-device-dtrait-token
字段：encrypted_dtrait、dtrait_token、bind_dtrait、dtrait_pre、dtrait_stage
```

配套还能看到 `kTTResetedIDFA`、`kTTResetedVendorID`、`kTTResetedDeviceID`、`kTTResetedInstallID` —— 说明「重置追踪标识」是被单独处理的一种状态。

**实际意义**：你把 IDFA 重置、甚至卸载重装，dtrait 仍可以把新的 install_id / did 绑回同一台设备。
这是「它好像一直认得我」的技术来源，也是隐私政策里最难说清的一层。

### 3.2 广告侧的传感器与电池采集

```
AWEAdPitayaHARServiceDataCollectionManager
feed_ad_har_service_sensor_data_enable
feed_ad_har_service_battery_enable
search_ad_har_service_sensor_data_enable
```

广告 SDK 内部有个 HAR 数据采集服务，读**传感器 + 电池状态**，供端侧模型（Pitaya）判断场景。
这个开关是配置项，**用户在设置里看不到**。

### 3.3 阿里的第三方统计链路

```
UTAnalytics / UTOirginalCustomHitBuilder
https://wgo.mmstat.com/cf.linkpartner.1.1 / 1.3 / 1.4 / 1.5 / 2.4
读取 ASIdentifierManager.advertisingIdentifier
```

抖音内置了阿里巴巴的 UT 统计 SDK，用于电商/淘宝联盟归因，读 IDFA 后上报 `wgo.mmstat.com`。
这是一条**离开字节域名体系**的数据链路，多数人没注意到。

---

## 4. 启动时会打的上报端点 <a id="s4"></a>

以下全部从二进制字符串中提取，带完整域名。

### 4.1 第一梯队（启动即打，最核心）

| 端点 | 用途 |
|---|---|
| `https://is.snssdk.com/service/settings/v2/` | 拉全局配置（Service Settings），启动第一优先 |
| `https://is.snssdk.com/service/settings/v3/` | 广告 SDK 配置（`AdSDKSettings`） |
| `https://log.snssdk.com/service/2/device_register/` | **设备注册**，换取 did/iid |
| `https://log.snssdk.com/service/2/dtrait/` | **设备特征绑定** |
| `https://log.snssdk.com/service/2/log_settings/` | 日志上报策略（频率/采样） |
| `https://i.snssdk.com/weasel/v1/info/` | UG 增长侧设备信息上报（AppList 通道在此） |
| `https://zlink.toutiao.com/api/get_deeplink_data` | 剪贴板归因解析 |
| `https://zlink.toutiao.com/api/link_activate` | 延迟深度链接激活 |

### 4.2 日志上报族（高频，启动后持续）

| 端点 | 用途 |
|---|---|
| `https://log.snssdk.com/service/2/app_log/` | 埋点主通道 |
| `https://applog.snssdk.com/service/2/app_log/` | applog 专用域名 |
| `https://rtlog.snssdk.com/service/2/app_log/` | 实时日志 |
| `https://rtapplog.snssdk.com/service/2/app_log/` | 实时 applog |
| `https://log.snssdk.com/service/2/app_log_test/` | 测试通道 |
| `https://log.snssdk.com/service/2/app_log_monitor/` | 上报自监控 |
| `https://log.snssdk.com/service/2/app_log_exception/` | 上报异常 |
| `https://log.snssdk.com/service/2/app_alert_check/` | 告警规则检查 |
| `https://data.bytedance.net/byteio/open/v1/file/upload/` | 大文件上传 |

### 4.3 设备画像与监控

| 端点 | 用途 |
|---|---|
| `https://log.snssdk.com/service/3/device_sdk/stats_collect/` | device_sdk 统计 |
| `https://log.snssdk.com/service/2/device_sdk/kite/` | kite 设备指标 |
| `https://log.snssdk.com/service/2/dtrait/` | 特征（见 3.1） |
| `https://slardar.bytedance.net` | APM / 崩溃 |
| `https://timon.zijieapi.com` | 监控 |
| `https://mon.snssdk.com` | 埋点监控 |
| `https://lf3-short.ibytedapm.com/slardar/fe/sdk-web/browser.cn.js` | H5 侧前端监控 SDK |

### 4.4 开屏广告（启动直接竞争展示）

| 端点 | 用途 |
|---|---|
| `/api/ad/splash/aweme/v15/` | 开屏素材请求 |
| `/api/ad/splash/realtime/` | 实时开屏 |
| `/api/ad/splash/stock/realtime/v15` | 库存 |
| `/api/ad/splash/stat/ack/v1/` | 曝光回执 |
| `/api/ad/splash/get_atp_config/` | 开屏配置 |
| `/api/ad/sdk/attribution/v0` | 广告归因 |
| `https://ad.zijieapi.com` / `https://ma.zijieapi.com` | 广告主域 |

### 4.5 其他会碰到的域

```
https://aweme.snssdk.com           主 API
https://api.amemv.com              账号/设置 WebView
https://webcast.amemv.com          直播
https://tsearch.amemv.com          搜索
https://ecom.snssdk.com            电商
https://location.bytedance.com/bytemap/v1/geocode/multi_regeo   逆地理编码
https://polaris.zijieapi.com/luckycat/crossover/v               摇一摇活动
https://wgo.mmstat.com             阿里 UT 统计（第三方）
https://aweme.snssdk-tka.com       唯一声明的追踪域（NSPrivacyTrackingDomains）
```

### 4.6 启动时序（推断，非抓包实测）

```
冷启动
 ├─ 1. is.snssdk.com/service/settings/v2   ← 配置优先，决定后面一切开关
 ├─ 2. log.snssdk.com/service/2/device_register   ← 拿 did/iid
 ├─ 3. log.snssdk.com/service/2/dtrait            ← 绑定设备特征
 ├─ 4. i.snssdk.com/weasel/v1/info                ← 设备+AppList 上报
 ├─ 5. zlink.toutiao.com/api/get_deeplink_data    ← 读剪贴板
 ├─ 6. /api/ad/splash/...                         ← 开屏广告
 └─ 7. app_log 族持续批量上报
```

`is.snssdk.com` 排第一是设计使然：本地那份 `Settings_v2.plist` 只有 4495 个 key 的**默认值**，
真实阈值（含摇一摇灵敏度）由服务端在这步下发。

---

## 5. 摇一摇：6 处实现 <a id="s5"></a>

| 场景 | 证据 |
|---|---|
| 开屏广告 | `BDASplashMotionManager`、`splash_shake_enable_limit`、`splash_shake_time_after_ms`、`first_shake_text`/`second_shake_text`、`ShakeMusic.mp3`（摇时有音效） |
| 信息流/落地页广告 | `AWEBDARifleViewShakeMotionHelper`、`onDeviceShake`、阈值 `shake_effect.ios_threshold` + `shake_effect.ios_matchcount` |
| 激励广告 | 字面量 `摇一摇shake--onShakeRewardAd` |
| 直播连麦 | 本地默认 `{"shake_accelerate":4,"detect_interval":0.1,"shake_interval":0.4}` |
| 摇一摇加好友/雷达 | `radar_push_config_setting.shake_threshold`、`shake_match_count`、`shake_time_interval` |
| 摇一摇分享视频 | `AWEShakeShareAwemeManager` 系列 |

「灵」的三个技术原因：

1. **阈值在服务端**（`shake_effect.ios_threshold`），改配置即可调松紧，用户无法观测。
2. **采样密**：默认 0.1 秒一次，走路/抬腕都可能触发。
3. **不止摇**：`BDASplashTwistView`、`BDASplashCommonTwistModel`、`BDASplashClickSlideViewModel` —— 摇一摇、扭一扭、滑一滑三种「非点击交互」并存，本质是把误触转化为点击率。

---

## 6. AI 部分 <a id="s6"></a>

- **122 个** `aweme/v1/ai/*` 接口（`ai/chat` 独占 50+）
- 能力族：AIGC 创作、AI 对话、AI 搜索、AI 笔记、AI 音乐、AI 人像/分身、AI 回忆（扫相册）、AI 共创、AR 试穿、AI 封面、自动字幕、OCR、翻译、ASR/TTS（火山 `SAMICore`，含声纹 `SpeechFingerprintEnrollSession`）、活体检测、人脸/人体、美颜、推荐
- **端侧只有 19 个模型**（人脸检测/人脸属性/OCR/活体 + 超分，合计 3.6 MB）
  → 「20+ AI 在分析你」中，算力大头在服务端
- AI 生成内容带水印：`tt-c2pa-sdk` + 国标 `TC260:AIGC`（`tc260.org.cn/ns/AIGC/1.0`）

---

## 7. 其他值得记一笔的 <a id="s7"></a>

| 项 | 情况 |
|---|---|
| ATS | `NSAllowsArbitraryLoads = true`，全站允许明文 HTTP |
| 后台模式 | `audio` + `fetch` + `voip` + `remote-notification`，四种同时开 |
| 已安装 App 探测 | 125 个 `LSApplicationQueriesSchemes`；`kAppListLastReportDateKey`/`AppListUploadType`/`AppListNotUploadReason` 显示有独立上报通道 |
| 设备档案字段 | AppList、最近使用、设备 UUID 列表、已配对蓝牙、系统账户、字体、主题、音频设置、磁盘/内存/CPU、预装文件、加速度 |
| SKAdNetwork | 仅 5 个，很克制 |
| 第三方 SDK | 高德、微信、QQ、微博、支付宝/网联/银联、Google 登录、飞书 SSO、**阿里 UTAnalytics**；无 AppsFlyer/Adjust/友盟/Bugly |
| 越狱检测 | `/Applications/Cydia.app`、`MobileSubstrate`、`/jb/jailbreakd.plist` 等老名单 |
| 隐私检查点 | 1538 个 `bpea-` 前缀门禁 |
| 数据申报 | 23 类，`NSPrivacyTracking = true` |

---

## 8. 结论（事实层） <a id="s8"></a>

**「暗中收集」这个说法需要修正为「默认全开 + 开关隐藏 + 参数不可观测」。**

- 它其实登记得比大多数 App 都清楚：34 项自报清单、1538 个检查点、AI 内容还按国标打标。
- 真正的不对称是：**33 项里你只能自己决定 3 项**，其余要么去系统设置翻三层菜单，要么根本没有开关（传感器就是这样，iOS 本身不给授权框）。
- 最值得注意的是 dtrait：它让「重置 IDFA / 卸载重装」这类常规反抗手段部分失效。
- 摇一摇的灵敏度不是 bug，是产品设计——而且阈值握在服务端。

**待验证**：以上全部为静态证据。要确认实际行为，需要抓包对比
（重点看 `service/2/dtrait`、`weasel/v1/info`、`app_log` 三处的请求体）。

> 事实摆完了。它意味着什么，见下一章。

---

## 9. 评价与反思（判断层） <a id="s9"></a>

> 本章是判断，不是事实。前 8 章是「它是什么」，这一章是「这意味着什么」。
> 每个判断后面标了对应的行为证据编号（见 9.3）。

### 9.1 先修正一个说法 <a id="s91"></a>

「抖音在暗中收集用户信息」这句话，只能算对了一半。

准确的说法是：**默认全开 + 开关隐藏 + 参数不可观测**。

它甚至自己登记了一份比绝大多数 App 都完整的清单（34 个采集标签、1538 个隐私门禁、AI 内容按国标打标）。
所以问题不是「没告诉你」，而是「告诉了，但告诉的方式本身构成了一种新的不透明」。

### 9.2 「合法到极致」的三层结构 <a id="s92"></a>

#### 第一层：合规的度量单位是「告知」，不是「克制」

这是最根本的一层。法律要求的是**披露充分、授权到位**，没有任何一条要求**少采**。
于是理性的做法必然是：把能采的都采了，然后为每一个动作补一张凭证。

于是出现一个反直觉的现象 —— **检查点的密度和采集量是正相关的**。
采集面越大，需要过的隐私门禁越多，合规报告越厚，看上去越规范。

> 证据链：E1（34 项清单，量在扩）+ E2（1538 个 bpea 检查点，章在盖）
> 1538 这个数字不是「克制了 1538 次」，是「为 1538 个动作各自盖了章」。

盖满章的东西，反而显得干净。

#### 第二层：审计成本被转嫁给了用户

公司有法务团队去证明「我告知了」。用户只有一双眼睛，去看：

- 藏在「我 → 设置 → 隐私设置」第三层的开关；
- 一句「不使用本地相册和**已经上传的**相册内容中的位置信息」里，「已经上传的」四个字意味着什么。

> 证据链：E5（开关分层）+ E6（EXIF 文案措辞）

披露做得越完整，越没人读得完 —— 而**「读不完」本身就已经完成了合规**。
这是一套自我闭合的结构：披露的完备性，恰好构成了免于被追问的理由。

#### 第三层：最有效的那部分，无法被语言化

dtrait 永远进不了隐私政策的人话部分。你没法写：

> 「我们会用设备特征在您重置 IDFA 后继续识别您。」

太绕，也太长。于是它合法地待在 `x-tt-device-dtrait` 这个请求头里，
等你某天发现「它怎么还认识我」，再去猜。

> 证据链：E3（TTInstallIDManager+Dtrait 全套字段）

第三层是最值得警惕的：它不是隐藏，是**技术上正确、语言上不可达**。

### 9.3 行为证据汇总（观点 ↔ 代码事实） <a id="s93"></a>

| 编号 | 判断 | 对应的代码层面事实 |
|---|---|---|
| E1 | 采集面是主动扩张的 | 二进制内有 34 个 `XXX_Collection` 标签的规则表，逐条映射到系统 API；新增能力即新增标签 |
| E2 | 合规凭证的密度 | 1538 个 `bpea-` 前缀隐私门禁，覆盖相册、仿板、定位、传感器等每一处访问 |
| E3 | 反抗手段被吸收 | `TTInstallIDManager+Dtrait` 把设备特征绑到 install_id；并存 `kTTResetedIDFA/VendorID/DeviceID/InstallID` 四组重置状态字段 |
| E4 | 默认值是「开」 | 33 项里默认开启；能主动询问的极少，相册 EXIF 位置是其中一项 |
| E5 | 开关的可见性递减 | A 级（自己能决定）3 项 / B 级（只能去系统设置）12 项 / C 级（无任何开关）18 项 |
| E6 | 措辞在扩大适用范围 | 「本地相册和**已经上传的**相册内容」—— 删除本地图不意味着服务器侧失效 |
| E7 | 参数不可观测 | `shake_effect.ios_threshold` 服务端下发；本地 `Settings_v2.plist` 仅存 4495 个 key 的默认值 |
| E8 | 第三方链路离开自家域 | `UTAnalytics` → `wgo.mmstat.com`（阿里），且读 IDFA |
| E9 | 广告侧的隐形采集 | `AWEAdPitayaHARServiceDataCollectionManager` 读传感器 + 电池，开关是配置项，设置里看不到 |

### 9.4 为什么「比同行好」反而更讽刺 <a id="s94"></a>

这是个有趣的心理结构。

- 那些连清单都没有的 App，你根本没期待，也就谈不上失望。
- 抖音把该做的都做了，还多做了一点（C2PA + TC260 水印，国内真没几家做到），
  结果你一数：33 项里我能决定的只有 3 项。

**做得越好，期望越高，落差越明显。** 讽刺感来自「它有能力做得更好，但它选择的是做完」。

还有一处很漂亮的对比：

> 它会给 **AI 生成的内容**打水印、写 C2PA 元数据、标 TC260 国标 ——
> 但没有机制告诉你，**你看这条视频的行为**被同步给了几个下游。

> 证据链：E8（阿里链路）+ E9（广告 HAR 采集）+ 第八章的 8 个日志域

内容的「来源」被标记得清清楚楚，数据的「流向」却没有任何标注。
这是整个报告里我认为最值得记住的一句话。

### 9.5 值得肯定的三处（保持平衡） <a id="s95"></a>

1. **自查清单本身是真的**。34 项标签映射到具体 API，不是公关话术，是可验证的。
2. **SKAdNetwork 只声明 5 个**。广告 SDK 普遍塞几十个，这是真克制。
3. **AI 内容合规走在前面**。C2PA + TC260 双标，2026 年还有大量 App 没做。

另外要区分一件事：**传感器无需授权是 iOS 的平台约束，不是抖音的选择**。
加速度计、陀螺仪、磁力计本来就不弹框，谁都用得上。把它算进「抖音很坏」不公平；
但把它算进「你无法拒绝」是对的。

### 9.6 判断 <a id="s96"></a>

> **这套系统的核心不是「收集」，是「让你无法验证它收集了什么」。**

能关的你关了，但不知道关了之后它还在发什么；
能重置的你重置了，但 dtrait 会把线索接回去；
能感觉到的你感觉到了（摇一摇的灵），但改不了（阈值在服务端）。

三个层次对应三种反抗方式的失效：**权限、重置、感知**。

如果只记一句话，记这个：

> 它把「告知」做到了极致，于是「克制」就成了可选项。

---

## 附录：分析产物与复现方法 <a id="appendix"></a>

```
douyin_analysis/
├── ipa/Payload/Aweme.app/          解包后的 App
├── core.strings                    975 MB 二进制的全部 ASCII 字符串（81 MB）
├── cn_utf16.txt                    二进制中的中文字符串（UTF-16LE）
├── classnames.txt                  15.2 万类名
├── methnames.txt                   139 万方法名
├── api_manifest.txt                34 项采集规则原文
├── bpea.txt                        1538 个隐私检查点
├── ai_api.txt                      122 个 AI 接口
├── domains.txt                     714 个域名（按出现次数排序）
└── zstd_out/ + pkgs/               97 个内置 Lynx 资源包（解压 486 MB）
```

### 复现路径

```bash
# 1. 解包
unzip -q "抖音(39.9.0)_静态脱壳.ipa" -d ipa

# 2. 定位 ObjC 类名/方法名区段（拿到 addr 与 size）
otool -l ipa/Payload/Aweme.app/Frameworks/AwemeCore.framework/AwemeCore \
  | grep -A3 -E "sectname (__objc_classname|__objc_methname)"

# 3. 按偏移抽出（__TEXT 的 fileoff = 0，所以 addr 就是文件偏移）
CORE=ipa/Payload/Aweme.app/Frameworks/AwemeCore.framework/AwemeCore
dd if="$CORE" of=classnames.raw bs=1M iflag=skip_bytes,count_bytes \
   skip=$((0x2a7e4a10)) count=$((0x4c3950))
strings -a classnames.raw | sort -u > classnames.txt

# 4. 提取完整字符串集
strings -a -n 5 AwemeCore > core.strings
```

**一个关键技巧**：二进制的**中文**不是 UTF-8 存的，而是 **UTF-16LE**（`__ustring`）。
只跑 `strings` 会漏掉所有中文文案。需要按 UTF-16LE 分块解码后再抓 CJK 连续段，
这也是本文能找到「摇一摇」「已上传的相册内容」这类文案的原因。

```python
# 核心逻辑
s = chunk.decode('utf-16-le', 'ignore')
re.finditer(r'[\u4e00-\u9fa5][\u4e00-\u9fa5\w，。、：；！？“”（）%\-—·…《》 ]{1,60}', s)
```

### 内置资源包

`StaticBuiltIn.bundle` 里 97 个 `.zstd` 文件，解压后是 ZIP（Gecko 前端包），合计 486 MB：

```bash
for f in *.zstd; do zstd -dc "$f" > "${f%.zstd}.zip"; unzip -qo "${f%.zstd}.zip" -d "out/${f%.zstd}"; done
```

---

## 说明

- 本文所有结论均来自静态分析，**未经运行时抓包验证**。涉及「是否真的在上传」的部分，
  已在各节标注需要进一步确认的具体端点。
- 数字类结论均可从附录产物中自行复核；分级（A/B/C）属于作者判断，已在正文标注。
- 样本为第三方脱壳包，与原版 App Store 包可能存在差异。

**引用格式**：《抖音 iOS 39.9.0 静态分析报告》，2026-11-20。

```
v1.0  2026-11-20  初版：体量、采集清单、上报端点、摇一摇、AI
v1.1  2026-11-20  增第 9 章「评价与反思」、行为证据表；补目录与摘要
```
