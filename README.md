# 🎬 TypeWriter-Effect

A lightweight, customizable JavaScript **Typewriter Effect** to enhance your websites with engaging animated text.  
Easily add a typing and erasing animation using just a CDN script and HTML attributes — no additional setup required.

---

## 🚀 Features

- ✍️ Type and erase multiple sentences with custom speed  
- 🎨 Fully customizable: font size, color, weight, family, style  
- ⚡ Lightweight — just plug in via CDN and go  
- 🔁 Looping animation with configurable delays  

---

## 📦 CDN Integration

Embed this script inside the `<body>` tag of your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/DJ-InfinityCoder/TypeWriter-Effect/TypeWriter.js"
    targetElementId="typewriter"
    sentences='[
        "Hello, World!",
        "This is a typewriting effect.",
        "You can add more sentences here.",
        "Make sure they are interesting!",
        "And they will appear one after another."
    ]'
    color="blue"
    typingSpeed="100"
    eraseSpeed="50"
    delayBeforeErasing="1500"
    delayBeforeTypingNext="500"
    fontSize="28px"
    fontWeight="bold"
    fontStyle="italic"
    fontFamily="Arial, sans-serif">
</script>
```

> 💡 Use `targetElementId` or `targetElementClass` to apply effect to any HTML element.

---

## 🧪 Full HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typewriter Effect</title>
    <style>
        .type-box {
            display: inline-flex;
        }
        .name {
            font-size: 28px;
            padding-right: 10px;
        }
    </style>
</head>
<body>
    <div class="type-box">
        <div class="name">From DJ-InfinityCoder:</div>
        <div id="typewriter"></div>
    </div>
    <script src="https://cdn.jsdelivr.net/gh/DJ-InfinityCoder/TypeWriter-Effect/TypeWriter.js"
        targetElementId="typewriter"
        sentences='[
            "Hello, World!",
            "This is a typewriting effect.",
            "You can add more sentences here.",
            "Make sure they are interesting!",
            "And they will appear one after another."
        ]'
        color="blue"
        typingSpeed="100"
        eraseSpeed="50"
        delayBeforeErasing="1500"
        delayBeforeTypingNext="500"
        fontSize="28px"
        fontWeight="bold"
        fontStyle="italic"
        fontFamily="Arial, sans-serif">
    </script>
</body>
</html>
```

---

## 📄 How It Works

The script auto-detects its own attributes (like speed, font, color, etc.) and injects the typewriter animation into the target element.

You can use either:
- `targetElementId="yourId"` **or**
- `targetElementClass="yourClass"`

If neither is provided, it defaults to a div with `id="typewriter"`.

---

## 👨‍💻 Author

Made with ❤️ by [DJ-InfinityCoder](https://github.com/DJ-InfinityCoder)

---

## 📜 License

MIT License — feel free to use, modify, and share.
