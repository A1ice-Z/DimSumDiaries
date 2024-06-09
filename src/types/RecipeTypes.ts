export type RecipeType = {
    id: string,
    ingredients: IngredientsType[],
    directions: DirectionType[],
    time: number,
    image: string,
    title: string
}

export type IngredientsType = {
    title: string,
    content: IngredientType[]
}

export type IngredientType = {
    title: string,
    amount: number,
    type: MeasureType
}

type MeasureType = {
    measure: "ml" | "l" | "dl" | "g" | "kg" | "tbs" | "ts" | ""
}

export type DirectionType = {
    title: string,
    content: string[]
}