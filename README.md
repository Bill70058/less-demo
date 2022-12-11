<!--
 * @Author: bill Lin_k_Bill@163.com
 * @Date: 2022-12-11 16:11:11
 * @LastEditors: bill Lin_k_Bill@163.com
 * @LastEditTime: 2022-12-11 16:11:32
 * @FilePath: /less-demo/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## less-demo

### 注意事项
vite项目创建postcss报错时，需要根目录新建一个``postcss.config.cjs``文件，内容为

```js
module.exports = {
    autoprefixer: {}
}
```