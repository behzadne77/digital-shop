// app/api/categories/route.ts

import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
    try {
        const categories = await prisma.category.findMany({
            where: { parentId: null },
            include: { children: true },
        });

        return NextResponse.json(categories);
    } catch (e) {
        return NextResponse.json({ message: 'مشکلی در دریافت دسته‌بندی‌ها پیش آمده است.', e: e }, { status: 500 });
    }
}