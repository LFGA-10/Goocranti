import fs from 'fs';
import path from 'path';

function getPngDimensions(filePath) {
    const fd = fs.openSync(filePath, 'r');
    const buffer = Buffer.alloc(24);
    fs.readSync(fd, buffer, 0, 24, 0);
    fs.closeSync(fd);

    if (buffer.toString('hex', 0, 8) === '89504e470d0a1a0a') {
        const width = buffer.readUInt32BE(16);
        const height = buffer.readUInt32BE(20);
        return { width, height };
    }
    return null;
}

const dir = 'c:/Users/HP/Documents/PROJECT/GOOCRANTI/public/images';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png')).sort();

for (const file of files) {
    const p = path.join(dir, file);
    const dims = getPngDimensions(p);
    const size = fs.statSync(p).size;
    console.log(`${file}: ${dims ? dims.width + 'x' + dims.height : 'unknown'} - ${size} bytes`);
}
