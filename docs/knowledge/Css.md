# CSS

## 使用类名

你可以给 HTML 元素加个类名（class），使用这种方式样式化这一片元素

```html
<ul>
  <li>项目一</li>
  <li class="special">项目二</li>
  <li>项目 <em>三</em></li>
</ul>
```

在 CSS 中，要选中这个 `special` 类，只需在选择器的开头加个西文句点（.）。在你的 CSS 文档里加上如下代码：

```css
.special {
  color: orange;
  font-weight: bold;
}
```

这个 `special` 类型可不局限于列表，它可以应用到各种元素上。

## 根据状态确定样式

当我们修改一个链接的样式时我们需要定位（针对） `<a>` （锚）标签。取决于是否是未访问的、访问过的、被鼠标悬停的、被键盘定位的，亦或是正在被点击当中的状态，这个标签有着不同的状态。

下面的 CSS 代码使得没有被访问的链接颜色变为粉色、访问过的链接变为绿色。

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

## 内联样式

内联样式是影响单个 HTML 元素的 CSS 声明，包含在元素的 `style` 属性中。在一个 HTML 文档中，内联样式的实现可能看起来像这样：

```html
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>我的 CSS 测试</title>
  </head>
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">
      Hello World!
    </h1>
    <p style="color:red;">这是我的第一个 CSS 示例</p>
  </body>
</html>
```

尽可能避免以这种方式使用 CSS。这不符合最佳实践。首先，这是对 CSS 的维护效率最低的实现。一个样式的改变可能需要在一个网页中进行多次编辑。其次，内联 CSS 还将（CSS）表现性代码与 HTML 内容混合在一起，使一切都更难阅读和理解。将代码和内容分开，可以使所有从事网站工作的人更容易维护。

## CSS 究竟是怎么工作的？

当浏览器展示一个文件的时候，它必须兼顾文件的内容和文件的样式信息，下面我们会了解到它处理文件的标准的流程。需要知道的是，下面的步骤是浏览加载网页的简化版本，而且不同的浏览器在处理文件的时候会有不同的方式，但是下面的步骤基本都会出现。

1. 浏览器载入 HTML 文件（比如从网络上获取）。
2. 将 HTML 文件转化成一个 DOM（Document Object Model），DOM 是文件在计算机内存中的表现形式，下一节将更加详细的解释 DOM。
3. 接下来，浏览器会拉取该 HTML 相关的大部分资源，比如嵌入到页面的图片、视频和 CSS 样式。JavaScript 则会稍后进行处理，简单起见，同时此节主讲 CSS，所以这里对如何加载 JavaScript 不会展开叙述。
4. 浏览器拉取到 CSS 之后会进行解析，根据选择器的不同类型（比如 element、class、id 等等）把他们分到不同的“桶”中。浏览器基于它找到的不同的选择器，将不同的规则（基于选择器的规则，如元素选择器、类选择器、id 选择器等）应用在对应的 DOM 的节点中，并添加节点依赖的样式（这个中间步骤称为渲染树）。
5. 上述的规则应用于渲染树之后，渲染树会依照应该出现的结构进行布局。
6. 网页展示在屏幕上（这一步被称为着色）。

结合下面的图示更形象：

![image-20230606142658869](./assets/image-20230606142658869.png)

## CSS 选择器

> CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。选择器所选择的元素，叫做“选择器的对象”。

### 类型选择器

**类型选择器**有时也叫做“标签名选择器*”*或者是”元素选择器“，因为它在文档中选择了一个 HTML 标签/元素的缘故。

```css
span {
    background-color: yellow;
}

strong {
    color: rebeccapurple;
}

em {
    color: rebeccapurple;
} 
```

### 全局选择器

全局选择器，是由一个星号（`*`）代指的，它选中了文档中的所有内容

```css
* {
    margin: 0;
}
```

### 类选择器

类选择器以一个句点（.）开头，会选择文档中应用了这个类的所有物件。

```css
.highlight {
    background-color: yellow;
}
```

### 指向特定元素的类

我们将会用不同方式高亮一个带有highlight类的`<span>`和带有 highlight类的`<h1>`标题。

```css
span.highlight {
    background-color: yellow;
}

h1.highlight {
    background-color: pink;
}
```

也可以指定存在多个类存在得元素：

```css
.notebox {
  border: 4px solid #666;
  padding: .5em;
}

.notebox.warning {
  border-color: orange;
  font-weight: bold;
}

.notebox.danger {
  border-color: red;
  font-weight: bold;
}
```

### ID 选择器

ID 选择器开头为`#`而非句点，不过基本上和类选择器是同种用法。可是在一篇文档中，一个 ID 只会用到一次。它能选中设定了`id`的元素，你可以在 ID 前面加上类型选择器，只指向元素和 ID 都匹配的类。

```css
#one {
    background-color: yellow;
}

h1#heading {
    color: rebeccapurple;
}
  
```

正如我们在和特定性相关的课里面学到的那样，ID 所指特定，会优先于大多数其他选择器。所以很难处理它们。大多数情况下，给一个元素加个类，而不是使用 ID，会更好。不过要是 ID 是唯一一种指定这个元素的方式的话——也许是因为你没法访问标记标记因此不能编辑——这种方式可行。

### 属性选择器

#### 存否和值选择器

这些选择器允许基于一个元素自身是否存在（例如href）或者基于各式不同的按属性值的匹配，来选取元素。

| 选择器              | 示例                            | 描述                                                         |
| :------------------ | :------------------------------ | :----------------------------------------------------------- |
| `[*attr*]`          | `a[title]`                      | 匹配带有一个名为*attr*的属性的元素——方括号里的值。           |
| `[*attr*=*value*]`  | `a[href="https://example.com"]` | 匹配带有一个名为*attr*的属性的元素，其值正为*value*——引号中的字符串。 |
| `[*attr*~=*value*]` | `p[class~="special"]`           | 匹配带有一个名为*attr*的属性的元素，其值正为*value*，或者匹配带有一个*attr*属性的元素，其值有一个或者更多，至少有一个和*value*匹配。注意，在一列中的好几个值，是用空格隔开的。 |
| `[*attr*|=*value*]` | `div[lang|="zh"]`               | 匹配带有一个名为*attr*的属性的元素，其值可正为*value*，或者开始为*value*，后面紧随着一个连字符。 |

#### 子字符串匹配选择器

这些选择器让更高级的属性的值的子字符串的匹配变得可行。例如，如果你有box-warning和box-error类，想把开头为“box-”字符串的每个物件都匹配上的话，你可以用[class^="box-"]来把它们两个都选中。

| 选择器          | 示例                | 描述                                                         |
| :-------------- | :------------------ | :----------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | 匹配带有一个名为*attr*的属性的元素，其值开头为*value*子字符串。 |
| `[attr$=value]` | `li[class$="-box"]` | 匹配带有一个名为*attr*的属性的元素，其值结尾为*value*子字符串 |
| `[attr*=value]` | `li[class*="box"]`  | 匹配带有一个名为*attr*的属性的元素，其值的字符串中的任何地方，至少出现了一次*value*子字符串。 |

### 伪类

伪类是选择器的一种，它用于选择处于特定状态的元素，比如当它们是这一类型的第一个元素时，或者是当鼠标指针悬浮在元素上面的时候。

伪类就是开头为冒号的关键字：

```css
:pseudo-class-name
```

我们可以使用`:first-child`伪类选择器——这将一直选中文章中的第一个子元素

```css
article p:first-child {
    font-size: 120%;
    font-weight: bold;
}   
```



**用户行为伪类**

一些伪类只会在用户以某种方式和文档交互的时候应用。这些**用户行为伪类**，有时叫做**动态伪类**，表现得就像是一个类在用户和元素交互的时候加到了元素上一样。案例包括：

- [`:hover`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover)——上面提到过，只会在用户将指针挪到元素上的时候才会激活，一般就是链接元素。
- [`:focus`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus)——只会在用户使用键盘控制，选定元素的时候激活。

```css
a:link,
a:visited {
    color: rebeccapurple;
    font-weight: bold;
}

a:hover {
    color:hotpink;
}   
```



| 选择器                                                       | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`:active`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:active) | 在用户激活（例如点击）元素的时候匹配。                       |
| [`:any-link`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:any-link) | 匹配一个链接的`:link`和`:visited`状态。                      |
| [`:blank`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:blank) | 匹配空输入值的[`<input>`元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input)。 |
| [`:checked`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:checked) | 匹配处于选中状态的单选或者复选框。                           |
| [`:current` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/:current) | 匹配正在展示的元素，或者其上级元素。                         |
| [`:default`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:default) | 匹配一组相似的元素中默认的一个或者更多的 UI 元素。           |
| [`:dir`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:dir) | 基于其方向性（HTML[`dir`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/dir)属性或者 CSS[`direction`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/direction)属性的值）匹配一个元素。 |
| [`:disabled`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:disabled) | 匹配处于关闭状态的用户界面元素                               |
| [`:empty`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:empty) | 匹配除了可能存在的空格外，没有子元素的元素。                 |
| [`:enabled`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:enabled) | 匹配处于开启状态的用户界面元素。                             |
| [`:first`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first) | 匹配[分页媒体](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Paged_Media)的第一页。 |
| [`:first-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-child) | 匹配兄弟元素中的第一个元素。                                 |
| [`:first-of-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-of-type) | 匹配兄弟元素中第一个某种类型的元素。                         |
| [`:focus`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus) | 当一个元素有焦点的时候匹配。                                 |
| [`:focus-visible`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus-visible) | 当元素有焦点，且焦点对用户可见的时候匹配。                   |
| [`:focus-within`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus-within) | 匹配有焦点的元素，以及子代元素有焦点的元素。                 |
| [`:future` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/:future) | 匹配当前元素之后的元素。                                     |
| [`:hover`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover) | 当用户悬浮到一个元素之上的时候匹配。                         |
| [`:indeterminate`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:indeterminate) | 匹配未定态值的 UI 元素，通常为[复选框](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/checkbox)。 |
| [`:in-range`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:in-range) | 用一个区间匹配元素，当值处于区间之内时匹配。                 |
| [`:invalid`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:invalid) | 匹配诸如`<input>`的位于不可用状态的元素。                    |
| [`:lang`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:lang) | 基于语言（HTML[lang](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/lang)属性的值）匹配元素。 |
| [`:last-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-child) | 匹配兄弟元素中最末的那个元素。                               |
| [`:last-of-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-of-type) | 匹配兄弟元素中最后一个某种类型的元素。                       |
| [`:left`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:left) | 在[分页媒体 (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_paged_media)中，匹配左手边的页。 |
| [`:link`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:link) | 匹配未曾访问的链接。                                         |
| [`:local-link` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/:local-link) | 匹配指向和当前文档同一网站页面的链接。                       |
| [`:is()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:is) | 匹配传入的选择器列表中的任何选择器。                         |
| [`:not`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not) | 匹配作为值传入自身的选择器未匹配的物件。                     |
| [`:nth-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child) | 匹配一列兄弟元素中的元素——兄弟元素按照*an+b*形式的式子进行匹配（比如 2n+1 匹配元素 1、3、5、7 等。即所有的奇数个）。 |
| [`:nth-of-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-of-type) | 匹配某种类型的一列兄弟元素（比如，`<p>`元素）——兄弟元素按照*an+b*形式的式子进行匹配（比如 2n+1 匹配元素 1、3、5、7 等。即所有的奇数个）。 |
| [`:nth-last-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-child) | 匹配一列兄弟元素，从后往前倒数。兄弟元素按照*an+b*形式的式子进行匹配（比如 2n+1 匹配按照顺序来的最后一个元素，然后往前两个，再往前两个，诸如此类。从后往前数的所有奇数个）。 |
| [`:nth-last-of-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-of-type) | 匹配某种类型的一列兄弟元素（比如，`<p>`元素），从后往前倒数。兄弟元素按照*an+b*形式的式子进行匹配（比如 2n+1 匹配按照顺序来的最后一个元素，然后往前两个，再往前两个，诸如此类。从后往前数的所有奇数个）。 |
| [`:only-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-child) | 匹配没有兄弟元素的元素。                                     |
| [`:only-of-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-of-type) | 匹配兄弟元素中某类型仅有的元素。                             |
| [`:optional`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:optional) | 匹配不是必填的 form 元素。                                   |
| [`:out-of-range`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:out-of-range) | 按区间匹配元素，当值不在区间内的的时候匹配。                 |
| [`:past` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/:past) | 匹配当前元素之前的元素。                                     |
| [`:placeholder-shown`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:placeholder-shown) | 匹配显示占位文字的 input 元素。                              |
| [`:playing`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:playing) | 匹配代表音频、视频或者相似的能“播放”或者“暂停”的资源的，且正在“播放”的元素。 |
| [`:paused`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:paused) | 匹配代表音频、视频或者相似的能“播放”或者“暂停”的资源的，且正在“暂停”的元素。 |
| [`:read-only`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:read-only) | 匹配用户不可更改的元素。                                     |
| [`:read-write`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:read-write) | 匹配用户可更改的元素。                                       |
| [`:required`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:required) | 匹配必填的 form 元素。                                       |
| [`:right`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:right) | 在[分页媒体 (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_paged_media)中，匹配右手边的页。 |
| [`:root`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root) | 匹配文档的根元素。                                           |
| [`:scope`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:scope) | 匹配任何为参考点元素的的元素。                               |
| [`:valid`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:valid) | 匹配诸如`<input>`元素的处于可用状态的元素。                  |
| [`:target`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:target) | 匹配当前 URL 目标的元素（例如如果它有一个匹配当前[URL 分段](https://en.wikipedia.org/wiki/Fragment_identifier)的元素）。 |
| [`:visited`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:visited) | 匹配已访问链接。                                             |



### 伪元素

伪元素以类似方式表现，不过表现得是像你往标记文本中加入全新的 HTML 元素一样，而不是向现有的元素上应用类。伪元素开头为双冒号`::`。



例如，如果你想选中一段的第一行，你可以把它用一个`<span>`元素包起来，然后使用元素选择器；不过，如果包起来的单词/字符数目长于或者短于父元素的宽度，这样做会失败。由于我们一般不会知道一行能放下多少单词/字符——因为屏幕宽度或者字体大小改变的时候这也会变——通过改变 HTML 的方式来可预测地这么做是不可能的。



`::first-line`伪元素选择器会值得信赖地做到这件事——即使单词/字符的数目改变，它也只会选中第一行。

```css
article p::first-line {
    font-size: 120%;
    font-weight: bold;
}   
```

这表现得就像是`<span>`神奇地包在第一个被格式化的行一样，每当行长改变的时候还会更新。

你可以看到它把两段的第一行都选中了。



**把伪类和伪元素组合起来**

如果你想让第一段的第一行加粗，你需要把:first-child和::first-line选择器放到一起。

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```



**生成带有`::before` 和`::after` 的内容**

有一组特别的伪元素，它们和content属性一同使用，使用 CSS 将内容插入到你的文档中中。



你能用这些插入一个文本字符串，和在下面的实时示例里那样。试着改变[`content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/content)属性的文本值，看看输出是怎么改变的。你也能改变`::before`伪元素为`::after`，看到这段文本插入到了元素的末尾而不是开头。

```css
.box::before {
    content: "This should show before the other content. ";
}   
    
```

| 选择器                                                       | 描述                                                 |
| :----------------------------------------------------------- | :--------------------------------------------------- |
| [`::after`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after) | 匹配出现在原有元素的实际内容之后的一个可样式化元素。 |
| [`::before`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::before) | 匹配出现在原有元素的实际内容之前的一个可样式化元素。 |
| [`::first-letter`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-letter) | 匹配元素的第一个字母。                               |
| [`::first-line`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-line) | 匹配包含此伪元素的元素的第一行。                     |
| [`::grammar-error`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::grammar-error) | 匹配文档中包含了浏览器标记的语法错误的那部分。       |
| [`::selection`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::selection) | 匹配文档中被选择的那部分。                           |
| [`::spelling-error`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::spelling-error) | 匹配文档中包含了浏览器标记的拼写错误的那部分。       |

### 后代选择器

后代选择器——典型用单个空格（" "）字符——组合两个选择器



下面的示例中，我们只会匹配处于带有.box类的元素里面的`<p>`元素。

```css
.box p {
    color: red;
}  
```

### 子代关系选择器

子代关系选择器是个大于号（`>`），只会在选择器选中直接子元素的时候匹配。

```css
ul > li {
    border-top: 5px solid red;
}  
    
```

### 邻接兄弟选择器

邻接兄弟选择器（`+`）用来选中恰好处于另一个在继承关系上同级的元素旁边的物件。例如，选中所有紧随`<p>`元素之后的`<img>`元素：

```CSS
p + img {
	padding: .5em;
}
```

### 通用兄弟选择器

如果你想选中一个元素的兄弟元素，即使它们不直接相邻，你还是可以使用通用兄弟关系选择器（`~`）。要选中所有的`<p>`元素后*任何地方*的`<img>`元素，我们会这样做：

```css
 p ~ img {   
 	padding: .5em;
 }
```

## 层叠与继承

### 层叠

> 样式表层叠——简单的说，就是 CSS 规则的顺序很重要；当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则

下面的示例中，我们有两个关于 `<h1>` 的规则。`<h1>` 最后显示蓝色——这两个规则来自同一个源，且具有相同的元素选择器，有相同的优先级，所以顺序在最后的生效。

```css
h1 { 
    color: red; 
}
h1 { 
    color: blue; 
}
```

### 优先级

> 浏览器是根据优先级来决定当多个规则有不同选择器对应相同的元素的时候需要使用哪个规则。
>
> 你会发现在一些情况下，有些规则在最后出现，但是却应用了前面的具有冲突的规则。这是因为前面的有更高的**优先级**——它范围更小，因此浏览器就把它选择为元素的样式。



现在让我们来看看浏览器如何计算优先级。

一个选择器的优先级可以说是由三个不同的值（或分量）相加，可以认为是百（ID）十（类）个（元素）

- **ID**：选择器中包含 ID 选择器则百位得一分。
- **类**：选择器中包含类选择器、属性选择器或者伪类则十位得一分。
- **元素**：选择器中包含元素、伪元素选择器则个位得一分。

下面有几个单独的例子:

| 选择器                                    | ID   | 类   | 元素 | 优先级 |
| :---------------------------------------- | :--- | :--- | :--- | :----- |
| `h1`                                      | 0    | 0    | 1    | 0-0-1  |
| `h1 + p::first-letter`                    | 0    | 0    | 3    | 0-0-3  |
| `li > a[href*="en-US"] > .inline-warning` | 0    | 2    | 2    | 0-2-2  |
| `#identifier`                             | 1    | 0    | 0    | 1-0-0  |
| `button:not(#mainBtn, .cta)`              | 1    | 0    | 1    | 1-0-1  |



**其他特殊优先级**

1. 内联样式

   内联样式，即 `style` 属性内的样式声明，优先于所有普通的样式，无论其优先级如何。这样的声明没有选择器，但它们的优先级可以理解为 1-0-0-0；即无论选择器中有多少个 ID，它总是比其他任何优先级的权重都要高。

2. !important

   有一个特殊的 CSS 可以用来覆盖所有上面所有优先级计算，不过需要很小心的使用——!important。用于修改特定属性的值，能够覆盖普通规则的层叠。

   ```css
   border: none !important;
   ```

   

### 继承

> 继承也需要在上下文中去理解——一些设置在父元素上的 CSS 属性是可以被子元素继承的，有些则不能。

举一个例子，如果你设置一个元素的 `color` 和 `font-family`，每个在里面的元素也都会有相同的属性，除非你直接在元素上设置属性。

一些属性是不能继承的——举个例子如果你在一个元素上设置 [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 为 50% ，所有的后代不会是父元素的宽度的 50% 。如果这个也可以继承的话，CSS 就会很难使用了！

#### 控制继承

CSS 为控制继承提供了五个特殊的通用属性值。每个 CSS 属性都接收这些值。

[`inherit`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inherit) 设置该属性会使子元素属性和父元素相同。实际上，就是“开启继承”。

[`initial`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/initial)将应用于选定元素的属性值设置为该属性的初始值。

[`revert`](https://developer.mozilla.org/en-US/docs/Web/CSS/revert)将应用于选定元素的属性值重置为浏览器的默认样式，而不是应用于该属性的默认值。

[`unset`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/unset)如果有可以继承得属性，则将该属性设置为继承的值，如果没有继承属性，则设置为初始值



**重设所有属性值**

CSS 的简写属性 [`all`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/all) 可以用于同时将这些继承值中的一个应用于（几乎）所有属性。它的值可以是其中任意一个（`inherit`、`initial`、`unset` 或 `revert`）。这是一种撤销对样式所做更改的简便方法，以便回到之前已知的起点。

```html
        <blockquote>
            <p>This blockquote is styled</p>
        </blockquote>

        <blockquote class="fix-this">
            <p>This blockquote is not styled</p>
        </blockquote>
```

```css
blockquote {
    background-color: orange;
    border: 2px solid blue;
}
        
.fix-this {
    all: unset;
}
  
```

上述案例会使`.fix-this`的元素只应用可以继承的属性

## 外边距

> 外边距是盒子周围一圈看不到的空间。它会把其他元素从盒子旁边推开。外边距属性值可以为正也可以为负。设置负值会导致和其他内容重叠。无论使用标准模型还是替代模型，外边距总是在计算可见部分后额外添加。

我们可以使用`margin`属性一次控制一个元素的所有边距，或者每边单独使用等价的普通属性控制：

**一次控制：**

​	`	margin :上 右 下 左;`

​	`margin : 上下 左右;`

单独控制：

- margin-top
- margin-right
- margin-bottom
- margin-left

#### 外边距折叠

理解外边距的一个关键是外边距折叠的概念。如果你有两个外边距相接的元素，这些外边距将合并为一个外边距，即最大的单个外边距的大小。

## 内边距

> 内边距位于边框和内容区域之间。与外边距不同，您不能有负数量的内边距，所以值必须是 0 或正的值。应用于元素的任何背景都将显示在内边距后面，内边距通常用于将内容推离边框。

我们可以使用`padding`简写属性控制元素所有边，或者每边单独使用等价的普通属性：

控制方式`和margin一样`

## 边框

> 边框是在边距和填充框之间绘制的。如果您正在使用标准的盒模型，边框的大小将添加到框的宽度和高度。如果您使用的是替代盒模型，那么边框的大小会使内容框更小，因为它会占用一些可用的宽度和高度。



为边框设置样式时，有大量的属性可以使用——有四个边框，每个边框都有样式、宽度和颜色，我们可能需要对它们进行操作。



**简写语法：**

```css
/* style */
border: solid;

/* width | style */
border: 2px dotted;

/* style | color */
border: outset #f33;

/* width | style | color */
border: medium dashed green;
```



**圆角：**

盒子上的圆角是通过使用 [`border-radius`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius) 属性和与盒子的每个角相关的普通属性来实现的。两个长度或百分比可以作为一个值，第一个值定义水平半径，第二个值定义垂直半径。在很多情况下，你只会传入一个值，这个值会被用于这两个。



例如，要使一个盒子的四个角都有 10px 的圆角半径：

```css
.box {
  border-radius: 10px;
}
```

或使右上角的水平半径为 1em，垂直半径为 10％：

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

我们在下面的示例中设置了所有四个角，然后更改右上角的值使之不同。你可以使用这些值来更改圆角样式。

```css
.box {
  border: 10px solid rebeccapurple;
  border-radius: 1em;
  border-top-right-radius: 10% 30%;
}
```



## 盒模型

> ​	在 CSS 中，所有的元素都被一个个的“盒子（box）”包围着，理解这些“盒子”的基本原理，是我们使用 CSS 实现准确布局、处理元素排列的关键。

### 块级盒子（Block box）和 内联盒子（Inline box）



在 CSS 中我们广泛地使用两种“盒子” —— **块级盒子** (**block box**) 和 **内联盒子** (**inline box**)。这两种盒子会在**页面流**（page flow）和元素之间的关系方面表现出不同的行为：



#### 块级盒子

- 块级元素宽度会扩展至和父元素一样宽
- 每个块级元素会换行
- `width` 和 `height` 属性可以发挥作用
- 内边距（padding）, 外边距（margin）和 边框（border）会将其他元素从当前盒子周围“推开”

#### 内联盒子

- 盒子不会产生换行。
- `width` 和 `height` 属性将不起作用
- 垂直方向的内边距、外边距以及边框会被应用但是`不会`把其他处于 `inline` 状态的盒子推开。
- 水平方向的内边距、外边距以及边框会被应用且`会`把其他处于 `inline` 状态的盒子推开。

用做链接的 `<a>` 元素、 `<span>`、 `<em>` 以及 `<strong>` 都是默认处于 `inline` 状态的。

我们通过对盒子`display` 属性的设置，比如 `inline` 或者 `block` ，来控制盒子的外部显示类型。



### CSS 盒模型

> 使用box-sizing属性来设置盒模型

#### 标准盒模型（Content box）

在标准模型中，如果你给盒设置 `width` 和 `height`，实际设置的是 *`content box`*。`padding` 和 `border` 再加上设置的宽高一起决定整个盒子的大小。见下图。

![](./assets/standard-box-model.png)

假设定义了 `width`, `height`, `margin`, `border`, and `padding`:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 25px;
  padding: 25px;
  border: 5px solid black;
}
```

如果使用标准模型，实际占用空间的宽高分别为：宽度 = 410px (350 + 25 + 25 + 5 + 5)，高度 = 210px (150 + 25 + 25 + 5 + 5)。

> **备注：** margin 不计入实际大小 —— 当然，它会影响盒子在页面所占空间，但是影响的是盒子外部空间。盒子的范围到边框为止 —— 不会延伸到 margin。



#### 替代（IE）盒模型（border-box）

你可能会认为盒子的大小还要加上边框和内边距，这样很麻烦，而且你的想法是对的 ! 因为这个原因，css 还有一个替代盒模型。使用这个模型，所有宽度都是可见宽度，所以内容宽度是该宽度减去边框和填充部分。使用上面相同的样式得到 (width = 350px, height = 150px).

![](./assets/alternate-box-model.png)

`默认浏览器会使用标准模型。`如果需要使用替代模型，您可以通过为其设置 box-sizing: border-box 来实现。这样就可以告诉浏览器使用 border-box 来定义区域，从而设定您想要的大小。

如果你希望所有元素都使用替代模式，而且确实很常用，设置 `box-sizing` 在 `<html>` 元素上，然后设置所有元素继承该属性，正如下面的例子。如果想要深入理解

```css
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
```



### display: inline-block

> display 有一个特殊的值，它在内联和块之间提供了一个中间状态。这对于以下情况非常有用：您不希望一个项切换到新行，但希望它可以设定宽度和高度，并避免上面看到的重叠。

一个元素使用 `display: inline-block`，实现我们需要的块级的部分效果：

- 设置`width` 和`height` 属性会生效。
- `padding`, `margin`, 以及`border` 会推开其他元素。



## 背景

### 背景颜色

> [`background-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-color) 属性定义了 CSS 中任何元素的背景颜色。属性接受任何有效的 `color` 值。`background-color` 可以延伸至元素的内容和内边距盒子的下面。



例子：

```css
.box {
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
span {
  background-color: rgba(255,255,255,.5);
}
    
```

### 背景图像

> [`background-image`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image) 属性可以在一个元素的背景中显示一个图像。

默认情况下，大图不会缩小以适应盒子，因此我们只能看到它的一个小角，而小图则是`平铺`以填充方框。

```css
.a {
  background-image: url(balloons.jpg);
}

.b {
  background-image: url(star.png);
}
    
```

![](./assets/Snipaste_2023-06-19_16-09-56.jpg)



**如果除了背景图像外，还指定了背景颜色，则图像将显示在颜色的顶部。**

```css
.b {
  background-image: url(star.png);
  background-color:red;
}
```

![](./assets/Snipaste_2023-06-19_16-11-19.jpg)



**控制背景平铺行为**

 [`background-repeat`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat) 属性用于控制图像的平铺行为。可用的值是：

- `no-repeat`——阻止背景重复平铺。
- `repeat-x`——仅水平方向上重复平铺。
- `repeat-y`——仅垂直方向上重复平铺。
- `repeat`——默认值，在水平和垂直两个方向重复平铺。



**调整背景图像的大小**

例如我们有一个很大的图像，由于它比作为背景的元素大，所以最后被裁剪掉了。在这种情况下，我们可以使用 [`background-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size) 属性，它可以设置`长度`或`百分比`值，来调整图像的大小以适应背景。



你也可以使用关键字：

- `cover`：浏览器将使图像足够大，使它完全覆盖了盒子区域，同时仍然保持其宽高比。在这种情况下，图像的部分区域可能会跳出盒子外。
- `contain`：浏览器会将图像调整到适合框内的尺寸。在这种情况下，如果图像的长宽比与盒子的长宽比不同，你可能会在图像的两边或顶部和底部出现空隙。



**背景图像定位**

[`background-position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position) 属性允许你选择背景图片出现在它所应用的盒子上的位置。这使用了一个坐标系统，其中方框的左上角是 `(0,0)`，方框沿水平（`x`）和垂直（`y`）轴定位。

**备注：** 默认的 `background-position` 值是 `(0,0)`。



你可以使用像 `top` 和 `right` 这样的关键字

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

或者使用`长度`和`百分比`值：

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

你也可以将关键字与长度或百分比混合在一起，在这种情况下，第一个值必须指水平位置或偏移，第二个值指垂直位置。例如：

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

最后，你还可以使用四值语法来指示到盒子的某些边的距离——在本例中，长度单位是与其前面的值的偏移量。所以在下面的 CSS 中，我们将背景定位在距顶部 20px 和右侧 10px 处:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```



**多个背景图像**

也可以有多个背景图像——在单个属性值中指定多个 `background-image` 值，用逗号分隔每个值。

当你这样做时，你可能会出现背景图片相互重叠的情况。背景将分层，最后列出的背景图片位于最下层，而之前的每张图片都堆在代码中紧随其后的那张图片之上



其他 `background-*` 属性也可以像 `background-image` 一样使用逗号分隔的方式设置：

```css
background-image: url(image1.png), url(image2.png), url(image3.png),
  url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position: 10px 20px, top right;
```

不同属性的每个值，将与其他属性中相同位置的值匹配。例如，上面的 `image1` 的 `background-repeat` 值将是 `no-repeat`。但是，当不同的属性具有不同数量的值时，会发生什么情况呢？答案是较小数量的值会循环——在上面的例子中有四个背景图像，但是只有两个背景位置值。前两个位置值将应用于前两个图像，然后它们将再次循环——`image3` 将被赋予第一个位置值，`image4` 将被赋予第二个位置值。



**背景图片滚动位置**

我们为背景提供的另一个选项是指定内容滚动时的滚动方式。这是用 [`background-attachment`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment) 属性控制的，它可以取以下值：

- `scroll`：使元素的背景在页面滚动时滚动。如果滚动了元素内容，则背景不会移动。实际上，背景被固定在页面的相同位置，所以它会随着页面的滚动而滚动。
- `fixed`：使元素的背景固定在视口上，这样当页面或元素内容滚动时，它就不会滚动。它将始终保持在屏幕上相同的位置。
- `local`：将背景固定在它所设置的元素上，所以当你滚动该元素时，背景也随之滚动。

### 渐变背景

> 当渐变用于背景时，也可以使用像图像一样的 [`background-image`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image) 属性设置。

在下面的示例中尝试一些不同的渐变。在这两个盒子里，我们分别有一个线性渐变，它延伸到整个盒子上，还有一个径向渐变，它有一个固定的大小，因此会重复。

```css
.a {
  background-image: linear-gradient(105deg, rgba(0,249,255,1) 39%, rgba(51,56,57,1) 96%);
}

.b {
  background-image: radial-gradient(circle, rgba(0,249,255,1) 39%, rgba(51,56,57,1) 96%);
  background-size: 100px 50px;
}
```

![](./assets/Snipaste_2023-06-19_16-36-18.jpg)

### 背景简写

这里有一些规则，需要在简写背景图像属性时遵循，例如：

- `background-color` 只能在最后一个逗号之后指定。
- `background-size` 值只能立即包含在 `background-position` 之后，用“/”字符分隔，例如：`center/80%`。

```css
.box {
  background:   
    linear-gradient(105deg, rgba(255,255,255,.2) 39%, rgba(51,56,57,1) 96%) center center / 400px 200px no-repeat,
url(big-star.png) center no-repeat, 
    green;
}
```

<img src="./assets/Snipaste_2023-06-19_16-59-40.jpg" style="zoom:50%;" />

## 文本方向

**什么是书写模式?**

CSS 中的书写模式是指文本的排列方向是横向还是纵向的。[`writing-mode`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode) 属性使我们从一种模式切换到另一种模式。为此，你不必使用一种竖向的语言——你还可以更改部分文字的方向以实现创新性的布局。

[`writing-mode`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode)的三个值分别是：

- `horizontal-tb`: 从上至下。对应的文本方向是`横向`的。
- `vertical-rl`: 从右向左。对应的文本方向是`纵向`的。
- `vertical-lr`: 从左向右。对应的文本方向是`纵向`的。



**书写模式块级布局和内联布局得不同**

当我们切换书写模式时，我们也在改变块和内联文本的方向。`horizontal-tb`书写模式下块的方向是从上到下的横向的，而 `vertical-rl`书写模式下块的方向是从右到左的纵向的。因此，块维度指的总是块在页面书写模式下的显示方向。而内联维度指的总是文本方向。

## 溢出

> 我们知道，CSS 中万物皆盒，因此我们可以通过给[`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width)和[`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height)（或者 [`inline-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inline-size) 和 [`block-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/block-size)）赋值的方式来约束盒子的尺寸。溢出是在你往盒子里面塞太多东西的时候发生的，所以盒子里面的东西也不会老老实实待着。

**CSS 尽力减少“数据损失”**

只要有可能，CSS 就不会隐藏你的内容，隐藏引起的数据损失通常会造成困扰。在 CSS 的术语里面，这会导致一些内容消失



### overflow 属性

> [`overflow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow)属性是你控制一个元素溢出的方式，它告诉浏览器你想怎样处理溢出。`overflow`的默认值为`visible`，这就是我们的内容溢出的时候，我们在默认情况下看到它们的原因。

如果你想在内容溢出的时候把它裁剪掉，你可以在你的盒子上设置`overflow: hidden`。这就会像它表面上所显示的那样作用——`隐藏掉溢出`。

<img src="./assets/Snipaste_2023-06-19_18-01-28.jpg" style="zoom:50%;" />



也许你还会想在有内容溢出的时候加个滚动条？如果你用了`overflow: scroll`，那么你的浏览器总会`显示滚动条`，即使没有足够多引起溢出的内容。你可能会需要这样的样式，它避免了滚动条在内容变化的时候出现和消失。

<img src="./assets/Snipaste_2023-06-19_18-02-17.jpg" style="zoom:50%;" />



在以上的例子里面，我们`仅仅需要在y轴或x方向上滚动`，但是我们在两个方向上都有了滚动条。你可以使用[`overflow-y`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-y)和[`overflow-x`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-x)属性，设置`overflow-y: scroll`来仅在`y`轴方向滚动。



如果你只是想让滚动条在有比盒子所能装下更多的内容的时候才显示，那么使用`overflow: auto`。此时`由浏览器决定是否显示滚动条`。桌面浏览器一般仅仅会在有足以引起溢出的内容的时候这么做。

## 调整大小

### 把百分数作为内外边距

如果你把 `margin` 和 `padding` 设置为百分数的话，值是以包含块的**内联尺寸**进行计算的，也就是元素的水平宽度。

如果设置外边距和内边距为10%，所有的外边距和内边距都是宽度的10%

### min- 和 max- 尺寸

除了让万物都有一个确定的大小以外，我们可以让 CSS 给定一个元素的最大或最小尺寸。

如果你有一个包含了变化容量的内容的盒子，而且你总是想让它**至少**有个确定的高度，你应该给它设置一个 [`min-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-height) 属性。



[`max-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-width) 的常见用法为，在没有足够空间以原有宽度展示图像时，让图像缩小，同时确保它们不会比这一宽度大。

### 视口单位

在 CSS 中，我们有与视口尺寸相关的度量单位，即意为视口宽度的 `vw` 单位，以及意为视口高度的 `vh` 单位。使用这些单位，你可以把一些东西做得随用户的视口改变大小。

`1vh` 等于视口高度的 1%，`1vw` 则为视口宽度的 1%。你可以用这些单位约束盒子的大小，还有文字的大小。



## 替换元素

> 图像和视频被描述为**[替换元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element)**。这意味着 CSS 不能影响它们的内部布局——而仅影响它们在页面上相对于其他元素的位置。

### 图像元素填充

你可以选择对容器内的图像作其他方式的处理。例如，你可能想把一张图像调整到能够完全盖住一个盒子的大小。



[`object-fit`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit) 属性可以在这里帮助你。当使用 `object-fit` 时，替换元素可以以多种方式被调整到合乎盒子的大小。

- contain

  长边填充盒子，保持宽高比

- cover

  短边填充盒子，保持宽高比，会裁剪图片

- fill

  拉伸填充

## 文本样式

### 颜色

[`color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color) 属性设置选中元素的文本的颜色 

```css
p {
  color: red;
}
```



### 字体设置

要在你的文本上设置一个不同的字体，你可以使用 [`font-family`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family) 属性

```css
p {
  font-family: arial;
}
```



### 网页安全字体

说到字体可用性，只有某几个字体通常可以应用到所有系统，因此可以毫无顾忌地使用。这些都是所谓的 **网页安全字体**。

| 字体名称        | 泛型       | 注意                                                         |
| :-------------- | :--------- | :----------------------------------------------------------- |
| Arial           | sans-serif | 通常认为最佳做法还是添加 Helvetica 作为 Arial 的首选替代品，尽管它们的字体面几乎相同，但 Helvetica 被认为具有更好的形状，即使 Arial 更广泛地可用。 |
| Courier New     | monospace  | 某些操作系统有一个 Courier New 字体的替代（可能较旧的）版本叫 Courier。使用 Courier New 作为 Courier 的首选替代方案，被认为是最佳做法。 |
| Georgia         | serif      |                                                              |
| Times New Roman | serif      | 某些操作系统有一个 Times New Roman 字体的替代（可能较旧的）版本叫 Times。使用 Times 作为 Times New Roman 的首选替代方案，被认为是最佳做法。 |
| Trebuchet MS    | sans-serif | 您应该小心使用这种字体——它在移动操作系统上并不广泛。         |
| Verdana         | sans-serif |                                                              |



### 默认字体

CSS 定义了 5 个常用的字体名称：`serif`, `sans-serif`, `monospace`, `cursive`, 和 `fantasy`. 这些都是非常通用的，当使用这些通用名称时，使用的字体完全取决于每个浏览器，而且它们所运行的每个操作系统也会有所不同。这是一种糟糕的情况，浏览器会尽力提供一个看上去合适的字体。

<img src="./assets/Snipaste_2023-06-21_11-06-05.jpg" style="zoom: 33%;" />

### 字体栈

由于你无法保证你想在你的网页上使用的字体的可用性 (甚至一个网络字体可能由于某些原因而出错), 你可以提供一个**字体栈** (**font stack**)，这样的话，浏览器就有多种字体可以选择了。只需包含一个 `font-family` 属性，其值由几个用逗号分离的字体名称组成。

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

在这种情况下，浏览器从列表的第一个开始，然后查看在当前机器中，这个字体是否可用。如果可用，就把这个字体应用到选中的元素中。如果不可用，它就移到列表中的下一个字体，然后再检查。

### 字体大小

在调整字体大小时，通过 [`font-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size) 属性设置，最常用的单位是：

- `px` (像素): 将像素的值赋予给你的文本。这是一个绝对单位，它导致了在任何情况下，页面上的文本所计算出来的像素值都是一样的。
- `em`: 1em 等于我们设计的当前元素的父元素上设置的字体大小 
- `rem`: 这个单位的效果和 `em` 差不多，除了 1`rem` 等于 HTML 中的根元素的字体大小

元素的 `font-size` 属性是从该元素的父元素继承的。所以这一切都是从整个文档的根元素——`<html>`开始，浏览器的 `font-size` 标准设置的值为 16px。

### 字体样式

**斜体**

[`font-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style): 用来打开和关闭文本 italic (斜体)。

- `normal`: 将文本设置为普通字体 (将存在的斜体关闭)
- `italic`: 如果当前字体的斜体版本可用，那么文本设置为斜体版本；如果不可用，那么会利用 oblique 状态来模拟 italics。



**字体粗细**

[`font-weight`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight): 设置文字的粗体大小。

- `normal`, `bold`: 普通或者**加粗**的字体粗细
- `lighter`, `bolder`: 将当前元素的粗体设置为比其父元素粗体更细或更粗一步。
- `100`–`900`: 数值粗体值，如果需要，可提供比上述关键字更精细的粒度控制。



**大小写转换**

[`text-transform`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-transform): 允许你设置要转换的字体。

- `none`: 防止任何转型。
- `uppercase`: 将所有文本转为大写。
- `lowercase`: 将所有文本转为小写。
- `capitalize`: 转换所有单词让其首字母大写。
- `full-width`: 将所有字形转换成全角，即固定宽度的正方形，类似于等宽字体，允许拉丁字符和亚洲语言字形（如中文，日文，韩文）对齐。



**字体装饰线**

[`text-decoration`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration): 设置/取消字体上的文本装饰

- `none`: 取消已经存在的任何文本装饰。
- `underline`: 文本下划线。
- `overline`: 文本上划线
- `line-through`: 穿过文本的线。

可以一次接受多个值，如果你想要同时添加多个装饰值，比如 `text-decoration: underline overline`.。



**字体阴影**

`text-shadow`: 设置字体阴影，最多需要四4个值

```css
text-shadow: 4px 4px 5px red;
```

1. 阴影与原始文本的水平偏移，这个值必须指定。
2. 阴影与原始文本的垂直偏移;效果基本上就像水平偏移，除了它向上/向下移动阴影，而不是左/右。这个值必须指定。
3. 模糊半径 - 更高的值意味着阴影分散得更广泛。如果不包含此值，则默认为 0，这意味着没有模糊。
4. 阴影的基础颜色，如果没有指定，默认为 `black`.



您可以通过包含以逗号分隔的多个阴影值，将多个阴影应用于同一文本，例如：

```css
text-shadow: -1px -1px 1px #aaa,
             0px 4px 1px rgba(0,0,0,0.5),
             4px 4px 5px rgba(0,0,0,0.7),
             0px 0px 7px rgba(0,0,0,0.4);
```

### 文本布局

**文本对齐**

[`text-align`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align) 属性用来控制文本如何和它所在的内容盒子对齐。

- `left`: 左对齐文本。
- `right`: 右对齐文本。
- `center`: 居中文字
- `justify`: 使文本展开，改变单词之间的差距，使所有文本行的宽度相同。



**行高**

[`line-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height) 属性设置文本每行之间的高，可以接受大多数单位，不过也可以设置一个无单位的值，作为乘数，通常这种是比较好的做法。无单位的值乘以 [`font-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size) 来获得 `line-height`。当行与行之间拉开空间，正文文本通常看起来更好更容易阅读。推荐的行高大约是 1.5–2 (双倍间距。) 所以要把我们的文本行高设置为字体高度的 1.5 倍，你可以使用这个：

```css
line-height: 1.5;
```



### 更多字体样式和文本呢布局

Font 样式：

- [`font-variant`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant): 在小型大写字母和普通文本选项之间切换。
- [`font-kerning`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-kerning): 开启或关闭字体间距选项。
- [`font-feature-settings`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-feature-settings): 开启或关闭不同的 [OpenType](https://en.wikipedia.org/wiki/OpenType) 字体特性。
- [`font-variant-alternates`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-alternates): 控制给定的自定义字体的替代字形的使用。
- [`font-variant-caps`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-caps): 控制大写字母替代字形的使用。
- [`font-variant-east-asian` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-east-asian): 控制东亚文字替代字形的使用，像日语和汉语。
- [`font-variant-ligatures`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-ligatures): 控制文本中使用的连写和上下文形式。
- [`font-variant-numeric`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-numeric): 控制数字，分式和序标的替代字形的使用。
- [`font-variant-position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-position): 控制位于上标或下标处，字号更小的替代字形的使用。
- [`font-size-adjust`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size-adjust): 独立于字体的实际大小尺寸，调整其可视大小尺寸。
- [`font-stretch`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-stretch): 在给定字体的可选拉伸版本中切换。
- [`text-underline-position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-underline-position): 指定下划线的排版位置，通过使用 `text-decoration-line` 属性的`underline` 值。
- [`text-rendering`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-rendering): 尝试执行一些文本渲染优化。

文本布局样式：

- [`text-indent`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-indent): 指定文本内容的第一行前面应该留出多少的水平空间。
- [`text-overflow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-overflow): 定义如何向用户表示存在被隐藏的溢出内容。
- [`white-space`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space): 定义如何处理元素内部的空白和换行。
- [`word-break`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break): 指定是否能在单词内部换行。
- [`direction`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/direction): 定义文本的方向 (这取决于语言，并且通常最好让 HTML 来处理这部分，因为它是和文本内容相关联的。)
- [`hyphens`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/hyphens): 为支持的语言开启或关闭连字符。
- [`line-break`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-break): 对东亚语言采用更强或更弱的换行规则。
- [`text-align-last`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align-last): 定义一个块或行的最后一行，恰好位于一个强制换行前时，如何对齐。
- [`text-orientation`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-orientation): 定义行内文本的方向。
- [`word-wrap`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-wrap): 指定浏览器是否可以在单词内换行以避免超出范围。
- [`writing-mode`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode): 定义文本行布局为水平还是垂直，以及后继文本流的方向。

### 字体简写

许多字体的属性也可以通过 [`font`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 的简写方式来设置 . 这些是按照以下顺序来写的： [`font-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style), [`font-variant`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant), [`font-weight`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight), [`font-stretch`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-stretch), [`font-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size), [`line-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height), and [`font-family`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family).

如果你想要使用 `font` 的简写形式，在所有这些属性中，只有 `font-size` 和 `font-family` 是一定要指定的。

[`font-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size) 和 [`line-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height) 属性之间必须放一个正斜杠。

```css
font:
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```



### 链接样式

> 链接存在时处于不同的状态，每一个状态都可以用对应的 [伪类](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors#pseudo-classes) 来应用样式：

- `link` 没有访问过的状态
- `Visited` 已经访问过的状态
- `Hover` 光标悬浮状态
- `Focus` 一个链接当它被选中的时候 (比如通过键盘的 Tab 移动到这个链接的时候）
- `Active` 一个链接当它被激活的时候 (比如被点击的时候)



**链接默认样式**

- 链接具有下划线。
- 未访问过的 (Unvisited) 的链接是蓝色的。
- 访问过的 (Visited) 的链接是紫色的。
- 悬停 (Hover) 在一个链接的时候鼠标的光标会变成一个小手的图标。
- 选中 (Focus) 链接的时候，链接周围会有一个轮廓
- 激活 (Active) 链接的时候会变成红色 (当你点击链接时，请尝试按住鼠标按钮。)



**在链接中增加图标**

```css
a {
  background: url("external-link-52.png") no-repeat 100% 0;
  background-size: 16px 16px;
  padding-right: 19px;
}
```

这里，我们在外部链接上插入了一个自定义背景图片，最后，我们在链接上设置 [`padding-right`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-right) ，为背景图片留出空间，这样就不会让它和文本重叠了。



## 排版

### Flex布局

>  弹性盒模型（Flexible Box模型），也被成为flexbox，是一种一维的布局模型（也就是说一次只能处理一个维度上的元素布局，一行或者一列）。它给flexbox的子元素之间提供了强大的空间分布和对齐能力。

当元素表现为 flex 框时，它们沿着两个轴来布局：

![在从左到右的语言中，三个 flex 项并排放置在 flex 容器中。主轴——弹性容器布置 flex 方向上的轴——是水平的。主轴的两端是开始端和结束端，分别位于左侧和右侧。交叉轴是垂直的；垂直于主轴。交叉轴的开始端和结束端分别位于顶部和底部。flex 项沿着主轴排列，在这种情况下，宽度称为主轴尺寸，flex 项沿交叉轴排列，在这种情况下，高度称为交叉尺寸。](./assets/flex_terms.png)

- **主轴**（main axis）是沿着 flex 元素放置的方向延伸的轴（比如页面上的横向的行、纵向的列）。该轴的开始和结束被称为 **main start** 和 **main end**。
- **交叉轴**（cross



**列还是行？**

弹性盒子提供了 [`flex-direction`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction) 这样一个属性，它可以指定主轴的方向——它默认值是 `row`



**换行**

子元素如果超出了它们的容器。默认将不会换行，增加`flex-wrap: wrap`使子元素自动换行

<img src="./assets/flexbox-example3.png" alt="简单弹性盒子示例，将所有 flex 项都布置在弹性容器的一行中。第八个 flex 项在浏览器窗口溢出，页面具有可见的水平和垂直滚动条，因为它无法容纳在窗口的宽度内，因为前七个 flex 项占用了视口中的可用空间。默认情况下，如果将弹性方向设置为行，浏览器会尝试将所有 flex 项放在一行中；如果弹性方向设置为列，则会尝试将所有 flex 项置于单列中。" style="zoom:50%;" />



**flex-flow 缩写**

到这里，应当注意到存在着 [`flex-direction`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction) 和 [`flex-wrap`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap)——的缩写 [`flex-flow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-flow)。比如，你可以将

```css
flex-direction: row;
flex-wrap: wrap;
```

替换为

```css
flex-flow: row wrap;
```



**flex 项的动态尺寸**

```css
article {
  flex: 1;
}
```

这是一个无单位的比例值，表示每个 flex 项沿主轴的可用空间大小。占用的空间是在设置 padding 和 margin 之后剩余的空间。因为它是一个比例，这意味着将每个 flex 项的设置为 400000 的效果和 1 的时候是完全一样的。

你还可以指定 flex 的最小值：

```css
article {
  flex: 1 200px;
}
```

这表示“每个 flex 项将首先给出 200px 的可用空间，然后，剩余的可用空间将根据分配的比例共享”。



**水平和垂直对齐**

我们可以使用弹性盒子的功能让 flex 项沿主轴或交叉轴对齐。

[`align-items`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items) 控制 flex 项在交叉轴上的位置。

[`justify-content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) 控制 flex 项在主轴上的位置。



**flex 项排序**

弹性盒子也有可以改变 flex 项的布局位置的功能，而不会影响到源顺序（即 dom 树里元素的顺序）。这也是传统布局方式很难做到的一点。

使用 `  order: 1`属性进行排序

- 所有 flex 项默认的 [`order`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/order) 值是 0。
- order 值大的 flex 项比 order 值小的在显示顺序中更靠后。
- 相同 order 值的 flex 项按源顺序显示。所以假如你有四个元素，其 order 值分别是 2，1，1 和 0，那么它们的显示顺序就分别是第四，第二，第三，和第一。





**常用属性：**

**1）flex-direction**

设置主轴方向，有四个值可选

- row 水平
- row-reverse 水平倒着拍
- column 垂直
- column-reverse 垂直倒着拍



**2）flex-wrap**

设置容器内的元素是否自动换行。默认flex内的元素是不会自动换行的，会压缩成一行显示

- nowrap：不换行，压缩成一行
- wrap：宽度不够自动换行
- wrap-reverse： 宽度不够自动换行，且交叉轴的起始线和终止线会反过来



**3）justify-content**

用来设置容器内元素在主轴方向的对齐方式

- center：居中对齐
- left：左对齐
- right：右对齐
- flex-start：从主轴的开始排列
- flex-end：从主轴的末尾开始排列
- space-between：子元素间隔平均分布，`两端间隔为0`
- space-around：子元素间隔平均分布，两端间隔为元素间隔的`一半`
- space-evenly：子元素、两端间隔`全都`平均分布

**4）align-items**

用来设置容器内的元素在交叉轴(侧轴)的对齐方式

- normal：默认从主轴的开始排列
- flex-start：元素向交叉轴起始线对齐
- flex-end：元素向交叉轴终止线对齐
- start：元素向交叉轴起始线对齐
- end：元素向交叉轴终止线对齐
- center：元素在交叉轴居中。如果元素在交叉轴上的高度大于容器的高度，那么在两个方向上溢出距离相同
- left：元素一个挨着一个对齐在对齐容器的左边。如果属性的轴与内联轴不平行，则该值的行为类似于start。
- right：元素一个挨着一个对齐在对齐容器的右边。如果属性的轴与内联轴不平行，则该值的行为类似于start。

**5）align-content**

align-content属性是设置浏览器如何沿着弹性盒子布局的交叉轴在内容项和周围分配空间

**只适用**多行的flex容器（也就是flex容器中的子项不止一行时该属性才有效果），它的作用是当flex容器在交叉轴上有多余的空间时，将子项作为一个整体（属性值为：flex-start、flex-end、center时）进行对齐



- start: 所有行从容器的起始边缘开始填充

- end: 所有行从容器的结束边缘开始填充

- flex-start: 所有行从垂直轴起点开始填充。第一行的垂直轴起点边和容器的垂直轴起点边对齐。接下来的每一行紧跟前一行

- flex-end: 所有行从垂直轴末尾开始填充。最后一行的垂直轴起点边和容器的垂直轴起点边对齐。所有后续行与前一个对齐

- center: 所有行朝向容器的中心填充。每行互相紧挨，相对于容器居中对齐。容器的垂直轴起点边和第一行的距离相等于容器的垂直轴终点边和最后一行的距离。

- space-between: 所有行在容器中平均分布。相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的边对齐。

- space-around: 所有行在容器中平均分布，相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的距离是相邻两行间距的一半。

- space-evenly: 所有行沿垂直轴均匀分布在对齐容器内。每对相邻的项之间的间距，主开始边和第一项，以及主结束边和最后一项，都是完全相同的。



### 网格布局

> CSS 网格是一个用于 web 的二维布局系统。利用网格，你可以把内容按照行与列的格式进行排版。另外，网格还能非常轻松地实现一些复杂的布局。关于使用网格进行页面排版，这篇文章包含了你需要的一切知识。



首先，我们通过把容器的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 属性设置为 `grid` ,来定义一个网格。与弹性盒子一样，将父容器改为网格布局后，他的直接子项会变为网格项。

```css
.container {
  display: grid;
}
```

与弹性盒子不同的是，在定义网格后，网页并不会马上发生变化。因为 `display: grid` 的声明只创建了一个只有一列的网格，所以子项还是会像正常布局流那样，自上而下、一个接一个的排布。



**网格宽度**

使用 `grid-template-columns`属性定义每一列的宽度，设置几项就是几列

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

宽度也可使用`fr`定义行和列的大小，个单位代表网格容器中可用空间的一份，宽度可以会随着可用空间变小而变小。

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```



**网格间隙**

使用 [`grid-column-gap` ](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap) 属性来定义列间隙；使用 [`grid-row-gap` ](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap) 来定义行间隙；使用 [`grid-gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) 可以同时设定两者。

```css
.container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-gap: 20px;
}
```

<img src="./assets/image-20230728152946563.png" alt="image-20230728152946563" style="zoom:50%;" />



**重复构建轨道组**

你可以使用`repeat`来重复构建具有某些宽度配置的某些列。举个例子，如果要创建多个等宽轨道，可以用下面的方法。

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
```



**显式网格与隐式网格**

显式网格是我们用 `grid-template-columns` 或 `grid-template-rows` 属性创建的。

隐式网格中生成的行/列大小是参数默认是 `auto` ，大小会根据放入的内容自动调整。当然，你也可以使用[`grid-auto-rows`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-auto-rows)和[`grid-auto-columns`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-auto-columns)属性手动设定隐式网格轨道的大小。

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 20px;
}
```

<img src="./assets/image-20230728154716204.png" alt="image-20230728154716204" style="zoom:50%;" />

  我们还可以使用`grid-auto-rows: minmax(100px, auto)`设置最小值



**自动使用多列填充**

通过设置grid-template-columns属性，我们可以实现这个效果，不过这一次我们会用到 repeat() 函数中的一个关键字auto-fill来替代确定的重复次数。而函数的第二个参数，我们使用minmax()函数来设定一个行/列的最小值，以及最大值 1fr。

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 20px;
}
```

<img src="./assets/image-20230728155400765.png" alt="image-20230728155400765" style="zoom:50%;" />

**元素开始与结束位置**

- grid-column-start 

- grid-column-end 

- grid-row-start 

- grid-row-end 

以上属性可以设定行和列开始与结束位置



缩写形式：

- grid-column

- grid-row

注意开始与结束的线的序号要使用`/`符号分开。



**使用 grid-template-areas 属性放置元素**

另一种往网格放元素的方式是用[`grid-template-areas`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-areas)属性，并且你要命名一些元素并在属性中使用这些名字作为一个区域。

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}

header {
  grid-area: header;
}

article {
  grid-area: content;
}

aside {
  grid-area: sidebar;
}

footer {
  grid-area: footer;
}
```

`grid-template-areas`属性的使用规则如下：

- 你需要填满网格的每个格子
- 对于某个横跨多个格子的元素，重复写上那个元素`grid-area`属性定义的区域名字
- 所有名字只能出现在一个连续的区域，不能在不同的位置出现
- 一个连续的区域必须是一个矩形
- 使用`.`符号，让一个格子留空

### 浮动

> [`float`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float) 属性最初只用于在成块的文本内浮动图像，但是现在它已成为在网页上创建多列布局的最常用工具之一。



float设置left可使元素吸附到左侧，脱离文档流，在正常布局中位于该浮动元素之下的内容，此时会围绕着浮动元素，填满其右侧的空间。

```html
<h1>Simple float example</h1>

<div class="box">Float</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet.
</p>

<p>
  Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
  orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
  ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
  ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et
  a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  float: left;
  margin-right: 15px;
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

<img src="./assets/image-20230728165721510.png" alt="image-20230728165721510" style="zoom:50%;" />



**清除浮动**

我们看到，一个浮动元素会被移出正常文档流，且其他元素会显示在它的下方。如果我们不想让剩余元素也受到浮动元素的影响，我们需要 停止 它；这是通过添加 [`clear`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear) 属性实现的。

可以给其后受影响的的元素设置一下三个值

- `left`：停止任何活动的左浮动
- `right`：停止任何活动的右浮动
- `both`：停止任何活动的左右浮动





其他方式

1）clearfix 小技巧

先向包含浮动内容及其本身的盒子后方插入一些生成的内容，并将生成的内容清除浮动。

```css
.wrapper::after {
  content: "";
  clear: both;
  display: block;
}
```



2）使用 overflow

一个替代的方案是将包裹元素的 `overflow` 属性设置为除 `visible` 外的其他值。

```css
.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  overflow: auto;
}
```

大部分情况下这个技巧都可以奏效，但是可能会出现莫名其妙的滚动条或裁剪阴影，这是使用 overflow 带来的一些副作用。



3）display: flow-root

一个较为现代的方案是使用 `display` 属性的 `flow-root` 值。它可以无需小技巧来创建块格式化上下文（BFC），在使用上没有副作用。

从 `.wrapper` 中移除 `overflow: auto` 规则并添加 `display: flow-root`。如果你的浏览器支持该属性（[支持的浏览器列表](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display#浏览器兼容性)），盒子就会停止浮动。

```css
.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  display: flow-root;
}
```

### 定位

> 定位允许你从正常的文档流布局中取出元素，并使它们具有不同的行为，例如放在另一个元素的上面，或者始终保持在浏览器视窗内的同一位置。



**相对定位**

相对定位是我们将要看的第一个位置类型。它与静态定位非常相似，占据在正常的文档流中，除了你仍然可以修改它的最终位置，包括让它与页面上的其他元素重叠。

```css
position: relative;
```

[`top`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/top), [`bottom`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/bottom), [`left`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/left), 和 [`right`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/right) 来精确指定要将定位元素移动到的位置。

```css
top: 30px;
left: 30px;
```



**绝对定位**

绝对定位的元素不再存在于正常文档布局流中。相反，它坐在它自己的层独立于一切。这意味着我们可以创建不干扰页面上其他元素的位置的隔离的 UI 功能。

```css
position: absolute;
```



哪个元素是绝对定位元素的“包含元素“？这取决于绝对定位元素的父元素的 position 属性。

如果所有的父元素都没有显式地定义 position 属性，那么所有的父元素默认情况下 position 属性都是 static。结果，绝对定位元素会被包含在**初始块容器**中。

我们可以改变**定位上下文** —— 绝对定位的元素的相对位置元素。通过设置其中一个父元素的定位属性 —— 也就是包含绝对定位元素的那个元素

```css
position: relative;
```



**z-index**

当元素开始重叠，什么决定哪些元素出现在其他元素的顶部？

[`z-index`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index) 值影响定位元素位于该轴上的位置；正值将它们移动到堆栈上方，负值将它们向下移动到堆栈中。默认情况下，定位的元素都具有 z-index 为 auto，实际上为 0。

```css
z-index: 1;
```



**固定定位**

还有一种类型的定位覆盖——fixed。这与绝对定位的工作方式完全相同，只有一个主要区别：绝对定位将元素固定在相对于其位置最近的祖先。而固定定位固定元素则是相对于浏览器视口本身。

可以实现回到顶部等功能

```css
position: fixed;
```



**粘性定位**

它允许被定位的元素表现得像相对定位一样，直到它滚动到某个阈值点（例如，从视口顶部起 10 像素）为止，此后它就变得固定了。

```css
position: sticky;
```



### 媒体查询

> **CSS 媒体查询**为你提供了一种应用 CSS 的方法，仅在浏览器和设备的环境与你指定的规则相匹配的时候 CSS 才会真的被应用

```css
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
```

它由以下部分组成：

- 一个媒体类型，告诉浏览器这段代码是用在什么类型的媒体上的（例如印刷品或者屏幕）；
- 一个媒体表达式，是一个被包含的 CSS 生效所需的规则或者测试；
- 一组 CSS 规则，会在测试通过且媒体类型正确的时候应用。



你可以指定的媒体类型为：

| all    | 用于所有媒体类型设备。                   |
| ------ | ---------------------------------------- |
| print  | 用于打印机。                             |
| screen | 用于计算机屏幕、平板电脑、智能手机等等。 |
| speech | 用于大声“读出”页面的屏幕阅读器。         |



下面的例子在视口宽度为 480 像素或更宽时将背景颜色更改为浅绿色（如果视口小于 480 像素，则背景颜色会是粉色）：

```css
@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}
```

