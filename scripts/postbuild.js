import * as fs from 'fs';
import * as path from 'path';

const libIndexPath = path.resolve('lib/index.d.ts');

// 需要添加到 lib/index.d.ts 开头的三斜杠引用
const references = `/// <reference types="@webgpu/types" />

/// <reference types="./debug.d.ts" />
/// <reference types="./shader.d.ts" />

`;

let content = fs.readFileSync(libIndexPath, 'utf8');

// 在文件开头添加引用
content = references + content;

fs.writeFileSync(libIndexPath, content, 'utf8');

console.log('已添加三斜杠引用到 lib/index.d.ts');

// 复制 debug.d.ts 和 shader.d.ts 到 lib 目录
const filesToCopy = ['debug.d.ts', 'shader.d.ts'];

for (const file of filesToCopy)
{
    const srcPath = path.resolve('src', file);
    const destPath = path.resolve('lib', file);

    fs.copyFileSync(srcPath, destPath);
    console.log(`已复制 ${file} 到 lib 目录`);
}

