export interface action {
    type?: string,
    payload?: any,
}

export interface product {
    id: number,
    title: string,
    description: string,
    main_image: string,
    other_image?: Array<string>,
    price: string,
    material: string,
    sub_category: string,
    main_category:  string,
    slug: string,
    model: string,
}

export interface category {
    id: number,
    name: string,
    description?: string,
    image: string,
    href: string
    sub_category: Array<any>
}
