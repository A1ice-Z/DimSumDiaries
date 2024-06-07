export type RecipeType = {
    ingredients: IngredientsType,
    directions: DirectionType,
    time: number
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
    measure: "ml" | "l" | "dl" | "l" | "g" | "kg"
}

export type DirectionType = {
    title: string,
    content: string[]
}