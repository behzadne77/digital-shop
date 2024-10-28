"use client"
import {useEffect, useState} from "react";
import {meta} from "eslint-plugin-react/lib/rules/jsx-props-no-spread-multi";
import category = meta.docs.category;
import {Image} from "antd";

type Category = {
    id: number;
    name: string;
    imageUrl?: string;
    children?: Category[];
};
export default function HomeCategories() {
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        fetch('/api/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);
    return (
        <section className={"mt-14"}>
            <section>
                <span className={"flex items-center gap-1 text-sm text-blue-500 font-bold"}>
                    <i className={"isax isax-element-3 p-2 bg-blue-500 text-white rounded-lg"} />
                    CATEGORIES
                </span>
                <h1 className={"mt-5 text-xl text-dark-800 font-bold"}>
                    BROWSE BY CATEGORY
                </h1>
            </section>
            <section className={"mt-8 grid grid-cols-5 gap-10"}>
            { categories.map(category=> (
                <section key={category.id} className={"shadow-[0px_4px_10px_0px_#00497E2B] p-5 rounded-lg text-center"}>
                    <Image alt={category.name} src={category.imageUrl} className={"h-16"} preview={false} />
                    <h1 className={"mt-3 text-base font-bold"}>{ category.name }</h1>
                </section>
            ))}
            </section>
        </section>
    )
}