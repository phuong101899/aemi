export interface Category {
    category_code: string,
    category_name: string
}

export interface Brand {
    brand_code: string,
    brand_name: string,
    brand_short_description: string,
}

export interface Product {
    brand: string,
    category_code: string,
    category_name: string,
    discount_percentage: string,
    product_id: string,
    price_currency: string,
    brand_code: string,
    product_name: string,
    size: string,
    supplier_code: string,
    supplier_name: string,
    stock_quantity: number,
    discounted_price: string,
    original_price: string,
    thumbnail: string,
    official_store: boolean
}