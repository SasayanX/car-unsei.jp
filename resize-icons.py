#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
アイコン画像を各サイズにリサイズするスクリプト
"""

from PIL import Image
import os

# 元画像のパス
source_image = "public/icon-512x512.png"

# リサイズするサイズと出力ファイル名のリスト
sizes = [
    (512, "public/icon-512x512.png"),
    (384, "public/icon-384x384.png"),
    (192, "public/icon-192x192.png"),
    (152, "public/icon-152x152.png"),
    (144, "public/icon-144x144.png"),
    (128, "public/icon-128x128.png"),
    (96, "public/icon-96x96.png"),
    (72, "public/icon-72x72.png"),
    (180, "public/apple-touch-icon.png"),
]

def resize_icon(source_path, output_path, size):
    """画像をリサイズして保存"""
    try:
        # 画像を開く
        img = Image.open(source_path)
        
        # RGBA形式に変換（透過対応）
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        # 高品質リサイズ（Lanczos法）
        resized_img = img.resize((size, size), Image.Resampling.LANCZOS)
        
        # 保存
        resized_img.save(output_path, 'PNG', optimize=True)
        print(f"[OK] {output_path} ({size}x{size}px)")
        
    except Exception as e:
        print(f"[ERROR] {output_path} - {str(e)}")

def main():
    print("=" * 60)
    print("Icon Resize Tool - car-unsei.jp")
    print("=" * 60)
    print()
    
    # 元画像の存在確認
    if not os.path.exists(source_image):
        print(f"ERROR: {source_image} not found")
        print("   Please place public/icon-512x512.png")
        return
    
    # 元画像の情報表示
    img = Image.open(source_image)
    print(f"Source: {source_image}")
    print(f"Size: {img.width}x{img.height}px")
    print(f"Mode: {img.mode}")
    print()
    
    # 各サイズにリサイズ
    print("Resizing...")
    print()
    
    for size, output_path in sizes:
        resize_icon(source_image, output_path, size)
    
    print()
    print("=" * 60)
    print("COMPLETE! All icons generated successfully")
    print("=" * 60)
    print()
    print("Generated files:")
    for _, output_path in sizes:
        if os.path.exists(output_path):
            file_size = os.path.getsize(output_path) / 1024
            print(f"   - {output_path} ({file_size:.1f}KB)")

if __name__ == "__main__":
    main()
