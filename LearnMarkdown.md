# Markdown

We will be covering (GitHub Flavoured Markdown) GFM

## Headings [H1 - H6]

---

The hash (#) character is used to signify a heading. The number of hashes match the level of the header tag. Equal(=) and dash(-) can also be used for Header 1 and Header 2 respectively as shown below:

# Heading 1

Heading 1
===

## Heading 2

Heading 2
---

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

## Paragraphs

---

To create a paragraph, use a full blank line to seperate the paragraphs or else Markdown will concatenate the two into one paragraph or one sentence as seen below:

Cupcake ipsum dolor sit amet chupa chups macaroon caramels marshmallow. -- these 2 are joined --
Croissant danish brownie jelly beans jujubes gummi bears gummies.

Sesame snaps cookie cheesecake carrot cake. Gingerbread tiramisu lemon drops soufflé. Pudding pastry dragée oat cake macaroon.

## Text Decoration

Bold (2 asterix \*\* or 2 underscores \_\_) on both side

Yo!, **Bold move**. Really? Yes, very **bold**

Italic (1 asterix \* or 1 underscores \_) on both side

_I get down too_. How much down? Very _down_

Strikethrough (2 tildes) on both sides

One ~~strike~~ and you are out!

I suggest you use the asterix for BOLD and underscore for italic, makes your markdown more readable.

## Linking

Angle brackets (<>) will make the wrapped text a link

<http://www.yeisane.co.za>

Square brackets [ ]\( ) banana of the box. The title tag is optional and added using a string in double-quotes

[The Code Hog](http://www.yeisane.co.za "Hogging all bugs")

For a cleaner links or long URLS, use 2 sets of square brakets \[ \]\[ \]. This allows you to put the url in a "variable" and reference it in the second set of square brackets. This variable can be a number or word. Lets see it:

[The Code Hog][hog]

Now lets define the [hog] "variable" like this:

[hog]: http://www.yeisane.co.za 

The above line won't show in the rendered HTML.

## Images

Use BANG! Square brackets [ ]\( ) banana out of the box. The alternate text goes inside the square brackets and the link inside the parenthesis (banana). Sad you can resize the image size so you are stuck with the \<img> tag is you need to resize.

![We got pics](https://picsum.photos/200)

We can also use the double square braket sets with a variable like this:

![Another pic][1]

[1]: https://picsum.photos/200

## Lists

### Unordered lists

Use either one of these three (asterix (*),minus(-), plus(+)) before the text to create a bulleted list.

- C++
* C#
+ Java

### Ordered lists

I advise you to put the number one (1) with a period(.) on every item and the browser will render a list:

1. Object-oriented
1. Inheritence
1. Polymophism

### Sub-items

To create subitems, just indent the item under the parent item:

- C#
  - Java on steroids
- C++
  - Grandpa with super powers
  - You can inherit bugs from grandpa

 
## Blockquotes and HR

Horizontal Rule [ \<hr/> ]

Three dashes (---) or three equal signs(===) will give you a horizontal rule. Just make they are not put immediately under some text or it will produce either Header 1 or Header 2

---

Blockquotes [ \<blockquote> ]

Start the sentence with a greater-than-sign/chevron to create block quotes. Use a blank chevron to seperate sentences without leaving gaps in between:

> A clear conscience is the sure sign of a bad memory.
>
> by Mark Twain


## Highlight that code

Code highlighting can be achieved using 3 backticks (```) to open and close the code block. An optional language helps highlight the code based on language.

```c++
const int i = 1;
const int j = 2;
struct x
{
   int x;
};
namespace y
{
   int i[i];
   int j = j;
   x x;
   int y::y = x.x;
};
```

### What's the DIFF-erence

To document code changes in markdown like a hog, showing what changed, use diff as the language specifier and a plus(+) for what was added or minus(-) for deletions. Note: doesn't work when the plus or minus are indented.

```diff
- const int i = 1;
+ const int useless = 100
const int j = 2;
struct x
{
   int x;
};
```

### Falling INLINE-ing
To add inline code, use a single backtick to surround the code snippet.

Express router uses `app.get('/', (req, res) => {}` to create a get entry point.

## Tables

Surround and seperate vertical content with the pipe (|) character. To create table headers (\<th>), use dashes (---) underneath the headers also seperated by the pipe character. To change the alignment of the content in the table, add colons (:) to the dashes.

Left align, put colons at the beginning (:---), 
Right align, put the colons to the right (---:) and for 
Center align, put colons on both sides (:---:)

|Joke|Type|Number of Likes|
|:---|:---:|---:|
|A blind man walks into a bar. And a table. And a door. And a staircase.|Nasty|90|
|What’s the difference between a man and a table. The table doesn’t cry when I break it’s legs|Extremely Evil|60000|
|My kitchen was rearranged today. The tables have turned and the steaks are higher.|Kitchen|50|

## Emoji

Some Markdown applications do allow you to use emoji shortcodes. These start and end with a colon. For a full list, check this link : https://gist.github.com/rxaviers/7360908

Write code that you will :heartpulse: and not :shit: all over your codebase :cry:.
