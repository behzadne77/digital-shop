// app/api/categories/route.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(request: NextRequest) {
    try {
        const categories = await prisma.category.findMany({
            where: { parentId: null },
            include: { children: true },
        });

        return NextResponse.json(categories);
    } catch (error) {
        return NextResponse.json({ message: 'مشکلی در دریافت دسته‌بندی‌ها پیش آمده است.' }, { status: 500 });
    }
}