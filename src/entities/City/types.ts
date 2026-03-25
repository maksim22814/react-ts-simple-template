// entities/City/types.ts
export type CityType = "мегаполис" | "крупный" | "средний" | "малый";

export const getCityTypeByPopulation = (population: number): CityType => {
    if (population >= 1_000_000) return "мегаполис";
    if (population >= 250_000) return "крупный";
    if (population >= 50_000) return "средний";
    return "малый";
};