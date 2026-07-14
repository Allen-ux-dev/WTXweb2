#!/bin/zsh

# 快速新建文件 Pro 3.1
# 起始页显示：基本文件 + Microsoft Office + 更多文件入口
# Office 文件只创建空白占位文件 + 后缀名，避免乱码

get_finder_folder() {
  osascript <<'APPLESCRIPT'
tell application "Finder"
  if (count of Finder windows) > 0 then
    set theFolder to target of front Finder window as alias
    return POSIX path of theFolder
  else
    return POSIX path of (path to desktop folder)
  end if
end tell
APPLESCRIPT
}

safe_name() {
  printf "%s" "$1" | sed 's/[\/:*?"<>|]/-/g'
}

append_ext() {
  local name="$1"
  local ext="$2"

  if [[ "$name" == *."$ext" ]]; then
    echo "$name"
  else
    echo "$name.$ext"
  fi
}

unique_file_path() {
  local dir="$1"
  local name="$2"
  local path="$dir/$name"

  if [[ ! -e "$path" ]]; then
    echo "$path"
    return
  fi

  local stem suffix

  if [[ "$name" == .* && "$name" != *.*.* ]]; then
    stem="$name"
    suffix=""
  elif [[ "$name" == *.* && "$name" != .* ]]; then
    stem="${name%.*}"
    suffix=".${name##*.}"
  else
    stem="$name"
    suffix=""
  fi

  local count=1

  while [[ -e "$dir/$stem $count$suffix" ]]; do
    count=$((count + 1))
  done

  echo "$dir/$stem $count$suffix"
}

unique_folder_path() {
  local dir="$1"
  local name="$2"
  local path="$dir/$name"

  if [[ ! -e "$path" ]]; then
    echo "$path"
    return
  fi

  local count=1

  while [[ -e "$dir/$name $count" ]]; do
    count=$((count + 1))
  done

  echo "$dir/$name $count"
}

show_notification() {
  local created="$1"
  export QNF_CREATED="$created"

  osascript <<'APPLESCRIPT'
set createdName to system attribute "QNF_CREATED"
display notification ("已创建：" & createdName) with title "快速新建文件"
APPLESCRIPT
}

show_error() {
  local msg="$1"
  export QNF_ERROR="$msg"

  osascript <<'APPLESCRIPT'
set errorMessage to system attribute "QNF_ERROR"
display dialog errorMessage buttons {"好"} default button "好" with title "快速新建文件" with icon caution
APPLESCRIPT
}

finish_item() {
  local path="$1"

  chmod -R u+rwX "$path" 2>/dev/null

  case "$ACTION" in
    "显示在 Finder")
      open -R "$path"
      ;;
    "打开文件/文件夹")
      open "$path"
      ;;
    "复制路径")
      printf "%s" "$path" | pbcopy
      ;;
  esac

  show_notification "$(basename "$path")"
  exit 0
}

create_empty_file() {
  local file_name="$1"
  local path

  path=$(unique_file_path "$TARGET_DIR" "$file_name")
  : > "$path"

  if [[ "$file_name" == *.sh ]]; then
    chmod +x "$path" 2>/dev/null
  fi

  finish_item "$path"
}

create_text_file() {
  local file_name="$1"
  local content="$2"
  local path

  path=$(unique_file_path "$TARGET_DIR" "$file_name")
  printf "%s" "$content" > "$path"

  if [[ "$file_name" == *.sh ]]; then
    chmod +x "$path" 2>/dev/null
  fi

  finish_item "$path"
}

create_clipboard_file() {
  local file_name="$1"
  local path

  path=$(unique_file_path "$TARGET_DIR" "$file_name")
  pbpaste > "$path"

  finish_item "$path"
}

# 获取目标文件夹
if [[ -n "$1" ]]; then
  if [[ -d "$1" ]]; then
    TARGET_DIR="$1"
  else
    TARGET_DIR="$(dirname "$1")"
  fi
else
  TARGET_DIR="$(get_finder_folder)"
fi

if [[ ! -d "$TARGET_DIR" ]]; then
  show_error "目标位置不是文件夹。"
  exit 1
fi

if [[ ! -w "$TARGET_DIR" ]]; then
  show_error "当前文件夹没有写入权限，请换一个位置，或者检查文件夹权限。"
  exit 1
fi

# 起始页：基本文件 + Microsoft 文件 + 更多文件入口
CHOICE=$(osascript <<'APPLESCRIPT'
set startItems to {¬
"Text 文件 (.txt)", ¬
"Markdown 文件 (.md)", ¬
"今日笔记 (.md)", ¬
"README 文件 (README.md)", ¬
"RTF 富文本 (.rtf)", ¬
"CSV 表格 (.csv)", ¬
"Word 文档 (.docx，占位空白)", ¬
"Excel 表格 (.xlsx，占位空白)", ¬
"PowerPoint 演示 (.pptx，占位空白)", ¬
"更多文件…"¬
}

set selectedItem to choose from list startItems with title "快速新建文件" with prompt "选择要创建的文件：" default items {"Text 文件 (.txt)"}

if selectedItem is false then
  return "CANCEL"
else
  return item 1 of selectedItem
end if
APPLESCRIPT
)

if [[ "$CHOICE" == "CANCEL" ]]; then
  exit 0
fi

# 更多文件入口
if [[ "$CHOICE" == "更多文件…" ]]; then
  CATEGORY=$(osascript <<'APPLESCRIPT'
set categories to {¬
"代码开发", ¬
"配置文件", ¬
"剪贴板保存", ¬
"文件夹 / 项目模板", ¬
"自定义后缀"¬
}

set selectedCategory to choose from list categories with title "更多文件" with prompt "选择分类：" default items {"代码开发"}

if selectedCategory is false then
  return "CANCEL"
else
  return item 1 of selectedCategory
end if
APPLESCRIPT
)

  if [[ "$CATEGORY" == "CANCEL" ]]; then
    exit 0
  fi

  case "$CATEGORY" in
    "代码开发")
      CHOICE=$(osascript <<'APPLESCRIPT'
set itemsList to {¬
"HTML 空白文件 (.html)", ¬
"HTML 模板文件 (.html)", ¬
"CSS 文件 (.css)", ¬
"JavaScript 文件 (.js)", ¬
"TypeScript 文件 (.ts)", ¬
"Python 文件 (.py)", ¬
"Swift 文件 (.swift)", ¬
"Java 文件 (.java)", ¬
"C 文件 (.c)", ¬
"C++ 文件 (.cpp)", ¬
"Header 文件 (.h)", ¬
"Shell 脚本空白文件 (.sh)", ¬
"Shell 脚本模板文件 (.sh)"¬
}

set selectedItem to choose from list itemsList with title "代码开发" with prompt "选择类型：" default items {"HTML 空白文件 (.html)"}

if selectedItem is false then
  return "CANCEL"
else
  return item 1 of selectedItem
end if
APPLESCRIPT
)
      ;;

    "配置文件")
      CHOICE=$(osascript <<'APPLESCRIPT'
set itemsList to {¬
"JSON 文件 (.json)", ¬
"XML 文件 (.xml)", ¬
"YAML 文件 (.yml)", ¬
"Property List 文件 (.plist)", ¬
"SQL 文件 (.sql)", ¬
".env 文件", ¬
".gitignore 空白文件", ¬
".gitignore 常用模板", ¬
"Dockerfile", ¬
"Makefile", ¬
"Log 文件 (.log)"¬
}

set selectedItem to choose from list itemsList with title "配置文件" with prompt "选择类型：" default items {"JSON 文件 (.json)"}

if selectedItem is false then
  return "CANCEL"
else
  return item 1 of selectedItem
end if
APPLESCRIPT
)
      ;;

    "剪贴板保存")
      CHOICE=$(osascript <<'APPLESCRIPT'
set itemsList to {¬
"剪贴板保存为 Text (.txt)", ¬
"剪贴板保存为 Markdown (.md)", ¬
"剪贴板保存为 HTML (.html)", ¬
"剪贴板保存为 JSON (.json)"¬
}

set selectedItem to choose from list itemsList with title "剪贴板保存" with prompt "选择类型：" default items {"剪贴板保存为 Text (.txt)"}

if selectedItem is false then
  return "CANCEL"
else
  return item 1 of selectedItem
end if
APPLESCRIPT
)
      ;;

    "文件夹 / 项目模板")
      CHOICE=$(osascript <<'APPLESCRIPT'
set itemsList to {¬
"普通文件夹", ¬
"日期文件夹", ¬
"Web 项目文件夹", ¬
"Python 项目文件夹", ¬
"Swift 练习文件夹", ¬
"学校作业文件夹"¬
}

set selectedItem to choose from list itemsList with title "文件夹" with prompt "选择类型：" default items {"普通文件夹"}

if selectedItem is false then
  return "CANCEL"
else
  return item 1 of selectedItem
end if
APPLESCRIPT
)
      ;;

    "自定义后缀")
      CHOICE="自定义后缀文件"
      ;;
  esac
fi

if [[ "$CHOICE" == "CANCEL" || -z "$CHOICE" ]]; then
  exit 0
fi

# 默认名称
DEFAULT_NAME="Untitled"

case "$CHOICE" in
  "今日笔记 (.md)")
    DEFAULT_NAME="$(date '+%Y-%m-%d')"
    ;;
  "README 文件 (README.md)")
    DEFAULT_NAME="README"
    ;;
  ".env 文件")
    DEFAULT_NAME=".env"
    ;;
  ".gitignore 空白文件"|".gitignore 常用模板")
    DEFAULT_NAME=".gitignore"
    ;;
  "Dockerfile")
    DEFAULT_NAME="Dockerfile"
    ;;
  "Makefile")
    DEFAULT_NAME="Makefile"
    ;;
  "日期文件夹")
    DEFAULT_NAME="$(date '+%Y-%m-%d')"
    ;;
  "Web 项目文件夹")
    DEFAULT_NAME="Web Project"
    ;;
  "Python 项目文件夹")
    DEFAULT_NAME="Python Project"
    ;;
  "Swift 练习文件夹")
    DEFAULT_NAME="Swift Practice"
    ;;
  "学校作业文件夹")
    DEFAULT_NAME="School Assignment"
    ;;
esac

export QNF_DEFAULT_NAME="$DEFAULT_NAME"

# 输入名称
RAW_NAME=$(osascript <<'APPLESCRIPT'
set defaultName to system attribute "QNF_DEFAULT_NAME"
if defaultName is "" then set defaultName to "Untitled"

set userInput to display dialog "请输入名称：" default answer defaultName buttons {"取消", "创建"} default button "创建" with title "快速新建文件"

if button returned of userInput is "取消" then
  return "CANCEL"
else
  return text returned of userInput
end if
APPLESCRIPT
)

if [[ "$RAW_NAME" == "CANCEL" ]]; then
  exit 0
fi

NAME=$(safe_name "$RAW_NAME")

if [[ -z "$NAME" ]]; then
  NAME="$DEFAULT_NAME"
fi

# 完成后操作
ACTION=$(osascript <<'APPLESCRIPT'
set resultButton to button returned of (display dialog "创建完成后：" buttons {"复制路径", "显示", "只创建"} default button "只创建" with title "完成")

if resultButton is "显示" then
  return "显示在 Finder"
else if resultButton is "复制路径" then
  return "复制路径"
else
  return "只创建"
end if
APPLESCRIPT
)

if [[ -z "$ACTION" ]]; then
  ACTION="只创建"
fi

# 文件夹 / 项目模板
case "$CHOICE" in
  "普通文件夹")
    FOLDER_PATH=$(unique_folder_path "$TARGET_DIR" "$NAME")
    mkdir -p "$FOLDER_PATH"
    finish_item "$FOLDER_PATH"
    ;;

  "日期文件夹")
    FOLDER_PATH=$(unique_folder_path "$TARGET_DIR" "$NAME")
    mkdir -p "$FOLDER_PATH"
    finish_item "$FOLDER_PATH"
    ;;

  "Web 项目文件夹")
    FOLDER_PATH=$(unique_folder_path "$TARGET_DIR" "$NAME")
    mkdir -p "$FOLDER_PATH/assets" "$FOLDER_PATH/images" "$FOLDER_PATH/scripts" "$FOLDER_PATH/styles"

    cat > "$FOLDER_PATH/index.html" <<EOF
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>$NAME</title>
  <link rel="stylesheet" href="styles/style.css">
</head>
<body>
  <h1>$NAME</h1>
  <script src="scripts/script.js"></script>
</body>
</html>
EOF

    cat > "$FOLDER_PATH/styles/style.css" <<'EOF'
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
EOF

    cat > "$FOLDER_PATH/scripts/script.js" <<'EOF'
console.log("Hello, Web!");
EOF

    cat > "$FOLDER_PATH/README.md" <<EOF
# $NAME

Web project created by Quick New File.
EOF

    finish_item "$FOLDER_PATH"
    ;;

  "Python 项目文件夹")
    FOLDER_PATH=$(unique_folder_path "$TARGET_DIR" "$NAME")
    mkdir -p "$FOLDER_PATH"

    cat > "$FOLDER_PATH/main.py" <<'EOF'
def main():
    print("Hello, Python!")

if __name__ == "__main__":
    main()
EOF

    cat > "$FOLDER_PATH/requirements.txt" <<'EOF'
EOF

    cat > "$FOLDER_PATH/README.md" <<EOF
# $NAME

Python project created by Quick New File.
EOF

    cat > "$FOLDER_PATH/.gitignore" <<'EOF'
__pycache__/
*.pyc
.env
.venv/
.DS_Store
EOF

    finish_item "$FOLDER_PATH"
    ;;

  "Swift 练习文件夹")
    FOLDER_PATH=$(unique_folder_path "$TARGET_DIR" "$NAME")
    mkdir -p "$FOLDER_PATH"

    cat > "$FOLDER_PATH/main.swift" <<'EOF'
import Foundation

print("Hello, Swift!")
EOF

    cat > "$FOLDER_PATH/README.md" <<EOF
# $NAME

Swift practice project created by Quick New File.
EOF

    finish_item "$FOLDER_PATH"
    ;;

  "学校作业文件夹")
    FOLDER_PATH=$(unique_folder_path "$TARGET_DIR" "$NAME")
    mkdir -p "$FOLDER_PATH/Drafts" "$FOLDER_PATH/Sources" "$FOLDER_PATH/Final"

    cat > "$FOLDER_PATH/README.md" <<EOF
# $NAME

## To Do

- [ ] Read the instructions
- [ ] Make an outline
- [ ] Write the draft
- [ ] Check grammar
- [ ] Submit final version
EOF

    finish_item "$FOLDER_PATH"
    ;;
esac

# 自定义后缀
if [[ "$CHOICE" == "自定义后缀文件" ]]; then
  RAW_EXT=$(osascript <<'APPLESCRIPT'
set userInput to display dialog "请输入后缀名，例如：vue、ini、toml、conf" default answer "vue" buttons {"取消", "创建"} default button "创建" with title "自定义后缀"

if button returned of userInput is "取消" then
  return "CANCEL"
else
  return text returned of userInput
end if
APPLESCRIPT
)

  if [[ "$RAW_EXT" == "CANCEL" ]]; then
    exit 0
  fi

  EXT=$(printf "%s" "$RAW_EXT" | sed 's/^\.//' | sed 's/[\/:*?"<>| ]//g')

  if [[ -z "$EXT" ]]; then
    FILE_NAME="$NAME"
  else
    FILE_NAME=$(append_ext "$NAME" "$EXT")
  fi

  create_empty_file "$FILE_NAME"
fi

# 单文件
case "$CHOICE" in
  "Text 文件 (.txt)")
    create_empty_file "$(append_ext "$NAME" "txt")"
    ;;

  "Markdown 文件 (.md)")
    create_empty_file "$(append_ext "$NAME" "md")"
    ;;

  "今日笔记 (.md)")
    create_empty_file "$(append_ext "$NAME" "md")"
    ;;

  "README 文件 (README.md)")
    create_empty_file "README.md"
    ;;

  "RTF 富文本 (.rtf)")
    create_empty_file "$(append_ext "$NAME" "rtf")"
    ;;

  "CSV 表格 (.csv)")
    create_empty_file "$(append_ext "$NAME" "csv")"
    ;;

  "Word 文档 (.docx，占位空白)")
    create_empty_file "$(append_ext "$NAME" "docx")"
    ;;

  "Excel 表格 (.xlsx，占位空白)")
    create_empty_file "$(append_ext "$NAME" "xlsx")"
    ;;

  "PowerPoint 演示 (.pptx，占位空白)")
    create_empty_file "$(append_ext "$NAME" "pptx")"
    ;;

  "HTML 空白文件 (.html)")
    create_empty_file "$(append_ext "$NAME" "html")"
    ;;

  "HTML 模板文件 (.html)")
    create_text_file "$(append_ext "$NAME" "html")" "<!DOCTYPE html>
<html lang=\"zh-CN\">
<head>
  <meta charset=\"UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  <title>$NAME</title>
</head>
<body>

</body>
</html>
"
    ;;

  "CSS 文件 (.css)")
    create_empty_file "$(append_ext "$NAME" "css")"
    ;;

  "JavaScript 文件 (.js)")
    create_empty_file "$(append_ext "$NAME" "js")"
    ;;

  "TypeScript 文件 (.ts)")
    create_empty_file "$(append_ext "$NAME" "ts")"
    ;;

  "Python 文件 (.py)")
    create_empty_file "$(append_ext "$NAME" "py")"
    ;;

  "Swift 文件 (.swift)")
    create_empty_file "$(append_ext "$NAME" "swift")"
    ;;

  "Java 文件 (.java)")
    create_empty_file "$(append_ext "$NAME" "java")"
    ;;

  "C 文件 (.c)")
    create_empty_file "$(append_ext "$NAME" "c")"
    ;;

  "C++ 文件 (.cpp)")
    create_empty_file "$(append_ext "$NAME" "cpp")"
    ;;

  "Header 文件 (.h)")
    create_empty_file "$(append_ext "$NAME" "h")"
    ;;

  "Shell 脚本空白文件 (.sh)")
    create_empty_file "$(append_ext "$NAME" "sh")"
    ;;

  "Shell 脚本模板文件 (.sh)")
    create_text_file "$(append_ext "$NAME" "sh")" "#!/bin/zsh

"
    ;;

  "JSON 文件 (.json)")
    create_empty_file "$(append_ext "$NAME" "json")"
    ;;

  "XML 文件 (.xml)")
    create_empty_file "$(append_ext "$NAME" "xml")"
    ;;

  "YAML 文件 (.yml)")
    create_empty_file "$(append_ext "$NAME" "yml")"
    ;;

  "Property List 文件 (.plist)")
    create_empty_file "$(append_ext "$NAME" "plist")"
    ;;

  "SQL 文件 (.sql)")
    create_empty_file "$(append_ext "$NAME" "sql")"
    ;;

  ".env 文件")
    create_empty_file ".env"
    ;;

  ".gitignore 空白文件")
    create_empty_file ".gitignore"
    ;;

  ".gitignore 常用模板")
    create_text_file ".gitignore" ".DS_Store
node_modules/
.env
dist/
build/
*.log
__pycache__/
*.pyc
.venv/
"
    ;;

  "Dockerfile")
    create_empty_file "Dockerfile"
    ;;

  "Makefile")
    create_empty_file "Makefile"
    ;;

  "Log 文件 (.log)")
    create_empty_file "$(append_ext "$NAME" "log")"
    ;;

  "剪贴板保存为 Text (.txt)")
    create_clipboard_file "$(append_ext "$NAME" "txt")"
    ;;

  "剪贴板保存为 Markdown (.md)")
    create_clipboard_file "$(append_ext "$NAME" "md")"
    ;;

  "剪贴板保存为 HTML (.html)")
    create_clipboard_file "$(append_ext "$NAME" "html")"
    ;;

  "剪贴板保存为 JSON (.json)")
    create_clipboard_file "$(append_ext "$NAME" "json")"
    ;;
esac

show_error "没有匹配到文件类型，请检查脚本。"
exit 1