export interface action {
    type?: string,
    payload?: any,
}

export interface product {
    id: number,
    title: string,
    description: string,
    image: string,
    price: string,
    material: string,
    sub_category: string,
    main_category:  string
}

export interface paramsGetListProduct {
    
}